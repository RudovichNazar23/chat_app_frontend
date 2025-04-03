import { HTMLInputTypeAttribute, JSX } from "react";

interface FormGroupProps {
    labelValue: string;
    inputType: HTMLInputTypeAttribute;
    placeHolder?: string;
    name: string,
    value: string | number | boolean,
    required: boolean,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    fieldErrors: Array<string>
}

export default function FormGroup({ labelValue, inputType, placeHolder, onChange, name, fieldErrors, required }: FormGroupProps): JSX.Element {
    return (
        <div className="p-5 w-full">
            <label className="block mb-2 text-sm font-medium text-white">
                { labelValue }:
            </label>
            <input 
                type={inputType} 
                className="
                border
                text-white
                text-sm 
                rounded-lg 
                block 
                w-full 
                p-2.5 
                bg-gray-700
                border-gray-600
                placeholder-gray-400
                focus:ring-blue-500
                focus:border-blue-500"
                placeholder={placeHolder}
                name={name}
                required={required}
                onChange={onChange}
            />
            {
                fieldErrors.length > 0 && (
                    <ul className="list-disc p-3 m-2 grid grid-cols-1 gap-1.5">
                        {
                            fieldErrors.map(
                                (error: string, index: number) => <li key={index} className="text-red-500"> { error }</li> 
                            )
                        }
                    </ul>
                )
            }
        </div>
    )
};