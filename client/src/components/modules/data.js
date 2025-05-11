// Taken from Sheets API tutorial: https://www.youtube.com/watch?v=cRwpTv33Z_g
// and repository: https://github.com/theotrain/load-google-sheet-as-csv-with-js

const sheetID = "1mG9ChXcHKXjQCDXWVJccEG130tbclYFHBptU7ewrdFk";
const sheetName = encodeURIComponent("Sheet1");
const sheetURL = `https://docs.google.com/spreadsheets/d/${sheetID}/gviz/tq?tqx=out:csv&sheet=${sheetName}`;

let newPeople;

export async function getData(sheetURL) {
  const response = await fetch(sheetURL);
  const responseText = await response.text();
  return handleResponse(responseText);
}

function handleResponse(csvText) {
  // console.log(csvText);
  let sheetObjects = csvToObjects(csvText);
  // sheetObjects is now an Array of Objects
  // console.log(sheetObjects);
  return sheetObjects;
}

function csvToObjects(csv) {
  const csvRows = csv.split("\n");
  const propertyNames = csvSplit(csvRows[0]);
  let objects = [];
  for (let i = 1, max = csvRows.length; i < max; i++) {
    let thisObject = {};
    let row = csvSplit(csvRows[i]);
    for (let j = 0, max = row.length; j < max; j++) {
      thisObject[propertyNames[j]] = row[j];
      // BELOW 4 LINES WILL CONVERT DATES IN THE "ENROLLED" COLUMN TO JS DATE OBJECTS
      if (propertyNames[j] === "Enrolled") {
        thisObject[propertyNames[j]] = new Date(row[j]);
      } else {
        thisObject[propertyNames[j]] = row[j];
      }
    }
    objects.push(thisObject);
  }
  return objects;
}

function csvSplit(row) {
  return row.split(",").map((val) => val.substring(1, val.length - 1));
}

export function getTopFieldValues(data, field) {
  // console.log(field, data);
  const frequencyMap = {};

  for (const item of data) {
    const value = item[field] ?? "Unspecified";
    frequencyMap[value] = (frequencyMap[value] || 0) + 1;
  }

  const sorted = Object.entries(frequencyMap)
    .sort((a, b) => b[1] - a[1]) // Sort by count descending
    .map(([value, count]) => ({ value, count }));

  // console.log(field, sorted);
  return sorted;
}

export function getGenderCountByEthnicity(data) {
  const result = {};

  for (const person of data) {
    const { ethnicity, gender } = person;
    if (!ethnicity || !gender) continue;

    if (!result[ethnicity]) {
      result[ethnicity] = { ethnicity, Female: 0, Male: 0, Other: 0 };
    }

    if (gender === "Female") {
      result[ethnicity].Female += 1;
    } else if (gender === "Male") {
      result[ethnicity].Male += 1;
    } else if (gender === "Other") {
      result[ethnicity].Other += 1;
    }
  }

  return Object.values(result).sort((a, b) => {
    const totalA = a.Female + a.Male + a.Other;
    const totalB = b.Female + b.Male + b.Other;
    return totalB - totalA;
  });
}
