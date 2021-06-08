
import { NextPage } from 'next'
import { ApolloClient, InMemoryCache, gql,HttpLink ,ApolloLink,concat} from '@apollo/client';
import {ProductResults} from '../components/common/ProductResults'
import { ResultList } from '../types'
import React from 'react'

type Props = {
  products: ResultList[]
}

const Index: NextPage<Props> = ({products}) => {
  return(
    <ProductResults results={products}/>
  )
};

Index.getInitialProps = async  ()=> { 
const httpLink = new HttpLink({ uri: 'https://dev-cloudshelf.myshopify.com/api/graphql' });
const authMiddleware = new ApolloLink((operation, forward) => {
  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      'X-Shopify-Storefront-Access-Token': 'e78aab9ceb653dc9c6748c32da2bc114'
    }
  }));

  return forward(operation);
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink),
});

  const { data } = await client.query({
    query: gql`
    query {
      shop {
        name
        products (first: 24) {
          pageInfo {
            hasNextPage
            hasPreviousPage
          }
          edges {
            cursor
            node {
              id
              title
              descriptionHtml
              images(first:1,maxWidth:400,maxHeight:225) {
                pageInfo {
                  hasNextPage
                  hasPreviousPage
                 }
                 edges {
                  cursor
                  node {
                    originalSrc
                   
                    id
                  }
                 }
               }
               priceRange{
                maxVariantPrice{
                  amount
                }
              }
            }
          }
        }
      }
    }
    `
  });
  return {
    products:data.shop.products.edges.map(({ node }:any) => node),
    productsPagination:data.shop.products.pageInfo,


  }
}

  export default Index;