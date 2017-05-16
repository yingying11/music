/**
 * Created by Administrator on 2017/5/15.
 */
function draw(id){
    var canvas=document.getElementById(id);
    var context=canvas.getContext('2d');
    context.fillStyle="rgb(139,139,139)";
    context.fillRect(0,0,450,500);
    context.beginPath();
    context.arc(220,150,100,0,Math.PI*2,true );
    context.closePath();
    context.fillStyle="rgb(0,0,0)";
    context.fill();
    context.lineWidth=5;
    context.strokeStyle="rgb(106,106,106)";
    context.stroke();

    context.beginPath();
    context.arc(220,150,20,0,Math.PI*2,true );
    context.closePath();
    context.lineWidth=20;
    context.strokeStyle="rgb(201,201,201)";
    context.stroke();

    context.fillStyle="rgb(249,249,249)";
    context.fillText('喜欢你',200,290);
    context.fillText('邓紫棋/喜欢你',180,310);

    context.fillStyle="rgb(105,105,105)";
    context.fillRect(0,430,450,500);

    context.fillStyle="rgb(255,156,5)";
    context.fillRect(0,428,200,3);

    context.fillStyle="green";
    context.fillText('01:36',4,420);
    context.fillText('03:44',410,420);

    context.fillStyle="rgb(0,0,0)";
    context.fillText('mode',20,460);
    context.fillText('prev',100,460);
    context.fillText('play',180,460);
    context.fillText('next',260,460);
    context.fillText('volumn',380,460);




}