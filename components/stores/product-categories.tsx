import styled from 'styled-components'
import { useAllProducts } from 'querys/products'
import Error from '@common/error'
import Loading from '@common/loading'
import Wrapper from '@common/wrapper'
import ProductList from './product-list'
import { useEffect, useState } from 'react'
import { ProductCategory } from '@/types/products'
import EmptyStore from './empty-store'

const ProductCategoriesStyled = styled.section`

`

function ProductCategories({ storeId } : { storeId: string }) : JSX.Element {
  const { data, isLoading, isError, isSuccess } = useAllProducts(storeId)
  const [productsByCategory, setProductsByCategory] = useState<ProductCategory[]>([])

  useEffect(() => {
    const products: ProductCategory[] = []
    if (data?.results.length) {
      data.results.forEach((product) => {
        const exist = products.find((category: ProductCategory) => category.uuid === product.category.uuid)
        if (exist) {
          exist.products.push(product)
          return
        }
        products.push({ ...product.category, products: [product] })
      })
    }
    setProductsByCategory(products)
  }, [data, setProductsByCategory])

  if (isError) return <Error />

  if (isLoading) return <Loading />

  if (isSuccess && productsByCategory.length === 0) {
    return <EmptyStore />
  }

  return (
    <ProductCategoriesStyled>
      <Wrapper>
        <div className="product-categories-container">
          {productsByCategory?.map((category) => (
            <ProductList key={category.uuid} category={category} storeId={storeId} />
          ))}
        </div>
      </Wrapper>
    </ProductCategoriesStyled>
  )
}

export default ProductCategories
