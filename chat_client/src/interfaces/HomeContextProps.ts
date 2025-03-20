import { HomeStateProps } from "./HomeStateProps.ts";
import { HomeStatusType } from "../types/HomeStatusType.ts";

export interface HomeContextProps {
    homeStatus: HomeStatusType;
    homeStateDispatch: ({ status }: HomeStateProps) => void;
}