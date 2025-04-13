const people = [
  {
    City: "Los Angeles",
    Ethnicity: "Hispanic/Latino",
    Gender: "Female",
    DV: false,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Long Beach",
    Ethnicity: "Black",
    Gender: "Female",
    DV: false,
    Disabled: true,
    Veteran: false,
  },
  {
    City: "Santa Monica",
    Ethnicity: "White",
    Gender: "Female",
    DV: false,
    Disabled: null,
    Veteran: false,
  },
  {
    City: "Compton",
    Ethnicity: "Black",
    Gender: "Female",
    DV: false,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Pasadena",
    Ethnicity: "Asian",
    Gender: "Male",
    DV: null,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Santa Monica",
    Ethnicity: "Black",
    Gender: "Female",
    DV: false,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Los Angeles",
    Ethnicity: "White",
    Gender: "Other",
    DV: null,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Long Beach",
    Ethnicity: "Hispanic/Latino",
    Gender: "Female",
    DV: true,
    Disabled: null,
    Veteran: false,
  },
  {
    City: "Santa Monica",
    Ethnicity: "White",
    Gender: "Female",
    DV: false,
    Disabled: null,
    Veteran: false,
  },
  {
    City: "Glendale",
    Ethnicity: "Hispanic/Latino",
    Gender: "Female",
    DV: false,
    Disabled: true,
    Veteran: false,
  },
  {
    City: "Burbank",
    Ethnicity: "Black",
    Gender: "Female",
    DV: false,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Los Angeles",
    Ethnicity: "White",
    Gender: "Male",
    DV: false,
    Disabled: null,
    Veteran: false,
  },
  {
    City: "Santa Monica",
    Ethnicity: "White",
    Gender: "Female",
    DV: true,
    Disabled: false,
    Veteran: true,
  },
  {
    City: "Pasadena",
    Ethnicity: "Asian",
    Gender: "Female",
    DV: null,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Long Beach",
    Ethnicity: "Hispanic/Latino",
    Gender: "Female",
    DV: false,
    Disabled: true,
    Veteran: false,
  },
  {
    City: "Inglewood",
    Ethnicity: "Black",
    Gender: "Female",
    DV: false,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Compton",
    Ethnicity: "White",
    Gender: "Female",
    DV: false,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Glendale",
    Ethnicity: "Black",
    Gender: "Other",
    DV: false,
    Disabled: true,
    Veteran: false,
  },
  {
    City: "Santa Monica",
    Ethnicity: "Black",
    Gender: "Female",
    DV: false,
    Disabled: null,
    Veteran: false,
  },
  {
    City: "Long Beach",
    Ethnicity: "White",
    Gender: "Female",
    DV: null,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Los Angeles",
    Ethnicity: "Hispanic/Latino",
    Gender: "Female",
    DV: false,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Santa Monica",
    Ethnicity: "White",
    Gender: "Female",
    DV: false,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Burbank",
    Ethnicity: "Other",
    Gender: "Female",
    DV: true,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Pasadena",
    Ethnicity: "White",
    Gender: "Female",
    DV: false,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Long Beach",
    Ethnicity: "Hispanic/Latino",
    Gender: "Female",
    DV: false,
    Disabled: null,
    Veteran: false,
  },
  {
    City: "Santa Monica",
    Ethnicity: "White",
    Gender: "Female",
    DV: false,
    Disabled: null,
    Veteran: false,
  },
  {
    City: "Compton",
    Ethnicity: "Black",
    Gender: "Female",
    DV: false,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Inglewood",
    Ethnicity: "White",
    Gender: "Male",
    DV: null,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Glendale",
    Ethnicity: "Black",
    Gender: "Female",
    DV: false,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Los Angeles",
    Ethnicity: "Hispanic/Latino",
    Gender: "Female",
    DV: true,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Long Beach",
    Ethnicity: "White",
    Gender: "Female",
    DV: false,
    Disabled: true,
    Veteran: false,
  },
  {
    City: "Pasadena",
    Ethnicity: "Black",
    Gender: "Female",
    DV: false,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Santa Monica",
    Ethnicity: "White",
    Gender: "Female",
    DV: null,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Burbank",
    Ethnicity: "Asian",
    Gender: "Female",
    DV: false,
    Disabled: null,
    Veteran: false,
  },
  {
    City: "Los Angeles",
    Ethnicity: "White",
    Gender: "Female",
    DV: false,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Compton",
    Ethnicity: "Black",
    Gender: "Female",
    DV: true,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Santa Monica",
    Ethnicity: "White",
    Gender: "Male",
    DV: false,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Long Beach",
    Ethnicity: "Hispanic/Latino",
    Gender: "Female",
    DV: false,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Inglewood",
    Ethnicity: "Black",
    Gender: "Female",
    DV: false,
    Disabled: null,
    Veteran: false,
  },
  {
    City: "Pasadena",
    Ethnicity: "White",
    Gender: "Female",
    DV: false,
    Disabled: true,
    Veteran: false,
  },
  {
    City: "Glendale",
    Ethnicity: "White",
    Gender: "Female",
    DV: null,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Santa Monica",
    Ethnicity: "Black",
    Gender: "Female",
    DV: false,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Long Beach",
    Ethnicity: "White",
    Gender: "Female",
    DV: false,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Los Angeles",
    Ethnicity: "Black",
    Gender: "Female",
    DV: false,
    Disabled: null,
    Veteran: true,
  },
  {
    City: "Burbank",
    Ethnicity: "Other",
    Gender: "Female",
    DV: false,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Pasadena",
    Ethnicity: "White",
    Gender: "Male",
    DV: null,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Compton",
    Ethnicity: "Hispanic/Latino",
    Gender: "Female",
    DV: false,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Glendale",
    Ethnicity: "White",
    Gender: "Female",
    DV: false,
    Disabled: true,
    Veteran: false,
  },
  {
    City: "Santa Monica",
    Ethnicity: "Hispanic/Latino",
    Gender: "Female",
    DV: null,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Long Beach",
    Ethnicity: "Black",
    Gender: "Female",
    DV: false,
    Disabled: null,
    Veteran: false,
  },
  {
    City: "Los Angeles",
    Ethnicity: "Hispanic/Latino",
    Gender: "Female",
    DV: true,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Compton",
    Ethnicity: "White",
    Gender: "Female",
    DV: false,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Santa Monica",
    Ethnicity: "Black",
    Gender: "Female",
    DV: false,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Inglewood",
    Ethnicity: "White",
    Gender: "Male",
    DV: false,
    Disabled: true,
    Veteran: false,
  },
  {
    City: "Long Beach",
    Ethnicity: "Hispanic/Latino",
    Gender: "Female",
    DV: false,
    Disabled: false,
    Veteran: undefined,
  },
  {
    City: "Pasadena",
    Ethnicity: "White",
    Gender: "Female",
    DV: false,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Los Angeles",
    Ethnicity: "Black",
    Gender: "Female",
    DV: null,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Burbank",
    Ethnicity: "Other",
    Gender: "Female",
    DV: false,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Glendale",
    Ethnicity: "White",
    Gender: "Female",
    DV: false,
    Disabled: true,
    Veteran: true,
  },
  {
    City: "Santa Monica",
    Ethnicity: "Hispanic/Latino",
    Gender: "Female",
    DV: false,
    Disabled: null,
    Veteran: false,
  },
  {
    City: "Long Beach",
    Ethnicity: "Black",
    Gender: "Female",
    DV: false,
    Disabled: null,
    Veteran: false,
  },
  {
    City: "Compton",
    Ethnicity: "White",
    Gender: "Female",
    DV: true,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Los Angeles",
    Ethnicity: "Black",
    Gender: "Female",
    DV: false,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Santa Monica",
    Ethnicity: "White",
    Gender: "Female",
    DV: false,
    Disabled: true,
    Veteran: false,
  },
  {
    City: "Pasadena",
    Ethnicity: "Asian",
    Gender: "Female",
    DV: false,
    Disabled: null,
    Veteran: false,
  },
  {
    City: "Long Beach",
    Ethnicity: "Hispanic/Latino",
    Gender: "Female",
    DV: false,
    Disabled: false,
    Veteran: false,
  },
  {
    City: "Glendale",
    Ethnicity: "White",
    Gender: "Female",
    DV: false,
    Disabled: null,
    Veteran: false,
  },
  {
    City: "Burbank",
    Ethnicity: "Hispanic/Latino",
    Gender: "Female",
    DV: false,
    Disabled: true,
    Veteran: false,
  },
  {
    City: "Santa Monica",
    Ethnicity: "Black",
    Gender: "Female",
    DV: false,
    Disabled: false,
    Veteran: false,
  },
];

