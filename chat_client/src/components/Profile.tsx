import { JSX } from "react";
import { useState } from "react";

import InfoContainerGroup from "./Profile/InfoContainerGroup.tsx";

export default function Profile(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return (
      <div className="grid grid-cols-1 gap-2">
          <div className="text-2xl text-center p-2.5 border-t border-b border-white">Admin</div>
          <div className="col-span-1">
              <div className={"grid grid-cols-12 p-1.5 gap-2"}>
                  <InfoContainerGroup labelValue="Username" textValue={"username"} isEdit={isOpen} inputType={"text"}/>
                  <InfoContainerGroup labelValue={"First name"} textValue={"first name"} isEdit={isOpen} inputType={"text"}/>
                  <InfoContainerGroup labelValue={"Last name"} textValue={"last name"} isEdit={isOpen} inputType={"text"}/>
                  <InfoContainerGroup labelValue={"Email"} textValue={"email"} isEdit={isOpen} inputType={"email"}/>
              </div>
          </div>
          <div className={"col-span-1"}>
              <div className={"grid grid-cols-6 p-1.5 gap-2.5"}>
                  {
                      !isOpen ? (
                              <>
                                  <a
                                      href={"#"}
                                      className={"p-2 border border-blue-600 col-span-3 text-center rounded-md bg-blue-700 hover:bg-blue-500 transition-all duration-1000"}
                                      onClick={() => setIsOpen(true)}
                                  >
                                      Edit
                                  </a>
                                  <a href={"#"}
                                     className={
                                         "p-2 border border-red-700 col-span-3 text-center rounded-md bg-red-600 hover:bg-red-500 transition-all duration-1000"
                                     }
                                  >
                                      Delete
                                  </a>
                              </>
                      ) : (
                          <>
                              <a
                                  href={"#"}
                                  className={"col-span-3 text-center p-2 rounded-md border-cyan-500 bg-cyan-600 hover:bg-cyan-500 transition-all duration-1000"}
                              >
                                  Update
                              </a>
                              <a
                                href={"#"}
                                className={"col-span-3 text-center p-2 border border-gray-600 hover:bg-gray-600 transition-all duration-1000 rounded-md bg-gray-700"}
                                onClick={() => setIsOpen(false)}
                              >
                                Cancel
                              </a>
                          </>
                      )
                  }
              </div>
          </div>
      </div>
    );
};