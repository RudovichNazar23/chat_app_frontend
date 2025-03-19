import { JSX } from "react";

import FormGroup from "./Registration/FormGroup.tsx";

export default function Login(): JSX.Element {
    return (
        <div className="grid grid-cols-1 gap-2.5 md:p-10 p-1 md:mt-5 mt-10">
            <div className="text-4xl text-center">
                Login
            </div>
            <div className="grid grid-cols-1 gap-2.5 md:p-10 p-5 lg:w-125 md:w-105 md:mx-auto">
                <FormGroup
                    labelValue={"Username"}
                    inputType={"text"}
                    name={"username"}
                    value={""}
                    required={true}
                    onChange={() => undefined}
                    placeHolder={"Username"}
                    fieldErrors={[]}
                />
                <FormGroup
                    labelValue={"Password"}
                    inputType={"password"}
                    name={"password"}
                    value={""}
                    required={true}
                    onChange={() => undefined}
                    placeHolder={"Password"}
                    fieldErrors={[]}
                />
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
            </div>
        </div>
    );
}