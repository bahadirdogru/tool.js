const isOnline = () => {
    if (navigator.onLine){
      return true;
    }else if (!navigator.onLine){
    return false;
    }
}

module.exports = {
    isOnline
  };