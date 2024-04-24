import { registerService } from "@/service/auth.service";

const RegisterPage = async () => {

    async function handleRegister (userInfo) {
        "use server";

        const newUserInfo = {
            firstname: userInfo.get('firstname'),
            lastname: userInfo.get('lastname'),
            email: userInfo.get('email'),
            profile_url: "",
            gender: userInfo.get('gender'),
            password: userInfo.get('password'),
        }

        console.log("Data: ", newUserInfo);

        const res = await registerService(newUserInfo);
        console.log("res in RegisterPage", res);
    }

    return (
        <main className="w-full h-screen flex justify-center items-center bg-slate-300">
            <section className="w-full h-full bg-white p-10">
                <div className="flex flex-col w-full h-[80vh] gap-x-40 p-10">
                    <div className="flex items-center gap-x-3 pl-28 mb-2">
                        <div className=" w-10 h-10  rounded-full border-4 border-blue-500"></div>
                        <h1 className="text-xl font-extrabold leading-tight tracking-tight text-gray-900 md:text-4xl dark:text-white">My-Office</h1>
                    </div>
                    <div className="w-full h-full flex justify-center">
                        <div className="p-6 w-[650px] mx-auto h-full md:space-y-12 sm:p-8">
                            <form className="max-w-xl mx-auto grid grid-cols-2 gap-6" action={handleRegister}>
                                <div className="mb-3">
                                    <label htmlFor="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name :</label>
                                    <input type="text" id="firstname" name="firstname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your first name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name :</label>
                                    <input type="text" id="lastname" name="lastname" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your last name" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email :</label>
                                    <input type="email" id="email" name="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="info@xyz.com" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="gender" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Gender : </label>
                                    <div className="dropdown w-full">
                                        <select id="gender" name="gender" tabIndex={0}
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                            <option disabled selected>Choose you gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password :</label>
                                    <input type="password" id="password" name="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xxxxxxxx" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="confirmpassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm Password :</label>
                                    <input type="password" id="confirmpassword" name="confirmpassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xxxxxxxx" required />
                                </div>
                                <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-[150px] px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign Up</button>
                            </form>
                        </div>
                        <img src="/Group 200.svg" alt="" className="h-full" />
                    </div>

                </div>
            </section>
        </main>
    );
}

export default RegisterPage;