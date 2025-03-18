interface FieldsProps {
    username: string,
    password: string,
    repeatPassword: string
}

interface FieldsErrorsProps {
    username: Array<string>,
    password: Array<string>,
    repeatPassword: Array<string>
}

export interface RegistrationStateProps {
    status: "initial" | "loading",
    fieldsValues: FieldsProps,
    fieldsErrors: FieldsErrorsProps,
}