import { auth } from "@/auth";

export default auth((req) => {
  const userId = req.nextUrl.pathname.split('/')[2];

  if (!req.auth || req.auth.user.id !== userId) {
    const newUrl = new URL("/", req.nextUrl.origin); // ルートページにリダイレクト
    return Response.redirect(newUrl);
  }
});

export const config = {
  matcher: ['/users/:id*'], // /users/[id] とそのサブパス（/users/[id]/category など）に適用
};