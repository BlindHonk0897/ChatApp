import { Machine } from "xstate";
import config from "./config";
import cassandraImplemention from './implementation/cassandra';
import redisImplementation  from './implementation/redis';
import rethinkImplementation from './implementation/rethink';


const context:any = {
   cassandraClient:null,
   redisClient:null,
   rethinkClient:null,
}

export const  DatabaseMachine = (implementationType:any) => {
    if(implementationType == 'CASSANDRA'){
        return Machine({...config, context}, cassandraImplemention)
    }else if(implementationType == 'RETHINK'){
        return Machine({...config, context}, rethinkImplementation)
    }else{
        return Machine({...config, context}, redisImplementation)
    }
}
