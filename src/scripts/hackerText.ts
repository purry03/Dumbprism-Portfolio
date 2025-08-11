
const hackerText = (element: { innerText: any; }) => {
  const originalText = element.innerText;
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{};':\",./<>?\\";
  let iterations = 0;
  const interval = setInterval(() => {
    element.innerText = originalText
      .split("")
      .map((char: any, index: number) => {
        if (index < iterations) {
          return originalText[index];
        }
        return characters[Math.floor(Math.random() * characters.length)];
      })
      .join("");
    if (iterations >= originalText.length) {
      clearInterval(interval);
    }
    iterations += 1 / 3;
  }, 1);
};

export default hackerText;