
  const isValidJSON = str => {
    try {
      JSON.parse(str);
      return true;
    } catch (e) {
      return e;
    }
  };

  module.exports = {
    isValidJSON
  };