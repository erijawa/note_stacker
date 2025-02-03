import { signIn } from "@/auth";
import Image from "next/image";

export default function SignInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <button>
        <Image src="/google_sign_in.png" alt="Sample Image" width={180} height={40} />
      </button>
    </form>
  );
}

