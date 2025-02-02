// Select elements
const carousel = document.getElementById('carousel') as HTMLElement;
const prevButton = document.getElementById('prevButton') as HTMLButtonElement;
const nextButton = document.getElementById('nextButton') as HTMLButtonElement;
const pagination = document.getElementById('pagination') as HTMLElement;

// Track current slide index
let currentIndex = 0;

// Get total number of slides
const slides = carousel.children;
const totalSlides = slides.length;

// Create pagination dots
for (let i = 0; i < totalSlides; i++) {
  const dot = document.createElement('div');
  dot.classList.add('w-2', 'h-2', 'bg-white-500', 'rounded-full', 'cursor-pointer');
  dot.addEventListener('click', () => goToSlide(i));
  pagination.appendChild(dot);
}

// Update active dot
const updatePagination = () => {
  const dots = pagination.children;
  for (let i = 0; i < dots.length; i++) {
    dots[i].classList.toggle('bg-[#E49245]', i === currentIndex);
    dots[i].classList.toggle('bg-gray-500', i !== currentIndex);
  }
};

// Go to a specific slide
const goToSlide = (index: number) => {
  if (index < 0 || index >= totalSlides) return;
  currentIndex = index;
  carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
  
  updatePagination();
};

// Previous slide
prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    goToSlide(currentIndex - 1);
  } else {
    goToSlide(totalSlides - 1); 
  }
});

// Next slide
nextButton.addEventListener('click', () => {
  if (currentIndex < totalSlides - 1) {
    goToSlide(currentIndex + 1);
  } else {
    goToSlide(0); 
  }
});

// Initialize
goToSlide(0);

// Auto-slide every 5 seconds
setInterval(() => {
  if (currentIndex < totalSlides - 1) {
    goToSlide(currentIndex + 1);
  } else {
    goToSlide(0);  
  }
}, 3000); 
