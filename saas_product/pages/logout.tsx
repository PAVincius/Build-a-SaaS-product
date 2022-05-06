import { supabase } from '../public/utils/supabase'
import { useRouter } from "next/router";

const LogoutPage = () => {
    const router = useRouter();
    function Logout(){
        const logout = async () => {
            await supabase.auth.signOut();
            router.push("/");
        };
        logout();
    }

    return(
        <div className="relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-teal-100">
            <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                    <div className="rounded-xl bg-white shadow-xl">
                        <div className="p-6 sm:p-16">
                            <div className="space-y-4">
                                <h2 className="mb-8 text-2xl text-cyan-900 font-bold">Login.</h2>
                            </div>
                            <div className="mt-16 grid space-y-4">
                            <button onClick={Logout} type="button" className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:hover:bg-[#050708]/30 mr-2 mb-2">
                                LogOut
                            </button>   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogoutPage