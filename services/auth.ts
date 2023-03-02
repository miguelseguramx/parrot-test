import { BASE_API } from "./config"

interface SessionToken {
  refresh: string,
  access: string,
}

export async function createTokenService(
  username: string, password: string
  ) : Promise<SessionToken> {
  const response = await fetch(`${BASE_API}/api/auth/token`, {
    method: 'POST',
    body: JSON.stringify({ username, password }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()
  return data
}

export async function refreshTokenService(refresh: string) : Promise<SessionToken> {
  const response = await fetch(`${BASE_API}/api/auth/token/refresh`, {
    method: 'POST',
    body: JSON.stringify({ refresh }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = await response.json()
  return data
}

export async function validateTokenService(token: string) : Promise<Object> {
  const response = await fetch(`${BASE_API}/api/auth/token/test`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const data = await response.json()
  return data
}
