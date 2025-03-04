import Link from "next/link";
import { auth } from "@/auth";
import SignOutButton from "../ui/SignOutButton";
import SignInButton from "../ui/SignInButton";

export default async function Header() {
  const session = await auth();

  return (
    <header className="flex justify-center px-10 top-0 left-0 z-50 fixed w-full">
      <div className="flex items-center justify-start w-full h-16 gap-6">
      <Link
            href="/"
            className="font-bold px-4 py-2 text-slate-700 rounded-md hover:bg-slate-600 hover:text-white transition-colors"
          >
            Note Stacker
          </Link>
      </div>
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
