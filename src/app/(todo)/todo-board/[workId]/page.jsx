import AddNewTaskComponent from "@/components/AddNewTaskComponent";
import TodoCardComponent from "@/components/TodoCardComponent";
import { getTaskByWorkspaceId, getWorkspaceWithId } from "@/service/workspace.service";

export default async function WorkSpaceDetailPage({ params }) {
    const workspaceId = params.workId;
    const workspaceData = await getWorkspaceWithId(workspaceId);
    const workspace = workspaceData.data;

    const allTasks = ['Todo', 'Working On', 'Checking', 'Complete'];

    const taskData = await getTaskByWorkspaceId(workspace.workSpaceId);
    console.log("Workspace Id: ", workspace.workSpaceId);

    return (
        <div className="p-7">
            <h1 className=" font-semibold text-2xl text-black">{workspace.workspaceName}</h1>
            <div className=" mt-5 grid grid-cols-4 gap-x-3 w-full">
                {allTasks.map((task, index) => (
                    <div>
                        <h1 className={`${index}` == 0 ? "border-b-4 pb-3 border-todo text-xl" :
                            `${index}` == 1 ? "border-b-4 pb-3 border-workingOn text-xl" :
                                `${index}` == 2 ? "border-b-4 pb-3 border-checking text-xl" :
                                    "border-b-4 pb-3 border-completed text-xl"}>{task}</h1>
                        <div className="w-full">
                            {taskData.data.map(async (task) => {
                                if (task.status == index + 1) {
                                    return (
                                        <div className="w-full">
                                            <TodoCardComponent taskDetail={task} />
                                        </div>
                                    )
                                }
                            })}

                        </div>
                    </div>
                ))}
            </div>

            <div className=" mt-10 float-right">
                <AddNewTaskComponent workSpaceId={workspace.workSpaceId}/>
            </div>
        </div>
    )
}