export interface ResultList {
  descriptionHtml: string
  id:string
  title: string
  __typename: string
  images: { pageInfo: PageInfo; edges: EdgesInfo[] }
  priceRange:{
    maxVariantPrice:{
      amount:string
      __typename:  string
    }
  }
}

interface PageInfo {
  hasNextPage: boolean
  hasPreviousPage: boolean
  __typename:  string
}

interface EdgesInfo {
  cursor:string
  node: {
    id: string
    originalSrc: string
    __typename: string
  }
}


