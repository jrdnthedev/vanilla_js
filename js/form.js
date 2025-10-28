export default class Form {
  constructor(id) {
    this.elements = this.getFormElements(id);
    this.id = id;
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
      } else if (
        element.name === "email" &&
        !this.isEmailValid(element.value)
      ) {
        // Check email format for non-empty email fields
        invalidElements.push(element);
      }
    }

    // Display error messages for invalid elements
    for (const invalidEl of invalidElements) {
      const newEl = document.createElement("span");
      newEl.className = "error-message";
      if (invalidEl.name === "email") {
        if (invalidEl.value.trim() === "") {
          newEl.textContent = `${invalidEl.name} cannot be empty`;
        } else {
          newEl.textContent = `must be a valid email`;
        }
      } else {
        newEl.textContent = `${invalidEl.name} cannot be empty`;
      }
      invalidEl.insertAdjacentElement("afterend", newEl);
    }

    // Return true if no invalid elements (form is valid)
    return invalidElements.length === 0;
  }

  isEmailValid(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  clearErrors() {
    const form = document.getElementById(this.id);
    const errorMessages = form.querySelectorAll(".error-message");
    errorMessages.forEach((error) => error.remove());
  }

  submitForm() {
    if (this.isFormValid()) {
      console.log("valid submission!");
    } else {
      console.log("invalid form submission");
    }
  }
}
