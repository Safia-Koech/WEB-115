    // JavaScript code for form validation
	// Prevent form from submitting
  let form = document.getElementById('myForm');

      // Retrieve the input field value
      let input = document.getElementById('inputField');
      // Regular expression pattern for alphanumeric input
      let regex = /^[a-zA-Z0-9]+$/;
      // Check if the input value matches the pattern
      form.addEventListener('submit', function(event) {
        if (!regex.test(inputField.value)) {
          alert('Invalid format! Must be alphanumeric input.');
          event.preventDefault();
        }
      });
        // Valid input: display confirmation and submit the form
        form.addEventListener('submit', function() {
          if (regex.test(inputField.value)) {
            alert('Valid input: Form has been submitted!');
          }
        });
        // Invalid input: display error message
form.addEventListener('submit', function(event){
  if(input.value == ''){
    alert('Error, invalid input! Cannot submit an empty form.');
    event.preventDefault();
  }
});