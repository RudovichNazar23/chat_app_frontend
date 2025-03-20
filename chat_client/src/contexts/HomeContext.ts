import { createContext } from "react";
import { HomeContextProps } from "../interfaces/HomeContextProps.ts";

export const HomeContext = createContext<HomeContextProps | undefined>(undefined);