const { default: NextAuth } = require("next-auth/next");
import CredentialsProvider from "next-auth/providers/credentials";
import GitHubProvider from "next-auth/providers/github";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Enter email" },
        password: { label: "Password", type: "password" },
      },
      authorize(credentials, request) {
        if (credentials.email) {
          return {
            email: credentials.email,
          };
        }
        return null;
      },
    }),
    GitHubProvider({
      clientId: "8a7bb2452d2bddb0e2c7",
      clientSecret: "9b4f254e8915ba71d3a8406b10018aa49297c406",
    }),
  ],
  callbacks: {
    session({ session, user }) {
      return session;
    },
  },
});

export { handler as GET, handler as POST };
