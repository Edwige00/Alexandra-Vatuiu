// Quiz System
const quizQuestions = [
    {
        id: 1,
        question: "What best describes you?",
        options: [
            { text: "Student on a budget", value: "student", icon: "🎓" },
            { text: "Busy parent", value: "parent", icon: "👨‍👩‍👧‍👦" },
            { text: "Cooking beginner", value: "beginner", icon: "👨‍🍳" },
            { text: "Health-conscious individual", value: "health", icon: "🥗" }
        ]
    },
    {
        id: 2,
        question: "What's your cooking experience level?",
        options: [
            { text: "Complete beginner", value: "novice", icon: "🔰" },
            { text: "Basic skills", value: "basic", icon: "⭐" },
            { text: "Intermediate", value: "intermediate", icon: "⭐⭐" },
            { text: "Advanced", value: "advanced", icon: "⭐⭐⭐" }
        ]
    },
    {
        id: 3,
        question: "How much time do you typically have for cooking?",
        options: [
            { text: "15 minutes or less", value: "quick", icon: "⚡" },
            { text: "15-30 minutes", value: "moderate", icon: "⏰" },
            { text: "30-60 minutes", value: "extended", icon: "🕐" },
            { text: "More than 1 hour", value: "leisurely", icon: "🕑" }
        ]
    },
    {
        id: 4,
        question: "What's your typical weekly food budget?",
        options: [
            { text: "Under $30", value: "tight", icon: "💸" },
            { text: "$30-50", value: "modest", icon: "💰" },
            { text: "$50-100", value: "comfortable", icon: "💵" },
            { text: "Over $100", value: "flexible", icon: "💎" }
        ]
    },
    {
        id: 5,
        question: "Do you have any dietary requirements?",
        options: [
            { text: "None", value: "none", icon: "🍽️" },
            { text: "Vegetarian", value: "vegetarian", icon: "🥬" },
            { text: "Vegan", value: "vegan", icon: "🌱" },
            { text: "Gluten-free", value: "gluten-free", icon: "🌾" },
            { text: "Diabetic-friendly", value: "diabetic", icon: "🩺" }
        ]
    },
    {
        id: 6,
        question: "What season are you cooking for?",
        options: [
            { text: "Spring - Fresh & Light", value: "spring", icon: "🌸" },
            { text: "Summer - Cool & Refreshing", value: "summer", icon: "☀️" },
            { text: "Fall - Warm & Comforting", value: "fall", icon: "🍂" },
            { text: "Winter - Hearty & Warming", value: "winter", icon: "❄️" }
        ]
    }
];

