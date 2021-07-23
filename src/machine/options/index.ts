import { MachineOptions } from "xstate";
import {IContext } from "../types";

import actions from "./actions";
import services from "./services";
import guards from "./guards";


const options: MachineOptions<IContext,any> = {
    actions,
    services,
    guards,
    activities:{},
    delays:{},
};


export default options;