import {ReactComponent as Delete} from '../assests/delete.svg'
const Note=({id,text,date,handleDeleteNote})=>{
    return (
        <div className='note'>
           <span>{text}</span>
               <div className="note-footer">
                    <small>{date}</small>
                  <div onClick={()=>{
                    handleDeleteNote(id)
                  }} > <Delete/>  </div>    
              </div>
           </div>
    );
};
export default Note;
