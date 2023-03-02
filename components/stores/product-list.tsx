import styled from 'styled-components'
import { ProductCategory } from '@/types/products'
import ProductItem from './product-item'
import { MdKeyboardArrowDown } from 'react-icons/md'

const ProductListStyled = styled.details`
  padding: 3rem 0;
  border-bottom: 1px solid var(--orange);
  &:last-of-type {
    border-bottom: none;
  }
  &[open] {
    summary svg {
      transform: rotate(180deg);
    }
  }
  summary {
    font-size: 1.6rem;
    font-weight: 500;
    list-style: none;
    user-select: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .products {
    padding-left: 3rem;
  }
  .orange {
    color: var(--orange);
  }
  @media (max-width: 959.95px) {
    .products {
      padding-left: 0;
    }
  }
`

function ProductList({ category, storeId } : {
  category: ProductCategory, storeId: string,
}) {
  return (
    <ProductListStyled open data-cy="product-category">
      <summary>
        <span>
          {category.name}
          {' '}
          <span className="orange">
            ({category.products.length})
          </span>
        </span>
        <MdKeyboardArrowDown size={40} color="var(--orange)" />
      </summary>
      <ul className="products">
        {category.products.map((product) => (
          <ProductItem key={product.uuid} storeId={storeId} product={product} />
        ))}
      </ul>
    </ProductListStyled>
  )
}

export default ProductList
