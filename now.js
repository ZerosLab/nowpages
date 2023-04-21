

//opens the function
$.getJSON('https://raw.githubusercontent.com/ZerosLab/transitionary/main/achievements.json', function(test) {
    // JSON result in `data` variable
    // initialize the unloctime objecvt
    start={0:{'unlocktime': 0},1:{'unlocktime': 0},2:{'unlocktime': 0}};
    
    //theres a bunch of console.logs around, theyre for monitoring the program when i fuck with it
    //console.log("okay");
    //console.log(test);
    
    //empty objet
     achieves={};
  for (let x in test){
      //reset the object to start state
    start={0:{'unlocktime': 0},1:{'unlocktime': 0},2:{'unlocktime': 0}};
    for (let y in test[x]){
   //   console.log(test[x][y]);
     
      //these are for perfection sruff, i think, i honestly forget what the fields in question do, i need to go back and look at my json
    if (test[x][y]=="false"){
      console.log (test[x][y]);}
    else if (test[x][y]=="true"){
      console.log (test[x][y]);}
    //heres where counting starts. these equalities are very important if you get them even slightly wrong itll fuck with your results. also it doesnt deal with achivements that are done at the same time very well
    else if (test[x][y].unlocktime>=start[0].unlocktime){
      start[2]=start[1];
      start[1]=start[0];
      start[0]=test[x][y];
      
      }
    else if (test[x][y].unlocktime>=start[1].unlocktime){
      
      start[1]=start[0];
      start[1]=test[x][y];
      }
      else if (test[x][y].unlocktime>=start[2].unlocktime){
      
      start[2]=test[x][y];
      }
    // console.log(x);
      
      
      
      }
      //this filters out the analysis:complete field that i append to the json, its basically a monitor for if anything really weird happens when i run my python script but its useless here
    if (x=="analysis"){}
    else{
        //adds a value to that empty object we made back on line 14 or so
    achieves[x]=start;
    }
    
    
    }//console.log(achieves);
    //this just sets up the actual html code, took a while to get this right. feel free to mess with it if you want ur site to look different, just keep in mind that you have to end your tags.
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
    
    
    
   //sets the inner html. i called it testing while i was testing and havent changed it. web development. 
    
document.getElementById("testing").innerHTML = (innertext);


});
