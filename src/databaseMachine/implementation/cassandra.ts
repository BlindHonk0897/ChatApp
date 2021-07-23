import { assign } from "xstate";

const cassandraImplementation = {
    services:{
        connectToDatabase:({cassandraClient}:any,event:any)=>(send:any)=>{
            console.log("CASSANDRA CONNECTING>>...");
            
            const cassandra = require("cassandra-driver");
            var PlainTextAuthProvider = cassandra.auth.PlainTextAuthProvider;
            const clientOptions = {
                contactPoints: ["localhost"],
                localDataCenter: 'datacenter1',
                keyspace: "test_keyspace",
                authProvider: new PlainTextAuthProvider('cassandra', 'cassandra')
            };
            
            const client = new cassandra.Client(clientOptions);

            send({
                type:'CONNECTED_CASSANDRA',
                payload:client
            })
        },
        listeningDatabase:({socket}:any,event:any)=>(send:any)=>{
            
            
        }
    },
    actions:{
        assignCassandraClient:assign({
            cassandraClient:({cassandraClient}:any,{payload}:any)=>{
                  return payload;
            }
        })
        
    }
}


export default cassandraImplementation;