/* 1

var salutations = [
    "bye",
    "hello123",
    "newhello",
    "he20llo",
    "hello",
    "abchello",
    "xyzabc",
  ];

function getHello(str) {
    const regex = /hello/i;
    const filtered = str.filter(element => regex.test(element));
    filtered.forEach(element => console.log(element));
}
// console.log(getHello(salutations));
getHello(salutations);

*/

/* 2
var strWith10 =
  "There are 10 people in room number 10. Call all of the 10 people outside";

function replaceTen(str) {
    const regex = /10/g;
    const replaced = str.replace(regex, 'Ten');
    return replaced;
}

console.log(replaceTen(strWith10));  

*/

/* 3


function cleanUp(value) {
    value = value.replace(/([.!?])\s{2}/g, '$1 ');
    value = value.replace(/"/g, "'");
    value = value.replace(/\(\s+/g, '(');
    value = value.replace(/\s+\)/g, ')');
    return value;
};

console.log(cleanUp('This is a sentence.  This is another.'));  
console.log(cleanUp('One!  Two?  Three.'));
console.log(cleanUp('This is "fun."'));    
console.log(cleanUp('A ( red) dog arrived.')); 
console.log(cleanUp('A (red  ) dog arrived.')); 
console.log(cleanUp('A (    red ) dog arrived.')); 
*/

/* 4
function fixPostalCode(postalCode) {
    postalCode = postalCode.trim().toUpperCase();
    postalCode = postalCode.replace(/^([A-CEGHJ-NPR-TVXY]\d[A-CEGHJ-NPR-TV-Z])[-\s]?(\d[A-CEGHJ-NPR-TV-Z]\d)$/, "$1 $2");
    
    const regex = /^[A-CEGHJ-NPR-TVXY]\d[A-CEGHJ-NPR-TV-Z] \d[A-CEGHJ-NPR-TV-Z]\d$/;
    if (!regex.test(postalCode)) {
        throw new Error('Invalid postal code');
    }
    
    return postalCode;
}
console.log(fixPostalCode('h1eo0e9'));

*/


function toProvince(postalCode, useLongForm = false) {
    let formattedPostalCode;
    try {
        formattedPostalCode = fixPostalCode(postalCode);
    } catch (error) {
        return null;
    }

    const provinces = {
        'A': ['NL', 'Newfoundland and Labrador'],
        'B': ['NS', 'Nova Scotia'],
        'C': ['PE', 'Prince Edward Island'],
        'E': ['NB', 'New Brunswick'],
        'G': ['QC', 'Quebec'],
        'H': ['QC', 'Quebec'],
        'J': ['QC', 'Quebec'],
        'K': ['ON', 'Ontario'],
        'L': ['ON', 'Ontario'],
        'M': ['ON', 'Ontario'],
        'N': ['ON', 'Ontario'],
        'P': ['ON', 'Ontario'],
        'R': ['MB', 'Manitoba'],
        'S': ['SK', 'Saskatchewan'],
        'T': ['AB', 'Alberta'],
        'V': ['BC', 'British Columbia'],
        'X': ['NT', 'Nunavut, Northwest Territories'],
        'Y': ['YT', 'Yukon']
    };

    const province = provinces[formattedPostalCode[0]];
    return useLongForm ? province[1] : province[0];
}