import { getServerSession } from "next-auth";
import { authOption } from "./[...nextauth]/route";

export const headerToken = async () => {
    //get token
    const session = await getServerSession(authOption);

    return {
        authorization: `Bearer ${session?.user?.token}`,
        "Content-Type": " application/json",
    }
}