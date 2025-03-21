import { User } from './User.ts';

export interface UserContainerProps {
    status: "initial" | "loading" | "error";
    data: Array<User>;
    errorMessage: string;
}