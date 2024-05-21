
const articlesData = [
    {
        title: "Introduction to Artificial Intelligence",
        content: "Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions.",
        category: "Technology",
        image: "images/ai.jpeg"
    },
    {
        title: "Exploring the Great Wall of China",
        content: "The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups of the Eurasian Steppe.",
        category: "Travel",
        image: "images/great-wall.jpeg"
    },
    {
        title: "10 Must-Try Street Foods from Around the World",
        content: "Street food is a quintessential part of experiencing a country's culture. Here are 10 street foods from around the world that you must try.",
        category: "Food",
        image: "images/street-food.jpeg"
    },
    {
        title: "5 Essential Exercises for Beginners",
        content: "Starting a fitness journey can be overwhelming, but these five exercises are perfect for beginners looking to get started on the right track.",
        category: "Fitness",
        image: "images/fitness.jpeg"
    }
];


function displayArticles(category) {
    const articlesContainer = document.getElementById('articles');
    articlesContainer.innerHTML = ''; 

    articlesData.forEach(article => {
        if (category === 'all' || article.category.toLowerCase() === category) {
            const articleElement = document.createElement('article');
            articleElement.innerHTML = `
                <h2>${article.title}</h2>
                <img src="${article.image}" alt="${article.title}">
                <p>${article.content}</p>
                <p><strong>Category:</strong> ${article.category}</p>
                <hr>
                <h3>Comments</h3>
                <div id="comments-${article.title.replace(/\s+/g, '-')}"></div>
                <form id="comment-form-${article.title.replace(/\s+/g, '-')}">
                    <label for="comment">Add Comment:</label><br>
                    <textarea id="comment" name="comment" rows="4" cols="50"></textarea><br>
                    <button type="submit">Submit</button>
                </form>
                <hr>
            `;
            articlesContainer.appendChild(articleElement);

            const commentForm = document.getElementById(`comment-form-${article.title.replace(/\s+/g, '-')}`);
            commentForm.addEventListener('submit', function(event) {
                event.preventDefault();
                const commentInput = commentForm.querySelector('textarea');
                const comment = commentInput.value;
                if (comment.trim() !== '') {
                    const commentsContainer = document.getElementById(`comments-${article.title.replace(/\s+/g, '-')}`);
                    const commentElement = document.createElement('div');
                    commentElement.textContent = comment;
                    commentsContainer.appendChild(commentElement);
                    commentInput.value = ''; // Clear input field after submission
                }
            });
        }
    });
}

// Function to handle category filtering
function handleCategoryFilter() {
    const categoryLinks = document.querySelectorAll('nav ul li a');
    categoryLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const category = this.id.toLowerCase();
            displayArticles(category);
        });
    });
}

// Call the function to display articles initially
displayArticles('all');

// Call the function to handle category filtering
handleCategoryFilter();
