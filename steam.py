import os
import json
import time

key='XXXXXXXXXXXXXXX'
steamid=str('XXXXXXXXXXX')
lang="en"




getsteam="wget -O steam.json 'http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key="+key+"&steamid=76561198303443035&l="+lang+"&format=json'"

os.system(getsteam)









with open('steam.json', encoding="utf-8") as f:
		read_data = f.read()
		f = json.loads(read_data)


upppp = {"array" : "null"}







t =(f["response"])

g=(t["games"])

aid="x"


os.system('rm achievements.json')
os.system('rm stasis.json')


os.system('touch achievements.json')
		
		
with open('achievements.json', 'a', encoding="utf-8") as f:
	f.write('{')
	f.close()


for x in g:
	aid = str(x['appid'])
	print(aid)
	getachieve="wget -O stasis.json 'http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid="+aid+"&key="+key+"&steamid="+steamid+"&l="+lang+"&format=json'"
	os.system(getachieve)
	with open('stasis.json', 'r', encoding="utf-8") as f: 
		x = f.read()
		y = json.loads(x)
	with open('achievements.json', 'a', encoding="utf-8") as f: 
		f.write('"'+y['playerstats']["gameName"]+'":{')
		#print('"'+y['playerstats']["gameName"]+'":')
	internal = y["playerstats"]["achievements"]
	#print(internal)
	for g in internal:
		print (g["name"])
		g["name"]=g["name"].replace("'", '')
		g["name"]=g["name"].replace('"', '')
		g["description"]=g["description"].replace("'", '')
		g["description"]=g["description"].replace('"', '')
		print (g["name"])
	
	
	achlist={}	
	for innr in internal:
		ment=(innr['achieved'])
		if ment == 1:
			with open('achievements.json', 'a', encoding="utf-8") as f:
				f.write('"'+innr['apiname']+'":'+str(innr)+",")
				f.close()
				print (innr)
		else:
			perfect='"false"'
			
		
			
			
			
			
			
			
		#print(ment)
		#print(achlist)
	#print()
	with open('achievements.json', 'a', encoding="utf-8") as f:
		f.write('"perfect":'+perfect+"},")
		f.close()
	time.sleep(0.5)
	




with open('achievements.json', 'a', encoding="utf-8") as f:
		conc='"analysis":"complete"}'
		f.write(conc)
		f.close()
		print('done')

# Read in the file
with open('achievements.json', 'r') as file :
	filedata = file.read()

# Replace the target string

filedata = filedata.replace("'", '"')






# Write the file out again
with open('achievements.json', 'w') as file:
	file.write(filedata)



os.system('git add achievements.json')

os.system('rm stasis.json')
commit="git commit -m 'update'"

os.system(commit)

push="git push -u origin main"

os.system(push)












