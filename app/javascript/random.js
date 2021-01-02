function getImage(){
  var stoping = document.getElementById("stop");
  stoping.addEventListener("click", function(){
    img = new Array();
    img[0] = 'img1.png';
    img[1] = 'img2.png';
    img[2] = 'img3.png';
    img[3] = 'img4.png';
    img[4] = 'img5.png';
    img[5] = 'img6.png';
    img[6] = 'img7.png';

    var did = document.getElementById("did");
    did.innerHTML = "";

  var obj = document.getElementById("ran");
  var a = Math.floor(Math.random() * img.length); 
  obj.src = `assets/${img[a]}`;
  var exp = document.getElementById("explain");
  exp.innerHTML=””
})
}
window.addEventListener("load", getImage);