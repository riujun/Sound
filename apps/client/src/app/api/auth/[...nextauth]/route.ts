/* eslint-disable turbo/no-undeclared-env-vars */
/* eslint-disable @typescript-eslint/require-await */
import NextAuth, { type NextAuthOptions, type Session, type User } from 'next-auth';
import FacebookProvider from 'next-auth/providers/facebook';
import GoogleProvider from 'next-auth/providers/google';

export const authOptions: NextAuthOptions = {
  debug: true,
  callbacks: {
    session: async ({ session, user }: { session: Session; user: User }) => ({
      ...session,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
      },
    }),
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
      allowDangerousEmailAccountLinking: true,
    }),
  ],
};

const handler = NextAuth(authOptions) as NextAuthOptions;

export { handler as GET, handler as POST };
