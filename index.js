module.exports = function(date, includeGoodNight=false) {
  const hour = date.getHours();
  if (hour >= 5 && hour < 12) {
    return "Good morning";
  } else if (hour >= 12 && hour < 17) {
    return "Good afternoon";
  } else if ((hour >= 17 && hour <= 23) || hour < 5 && includeGoodNight == false) {
    return "Good evening";
  } else if ((hour >= 17 && hour <= 20)) {
    return "Good evening";
  } else if ((hour >= 21 && hour <= 23) || hour < 5 && includeGoodNight) {
    return "Good night";
  }
};

