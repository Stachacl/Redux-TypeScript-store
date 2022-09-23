import { TypedUseSelectorHook, useSelector, useDispatch } from "react-redux";
import type {RootState, AppDispatch} from "./store"

export const useAppDispatch = () => useDispatch<AppDispatch> ();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

//Redux provides useDispatch and useSelector hooks for React,  but to it be aware of the types that we have defined in the store.ts file we have to reexport new functions