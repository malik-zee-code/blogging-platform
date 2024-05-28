import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import dbConnect from "lib/db"; // IMPORT DATABASE CONNECTION UTILITY
import User from "models/User"; // IMPORT USER MODEL
import { compareHash } from "lib/hash"; // IMPORT HASH COMPARISON FUNCTION

declare module "next-auth" {
  interface Session {
    user?: typeof User;
  }
}

export const authConfig: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Sign in",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "john.doe@example.com",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "********",
        },
      },

      async authorize(credentials) {
        try {
          if (!credentials || !credentials.password || !credentials.email) return null;

          await dbConnect();

          // QUERY DATABASE FOR A USER BY EMAIL
          let user: any = await User.findOne({
            email: credentials.email,
          })
            .select("+password")
            .lean();
          console.log(user);

          if (!user) {
            return null;
          }

          // COMPARE PASSWORD HASH
          const isMatch = await compareHash(credentials.password, user.password);

          if (!isMatch) {
            return null;
          }

          const { password, createdAt, ...otherUserData } = user;

          console.log(otherUserData);

          return otherUserData;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
  },
  session: {
    strategy: "jwt", // SET SESSION STRATEGY TO JWT
  },
  secret: process.env.NEXTAUTH_SECRET, // USE SECRET KEY FROM ENVIRONMENT VARIABLES

  callbacks: {
    jwt({ token, user }) {
      // IF USER EXISTS, ADD USER INFO TO JWT TOKEN
      user && (token.user = user);

      return token;
    },
    session({ session, token }: any) {
      // ADD USER INFO TO SESSION
      session.user = token.user;
      return session;
    },
  },
};
