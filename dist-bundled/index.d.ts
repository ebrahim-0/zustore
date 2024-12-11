import React, { ReactNode } from "react";
export declare const parseStringify: <T>(value: T) => T;
type apiFunctionType = ({ state, addState, dispatch, }: {
    state: Record<string, any>;
    dispatch: (newState: Record<string, any>, key?: string) => void;
    addState: (newState: Record<string, any>, key?: string) => void;
}) => any;
export declare const CreateDispatch: (handler: ({ name, payload, tools, }: {
    name: string;
    payload: any;
    tools: Tools;
}) => void) => CreateDispatchType;
type InitialState = Record<string, any>;
export type CreateDispatchType = (args: {
    name: string;
    payload: any;
    tools: Tools;
}) => void;
interface Tools {
    dispatch: (newState: Record<string, any>, key?: string) => void;
    addState: (newState: Record<string, any>, key?: string) => void;
    reset: (keys: string | string[]) => void;
    dirty: (keys: string | string[]) => void;
    state: Record<string, any>;
}
export declare const useDispatch: () => {
    state: Record<string, any>;
    dispatcher: (functionName: string, payload?: any) => void;
    addState: (newState: Record<string, any>, key?: string) => void;
    dispatch: (newState: Record<string, any>, key?: string) => void;
    reset: (keys: string | string[]) => void;
    dirty: (keys: string | string[]) => void;
    ApiCall: (apiFunction: apiFunctionType) => void;
};
export declare function useSelector<T = any>(keyPaths: string | string[], defaultValues?: T | T[]): any;
export declare const initial: (initialState: InitialState, createDispatch?: CreateDispatchType) => React.FC<{
    children: ReactNode;
}>;
export {};
