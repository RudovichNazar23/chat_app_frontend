import { HTMLInputTypeAttribute, JSX } from "react";

interface FormGroupProps {
    labelValue: string;
    inputType: HTMLInputTypeAttribute;
    placeHolder?: string;
    name: string,
    value: string | number | boolean,
    required: boolean,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
    onBlur: (event: React.FocusEvent<HTMLInputElement>) => void,
    fieldErrors: Array<string>
};

export default function FormGroup({ labelValue, inputType, placeHolder, onChange, name, fieldErrors, onBlur }: FormGroupProps): JSX.Element {
    return (
        <div className="p-5 w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                { labelValue }:
            </label>
            <input 
                type={inputType} 
                className="
                bg-gray-50 
                border 
                border-gray-300 
                text-gray-900 
                text-sm 
                rounded-lg 
                block 
                w-full 
                p-2.5 
                dark:bg-gray-700 
                dark:border-gray-600 
                dark:placeholder-gray-400 
                dark:text-white 
                dark:focus:ring-blue-500 
                dark:focus:border-blue-500" 
                placeholder={placeHolder}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
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