  import React from 'react';
// import InfiniteLoadingList from 'react-simple-infinite-loading'
// import { ResultList } from '../../types'

// import useProducts from '../hooks/useProucts'

// import { Cards, Card, CardBody } from './Card'

// import { Media16x9,Media4x3 } from './MediaRatio'

// function InfiniteList() {
//   const { products, loading, loadMore, hasNextPage } = useProducts()

  
//   const loadMoreProduct = loading ? () => {} : loadMore
//   const isProductLoaded = (index:number) => !hasNextPage || index < products.length

//   return (
//     <div className="InfiniteList-list">
//       <InfiniteLoadingList
//         items={products}
//         itemHeight={40}
//         hasMoreItems={hasNextPage}
//         loadMoreItems={loadMoreProduct}
//       >
//         {({ item: products, index }):Array => {
//             console.log('products: ', products);
//           let content
//           if (!isProductLoaded(index)) {
//             content = 'Loading...'
//           } else {
//             content = products
//           }

//       return<Cards>
      
           
            
 
//                   <Card data-testid="result-list" key={i}>
             
//                       <Media4x3>
//                         <img
//                           alt={content.images.edges[0].node.originalSrc}
//                           src={content.images.edges[0].node.originalSrc}
//                         />
//                       </Media4x3>
//                       <CardBody>
//                         <h3>{content.title}</h3>
//                         <p>£ {parseInt(content.priceRange.maxVariantPrice.amount).toFixed(2)}</p>
//                       </CardBody>
//                   </Card>
                
              
//   </Cards>
//         }}
//       </InfiniteLoadingList>
//     </div>
//   )
// }

// export default InfiniteList