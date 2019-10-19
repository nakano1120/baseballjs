var kai=1
var siai=1
var out=0
var b1=0
var b2=0
var b3=0
var start=0
var kai=1
var siai=1
var out=0
var b1=0
var b2=0
var b3=0
var h=0
var p1=0;
var p2=0;
var bat1=0
var bat2=0
var ou="表"
var team1="Åチーム";
var team2="Bチーム";
var sen1=["A","B","C","D","E","F","G","H","I","J","N","O","P"];
var sen2=["A","B","C","D","E","F","G","H","I","J","N","O","P"];
var re1=["J","K","L","M",""]
var re2=["J","K","L","M",""]
var syu1=["二","遊","一","中","三","左","右","指","捕","","一","二","三"];
var syu2=["二","遊","一","中","三","左","右","指","捕","","一","二","三"];
var pk1=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var pk2=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var hyo9=""
var da1=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var da2=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var an1=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var an2=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var ni1=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var ni2=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var hon1=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var hon2=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var dat1=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var dat2=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var toukai1=[0,0,0,0]
var toukai2=[0,0,0,0]
var sansin1=[0,0,0,0]
var sansin2=[0,0,0,0]
var siten1=[0,0,0,0]
var siten2=[0,0,0,0]
var miko1=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
var miko2=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
var pasu1=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
var pasu2=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
var soukyu1=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
var soukyu2=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
var ko1=[4,4,4,4];
var su1=[4,4,4,4];
var kyu1=[4,4,4,4];
var ko2=[4,4,4,4];
var su2=[4,4,4,4];
var kyu2=[4,4,4,4];
var st1=40
var st2=40

