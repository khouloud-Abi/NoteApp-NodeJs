const fs = require('fs');

/* ----------add note---------- */
const addNote=(title,body)=>{
  let notes=[]
  let note={
    title,
    body
  }
  try{
     let noteStr = fs.readFileSync('notes.json')
    notes=JSON.parse(noteStr)
   }catch(e){}
  
  let filtredNotes = notes.filter(note=>note.title===title)
  if(filtredNotes.length==0){
    notes.push(note)
    fs.writeFileSync('notes.json', JSON.stringify(notes))
    console.log('NOTE ADDED')
  }
  else{
    console.log('note already exist')
   }
}


/* ----------list notes---------- */
const listNotes=()=>{
  console.log('LIST NOTES')
  let noteList=JSON.parse(fs.readFileSync("notes.json"))
  console.log(`Printing `+noteList.length+` note(s)`)
  for(let i=0;i<noteList.length;i++)
  {
  console.log("--")
    console.log("Title:",noteList[i].title)
    console.log("Body:",noteList[i].body)
  }
}




/* ----------read note---------- */
  const readNotes = (title) =>{
    const _ = require('lodash')
    let noteList = JSON.parse(fs.readFileSync("notes.json"))
    let index = _.findIndex(noteList, function(o) { return o.title == title; });

    if(index==-1)
    {console.log("note was not found")}
    else{
    console.log("READ NOTE")
     console.log("--")
     console.log("Title:",title)
     console.log("Body:",noteList[index].body)
    }
    }
    


/* ----------remove note---------- */
var removeNote = (title) => {
  const _ = require('lodash')
  let noteList = JSON.parse(fs.readFileSync("notes.json"))
  let index = _.findIndex(noteList, function(o) { return o.title == title; });

  if(index==-1)
  {console.log("note was not found")}
  else{
  let noteList = JSON.parse(fs.readFileSync("notes.json"))
  let listfiltred = noteList.filter(el => {return el.title != title})
  console.log("NOTE REMOVED")
  let data=JSON.stringify(listfiltred)
  fs.writeFileSync("notes.json",data) 
} 
}



module.exports = {
  addNote,
  listNotes,
  readNotes,
  removeNote,
}
