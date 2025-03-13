import React, { JSX } from "react";

import { useState } from "react";
import { api } from "../../utils/api";
import { ACCESS, REFRESH } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

import FormGroup from "./FormGroup";
import { AxiosError } from "axios";

interface FieldsProps {
    username: string,
    password: string,
    repeatPassword: string
};

interface FieldsErrorsProps {
    username: Array<string>,
    password: Array<string>,
    repeatPassword: Array<string>
};

export default function FormContainer(): JSX.Element {
    const navigate = useNavigate();

    const [fields, setFieldValue] = useState<FieldsProps>({
        username: "",
        password: "",
        repeatPassword: ""
    });

    const [fieldsErrors, setFieldErrors] = useState<FieldsErrorsProps>({
        username: [],
        password: [],
        repeatPassword: []
    });

    const [isDisabled, setIsDisabled] = useState<boolean>(false);

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();

        const name = event.currentTarget.name;
        const value = event.target.value;
        setFieldValue((prev: FieldsProps) => { return { ...prev, [name]: value } })
    };

    const onBlurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
        if(!event.currentTarget.value){
            setIsDisabled(true);
            setFieldErrors(
                (prev) => { return { ...prev, [event.target.name]: ["This field is empty"] } }
            );
        }
        else{
            setIsDisabled(false);
            setFieldErrors(
                (prev) => { return { ...prev, [event.target.name]: [] } }
            );
        }
    }

    const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        const {password, repeatPassword, username} = fields;

        if(password !== repeatPassword){
            setFieldErrors(
                (prev: FieldsErrorsProps) => { return {...prev, ["repeatPassword"]: prev.repeatPassword.concat(["Passwords don't match",])} }
            );
            return;
        }
        else{
            if(!password || !repeatPassword || !username){
                return;
            }

            const response = api.post("/user_profile/user/", {username: username, password: password});
            response
            .then(
                (res) => {
                    if(res.status === 201){
                        const response = api.post("/auth/token/pair/", {username: username, password: password});
                        response
                        .then((res) => {
                            if(res.status === 200){
                                localStorage.setItem(ACCESS, res.data.access);
                                localStorage.setItem(REFRESH, res.data.refresh);
                                return navigate("/");
                            }
                        })
                    }
                }
            )
            .catch((error: AxiosError) => {
                console.log(error);
                const responseData: any = error.response?.data;

                for(let key in responseData){
                    setFieldErrors(
                        (prev) => { return {...prev, [key]: responseData[key]} }
                    );
                }
            })
        }
    };

    return (
        <div className="h-screen grid grid-cols-1 gap-2.5 place-content-center place-items-center md:mt-20 mt-30">
            <h1 className="text-4xl font-extrabold mt-5">
                Registration
            </h1>
            <form className="md:w-125" id="form">
                <FormGroup 
                    labelValue="Username" 
                    inputType="text" 
                    placeHolder="superUser228" 
                    name="username" 
                    value={fields.username} 
                    onChange={onChangeHandler}
                    onBlur={onBlurHandler}
                    fieldErrors={fieldsErrors.username}
                    required={true}
                />
                <FormGroup 
                    labelValue="Password" 
                    inputType="password" 
                    name="password" 
                    value={fields.password}
                    onChange={onChangeHandler}
                    onBlur={onBlurHandler}
                    fieldErrors={fieldsErrors.password}
                    required={true}
                />
                <FormGroup 
                    labelValue="Repeat password" 
                    inputType="password" 
                    name="repeatPassword" 
                    value={fields.repeatPassword}
                    onChange={onChangeHandler}
                    onBlur={onBlurHandler}
                    fieldErrors={fieldsErrors.repeatPassword}
                    required={true}
                />
                <div className="grid grid-cols-1 gap-5 p-5">
                    <div className="p-1">
                        <p>Already have an account?</p>
                        <p><a href="/login" className="text-blue-600 hover:underline">Go to login!</a></p>
                    </div>
                    <button 
                        type="submit" 
                        className={`
                            ${
                                isDisabled 
                                ? 
                                    "bg-gray-500 cursor-not-allowed" 
                                : 
                                    "text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
                            }
                            font-medium 
                            rounded-lg 
                            text-sm 
                            w-full 
                            sm:w-auto 
                            px-5 
                            py-2.5 
                            text-center 
                            `}
                            disabled={isDisabled}
                            onClick={onClickHandler}
                        >
                            Submit
                        </button>
                </div>
            </form>
        </div>
    );
};
