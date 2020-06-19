var title, text;
function File(fileName, content) {
    var blob = new Blob([content], { type: 'text/plain' });

    objURL = window.URL.createObjectURL(blob);

    // 이전에 생성된 메모리 해제
    if (window.__Xr_objURL_forCreatingFile__) {
        window.URL.revokeObjectURL(window.__Xr_objURL_forCreatingFile__);
    }
    window.__Xr_objURL_forCreatingFile__ = objURL;

    var a = document.createElement('a');

    a.download = fileName;
    a.href = objURL;
    a.click();
}
function newfile() {
  title = document.getElementById("title").value;
  text = document.getElementById("in").value;
  if(title==null||text==null||title==""||text==""){
    alert("내용을 적어주세요");
    return;
  }
  File(title, text);
}
function sleep(delay) {
   var start = new Date().getTime();
   while (new Date().getTime() < start + delay);
}
function getTime() {
  var timer;
  var time = new Date;
  document.write("<p id=\"time\"현재 시간: "+time.getHours()+"시 "+time.getMinutes()+"분 "+time.getSeconds()+"초</p>");
  setInterval(function() {
    time = new Date;
    timer = "현재 시간: "+time.getHours()+"시 "+time.getMinutes()+"분 "+time.getSeconds()+"초";
    document.getElementById("time").innerHTML = timer;
}, 300);
}
function consolefun() {
  var con = document.getElementById("console").innerHTML;
  var ev = eval(con);
  document.getElementById("out").innerHTML = document.getElementById("out").innerHTML+"<"+ev
}
/*function number1() {
  //try{
  var num1 = document.getElementById("i1").value;
  var num2 = document.getElementById("i2").value;
  var num3 = parseInt(num1);
  var num4 = parseInt(num2);
  var a, b, c;
  for (var i = 0; i < (num2-num1); i++) {
    a[i] = i*3;
    b[i] = i*5;
    c[i] = i;
    if(c[i]==a[i]||c[i]==b[i]){

    }
  }
  document.getElementById("i3").innerHTML = timer;
/*} catch(e){
  document.getElementById("i3").innerHTML = "오류 발생! 값을 다시 확인해주세요!";
}
}*/