for (const person of people) {
  const randNum = Math.random();
  if (randNum > 0.5) person["Language"] = "English";
  else if (randNum > 0.25) person["Language"] = "Spanish";
  else if (randNum > 0.2) person["Language"] = "Korean";
  else if (randNum > 0.15) person["Language"] = "Mandarin";
  else if (randNum > 0.1) person["Language"] = "Japanese";
  else if (randNum > 0.05) person["Language"] = "Russian";
  else person["Language"] = "Other";
}

export { people };

export function getTopFieldValues(data, field) {
  const frequencyMap = {};

  for (const item of data) {
    const value = item[field] ?? "Unspecified";
    frequencyMap[value] = (frequencyMap[value] || 0) + 1;
  }

  const sorted = Object.entries(frequencyMap)
    .sort((a, b) => b[1] - a[1]) // Sort by count descending
    .map(([value, count]) => ({ value, count }));

  return sorted;
}

export function getGenderCountByEthnicity(data) {
  const result = {};

  for (const person of data) {
    const { Ethnicity, Gender } = person;
    if (!Ethnicity || !Gender) continue;

    if (!result[Ethnicity]) {
      result[Ethnicity] = { Ethnicity, Female: 0, Male: 0, Other: 0 };
    }

    if (Gender === "Female") {
      result[Ethnicity].Female += 1;
    } else if (Gender === "Male") {
      result[Ethnicity].Male += 1;
    } else if (Gender === "Other") {
      result[Ethnicity].Other += 1;
    }
  }

  return Object.values(result).sort((a, b) => {
    const totalA = a.Female + a.Male + a.Other;
    const totalB = b.Female + b.Male + b.Other;
    return totalB - totalA;
  });
}