// Recipe Database
const recipes = [
    {
        id: 1,
        title: "Quick Pasta Aglio e Olio",
        description: "Simple Italian pasta with garlic, olive oil, and red pepper flakes",
        time: 15,
        difficulty: "easy",
        budget: "tight",
        dietary: ["vegetarian"],
        season: ["spring", "summer"],
        ingredients: ["pasta", "garlic", "olive oil", "red pepper flakes", "parsley"],
        ingredientsList: "Spaghetti, garlic, olive oil, red pepper flakes, fresh parsley, parmesan cheese",
        instructions: "1. Cook pasta according to package directions. 2. Heat olive oil and sauté garlic. 3. Add red pepper flakes. 4. Toss with pasta and parsley.",
        icon: "🍝"
    },
    {
        id: 2,
        title: "Veggie Stir Fry",
        description: "Colorful mix of vegetables with soy sauce and ginger",
        time: 20,
        difficulty: "easy",
        budget: "modest",
        dietary: ["vegetarian", "vegan"],
        season: ["spring", "summer", "fall"],
        ingredients: ["mixed vegetables", "soy sauce", "ginger", "garlic", "rice"],
        ingredientsList: "Mixed vegetables, soy sauce, fresh ginger, garlic, vegetable oil, rice",
        instructions: "1. Heat oil in wok. 2. Add garlic and ginger. 3. Stir-fry vegetables. 4. Add soy sauce. 5. Serve over rice.",
        icon: "🥗"
    },
    {
        id: 3,
        title: "Hearty Lentil Soup",
        description: "Nutritious and filling soup perfect for cold days",
        time: 45,
        difficulty: "easy",
        budget: "tight",
        dietary: ["vegetarian", "vegan", "diabetic"],
        season: ["fall", "winter"],
        ingredients: ["lentils", "carrots", "celery", "onion", "vegetable broth"],
        ingredientsList: "Red lentils, carrots, celery, onion, vegetable broth, bay leaves, thyme",
        instructions: "1. Sauté vegetables. 2. Add lentils and broth. 3. Simmer 30 minutes. 4. Season with herbs.",
        icon: "🍲"
    },
    {
        id: 4,
        title: "Chicken Rice Bowl",
        description: "Protein-packed bowl with seasoned chicken and vegetables",
        time: 25,
        difficulty: "intermediate",
        budget: "modest",
        dietary: ["gluten-free"],
        season: ["spring", "summer", "fall", "winter"],
        ingredients: ["chicken breast", "rice", "vegetables", "soy sauce"],
        ingredientsList: "Chicken breast, brown rice, broccoli, carrots, soy sauce, sesame oil",
        instructions: "1. Cook rice. 2. Season and cook chicken. 3. Steam vegetables. 4. Combine in bowl with sauce.",
        icon: "🍚"
    },
    {
        id: 5,
        title: "Avocado Toast Deluxe",
        description: "Elevated avocado toast with tomatoes and herbs",
        time: 10,
        difficulty: "easy",
        budget: "modest",
        dietary: ["vegetarian", "vegan"],
        season: ["spring", "summer"],
        ingredients: ["bread", "avocado", "tomato", "lime", "herbs"],
        ingredientsList: "Whole grain bread, ripe avocado, cherry tomatoes, lime, fresh herbs, olive oil",
        instructions: "1. Toast bread. 2. Mash avocado with lime. 3. Top with tomatoes and herbs. 4. Drizzle with olive oil.",
        icon: "🥑"
    },
    {
        id: 6,
        title: "Banana Oat Pancakes",
        description: "Healthy pancakes made with just bananas and oats",
        time: 15,
        difficulty: "easy",
        budget: "tight",
        dietary: ["vegetarian", "gluten-free"],
        season: ["spring", "summer", "fall", "winter"],
        ingredients: ["banana", "oats", "eggs", "milk"],
        ingredientsList: "Ripe bananas, rolled oats, eggs, milk, cinnamon, vanilla extract",
        instructions: "1. Blend bananas and oats. 2. Add eggs and milk. 3. Cook like regular pancakes. 4. Serve with fruit.",
        icon: "🥞"
    },
    {
        id: 7,
        title: "Mediterranean Chickpea Salad",
        description: "Fresh and protein-rich salad with Mediterranean flavors",
        time: 15,
        difficulty: "easy",
        budget: "modest",
        dietary: ["vegetarian", "vegan", "gluten-free"],
        season: ["spring", "summer"],
        ingredients: ["chickpeas", "cucumber", "tomato", "olive oil", "lemon"],
        ingredientsList: "Canned chickpeas, cucumber, tomatoes, red onion, olive oil, lemon juice, herbs",
        instructions: "1. Drain chickpeas. 2. Chop vegetables. 3. Mix with olive oil and lemon. 4. Season with herbs.",
        icon: "🥙"
    },
    {
        id: 8,
        title: "Sweet Potato Curry",
        description: "Comforting curry with sweet potatoes and coconut milk",
        time: 35,
        difficulty: "intermediate",
        budget: "modest",
        dietary: ["vegetarian", "vegan", "gluten-free"],
        season: ["fall", "winter"],
        ingredients: ["sweet potato", "coconut milk", "curry powder", "onion"],
        ingredientsList: "Sweet potatoes, coconut milk, curry powder, onion, garlic, ginger, spinach",
        instructions: "1. Sauté onion and spices. 2. Add sweet potatoes and coconut milk. 3. Simmer until tender. 4. Add spinach.",
        icon: "🍠"
    },
    {
        id: 9,
        title: "Greek Yogurt Parfait",
        description: "Layered parfait with yogurt, berries, and granola",
        time: 5,
        difficulty: "easy",
        budget: "modest",
        dietary: ["vegetarian", "gluten-free"],
        season: ["spring", "summer"],
        ingredients: ["greek yogurt", "berries", "granola", "honey"],
        ingredientsList: "Greek yogurt, mixed berries, granola, honey, vanilla extract",
        instructions: "1. Layer yogurt in glass. 2. Add berries and granola. 3. Drizzle with honey. 4. Repeat layers.",
        icon: "🥣"
    },
    {
        id: 10,
        title: "Vegetable Soup",
        description: "Warming soup loaded with seasonal vegetables",
        time: 40,
        difficulty: "easy",
        budget: "tight",
        dietary: ["vegetarian", "vegan", "diabetic"],
        season: ["fall", "winter"],
        ingredients: ["mixed vegetables", "vegetable broth", "herbs", "garlic"],
        ingredientsList: "Carrots, celery, potatoes, onion, vegetable broth, herbs, garlic, bay leaves",
        instructions: "1. Chop all vegetables. 2. Sauté aromatics. 3. Add vegetables and broth. 4. Simmer until tender.",
        icon: "🥕"
    }
];

