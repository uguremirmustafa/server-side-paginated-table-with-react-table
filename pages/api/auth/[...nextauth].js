import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  database: process.env.MONGODB_URI,
  pages: {
    // signIn: '/giris',
    // newUser: '/profile',
  },
  debug: process.env.NODE_ENV === 'development',
  // secret: process.env.AUTH_SECRET,
  // jwt: {
  //   secret: process.env.JWT_SECRET,
  // },
});
