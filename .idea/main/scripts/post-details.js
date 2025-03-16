document.addEventListener("DOMContentLoaded", async () => {
    const postInfo = document.getElementById("post-info");
    const commentsContainer = document.getElementById("comments-container");
    const postId = new URLSearchParams(window.location.search).get("postId");

    postInfo.innerHTML = `<pre>${JSON.stringify(await fetchData(`https://jsonplaceholder.typicode.com/posts/${postId}`), null, 2)}</pre>`;

    const comments = await fetchData(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    comments.forEach(comment => {
        commentsContainer.appendChild(createElement("div", "comment-card", `
            <p><strong>Name:</strong> ${comment.name}</p>
            <p><strong>Email:</strong> ${comment.email}</p>
            <p>${comment.body}</p>
        `));
    });
});