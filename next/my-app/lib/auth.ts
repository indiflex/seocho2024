import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Naver from 'next-auth/providers/naver';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Google,
    Naver,
    // Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    // }),

    // Naver({
    //   clientId: process.env.NAVER_CLIENT_ID as string,
    //   clientSecret: process.env.NAVER_CLIENT_SECRET as string,
    // }),
  ],
  secret: process.env.AUTH_SECRET as string,
});
