function menuopen() {
  if(document.querySelector(".allview_open")==null) {
    document.getElementById("allview").className = "allview_open";
    document.getElementById("open").style.left = "100%";
  } else if(document.querySelector(".allview_open")!=null) {
    document.getElementById("allview").className = "";
    document.getElementById("open").style.left = "10000%";
  } else {
    document.getElementById("allview").className = "allview_open";
  }
}
