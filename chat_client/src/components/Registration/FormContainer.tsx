import React, { JSX } from "react";

import { useReducer, useState } from "react";
import { api } from "../../utils/api";
import { ACCESS, REFRESH } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import { registrationReducer } from "../../reducers/registrationReducer";

import FormGroup from "./FormGroup";
import LoadingButton from "../LoadingButton";
import Modal from "./Modal.tsx";

import { AxiosResponse } from "axios";
import { RegistrationStateProps } from "../../interfaces/RegistrationStateProps";

export default function FormContainer(): JSX.Element {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    const INITIAL_STATE: RegistrationStateProps = {
        status: "initial",
        fieldsValues: {
            username: "",
            password: "",
            repeatPassword: ""
        },
        fieldsErrors: {
            username: [],
            password: [],
            repeatPassword: [],
        },
    };

    const [state, dispatch] = useReducer(registrationReducer, INITIAL_STATE);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        const name = event.currentTarget.name;
        const value = event.target.value;

        dispatch({...state, fieldsValues: { ...state.fieldsValues, [name]: value }});
    };

    const onSubmitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { username, password, repeatPassword } = state.fieldsValues;

        if(password !== repeatPassword){
            dispatch({...state, fieldsErrors: {...state.fieldsErrors, repeatPassword: ["Passwords don't match"]}});
            return;
        }

        try {
            await api.post("/user_profile/user/", {username: username, password: password});
            try{
                const response: AxiosResponse = await api.post("/auth/token/pair/", {username: username, password: password});
                if(response.status === 200){
                    localStorage.setItem(ACCESS, response.data.access);
                    localStorage.setItem(REFRESH, response.data.refresh);
                    navigate("/");
                }
                else {
                    setIsOpen(true);
                }
            }
            catch (error: any){
                setIsOpen(true)
            }
        }
        catch (error: any){
            const responseData: any = error.response.data;

            for(const key in responseData){
                dispatch({...state, fieldsErrors: { ...state.fieldsErrors, [key]: responseData[key] }})
            }
        }
    };

    return (
        <div className="h-screen grid grid-cols-1 gap-2.5 place-content-center place-items-center md:mt-20 mt-30">
            {
                state.status === "loading" ? (
                    <LoadingButton/>
                ) : (
                    <>
                        {isOpen && <Modal/>}
                        <h1 className="text-4xl font-extrabold mt-5">
                            Registration
                        </h1>
                        <form className="md:w-125 z-1" id="form" onSubmit={onSubmitHandler} method={"POST"}>
                            <FormGroup 
                                labelValue="Username" 
                                inputType="text" 
                                placeHolder="superUser228" 
                                name="username" 
                                value={state.fieldsValues.username} 
                                onChange={onChangeHandler}
                                fieldErrors={state.fieldsErrors.username}
                                required={true}
                            />
                            <FormGroup 
                                labelValue="Password" 
                                inputType="password" 
                                name="password" 
                                value={state.fieldsValues.password}
                                onChange={onChangeHandler}
                                fieldErrors={state.fieldsErrors.password}
                                required={true}
                            />
                            <FormGroup 
                                labelValue="Repeat password" 
                                inputType="password" 
                                name="repeatPassword" 
                                value={state.fieldsValues.repeatPassword}
                                onChange={onChangeHandler}
                                fieldErrors={state.fieldsErrors.repeatPassword}
                                required={true}
                            />
                            <div className="grid grid-cols-1 gap-5 p-5">
                                <div className="p-1">
                                    <p>Already have an account?</p>
                                    <p><a href="/login" className="text-blue-600 hover:underline">Go to login!</a></p>
                                </div>
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
                                        sm:w-auto 
                                        px-5 
                                        py-2.5 
                                        text-center 
                                        "
                                    >
                                        Submit
                                    </button>
                            </div>
                        </form>
                    </>
                )
            }
        </div>
    );
};
