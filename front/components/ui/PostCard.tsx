import { Post } from '@/types/post'
import Link from 'next/link'

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  return(
    <div className="bg-white rounded-lg shadow-md p-4 my-4">
      <Link href={post.url} target="_blank">
        <div className="flex items-start space-x-4">
          <img
            alt="Article thumbnail"
            className="w-30 h-24 object-cover rounded-md"
            height="100"
            src="/placeholder.png"
            // src={post.article.ogImage || "/placeholder.svg"}
            // style={{
              // aspectRatio: "1/1",
            //   objectFit: "cover",
            // }}
            width="120"
          />
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-[#16404D]">{post.title}</h2>
            <p className="text-gray-700">
              {/* {post.article.description} */}
            </p>
          </div>
        </div>
        {post.comment && (
          <div className="mt-4 p-2 bg-gray-100 rounded-md">
            <h3 className="text-lg font-semibold text-[#16404D]">Comments</h3>
            <p className="text-gray-700">{post.comment}</p>
          </div>
        )}
      </Link>
    </div>
  )
}