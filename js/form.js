export default class Form {
  constructor(id) {
    this.elements = this.getFormElements(id);
  }

  getFormElements(id) {
    const form = document.getElementById(id);
    const elements = form.querySelectorAll("input");
    return elements;
  }

  isFormValid() {
    // Clear any existing error messages first
    this.clearErrors();
    
    const invalidElements = [];
    for (const element of this.elements) {
      if (element.value.trim() === "") {
        invalidElements.push(element);
      }
    }
    
    // Display error messages for invalid elements
    for (const invalidEl of invalidElements) {
      const newEl = document.createElement("span");
      newEl.className = "error-message";
      newEl.textContent = `${invalidEl.name} cannot be empty`;
      invalidEl.insertAdjacentElement("afterend", newEl);
    }
    
    // Return true if no invalid elements (form is valid)
    return invalidElements.length === 0;
  }

  clearErrors() {
    const errorMessages = document.querySelectorAll(".error-message");
    errorMessages.forEach(error => error.remove());
  }

  submitForm() {
    if (this.isFormValid()) {
      console.log("valid submission!");
    } else {
      console.log("invalid form submission");
    }
  }
}

// accepts a form element
// gets form input elements and stores them in var
// method to check if form inputs contain valid text
// if no valid text displays error message for each invalid input
//
