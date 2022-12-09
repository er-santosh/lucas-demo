import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// Prisma adapter for NextAuth, optional and can be removed
import { PrismaAdapter } from "@next-auth/prisma-adapter";

import { prisma } from "../../../server/db/client";

export const authOptions: NextAuthOptions = {
  // Include user.id on session
  callbacks: {
    jwt: async ({ user, token }) => {
      if (user) {
        token.userId = user.id;
      }
      return token;
    },
    session({ session, user }) {
      if (session.user) {
        session.user.id = user.id;
        // session.user.access_token = user.access_token;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  // Configure one or more authentication providers
  adapter: PrismaAdapter(prisma),
  providers: [
    // DiscordProvider({
    //   clientId: env.DISCORD_CLIENT_ID,
    //   clientSecret: env.DISCORD_CLIENT_SECRET,
    // }),
    CredentialsProvider({
      name: "Custom",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // const u = await login(req.body.email, req.body.password); // login and get user data
        // const user = {
        // id:"",
        //   name: u.current_user?.name,
        //   access_token: u.access_token, //a access token from external api
        // };
        // if (user) {
        //   return user;
        // } else {
        //   return null;
        // }
        return {
          id: "",
          access_token: "",
        };
      },
    }),

    // ...add more providers here
  ],
};

export default NextAuth(authOptions);
