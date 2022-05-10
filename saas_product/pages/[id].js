import { supabase } from "../public/utils/supabase"
import { useState, useEffect } from "react"
 
const LessonDetails = ({lesson}) => {
  const [videoUrl, setVideoUrl] = useState()

  const getPremiumContent = async () => {
    const { data } = await supabase
    .from('premium_content')
    .select('video_url')
    .eq("id", lesson.id)
    .single()

    setVideoUrl(data?.video_url)
  }

  useEffect(() => {
    getPremiumContent();
  },[])

    return (
        <div className="relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-teal-100">
            {lesson.title}
            <p>{videoUrl}</p>
        </div>
    )
}

export const getStaticPaths = async () => {
    const { data: lessons } = await supabase.from("lesson").select("id");
  
    const paths = lessons.map(({ id }) => ({
      params: {
        id: id.toString(),
      },
    }));
  
    return {
      paths,
      fallback: false,
    };
  };
  
  export const getStaticProps = async ({ params: { id } }) => {
    const { data: lesson } = await supabase
      .from("lesson")
      .select("*")
      .eq("id", id)
      .single();
  
    return {
      props: {
        lesson,
      },
    };
  };
  
  export default LessonDetails;