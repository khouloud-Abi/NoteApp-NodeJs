const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
  describe:'Title of note',
  demand: true,
  alias: 't'
};
const bodyOptions = {
  describe:'Body of note',
  demand: true,
  alias: 'b'
};

const argv = yargs
.command('add','Add a new note',{
  title: titleOptions,
  body: bodyOptions
})
.command('list','List all notes')
.command('read','Read a note',{
  title: titleOptions
})
.command('remove','Remove a note',{
  title: titleOptions
})
.help()
.argv;
var command = argv._[0];


if(command === 'add'){
  notes.addNote(argv.title, argv.body);}
else if(command === 'list'){ 
  notes.listNotes() }
else if(command === 'read'){
  notes.readNotes(argv.title)}
else if(command === 'remove'){
  notes.removeNote(argv.title)}
else{
  console.log('Not a valid command for the note app');
}
