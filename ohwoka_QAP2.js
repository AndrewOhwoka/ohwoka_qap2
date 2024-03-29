// Name: <Andrew Ohwoka>
// //   Date: <19-03-2024>

// Question 1
function snake(str) {
  let trimmed = str.trim();
  let lowerCase = trimmed.toLowerCase();
  return lowerCase.replace(/[\s\.]+/g, "_");
}
console.log(snake("abc"));
console.log(snake(" ABC "));
console.log(snake("ABC"));
console.log(snake("A BC"));
console.log(snake(" A bC  "));
console.log(snake("A   BC"));
console.log(snake("A.BC"));
console.log(snake(" A..  B   C "));
console.log(); // for spacing

// Question 2

function createVideo(src, width, controls) {
  src = src.trim();
  let videoTag = `<video src="${src}"`;

  if (
    Number.isInteger(width) ||
    (typeof width === "string" && width.trim() !== "" && !isNaN(width))
  ) {
    videoTag += ` width="${width}"`;
  }

  if (controls === true) {
    videoTag += " controls";
  }

  videoTag += "></video>";

  const regex = /^<video src="[^"]*"( width="\d+")?( controls)?><\/video>$/;
  if (!regex.test(videoTag)) {
    throw new Error("Invalid video tag");
  }

  return videoTag;
}

console.log(createVideo("https://example.com/video.mp4", 640, true));
console.log(
  createVideo(
    "http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4",
    500
  )
);
console.log(
  createVideo(
    "http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4",
    "600",
    true
  )
);
console.log(
  createVideo(
    "http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4",
    null,
    true
  )
);
console.log(
  createVideo(
    "   http://distribution.bbb3d.renderfarming.net/video/mp4/bbb_sunflower_1080p_60fps_normal.mp4  ",
    "not a number"
  )
);
console.log(); // for spacing

// Question 3

function parseDateString(dateString) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;

  if (!regex.test(dateString)) {
    throw new Error("Invalid date format. Expected format: YYYY-MM-DD.");
  }

  const [year, month, day] = dateString.split("-").map(Number);

  const date = new Date();
  date.setFullYear(year);
  date.setMonth(month - 1); // JavaScript counts months from 0 to 11
  date.setDate(day);

  return date;
}

console.log(parseDateString("2022-05-01"));
console.log(); // for spacing

// question4
function toDateString(value) {
  // check if value is a Date object and if it is not, throw an error.
  if (!(value instanceof Date) || isNaN(value.getTime())) {
    throw new Error("Invalid Date object.");
  }
  // Get the year, month and day from the date object
  const year = value.getFullYear();
  let month = value.getMonth() + 1; // JavaScript counts months from 0 to 11
  let day = value.getDate();

  // Format the month and day with leading '0' if necessary
  let monthString = month < 10 ? "0" + month : month;
  let dayString = day < 10 ? "0" + day : day;

  return `${year}-${monthString}-${dayString}`;
}

console.log(toDateString(new Date("2022-5-02")));
console.log(toDateString(new Date("2022-05-2")));
console.log(); // for spacing

// Question 5-
function normalizeCoord(value) {
  const regex = /(-?\d+\.?\d*)/g;
  let compare = value.match(regex);

  if (compare === null || compare.length !== 2) {
    throw new Error("Invalid coordinate format.");
  }

  let [lat, lng] = compare.map(Number);

  if (value.includes("[")) {
    [lat, lng] = [lng, lat]; // swap lat and lng if the input format is [lng, lat]
  }

  if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {
    throw new Error("Invalid latitude or longitude value.");
  }

  return `(${lat}, ${lng})`;
}
console.log(normalizeCoord("42.9755,-77.4369"));
console.log(normalizeCoord("[-77.4369, 42.9755]"));
console.log(); // for spacing

// Question 6
function normalizeCoord(value) {
  const regex = /(-?\d+\.?\d*)/g;
  let compared = value.match(regex);

  if (compared === null || compared.length !== 2) {
    throw new Error("Invalid coordinate format.");
  }

  let [lat, lng] = compared.map(Number);

  if (value.includes("[")) {
    [lat, lng] = [lng, lat]; // swap lat and lng if the input format is [lng, lat]
  }

  if (lat < -90 || lat > 90 || lng < -180 || lng > 180) {
    throw new Error("Invalid latitude or longitude value.");
  }

  return `(${lat}, ${lng})`;
}
function formatCoords(...args) {
  let coordinates = [];

  for (let arg of args) {
    try {
      let coordinat = normalizeCoord(arg);
      coordinates.push(coordinat);
    } catch (error) {
      // Skip the invalid coordinate
    }
  }

  return `(${coordinates.join(", ")})`;
}

console.log(
  formatCoords("42.9755,-77.4369", "[-62.1234, 42.9755]", "300,-9000")
);
console.log(); // for spacing

