import { JSX } from "react";
import { useReducer, useEffect } from "react";

import { ProfileState } from "../interfaces/ProfileState.ts";
import { profileReducer } from "../reducers/profileReducer.ts";
import { api } from "../utils/api.ts";

import InfoContainerGroup from "./Profile/InfoContainerGroup.tsx";
import LoadingButton from "./LoadingButton.tsx";

export default function Profile(): JSX.Element {
    const INITIAL_STATE: ProfileState = {
        status: "initial",
        data: undefined,
        error: "",
        isOpen: false,
    };

    const [state, dispatch] = useReducer(profileReducer, INITIAL_STATE);

    const { isOpen } = state;

    useEffect(
        () => {
            dispatch({ ...state, status: "loading" });
            const response = api.get("/user_profile/user/request_user/");
            response
                .then(
                    (res) => dispatch({ ...state, status: "initial", data: res.data.data }),
                )
                .catch(
                    (error) => console.log(error)
                )
        }, []
    );

    if(state.status === "loading"){
        return (
            <div className={"p-1 grid grid-cols-9"}>
                <div className={"col-span-4"}></div>
                <LoadingButton/>
                <div className={"col-span-4"}></div>
            </div>
        );
    }

    if(state.status === "error"){
        return (
            <div className={"text-center text-xl"}>
                Error while loading your data, try again later.
            </div>
        );
    }

    return (
      <div className="grid grid-cols-1 gap-2">
          <div className="text-2xl text-center p-2.5 border-t border-b border-white">
              { state.data?.username }
          </div>
          <div className="col-span-1">
              <div className={"grid grid-cols-12 p-1.5 gap-2"}>
                  <InfoContainerGroup labelValue="Username" textValue={state.data?.username || ""} isEdit={isOpen} inputType={"text"}/>
                  <InfoContainerGroup labelValue={"First name"} textValue={state.data?.first_name || ""} isEdit={isOpen} inputType={"text"}/>
                  <InfoContainerGroup labelValue={"Last name"} textValue={state.data?.last_name || ""} isEdit={isOpen} inputType={"text"}/>
                  <InfoContainerGroup labelValue={"Email"} textValue={state.data?.email || ""} isEdit={isOpen} inputType={"email"}/>
              </div>
          </div>
          <div className={"col-span-1"}>
              <div className={"grid md:grid-cols-6 grid-cols-2 p-1.5 gap-2.5"}>
                  {
                      !isOpen ? (
                              <>
                                  <a
                                      href={"#"}
                                      className={"p-2 border border-blue-600 col-span-3 text-center rounded-md bg-blue-700 hover:bg-blue-500 transition-all duration-1000"}
                                      onClick={() => dispatch({ ...state, isOpen: true })}
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
                                  className={"md:col-span-3 col-span-2 text-center p-2 rounded-md border-cyan-500 bg-cyan-600 hover:bg-cyan-500 transition-all duration-1000"}
                              >
                                  Update
                              </a>
                              <a
                                href={"#"}
                                className={"md:col-span-3 col-span-2 text-center p-2 border border-gray-600 hover:bg-gray-600 transition-all duration-1000 rounded-md bg-gray-700"}
                                onClick={() => dispatch({ ...state, isOpen: false })}
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