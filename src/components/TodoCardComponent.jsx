'use client'

import Image from "next/image";
import React from "react";
import EditDeleteDropDownComponent from "./EditDeleteDropDownComponent";
import { updateStatusTask } from "@/actions/workspace.action";

export default function TodoCardComponent({ taskDetail }) {
  const timeStamp = new Date(taskDetail.startDate).toString();
  const [_, m, d, y] = timeStamp.split(" ");
  console.log(taskDetail)

  return (
    <div className=" w-full border border-gray rounded-lg mt-5 relative">
      <div className="p-5">
        <div className="flex justify-between">
          <p>{taskDetail.taskTitle}</p>
          <div className="absolute top-2 right-3">
            {/* <Image
              src={"/assets/icons/tabler_dots.svg"}
              width={20}z
              height={20}
              alt={"edit delete card"}
            /> */}
            <EditDeleteDropDownComponent />
          </div>
        </div>

        <p className="text-gray">{taskDetail.description}</p>
        <div className="flex justify-between items-center mt-5">
          <div className="bg-bgTag text-colorTag py-1 px-5 rounded-lg font-bold">
            {taskDetail.tag}
          </div>
          <div className={`${taskDetail.status}` == 1 ? "rounded-full w-5 h-5 bg-todo" :
            `${taskDetail.status}` == 2 ? "rounded-full w-5 h-5 bg-workingOn " :
              `${taskDetail.status}` == 3 ? "rounded-full w-5 h-5 bg-checking" :
                "rounded-full w-5 h-5 bg-completed"}></div>
        </div>
      </div>

      <hr className="text-gray" />
      <div className="flex justify-between">
        <form action={async () => await updateStatusTask(taskDetail.taskId, taskDetail.status+1)} className="flex items-center px-3">
          <button type="submit">
            <Image
              src={`/assets/icons/${taskDetail.status == 1 ? "calendar.svg" : 'calendar.svg'}`}
              width={20}
              height={20}
              alt="calendar icon" />
          </button>
        </form>
        <div className="flex gap-2 justify-end pr-3 py-2">
          <Image
            src={"/assets/icons/calendar.svg"}
            width={20}
            height={20}
            alt="calendar icon"
          />
          <p className="text-gray">{`${m} ${d}, ${y}`}</p>
        </div>
      </div>
    </div>
  );
}
