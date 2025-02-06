import NextAuth from "next-auth";
import { authConfig } from "@/auth.config";
import { getOrCreateUserId } from "./lib/api/user";

/**
 * NextAuthに，auth.configで定義した設定情報を読み込ませ，認証に必要な関数を生成する
 */
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        // 初回ログイン時にDBからUUIDを取得または作成
        token.id = await getOrCreateUserId(
          account.provider,
          account.providerAccountId,
          token.name
        );
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id; // セッションにUUIDを含める
      }
      return session;
    }
  },
  session: { strategy: "jwt" },
  ...authConfig,
});
