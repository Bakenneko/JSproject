if (window.location.pathname.includes('index.html')) {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => {
            const userList = document.getElementById('user-list');
            users.forEach(user => {
                const userCard = document.createElement('div');
                userCard.className = 'user-card';
                userCard.innerHTML = `
                    <h2>${user.name}</h2>
                    <p>ID: ${user.id}</p>
                    <a href="user-details.html?id=${user.id}">View Details</a>
                `;
                userList.appendChild(userCard);
            });
        });
}