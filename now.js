


//var obj='{"nul":"nul"}';

//dict = [];


//$.getJSON('https://raw.githubusercontent.com/ZerosLab/transitionary/main/steam.json', function(data) {
    // JSON result in `data` variable

//response = (data.response);


//array = response.games;


//text = "";

//for (let x in array){
//text += data.response.games[x].name + "<br>";



//dict[x]=data.response.games[x].appid;




//}







//});





 
$.getJSON('https://raw.githubusercontent.com/ZerosLab/transitionary/main/achievements.json', function(test) {
    // JSON result in `data` variable
    start={0:{'unlocktime': 0},1:{'unlocktime': 0},2:{'unlocktime': 0}};
    //console.log("okay");
    
    
    //console.log(test);
    
     achieves={};
  for (let x in test){
    start={0:{'unlocktime': 0},1:{'unlocktime': 0},2:{'unlocktime': 0}};
    for (let y in test[x]){
   //   console.log(test[x][y]);
     
      
    if (test[x][y]=="false"){}
    else if (test[x][y=="true"]){}
    
    else if (test[x][y].unlocktime>start[0].unlocktime){
      start[2]=start[1];start[1]=start[0];
      start[0]=test[x][y];
      }
    else if (start[1].unlocktime<test[x][y].unlocktime<start[0].unlocktime){
      start[2]=start[1];
      start[1]=test[x][y];
      }
    else if(start[2].unlocktime<test[x][y].unlocktime<start[1].unlocktime){
      start[2]=test[x][y];
      }
    // console.log(x);
      
      
      
      }
    if (x=="analysis"){}
    else{
    achieves[x]=start;
    }
    
    
    }//console.log(achieves);
    
     innertext="<ul><li'>";
    for (let x in achieves){
      innertext += ("<b>"+x + "</b><br><ul>");
      
      for (let y in achieves[x]){
        innertext += "<li>";
        innertext += achieves[x][y].name;
        innertext += "<ul><li>";
        innertext += achieves[x][y].description +"</ul>";
        
         
        }
        
        innertext += "<br><br></ul>";
        }
    
    
    
   
    
document.getElementById("testing").innerHTML = (innertext);


});




//
//
//  const response = await fetch("http://example.com/movies.json"));
//  const jsonData = await response.json());
//  console.log(jsonData);
