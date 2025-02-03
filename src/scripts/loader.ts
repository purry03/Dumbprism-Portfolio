import { gsap } from "gsap";

// Define startLoader function with correct types
function startLoader(): void {
  const counterElement = document.querySelector(".counter") as HTMLElement | null; // Ensure the element exists
  const loaderElement = document.querySelector("Loader") as HTMLElement | null; // Ensure the loader element exists
  const overlayElement = document.querySelector(".overlay") as HTMLElement | null; // Ensure the overlay element exists
  let currentValue = 0;

  // Define the updateCounter function
  function updateCounter(): void {
    if (!counterElement) return; // Type check for counterElement existence
    if (currentValue === 100) {
      if (loaderElement) {
        loaderElement.classList.add("loader-hidden"); // Hide the loader
      }
      if (overlayElement) {
        setTimeout(() => {
          overlayElement.remove(); // Remove the overlay element after 2 seconds
          counterElement.remove();
        }, 5000);
      }
      return;
    }

    currentValue += Math.floor(Math.random() * 10) + 1;

    if (currentValue > 100) {
      currentValue = 100;
    }

    counterElement.textContent = currentValue.toString(); // Convert number to string

    const delay = Math.floor(Math.random() * 200) + 50;
    setTimeout(updateCounter, delay);
  }

  updateCounter();
}

// Initialize the loader
startLoader();

// Use GSAP for animations (assuming it's installed and imported)
gsap.to(".counter", {
  delay: 3.5,
  opacity: 0,
  duration: 0.25, // In GSAP 3.x, use 'duration' instead of 'time'
});

gsap.to(".bar", {
  delay: 3.5,
  height: 0,
  duration: 1.5,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut",
});

gsap.from(".h1", {
  delay: 4,
  y: 700,
  duration: 1.5,
  stagger: {
    amount: 0.5,
  },
  ease: "power4.inOut",
});

gsap.from(".hero", {
  delay: 4.5,
  y: 400,
  duration: 2,
  ease: "power4.inOut",
});

// Get the logo element, typing it as HTMLDivElement or null
const logo = document.querySelector("#logo") as HTMLElement | null;