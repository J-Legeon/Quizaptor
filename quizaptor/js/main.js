// main.js - JavaScript principal para la página de inicio

document.addEventListener('DOMContentLoaded', function() {
    // ============================================
    // FILTROS Y BÚSQUEDA
    // ============================================
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const quizCards = document.querySelectorAll('.quiz-card:not(.quiz-card-add)');
    
    let currentFilter = 'all';
    
    // Funcionalidad de búsqueda
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            filterQuizzes(currentFilter, searchTerm);
        });
    }
    
    // Funcionalidad de filtros
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Actualizar botón activo
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Obtener valor del filtro
            currentFilter = this.dataset.filter;
            const searchTerm = searchInput ? searchInput.value.toLowerCase() : '';
            
            // Filtrar quizzes
            filterQuizzes(currentFilter, searchTerm);
        });
    });
    
    // Función para filtrar quizzes
    function filterQuizzes(filter, searchTerm) {
        quizCards.forEach(card => {
            const category = card.dataset.category;
            const title = card.querySelector('.quiz-title').textContent.toLowerCase();
            const description = card.querySelector('.quiz-description').textContent.toLowerCase();
            
            const matchesFilter = filter === 'all' || category === filter;
            const matchesSearch = title.includes(searchTerm) || description.includes(searchTerm);
            
            if (matchesFilter && matchesSearch) {
                card.style.display = 'flex';
                card.style.animation = 'fadeIn 0.5s ease-out';
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    // ============================================
    // NAVEGACIÓN SUAVE
    // ============================================
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
    
    // ============================================
    // NAVEGACIÓN ACTIVA AL HACER SCROLL
    // ============================================
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});

// ============================================
// FUNCIÓN PARA INICIAR QUIZ
// ============================================
function startQuiz(quizId) {
    const validQuizzes = [
    'istqb-fundamentals', 
    'java-fundamentals', 
    'selenium-fundamentals',      
    'postman-fundamentals',       
    'jmeter-fundamentals',        
    'cucumber-fundamentals',     
    'devtools-qa',                
    'java-selenium'  ];
    
    if (validQuizzes.includes(quizId)) {
        // Redirigir a la página del quiz con el ID
        window.location.href = `pages/quiz.html?id=${quizId}`;
    } else {
        alert('Este quiz estará disponible próximamente');
    }
}