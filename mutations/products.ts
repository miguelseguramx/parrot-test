import { useMutation, useQueryClient } from "react-query"
import { useSession } from "next-auth/react"
import { Products, updateProductAvailabilityService } from "@/services/products"
import { Availability, Product } from "@/types/products"

interface updateParams {
  productId: string,
  availability: Availability
}

export function useUpdateProductAvailability(storeId: string) {
  const { data } = useSession()
  const token = data?.user?.accessToken || ''
  const queryClient = useQueryClient()

  return useMutation(
    ({ productId, availability } : updateParams) => updateProductAvailabilityService(
      token, productId, availability
    ), {
    onMutate: async ({ productId, availability } : updateParams) => {
      const previousValue : Products | undefined = queryClient.getQueryData(['GET_PRODUCTS', storeId, token])
      if (!previousValue) return

      const newValue = previousValue.results.map((product: Product) => (
        product.uuid === productId ? {...product, availability } : product
      ))
      queryClient.setQueryData(['GET_PRODUCTS', storeId, token], { ...previousValue, results: newValue })
      return { previousValue, newValue }
    },
    onError: (err, newValue, context) => {
      queryClient.setQueryData(['GET_PRODUCTS', storeId, token], context?.previousValue)
    },
    onSettled: (newTodo) => {
      queryClient.invalidateQueries(['GET_PRODUCTS', storeId, token])
    },
  })
}
