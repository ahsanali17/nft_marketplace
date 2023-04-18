import NextAuth from 'next-auth'
import { MoralisNextAuthProvider } from '@moralisweb3/next'

export default NextAuth({
  providers: [MoralisNextAuthProvider()],
  // adding user info to the user session object
  callbacks: {
    jwt({ token, user }) {
      if (user !== null && user !== undefined) {
        token.user = user
      }
      return token
    },
    session({ session, token }) {
      if (typeof token === 'object' && token?.user !== null && token?.user !== undefined) {
        (session as { user: unknown }).user = token.user
      }
      return session
    }
  }
})
