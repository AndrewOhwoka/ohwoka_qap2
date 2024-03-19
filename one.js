// function createVideo(src, width, controls) {
//     src = src.trim();
//     let videoTag = `<video src="${src}"`;

//     if (Number.isInteger(width) || (typeof width === 'string' && width.trim() !== '' && !isNaN(width))) {
//         videoTag += ` width="${width}"`;
//     }

//     if (controls === true) {
//         videoTag += ' controls';
//     }

//     videoTag += '></video>';

//     const regex = /^<video src="[^"]*"( width="\d+")?( controls)?><\/video>$/;
//     console.log(regex.test(videoTag) ? videoTag : 'Invalid video tag');
// }
let monthString = month < 10 ? "0" + month : month;
  let dayString = day < 10 ? "0" + day : day;

  return `${year}-${monthString}-${dayString}`;

//----------------------------------------
// Question 5
function toDateString(value) {
    if (!(value instanceof Date) || isNaN(value.getTime())) {
        throw new Error('Invalid Date object.');
    }

    const year = value.getFullYear();
    let month = value.getMonth() + 1; // JavaScript counts months from 0 to 11
    let day = value.getDate();

    // Pad month and day with leading '0' if necessary
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;

    const dateString = `${year}-${month}-${day}`;

    // Validate the date string with a regular expression
    const regex = /^\d{4}-\d{2}-\d{2}$/;
    if (!regex.test(dateString)) {
        throw new Error('Date string is not in the expected format (YYYY-MM-DD).');
    }

    return dateString;
}
/*
// Question 5
function normalizeCoord(value) {
    const regex = /(-?\d+(\.\d+)?)/g;
    const matches = value.match(regex);

    if (matches === null || matches.length !== 2) {
        throw new Error('Invalid coordinate format.');
    }

    let [lat, lng] = matches.map(Number);

    if (value.includes('[')) { // If the format is [lng, lat], swap the values
        [lat, lng] = [lng, lat];
    }

    if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {
        throw new Error('Invalid latitude or longitude value.');
    }

    return `(${lat}, ${lng})`;
}*/

// Question 6
// function normalizeCoord(value) {
//     // This is a mock function for demonstration purposes.
//     // It assumes that the input is a string of two numbers separated by a comma.
//     let [lat, lng] = value.split(',').map(Number);
//     if (isNaN(lat) || isNaN(lng)) {
//         throw new Error('Invalid coordinate');
//     }
//     return `(${lat.toFixed(4)}, ${lng.toFixed(4)})`;
// }

// console.log(normalizeCoord("42.9755,-77.4369", "[-62.1234, 42.9755]", "300,-9000"));  // Outputs: "((42.9755, -77.4369), (42.9755, -62.1234))"

function formatCoords(...values) {
    let coords = [];

    for (let value of values) {
        try {
            let coord = normalizeCoord(value);
            coords.push(coord);
        } catch (error) {
            // Skip invalid coordinate
        }
    }

    return `(${coords.join(', ')})`;
};
console.log(formatCoords("42.9755,-77.4369", "[-62.1234, 42.9755]", "300,-9000"));

// function formatCoords(...values) {
//     const formattedCoords = []; // Array to hold valid, formatted coordinates

//     // Loop through each value provided to the function
//     for (const value of values) {
//         try {
//             // Attempt to normalize the coordinate
//             const normalized = normalizeCoord(value);
//             // If successful, add the normalized coordinate to the array
//             formattedCoords.push(normalized);
//         } catch (error) {
//             // If an error occurs, skip this coordinate
//             console.error(`Invalid coordinate skipped: ${value}`, error.toString());
//         }
//     }

//     // Join all the valid, formatted coordinates into a string, separated by comma and space
//     // Then enclose the entire list in an additional set of parentheses
//     return `(${formattedCoords.join(', ')})`;
// };
// console.log(formatCoords("42.9755,-77.4369", "[-62.1234, 42.9755]", "300,-9000"));



function normalizeCoord(value) {
    // This is a mock function for demonstration purposes.
    // It assumes that the input is a string of two numbers separated by a comma.
    let [lat, lng] = value.split(',').map(Number);
    if (isNaN(lat) || isNaN(lng)) {
        throw new Error('Invalid coordinate');
    }
    return `(${lat.toFixed(4)}, ${lng.toFixed(4)})`;
}

console.log(formatCoords("42.9755,-77.4369", "[-62.1234, 42.9755]", "300,-9000"));  // Outputs: "((42.9755, -77.4369), (42.9755, -62.1234))"

function normalizeCoord(value) {
    let match = /^\s*([-+]?\d+(\.\d+)?),\s*([-+]?\d+(\.\d+)?)\s*$/.exec(value);
    if (match) {
        let lat = Number(match[1]);
        let lng = Number(match[3]);
        return `(${lat.toFixed(4)}, ${lng.toFixed(4)})`;
    } else {
        throw new Error('Invalid coordinate');
    }
}

console.log(formatCoords("42.9755,-77.4369", "[-62.1234, 42.9755]", "300,-9000"));  // Outputs: "((42.9755, -77.4369), (42.9755, -62.1234))"