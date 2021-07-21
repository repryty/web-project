function draw(){
    var c1 = document.getElementById("c1");
    if (c1.getContext){
        var ctx = c1.getContext('2d');

        ctx.fillStyle = "rgb(200,0,0)";
        ctx.fillRect (10, 10, 50, 50);
        
        ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
        ctx.fillRect (30, 30, 50, 50);
}
}