import type { JWT } from "next-auth/jwt";

// Session を拡張
declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

// JWT を拡張
declare module "next-auth/jwt" {
  interface JWT {
    idToken: string;
  }
}