// Quiz State
let currentQuestion = 0;
let quizAnswers = {};
let isQuizStarted = false;

// Initialize the website
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
    displayAllRecipes();
    setupEventListeners();
    setupSmoothScrolling();
});

function initializeWebsite() {
    // Initialize quiz
    displayQuestion();
    updateProgress();
    
    // Initialize mobile menu
    setupMobileMenu();
    
    // Initialize filter buttons
    setupFilterButtons();
}

function setupEventListeners() {
    // Ingredient search
    const ingredientSearch = document.getElementById('ingredientSearch');
    if (ingredientSearch) {
        ingredientSearch.addEventListener('input', debounce(searchByIngredients, 300));
        ingredientSearch.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchByIngredients();
            }
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function setupSmoothScrolling() {
    // Add smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';
}

function setupMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
    }
}

function setupFilterButtons() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            filterRecipes(filter);
        });
    });
}

// Quiz Functions
function startQuiz() {
    isQuizStarted = true;
    currentQuestion = 0;
    quizAnswers = {};
    
    // Scroll to quiz section
    document.getElementById('quiz').scrollIntoView({
        behavior: 'smooth'
    });
    
    displayQuestion();
    updateProgress();
}

function displayQuestion() {
    const container = document.getElementById('questionContainer');
    const question = quizQuestions[currentQuestion];
    
    if (!question) return;
    
    container.innerHTML = `
        <div class="question">${question.question}</div>
        <div class="options">
            ${question.options.map(option => `
                <div class="option" onclick="selectOption('${option.value}')">
                    <span style="font-size: 2rem; margin-right: 1rem;">${option.icon}</span>
                    ${option.text}
                </div>
            `).join('')}
        </div>
    `;
    
    updateNavigation();
}

function selectOption(value) {
    const question = quizQuestions[currentQuestion];
    quizAnswers[question.id] = value;
    
    // Update UI to show selection
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    event.target.closest('.option').classList.add('selected');
    
    // Enable next button
    document.getElementById('nextBtn').disabled = false;
}

function nextQuestion() {
    if (!quizAnswers[quizQuestions[currentQuestion].id]) {
        alert('Please select an answer before continuing.');
        return;
    }
    
    currentQuestion++;
    
    if (currentQuestion < quizQuestions.length) {
        displayQuestion();
        updateProgress();
        updateNavigation();
    } else {
        showResults();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        displayQuestion();
        updateProgress();
        updateNavigation();
    }
}

function updateProgress() {
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
    document.getElementById('progress').style.width = `${progress}%`;
}

function updateNavigation() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    prevBtn.style.display = currentQuestion > 0 ? 'block' : 'none';
    nextBtn.textContent = currentQuestion === quizQuestions.length - 1 ? 'See Results' : 'Next';
}

function showResults() {
    const container = document.getElementById('quizContainer');
    const results = document.getElementById('quizResults');
    
    container.style.display = 'none';
    results.style.display = 'block';
    
    const recommendations = generateRecommendations();
    displayRecommendations(recommendations);
}

function generateRecommendations() {
    const userProfile = {
        persona: quizAnswers[1],
        experience: quizAnswers[2],
        time: quizAnswers[3],
        budget: quizAnswers[4],
        dietary: quizAnswers[5],
        season: quizAnswers[6]
    };
    
    // Score recipes based on user answers
    const scoredRecipes = recipes.map(recipe => {
        let score = 0;
        
        // Budget match
        if (recipe.budget === userProfile.budget) score += 3;
        else if (userProfile.budget === 'flexible') score += 2;
        
        // Dietary requirements
        if (userProfile.dietary === 'none' || recipe.dietary.includes(userProfile.dietary)) {
            score += 3;
        }
        
        // Season match
        if (recipe.season.includes(userProfile.season)) score += 2;
        
        // Time constraints
        if (userProfile.time === 'quick' && recipe.time <= 15) score += 3;
        else if (userProfile.time === 'moderate' && recipe.time <= 30) score += 2;
        else if (userProfile.time === 'extended' && recipe.time <= 60) score += 1;
        
        // Experience level
        if (userProfile.experience === 'novice' && recipe.difficulty === 'easy') score += 2;
        else if (userProfile.experience === 'basic' && recipe.difficulty !== 'advanced') score += 1;
        
        return { ...recipe, score };
    });
    
    // Sort by score and return top 6
    return scoredRecipes
        .sort((a, b) => b.score - a.score)
        .slice(0, 6);
}

