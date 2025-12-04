// Portfolio Swiper
document.addEventListener('DOMContentLoaded', function() {
    const portfolioCards = document.querySelector('.portfolio__cards');
    const cards = document.querySelectorAll('.portfolio__cards .card');
    const rectangleCounter = document.querySelector('.rectangle-counter');
    
    let currentIndex = 0;
    const totalSlides = cards.length;
    
    function updateSlider() {
        const cardWidth = 544;
        const gap = 40;
        const offset = -(currentIndex * (cardWidth + gap));
        portfolioCards.style.transform = `translateX(${offset}px)`;
        
        // Update counter
        rectangleCounter.textContent = `0${currentIndex + 1}/0${totalSlides}`;
        
        // Update progress bar
        const progressPercentage = ((currentIndex + 1) / totalSlides) * 100;
        const progressRect = document.querySelector('.rectangle-component rect:last-child');
        if (progressRect) {
            progressRect.setAttribute('width', (400 * progressPercentage / 100));
        }
    }
    
    // Get all arrow links
    const allArrows = document.querySelectorAll('.portfolio-arrow-link');
    
    allArrows.forEach(arrow => {
        arrow.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Check if it's left or right arrow
            if (arrow.classList.contains('portfolio-arrow-left')) {
                // Left arrow - go back
                if (currentIndex > 0) {
                    currentIndex--;
                    updateSlider();
                }
            } else if (arrow.classList.contains('portfolio-arrow-center')) {
                // Right arrow - go forward
                if (currentIndex < totalSlides - 1) {
                    currentIndex++;
                    updateSlider();
                }
            }
        });
    });
    
    // Initialize
    updateSlider();
});

// Partners Slider (Trusted partners block)
document.addEventListener("DOMContentLoaded", function () {
    const imageBlock = document.querySelector(".partners__image");
    const counterEl = document.querySelector(".partners-rectangle-counter");
    const progressRect = document.querySelector(".partners-rectangle-component rect:last-child");

    const leftArrow = document.querySelector(".partners-arrow-left");
    const rightArrow = document.querySelector(".partners-arrow-right");

    // Массив изображений для слайдера
    const slides = [
        "img/длинный дом.jpg",
        "img/дом2.png",
    ];

    let current = 0;

    function updatePartnerSlider() {
        // Меняем картинку через background-image
        imageBlock.style.backgroundImage = `url('${slides[current]}')`;

        // Обновляем счётчик
        const total = slides.length;
        counterEl.textContent = `0${current + 1}/0${total}`;

        // Обновляем прогресс-бар
        const percent = ((current + 1) / total) * 100;
        progressRect.setAttribute("width", (400 * percent / 100));
    }

    // ► Вправо
    rightArrow.addEventListener("click", (e) => {
        e.preventDefault();
        if (current < slides.length - 1) {
            current++;
            updatePartnerSlider();
        }
    });

    // ◄ Влево
    leftArrow.addEventListener("click", (e) => {
        e.preventDefault();
        if (current > 0) {
            current--;
            updatePartnerSlider();
        }
    });

    // Инициализация
    updatePartnerSlider();
});

// FAQ Accordion - только для второго вопроса
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq__item--text-only');
    
    // Для каждого элемента с текстом и ответом
    faqItems.forEach(item => {
        const button = item.querySelector('.faq__icon');
        
        if (button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Переключаем класс для анимации
                item.classList.toggle('faq__item--collapsed');
            });
        }
    });
});
