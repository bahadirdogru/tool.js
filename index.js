const httpGet = (url, callback, err = console.error) => {
    const request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = () => callback(request.responseText);
    request.onerror = () => err(request);
    request.send();
  };
  
  const isValidJSON = str => {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return e;
    }
  };

  const isObject = obj => obj === Object(obj);

  const isonline = () => {
      if (navigator.onLine){
        return true;
      }else if (!navigator.onLine){
      return false;
      }
  }

const hasClass = ( element, className ) => {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(element.className);
}

const addClass = (selector, myClass) => {

  // get all elements that match our selector
  var elements = document.querySelectorAll(selector);

  // add class to all chosen elements
  for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add(myClass);
  }
}

const removeClass = (selector, myClass) => {

  // get all elements that match our selector
  var elements = document.querySelectorAll(selector);

  // remove class from all chosen elements
  for (var i = 0; i < elements.length; i++) {
      elements[i].classList.remove(myClass);
  }
}

const setAttribute = (selector, eventname, eventvalue) => {
  // get all elements that match our selector
  var elements = document.querySelectorAll(selector);

  // remove class from all chosen elements
  for (var i = 0; i < elements.length; i++) {
      elements[i].setAttribute(eventname,eventvalue);
  }
}

const removeDom = (e) => {
  if (e) {
    e.parentNode.removeChild(e);
  }
}

  module.exports = {
    removeDom,
    setAttribute,
    removeClass,
    addClass,
    hasClass,
    isonline,
    isObject,
    isValidJSON,
    httpGet
  };