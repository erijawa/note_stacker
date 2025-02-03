import { auth } from "@/auth";
import SignInButton from "@/components/ui/SignInButton";

export default async function RootPage() {
  const session = await auth();
  console.log(session)

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold my-10">ここはRoot Page!</h1>
        <SignInButton />
      </div>
    </>
  );
}