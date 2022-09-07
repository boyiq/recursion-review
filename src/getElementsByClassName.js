// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, matrix
) {
  //debugger;
  var result = [];
  var matrix = matrix || document.body;
  //get child nodes of matrix
  var childNodes = matrix.childNodes;

  var length = matrix.childNodes.length;

  //iterate over each child node in childnodes
  var classList = matrix.classList;
  if (classList !== undefined && classList.contains(className)) {
    result.push(matrix);
  }
  for (var i = 0; i < length; i++) {

    result = result.concat(getElementsByClassName(className, childNodes[i]));
  }
  return result;
};

