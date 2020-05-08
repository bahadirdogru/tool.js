const removeClass = (selector, myClass) => {

    // get all elements that match our selector
    var elements = document.querySelectorAll(selector);
  
    // remove class from all chosen elements
    for (var i = 0; i < elements.length; i++) {
        elements[i].classList.remove(myClass);
    }
  }

  module.exports = {
    removeClass
  };