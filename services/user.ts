import { User } from "@/types/user"
import { BASE_API } from "./config"

export async function getUserService(token: string) : Promise<User> {
  const response = await fetch(`${BASE_API}/api/v1/users/me`, {
    method: 'GET',
    headers: { Authorization: `Bearer ${token}` },
  })
  const data = await response.json()
  return data
}
