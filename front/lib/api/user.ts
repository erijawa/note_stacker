// export const getUserById = async (id: string) => {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${process.env.NEXT_PUBLIC_API_VERSION}/users/${id}`, {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     cache: 'no-cache',
//   });
//   return res.json();
// }

export const getOrCreateUser = async (provider: string, providerId: string, name: string | null | undefined) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${process.env.NEXT_PUBLIC_API_VERSION}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user: { provider: provider, providerId: providerId, name: name } }),
    cache: 'no-cache',
  });
  return res.json();
}

export const getOrCreateUserId = async (provider: string, providerId: string, name: string | null | undefined) => {
  let user = await getOrCreateUser(provider, providerId, name)
  return user.id;
}