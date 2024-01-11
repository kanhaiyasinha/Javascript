document.addEventListener('DOMContentLoaded', function () {
    // Get references to the HTML elements
    const numberElement = document.getElementById('number');
    const incrementInput = document.getElementById('increment');
    const addButton = document.getElementById('add');
    const subtractButton = document.getElementById('subtract');
    const resetButton = document.getElementById('reset');
  
    // Initialize the current number and increment
    let currentNumber = 0;
    let increment = 1;
  
    // Update the number displayed on the page
    function updateNumber() {
      numberElement.textContent = currentNumber;
    }
  
    // Add button click handler
    addButton.addEventListener('click', function () {
      currentNumber += parseInt(incrementInput.value);
      updateNumber();
    });
  
    // Subtract button click handler
    subtractButton.addEventListener('click', function () {
      currentNumber -= parseInt(incrementInput.value);
      updateNumber();
    });
  
    // Reset button click handler
    resetButton.addEventListener('click', function () {
      currentNumber = 0;
      updateNumber();
    });
  
    // Initial update
    updateNumber();
  });
  