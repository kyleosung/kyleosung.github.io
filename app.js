///////////////////////////////////////////////////
// Image slider using an array of image URLs
const imageSlider = (images) => {
    let currentIndex = 0;
    const slider = document.getElementById('image-slider');
  
    const showImage = () => {
      slider.src = images[currentIndex];
    };
  
    const nextImage = () => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage();
    };
  
    const prevImage = () => {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      showImage();
    };
  
    showImage();
    document.getElementById('next-button').addEventListener('click', nextImage);
    document.getElementById('prev-button').addEventListener('click', prevImage);
  };
  
  // Usage:
  const images = ['image1.jpg', 'image2.jpg', 'image3.jpg'];
  imageSlider(images);
  



///////////////////////////////////////////////////
// FORM VALIDATION

const validateForm = () => {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    if (name.trim() === '') {
      alert('Please enter your name.');
      return false;
    }
  
    if (email.trim() === '') {
      alert('Please enter your email address.');
      return false;
    } else if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return false;
    }
  
    if (message.trim() === '') {
      alert('Please enter your message.');
      return false;
    }
  
    return true;
  };
  
  const isValidEmail = (email) => {
    // Basic email validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Usage:
  const submitButton = document.getElementById('submit-button');
  submitButton.addEventListener('click', (event) => {
    if (!validateForm()) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
  

///////////////////////////////////////////////////
// SMOOTH SCROLL TO TOP

  const scrollToTop = () => {
    const scrollToTopButton = document.getElementById('scroll-to-top-button');
  
    const scrollToTopHandler = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };
  
    scrollToTopButton.addEventListener('click', scrollToTopHandler);
  };
  
  // Usage:
  scrollToTop();
  