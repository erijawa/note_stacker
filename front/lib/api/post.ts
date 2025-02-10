export const createPost = async (comment: string, url: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${process.env.NEXT_PUBLIC_API_VERSION}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ post: { comment: comment, url: url } }),
    cache: 'no-cache',
  });
  return response.json();
}

export const updatePost = async (id: string, comment: string, url: string) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${process.env.NEXT_PUBLIC_API_VERSION}/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ post: { comment: comment, url: url } }),
    cache: 'no-cache',
  });
  return response.json();
}

export const deletePost = async (id: string) => {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/${process.env.NEXT_PUBLIC_API_VERSION}/posts/${id}`, {
    method: 'DELETE',
  });
}