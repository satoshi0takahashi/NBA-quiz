function answer(){
  var sending = document.getElementById("send");
  sending.addEventListener("click", function(){
    var image = document.getElementById("ran");
    var ans = document.getElementById("name-form").value;
    var src = image.getAttribute('src');
    var did = document.getElementById("did");
    var exp = document.getElementById("explain");
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

    if (src == `assets/img1.png`){
      exp.innerHTML= "歴代最高峰の選手。３つの違うチームを引っ張りながら優勝を経験している。n歴代の記録を数々更新している。恵まれた体格からインサイドにドライブして、ファウルをもらいながらAnd 1を決める。";
    }else if (src == `assets/img2.png`){
      exp.innerHTML= "歴代最高峰のシューター。GSWで時代を築いた。あのMicheal Jordanを超える７３勝９敗というシーズン勝利数を記録した。n３pラインの遥か後ろからシュートを決める。新しい時代を確信させた選手。";
    }else if (src == `assets/img3.png`){
      exp.innerHTML= "LAL一筋で優勝経験５回を経験したSG。極端に負けず嫌いなことで有名な選手であり、「マンバメンタリティ」と呼ばれている。n４２歳の若さで亡くなってしまったが、１試合８１得点の記録は現代バスケにおいては未だ更新されていない。";
    }else if (src == `assets/img4.png`){
      exp.innerHTML= "CHIで長年いぶし銀な活躍をしていた選手。堅実なプレイメイクで定評があった。スーパースターではないが、チームを安定感をもたらしていた。";
    }else if (src == `assets/img5.png`){
      exp.innerHTML= "２年連続シーズンMVPを受賞している若きスーパースター。ギリシャ出身とかけて「Greek Freak」と呼ばれる。n身長、手足が極端に長く、コートを凄いスピードで駆け抜ける。最近は苦手だったアウトサイドシュートも年々改善されて、完璧な選手にどんどん近づいている。";
    }else if (src == `assets/img6.png`){
      exp.innerHTML= "日本最高の選手。WASから１巡目８位指名を受けて晴れてNBA入り。安定したミドルレンジシュートを武器にインサイドを主戦場としている。n個人的にはDEFを学んでよりブレイクして欲しい。";
    }else if (src == `assets/img7.png`){
      exp.innerHTML= "ジョージワシントン大学でエースとして活躍後、Twoーway契約を勝ち取ってNBAで活躍するチャンスを伺っている。ウイングスパンが長く、３＆Dでスマートなプレイを得意としている。n今後の活躍に期待。";
  }
  })
}

window.addEventListener("load", answer);