import value from "./export.js" //we can give any variable name to the imported value when we export the value using default export.
console.log(value);
/*
import {arr1} from "./export.js" //for named export
console.log(arr1);
import { d } from "./export.js";    
console.log(d);
*/
import {arr1,d} from "./export.js"
console.log(arr1+d);


import user2 from "./test.js"
console.log(user2);

import {fun} from "./export.js"
console.log(fun());