function displayRecommendations(recommendations) {
    const summaryContainer = document.getElementById('resultsSummary');
    const recipesContainer = document.getElementById('recommendedRecipes');
    
    // Create summary based on user profile
    const dietary = quizAnswers[5] !== 'none' ? quizAnswers[5] : '';
    const dietaryText = dietary ? ` with ${dietary} options` : '';
    
    summaryContainer.innerHTML = `
        <h4>Perfect Matches For You!</h4>
        <p>Based on your preferences, we've found ${recommendations.length} recipes that are perfect for your lifestyle${dietaryText}. These recipes match your budget, time constraints, and cooking experience level.</p>
    `;
    
    recipesContainer.innerHTML = recommendations.map(recipe => createRecipeCard(recipe)).join('');
}

function restartQuiz() {
    currentQuestion = 0;
    quizAnswers = {};
    
    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('quizResults').style.display = 'none';
    
    displayQuestion();
    updateProgress();
}

// Recipe Functions
function displayAllRecipes() {
    const container = document.getElementById('recipesGrid');
    container.innerHTML = recipes.map(recipe => createRecipeCard(recipe)).join('');
}

function createRecipeCard(recipe) {
    const difficultyStars = '⭐'.repeat(recipe.difficulty === 'easy' ? 1 : recipe.difficulty === 'intermediate' ? 2 : 3);
    
    return `
        <div class="recipe-card fade-in" data-dietary="${recipe.dietary.join(' ')}" data-ingredients="${recipe.ingredients.join(' ')}">
            <div class="recipe-image">
                <span style="font-size: 4rem;">${recipe.icon}</span>
            </div>
            <div class="recipe-content">
                <h3 class="recipe-title">${recipe.title}</h3>
                <p class="recipe-description">${recipe.description}</p>
                
                <div class="recipe-meta">
                    <div class="recipe-time">
                        <i class="fas fa-clock"></i>
                        ${recipe.time} min
                    </div>
                    <div class="recipe-difficulty">
                        <span>${difficultyStars}</span>
                        ${recipe.difficulty}
                    </div>
                </div>
                
                <div class="recipe-tags">
                    ${recipe.dietary.map(diet => `<span class="tag ${diet}">${diet}</span>`).join('')}
                </div>
                
                <div class="recipe-ingredients">
                    <h4>Ingredients:</h4>
                    <p class="ingredients-list">${recipe.ingredientsList}</p>
                </div>
                
                <div class="recipe-instructions" style="margin-top: 1rem;">
                    <h4>Quick Instructions:</h4>
                    <p style="font-size: 0.9rem; color: #666; line-height: 1.4;">${recipe.instructions}</p>
                </div>
            </div>
        </div>
    `;
}

function filterRecipes(filter) {
    const cards = document.querySelectorAll('.recipe-card');
    
    cards.forEach(card => {
        if (filter === 'all') {
            card.style.display = 'block';
        } else {
            const dietary = card.getAttribute('data-dietary');
            if (dietary.includes(filter)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

function searchByIngredients() {
    const searchTerm = document.getElementById('ingredientSearch').value.toLowerCase().trim();
    const cards = document.querySelectorAll('.recipe-card');
    
    if (!searchTerm) {
        cards.forEach(card => card.style.display = 'block');
        return;
    }
    
    const searchIngredients = searchTerm.split(/[,\s]+/).filter(term => term.length > 0);
    
    cards.forEach(card => {
        const ingredients = card.getAttribute('data-ingredients').toLowerCase();
        const hasMatchingIngredients = searchIngredients.some(ingredient => 
            ingredients.includes(ingredient)
        );
        
        card.style.display = hasMatchingIngredients ? 'block' : 'none';
    });
}

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Animation on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.fade-in');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeInUp 0.6s ease forwards';
            }
        });
    });
    
    elements.forEach(el => observer.observe(el));
}

// Initialize animations
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(102, 126, 234, 0.95)';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
        header.style.backdropFilter = 'none';
    }
});

// Export functions for global access
window.startQuiz = startQuiz;
window.nextQuestion = nextQuestion;
window.previousQuestion = previousQuestion;
window.selectOption = selectOption;
window.restartQuiz = restartQuiz;
window.searchByIngredients = searchByIngredients;