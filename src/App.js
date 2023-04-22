import NotesList from './components/NotesList';
import {useState}from 'react';
import {nanoid}from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';


const App=()=>
{
  const[notes,setNotes]=useState([{
       id:nanoid(),
       text:"this is my first note!",
       date:"21/01/2023"
  
  },
]);
 const [searchText,setSearchText]=useState('');
 
 const[darkMode,SetDarkMode]=useState(false);

const addNote=(text)=>{
    const date=new Date();
    const newNote={
        id:nanoid(),
        text:text,
        date:date.toLocaleDateString()
    }
    const newNotes=[...notes,newNote];
     setNotes(newNotes);
};


const deleteNote=(id)=>{
   const newNotes= notes.filter((note)=>note.id !==id);
    setNotes(newNotes);
}


  return (
    <div className={`${darkMode && 'dark-mode'}`}>
        <div className='container'>
    <Header handleToggleDarkMode={SetDarkMode}/>
    <Search handlSearchNote={setSearchText}/>
    <NotesList
     notes={notes.filter((note)=>
      note.text.toLowerCase().includes(searchText))}
     handleAddNote={addNote}
     handleDeleteNote={deleteNote}/>
  </div>
    </div>

  );

};
export default App;