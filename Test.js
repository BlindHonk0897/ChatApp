const cassandra = require("cassandra-driver");
var PlainTextAuthProvider = cassandra.auth.PlainTextAuthProvider;
const clientOptions = {
    contactPoints: ["localhost"],
    localDataCenter: 'datacenter1',
    keyspace: "test_keyspace",
    authProvider: new PlainTextAuthProvider('cassandra', 'cassandra')
};

const client = new cassandra.Client(clientOptions);

const query = "SELECT * from test_table2";
//console.log(client);
// client.connect((err)=>{
//     console.log('Connected',err);
// })
//console.log(client)
client.execute(query,[], (err, results) => {
    if (err) {
      return console.error(err);
    }

    console.log(results);
});

//console.log("hey");