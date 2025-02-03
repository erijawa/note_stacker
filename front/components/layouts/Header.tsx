import { auth } from "@/auth";
import SignOutButton from "../ui/SignOutButton";
import SignInButton from "../ui/SignInButton";

export default async function Header() {
  const session = await auth();

  return (
    <header className="flex justify-center border-b px-10 top-0 left-0">
      <div className="flex items-center justify-end w-full h-16 gap-6">
        {session && <p className="font-bold">{session.user.name} さん</p>}
        {session ? <SignOutButton /> : <SignInButton />}
      </div>
    </header>
  );
}
