async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
}

function createElement(tag, className, innerHTML) {
    const elem = document.createElement(tag);
    if (className) elem.classList.add(className);
    if (innerHTML) elem.innerHTML = innerHTML;
    return elem;
}