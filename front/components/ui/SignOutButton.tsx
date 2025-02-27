import { signOut } from '@/auth'

export default function SignOutButton() {
  return (
    <form
      action={ async () =>  {
        'use server';
        await signOut();
      }}
    >
      <button className="px-4 py-2 bg-slate-500 text-white rounded-md hover:bg-slate-600 transition-colors">
        SignOut
      </button>
    </form>
  )
}