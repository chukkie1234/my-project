// Get the parameters from the URL
const params = new URLSearchParams(window.location.search);

const id = Number(params.get("id"));
const type = params.get("type");

// Select the container
const postDetails = document.getElementById("post-details");


// Function to display the post
function displayPost(post, type) {

    // FEATURED POST
    if (type === "featured") {

        postDetails.innerHTML = `
            <div class="details-card">

                <img 
                    src="${post.image}" 
                    alt="${post.title}"
                    loading="eager"
                    decoding="async"
                    fetchpriority="high"
                    >

                <span class="category">
                    ${post.category}
                </span>

                <h1>${post.title}</h1>

                <p class="author">
                    By ${post.author}
                </p>

                <p>
                    ${post.description}
                </p>

                <a href="index.html" class="read-more">
                    ← Back Home
                </a>

            </div>
        `;

    }

    // API POST
    else if (type === "api") {

        postDetails.innerHTML = `
            <div class="details-card">

                <img 
                    src="https://picsum.photos/id/${post.id}/600/400.jpg"
                    alt="${post.title}"
                    onerror="this.oneerror=null; this.src='./images/blog-fallback.jpg'
    
                    
                >

                <span class="category">
                    API
                </span>

                <h1>${post.title}</h1>

                <p class="author">
                    By API Post
                </p>

                <p>
                    ${post.body}
                </p>

                <a href="index.html" class="read-more">
                    ← Back Home
                </a>

            </div>
        `;
    }
}


// Check what type of post was clicked

if (type === "featured") {

    // Find the featured post
    const featuredPost = blogPosts.find(
        item => item.id === id
    );

    if (featuredPost) {

        displayPost(featuredPost, "featured");

    } else {

        postDetails.innerHTML = `
            <div class="details-card">

                <h1>Post Not Found</h1>

                <p>
                    Sorry, this post could not be found.
                </p>

                <a href="../index.html" class="read-more">
                    ← Back Home
                </a>

            </div>
        `;
    }

}


// API POST
else if (type === "api") {

    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

        .then(response => {

            if (!response.ok) {
                throw new Error("Post not found");
            }

            return response.json();
        })

        .then(post => {

            displayPost(post, "api");

        })

        .catch(error => {

            postDetails.innerHTML = `
                <div class="details-card">

                    <h1>Post Not Found</h1>

                    <p>
                        Sorry, this post could not be found.
                    </p>

                    <a href="../index.html" class="read-more">
                        ← Back Home
                    </a>

                </div>
            `;

            console.error(error);
        });

}


// If type is missing or invalid
else {

    postDetails.innerHTML = `
        <div class="details-card">

            <h1>Invalid Post</h1>

            <p>
                No valid post type was provided.
            </p>

            <a href="../index.html" class="read-more">
                ← Back Home
            </a>

        </div>
    `;
}