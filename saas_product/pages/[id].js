import { supabase } from "../public/utils/supabase"

const LessonDetails = ({lesson}) => {
    return (
        <div className="relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-teal-100">
            {lesson.title}
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