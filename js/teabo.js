function sleep(gap){ /* gap is in millisecs */
  var then,now;
  then=new Date().getTime();
  now=then;
  while((now-then)<gap){
    now=new Date().getTime();  // 현재시간을 읽어 함수를 불러들인 시간과의 차를 이용하여 처리
}
}
function teabo1() {
  document.getElementById("teabo").innerHTML = "@=(^o^)=@";
  setTimeout(function() {teabo2();}, 400);
}
function teabo2() {
  document.getElementById("teabo").innerHTML = "@( ^o^)==@";
  setTimeout(function() {teabo3();}, 400);
}
function teabo3() {
  document.getElementById("teabo").innerHTML = "@=(^o^)=@";
  setTimeout(function() {teabo4();}, 400);
}
function teabo4() {
  document.getElementById("teabo").innerHTML = "@==(^o^ )@";
  setTimeout(function() {teabo1();}, 400);
}
