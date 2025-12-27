import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import { dbConnect } from "@/lib/dbConnect";
import bcrypt from "bcryptjs";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;
        
        try {
          const usersCollection = await dbConnect("users");
          const user = await usersCollection.findOne({ email });

          if (!user) {
            throw new Error("No user found");
          }

          const passwordMatch = await bcrypt.compare(password, user.password);
          if (!passwordMatch) {
            throw new Error("Password mismatch");
          }

          // ✅ FIX: MongoDB ObjectId কে String এ কনভার্ট করে রিটার্ন করতে হবে
          // সরাসরি 'return user' দিলে Vercel এ সমস্যা হয়
          return {
            id: user._id.toString(), // _id কে string বানানো হলো
            name: user.name,
            email: user.email,
            image: user.image,
            role: user.role || "user",
          };

        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 Days
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        try {
          const { name, email, image } = user;
          const usersCollection = await dbConnect("users");
          const userExists = await usersCollection.findOne({ email });

          if (!userExists) {
            await usersCollection.insertOne({
              name,
              email,
              image,
              provider: "google",
              role: "user",
              createdAt: new Date(),
            });
          }
          return true;
        } catch (error) {
          console.log("Google Login Error:", error);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      if (user) {
        // authorize থেকে আমরা 'id' রিটার্ন করেছি, তাই এখানে user.id পাবো
        token.id = user.id; 
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
      }
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  trustHost: true,
};