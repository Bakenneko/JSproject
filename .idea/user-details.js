if (window.location.pathname.includes('user-details.html')) {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');

    if (userId) {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(user => {
                const userDetails = document.getElementById('user-details');
                userDetails.innerHTML = `
                    <h2>${user.name}</h2>
                    <p><strong>Email:</strong> ${user.email}</p>
                    <p><strong>Phone:</strong> ${user.phone}</p>
                    <p><strong>Website:</strong> <a href="http://${user.website}" target="_blank">${user.website}</a></p>
                    <p><strong>Address:</strong> ${user.address.street}, ${user.address.city}</p>
                    <p><strong>Company:</strong> ${user.company.name}</p>
                    <a href="index.html">Back to User List</a>
                `;
            });
    }
}
