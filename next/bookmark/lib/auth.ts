import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

const getUser = async (email: string) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/regist?email=${email}`
  );
  return res.json();
};

const registUser = async (nickname: string, email: string) => {
  const res = await fetch(`${process.env.NEXTAUTH_URL}/api/regist`, {
    method: 'POST',
    body: JSON.stringify({ nickname, email }),
  });

  return res.json();
};

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Google,
    // Google({
    //   clientId: process.env.GOOGLE_CLIENT_ID as string,
    //   clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    // }),
  ],
  // secret: process.env.AUTH_SECRET as string,

  callbacks: {
    async signIn({ account, profile }) {
      console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&');
      // if (account?.provider === 'google') {
      //   console.log('google - callback>>', account, profile);
      // }

      const email = profile?.email;
      const name = profile?.name || '';
      if (email) {
        const user = await getUser(email);
        console.log('🚀 auth - user:', user);
        if (!user || !user.id) {
          await registUser(name, email);
        }
      }

      return true;
    },
    session: async ({ session }) => {
      console.log('🚀 auth - callbacks - session:', session);
      if (!session.user.id) {
        const user = await getUser(session.user.email);
        if (session.user) session.user.id = user.id;
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // console.log('*** url', url);
      // console.log('*** baseUrl', baseUrl);

      // return url.startsWith(baseUrl) ? url : baseUrl + '/protected/client';
      return baseUrl;
    },
  },
});
