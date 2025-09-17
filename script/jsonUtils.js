
export class parseJSON {
  parseJsonSafely(data) {
    if (data !== undefined && data.trim() !== '') {
        try {
            const jsonObject = JSON.parse(data);
            return jsonObject;
        } catch (error) {
            console.error('Error parsing JSON:', error.message);
            return null;
        }
    } else {
        console.error('Invalid JSON data:', data);
        return null;
    }
  } 
}
  

