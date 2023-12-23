"use client";

import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import * as actions from "@/actions";

interface SnippetEditFormProps {
  snippet: Snippet;
}

const SnippetEditForm = ({ snippet }: SnippetEditFormProps) => {
  const [code, setCode] = useState<string | undefined>(snippet.code);

  const handleEditorChange = (value: string | undefined) => {
    setCode(value);
  };

  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

  return (
    <>
      <div>
        <h1 className="font-bold text-xl my-4 uppercase">{snippet.title}</h1>
      </div>
      <Editor
        height="60vh"
        theme="vs-dark"
        defaultLanguage="javascript"
        defaultValue={snippet.code}
        onChange={handleEditorChange}
      />
      <form action={editSnippetAction}>
        <button type="submit" className="p-2 my-4 border rounded bg-blue-200">
          Update
        </button>
      </form>
    </>
  );
};

export default SnippetEditForm;
