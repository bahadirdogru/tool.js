const addClass = (selector, myClass) => {

    // get all elements that match our selector
    var elements = document.querySelectorAll(selector);
  
    // add class to all chosen elements
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.add(myClass);
    }
  }

  module.exports = {
    addClass
  };