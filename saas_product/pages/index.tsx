import { supabase } from "../public/utils/supabase"
import Link from "next/link"
import { useUser } from "../context/user"

export default function Home({ lessons }) {
  const { user } = useUser();
  return (
    <div className="relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-teal-100">
      {lessons.map((lesson) => (
        <Link key={lesson.id} href={`/${lesson.id}`} className="hover:shadow-2x1 transform transition-all 500">
          <div className="mx-auto flex w-96 flex-col m-2 justify-center bg-white rounded-2xl shadow-xl shadow-slate-300/60 ">
            <img className="aspect-video w-50 rounded-t-2xl object-cover object-center" src=""/>
            <div className="p-4">
              <small className="text-blue-400 text-xs">{lesson.category}</small>
              <h1 className="text-2xl font-medium text-slate-600 pb-2">{lesson.title}</h1>
              <p className="text-sm tracking-tight font-light text-slate-400 leading-6">{lesson.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export const getStaticProps = async () => {
  const { data: lessons } = await supabase.from("lesson").select("*")

  return {
    props: {
      lessons,
    },
  }
}