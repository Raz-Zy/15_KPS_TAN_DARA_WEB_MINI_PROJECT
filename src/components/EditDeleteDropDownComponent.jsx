'use client'

import { deleteWorkspace } from "@/actions/workspace.action";
import Image from "next/image";
import React from "react";

export default function EditDeleteDropDownComponent({ workSpaceId }) {
  console.log(workSpaceId)

  return (
    <details className="dropdown">
      <summary className="btn bg-white shadow-none border-0 p-0 h-0 min-h-0">
        <Image
          src={"/assets/icons/tabler_dots.svg"}
          width={20}
          height={20}
          alt={"edit delete card"}
        />
      </summary>
      <ul className="p-2 shadow menu gap-y-2 dropdown-content z-[1] bg-base-100 rounded-box w-52">
        <li>
          <form action={{}}>
            <Image
              src={"/assets/icons/Edit.svg"}
              width={20}
              height={20}
              alt={"edit delete card"}
            />
            Edit
          </form>
        </li>
        <li>
          <form action={async() => deleteWorkspace(workSpaceId)}>
            <button type="submit" className="flex">
              <Image
                src={"/assets/icons/Archive.svg"}
                width={20}
                height={20}
                alt={"edit delete card"}
              />
              Delete
            </button>
          </form>
        </li>
      </ul>
    </details>
  );
}
