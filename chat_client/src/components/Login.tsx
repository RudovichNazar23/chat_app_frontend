import React, { JSX } from "react";

import { useReducer } from "react";

import { LoginStateProps } from "../interfaces/LoginStateProps.ts";
import { loginReducer } from "../reducers/loginReducer.ts";
import { api } from "../utils/api.ts";
import { ACCESS, REFRESH } from "../utils/constants.ts";
import { useNavigate } from "react-router-dom";

import FormGroup from "./Registration/FormGroup.tsx";
import LoadingButton from "./LoadingButton.tsx";

export default function Login(): JSX.Element {
    const INITIAL_STATE: LoginStateProps = {
        status: "initial",
        fieldValues: {
            username: "",
            password: ""
        },
        error: "",
    };

    const navigate = useNavigate();

    const [state, dispatch] = useReducer(loginReducer, INITIAL_STATE);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        const name: string = event.target.name;
        const value: string = event.target.value;

        dispatch({...state, fieldValues: {...state.fieldValues, [name]: value}});
    };

    const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const { username, password } = state.fieldValues;

      try {
          dispatch({ ...state, status: "loading" });
          const response = await api.post("/auth/token/pair/", { username: username, password: password });

          const { access, refresh } = response.data;
          dispatch({ ...state, status: "initial" });

          localStorage.setItem(ACCESS, access);
          localStorage.setItem(REFRESH, refresh);
          navigate("/");
      }
      catch(error: any){
          dispatch({...state, status: "initial", error: error.response.data.detail });
      }
    };

    return (
        <div className={`${
            state.status === "initial" ? "grid grid-cols-1 gap-2.5 md:p-10 p-5 lg:w-125 md:w-105 md:mx-auto" :
                "h-screen content-center justify-items-center"
            }`}
        >
            {
                state.status === "loading" ?  <div><LoadingButton/></div> : (
                    <>
                        <div className="text-4xl text-center lg:w-125 md:w-105">
                            Login
                        </div>
                        <div className="grid grid-cols-1 gap-2.5 md:p-10 p-5 lg:w-125 md:w-105 md:mx-auto">
                            <form onSubmit={onSubmitHandler}>
                                <FormGroup
                                    labelValue={"Username"}
                                    inputType={"text"}
                                    name={"username"}
                                    value={state.fieldValues.username}
                                    required={true}
                                    onChange={onChangeHandler}
                                    placeHolder={"Username"}
                                    fieldErrors={[]}
                                />
                                <FormGroup
                                    labelValue={"Password"}
                                    inputType={"password"}
                                    name={"password"}
                                    value={state.fieldValues.password}
                                    required={true}
                                    onChange={onChangeHandler}
                                    placeHolder={"Password"}
                                    fieldErrors={[]}
                                />
                                {
                                    state.error && (
                                        <ul className={"list-disc p-3"}>
                                            <li className={"list-item text-red-500 ml-8"}>{ state.error }</li>
                                        </ul>
                                    )
                                }
                                <div className="p-5 w-full">
                                    <p>Dont have an account?</p>
                                    <p>
                                        <a href={"/registration"}
                                           className={"text-blue-500 hover:underline"}>
                                            Go to registration
                                        </a>
                                    </p>
                                </div>
                                <div className="p-5">
                                    <button
                                        type="submit"
                                        className="
                                        text-white
                                        bg-blue-700
                                        hover:bg-blue-800
                                        focus:ring-4
                                        focus:outline-none
                                        focus:ring-blue-300
                                        font-medium
                                        rounded-lg
                                        text-sm
                                        w-full
                                        px-5
                                        py-2.5
                                        text-center
                                        "
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </>
                )
            }
        </div>
    );
}