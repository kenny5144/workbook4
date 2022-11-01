"use strict";

//This function, parsePartCode, will accept a string codeNumber and return a "part", which will have the properties supplierCode, productNumber, and Size.
function parsePartCode(codeNumber){
//    codeNumber :productNumber - size;
     
     let indexOfColon= codeNumber.indexOf(":")
     let indexOfDash= codeNumber.indexOf("-")
     let the_productNumber;
     let the_supplierCode
     let the_size;
    

     the_supplierCode =codeNumber.slice(0,indexOfColon);
     //console.log("the value of the_supplierCode is :" + the_supplierCode);

     the_productNumber= codeNumber.slice(indexOfColon + 1, indexOfDash);
     the_size= codeNumber.slice(indexOfDash + 1)

     let part =   {
                        supplierCode: the_supplierCode,
                        productNumber: the_productNumber,
                        size: the_size
                    };

    return part;
    
}

function displayPart(part){
    //do the work to display the part here...
    console.log("Supplier: " + part1.supplierCode +
    " Product Number: " + part1.productNumber +
    " Size: " + part1.size);
    console.log("Supplier: " + part1.supplierCode +
" Product Number: " + part1.productNumber +
" Size: " + part1.size);;
}


let partCode1 = "XYZ:1234-L";
let partCode2 = "BC:45678912-Small";

let part1 = parsePartCode(partCode1);
let part2 = parsePartCode(partCode2);





displayPart(part1);
displayPart(part2);
