export default class Accordion {
  constructor(id) {
    console.log("accordion running...");
    this.elements = this.getPanelElements(id);
  }

  getPanelElements(id) {
    const elements = document.getElementById(id);
    return elements.querySelectorAll(".tabpanel button");
  }

  togglePanel(e) {
    const button = document.getElementById(e.target.id);
    const content = button.nextElementSibling;
    const isCurrentlyOpen = content.style.display === "block";
    
    if (isCurrentlyOpen) {
      // If the clicked panel is currently open, just close it
      content.style.display = "none";
      button.ariaExpanded = false;
    } else {
      // If the clicked panel is closed, close all others first, then open this one
      this.clearToggles();
      content.style.display = "block";
      button.ariaExpanded = true;
    }
  }

  clearToggles() {
    this.elements.forEach((element) => {
      element.nextElementSibling.style.display = "none";
      element.ariaExpanded = false;
    });
  }
}

//capture all tabpanel elements
//store panel id in id
//create toggle function to toggle open adjacent sibling content
// set sibling element display to opposite of current display block or none
// set current button aria attribute to opposite of current value
//ensure when panel is toggled open all sibling panels are closed
