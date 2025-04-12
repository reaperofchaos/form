import React, { useContext } from "react";
import { FormStoreType } from "./types";

export const FormContext = React.createContext<FormStoreType | undefined>(undefined);

export const useFormProvider = ()=> useContext(FormContext) as FormStoreType