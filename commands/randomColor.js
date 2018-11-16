exports.randomColor = function () {
    var hex = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += hex[Math.floor(Math.random() * 16)];
    }
    console.log("Embed color is: " + color);
    return color;
};

exports.colorUrl = function () {
  var hex2 = '0123456789ABCDEF';
  var color2 = '';
  for (var i = 0; i < 6; i++) {
    color2 += hex2[Math.floor(Math.random() * 16)];
  }
  console.log("Random color is: " + color2);
  return color2;
};
