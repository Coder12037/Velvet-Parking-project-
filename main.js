canvas= document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

gcw = 75 ;
gch = 100;


gcx= 5;
gcy= 225;

function add() {
	bgimg = new Image();
    bgimg.onload = uploadBackground;
    bgimg.src="parkingLot.jpg";
	gcimg = new Image();
    gcimg.onload = uploadgreencar;
    gcimg.src = "car2.png";
}

function uploadBackground() {
	ctx.drawImage(bgimg, 0, 0, canvas.width, canvas.height);
}

function uploadgreencar() {
	 ctx.drawImage (gcimg, gcx, gcy, 75, 100);
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up()
{
	if (gcy >= 0)
    {
        gcy = gcy - 10; 
        uploadBackground();
        uploadgreencar();
    }
}

function down()
{
	if (gcy <= 350)
    {
        gcy = gcy + 10; 
        uploadBackground();
        uploadgreencar();
    }
}

function left()
{
	if (gcx >= 0)
    {
        gcx = gcx - 10; 
        uploadBackground();
        uploadgreencar();
    }
}

function right()
{
	if (gcx <= 750)
    {
        gcx = gcx + 10; 
        uploadBackground();
        uploadgreencar();
    }
}
