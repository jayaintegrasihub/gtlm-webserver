export function parseStringToObject(inputString) {
    const resultObject = {};
    // Check if the inputString starts with '#' and ends with '&'
    if (inputString.startsWith('#') && inputString.endsWith('&')) {
        // Remove the '#' and '&' from the string
        const cleanedString = inputString.slice(1, -1);

        // Split the string into key-value pairs using ';'
        const keyValuePairs = cleanedString.split(';');

        // Process each key-value pair and add it to the resultObject
        keyValuePairs.forEach(pair => {
            const [key, value] = pair.split(':');
            if (key !== undefined && value !== undefined) {
                resultObject[key] = value;
            }
        });
    } else {
        console.error('Invalid input format');
    }
    return resultObject;
}

export function parseStringToArrayOfObjects(inputString) {
    const resultArray = [];
    // Check if the inputString starts with '#' and ends with '&'
    if (inputString.startsWith('#') && inputString.endsWith('&')) {
      // Remove the '#' and '&' from the string
      const cleanedString = inputString.slice(1, -1);
  
      // Split the string into key-value pairs using ';'
      const keyValuePairs = cleanedString.split(';');
  
      // Process each key-value pair and add it to the resultArray as an object
      keyValuePairs.forEach(pair => {
        const [property, value] = pair.split(':');
        if (property !== undefined && value !== undefined) {
          const parsedValue = parseInt(value); // Convert value to integer if needed
          resultArray.push({ [property]: parsedValue });
        }
      });
    } else {
      console.error('Invalid input format');
    }
    return resultArray;
  }

  export function parseStringToArray(inputString) {
    const resultArray = [];
    // Check if the inputString starts with '#' and ends with '&'
    if (inputString.startsWith('#') && inputString.endsWith('&')) {
      // Remove the '#' and '&' from the string
      const cleanedString = inputString.slice(1, -1);
  
      // Split the string into key-value pairs using ';'
      const keyValuePairs = cleanedString.split(';');
  
      // Process each key-value pair and add it to the resultArray
      keyValuePairs.forEach(pair => {
        const [key, value] = pair.split(':');
        if (key !== undefined && value !== undefined) {
          resultArray.push([key, value]);
        }
      });
    } else {
      console.error('Invalid input format');
    }
    return resultArray;
  }
  
  
  
