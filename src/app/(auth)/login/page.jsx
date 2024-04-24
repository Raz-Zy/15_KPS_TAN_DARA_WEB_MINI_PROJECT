"use client";

import {signIn} from 'next-auth/react'
import { useRouter } from 'next/navigation'

const LoginPage = () => {
    const router = useRouter();
    //define funtion to handler login
    async function handleLogin (userInfo) {

        const newUserInfo = {
            email: userInfo.get('email'),
            password: userInfo.get("password")
        }

        //calling next auth service and passing the newUkkserInfo
        const res = await signIn('credentials', {
            redirect: false,
            ...newUserInfo,
        });


        //check status
        if(res.ok){
            router.push('/todo-list');
        }
    }


    return (
        <main className="w-full h-screen flex justify-center items-center bg-slate-300">
            <section className="w-full h-full bg-white p-10">
                <div className=" mx-auto p-20 w-full h-full lg:py-0">
                    <div className=" flex items-center gap-x-2">
                        <div className=" w-6 h-6  rounded-full border-4 border-blue-500"></div>
                        <h1 className=" text-2xl font-semibold"> My-Office</h1>
                    </div>
                    <div className="flex justify-center items-center w-full h-[80vh] gap-x-40">
                        <div className="w-full h-full flex flex-col justify-center gap-y-1">
                            <div className="p-6 space-y-4 w-[450px]  mx-auto md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Login
                                </h1>
                                <form className="space-y-6 md:space-y-8 " action={handleLogin}>
                                    <div className="space-y-2">
                                        <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email" required="" />
                                        <input type="password" name="password" id="password" placeholder="Password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-4 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" />
                                    </div>

                                    <button type="submit" className="text-white w-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign in</button>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Don't have an account yet? <a href="#" className="font-medium text-blue-600 hover:underline dark:text-primary-500">Register</a>
                                    </p>

                                    <div className="flex h-5 justify-between items-center text-gray-400">
                                        <div className="pb-4">________________</div>
                                        <p>
                                            Continue with
                                        </p>
                                        <div className="pb-4">________________</div>
                                    </div>
                                    <button type="submit" className=" flex items-center justify-center w-full py-2.5 px-5 me-2 mb-2 text-md font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100  focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAvVBMVEVHcEz8/f3////////+/v7s7u/6+vr5+vr5+vr9/f3////////5+vr////////Kzs/////////9/v74+fn4+fn////8vwbsTkJFiPPrQjI7q1gpp00yqVPrSTlAhfX9/f2hv/nwgHj2tLGt2bkqe/Q2gPV+qPd7woza5f2WuPns8v5ZtnHD48n92Yj80Wn+6sD4yMXtZ13znpn8xSnwuh3v6+WIwbFwoPb0qKPpKxT1mx7AtydjuXgcpjNCk8nTYqeQAAAAFXRSTlMA5d2fnApdnVLJpWJiowsJZNGXl5g9ng+vAAABP0lEQVQokY2S2XqCMBCFQVGWulRbkIRABASK0FZtq3Z9/8fqZCDK0oueCzJf/sxhJhlF+Z/G1kJVF9a4T2ZD+6LhrM1u7ZZumsyyO5pe2RQ3+O4Qhoddbd32jHzigwiJms4jTAvJqtb7GekIoSbC0F+tCNnvCSFhZawhRE/I84UfP4eyKMEMEXxA3lunYqN2fXZe/ajbjvA1YX10HIeLjXyNyrcQmwAHsD45zgue3gSozQPEgx50UYmELdtTmqYngNJ2WRVEY1nIOnATsS5lK5+MenUr28ANUtmKIvxij1KGuaUbuFgPxxvSxd4Xo9TzisLz2E+SS1e4eCylgFzK4Aj7PuJLVBevTPBfMSQxBp+qsol8UK167DLLsmNZlaVfR0Hv3muDwVjyJuKd8ZzrF8z1eX90jXtTVc07o0/+1C9hwDM1yvfWEgAAAABJRU5ErkJggg==" alt="Google logo" className=" mr-2" />
                                        Google
                                    </button>
                                </form>
                            </div>
                            <p className="mt-4">© 2024 My office . All Rights Reserved</p>
                        </div>
                        <img src="/side right.svg" alt="" className="h-full" />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default LoginPage;