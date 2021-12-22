
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

let list = document.querySelector("#list");   
list.addEventListener(
  "click",
  function (ustunuciz) {
    if (ustunuciz.target.tagName === "LI") {
      ustunuciz.target.classList.toggle("checked");
    }
  },
  false
);


let listDOM = document.querySelector('#list')

function newElement() {
    let liDOM = document.createElement('li');
    let gorev = document.getElementById("task").value;
    let textnode = document.createTextNode(gorev);
    liDOM.appendChild(textnode)
    


    if (gorev ==="" ||  gorev.replace(/^\s+|\s+$/g, "").length == 0) {
        $(".error").toast("show"); 
    }
     else {
        $(".success").toast("show");
        document.getElementById("list").appendChild(liDOM);
        document.getElementById("task").value = "";     
    } 
    

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  };
}  

var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  liDOM.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }

}

  