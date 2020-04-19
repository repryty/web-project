function sleep(gap){ /* gap is in millisecs */
  var then,now;
  then=new Date().getTime();
  now=then;
  while((now-then)<gap){
    now=new Date().getTime();  // 현재시간을 읽어 함수를 불러들인 시간과의 차를 이용하여 처리
}
}
var speed = 800;
function ok() {
  speed = parseInt(document.getElementById("speed").value);
}
function teabo1() {
  document.getElementById("teabo").innerHTML = "@=(^o^)=@";
  setTimeout(function() {teabo2();}, speed);
}
function teabo2() {
  document.getElementById("teabo").innerHTML = "@( ^o^)==@";
  setTimeout(function() {teabo3();}, speed);
}
function teabo3() {
  document.getElementById("teabo").innerHTML = "@=(^o^)=@";
  setTimeout(function() {teabo4();}, speed);
}
function teabo4() {
  document.getElementById("teabo").innerHTML = "@==(^o^ )@";
  setTimeout(function() {teabo1();}, speed);
}
