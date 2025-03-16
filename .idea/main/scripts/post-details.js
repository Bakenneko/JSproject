document.addEventListener("DOMContentLoaded", async () => {
    try {
        // Get the post ID from the URL query string
        const postId = new URLSearchParams(window.location.search).get('postId');

        // Fetch post data using the post ID
        const postInfo = await fetchData(`https://jsonplaceholder.typicode.com/posts/${postId}`);
        const postInfoDiv = document.getElementById("post-info");

        // Display post title and body on the page
        postInfoDiv.innerHTML = `
            <p><strong>Title:</strong> ${postInfo.title}</p>
            <p><strong>Body:</strong> ${postInfo.body}</p>
        `;

        // Fetch comments for the current post
        const comments = await fetchData(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        const commentsContainer = document.getElementById("comments-container");

        // Loop through each comment and display it
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
    } catch (error) {
        // Log any error that occurs during the fetch process
        console.error("Failed to load post or comments:", error);
    }
});
