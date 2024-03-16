                let currentSlide = 0;
                const totalSlides = document.querySelectorAll('.carousel-slide').length;
                const carouselWrapper = document.querySelector('.carousel-wrapper');
              
                function showSlide(n) {
                  if (n >= totalSlides) {
                    currentSlide = 0;
                  } else if (n < 0) {
                    currentSlide = totalSlides - 1;
                  }
              
                  const translateValue = -currentSlide * 100 + '%';
                  carouselWrapper.style.transform = 'translateX(' + translateValue + ')';
                }
              
                function nextSlide() {
                  currentSlide++;
                  showSlide(currentSlide);
                }
              
                function prevSlide() {
                  currentSlide--;
                  showSlide(currentSlide);
                }
              
                function autoSlide() {
                  nextSlide();
                }
              
                // Set up automated movement every 2 seconds
                setInterval(autoSlide, 7000);
              
                // Show the initial slide
                showSlide(currentSlide);