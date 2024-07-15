import Link from "next/link";
import { prisma } from "@/db"
import { redirect } from "next/navigation";

async function createTodo(data: FormData){
  "use server";
  const title = data.get('title')?.valueOf()
  if (typeof title !== "string" || title.length === 0){
    throw new Error('Invalid input!')
  }
  await prisma.todo.create({data:{title:title, complete:false}})
  redirect('/')
}

export default function Home(){
    return  (
      <>
        <header className="flex justify-between items-center mb-4">
          <h1 className="text-2xl">New To Do </h1>
        </header>
        <form action={createTodo} className="flex gap-3">
          <input type="text" placeholder="New To Do" name='title' className="bg-black text-white"/>
          <div>
            <Link href="..">Cancel</Link>
            <button type="submit" className=" pl-5 tx-blue">
              Create
            </button>
          </div>
        </form>
      </>
    )
  }