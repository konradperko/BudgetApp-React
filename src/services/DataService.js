export const DataService = {
  postData: async (url = '', data = {}) => {
    const response = await fetch(url, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    return await response.json();
  }
}
