const myObject ={
    js: 'javascript', 
    cp: 'c++',
    rb:  'ruby',
    swift: 'swift by apple'
}

    for (const key in myObject) {
       // console.log(`${key} shortcut is for ${myObject[key]}`);
        
    }
    const programming = ['js','cp','rb','java','py']
    for (const key in programming) {
           // console.log(programming[key]); 
            //this will run the requiered results

        }
    
const programmingLang = ["java","c++","ruby","java","pythone"]
        for (const key in programmingLang) {
            //console.log(programmingLang[key]);
                
            }
const map = new Map()
map.set('PK','Pakistan')
map.set('AF','Afgahanistan')
map.set('AUS','Austrila')
map.set('NZ','Newziland') 

for (const [key, val] of map) {
   // console.log(key, ':-', val); 
}
for (const key in map) {
    console.log(key)
    
}