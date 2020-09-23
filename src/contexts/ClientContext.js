import { createContext } from "react";
import clients from "../data/clients";

const ClientContext = createContext(clients);
export default ClientContext;
