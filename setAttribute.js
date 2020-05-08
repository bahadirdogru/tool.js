const setAttribute = (selector, eventname, eventvalue) => {
    // get all elements that match our selector
    var elements = document.querySelectorAll(selector);
  
    // remove class from all chosen elements
    for (var i = 0; i < elements.length; i++) {
        elements[i].setAttribute(eventname,eventvalue);
    }
  }

  module.exports = {
    setAttribute
  };