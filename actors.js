let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
];
function searchForId(academyMembers, memID){

    let result =[]
    let memIDNum =academyMembers.length;
    for (let i = 0; i<memIDNum; i++){
        if (academyMembers[i].memID==memID)
            result.push(academyMembers[i])
            // result=academyMembers[i].name

    }
    return result;
};

let foundMember = searchForId(academyMembers, 187);
console.log("print the entire array");
console.log(foundMember);
console.log("print just the name of the first result");
console.log(foundMember[0].name);


// console.log(printMem)
// let nameOutput = academyMembers.length;
// for(let i=0 ; i<nameOutput;i++){
//     if (academyMembers[i].memID==){


//         console.log(academyMembers[i].name);
//     }

// }




