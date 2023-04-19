# nowpages
the resources i use to make my /now page

# use
basically, initialize a repo on your hard drive, place the scripts there, and then run them to get and push the files. you may have to add some of the files to the github manually the first time, but once theyre added, it should all be good. you can automate running that python file in many ways, and there are also alternative ways to get the jsons in the first place. 


# steam.py
steam.py is the file that gets my steam stuff. there are a few variables at the start of the file. replace these with your values for your API id and your user id.

# javascript
my now page uses javascript to process the json files. 
for an example, see the now.js file inculded.
using $.getJSON, grab the 'achievements' json file and put it in a function. everything we'll do happens inside that function. 
```JavaScript
$.getJSON('https://raw.githubusercontent.com/ZerosLab/transitionary/main/achievements.json', function(test) {
STUFF
}
```
## latest achievements





then, initialize a 
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


