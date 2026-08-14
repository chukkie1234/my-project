document.addEventListener("DOMContentLoaded", () => {

    const apiContainer = document.getElementById("api-posts-container");

    let start = 0;
    const limit = 6;

    const loadMoreBtn = document.getElementById("loadMoreBtn");

    function loadPosts() {

        fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=${limit}`)

            .then(response => response.json())

            .then(posts => {

                posts.forEach(post => {

                    apiContainer.innerHTML += `
                        <div class="post-card">

                            <img
                                src="https://picsum.photos/600/400?random=${post.id}"
                                alt="${post.title}"
                            >

                            <div class="post-content">

                                <span class="category">API</span>

                                <h3>${post.title}</h3>

                                <p>${post.body}</p>

                                <a
                                    href="details.html?id=${post.id}&type=api"
                                    class="read-more"
                                >
                                    Read More
                                </a>

                            </div>

                        </div>
                    `;

                });

                start += posts.length;

            })

            .catch(error => {
                console.error("Error loading posts:", error);
            });
    }

    // Load first 6 posts
    loadPosts();

    // Load 6 more when button is clicked
    if (loadMoreBtn) {

        loadMoreBtn.addEventListener("click", () => {

            loadPosts();

        });

    }

});