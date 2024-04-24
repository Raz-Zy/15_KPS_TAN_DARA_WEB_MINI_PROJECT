import Image from "next/image";
import WorkspacePopupComponent from "./WorkspacePopupComponent";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";
import Link from "next/link";
import { getAllWorkspaceService } from "@/service/workspace.service";

export default async function SidebarComponent() {

  const workspaceData = await getAllWorkspaceService();

  return (
    <div className="pl-10 mt-6 h-screen w-[300px]">
      <div className="flex justify-between">
        <Image src={"/assets/icons/logo.svg"} width={150} height={100} alt=""/>
        <Image src={"/assets/icons/arrow.svg"} width={25} height={30} alt="" />
      </div>

      {/* workspace */}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">workspace</h1>
        <WorkspacePopupComponent />
      </div>

      {/* each workspace */}
      {workspaceData.data.map(workspace => (
        <div key={workspace.workSpaceId} className="flex items-center w-full p-1 hover:bg-slate-200 active:bg-slate-200 hover:cursor-pointer hover:rounded-md">
          <div className={`${workspace.workSpaceId % 2}` == 0 ? "rounded-full w-2 h-2 bg-colorTag" : "rounded-full w-2 h-2 bg-completed"}></div>
          <div className="flex justify-between items-center w-full pl-3">
            <Link href={`/todo-board/${workspace.workSpaceId}`} >
              <div className=" px-2 py-1">{workspace.workspaceName}</div>
            </Link>

            <EditDeleteDropDownComponent workSpaceId={workspace.workSpaceId}/>
          </div>


        </div>
      ))}



      {/* favorite*/}
      <div className="flex justify-between mt-10">
        <h1 className="uppercase text-gray font-bold">favorite</h1>

        <Image src={"/assets/icons/favorite.svg"} width={22} height={22} alt=""/>
      </div>

      {/* each favorite workspace */}
      <div className="flex items-center mt-5 w-full">
        <div className="rounded-full w-2 h-2 bg-workingOn"></div>
        <div className="flex justify-between w-full pl-3">
          <p>GKS Scholarship</p>
        </div>
      </div>
    </div>
  );
}
