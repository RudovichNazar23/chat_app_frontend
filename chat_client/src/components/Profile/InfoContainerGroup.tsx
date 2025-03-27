import {HTMLInputTypeAttribute, JSX} from "react";

interface InfoContainerGroupProps {
    labelValue: string;
    textValue: string;
    isEdit: boolean;
    inputType: HTMLInputTypeAttribute;
}

export default function InfoContainerGroup({ labelValue, textValue, isEdit, inputType }: InfoContainerGroupProps): JSX.Element {
    return (
        <div className="col-span-8">
            <div className="grid grid-cols-8 p-5 gap-0.5">
                <div className={"col-span-1"}>{ labelValue }:</div>
                <div className={"col-span-7 text-start"}>{ textValue }</div>
            </div>
        </div>
    );
}