function answer(){
  var sending = document.getElementById("send");
  sending.addEventListener("click", function(){
    var image = document.getElementById("ran");
    var ans = document.getElementById("name-form").value;
    var src = image.getAttribute('src');
    var did = document.getElementById("did");
    if(src == `assets/img1.png`){
      image.setAttribute(`name`,`lebron james`);
    }else if (src == `assets/img2.png`){
      image.setAttribute(`name`,`stephen curry`);
    }else if (src == `assets/img3.png`){
      image.setAttribute(`name`,`kobe bryant`);
    }else if (src ==`assets/img4.png`){
      image.setAttribute(`name`,`kirk hinrich`);
    }else if (src == `assets/img5.png`){
      image.setAttribute(`name`,`giannis antetokounmpo`);
    }else if (src == `assets/img6.png`){
      image.setAttribute(`name`,`rui hachimura`);
    }else if (src == `assets/img7.png`){
      image.setAttribute(`name`,`yuta watanabe`);
    }

    var name = image.getAttribute('name');
    if(name == ans){
      did.innerHTML = "正解！　答え：" + `${name}`;
    }else if(name != ans){
      did.innerHTML = "不正解！　答え：" + `${name}`;
    }
  })
}

window.addEventListener("load", answer);