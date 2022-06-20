import * as React from "react";
import { PersonsType } from "../Types/types";
  
const PersonsContext = React.createContext<PersonsType | null>(null );
export default PersonsContext ; 