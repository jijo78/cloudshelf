import React, { FC,useState } from 'react'
import styled from 'styled-components'
import { Cards, Card, CardBody } from './Card'
import { ResultList } from '../../types'

import { Media16x9 } from './MediaRatio'


type Props = {
  results: ResultList[]
}


export const ProductResults: FC<Props> = ({ results }) => {
  const [toggledButtonId, setToggledButtonId] = useState('');

   const toggleButton = (result:ResultList)=> {
     const {id } = result
      setToggledButtonId(id);
  }
  return (
        <Cards>
          <h2>Explore our products</h2>
          {results &&
            results
              .map((result) => {
                const {id,title,descriptionHtml}=result 
                
                const isToggled = toggledButtonId === id
                const price =parseInt(result.priceRange.maxVariantPrice.amount).toFixed(2)
                return ( 
                  <Card data-testid="result-list" key={id}>
                      <Media16x9>
                        <img
                          alt={title}
                          src={result.images.edges[0].node.originalSrc}
                        />
                      </Media16x9>
                      <CardBody  >
                        <h3>{title}</h3>
                        <p>£ {price}</p>
                        <button onClick={() => toggleButton(result)}>Show details</button>
                        <p dangerouslySetInnerHTML={{__html: isToggled? descriptionHtml:''}}></p>
                      </CardBody>
                  </Card>
                )
              })}
  </Cards>
  
  )
}
