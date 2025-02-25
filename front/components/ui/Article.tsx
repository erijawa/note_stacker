import { auth } from "@/auth";
import Link from "next/link";
import ModalController from "../ModalController";
import { getCategoriesByUserId } from "@/lib/api/category";
import { getOgp } from "@/lib/ogp";

type Props = {
  url: string;
};
export default async function Article({ url }: Props) {
  const session = await auth();
  const id = session?.user.id;
  const categories: string[] = await getCategoriesByUserId(id);
  const ogp = await getOgp(`${url}`);

  return (
    <div className="rounded-lg shadow-md p-4 my-4 flex flex-col">
      <Link
        href={url}
        target="_blank"
        className="p-4 rounded-lg hover:bg-stone-100"
      >
        <div className="flex flex-col md:flex-row md:items-start md:space-x-4 space-y-2">
          <img
            alt="Article thumbnail"
            className="w-30 h-24 object-cover rounded-md"
            height="100"
            src={
              (ogp?.ogImage &&
                ogp?.ogImage.length > 0 &&
                ogp?.ogImage[0]?.url) ||
              "/placeholder.png"
            }
            style={{
              aspectRatio: "1/1",
              objectFit: "cover",
            }}
            width="120"
          />
          <div className="space-y-2">
            <h2 className="text-xl font-bold ">{ogp?.ogTitle}</h2>
            {/* <p className="text-gray-700">{article.description}</p> */}
          </div>
        </div>
      </Link>
      {session && (
        <div className="flex mt-4 justify-end">
          <ModalController url={url} categories={categories} />
        </div>
      )}
    </div>
  );
}
