import Link from "next/link";
import { db } from "@/db";

export const revalidate  = 3;

export default async function Home() {
  const snippets = await db.snippet.findMany();

  const renderedSnippets = snippets.map((snippet) => {
    return (
      <Link
        href={`/snippets/${snippet.id}`}
        key={snippet.id}
        className="flex justify-between items-center p-2 border rounded m-2"
      >
        <h3>{snippet.title}</h3>
        <div>
          <span>View</span>
        </div>
      </Link>
    );
  });

  return (
    <div>
      <div className="flex justify-between items-center py-4">
        <h1 className="text-xl font-bold ">Snippets</h1>
        <Link href="/snippets/new" className="border rounded p-2 bg-blue-200">
          New Snippet
        </Link>
      </div>
      <section>{renderedSnippets}</section>
    </div>
  );
}
