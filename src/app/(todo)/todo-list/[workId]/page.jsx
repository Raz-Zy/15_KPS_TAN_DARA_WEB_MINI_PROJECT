import ListCardComponent from "@/components/ListCardComponent";
import { getTaskByWorkspaceId, getWorkspaceWithId } from "@/service/workspace.service";

const BoardDetailPage = async ({ params }) => {
    const workspaceId = params.workId;
    const workspaceData = await getWorkspaceWithId(workspaceId);
    const workspace = workspaceData.data;

    const taskData = await getTaskByWorkspaceId(workspace.workSpaceId);
    console.log("task: ", taskData);

    return (
        <div>
            <div className='flex w-full'>
                <div>
                    {
                        taskData?.data?.map(task => {
                            return (
                                <div key={task?.taskId} className=''>
                                    <ListCardComponent task={task} />
                                    <br />
                                </div>

                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default BoardDetailPage;