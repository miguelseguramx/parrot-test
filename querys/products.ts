import { useQuery } from "react-query"
import { getAllProductsService } from "@/services/products"
import { useSession } from "next-auth/react"

export function useAllProducts(storeId: string) {
  const { data } = useSession()
  const token = data?.user?.accessToken || ''

  const query = useQuery(
    ['GET_PRODUCTS', storeId, token],
    () => getAllProductsService(storeId, token),
    {
      enabled: !!token && !!storeId,
    }
  )
  return query
}
