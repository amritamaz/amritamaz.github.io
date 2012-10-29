// sinuosoid animation
// adapted from paperjs tutorial

var amount = 20;
var height = 30;

//create and style new path
var path = new Path();
path.style = {
  strokeColor: new GrayColor(0.7),
  strokeWidth: 2,
  strokeCap: 'square'
};

// add segment points to path
for (var i = 0; i <= amount; i++) {
  path.add(new Point(i / amount, 1) * view.size);
}

function onFrame(event) {
  for (var i = 0; i <= amount; i++) {
    var segment = path.segments[i];

    var sinuso = Math.sin(event.time * 3 + i);

    segment.point.y = sinuso * height + 100;

    path.smooth();
  }
}
