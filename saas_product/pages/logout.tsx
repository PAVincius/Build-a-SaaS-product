import { supabase } from '../public/utils/supabase'
import { useEffect } from "react";
import { useUser } from '../context/user';

const LogoutPage = () => {
    const { logout } = useUser();

    function Logout(){
           useEffect(logout, []);
    }

    return(
        <div className="relative flex min-h-screen flex-col justify-center bg-gradient-to-r from-rose-100 to-teal-100">
            <div className="relative container m-auto px-6 text-gray-500 md:px-12 xl:px-40">
                <div className="m-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                    <div className="rounded-xl bg-white shadow-xl">
                        <div className="p-6 sm:p-16">
                            <div className="space-y-4">
                                <h2 className="mb-8 text-2xl text-cyan-900 font-bold">Logout.</h2>
                            </div>
                            <div className="mt-16 grid space-y-4">
                            <button onClick={Logout} type="button" className="text-white bg-[#24292F] hover:scale-105 hover:shadow-2xl transform transition-all duration-500 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 mb-2">
                                Logout
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