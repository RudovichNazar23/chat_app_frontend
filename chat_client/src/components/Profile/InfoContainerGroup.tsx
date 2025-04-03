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
            <div className="grid md:grid-cols-8 grid-cols-12 md:p-5 p-2 md:gap-0.5 gap-2">
                <div className={"md:col-span-1 col-span-12 self-center"}>{ labelValue }:</div>
                {
                    isEdit
                        ?
                        <div className={"md:col-span-4 col-span-12"}>
                            <input type={inputType} value={textValue} className={"border\n" +
                                "text-white\n" +
                                "text-sm \n" +
                                "rounded-lg \n" +
                                "block \n" +
                                "w-full \n" +
                                "p-2.5 \n" +
                                "bg-gray-700\n" +
                                "border-gray-600\n" +
                                "placeholder-gray-400  \n" +
                                "focus:ring-blue-500\n" +
                                "focus:border-blue-500"}/>
                        </div>
                        :
                        <div className={"md:col-span-7 text-start col-span-6 md:ml-0 ml-3"}>
                            {textValue ? textValue : <i className={"text-gray-400 italic"}>Not provided</i>}
                        </div>
                }
            </div>
        </div>
    );
}