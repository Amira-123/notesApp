
const yargs = require('yargs');
const notes=require('./notes')
/////////////////add//////////////
yargs.command({
  command:'add',
  describe:'this is add',
  builder:{
    title:{
         describe:"this is title of add",
         demandOption:true,
         type:'string',
    },
    body:{
      describe:"this is body of add",
      demandOption:true,
      type:'string',
    }
  },
  handler:(argv)=>{
    notes.addNote(argv.title,argv.body)

  }
})
////////////////////////////////////////////delete
yargs.command({
  command:'delete',
  describe:'this is delete',
  builder:{
    title:{
      describe:"this is delete title",
      demandOption:true,
      type:'string'
    }
  },
  handler:(argv)=>{
    // console.log('delete note'+argv.title)
    notes.removeNote(argv.title)
  }
})
/////////////////////////////read
yargs.command({
  command:'read',
  describe:'this is read',
  builder:{
     title:{
       describe:'this is read option',
       demandOption:true,
       type:'string',
     }
  },
  handler:(argv)=>{
    // console.log('this is my read note'+ argv.title)
      console.log(notes.readNote(argv.title))
   
  }
})
////////////////////////////////list
yargs.command({
  command:'list',
  describe:'this is list',
  handler:(argv)=>{
    // console.log('this is my list note '+ argv.title)
    notes.listNote(argv.title,argv.body)
  }
})
// console.log(yargs.argv)
yargs.parse()