// Question 7
function mimeFromFilename(filename) {
  // Regular expression to extract the file extension
  const extraction = filename.match(/\.([0-9a-z]+)([\?#].*)?$/i);

  // Convert the extension to lowercase if it exists
  const extension = extraction ? extraction[1].toLowerCase() : null;

  // Determine the MIME type based on the file extension
  switch (extension) {
    case "html":
    case "htm":
      return "text/html";
    case "css":
      return "text/css";
    case "js":
      return "text/javascript";
    case "jpg":
    case "jpeg":
      return "image/jpeg";
    case "gif":
      return "image/gif";
    case "bmp":
      return "image/bmp";
    case "ico":
    case "cur":
      return "image/x-icon";
    case "png":
      return "image/png";
    case "svg":
      return "image/svg+xml";
    case "webp":
      return "image/webp";
    case "mp3":
      return "audio/mp3";
    case "wav":
      return "audio/wav";
    case "mp4":
      return "video/mp4";
    case "webm":
      return "video/webm";
    case "json":
      return "application/json";
    case "mpeg":
      return "video/mpeg";
    case "csv":
      return "text/csv";
    case "ttf":
      return "font/ttf";
    case "woff":
      return "font/woff";
    case "zip":
      return "application/zip";
    case "avi":
      return "video/x-msvideo";
    default:
      // Return 'application/octet-stream' for unknown or missing file extensions
      return "application/octet-stream";
  }
}
console.log(mimeFromFilename("/User/Documents/readme.txt"));
console.log(mimeFromFilename("/User/Documents/image.jpg"));
console.log(mimeFromFilename("/User/Documents/script.js"));
console.log(mimeFromFilename("/User/Documents/unknown.xyz"));
console.log(mimeFromFilename("/User/Documents/readme.txt"));
console.log(mimeFromFilename("index.html"));
console.log(mimeFromFilename("picture.jpeg"));
console.log(mimeFromFilename("script.js"));
console.log(mimeFromFilename("unknownfile.xyz"));
console.log(mimeFromFilename("noextension"));
console.log(); // for spacing

// Question 8

function generateLicenseLink(licenseCode, targetBlank) {
  let matching = /CC-(.+)/.exec(licenseCode);
  let code = matching ? matching[1].toLowerCase() : null;
  let url = `https://creativecommons.org/licenses/${code}/4.0/`;
  let text = "";
  let target = targetBlank ? 'target="_blank"' : "";

  switch (licenseCode) {
    case "CC-BY":
      text = "Creative Commons Attribution License";
      break;
    case "CC-BY-NC":
      text = "Creative Commons Attribution-NonCommercial License";
      break;
    case "CC-BY-SA":
      text = "Creative Commons Attribution-ShareAlike License";
      break;
    case "CC-BY-ND":
      text = "Creative Commons Attribution-NoDerivs License";
      break;
    case "CC-BY-NC-SA":
      text = "Creative Commons Attribution-NonCommercial-ShareAlike License";
      break;
    case "CC-BY-NC-ND":
      text = "Creative Commons Attribution-NonCommercial-NoDerivs License";
      break;
    default:
      url = "https://choosealicense.com/no-permission/";
      text = "All Rights Reserved";
  }

  return `<a href="${url}"${target}>${text}</a>`;
}
console.log(generateLicenseLink("CC-BY-NC", true));
console.log(generateLicenseLink("CC-BY-NC"));
console.log(generateLicenseLink("XYZ", true));
console.log(); // for spacing

// Question 9
function pureBool(value) {
  if (typeof value === "boolean") {
    return value;
  }

  let strValue = String(value).toLowerCase();

  if (
    /^(yes|y|oui|o|t|true|vrai|v|1)$/.test(strValue) ||
    Number(strValue) > 0
  ) {
    return true;
  }

  if (/^(no|non|n|f|false|faux|0)$/.test(strValue) || Number(strValue) < -0) {
    return false;
  }

  throw new Error("invalid value");
}

console.log(pureBool("Yes"));
console.log(pureBool("no"));
console.log(pureBool("OUI"));
console.log(pureBool("Non"));
console.log(pureBool("1"));
console.log(pureBool("5"));
console.log(pureBool("0"));
console.log(pureBool("-1"));
console.log(pureBool("-2"));
console.log(); // for spacing

//Question 9b
function every(...args) {
  try {
    for (let arg of args) {
      if (!pureBool(arg)) {
        return false;
      }
    }
    return true;
  } catch (error) {
    return false;
  }
}

function any(...args) {
  try {
    for (let arg of args) {
      if (pureBool(arg)) {
        return true;
      }
    }
    return false;
  } catch (error) {
    return false;
  }
}

function none(...args) {
  try {
    for (let arg of args) {
      if (pureBool(arg)) {
        return false;
      }
    }
    return true;
  } catch (error) {
    return true;
  }
}
console.log(every("Y", "yes", 1));
console.log(any("Y", "no", 1));
console.log(none("Y", "invalid", 1));
console.log(); // for spacing

// Question 10

function buildUrl(query, order, count, license) {
  if (typeof query !== "string") {
    throw new Error("Invalid query");
  }

  if (order !== "ascending" && order !== "descending") {
    throw new Error("Invalid order");
  }

  if (typeof count !== "number" || count < 1 || count > 50) {
    throw new Error("Invalid count");
  }

  const validLicenses = [
    "none",
    "any",
    "cc-by",
    "cc-by-nc",
    "cc-by-sa",
    "cc-by-nd",
    "cc-by-nc-sa",
    "cc-by-nc-nd",
  ];
  if (!validLicenses.includes(license)) {
    throw new Error("Invalid license");
  }

  let encodedQuery = encodeURIComponent(query);
  let url = `https://api.inaturalist.org/v2/observations?query=${encodedQuery}&count=${count}&order=${order}&license=${license}`;

  return url;
}
console.log(buildUrl("Monarch Butterfly", "ascending", 25, "cc-by"));
console.log(buildUrl("Monarch Butterfly", "ascending", 25, "cc-by"));
console.log(buildUrl("Monarch Butterfly", "ascending", 25, "cc-by-nc"));
