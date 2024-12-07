import React, { ReactNode } from "react";
import { CreateDispatchType } from "./index";
interface StateProviderProps {
    globalState?: Record<string, any>;
    createDispatch?: CreateDispatchType;
    children: ReactNode;
}
export declare const StateProvider: React.FC<StateProviderProps>;
export {};
