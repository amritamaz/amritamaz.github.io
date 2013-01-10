// sinuosoid animation
// adapted from paperjs tutorial

var amount = 20;
var height = 30;

//create and style new path
var path1 = new Path();
var path2 = new Path();
var path3 = new Path();
var path4 = new Path();

path1.style = {
  strokeColor: new RgbColor(.8,.8,.8),
  strokeWidth: 2,
  strokeCap: 'square'
};

path2.style = {
	strokeColor: new RgbColor(.5,.5,.5),
	strokeWidth: 2,
	strokeCap: 'square'
};

path3.style = {
	strokeColor: new RgbColor(.2,.2,.2),
	strokeWidth: 2,
	strokeCap: 'square'
};

// 66cc99 = RgbColor(.4,.8,.6),

// add segment points to path
for (var i = 0; i <= amount; i++) {
  path1.add(new Point(i / amount, 1) * view.size);
  path2.add(new Point(i/amount, 1) * view.size);
  path3.add(new Point(i/amount, 1) * view.size);

}

function onFrame(event) {
  for (var i = 0; i <= amount; i++) {
  	var t = event.time;
    var seg1 = path1.segments[i];
    var seg2 = path2.segments[i];
     var seg3 = path3.segments[i];

     var sin1 = Math.sin(5*t/2 + 3*i/2);
     var sin2 = Math.sin(5*t/3 + 3*i/2);
     var sin3 = Math.sin(4*t/5 + 3*i/2);

    seg1.point.y = sin1 * height + 100;
    seg2.point.y = sin2 * height + 100;
    seg3.point.y = sin3 * height + 100;
    
    path1.smooth();
    path2.smooth();
    path3.smooth();
  }
        
}

var click = 0;

function onMouseDown(event) {

	if (click%4 == 0){
		path1.strokeColor = new RgbColor(.4,.8,.6);
		path2.strokeColor = new RgbColor(.5,.5,.5);
		path3.strokeColor = new RgbColor(.2,.2,.2);
	}
	
	else if (click%4 == 1){
		path1.strokeColor = new RgbColor(.8,.8,.8);
		path2.strokeColor = new RgbColor(.4,.8,.6);
		path3.strokeColor = new RgbColor(.2,.2,.2);
	}
	else if (click%4 == 2){
		path1.strokeColor = new RgbColor(.8,.8,.8);
		path2.strokeColor = new RgbColor(.5,.5,.5);
		path3.strokeColor = new RgbColor(.4,.8,.6);
	}
	else {
		path1.strokeColor = new RgbColor(.8,.8,.8);
		path2.strokeColor = new RgbColor(.5,.5,.5);
		path3.strokeColor = new RgbColor(.2,.2,.2);
	}

	click += 1;

}