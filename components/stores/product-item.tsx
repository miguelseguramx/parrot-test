import { Availability, Product } from '@/types/products'
import styled from 'styled-components'
import Image from 'next/image'
import Switch from '@common/switch'
import { useUpdateProductAvailability } from '@/mutations/products'

const ProductItemStyled = styled.div`
  margin: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  box-shadow: 0 32px 64px rgb(0 0 0 / 5%), 0 16px 32px rgb(0 0 0 / 5%);
  border-radius: 4px;
  padding: 1rem;
  &:last-of-type {
    margin-block-end: 0;
  }
  .product-description {
    max-width: 400px;
    padding: 1rem 0;
    p {
      margin: 1rem 0;
      color: var(--gray);
    }
  }
  .product-availability {
    flex: 1;
    display: flex;
    justify-content: flex-end;
  }
  h3 {
    font-size: 1.3rem;
    font-weight: 400;
  }
  img {
    margin: 0 auto;
  }
  @media (max-width: 959.95px) {
    flex-direction: column;
  }
`

function ProductItem({ product, storeId } : { product: Product, storeId: string }) {
  const { mutate } = useUpdateProductAvailability(storeId)
  const { name, imageUrl, description, price, availability } = product

  const handleChange = () => {
    const newAv = availability === Availability.AVAILABLE ? Availability.UNAVAILABLE : Availability.AVAILABLE
    mutate({
      productId: product.uuid, availability: newAv,
    })
  }

  return (
    <ProductItemStyled data-cy="product-item">
      <Image src={imageUrl} alt={name} width={200} height={200} />
      <div className="product-description">
        <h3>{name}</h3>
        <p>{description}</p>
        <p className="price">
          $
          {price}
        </p>
      </div>
      <div className="product-availability">
        <Switch checked={availability === Availability.AVAILABLE} onChange={handleChange} />
      </div>
    </ProductItemStyled>
  )
}

export default ProductItem
