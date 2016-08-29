// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  var resultArray = [];
  var site = document.body;

  function pushMatches(className, site) {

    if (site.classList.contains(className)) {
      resultArray.push(site);
    }

    var siteChildren = site.children;

    for (var i = 0; i < siteChildren.length; i += 1) {
      pushMatches(className, siteChildren[i]);
    }
  }

  pushMatches(className, site);

  return resultArray;
};
