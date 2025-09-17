/**
 * A reusable function for making GET requests using the Fetch API.
 *
 * @param {string} url - The URL to make the GET request to.
 * @returns {Promise} A promise that resolves to the response JSON or rejects with an error.
 */
export async function getApiData(url) {
  try {
    const response = await fetch(url)
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`)
    }
    const data = await response.text()
    return data
  } catch (error) {
    console.error('Error fetching data:', error.message)
    throw error
  }
}


/**
 * A reusable function for making POST requests using the Fetch API with FormData.
 *
 * @param {string} url - The URL to make the POST request to.
 * @param {FormData} formData - The FormData object to include in the request body.
 * @returns {Promise} A promise that resolves to the response JSON or rejects with an error.
 */
export async function postApiData(url, formData) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const responseData = await response.text();
    return responseData;
  } catch (error) {
    console.error('Error posting data:', error.message);
    throw error;
  }
}


