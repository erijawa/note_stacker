import { auth } from "@/auth";
import SignOutButton from "../ui/SignOutButton";
import SignInButton from "../ui/SignInButton";
import Link from "next/link";

export default async function Header() {
  const session = await auth();

  return (
    <header className="flex justify-center border-b px-10 top-0 left-0 z-50 bg-white fixed w-full">
      <div className="flex items-center justify-end w-full h-16 gap-6">
        {/* {session && <p className="font-bold">{session.user.name} さん</p>} */}
        {session && (
          <Link
            href={`/users/${session.user.id}`}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            MyPage
          </Link>
        )}
        {session ? <SignOutButton /> : <SignInButton />}
      </div>
    </header>
  );
}
