module.exports = function(date) {
  const hour = date.getHours();
  if (hour >= 5 && hour < 12) {
    return "Good morning";
  } else if (hour >= 12 && hour < 17) {
    return "Good afternoon";
  } else if ((hour >= 17 && hour <= 23) || hour < 5) {
    return "Good evening";
  }
};
