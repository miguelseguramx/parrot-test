import { Availability, Product, ProductCategory } from "@/types/products"
import { BASE_API } from "./config"

export interface Products {
  status: string,
  results: Product[],
}

async function getAllProductsService(storeId: string, token: string) : Promise<Products> {
  const response = await fetch(`${BASE_API}/api/v1/products/?store=${storeId}`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  })
  const data = await response.json()
  return data
}

interface ProductUpdated {
  status: string,
  results: Product,
}

async function updateProductAvailabilityService(
  token: string, productId: string, availability: Availability,
  ) : Promise<ProductUpdated> {
  const response = await fetch(`${BASE_API}/api/v1/products/${productId}/availability`, {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ availability: availability })
  })
  const data = await response.json()
  return data
}


export {
  getAllProductsService,
  updateProductAvailabilityService,
}
