import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';

const getUser = async (email: string) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/regist?email=${email}`
  );
  return res.json();
};

const validateUser = async (email: string, passwd: string) => {
  const res = await fetch(
    `${process.env.NEXTAUTH_URL}/api/signin?email=${email}`,
    {
      method: 'POST',
      body: JSON.stringify({ email, passwd }),
    }
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
    Credentials({
      name: 'Email',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'example@example.com',
        },
        passwd: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials || !credentials.email || !credentials.passwd)
          return null;

        console.log('🚀  credentials:', credentials);
        const email = credentials.email + '';
        const passwd = credentials.passwd + '';
        const data = await validateUser(email, passwd);
        console.log('🚀  user:', data.user);

        return data.user;
      },
    }),
    Google,
  ],

  callbacks: {
    async signIn({ account, profile }) {
      if (account?.provider === 'credentials') {
        return true;
      }

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

  trustHost: true,
});
