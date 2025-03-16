document.addEventListener("DOMContentLoaded", async () => {
    const postId = new URLSearchParams(window.location.search).get('postId');
    const postInfo = await fetchData(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const postInfoDiv = document.getElementById("post-info");

    postInfoDiv.innerHTML = `
        <p><strong>Title:</strong> ${postInfo.title}</p>
        <p><strong>Body:</strong> ${postInfo.body}</p>
    `;

    const comments = await fetchData(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    const commentsContainer = document.getElementById("comments-container");
    comments.forEach(comment => {
        const commentCard = document.createElement("div");
        commentCard.classList.add("comment-card");
        commentCard.innerHTML = `
            <p><strong>Name:</strong> ${comment.name}</p>
            <p><strong>Email:</strong> ${comment.email}</p>
            <p><strong>Comment:</strong> ${comment.body}</p>
        `;
        commentsContainer.appendChild(commentCard);
    });
});