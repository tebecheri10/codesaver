import Link from "next/link";
import { db } from "@/db";
import { notFound } from "next/navigation";
import * as actions from "@/actions";

interface SnippetSHowPageProps {
  params: {
    id: string;
  };
}

const SnippetShowPage = async (props: SnippetSHowPageProps) => {
  const id = parseInt(props.params.id);
  
  const snippet = await db.snippet.findFirst({
    where: {
      id: id,
    },
  });

  if (!snippet) return notFound();
  
  const handleDelete = actions.deleteSnippet.bind(null, id)

  return (
    <div>
      <div className="flex justify-between p-2 w-full">
        <h1 className="text-xl font-bold uppercase">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link href={`/snippets/${id}/edit`}>
            <button className="p-2 bg-blue-200 border rounded">Edit</button>
          </Link>
          <form action={handleDelete}>
             <button className="p-2 bg-blue-600 border rounded">Delete</button>
          </form>
        </div>
      </div>
      <pre className="p-3 border rounded bg-gray-200 border-gray-300">
        <code>
           {snippet.code  }
        </code>
      </pre>
    </div>
  );
};

export default SnippetShowPage;

export async function generateStaticParams (){
    const snippets = await db.snippet.findMany()

    return snippets.map(snippet => ({ id: snippet.id.toString()}))
}
