// This function fetches data from the given URL and returns it as JSON
async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
}