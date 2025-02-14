export const createPost = async (url: string, comment: string, user_id: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${process.env.NEXT_PUBLIC_API_VERSION}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ post: { url: url, comment: comment }, user_id: user_id }),
    cache: 'no-cache',
  });
  return response.json();
}

export const updatePost = async (id: string | undefined, url: string, comment: string, user_id: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${process.env.NEXT_PUBLIC_API_VERSION}/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ post: { url: url, comment: comment }, user_id: user_id }),
    cache: 'no-cache',
  });
  return response.json();
}

export const deletePost = async (id: string) => {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${process.env.NEXT_PUBLIC_API_VERSION}/posts/${id}`, {
    method: 'DELETE',
  });
}