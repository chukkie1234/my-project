// ======================================================
// DISPLAY HARD-CODED BLOG POSTS
// ======================================================

const postsContainer = document.getElementById("posts-container");

blogPosts.forEach(post => {

    postsContainer.innerHTML += `
        <div class="post-card">

            <img src="${post.image}" alt="${post.title}">

            <div class="post-content">

                <span class="category">
                    ${post.category}
                </span>

                <h3>${post.title}</h3>

                <p class="author">
                    By ${post.author}
                </p>

                <p>
                    ${post.description}
                </p>

                <a href="pages/post.html?id=${post.id}" class="read-more">
                    Read More
                </a>

            </div>

        </div>
    `;

});




// ======================================================
// BLOG POST SEARCH + CATEGORY FILTER
// ======================================================

// Search input
const searchInput = document.getElementById("search-input");

// Category buttons
const categoryButtons = document.querySelectorAll(".category-btn");

// Default category
let selectedCategory = "All";


// ======================================================
// FILTER POSTS FUNCTION
// ======================================================

function filterPosts() {

    // Get the current search word
    const searchTerm = searchInput.value.toLowerCase().trim();


    // Get all posts currently on the page
    const allPostCards = document.querySelectorAll(
        "#posts-container .post-card, #api-posts-container .post-card"
    );


    // Check every post
    allPostCards.forEach(card => {

        // Get all text inside the post
        const postText = card.textContent.toLowerCase();


        // Find the category inside the post
        const categoryElement = card.querySelector(".category");


        // If there is no category, skip this post
        if (!categoryElement) {
            return;
        }


        // Get the category name
        const category = categoryElement.textContent.trim();


        // Check search
        const matchesSearch = postText.includes(searchTerm);


        // Check category
        const matchesCategory =
            selectedCategory === "All" ||
            category === selectedCategory;


        // Show post if BOTH conditions are true
        if (matchesSearch && matchesCategory) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

}


// ======================================================
// SEARCH FUNCTION
// ======================================================

if (searchInput) {

    searchInput.addEventListener("input", function () {

        filterPosts();

    });

}


// ======================================================
// CATEGORY FUNCTION
// ======================================================

categoryButtons.forEach(button => {

    button.addEventListener("click", function () {

        // Get selected category
        selectedCategory = button.dataset.category;


        // Remove active from all buttons
        categoryButtons.forEach(btn => {

            btn.classList.remove("active");

        });


        // Add active to clicked button
        button.classList.add("active");


        // Filter posts
        filterPosts();

    });

});

