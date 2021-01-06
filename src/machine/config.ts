const config = {
    initial:'initialize',
    states:{
        initialize:{
            invoke:{
                id:'connect-to-server',
                src:'connectToServer'
            },
            on:{
                CONNECTED:{
                    actions:['assignSocket'],
                    target:'listening'
                }
            }
        },
        listening:{
            invoke:{
                id:'listening-to-server',
                src:'listeningToServer'
            },
            on:{
                ASSIGN:{
                    actions:['assignMessage']
                }
            }
        }
    }
}

export default config;