// Toggle Navbar Menu
const navbarToggle = document.querySelector('.navbar-toggler');
const navbarMenu = document.querySelector('.navbar-collapse');

navbarToggle.addEventListener('click', () => {
    navbarMenu.classList.toggle('show');
});

// Smooth Scrolling for Navbar Links
const navbarLinks = document.querySelectorAll('.navbar-nav a[href^="#"]');

navbarLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offsetTop = targetElement.offsetTop - 70; // Adjusted for navbar height

            window.scroll({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const lightCarousel = document.querySelectorAll('.light-carousel');
    const darkCarousel = document.querySelectorAll('.dark-carousel');

    function slideScreenshots(carousel) {
        carousel.forEach((item) => {
            const screenshots = item.querySelectorAll('img');
            let currentIndex = 0;

            // Function to slide to the next screenshot
            function slideNext() {
                const nextIndex = (currentIndex + 1) % screenshots.length;
                screenshots[currentIndex].style.transform = 'translateX(100%)';
                screenshots[nextIndex].style.transform = 'translateX(0)';
                currentIndex = nextIndex;
            }

            // Initially slide the screenshots
            slideNext();

            // Set interval to slide every 3 seconds (adjust timing as needed)
            setInterval(slideNext, 3000);
        });
    }

    // Initiate slide function for light and dark carousels
    slideScreenshots(lightCarousel);
    slideScreenshots(darkCarousel);
});

document.addEventListener('DOMContentLoaded', function() {
    const reviews = document.querySelectorAll('.review');

    // Initialize the first review as active
    let currentIndex = 0;
    highlightReview(currentIndex);

    // Event listener for clicking on a review
    reviews.forEach((review, index) => {
        review.addEventListener('click', () => {
            highlightReview(index);
            updateUserInfo(review);
            currentIndex = index;
        });
    });

    // Event listener for previous button
    const prevButton = document.querySelector('.navigation .prev');
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + reviews.length) % reviews.length;
        highlightReview(currentIndex);
        updateUserInfo(reviews[currentIndex]);
    });

    // Event listener for next button
    const nextButton = document.querySelector('.navigation .next');
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % reviews.length;
        highlightReview(currentIndex);
        updateUserInfo(reviews[currentIndex]);
    });

    // Function to highlight the active review
    function highlightReview(index) {
        reviews.forEach(review => {
            review.classList.remove('highlighted');
        });
        reviews[index].classList.add('highlighted');
    }

    // Function to update user information
    function updateUserInfo(review) {
        const author = review.querySelector('.avatar').getAttribute('data-author');
        const occupation = review.querySelector('.avatar').getAttribute('data-occupation');
        const authorElement = document.querySelector('.navigation .author');
        const occupationElement = document.querySelector('.navigation .occupation');

        authorElement.textContent = author;
        occupationElement.textContent = occupation;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('toggle');
    const monthlyPrices = document.querySelectorAll('.amount');
    const pricingPlans = document.querySelectorAll('.pricing-plan');

    // Event listener for toggle switch change
    toggleSwitch.addEventListener('change', function() {
        if (this.checked) {
            // Switched to annual pricing
            monthlyPrices.forEach(price => {
                const monthlyAmount = parseFloat(price.textContent);
                price.textContent = (monthlyAmount * 6).toFixed(0); // Assuming 12 months in a year
            });
        } else {
            // Switched back to monthly pricing
            monthlyPrices.forEach(price => {
                price.textContent = price.dataset.monthly; // Restore original monthly prices
            });
        }
    });

    // Store original monthly prices in data attribute for each plan
    pricingPlans.forEach(plan => {
        const monthlyPrice = plan.querySelector('.amount').textContent;
        plan.querySelector('.amount').setAttribute('data-monthly', monthlyPrice);
    });
});

//screenshot
document.addEventListener('DOMContentLoaded', function() {
    const lightCarousels = document.querySelectorAll('.light-carousel');
    const darkCarousels = document.querySelectorAll('.dark-carousel');

    // Function to handle sliding effect for a single carousel
    function slideImages(carousel) {
        const slides = carousel.querySelectorAll('img');
        const totalSlides = slides.length;
        let currentSlide = 0;

        // Function to transition to the next slide
        function nextSlide() {
            slides[currentSlide].style.transform = 'translateX(-100%)';
            currentSlide = (currentSlide + 1) % totalSlides;
            slides[currentSlide].style.transform = 'translateX(0)';
        }

        // Automatically transition between slides
        setInterval(nextSlide, 3000); // Adjust timing as per your requirement (milliseconds)
    }

    // Call the function for each light and dark carousel
    lightCarousels.forEach(carousel => {
        slideImages(carousel);
    });

    darkCarousels.forEach(carousel => {
        slideImages(carousel);
    });
});
