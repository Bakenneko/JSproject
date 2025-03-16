document.addEventListener("DOMContentLoaded", async () => {
    const usersContainer = document.getElementById("users-container");

    try {
        // Fetch data from the API to get users
        const users = await fetchData("https://jsonplaceholder.typicode.com/users");

        // Loop through each user and create a card for them
        users.forEach(user => {
            const userCard = document.createElement("div");
            userCard.classList.add("user-card");

            // Add user info to the card
            userCard.innerHTML = `
                <p><strong>ID:</strong> ${user.id}</p>
                <p><strong>Name:</strong> ${user.name}</p>
                <a href="user-details.html?userId=${user.id}">View Details</a>
            `;

            // Append the user card to the container
            usersContainer.appendChild(userCard);
        });
    } catch (error) {
        // If something goes wrong, log the error in the console
        console.error("Failed to fetch users:", error);
    }
});

