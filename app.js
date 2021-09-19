const yargs = require('yargs');
const notes = require('./notes.js');

yargs.command({
    command : 'add',
    describe: "Adding a Note",
    builder: {
        title : {
            describe: 'Note Title',
            demandOption: true,
            type : 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type : 'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body);		
    }
})

yargs.command({
    command : 'remove',
    describe: "Removing a Note",
    builder: {
        title : {
            describe: 'Note Title',
            demandOption: true,
            type : 'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title);		
    }
})

yargs.command({
    command : 'list',
    describe: "Listing a Note",
    handler: function(argv){
        notes.listNotes();		
    }
})

yargs.command({
    command : 'read',
    describe: "Reading a Note",
    builder: {
        title : {
            describe: 'Note Title',
            demandOption: true,
            type : 'string'
        }
    },
    handler: function(argv){
        notes.readNote(argv.title);		
    }
})


yargs.parse();