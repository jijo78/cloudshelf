import React, { ReactNode, FC } from 'react'
import styled from 'styled-components'

const coreStyle = styled.div`
  position: relative;
  overflow: hidden;
  & > * {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

const Media16 = styled(coreStyle)`
  padding-bottom: 56.25%;
`
const Media4 = styled(coreStyle)`
  padding-bottom: 75%;
`
type MediaProps = {
  children: ReactNode
}

/**
 * Responsive image container - 16:9 ratio
 */
export const Media16x9: FC<MediaProps> = (props) => {
  return <Media16 {...props}>{props.children}</Media16>
}
/**
 * Responsive image container - 4:3 ratio
 */
export const Media4x3: FC<MediaProps> = (props) => {
  return <Media4 {...props}>{props.children}</Media4>
}
