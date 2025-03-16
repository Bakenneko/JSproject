document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Get the user ID from the URL query string
        const userId = new URLSearchParams(window.location.search).get('userId');

        // Fetch user data using the user ID
        const userInfo = await fetchData(`https://jsonplaceholder.typicode.com/users/${userId}`);
        const userInfoDiv = document.getElementById("user-info");

        // Display user information on the page
        userInfoDiv.innerHTML = `
            <p><strong>ID:</strong> ${userInfo.id}</p>
            <p><strong>Name:</strong> ${userInfo.name}</p>
            <p><strong>Username:</strong> ${userInfo.username}</p>
            <p><strong>Email:</strong> ${userInfo.email}</p>
            <p><strong>Address:</strong> ${userInfo.address.street}, ${userInfo.address.city}</p>
            <p><strong>Phone:</strong> ${userInfo.phone}</p>
            <p><strong>Website:</strong> ${userInfo.website}</p>
        `;

        // Get the button to load posts for the current user
        const loadPostsButton = document.getElementById("load-posts");
        loadPostsButton.addEventListener("click", async () => {
            try {
                // Fetch posts data for the current user
                const posts = await fetchData(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
                const postsContainer = document.getElementById("posts-container");

                // Clear previous posts
                postsContainer.innerHTML = "";

                // Loop through each post and display it
                posts.forEach(post => {
                    const postCard = document.createElement("div");
                    postCard.classList.add("post-card");
                    postCard.innerHTML = `
                        <p><strong>Title:</strong> ${post.title}</p>
                        <a href="post-details.html?postId=${post.id}">View Post</a>
                    `;
                    postsContainer.appendChild(postCard);
                });
            } catch (error) {
                // Handle errors in case fetching posts fails
                console.error("Failed to load posts:", error);
            }
        });
    } catch (error) {
        // Handle errors in case fetching user data fails
        console.error("Failed to load user data:", error);
    }
});

