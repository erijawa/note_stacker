import { signOut } from '@/auth'

export default function SignOutButton() {
  return (
    <form
      action={ async () =>  {
        'use server';
        await signOut();
      }}
    >
      <button className='px-4 py-2 font-bold bg-gray-900 border-1 text-white border-black rounded hover:bg-gray-600 transition'>
        Sign Out
      </button>
    </form>
  )
}