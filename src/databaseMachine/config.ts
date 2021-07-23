const config = {
    initial:'initialize',
    states:{
        initialize:{
            invoke:{
                id:'connect-to-database',
                src:'connectToDatabase'
            },
            on:{
                CONNECTED_CASSANDRA:{
                    actions:['assignCassandraClient'],
                    target:'running'
                }
            }
        },
        running:{
            invoke:{
                id:'running-database',
                src:'listeningDatabase'
            },
            
        }
    }
}

export default config;