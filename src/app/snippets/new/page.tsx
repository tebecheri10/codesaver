"use client"

import { redirect } from 'next/navigation'
import { db } from "@/db"
import * as actions from "@/actions"
import { useFormState } from 'react-dom'

 const SnippetsCreatePage = ()=> {

  const [formState ,action ] = useFormState(actions.createSnippet, { message: "" })

  return (
    <form action={action}>
      <h3 className="font-bold m-4">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <label htmlFor="title" className="w-12">
          Title
        </label>
        <input name="title" className="border rounded p-2 w-full" id="title" />
        <label htmlFor="code" className="w-12">
          Code
        </label>
        <input name="code" className="border rounded p-2 w-full" id="code" />
        <span>
          {formState.message ?(
            <div className='my-2 p-2 bg-red-200 border rounded border-red-400'>{formState.message}</div>
          ): null}
        </span>
        <button type="submit" className="rounded p-2 bg-blue-200">
            Create
        </button>
      </div>
    </form>
  );
}

export default SnippetsCreatePage