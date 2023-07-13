function getObject(object) {
    var newobject = {};
    key = 0;
    newobject[key] = object[0];
    var lengthofobject = Object.keys(object).length;
    var lengthofnewobject = Object.keys(newobject).length;
    var match;


    for (let i = 1; i < lengthofobject; i++) {
        match = true;
        for (let j = 0; j < lengthofnewobject; j++) {
            if (object[i].marks == newobject[j].marks) {
                match = false;
            }
        }
        if (match) {
            key = key + 1;
            newobject[key] = object[i];
            lengthofnewobject = lengthofnewobject + 1;
        }
    }
    console.log(newobject);

}

let object = {
    "0": { age: 18, name: "john", marks: "400" },
    "1": { age: 17, name: "julie", marks: "400" },
    "2": { age: 16, name: "Robin", marks: "200" },
    "3": { age: 16, name: "Bella", marks: "300" }
    };
getObject(object);