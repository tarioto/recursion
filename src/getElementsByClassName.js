// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

var getElementsByClassName = function(className) {
  var resultArray = [];
  //start of the HTML tree
  var site = document.body;

  function pushMatches(className, site) {
    //cheack if current node contains className
    if (site.classList.contains(className)) {
      //if true push to results array
      resultArray.push(site);
    }

    var siteChildren = site.children;
    //iterate over children of current node
    for (var i = 0; i < siteChildren.length; i += 1) {
      //recursivly call pushMatches function over each child of current node
      pushMatches(className, siteChildren[i]);
    }
  }
  //call recursive function
  pushMatches(className, site);

  return resultArray;
};
