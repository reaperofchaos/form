import React from "react";
import { FormStoreType } from "./types";

export const FormContext = React.createContext<FormStoreType | undefined>(undefined);