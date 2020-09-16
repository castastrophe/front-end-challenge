// Flip an element on hover or on click
let flip = {
  attr: {
    trigger: "data-test-flip-on",
    visible: "data-test-visible"
  },
  action: ($el) => {}
};

// For all flip-enabled elements, attach an on click or on hover event
document.querySelectorAll(`[${flip.attr.trigger}]`).forEach((item) => {
  // Add your trigger event here
  console.log(item);
});
