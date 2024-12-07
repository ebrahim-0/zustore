declare const defaultConfig: {
    debug: boolean;
};
export declare let config: typeof defaultConfig;
export declare const setConfig: (newConfig: any) => any;
declare let userCreateDispatch: ((data: {
    type: string;
    payload: any;
}, tools: {
    update: (payload?: any, key?: string, cb?: (pa?: object) => void) => void;
    addState: (newState: {
        [key: string]: any;
    }, key?: string) => void;
    reset: (payload: string | string[]) => void;
    dirty: (payload: string | string[]) => void;
}, actions: Record<string, string>) => void | undefined) | undefined;
export type CreateDispatchType = typeof userCreateDispatch;
export interface DispatchParams {
    state: Record<string, any>;
    addState: (newState: {
        [key: string]: any;
    }, key?: string) => void;
    update: (payload?: any, key?: string, cb?: (pa?: object) => void) => void;
}
interface GlobalState {
    state: Record<string, any>;
    actions: Record<string, string>;
    tempState: Record<string, any>;
    addState: (newState: {
        [key: string]: any;
    }, key?: string) => void;
    dispatch: (payload?: any, key?: string, cb?: (pa?: DispatchParams) => void) => void;
    reset: (payload: string | string[]) => void;
    dirty: (payload: string | string[]) => void;
    dispatcher: (action: string, payload: Record<string, any>) => void;
    createDispatcher: CreateDispatchType;
}
export declare const initializeState: (globalState?: Record<string, any>, createDispatch?: CreateDispatchType) => void;
export declare const useDispatch: import("zustand").UseBoundStore<import("zustand").StoreApi<GlobalState>>;
export {};
