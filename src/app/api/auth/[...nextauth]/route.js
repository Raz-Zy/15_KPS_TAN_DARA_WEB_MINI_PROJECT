import { loginService } from "@/service/auth.service";
import nextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

export const authOption = {
    providers: [
        //login by email and password
        CredentialsProvider({
            async authorize(userInfo) {
                //define object structure
                const newUserInfo = {
                    email: userInfo?.email,
                    password: userInfo?.password
                };

                //call login service
                const login = await loginService(newUserInfo);

                //check if the login has any error
                if (login?.status === 400) {
                    throw new Error(login?.detail)
                }
                return login;
            },
        }),
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token }) {
            session.user = token;
            return session;
        }
    },
    //calling secret key to encypt the token from session
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt", // Adjust this based on your session strategy
    },
    pages: {
        signIn: "/login",
    },
};

const handler = nextAuth(authOption);
export { handler as GET, handler as POST };