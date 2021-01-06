import { Machine } from "xstate";
import config from "./config";
import  implementation  from "./implementation";

const context:any = {
    port:3000,
    url:'http://localhost:',
    socket:null,
    messages:[]
}



const  clientMachine = () => {
    return Machine({...config, context}, implementation)
}


// const machine =  Machine({
//   id:'',
//   initial:'idle',
//   context:{
     
//   },
//   states:{
//      idle:{
//         on:{
//             INITIAL:'login'
//         }
//      },
//      login:{
//         on:{
//             TYPE:'typing'
//         }
//      },
//      typing:{
//          on:{
//             SUBMIT:'submit'
//          }
//      },
//      submit:{
 
//      }

//   },

// },{
//     actions:{

//     },
//     services:{

//     }
// })
export default clientMachine;






