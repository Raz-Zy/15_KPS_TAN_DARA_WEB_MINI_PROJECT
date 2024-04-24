'use server'

import { deleteWorkspaceService, updateStatusTaskService } from "@/service/workspace.service"
import { revalidateTag } from "next/cache";

export const updateStatusTask = async (id, status) => {
    console.log("id of task: ", id, status)
    var newStatus = status;
    if(status == 5){
        newStatus = 4;
    }
    const res = await updateStatusTaskService(id, newStatus);
    revalidateTag("allTasks");
}

export const deleteWorkspace = async(id) =>  {
    await deleteWorkspaceService(id);
    revalidateTag("workspace");
}