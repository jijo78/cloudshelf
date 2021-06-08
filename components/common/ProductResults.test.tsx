import React from 'react'
import { cleanup, render } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'
import { resultsList } from '../fixtures/results.mock-res'

import { ProductResults } from './ProductResults'

const renderComponent = () => render(<ProductResults results={resultsList} />)

describe('<Card />', () => {
  afterEach(cleanup)

  it('should render the page', async () => {
    const { getByText } = renderComponent()
    const component = await getByText('Explore our products')
    expect(component).toBeInTheDocument()
  })

  it('should render product title', () => {
    const { getByText } = renderComponent()
    const component = getByText('Watch SE 2')
    expect(component).toBeInTheDocument()
  })

  it('should render product price', () => {
    const { getByText } = renderComponent()
    const component = getByText('£ 289.00')
    expect(component).toBeInTheDocument()
  })
  it('should the show details button', () => {
    const { getAllByText } = renderComponent()
    const component = getAllByText('Show details')[0]
    expect(component).toBeInTheDocument()
  })

  it('should render product image', async () => {
    const { findByAltText } = renderComponent()
    const img = await findByAltText('Watch SE 2')
    expect(img).toHaveAttribute(
      'src',
      'https://cdn.shopify.com/s/files/1/0555/4546/2968/p…0-4e1c-9847-d2ab213f38f6_400x225.jpg?v=1616412831'
    )
  })

  it('should render a list of results', () => {
    const { getAllByTestId, getByText } = renderComponent()
    const productTitle = getByText('Watch SE 2')
    expect(productTitle).toBeInTheDocument()

    const li = getAllByTestId('result-list')

    expect(li.length).toBe(2)
  })
})
