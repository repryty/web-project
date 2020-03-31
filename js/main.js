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
    timer = "이번에 접속한 시간: "+time.getHours()+"시 "+time.getMinutes()+"분 "+time.getSeconds()+"초";
    document.getElementById("time").innerHTML = timer;
}, 300);
}
