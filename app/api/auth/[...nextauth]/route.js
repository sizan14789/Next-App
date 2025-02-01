import user from "@/models/user"
import connect from "@/utils/db"
import NextAuth from "next-auth"
import bcrypt from "bcryptjs"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"

export const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials){
        await connect()
        try {
          const theUser = await user.findOne({email: credentials.email})
          if(theUser){
            const isPasswordCorrect = await bcrypt.compare(credentials.password, theUser.password)
            if(isPasswordCorrect){
              return theUser;
            }
            else{
              throw new Error("Wrong credentials")
            }
          }
          else{
            throw new Error("User not found")
          }
        } catch (error) {
          throw new Error("Error in try block")
        }
      }
    })
    // ...add more providers here
  ],
  pages: {
    error: '/dashboard/login'
  }
})

export {handler as GET, handler as POST}