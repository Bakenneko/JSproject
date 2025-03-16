document.addEventListener("DOMContentLoaded", async () => {
    const usersContainer = document.getElementById("users-container");
    const users = await fetchData("https://jsonplaceholder.typicode.com/users");

    users.forEach(user => {
        const userCard = document.createElement("div");
        userCard.classList.add("user-card");
        userCard.innerHTML = `
            <p><strong>ID:</strong> ${user.id}</p>
            <p><strong>Name:</strong> ${user.name}</p>
            <a href="user-details.html?userId=${user.id}">View Details</a>
        `;
        usersContainer.appendChild(userCard);
    });
});