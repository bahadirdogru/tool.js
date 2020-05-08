const hasClass = ( element, className ) => {
    return new RegExp('(\\s|^)' + className + '(\\s|$)').test(element.className);
}

module.exports = {
    hasClass
  };