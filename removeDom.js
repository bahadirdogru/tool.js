const removeDom = (e) => {
  if (e) {
    e.parentNode.removeChild(e);
  }
}

  module.exports = {
    removeDom
  };