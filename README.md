# nowpages
the resources i use to make my /now page

# use
basically, initialize a repo on your hard drive, place the scripts there, and then run the python script to get and push the files. you may have to add some of the files to the repo manually the first time, but once theyre added, it should all be good. you can automate running that python file in many ways, and there are also alternative ways to get the jsons in the first place. 


# steam.py
steam.py is the file that gets my steam stuff. there are a few variables at the start of the file. replace these with your values for your API id and your user id.

# javascript
my now page uses javascript to process the json files. 
for an example, see the now.js file inculded.

## latest achievements
to list latest steam achivements in your now page, start by using $.getJSON to grab the 'achievements' json file (replace it with your repo) and put it in a function. everything we'll do happens inside that function. this also lists your latest played games.
```JavaScript
$.getJSON('https://raw.githubusercontent.com/ZerosLab/transitionary/main/achievements.json', function(test) {
STUFF
}
```


Additionally, create an empty object. 
```
achieves={};
```
open up a for.. in loop, going through the function input. 
```
for (let x in test){
```
then, make an object with the same number of values as achievements you wish to display, like this:
```
start={0:{'unlocktime': 0},1:{'unlocktime': 0},2:{'unlocktime': 0}};
```
Then, we want to iterate through all the achivements the json spit out. if you used my code to get the data, itll already be cleaned up a bit, so itll only have achivements youve obtained, and we wont have to clean it further 
```
for (let y in test[x]){
```
finally, we do the last bit of filtering, removing the perfection indicator. the program i use adds a field that indicates whether a game is perfected, and these first if statements filter those data points out. theyll be used later for displaying perfection. 
```
if (test[x][y]=="false"){}
else if (test[x][y=="true"]){}
```
now, go through and make else if statements going through, here we're inserting the achivement objects into `start`, as well as shifting the other entries down. im sure theres a better way to do this, but this is how ive been doing it.
```
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
```

i lied about that being the last filtering, theres one more filter, its for a deprecated field just put it in, i keep meaning to remove it from my program but its in there. 
```
if (x=="analysis"){}
```
in the else statement, add the `achives` object to `start`
```
else{
achieves[x]=start;
}
```
now, its time to string together the actual inner html code to display the achivements
innertext is the internal html code for this 
```
innertext="<ul><li'>";
```
now, iterate through achieves, adding the game name and some html code
```
    for (let x in achieves){
      innertext += ("<b>"+x + "</b><br><ul>");
```
then, inside this for loop, iterate again through all the sub-objects - the individual achivements. this part also adds html tags and the description. once youre outside the for loop, add some ending tags.
```
      for (let y in achieves[x]){
        innertext += "<li>";
        innertext += achieves[x][y].name;
        innertext += "<ul><li>";
        innertext += achieves[x][y].description +"</ul>";
        }
        innertext += "<br><br></ul>";
        }
```
finally, push innertext to the html document
```
document.getElementById("steamgames").innerHTML = (innertext);
});
```
make sure you end the function :3
## books.json
This one's manual. It's currently just books, but it will contain shows, movies, music, and audio stories once i finish it. It's manually created, its a json file, theres objects (books, shows, movies, music, or audio)that have arrays as their second component. these arrays are made up of objects, so far its just books, they have the following properties:
- title: self-explanitory, its the title
- author: also pretty self-explanator, its the author. in the cases of translated works, this is the author *of the original work, not the translator*.
- rating: also pretty self-explanator, its my personal rating of the book. by default, its ??/10, to be replaced with a number 0-10, or with an abstract description, a la Josh Strife Hayes' Worst MMOs ratings.
- year: year of publication. inconsistent on whether original year or edition year, because i cant bring myself to care
- shelf: whether i own it physically, can be true, false, or desired
- tbr: whether an object is on my tbr list, can be true, false, or completed.
then there are some fields only some books have
- translaor: translator of the texts
- artist: whoever did the art, typically for a comic book or set thereof. 

### Shows
tv shows i want to or have watched. 
- title
- publishing company
- showrunner
- rating. this one is an array itself, with season by season ratings. some shows i might rate episode by episode, but only if i consciously decide to do episode by episode reviews.
- year, specifically the start year.

### Movies
- title
- director
- year
- rating
- additional fields may be added if a certain actor or member of the crew is notable (for example, if Nick Cage is in the movie, he'll be in an 'actors' field)

### Music
this is my music collection, its also on my discogs,
- title
- artist: the main artist of the album
- contributing: any contributing artists
- label: record label
- year: year of release
- format: format
- ctlg: catalog number
- rating: same as books rating 

### Audio
these are audio dramas, mostly big finish. 
- title
- author
- production company
- year

