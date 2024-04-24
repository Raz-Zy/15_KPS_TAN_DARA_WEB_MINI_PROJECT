import { headerToken } from "@/app/api/auth/headerToken";
import { baseUrl } from "@/utils/constants";

//get token from cookies
// const session = await getServerSession(authOption);


//Get all Workspace
export const getAllWorkspaceService = async () => {
    const header = await headerToken();
    const res = await fetch(`${baseUrl}/api/todo/v1/workspaces`, {
        headers: header,
        next: { tags: "workspace" },
    });

    const payload = await res.json();
    return payload;
}

//Insert new workspace
export const insertNewWorkspaceService = async (newWorkspace) => {
    const header = await headerToken();
    const res = await fetch(`${baseUrl}/api/todo/v1/workspaces`, {
        method: 'POST',
        body: JSON.stringify(newWorkspace),
        headers: header
    });

    const payload = await res.json();
    return payload;
}

//Get workspace with id
export const getWorkspaceWithId = async (id) =>  {
    const header = await headerToken();
    const res = await fetch(`${baseUrl}/api/todo/v1/workspace/${id}`, {
        method: 'GET',
        headers: header
    });

    const payload = await res.json();
    return payload;
}

//Get tasks by workspace id
export const getTaskByWorkspaceId = async (id) => {
    const header = await headerToken();
    const res = await fetch(`${baseUrl}/api/todo/v1/tasks?workspaceId=${id}`, {
        method: 'GET',
        headers: header,
        next: {tags: ['allTasks']}
    });

    const payload = await res.json();
    return payload;
}


//update task by task id
export const updateStatusTaskService = async (id, status) => {
    const header = await headerToken();
    const res = await fetch(`${baseUrl}/api/todo/v1/tasks/change-status/${id}`, {
        method: 'PUT',
        body: status,
        headers: header,
    });

    const data = await res.json();
    return data;
}

//add new task
export const insertNewTaskService = async ( newTask ) => {
    const header = await headerToken();
    const res = await fetch(`${baseUrl}/api/todo/v1/tasks`, {
        method: 'POST',
        body: JSON.stringify(newTask),
        headers: header,
    });

    const data = await res.json()
    console.log(data);
    return data;
}

export const deleteWorkspaceService = async (id) => {
    const header = await headerToken();
    const res = await fetch(`${baseUrl}/api/todo/v1/workspaces/${id}`, {
        method: 'DELETE',
        headers: header,
    });

    const data = await res.json()
    console.log(data);
    return data;
}