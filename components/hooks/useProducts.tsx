import { useQuery } from '@apollo/react-hooks';
// import { gql } from 'apollo-boost';

// const GET_PRODUCTS = gql`

//     query ($cursor: String ){
//     products (first: 10, after: $cursor) {
//         pageInfo {
//           hasNextPage
//           hasPreviousPage
//         }
//         edges {
//           cursor
//           node {
//             id
//             title
//             descriptionHtml
//             images(first:1) {
//               pageInfo {
//                 hasNextPage
//                 hasPreviousPage
//                }
//                edges {
//                 cursor
//                 node {
//                   originalSrc
//                   id
//                 }
//                }
//              }
//              priceRange{
//               maxVariantPrice{
//                 amount
//               }
//             }
//           }
//         }
// }
// }

// `
// function useProducts() {
//   const {
//     data,
//     loading,
//     fetchMore,
//   } = useQuery(GET_PRODUCTS, {
//     notifyOnNetworkStatusChange: true,
//   })

//   if (loading && !data) return { loading, products: [] }
  
//   console.log('GET_PRODUCTS: ', data.products.edges.map(c=>c.cursor));

//   const loadMore = () => {
//     return fetchMore({
//       query: GET_PRODUCTS,
//       variables: {
//         cursor:  data.products.edges.map(c=>c.cursor),
//       },
//       updateQuery: (previousResult, { fetchMoreResult }) => {
//           console.log('previousResult: ', previousResult);
//         const newEdges = fetchMoreResult.data.products
//         const pageInfo = fetchMoreResult.data.products.pageInfo

//         return newEdges.length
//           ? {
//             products: {
//               __typename: previousResult.products.__typename,
//               edges: [...previousResult.products.edges, ...newEdges],
//               pageInfo,
//             },
//           }
//           : previousResult
//       },
//     })
//   }

//   return {
//     products: data.products.edges,
//     hasNextPage: data.products.pageInfo.hasNextPage,
//     loading,
//     loadMore,
//   }
// }

// export default useProducts;