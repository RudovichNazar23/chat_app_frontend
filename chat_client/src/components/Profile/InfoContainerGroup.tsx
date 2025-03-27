import {HTMLInputTypeAttribute, JSX} from "react";

interface InfoContainerGroupProps {
    labelValue: string;
    textValue: string;
    isEdit: boolean;
    inputType: HTMLInputTypeAttribute;
}

export default function InfoContainerGroup({ labelValue, textValue, isEdit, inputType }: InfoContainerGroupProps): JSX.Element {
    return (
        <div className="md:col-span-8 col-span-12">
            <div className="grid md:grid-cols-8 grid-cols-12 md:p-5 p-2 md:gap-0.5">
                <div className={"md:col-span-1 col-span-6"}>{ labelValue }:</div>
                <div className={"md:col-span-7 text-start col-span-6"}>{ textValue }</div>
            </div>
        </div>
    );
}