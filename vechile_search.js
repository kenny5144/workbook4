"uses strict"
let vehicles = [
    {
    color: "Silver",
    type: "Minivan",
    registrationState: "CA",
    licenseNo: "ABC-101",
    registrationExpires: new Date("3-10-2022"),
    capacity: 7
    },
    {
    color: "Red",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A1D-2NC",
    registrationExpires: new Date("8-31-2023"),
    capacity: 3
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "A22-X00",
    registrationExpires: new Date("9-31-2023"),
    capacity: 6
    },
    {
    color: "Red",
    type: "Car",
    registrationState: "CA",
    licenseNo: "ABC-222",
    registrationExpires: new Date("12-10-2022"),
    capacity: 5
    },
    {
    color: "Black",
    type: "SUV",
    registrationState: "CA",
    licenseNo: "EEE-222",
    registrationExpires: new Date("12-10-2021"),
    capacity: 7},
    {
    color: "Red",
    type: "SUV",
    registrationState: "TX",
    licenseNo: "ZZ2-101",
    registrationExpires: new Date("12-30-2022"),
    capacity: 5
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "TX",
    licenseNo: "CAC-7YT",
    registrationExpires: new Date("1-31-2023"),
    capacity: 5
    },
    {
    color: "White",
    type: "Pickup Truck",
    registrationState: "CA",
    licenseNo: "123-ABC",
    registrationExpires: new Date("3-31-2023"),
    capacity: 5
    }
]    

function getVechileValue(vechicles, color){
    let result =[]
    let vechiclesNum = vechicles.length;
    for (let i= 0 ; i<vechiclesNum; i++){
        if(vechicles[i].color==color){
            result.push(vehicles[i])
            // result=vechicles[i].color

        }
       
    }
    return result;

}

let actualColor = getVechileValue(vehicles, "Red")
console.log(actualColor)

function getDatesFromVechiles(vechicles, dateToSearch){
    let dateResult= []
    let vechiclesNum= vechicles.length
    for (let i= 0 ; i<vechiclesNum; i++){
        if(vechicles[i].registrationExpires < dateToSearch){
            dateResult.push(vehicles[i])
        }

       
    }

    return dateResult;
}
let today = new Date();

let vehiclesWithExpiredPlates = getDatesFromVechiles(vehicles, today);

console.log(vehiclesWithExpiredPlates);

// for ( let i = 0; i < vehiclesWithExpiredPlates.length; i++){

// }

// let expireDate= new Date(getDatesFromVechiles())
// let expireDatenum=getmonth(expireDate)



let vechiclesExpire = getVechileValue(vechicles , capacity )
console.log(vechiclesExpire)