import { User } from "./User";

export interface ProfileState {
    status: "initial" | "loading" | "error";
    data: User | undefined;
    error: string;
    isOpen: boolean;
}
