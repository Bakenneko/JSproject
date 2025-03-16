document.addEventListener("DOMContentLoaded", async () => {
    const userId = new URLSearchParams(window.location.search).get('userId');
    const userInfo = await fetchData(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const userInfoDiv = document.getElementById("user-info");

    userInfoDiv.innerHTML = `
        <p><strong>ID:</strong> ${userInfo.id}</p>
        <p><strong>Name:</strong> ${userInfo.name}</p>
        <p><strong>Username:</strong> ${userInfo.username}</p>
        <p><strong>Email:</strong> ${userInfo.email}</p>
        <p><strong>Address:</strong> ${userInfo.address.street}, ${userInfo.address.city}</p>
        <p><strong>Phone:</strong> ${userInfo.phone}</p>
        <p><strong>Website:</strong> ${userInfo.website}</p>
    `;

    const loadPostsButton = document.getElementById("load-posts");
    loadPostsButton.addEventListener("click", async () => {
        const posts = await fetchData(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
        const postsContainer = document.getElementById("posts-container");
        postsContainer.innerHTML = ""; // Clear previous posts
        posts.forEach(post => {
            const postCard = document.createElement("div");
            postCard.classList.add("post-card");
            postCard.innerHTML = `
                <p><strong>Title:</strong> ${post.title}</p>
                <a href="post-details.html?postId=${post.id}">View Post</a>
            `;
            postsContainer.appendChild(postCard);
        });
    });
});
