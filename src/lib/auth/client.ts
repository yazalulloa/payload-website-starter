import { createAuthClient } from 'better-auth/react'
import { adminClient, multiSessionClient } from 'better-auth/client/plugins'

export const authClient = createAuthClient({
  baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
  plugins: [adminClient(), multiSessionClient()],
  fetchOptions: {
    onError(e) {
      if (e.error.status === 429) {
        // Handle Too many requests error Here
      }
    },
  },
})

export const { signUp, signIn, signOut, useSession } = authClient

export type Session = typeof authClient.$Infer.Session

authClient.$store.listen('$sessionSignal', async () => {})
