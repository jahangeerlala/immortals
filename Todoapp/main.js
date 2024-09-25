// Smooth scrolling function (used when links are clicked)
function smoothScroll(targetId) {
    document.getElementById(targetId).scrollIntoView({
        behavior: 'smooth'  // Enables smooth scrolling
    });
}

// Function to set active link
function setActiveLink(linkId) {
    // Remove 'active' class from all links
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
    });

    // Add 'active' class to the clicked link
    document.getElementById(linkId).classList.add('active');
}

// Adding event listeners to each navigation link for smooth scrolling
document.getElementById('homeLink').addEventListener('click', function(event) {
    event.preventDefault();
    smoothScroll('home');
    setActiveLink('homeLink');
});

document.getElementById('aboutusLink').addEventListener('click', function(event) {
    event.preventDefault();
    smoothScroll('aboutus');
    setActiveLink('aboutusLink');
});

document.getElementById('serviceLink').addEventListener('click', function(event) {
    event.preventDefault();
    smoothScroll('service');
    setActiveLink('serviceLink');
});

document.getElementById('portfolioLink').addEventListener('click', function(event) {
    event.preventDefault();
    smoothScroll('portfolio');
    setActiveLink('portfolioLink');
});

document.getElementById('blogLink').addEventListener('click', function(event) {
    event.preventDefault();
    smoothScroll('blog');
    setActiveLink('blogLink');
});

document.getElementById('contactLink').addEventListener('click', function(event) {
    event.preventDefault();
    smoothScroll('contact');
    setActiveLink('contactLink');
});

// Function to detect the active section based on scroll position
function handleScroll() {
    const sections = document.querySelectorAll('section');
    let currentSectionId = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const scrollPosition = window.scrollY + window.innerHeight / 6;  // Adjusted to trigger when the section is partially visible

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute('id');
        }
    });

    // Update the active link based on the current section
    if (currentSectionId) {
        const activeLinkId = `${currentSectionId}Link`;
        setActiveLink(activeLinkId);
    }
}

// Attach scroll event listener to update active link on scroll
window.addEventListener('scroll', handleScroll);


const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show or hide the button depending on the scroll position
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

const themeToggleBtn = document.getElementById('themeToggleBtn');

themeToggleBtn.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('nav, section, nav ul li a').forEach(el => {
        el.classList.toggle('dark-mode');
    });
});


