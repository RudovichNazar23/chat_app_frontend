export interface LoginStateProps {
    status: "initial" | "loading";
    fieldValues: {
        username: string;
        password: string;
    }
    error: string;
}