var iro=["<font color='#666666'>","<font color='#666666'>","<font color='#0000ff'>","<font color='#0000ff'>","<font color='#00ff00'>","<font color='#00ff00'>","<font color='#ff6600'>","<font color='#ff6600'>","<font color='#ff0000'>","<font color='#ff0000'>"]
var kouso=0
var rere1=0
var rere2=0
var hon=""
var dd=1
var dd2=1
var ire1=[0,0,0]
var ire2=[0,0,0]
function senpi(){
      var arr = [
        {val:"01", txt:"J"},
        {val:"02", txt:"K"},
        {val:"03", txt:"L"}
      ];
　switch(document.abc.a1.selectedIndex){
    case 1:
      var arr = [
        {val:"01", txt:"千賀",},
        {val:"02", txt:"東浜"},
        {val:"03", txt:"武田"},
        {val:"04", txt:"バンデンハーク"},
        {val:"05", txt:"石川"}
        
      ];
      break;
    case 2:
      var arr = [
        {val:"01", txt:"菊池"},
        {val:"02", txt:"ウルフ"},
        {val:"03", txt:"榎田"},
        {val:"04", txt:"カスティーヨ"},
        {val:"05", txt:"十亀"}
        
      ];
      break;
    case 3:
      var arr = [
        {val:"01", txt:"西"},
        {val:"02", txt:"山岡"},
        {val:"03", txt:"田嶋"},
        {val:"04", txt:"ディクソン"},
        {val:"05", txt:"アルバース"}
        
      ];
      break;
    case 4:
      var arr = [
        {val:"01", txt:"岸"},
        {val:"02", txt:"則本"},
        {val:"03", txt:"美馬"},
        {val:"04", txt:"藤平"}
        
      ];
      break;
    case 5:
      var arr = [
        {val:"01", txt:"有原"},
        {val:"02", txt:"マルティネス"},
        {val:"03", txt:"上沢"},
        {val:"04", txt:"高梨"},
        {val:"05", txt:"加藤"}
        
      ];
      break;
    case 6:
      var arr = [
        {val:"01", txt:"涌井"},
        {val:"02", txt:"石川"},
        {val:"03", txt:"ボルシンガー"},
        {val:"04", txt:"二木"},
        {val:"05", txt:"酒居"}
        
      ];
      break;
    case 7:
      var arr = [
        {val:"01", txt:"東"},
        {val:"02", txt:"今永"},
        {val:"03", txt:"濱口"},
        {val:"04", txt:"井納"},
        {val:"05", txt:"京山"},
        {val:"06", txt:"平良"}
        
      ];
      break;
    case 8:
      var arr = [
        {val:"01", txt:"ブキャナン"},
        {val:"02", txt:"カラシティー"},
        {val:"03", txt:"石川"},
        {val:"04", txt:"原"},
        {val:"05", txt:"館山"}
        
      ];
      break;
    case 9:
      var arr = [
        {val:"01", txt:"菅野"},
        {val:"02", txt:"田口"},
        {val:"03", txt:"メルセデス"},
        {val:"04", txt:"吉川光"},
        {val:"05", txt:"今村"}
        
      ];
      break;
    case 10:
      var arr = [
        {val:"01", txt:"メッセンジャー"},
        {val:"02", txt:"藤浪"},
        {val:"03", txt:"秋山"},
        {val:"04", txt:"能見"},
        {val:"05", txt:"岩貞"}
        
      ];
      break;
    case 11:
      var arr = [
        {val:"01", txt:"野村"},
        {val:"02", txt:"ジョンソン"},
        {val:"03", txt:"大瀬良"},
        {val:"04", txt:"薮田"},
        {val:"05", txt:"岡田"}
        
      ];
      break;
    case 12:
      var arr = [
        {val:"01", txt:"小笠原"},
        {val:"02", txt:"松坂"},
        {val:"03", txt:"吉見"},
        {val:"04", txt:"山井"},
        {val:"05", txt:"笠原"}
        
      ];
      break;
  }
  //連想配列をループ処理で値を取り出してセレクトボックスにセットする
  for(var i=0;i<arr.length;i++){
    let op = document.createElement("option");
    op.value = arr[i].val;  //value値
    op.text = arr[i].txt;   //テキスト値
    document.getElementById("sepa1").appendChild(op);
  }
}
function senpii(){
      var arr = [
        {val:"01", txt:"J"},
        {val:"02", txt:"K"},
        {val:"03", txt:"L"}
      ];
　switch(document.abc.a2.selectedIndex){
    case 1:
      var arr = [
        {val:"01", txt:"千賀"},
        {val:"02", txt:"東浜"},
        {val:"03", txt:"武田"},
        {val:"04", txt:"バンデンハーク"},
        {val:"05", txt:"石川"}
        
      ];
      break;
    case 2:
      var arr = [
        {val:"01", txt:"菊池"},
        {val:"02", txt:"ウルフ"},
        {val:"03", txt:"榎田"},
        {val:"03", txt:"カスティーヨ"},
        {val:"03", txt:"十亀"}
        
      ];
      break;
    case 3:
      var arr = [
        {val:"01", txt:"西"},
        {val:"02", txt:"山岡"},
        {val:"03", txt:"田嶋"},
        {val:"04", txt:"ディクソン"},
        {val:"05", txt:"アルバース"}
        
      ];
      break;
    case 4:
      var arr = [
        {val:"01", txt:"岸"},
        {val:"02", txt:"則本"},
        {val:"03", txt:"美馬"},
        {val:"04", txt:"藤平"}
        
      ];
      break;
    case 5:
      var arr = [
        {val:"01", txt:"有原"},
        {val:"02", txt:"マルティネス"},
        {val:"03", txt:"上沢"},
        {val:"04", txt:"高梨"},
        {val:"05", txt:"加藤"}
        
      ];
      break;
    case 6:
      var arr = [
        {val:"01", txt:"涌井"},
        {val:"02", txt:"石川"},
        {val:"03", txt:"ボルシンガー"},
        {val:"04", txt:"二木"},
        {val:"05", txt:"酒居"}
        
      ];
      break;
    case 7:
      var arr = [
        {val:"01", txt:"東"},
        {val:"02", txt:"今永"},
        {val:"03", txt:"濱口"},
        {val:"04", txt:"井納"},
        {val:"05", txt:"京山"},
        {val:"06", txt:"平良"}
        
      ];
      break;
    case 8:
      var arr = [
        {val:"01", txt:"ブキャナン"},
        {val:"02", txt:"カラシティー"},
        {val:"03", txt:"石川"},
        {val:"04", txt:"原"},
        {val:"05", txt:"館山"}
        
      ];
      break;
    case 9:
      var arr = [
        {val:"01", txt:"菅野"},
        {val:"02", txt:"田口"},
        {val:"03", txt:"メルセデス"},
        {val:"04", txt:"吉川光"},
        {val:"05", txt:"今村"}
        
      ];
      break;
    case 10:
      var arr = [
        {val:"01", txt:"メッセンジャー"},
        {val:"02", txt:"藤浪"},
        {val:"03", txt:"秋山"},
        {val:"04", txt:"能見"},
        {val:"05", txt:"岩貞"}
        
      ];
      break;
    case 11:
      var arr = [
        {val:"01", txt:"野村"},
        {val:"02", txt:"ジョンソン"},
        {val:"03", txt:"大瀬良"},
        {val:"04", txt:"薮田"},
        {val:"05", txt:"岡田"}
        
      ];
      break;
    case 12:
      var arr = [
        {val:"01", txt:"小笠原"},
        {val:"02", txt:"松坂"},
        {val:"03", txt:"吉見"},
        {val:"04", txt:"山井"},
        {val:"05", txt:"笠原"}
        
      ];
      break;
  }
  //連想配列をループ処理で値を取り出してセレクトボックスにセットする
  for(var i=0;i<arr.length;i++){
    let opt = document.createElement("option");
    opt.value = arr[i].val;  //value値
    opt.text = arr[i].txt;   //テキスト値
    document.getElementById("sepa2").appendChild(opt);
  }
}
function paseri(){
  senpi();
  senpii();
  document.abc.b1.selectedIndex=1
  document.abc.b2.selectedIndex=2
}
function nama1(){
  var kou=prompt("交代する打順/名前は？(例:5-うし 意味:5番をうしに")
  var pon=kou.split("-")
  miko1[pon[0]-1]=parseInt(pon[2])
  pasu1[pon[0]-1]=parseInt(pon[3])
  soukyu1[pon[0]-1]=parseInt(pon[4])
  pon[0]=parseInt(pon[0])
  sen1[pon[0]-1]=pon[1]
  var la=1
  while(la<11){
    var aa="ase"+la;
    var bb="bse"+la;
    document.getElementById(aa).innerHTML = (la+" "+syu1[la-1]+" "+sen1[la-1]);
    document.getElementById(bb).innerHTML = (la+" "+syu2[la-1]+" "+sen2[la-1]);
    document.getElementById(aa).style.color = '#ffa000'
    document.getElementById(bb).style.color = '#ffa000'
    if(la==10){
        document.getElementById("ase10").innerHTML = ("P "+re1[rere1]);
        document.getElementById("bse10").innerHTML = ("P "+re2[rere2]);
    }
    la++;
  }
  document.getElementById("ase"+parseInt(bat1+1)).style.color = '#ff0000'
  document.getElementById("bse"+parseInt(bat2+1)).style.color = '#ff0000'
}
function syubi1(){
  var kou=prompt("守備交代する打順は？(例:5-3 意味:5番と3番)")
  var pon=kou.split("-")
  var mati=syu1[pon[0]-1]
  syu1[pon[0]-1]=syu1[pon[1]-1]
  syu1[pon[1]-1]=mati
  var la=1
  while(la<11){
    var aa="ase"+la;
    var bb="bse"+la;
    document.getElementById(aa).innerHTML = (la+" "+syu1[la-1]+" "+sen1[la-1]);
    document.getElementById(bb).innerHTML = (la+" "+syu2[la-1]+" "+sen2[la-1]);
    document.getElementById(aa).style.color = '#ffa000'
    document.getElementById(bb).style.color = '#ffa000'
    if(la==10){
        document.getElementById("ase10").innerHTML = ("P "+re1[rere1]);
        document.getElementById("bse10").innerHTML = ("P "+re2[rere2]);
    }
    la++;
  }
  document.getElementById("ase"+parseInt(bat1+1)).style.color = '#ff0000'
  document.getElementById("bse"+parseInt(bat2+1)).style.color = '#ff0000'
}
function dajun1(){
  var kou=prompt("打順交代する打順は？(例:5-3 意味:5番と3番)")
  var pon=kou.split("-")
  var mati=sen1[pon[0]-1]
  sen1[pon[0]-1]=sen1[pon[1]-1]
  sen1[pon[1]-1]=mati
  var mati=syu1[pon[0]-1]
  syu1[pon[0]-1]=syu1[pon[1]-1]
  syu1[pon[1]-1]=mati
  var la=1
  while(la<11){
    var aa="ase"+la;
    var bb="bse"+la;
    document.getElementById(aa).innerHTML = (la+" "+syu1[la-1]+" "+sen1[la-1]);
    document.getElementById(bb).innerHTML = (la+" "+syu2[la-1]+" "+sen2[la-1]);
    document.getElementById(aa).style.color = '#ffa000'
    document.getElementById(bb).style.color = '#ffa000'
    if(la==10){
        document.getElementById("ase10").innerHTML = ("P "+re1[rere1]);
        document.getElementById("bse10").innerHTML = ("P "+re2[rere2]);
    }
    la++;
  }
  document.getElementById("ase"+parseInt(bat1+1)).style.color = '#ff0000'
  document.getElementById("bse"+parseInt(bat2+1)).style.color = '#ff0000'
}
function nama2(){
  var kou=prompt("交代する打順/名前は？(例:5-うし　意味:5番をうしに)")
  var pon=kou.split("-")
  miko2[pon[0]-1]=parseInt(pon[2])
  pasu2[pon[0]-1]=parseInt(pon[3])
  soukyu2[pon[0]-1]=parseInt(pon[4])
  pon[0]=parseInt(pon[0])
  sen2[pon[0]-1]=pon[1]
  var la=1
  while(la<11){
    var aa="ase"+la;
    var bb="bse"+la;
    document.getElementById(aa).innerHTML = (la+" "+syu1[la-1]+" "+sen1[la-1]);
    document.getElementById(bb).innerHTML = (la+" "+syu2[la-1]+" "+sen2[la-1]);
    document.getElementById(aa).style.color = '#ffa000'
    document.getElementById(bb).style.color = '#ffa000'
    if(la==10){
        document.getElementById("ase10").innerHTML = ("P "+re1[rere1]);
        document.getElementById("bse10").innerHTML = ("P "+re2[rere2]);
    }
    la++;
  }
  document.getElementById("ase"+parseInt(bat1+1)).style.color = '#ff0000'
  document.getElementById("bse"+parseInt(bat2+1)).style.color = '#ff0000'
}
function syubi2(){
  var kou=prompt("守備交代する打順は？(例:5-3 意味:5番と3番)")
  var pon=kou.split("-")
  var mati=syu2[pon[0]-1]
  syu2[pon[0]-1]=syu2[pon[1]-1]
  syu2[pon[1]-1]=mati
  var la=1
  while(la<11){
    var aa="ase"+la;
    var bb="bse"+la;
    document.getElementById(aa).innerHTML = (la+" "+syu1[la-1]+" "+sen1[la-1]);
    document.getElementById(bb).innerHTML = (la+" "+syu2[la-1]+" "+sen2[la-1]);
    document.getElementById(aa).style.color = '#ffa000'
    document.getElementById(bb).style.color = '#ffa000'
    if(la==10){
        document.getElementById("ase10").innerHTML = ("P "+re1[rere1]);
        document.getElementById("bse10").innerHTML = ("P "+re2[rere2]);
    }
    la++;
  }
  document.getElementById("ase"+parseInt(bat1+1)).style.color = '#ff0000'
  document.getElementById("bse"+parseInt(bat2+1)).style.color = '#ff0000'
}
function dajun2(){
  var kou=prompt("打順交代する打順は？(例:5-3 意味:5番と3番)")
  var pon=kou.split("-")
  var mati=sen2[pon[0]-1]
  sen2[pon[0]-1]=sen2[pon[1]-1]
  sen2[pon[1]-1]=mati
  var mati=syu2[pon[0]-1]
  syu2[pon[0]-1]=syu2[pon[1]-1]
  syu2[pon[1]-1]=mati
  var la=1
  while(la<11){
    var aa="ase"+la;
    var bb="bse"+la;
    document.getElementById(aa).innerHTML = (la+" "+syu1[la-1]+" "+sen1[la-1]);
    document.getElementById(bb).innerHTML = (la+" "+syu2[la-1]+" "+sen2[la-1]);
    document.getElementById(aa).style.color = '#ffa000'
    document.getElementById(bb).style.color = '#ffa000'
    if(la==10){
        document.getElementById("ase10").innerHTML = ("P "+re1[rere1]);
        document.getElementById("bse10").innerHTML = ("P "+re2[rere2]);
    }
    la++;
  }
  document.getElementById("ase"+parseInt(bat1+1)).style.color = '#ff0000'
  document.getElementById("bse"+parseInt(bat2+1)).style.color = '#ff0000'
}
function playd(){
    kouso=1
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    kouso=0
}
function playdd(){
    kouso=1
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    plays();
    kouso=0
}
function ref(){
    if(ou =="表"){
      if(rere2==3){return}
      rere2+=1
      alert("おっとここでリリーフ・"+re2[rere2]+" です");
      st2=30
    }
    if(ou =="裏"){
      if(rere1==3){return}
      rere1+=1
      alert("おっとここでリリーフ・"+re1[rere1]+" です");
      st1=30
    }
    osir();
    var la=1;
    while(la<11){
      var aa="ase"+parseInt(la);
      var bb="bse"+parseInt(la);
      document.getElementById(aa).innerHTML = (la+" "+syu1[la-1]+" "+sen1[la-1]);
      document.getElementById(bb).innerHTML = (la+" "+syu2[la-1]+" "+sen2[la-1]);
      document.getElementById(aa).style.color = '#ffa000'
      document.getElementById(bb).style.color = '#ffa000'
      if(la==10){
        document.getElementById("ase10").innerHTML = ("P "+re1[rere1]);
        document.getElementById("bse10").innerHTML = ("P "+re2[rere2]);
      }
      la++;
    }
    document.getElementById("ase"+parseInt(bat1+1)).style.color = '#ff0000'
    document.getElementById("bse"+parseInt(bat2+1)).style.color = '#ff0000'
    r=""
}
function osir(){
  if (ou=="表"){
    document.getElementById("np").innerHTML=("P "+re2[rere2]+" 防御率"+Math.floor((siten2[rere2]*27)/(toukai2[rere2]*3)*100)/100+"</font> 奪三振"+sansin2[rere2]+"</font> ST"+st2)
    document.getElementById("nd").innerHTML=(""+bat1+" "+sen1[bat1]+" 打率."+Math.floor(an1[bat1]/da1[bat1]*1000)+"</font> 本"+hon1[bat1]+"</font> 打点"+dat1[bat1]+"</font>")
    document.getElementById("poi").innerHTML = (team1+" "+(parseInt(bat1)+1)+":"+sen1[bat1]+" <br>"+p1+"|VS "+p2+"<br> P:"+sen2[9]+" "+team2);
    document.getElementById("ki").innerHTML = (out+"アウト "+kai+"回"+ou);
  }
  if (ou=="裏"){
    document.getElementById("np").innerHTML=("P "+re1[rere1]+" 防御率"+Math.floor((siten1[rere1]*27)/(toukai1[rere1]*3)*100)/100+"</font> 奪三振"+sansin1[rere1]+"</font> ST"+st1)
    document.getElementById("nd").innerHTML=(""+bat2+" "+sen2[bat2]+" 打率."+Math.floor(an2[bat2]/da2[bat2]*1000)+"</font> 本"+hon2[bat2]+"</font> 打点"+dat2[bat2]+"</font>")
    document.getElementById("poi").innerHTML = (team1+" P:"+sen1[9]+" <br>"+p1+" VS|"+p2+" <br>"+(parseInt(bat2)+1)+":"+sen2[bat2]+" "+team2);
    document.getElementById("ki").innerHTML = (out+"アウト "+kai+"回"+ou);
  }
}
function modosu(db){
      var mat1=sen1[ire1[db-1]]
      var mat2=da1[ire1[db-1]]
      var mat3=an1[ire1[db-1]]
      var mat4=ni1[ire1[db-1]]
      var mat5=hon1[ire1[db-1]]
      var mat6=dat1[ire1[db-1]]
      var mat7=miko1[ire1[db-1]]
      var mat8=pasu1[ire1[db-1]]
      var mat9=soukyu1[ire1[db-1]]
      sen1[ire1[db-1]]=sen1[9+db]
      da1[ire1[db-1]]=da1[9+db]
      an1[ire1[db-1]]=an1[9+db]
      ni1[ire1[db-1]]=ni1[9+db]
      hon1[ire1[db-1]]=hon1[9+db]
      dat1[ire1[db-1]]=dat1[9+db]
      miko1[ire1[db-1]]=miko1[9+db]
      pasu1[ire1[db-1]]=pasu1[9+db]
      soukyu1[ire1[db-1]]=soukyu1[9+db]
      sen1[9+db]=mat1
      da1[9+db]=mat2
      an1[9+db]=mat3
      ni1[9+db]=mat4
      hon1[9+db]=mat5
      dat1[9+db]=mat6
      miko1[9+db]=mat7
      pasu1[9+db]=mat8
      soukyu1[9+db]=mat9
}
function modosu2(db){
      var mat1=sen2[ire2[db-1]]
      var mat2=da2[ire2[db-1]]
      var mat3=an2[ire2[db-1]]
      var mat4=ni2[ire2[db-1]]
      var mat5=hon2[ire2[db-1]]
      var mat6=dat2[ire2[db-1]]
      var mat7=miko2[ire2[db-1]]
      var mat8=pasu2[ire2[db-1]]
      var mat9=soukyu2[ire2[db-1]]
      sen2[ire2[db-1]]=sen2[9+db]
      da2[ire2[db-1]]=da2[9+db]
      an2[ire2[db-1]]=an2[9+db]
      ni2[ire2[db-1]]=ni2[9+db]
      hon2[ire2[db-1]]=hon2[9+db]
      dat2[ire2[db-1]]=dat2[9+db]
      miko2[ire2[db-1]]=miko2[9+db]
      pasu2[ire2[db-1]]=pasu2[9+db]
      soukyu2[ire2[db-1]]=soukyu2[9+db]
      sen2[9+db]=mat1
      da2[9+db]=mat2
      an2[9+db]=mat3
      ni2[9+db]=mat4
      hon2[9+db]=mat5
      dat2[9+db]=mat6
      miko2[9+db]=mat7
      pasu2[9+db]=mat8
      soukyu2[9+db]=mat9
}
function daida(){
    if(ou =="表"){
      if(dd==4){return}
      ire1[dd-1]=bat1
      var mat1=sen1[bat1]
      var mat2=da1[bat1]
      var mat3=an1[bat1]
      var mat4=ni1[bat1]
      var mat5=hon1[bat1]
      var mat6=dat1[bat1]
      var mat7=miko1[bat1]
      var mat8=pasu1[bat1]
      var mat9=soukyu1[bat1]
      sen1[bat1]=sen1[9+dd]
      da1[bat1]=da1[9+dd]
      an1[bat1]=an1[9+dd]
      ni1[bat1]=ni1[9+dd]
      hon1[bat1]=hon1[9+dd]
      dat1[bat1]=dat1[9+dd]
      miko1[bat1]=miko1[9+dd]
      pasu1[bat1]=pasu1[9+dd]
      soukyu1[bat1]=soukyu1[9+dd]
      sen1[9+dd]=mat1
      da1[9+dd]=mat2
      an1[9+dd]=mat3
      ni1[9+dd]=mat4
      hon1[9+dd]=mat5
      dat1[9+dd]=mat6
      miko1[9+dd]=mat7
      pasu1[9+dd]=mat8
      soukyu1[9+dd]=mat9
      alert("おっとここで代打・"+sen1[bat1]+" です");
      dd+=1
    }
    if(ou =="裏"){
      if(dd2==4){return}
      ire2[dd2-1]=bat2
      var mat1=sen2[bat2]
      var mat2=da2[bat2]
      var mat3=an2[bat2]
      var mat4=ni2[bat2]
      var mat5=hon2[bat2]
      var mat6=dat2[bat2]
      var mat7=miko2[bat2]
      var mat8=pasu2[bat2]
      var mat9=soukyu2[bat2]
      sen2[bat2]=sen2[9+dd2]
      da2[bat2]=da2[9+dd2]
      an2[bat2]=an2[9+dd2]
      ni2[bat2]=ni2[9+dd2]
      hon2[bat2]=hon2[9+dd2]
      dat2[bat2]=dat2[9+dd2]
      miko2[bat2]=miko2[9+dd2]
      pasu2[bat2]=pasu2[9+dd2]
      soukyu2[bat2]=soukyu2[9+dd2]
      sen2[9+dd2]=mat1
      da2[9+dd2]=mat2
      an2[9+dd2]=mat3
      ni2[9+dd2]=mat4
      hon2[9+dd2]=mat5
      dat2[9+dd2]=mat6
      miko2[9+dd2]=mat7
      pasu2[9+dd2]=mat8
      soukyu2[9+dd2]=mat9
      alert("おっとここで代打・"+sen2[bat2]+" です");
      dd2+=1
    }
    osir();
    var la=1;
    while(la<11){
      var aa="ase"+parseInt(la);
      var bb="bse"+parseInt(la);
      document.getElementById(aa).innerHTML = (la+" "+syu1[la-1]+" "+sen1[la-1]);
      document.getElementById(bb).innerHTML = (la+" "+syu2[la-1]+" "+sen2[la-1]);
      document.getElementById(aa).style.color = '#ffa000'
      document.getElementById(bb).style.color = '#ffa000'
      if(la==10){
        document.getElementById("ase10").innerHTML = ("P "+re1[rere1]);
        document.getElementById("bse10").innerHTML = ("P "+re2[rere2]);
      }
      la++;
    }
    document.getElementById("ase"+parseInt(bat1+1)).style.color = '#ff0000'
    document.getElementById("bse"+parseInt(bat2+1)).style.color = '#ff0000'
    r=""
}
function stai(){
  team1=document.abc.a1.options[document.abc.a1.selectedIndex].text;
  team2=document.abc.a2.options[document.abc.a2.selectedIndex].text;
  senpa1=document.abc.b1.options[document.abc.b1.selectedIndex].text;
  senpa2=document.abc.b2.options[document.abc.b2.selectedIndex].text;
  switch(document.abc.a1.selectedIndex){
    case 1:
      var v = Math.floor( Math.random() * 3 );
      var senpa=["ばんでんはーく","ひがしはま","せんが"]
      var kos=[7,5,3]
      var sus=[4,5,5]
      var kyus=[2,4,7]
      sen1=["今宮","本多","柳田","内川","グラシアル","中村","松田","上林","甲斐",senpa1,"ふくだ","ほんだ","あかし"];
      syu1=["遊","二","中","一","指","左","三","右","捕","","右","三","二"]
      re1=["","かじや","もいねろ","かやま",""];
      re1[0]=senpa1
      miko1=[2,4,4,4,4,4,4,4,4,4,4,4,4,4];
      pasu1=[3,4,4,4,4,4,4,4,4,4,4,4,4,4];
      soukyu1=[7,4,4,4,4,4,4,4,4,4,4,4,4,4];
      ko1=[kos[v],2,6,4];
      su1=[sus[v],6,3,3];
      kyu1=[kyus[v],4,4,5];
      break;
    case 2:
      var v = Math.floor( Math.random() * 3 );
      var senpa=["きくち","たわだ","とかめ"]
      var kos=[4,4,4]
      var sus=[4,4,4]
      var kyus=[4,4,4]
      sen1=["秋山","源田","浅村","山川","森","中村","外崎","炭谷","金子侑",senpa1,"めひあ","あいと","くりやま"];
      syu1=["中","遊","二","一","指","三","右","捕","左","","一","右","左"]
      re1=["","たけくま","こいし","ひらい",""];
      re1[0]=senpa1
      miko1=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      pasu1=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      soukyu1=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      ko1=[kos[v],4,4,4];
      su1=[sus[v],4,4,4];
      kyu1=[kyus[v],4,4,4];
      break;
    case 3:
      var v = Math.floor( Math.random() * 3 );
      var senpa=["あるばーす","たじま","よしだ"]
      var kos=[6,5,4]
      var sus=[3,5,7]
      var kyus=[4,4,2]
      sen1=["宗","山足","吉田正","ロメロ","小谷野","マレーロ","大城","若月","安達",senpa1,"すずき","いとう","しゅんた"];
      syu1=["中","二","左","右","一","指","三","捕","遊","","遊","捕","中"]
      re1=["","くろき","こんどう","ますい",""];
      re1[0]=senpa1
      miko1=[5,3,7,5,4,3,3,2,3,4,4,4,4,4];
      pasu1=[2,4,3,7,5,6,3,6,4,4,4,4,4,4];
      soukyu1=[7,6,4,2,5,3,5,3,3,4,4,4,4,4];
      ko1=[kos[v],3,2,5];
      su1=[sus[v],3,5,1];
      kyu1=[kyus[v],4,5,4];
      break;
    case 4:
      var v = Math.floor( Math.random() * 3 );
      var senpa=["つらしま","のりもと","きし"]
      var kos=[4,4,4]
      var sus=[4,4,4]
      var kyus=[4,4,4]
      sen1=["茂木","ペゲーロ","島内","ウィーラー","銀次","内田","藤田","嶋","岡島",senpa1,"ますだ","おこえ","ひじりさわ"];
      syu1=["遊","右","中","三","二","一","指","捕","左","","二","中","左"]
      re1=["","たかなし","はまーん","まとぅい",""];
      re1[0]=senpa1
      miko1=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      pasu1=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      soukyu1=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      ko1=[kos[v],4,4,4];
      su1=[sus[v],4,4,4];
      kyu1=[kyus[v],4,4,4];
      break;
    case 5:
      var v = Math.floor( Math.random() * 3 );
      var senpa=["まるてぃねす","たかなし","うえさわ"]
      var kos=[4,4,4]
      var sus=[4,4,4]
      var kyus=[4,4,4]
      sen1=["西川","横尾","近藤","中田","清宮","横尾","大田","清水","中島卓",senpa1,"すぎや","たなか","なかじま"];
      syu1=["中","二","右","一","指","三","左","捕","遊","","左","遊","二"]
      re1=["","みやにし","いしかわ","にしむら",""];
      re1[0]=senpa1
      miko1=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      pasu1=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      soukyu1=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      ko1=[kos[v],4,4,4];
      su1=[sus[v],4,4,4];
      kyu1=[kyus[v],4,4,4];
      break;    
    case 6:
      var v = Math.floor( Math.random() * 3 );
      var senpa=["ぼるしんがー","いしかわ","わくい"]
      var kos=[4,4,4]
      var sus=[4,4,4]
      var kyus=[4,4,4]
      sen1=["荻野貴","藤岡","中村","井上","角中","平沢","田村","鈴木","清田",senpa1,"たかはま","いぐち","すがの"];
      syu1=["中","遊","二","一","指","右","捕","三","左","","三","一","左"]
      re1=["","うち","しぇぱーず","まつなが",""];
      re1[0]=senpa1
      miko1=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      pasu1=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      soukyu1=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      ko1=[kos[v],4,4,4];
      su1=[sus[v],4,4,4];
      kyu1=[kyus[v],4,4,4];
      break;
    case 7:
      var v = Math.floor( Math.random() * 3 );
      var senpa=["いまなが","はまぐち","あずま"]
      var kos=[5,7,4]
      var sus=[3,5,7]
      var kyus=[4,3,6]
      sen1=["桑原","梶谷","ロペス","筒香","宮崎","ソト","大和","嶺井","神里",senpa1,"たなか","かみざと","ごめす"];
      syu1=["中","右","一","指","三","二","遊","捕","左","","二","中","一"]
      re1=["","いのう","すなだ","えすこば",""];
      re1[0]=senpa1
      miko1=[4,4,4,5,7,2,3,1,4,3,2,4,4,4];
      pasu1=[4,3,8,7,4,5,3,2,4,3,5,4,4,4];
      soukyu1=[7,7,4,2,3,2,6,3,4,5,8,4,4,4];
      ko1=[kos[v],4,3,5];
      su1=[sus[v],2,3,5];
      kyu1=[kyus[v],6,5,2];
      break;
    case 8:
      var v = Math.floor( Math.random() * 3 );
      var senpa=["ブキャナン","なかお","いしかわ"]
      var kos=[4,4,4]
      var sus=[4,4,4]
      var kyus=[4,4,4]
      sen1=["青木","坂口","山田","バレンティン","大引","雄平","西浦","中村","川端",senpa1,"うえだ","ゆうへい","にしうら"];
      syu1=["中","一","二","左","三","右","遊","捕","指","","三","右","遊"]
      re1=["","いしやま","なかお","あきよし",""];
      re1[0]=senpa1
      miko1=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      pasu1=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      soukyu1=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      ko1=[kos[v],4,4,4];
      su1=[sus[v],4,4,4];
      kyu1=[kyus[v],4,4,4];
      break;
    case 9:
      var v = Math.floor( Math.random() * 3 );
      var senpa=["すがの","のがみ","よしかわ"]
      var kos=[3,2,4]
      var sus=[4,6,4]
      var kyus=[8,5,5]
      sen1=["陽","吉川尚","坂本","ゲレーロ","マギー","岡本","長野","小林","亀井",senpa1,"わきや","しげのぶ","なかい"];
      syu1=["中","二","遊","左","三","一","右","捕","指","","二","右","三"]
      re1=["","みやぐに","かみねろ","うつみ",""]
      re1[0]=senpa1
      miko1=[3,3,8,3,4,5,6,1,1,1,1,4,4,4];
      pasu1=[3,5,6,8,5,6,5,3,2,2,2,4,4,4];
      soukyu1=[8,5,6,3,2,3,2,3,3,3,3,4,4,4];
      ko1=[kos[v],5,4,3];
      su1=[sus[v],4,5,6];
      kyu1=[kyus[v],4,5,2];
      break;
    case 10:
      var v = Math.floor( Math.random() * 3 );
      var senpa=["めっせんじゃ","あきやま","いわさだ"]
      var kos=[4,4,4]
      var sus=[4,4,4]
      var kyus=[4,4,4]
      sen1=["高山","鳥谷","糸井","ロサリオ","福留","大山","糸原","梅野","俊介",senpa1,"いとう","おおやま","なかたに"];
      syu1=["指","二","右","一","左","三","遊","捕","中","","左","三","中"]
      re1=["","いわさき","くわはら","どりす",""];
      re1[0]=senpa1
      miko1=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      pasu1=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      soukyu1=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      ko1=[kos[v],4,4,4];
      su1=[sus[v],4,4,4];
      kyu1=[kyus[v],4,4,4];
      break;
    case 11:
      var v = Math.floor( Math.random() * 3 );
      var senpa=["おかだ","おおせら","じょんそん"]
      var kos=[4,4,4]
      var sus=[4,4,4]
      var kyus=[4,4,4]
      sen1=["田中","菊池","丸","鈴木","バティスタ","エルドレッド","安部","會澤","松山",senpa1,"のま","いわもと","にしかわ"];
      syu1=["遊","二","中","右","指","一","三","捕","左","","左","一","遊"]
      re1=["","じゃくそん","いまむら","なかざき",""];
      re1[0]=senpa1
      miko1=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      pasu1=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      soukyu1=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      ko1=[kos[v],4,4,4];
      su1=[sus[v],4,4,4];
      kyu1=[kyus[v],4,4,4];
      break;
    case 12:
      var v = Math.floor( Math.random() * 3 );
      var senpa=["がるしあ","すずき","おがさわら"]
      var kos=[4,4,4]
      var sus=[4,4,4]
      var kyus=[4,4,4]
      sen1=["大島","京田","アルモンテ","ビシエド","福田","高橋","平田","松井雅","藤井",senpa1,"どのうえ","あらき","まつい"];
      syu1=["中","遊","指","一","三","二","右","捕","左","","遊","二","右"]
      re1=["","すずき","いわせ","そふえ",""];
      re1[0]=senpa1
      miko1=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      pasu1=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      soukyu1=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      ko1=[kos[v],4,4,4];
      su1=[sus[v],4,4,4];
      kyu1=[kyus[v],4,4,4];
      break;
  }
  switch(document.abc.a2.selectedIndex){
    case 1:
      var v = Math.floor( Math.random() * 3 );
      var senpa=["ばんでんはーく","ひがしはま","せんが"]
      var kos=[7,5,3]
      var sus=[4,5,5]
      var kyus=[2,4,7]
      sen2=["今宮","本多","柳田","内川","グラシアル","中村","松田","上林","甲斐",senpa2,"ふくだ","ほんだ","あかし"];
      syu2=["遊","二","中","一","指","左","三","右","捕","","右","三","二"]
      re2=["","かじや","もいねろ","かやま",""];
      re2[0]=senpa2
      miko2=[2,4,4,4,4,4,4,4,4,4,4,4,4,4];
      pasu2=[3,4,4,4,4,4,4,4,4,4,4,4,4,4];
      soukyu2=[7,4,4,4,4,4,4,4,4,4,4,4,4,4];
      ko2=[kos[v],2,6,4];
      su2=[sus[v],6,3,3];
      kyu2=[kyus[v],4,4,5];
      break;
    case 2:
      var v = Math.floor( Math.random() * 3 );
      var senpa=["きくち","たわだ","とかめ"]
      var kos=[4,4,4]
      var sus=[4,4,4]
      var kyus=[4,4,4]
      sen2=["秋山","源田","浅村","山川","森","中村","外崎","炭谷","金子侑",senpa2,"めひあ","あいと","くりやま"];
      syu2=["中","遊","二","一","指","三","右","捕","左","","一","右","左"]
      re2=["","たけくま","こいし","ひらい",""];
      re2[0]=senpa2
      miko2=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      pasu2=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      soukyu2=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      ko2=[kos[v],4,4,4];
      su2=[sus[v],4,4,4];
      kyu2=[kyus[v],4,4,4];
      break;
    case 3:
      var v = Math.floor( Math.random() * 3 );
      var senpa=["あるばーす","たじま","よしだ"]
      var kos=[6,5,4]
      var sus=[3,5,7]
      var kyus=[4,4,2]
      sen2=["宗","山足","吉田正","ロメロ","小谷野","マレーロ","大城","若月","安達",senpa2,"すずき","いとう","しゅんた"];
      syu2=["中","二","左","右","一","指","三","捕","遊","","遊","捕","中"]
      re2=["","くろき","こんどう","ますい",""];
      re2[0]=senpa2
      miko2=[5,3,7,5,4,3,3,2,3,4,4,4,4,4];
      pasu2=[2,4,3,7,5,6,3,6,4,4,4,4,4,4];
      soukyu2=[7,6,4,2,5,3,5,3,3,4,4,4,4,4];
      ko2=[kos[v],3,2,5];
      su2=[sus[v],3,5,1];
      kyu2=[kyus[v],4,5,4];
      break;
    case 4:
      var v = Math.floor( Math.random() * 3 );
      var senpa=["つらしま","のりもと","きし"]
      var kos=[4,4,4]
      var sus=[4,4,4]
      var kyus=[4,4,4]
      sen2=["茂木","ペゲーロ","島内","ウィーラー","銀次","内田","藤田","嶋","岡島",senpa2,"ますだ","おこえ","ひじりさわ"];
      syu2=["遊","右","中","三","二","一","指","捕","左","","二","中","左"]
      re2=["","たかなし","はまーん","まとぅい",""];
      re2[0]=senpa2
      miko2=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      pasu2=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      soukyu2=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      ko2=[kos[v],4,4,4];
      su2=[sus[v],4,4,4];
      kyu2=[kyus[v],4,4,4];
      break;
    case 5:
      var v = Math.floor( Math.random() * 3 );
      var senpa=["まるてぃねす","たかなし","うえさわ"]
      var kos=[4,4,4]
      var sus=[4,4,4]
      var kyus=[4,4,4]
      sen2=["西川","横尾","近藤","中田","清宮","アルシア","大田","清水","中島卓",senpa2,"すぎや","たなか","なかじま"];
      syu2=["中","二","右","一","三","指","左","捕","遊","","左","遊","二"]
      re2=["","みやにし","いしかわ","にしむら",""];
      re2[0]=senpa2
      miko2=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      pasu2=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      soukyu2=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      ko2=[kos[v],4,4,4];
      su2=[sus[v],4,4,4];
      kyu2=[kyus[v],4,4,4];
      break;    
    case 6:
      var v = Math.floor( Math.random() * 3 );
      var senpa=["ぼるしんがー","いしかわ","わくい"]
      var kos=[4,4,4]
      var sus=[4,4,4]
      var kyus=[4,4,4]
      sen2=["荻野貴","藤岡","中村","井上","角中","平沢","田村","鈴木","清田",senpa2,"たかはま","いぐち","すがの"];
      syu2=["中","遊","二","一","指","右","捕","三","左","","三","一","左"]
      re2=["","うち","しぇぱーず","まつなが",""];
      re2[0]=senpa2
      miko2=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      pasu2=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      soukyu2=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      ko2=[kos[v],4,4,4];
      su2=[sus[v],4,4,4];
      kyu2=[kyus[v],4,4,4];
      break;
    case 7:
      var v = Math.floor( Math.random() * 3 );
      var senpa=["いまなが","はまぐち","あずま"]
      var kos=[5,7,4]
      var sus=[3,5,7]
      var kyus=[4,3,6]
      sen2=["桑原","梶谷","ロペス","筒香","宮崎","ソト","大和","嶺井","神里",senpa2,"たなか","かみざと","ごめす"];
      syu2=["中","右","一","指","三","二","遊","捕","左","","二","中","一"]
      re2=["","いのう","すなだ","えすこば",""];
      re2[0]=senpa2
      miko2=[4,4,4,5,7,2,3,1,4,3,2,4,4,4];
      pasu2=[4,3,8,7,4,5,3,2,4,3,5,4,4,4];
      soukyu2=[7,7,4,2,3,2,6,3,4,5,8,4,4,4];
      ko2=[kos[v],4,3,5];
      su2=[sus[v],2,3,5];
      kyu2=[kyus[v],6,5,2];
      break;
    case 8:
      var v = Math.floor( Math.random() * 3 );
      var senpa=["ブキャナン","なかお","いしかわ"]
      var kos=[4,4,4]
      var sus=[4,4,4]
      var kyus=[4,4,4]
      sen2=["青木","坂口","山田","バレンティン","大引","雄平","西浦","中村","川端",senpa2,"うえだ","ゆうへい","にしうら"];
      syu2=["中","一","二","左","三","右","遊","捕","指","","三","右","遊"]
      re2=["","いしやま","なかお","あきよし",""];
      re2[0]=senpa2
      miko2=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      pasu2=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      soukyu2=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      ko2=[kos[v],4,4,4];
      su2=[sus[v],4,4,4];
      kyu2=[kyus[v],4,4,4];
      break;
    case 9:
      var v = Math.floor( Math.random() * 3 );
      var senpa=["すがの","のがみ","よしかわ"]
      var kos=[3,2,4]
      var sus=[4,6,4]
      var kyus=[8,5,5]
      sen2=["陽","吉川尚","坂本","ゲレーロ","マギー","岡本","長野","小林","亀井",senpa2,"わきや","しげのぶ","なかい"];
      syu2=["中","二","遊","左","三","一","右","捕","指","","二","右","三"]
      re2=["","みやぐに","かみねろ","うつみ",""]
      re2[0]=senpa2
      miko2=[3,3,8,3,4,5,6,1,1,1,1,4,4,4];
      pasu2=[3,5,6,8,5,6,5,3,2,2,2,4,4,4];
      soukyu2=[8,5,6,3,2,3,2,3,3,3,3,4,4,4];
      ko2=[kos[v],5,4,3];
      su2=[sus[v],4,5,6];
      kyu2=[kyus[v],4,5,2];
      break;
    case 10:
      var v = Math.floor( Math.random() * 3 );
      var senpa=["めっせんじゃ","あきやま","いわさだ"]
      var kos=[4,4,4]
      var sus=[4,4,4]
      var kyus=[4,4,4]
      sen2=["高山","鳥谷","糸井","ロサリオ","福留","大山","糸原","梅野","俊介",senpa2,"いとう","おおやま","なかたに"];
      syu2=["指","二","右","一","左","三","遊","捕","中","","左","三","中"]
      re2=["","いわさき","くわはら","どりす",""];
      re2[0]=senpa2
      miko2=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      pasu2=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      soukyu2=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      ko2=[kos[v],4,4,4];
      su2=[sus[v],4,4,4];
      kyu2=[kyus[v],4,4,4];
      break;
    case 11:
      var v = Math.floor( Math.random() * 3 );
      var senpa=["おかだ","おおせら","じょんそん"]
      var kos=[4,4,4]
      var sus=[4,4,4]
      var kyus=[4,4,4]
      sen2=["田中","菊池","丸","鈴木","バティスタ","エルドレッド","安部","會澤","松山",senpa2,"のま","いわもと","にしかわ"];
      syu2=["遊","二","中","右","指","一","三","捕","左","","左","一","遊"]
      re2=["","じゃくそん","いまむら","なかざき",""];
      re2[0]=senpa2
      miko2=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      pasu2=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      soukyu2=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      ko2=[kos[v],4,4,4];
      su2=[sus[v],4,4,4];
      kyu2=[kyus[v],4,4,4];
      break;
    case 12:
      var v = Math.floor( Math.random() * 3 );
      var senpa=["がるしあ","すずき","おがさわら"]
      var kos=[4,4,4]
      var sus=[4,4,4]
      var kyus=[4,4,4]
      sen2=["大島","京田","アルモンテ","ビシエド","福田","高橋","平田","松井雅","藤井",senpa2,"どのうえ","あらき","まつい"];
      syu2=["中","遊","指","一","三","二","右","捕","左","","遊","二","右"]
      re2=["","すずき","いわせ","そふえ",""];
      re2[0]=senpa2
      miko2=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      pasu2=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      soukyu2=[4,4,4,4,4,4,4,4,4,4,4,4,4,4];
      ko2=[kos[v],4,4,4];
      su2=[sus[v],4,4,4];
      kyu2=[kyus[v],4,4,4];
      break;
  }
  out=0
  b1=0
  b2=0
  b3=0
  p1=0
  p2=0
  osir();
  document.getElementById("pit").innerHTML = (kai+"回"+ou+"　"+team1 +" "+ p1 +"-"+ p2 +" "+team2+"　OUT"+out)
  if (b1!=0){document.getElementById("base1").style.backgroundColor='#ff0000'}else{document.getElementById("base1").style.backgroundColor='#98fb98'};
  if (b2!=0){document.getElementById("base2").style.backgroundColor='#ff0000'}else{document.getElementById("base2").style.backgroundColor='#98fb98'};
  if (b3!=0){document.getElementById("base3").style.backgroundColor='#ff0000'}else{document.getElementById("base3").style.backgroundColor='#98fb98'};
  document.getElementById("name1").innerHTML = team1;
  document.getElementById("name2").innerHTML = team2;
  var la=1;
  while(la<11){
    var aa="ase"+parseInt(la);
    var bb="bse"+parseInt(la);
    document.getElementById(aa).innerHTML = (la+" "+syu1[la-1]+" "+sen1[la-1]);
    document.getElementById(bb).innerHTML = (la+" "+syu2[la-1]+" "+sen2[la-1]);
    document.getElementById(aa).style.color = '#ffa000'
    document.getElementById(bb).style.color = '#ffa000'
    if(la==10){
        document.getElementById("ase10").innerHTML = ("P "+re1[rere1]);
        document.getElementById("bse10").innerHTML = ("P "+re2[rere2]);
    }
    la+=1
  }
  document.getElementById("ase"+parseInt(bat1+1)).style.color = '#ff0000'
  document.getElementById("bse"+parseInt(bat2+1)).style.color = '#ff0000'
  var i=1
  while(i<10){
    pk1[i]=0
    pk2[i]=0
    document.getElementById("kai"+i).innerHTML = ""
    document.getElementById("akai"+i).innerHTML = ""
    i++
  }
  document.getElementById("point1").innerHTML = p1
  document.getElementById("point2").innerHTML = p2
  st1=45
  st2=45
}
function plays(){
  if (kouso==0){alert("ピッチャー、投げました！")};
  var b = Math.floor( Math.random() * 6 ) + 1;
  if (b<=4){
    out+=1;
    if (ou=="表"){
      if (kouso==0){alert(sen1[bat1]+"、アウト")};
      var b = Math.floor( Math.random() * 4 );
      if(b==2){sansin1+=1};
      da1[bat1]+=1
      bat1+=1;
      if (bat1==9){
        bat1=0;
      }
      st2-=1
    }
    if (ou=="裏"){
      if (kouso==0){alert(sen2[bat2]+"、アウト");}
      var b = Math.floor( Math.random() * 4 );
      if(b==2){sansin2+=1};
      da2[bat2]+=1
      bat2+=1;
      if (bat2==9){
        bat2=0;
      }
      st1-=1
    }
  }else{
    if (kouso==0){alert("打った～～！！")};
    var b = Math.floor( Math.random() * 6 ) + 1;
    if (b <= 3){
      if (kouso==0){alert("ヒットです！")};
      if (ou=="表"){
          an1[bat1]+=1
          st2-=3
      }
      if (ou=="裏"){
          an2[bat2]+=1
          st1-=3
      }
      h=b3
      b3=0
      b3=b2
      b2=0
      b2=b1
      b1=1
    }else if (b == 6){
      var b = Math.floor( Math.random() * 3 ) + 1;
      if (b==1 || b==2){
        if (kouso==0){alert("ファインプレー！アウト！アウトです")}
        out+=1
      }else{
        if (kouso==0){alert("ホームラン！")};
        if (ou=="表"){
            hon+=" "+kai+"回 "+sen1[bat1]
            hon1[bat1]+=1
            an1[bat1]+=1
            st2-=8
        }
        if (ou=="裏"){
            hon+=" "+kai+"回 "+sen2[bat2]
            hon2[bat2]+=1
            an2[bat2]+=1
            st1-=8
        }
        h=parseInt(b3)+parseInt(b2)+parseInt(b1)+1
        b3=0
        b2=0
        b1=0
      }
    }else{
      if (kouso==0){alert("ツーベースヒット！")};
      if (ou=="表"){
          ni1[bat1]+=1
          an1[bat1]+=1
          st2-=5
      }
      if (ou=="裏"){
          ni2[bat2]+=1
          an2[bat2]+=1
          st1-=5
      }
      h=parseInt(b3)+parseInt(b2);
      b3=0
      b3=b1
      b1=0
      b2=1
    }
    if (h > 0){
      if (kouso==0){alert(h+"点入りました！")};
    }
    if (ou=="表"){
      da1[bat1]+=1
      p1+=h
      siten2+=parseInt(h)
      bat1+=1
      pk1[kai]+=parseInt(h);
      if (bat1==9){
        bat1=0
      }
      if(kai>4 && dd!=4 && out!=3 && syu1[9+dd]==syu1[bat1]){
          daida();
      }
    }
    if (ou=="裏"){
      da2[bat2]+=1
      p2+=h
      siten1+=parseInt(h)
      bat2+=1
      pk2[kai]+=parseInt(h)
      if (bat2==9){
        bat2=0
      }
      if(kai>4 && dd2!=4 && out!=3 && syu2[9+dd2]==syu2[bat2]){
          daida();
      }
    }
    h=0
  }
  if(st1<0 &&rere1!=3){ref();}
  if(st2<0 &&rere2!=3){ref();}
  if(st1<0){st1=0}
  if(st2<0){st2=0}
  osir();
    if (ou=="裏"){
      if(kai!=0){
        document.getElementById("akai"+kai).innerHTML = pk2[kai]
      }
      document.getElementById("point2").innerHTML = p2
    }else if (ou=="表"){
      if(kai!=0){
        document.getElementById("kai"+kai).innerHTML = pk1[kai]
      }
      document.getElementById("point1").innerHTML = p1
    }
  document.getElementById("pit").innerHTML = (kai+"回"+ou+"　"+team1 +" "+ p1 +"-"+ p2 +" "+team2+"　OUT"+out)
  if (b1!=0){document.getElementById("base1").style.backgroundColor='#ff0000'}else{document.getElementById("base1").style.backgroundColor='#98fb98'}
  if (b2!=0){document.getElementById("base2").style.backgroundColor='#ff0000'}else{document.getElementById("base2").style.backgroundColor='#98fb98'}
  if (b3!=0){document.getElementById("base3").style.backgroundColor='#ff0000'}else{document.getElementById("base3").style.backgroundColor='#98fb98'}
  var la=1;
  while(la<11){
    var aa="ase"+la;
    var bb="bse"+la;
    document.getElementById(aa).innerHTML = (la+" "+syu1[la-1]+" "+sen1[la-1]);
    document.getElementById(bb).innerHTML = (la+" "+syu2[la-1]+" "+sen2[la-1]);
    document.getElementById(aa).style.color = '#ffa000'
    document.getElementById(bb).style.color = '#ffa000'
    if(la==10){
      document.getElementById("ase10").innerHTML = ("P "+sen1[la-1]);
      document.getElementById("bse10").innerHTML = ("P "+sen2[la-1]);
    }
    la++;
  }
  document.getElementById("ase"+parseInt(bat1+1)).style.color = '#ff0000'
  document.getElementById("bse"+parseInt(bat2+1)).style.color = '#ff0000'
  if (out > 2){
    if ((ou=="裏" && kai==9 || kai>9)||(kai==9 && ou=="表" && p2>p1)){
      if(p1!=p2 && kai>9 && ou=="裏"){
        alert("試合終了！"+team1+p1+"-"+p2+team2)
        if(ire1[0]!=0){modosu(1);}
        if(ire1[1]!=0){modosu(2);}
        if(ire1[2]!=0){modosu(3);}
        if(ire2[0]!=0){modosu2(1);}
        if(ire2[1]!=0){modosu2(2);}
        if(ire2[2]!=0){modosu2(3);}
        var winner=1
        document.getElementById("rire").innerHTML = (team1+" "+pk1[1]+pk1[2]+pk1[3]+" "+pk1[4]+pk1[5]+pk1[6]+" "+pk1[7]+pk1[8]+pk1[9]+" "+pk1[10]+pk1[11]+pk1[12]+" "+p1)
        document.getElementById("rire1").innerHTML =(team2+" "+pk2[1]+pk2[2]+pk2[3]+" "+pk2[4]+pk2[5]+pk2[6]+" "+pk2[7]+pk2[8]+pk2[9]+" "+pk2[10]+pk2[11]+pk2[12]+" "+p2)
        document.getElementById("home").innerHTML =("本"+hon)
      document.getElementById("rire2").innerHTML =(team1+"<br>防御率 投球回 三振　失点<br>"+re1[0]+" "+Math.floor((siten1[0]*27)/(toukai1[0]*3)*100)/100+" "+toukai1[0]+" "+sansin1[0]+"  "+siten1[0]+"<br>"+re1[1]+" "+Math.floor((siten1[1]*27)/(toukai1[1]*3)*100)/100+" "+toukai1[1]+" "+sansin1[1]+"  "+siten1[1]+"<br>"+re1[2]+" "+Math.floor((siten1[2]*27)/(toukai1[2]*3)*100)/100+" "+toukai1[2]+" "+sansin1[2]+"  "+siten1[2]+"<br>"+re1[3]+" "+Math.floor((siten1[3]*27)/(toukai1[3]*3)*100)/100+" "+toukai1[3]+" "+sansin1[3]+"  "+siten1[3]+"<br>"+"打率 打数　安打　2BH   HR 打点<br>"+sen1[0]+" ."+Math.floor(an1[0]/da1[0]*1000)+" "+da1[0]+"  "+an1[0]+"  "+ni1[0]+"  "+hon1[0]+"　"+dat1[0]+"<br>"+sen1[1]+" ."+Math.floor(an1[1]/da1[1]*1000)+" "+da1[1]+"  "+an1[1]+"  "+ni1[1]+"  "+hon1[1]+"　"+dat1[1]+"<br>"+sen1[2]+" ."+Math.floor(an1[2]/da1[2]*1000)+" "+da1[2]+"  "+an1[2]+"  "+ni1[2]+"  "+hon1[2]+"　"+dat1[2]+"<br>"+sen1[3]+" ."+Math.floor(an1[3]/da1[3]*1000)+" "+da1[3]+"  "+an1[3]+"  "+ni1[3]+"  "+hon1[3]+"　"+dat1[3]+"<br>"+sen1[4]+" ."+Math.floor(an1[4]/da1[4]*1000)+" "+da1[4]+"  "+an1[4]+"  "+ni1[4]+"  "+hon1[4]+"　"+dat1[4]+"<br>"+sen1[5]+" ."+Math.floor(an1[5]/da1[5]*1000)+" "+da1[5]+"  "+an1[5]+"  "+ni1[5]+"  "+hon1[5]+"　"+dat1[5]+"<br>"+sen1[6]+" ."+Math.floor(an1[6]/da1[6]*1000)+" "+da1[6]+"  "+an1[6]+"  "+ni1[6]+"  "+hon1[6]+"　"+dat1[6]+"<br>"+sen1[7]+" ."+Math.floor(an1[7]/da1[7]*1000)+" "+da1[7]+"  "+an1[7]+"  "+ni1[7]+"  "+hon1[7]+"　"+dat1[7]+"<br>"+sen1[8]+" ."+Math.floor(an1[8]/da1[8]*1000)+" "+da1[8]+"  "+an1[8]+"  "+ni1[8]+"  "+hon1[8]+"　"+dat1[8]+"<br>"+sen1[10]+" ."+Math.floor(an1[10]/da1[10]*1000)+" "+da1[10]+"  "+an1[10]+"  "+ni1[10]+"  "+hon1[10]+"　"+dat1[10]+"<br>"+sen1[11]+" ."+Math.floor(an1[11]/da1[11]*1000)+" "+da1[11]+"  "+an1[11]+"  "+ni1[11]+"  "+hon1[11]+"　"+dat1[11]+"<br>"+sen1[12]+" ."+Math.floor(an1[12]/da1[12]*1000)+" "+da1[12]+"  "+an1[12]+"  "+ni1[12]+"  "+hon1[12]+"　"+dat1[12]+"<br>")
      document.getElementById("rire3").innerHTML =(team2+"<br>投球回 三振　失点<br>"+re2[0]+" "+Math.floor((siten2[0]*27)/(toukai2[0]*3)*100)/100+" "+toukai2[0]+" "+sansin2[0]+"  "+siten2[0]+"<br>"+re2[1]+" "+Math.floor((siten2[1]*27)/(toukai2[1]*3)*100)/100+" "+toukai2[1]+" "+sansin2[1]+"  "+siten2[1]+"<br>"+re2[2]+" "+Math.floor((siten2[2]*27)/(toukai2[2]*3)*100)/100+" "+toukai2[2]+" "+sansin2[2]+"  "+siten2[2]+"<br>"+re2[3]+" "+Math.floor((siten2[3]*27)/(toukai2[3]*3)*100)/100+" "+toukai2[3]+" "+sansin2[3]+"  "+siten2[3]+"<br>"+"打率 打数　安打　2BH   HR 打点<br>"+sen2[0]+" ."+Math.floor(an1[0]/da1[0]*1000)+" "+da2[0]+"  "+an2[0]+"  "+ni2[0]+"  "+hon2[0]+"　"+dat2[0]+"<br>"+sen2[1]+" ."+Math.floor(an2[1]/da2[1]*1000)+" "+da2[1]+"  "+an2[1]+"  "+ni2[1]+"  "+hon2[1]+"　"+dat2[1]+"<br>"+sen2[2]+" ."+Math.floor(an2[2]/da2[2]*1000)+" "+da2[2]+"  "+an2[2]+"  "+ni2[2]+"  "+hon2[2]+"　"+dat2[2]+"<br>"+sen2[3]+" ."+Math.floor(an2[3]/da2[3]*1000)+" "+da2[3]+"  "+an2[3]+"  "+ni2[3]+"  "+hon2[3]+"　"+dat2[3]+"<br>"+sen2[4]+" ."+Math.floor(an2[4]/da2[4]*1000)+" "+da2[4]+"  "+an2[4]+"  "+ni2[4]+"  "+hon2[4]+"　"+dat2[4]+"<br>"+sen2[5]+" ."+Math.floor(an2[5]/da2[5]*1000)+" "+da2[5]+"  "+an2[5]+"  "+ni2[5]+"  "+hon2[5]+"　"+dat2[5]+"<br>"+sen2[6]+" ."+Math.floor(an2[6]/da2[6]*1000)+" "+da2[6]+"  "+an2[6]+"  "+ni2[6]+"  "+hon2[6]+"　"+dat2[6]+"<br>"+sen2[7]+" ."+Math.floor(an2[7]/da2[7]*1000)+" "+da2[7]+"  "+an2[7]+"  "+ni2[7]+"  "+hon2[7]+"　"+dat2[7]+"<br>"+sen2[8]+" ."+Math.floor(an2[8]/da2[8]*1000)+" "+da2[8]+"  "+an2[8]+"  "+ni2[8]+"  "+hon2[8]+"　"+dat2[8]+"<br>"+sen2[10]+" ."+Math.floor(an2[10]/da2[10]*1000)+" "+da2[10]+"  "+an2[10]+"  "+ni2[10]+"  "+hon2[10]+"　"+dat2[10]+"<br>"+sen2[11]+" ."+Math.floor(an2[11]/da2[11]*1000)+" "+da2[11]+"  "+an2[11]+"  "+ni2[11]+"  "+hon2[11]+"　"+dat2[11]+"<br>"+sen2[12]+" ."+Math.floor(an2[12]/da2[12]*1000)+" "+da2[12]+"  "+an2[12]+"  "+ni2[12]+"  "+hon2[12]+"　"+dat2[12]+"<br>")
        hon=""
        b1=0
        b2=0
        b3=0
        p1=0
        p2=0
        kai=0
        var i=1
        bat1=0
        bat2=0
        while(i<12){
          pk1[i]=0
          pk2[i]=0
          i++
        }
        var i=1
        while(i<12){
          document.getElementById("kai"+i).innerHTML = ""
          document.getElementById("akai"+i).innerHTML = ""
          i++
        }
        document.getElementById("point1").innerHTML = p1
        document.getElementById("point2").innerHTML = p2
      }else if(p1!=p2 && kai==9){
        alert("試合終了！"+team1+p1+"-"+p2+team2)
        if(ire1[0]!=0){modosu(1);}
        if(ire1[1]!=0){modosu(2);}
       if(ire1[2]!=0){modosu(3);}
        if(ire2[0]!=0){modosu2(1);}
        if(ire2[1]!=0){modosu2(2);}
        if(ire2[2]!=0){modosu2(3);}
        var winner=1
        document.getElementById("rire").innerHTML = (team1+" "+pk1[1]+pk1[2]+pk1[3]+" "+pk1[4]+pk1[5]+pk1[6]+" "+pk1[7]+pk1[8]+pk1[9]+" "+p1)
        document.getElementById("rire1").innerHTML =(team2+" "+pk2[1]+pk2[2]+pk2[3]+" "+pk2[4]+pk2[5]+pk2[6]+" "+pk2[7]+pk2[8]+pk2[9]+" "+p2)
        document.getElementById("home").innerHTML =("本"+hon)
      document.getElementById("rire2").innerHTML =(team1+"<br>防御率 投球回 三振　失点<br>"+re1[0]+" "+Math.floor((siten1[0]*27)/(toukai1[0]*3)*100)/100+" "+toukai1[0]+" "+sansin1[0]+"  "+siten1[0]+"<br>"+re1[1]+" "+Math.floor((siten1[1]*27)/(toukai1[1]*3)*100)/100+" "+toukai1[1]+" "+sansin1[1]+"  "+siten1[1]+"<br>"+re1[2]+" "+Math.floor((siten1[2]*27)/(toukai1[2]*3)*100)/100+" "+toukai1[2]+" "+sansin1[2]+"  "+siten1[2]+"<br>"+re1[3]+" "+Math.floor((siten1[3]*27)/(toukai1[3]*3)*100)/100+" "+toukai1[3]+" "+sansin1[3]+"  "+siten1[3]+"<br>"+"打率 打数　安打　2BH   HR 打点<br>"+sen1[0]+" ."+Math.floor(an1[0]/da1[0]*1000)+" "+da1[0]+"  "+an1[0]+"  "+ni1[0]+"  "+hon1[0]+"　"+dat1[0]+"<br>"+sen1[1]+" ."+Math.floor(an1[1]/da1[1]*1000)+" "+da1[1]+"  "+an1[1]+"  "+ni1[1]+"  "+hon1[1]+"　"+dat1[1]+"<br>"+sen1[2]+" ."+Math.floor(an1[2]/da1[2]*1000)+" "+da1[2]+"  "+an1[2]+"  "+ni1[2]+"  "+hon1[2]+"　"+dat1[2]+"<br>"+sen1[3]+" ."+Math.floor(an1[3]/da1[3]*1000)+" "+da1[3]+"  "+an1[3]+"  "+ni1[3]+"  "+hon1[3]+"　"+dat1[3]+"<br>"+sen1[4]+" ."+Math.floor(an1[4]/da1[4]*1000)+" "+da1[4]+"  "+an1[4]+"  "+ni1[4]+"  "+hon1[4]+"　"+dat1[4]+"<br>"+sen1[5]+" ."+Math.floor(an1[5]/da1[5]*1000)+" "+da1[5]+"  "+an1[5]+"  "+ni1[5]+"  "+hon1[5]+"　"+dat1[5]+"<br>"+sen1[6]+" ."+Math.floor(an1[6]/da1[6]*1000)+" "+da1[6]+"  "+an1[6]+"  "+ni1[6]+"  "+hon1[6]+"　"+dat1[6]+"<br>"+sen1[7]+" ."+Math.floor(an1[7]/da1[7]*1000)+" "+da1[7]+"  "+an1[7]+"  "+ni1[7]+"  "+hon1[7]+"　"+dat1[7]+"<br>"+sen1[8]+" ."+Math.floor(an1[8]/da1[8]*1000)+" "+da1[8]+"  "+an1[8]+"  "+ni1[8]+"  "+hon1[8]+"　"+dat1[8]+"<br>"+sen1[10]+" ."+Math.floor(an1[10]/da1[10]*1000)+" "+da1[10]+"  "+an1[10]+"  "+ni1[10]+"  "+hon1[10]+"　"+dat1[10]+"<br>"+sen1[11]+" ."+Math.floor(an1[11]/da1[11]*1000)+" "+da1[11]+"  "+an1[11]+"  "+ni1[11]+"  "+hon1[11]+"　"+dat1[11]+"<br>"+sen1[12]+" ."+Math.floor(an1[12]/da1[12]*1000)+" "+da1[12]+"  "+an1[12]+"  "+ni1[12]+"  "+hon1[12]+"　"+dat1[12]+"<br>")
      document.getElementById("rire3").innerHTML =(team2+"<br>投球回 三振　失点<br>"+re2[0]+" "+Math.floor((siten2[0]*27)/(toukai2[0]*3)*100)/100+" "+toukai2[0]+" "+sansin2[0]+"  "+siten2[0]+"<br>"+re2[1]+" "+Math.floor((siten2[1]*27)/(toukai2[1]*3)*100)/100+" "+toukai2[1]+" "+sansin2[1]+"  "+siten2[1]+"<br>"+re2[2]+" "+Math.floor((siten2[2]*27)/(toukai2[2]*3)*100)/100+" "+toukai2[2]+" "+sansin2[2]+"  "+siten2[2]+"<br>"+re2[3]+" "+Math.floor((siten2[3]*27)/(toukai2[3]*3)*100)/100+" "+toukai2[3]+" "+sansin2[3]+"  "+siten2[3]+"<br>"+"打率 打数　安打　2BH   HR 打点<br>"+sen2[0]+" ."+Math.floor(an1[0]/da1[0]*1000)+" "+da2[0]+"  "+an2[0]+"  "+ni2[0]+"  "+hon2[0]+"　"+dat2[0]+"<br>"+sen2[1]+" ."+Math.floor(an2[1]/da2[1]*1000)+" "+da2[1]+"  "+an2[1]+"  "+ni2[1]+"  "+hon2[1]+"　"+dat2[1]+"<br>"+sen2[2]+" ."+Math.floor(an2[2]/da2[2]*1000)+" "+da2[2]+"  "+an2[2]+"  "+ni2[2]+"  "+hon2[2]+"　"+dat2[2]+"<br>"+sen2[3]+" ."+Math.floor(an2[3]/da2[3]*1000)+" "+da2[3]+"  "+an2[3]+"  "+ni2[3]+"  "+hon2[3]+"　"+dat2[3]+"<br>"+sen2[4]+" ."+Math.floor(an2[4]/da2[4]*1000)+" "+da2[4]+"  "+an2[4]+"  "+ni2[4]+"  "+hon2[4]+"　"+dat2[4]+"<br>"+sen2[5]+" ."+Math.floor(an2[5]/da2[5]*1000)+" "+da2[5]+"  "+an2[5]+"  "+ni2[5]+"  "+hon2[5]+"　"+dat2[5]+"<br>"+sen2[6]+" ."+Math.floor(an2[6]/da2[6]*1000)+" "+da2[6]+"  "+an2[6]+"  "+ni2[6]+"  "+hon2[6]+"　"+dat2[6]+"<br>"+sen2[7]+" ."+Math.floor(an2[7]/da2[7]*1000)+" "+da2[7]+"  "+an2[7]+"  "+ni2[7]+"  "+hon2[7]+"　"+dat2[7]+"<br>"+sen2[8]+" ."+Math.floor(an2[8]/da2[8]*1000)+" "+da2[8]+"  "+an2[8]+"  "+ni2[8]+"  "+hon2[8]+"　"+dat2[8]+"<br>"+sen2[10]+" ."+Math.floor(an2[10]/da2[10]*1000)+" "+da2[10]+"  "+an2[10]+"  "+ni2[10]+"  "+hon2[10]+"　"+dat2[10]+"<br>"+sen2[11]+" ."+Math.floor(an2[11]/da2[11]*1000)+" "+da2[11]+"  "+an2[11]+"  "+ni2[11]+"  "+hon2[11]+"　"+dat2[11]+"<br>"+sen2[12]+" ."+Math.floor(an2[12]/da2[12]*1000)+" "+da2[12]+"  "+an2[12]+"  "+ni2[12]+"  "+hon2[12]+"　"+dat2[12]+"<br>")
        hon=""
        b1=0
        b2=0
        b3=0
        p1=0
        p2=0
        kai=0
        var i=1
        bat1=0
        bat2=0
        while(i<12){
          pk1[i]=0
          pk2[i]=0
          i++
        }
        var i=1
        while(i<10){
          document.getElementById("kai"+i).innerHTML = ""
          document.getElementById("akai"+i).innerHTML = ""
          i++
        }
        document.getElementById("point1").innerHTML = p1
        document.getElementById("point2").innerHTML = p2
      }else if(p1==p2 && kai==12 && ou=="裏"){
        alert("試合終了！"+team1+p1+"-"+p2+team2)
        if(ire1[0]!=0){modosu(1);}
        if(ire1[1]!=0){modosu(2);}
        if(ire1[2]!=0){modosu(3);}
        if(ire2[0]!=0){modosu2(1);}
        if(ire2[1]!=0){modosu2(2);}
        if(ire2[2]!=0){modosu2(3);}
        var winner=1
        document.getElementById("rire").innerHTML = (team1+" "+pk1[1]+pk1[2]+pk1[3]+" "+pk1[4]+pk1[5]+pk1[6]+" "+pk1[7]+pk1[8]+pk1[9]+" "+pk1[10]+pk1[11]+pk1[12]+" "+p1)
        document.getElementById("rire1").innerHTML =(team2+" "+pk2[1]+pk2[2]+pk2[3]+" "+pk2[4]+pk2[5]+pk2[6]+" "+pk2[7]+pk2[8]+pk2[9]+" "+pk2[10]+pk2[11]+pk2[12]+" "+p2)
        document.getElementById("home").innerHTML =("本"+hon)
      document.getElementById("rire2").innerHTML =(team1+"<br>防御率 投球回 三振　失点<br>"+re1[0]+" "+Math.floor((siten1[0]*27)/(toukai1[0]*3)*100)/100+" "+toukai1[0]+" "+sansin1[0]+"  "+siten1[0]+"<br>"+re1[1]+" "+Math.floor((siten1[1]*27)/(toukai1[1]*3)*100)/100+" "+toukai1[1]+" "+sansin1[1]+"  "+siten1[1]+"<br>"+re1[2]+" "+Math.floor((siten1[2]*27)/(toukai1[2]*3)*100)/100+" "+toukai1[2]+" "+sansin1[2]+"  "+siten1[2]+"<br>"+re1[3]+" "+Math.floor((siten1[3]*27)/(toukai1[3]*3)*100)/100+" "+toukai1[3]+" "+sansin1[3]+"  "+siten1[3]+"<br>"+"打率 打数　安打　2BH   HR 打点<br>"+sen1[0]+" ."+Math.floor(an1[0]/da1[0]*1000)+" "+da1[0]+"  "+an1[0]+"  "+ni1[0]+"  "+hon1[0]+"　"+dat1[0]+"<br>"+sen1[1]+" ."+Math.floor(an1[1]/da1[1]*1000)+" "+da1[1]+"  "+an1[1]+"  "+ni1[1]+"  "+hon1[1]+"　"+dat1[1]+"<br>"+sen1[2]+" ."+Math.floor(an1[2]/da1[2]*1000)+" "+da1[2]+"  "+an1[2]+"  "+ni1[2]+"  "+hon1[2]+"　"+dat1[2]+"<br>"+sen1[3]+" ."+Math.floor(an1[3]/da1[3]*1000)+" "+da1[3]+"  "+an1[3]+"  "+ni1[3]+"  "+hon1[3]+"　"+dat1[3]+"<br>"+sen1[4]+" ."+Math.floor(an1[4]/da1[4]*1000)+" "+da1[4]+"  "+an1[4]+"  "+ni1[4]+"  "+hon1[4]+"　"+dat1[4]+"<br>"+sen1[5]+" ."+Math.floor(an1[5]/da1[5]*1000)+" "+da1[5]+"  "+an1[5]+"  "+ni1[5]+"  "+hon1[5]+"　"+dat1[5]+"<br>"+sen1[6]+" ."+Math.floor(an1[6]/da1[6]*1000)+" "+da1[6]+"  "+an1[6]+"  "+ni1[6]+"  "+hon1[6]+"　"+dat1[6]+"<br>"+sen1[7]+" ."+Math.floor(an1[7]/da1[7]*1000)+" "+da1[7]+"  "+an1[7]+"  "+ni1[7]+"  "+hon1[7]+"　"+dat1[7]+"<br>"+sen1[8]+" ."+Math.floor(an1[8]/da1[8]*1000)+" "+da1[8]+"  "+an1[8]+"  "+ni1[8]+"  "+hon1[8]+"　"+dat1[8]+"<br>"+sen1[10]+" ."+Math.floor(an1[10]/da1[10]*1000)+" "+da1[10]+"  "+an1[10]+"  "+ni1[10]+"  "+hon1[10]+"　"+dat1[10]+"<br>"+sen1[11]+" ."+Math.floor(an1[11]/da1[11]*1000)+" "+da1[11]+"  "+an1[11]+"  "+ni1[11]+"  "+hon1[11]+"　"+dat1[11]+"<br>"+sen1[12]+" ."+Math.floor(an1[12]/da1[12]*1000)+" "+da1[12]+"  "+an1[12]+"  "+ni1[12]+"  "+hon1[12]+"　"+dat1[12]+"<br>")
      document.getElementById("rire3").innerHTML =(team2+"<br>投球回 三振　失点<br>"+re2[0]+" "+Math.floor((siten2[0]*27)/(toukai2[0]*3)*100)/100+" "+toukai2[0]+" "+sansin2[0]+"  "+siten2[0]+"<br>"+re2[1]+" "+Math.floor((siten2[1]*27)/(toukai2[1]*3)*100)/100+" "+toukai2[1]+" "+sansin2[1]+"  "+siten2[1]+"<br>"+re2[2]+" "+Math.floor((siten2[2]*27)/(toukai2[2]*3)*100)/100+" "+toukai2[2]+" "+sansin2[2]+"  "+siten2[2]+"<br>"+re2[3]+" "+Math.floor((siten2[3]*27)/(toukai2[3]*3)*100)/100+" "+toukai2[3]+" "+sansin2[3]+"  "+siten2[3]+"<br>"+"打率 打数　安打　2BH   HR 打点<br>"+sen2[0]+" ."+Math.floor(an1[0]/da1[0]*1000)+" "+da2[0]+"  "+an2[0]+"  "+ni2[0]+"  "+hon2[0]+"　"+dat2[0]+"<br>"+sen2[1]+" ."+Math.floor(an2[1]/da2[1]*1000)+" "+da2[1]+"  "+an2[1]+"  "+ni2[1]+"  "+hon2[1]+"　"+dat2[1]+"<br>"+sen2[2]+" ."+Math.floor(an2[2]/da2[2]*1000)+" "+da2[2]+"  "+an2[2]+"  "+ni2[2]+"  "+hon2[2]+"　"+dat2[2]+"<br>"+sen2[3]+" ."+Math.floor(an2[3]/da2[3]*1000)+" "+da2[3]+"  "+an2[3]+"  "+ni2[3]+"  "+hon2[3]+"　"+dat2[3]+"<br>"+sen2[4]+" ."+Math.floor(an2[4]/da2[4]*1000)+" "+da2[4]+"  "+an2[4]+"  "+ni2[4]+"  "+hon2[4]+"　"+dat2[4]+"<br>"+sen2[5]+" ."+Math.floor(an2[5]/da2[5]*1000)+" "+da2[5]+"  "+an2[5]+"  "+ni2[5]+"  "+hon2[5]+"　"+dat2[5]+"<br>"+sen2[6]+" ."+Math.floor(an2[6]/da2[6]*1000)+" "+da2[6]+"  "+an2[6]+"  "+ni2[6]+"  "+hon2[6]+"　"+dat2[6]+"<br>"+sen2[7]+" ."+Math.floor(an2[7]/da2[7]*1000)+" "+da2[7]+"  "+an2[7]+"  "+ni2[7]+"  "+hon2[7]+"　"+dat2[7]+"<br>"+sen2[8]+" ."+Math.floor(an2[8]/da2[8]*1000)+" "+da2[8]+"  "+an2[8]+"  "+ni2[8]+"  "+hon2[8]+"　"+dat2[8]+"<br>"+sen2[10]+" ."+Math.floor(an2[10]/da2[10]*1000)+" "+da2[10]+"  "+an2[10]+"  "+ni2[10]+"  "+hon2[10]+"　"+dat2[10]+"<br>"+sen2[11]+" ."+Math.floor(an2[11]/da2[11]*1000)+" "+da2[11]+"  "+an2[11]+"  "+ni2[11]+"  "+hon2[11]+"　"+dat2[11]+"<br>"+sen2[12]+" ."+Math.floor(an2[12]/da2[12]*1000)+" "+da2[12]+"  "+an2[12]+"  "+ni2[12]+"  "+hon2[12]+"　"+dat2[12]+"<br>")
        hon=""
        out=0
        b1=0
        b2=0
        b3=0
        p1=0
        p2=0
        kai=0
        var i=1
        bat1=0
        bat2=0
        while(i<12){
          pk1[i]=0
          pk2[i]=0
          i++
        }
        var i=1
        while(i<12){
          document.getElementById("kai"+i).innerHTML = ""
          document.getElementById("akai"+i).innerHTML = ""
          i++
        }
        document.getElementById("point1").innerHTML = p1
        document.getElementById("point2").innerHTML = p2
      }
    }
    if (kouso==0){alert("チェンジです")};
    out=0
    b1=0
    b2=0
    b3=0
    osir();
    if (ou=="裏"){
      kai+=1
      ou="表";
      toukai1[rere1]+=1
      if(kai!=0){
        document.getElementById("akai"+kai).innerHTML = pk2[kai]
      }
      document.getElementById("point2").innerHTML = p2
    }else if (ou=="表"){
      ou="裏";
      toukai2[rere2]+=1
      if(kai!=0){
        document.getElementById("kai"+kai).innerHTML = pk1[kai]
      }
      document.getElementById("point1").innerHTML = p1
    }
    document.getElementById("pit").innerHTML = (kai+"回"+ou+"　"+team1 +" "+ p1 +"-"+ p2 +" "+team2+"　OUT"+out)
    if (b1!=0){document.getElementById("base1").style.backgroundColor='#ff0000'}else{document.getElementById("base1").style.backgroundColor='#98fb98'}
    if (b2!=0){document.getElementById("base2").style.backgroundColor='#ff0000'}else{document.getElementById("base2").style.backgroundColor='#98fb98'}
    if (b3!=0){document.getElementById("base3").style.backgroundColor='#ff0000'}else{document.getElementById("base3").style.backgroundColor='#98fb98'}
  }
}