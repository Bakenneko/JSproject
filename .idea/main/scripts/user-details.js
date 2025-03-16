document.addEventListener("DOMContentLoaded", async () => {
    const userInfo = document.getElementById("user-info");
    const postsContainer = document.getElementById("posts-container");
    const loadPostsBtn = document.getElementById("load-posts");
    const userId = new URLSearchParams(window.location.search).get("userId");

    userInfo.innerHTML = `<pre>${JSON.stringify(await fetchData(`https://jsonplaceholder.typicode.com/users/${userId}`), null, 2)}</pre>`;

    loadPostsBtn.addEventListener("click", async () => {
        const posts = await fetchData(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
        postsContainer.innerHTML = "";
        posts.forEach(post => {
            postsContainer.appendChild(createElement("div", "post-card", `
                <p><strong>Title:</strong> ${post.title}</p>
                <a href="post-details.html?postId=${post.id}">View Post</a>
            `));
        });
    });
});
