import { useEffect } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import StoreHeader from '@/components/stores/store-header'
import ProductCategories from '@/components/stores/product-categories'

const StoreLayout = styled.div`
`

function Store() {
  const { push } = useRouter()
  const { data, status } = useSession()

  useEffect(() => {
    if (status === 'unauthenticated') {
      push('/login')
    }
  }, [status, push])

  const stores = status === 'loading' ? [] : data?.user?.stores
  const [store] = stores || []

  return (
    <>
      <StoreHeader store={store} />
      <ProductCategories storeId={store?.uuid || ''} />
    </>
  )
}

export default Store
