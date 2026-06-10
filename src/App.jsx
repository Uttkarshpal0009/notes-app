import { useState } from 'react';
import '../src/index.css'
const App = () => {
   
  const [notes, setNotes] = useState('');
   const [detailedNote, setDetailedNote] = useState('');
   const [task, setTask] = useState([]);
  
   const submitHandler = (e) => {
    e.preventDefault();
    
    const copyTask = [...task];
    copyTask.push({ notes, detailedNote });
    
    setTask(copyTask);
    console.log(copyTask);
    
    setNotes('');
    setDetailedNote('');
    

     const deleteNote = (idx) => {
    const copyTask = [...task];

        copyTask.splice(idx, 1)
        setTask(copyTask)
  }
  }

  const deleteNote = (idx) => {
    const copyTask = [...task];

    copyTask.splice(idx, 1)

    setTask(copyTask)
  }
   
  return (
  
    <div className='h-screen lg:flex bg-black text-white flex justify-center gap-20 border-none self-start'>
      <form 
      onSubmit={(e)=>{submitHandler(e)}} 
      className='flex flex-col lg:w-1/2 p-1 gap-5 rounded-xl h-[400px] '>
        {/*input note */}
        <h1 className="text-xl font-bold">Add Notes</h1>
        <input className='py-4 px-3 border-2 rounded-lg outline-none w-[400px]' type="text" placeholder="Write a note... " 
        value={notes}
        onChange={(e) => setNotes(e.target.value)} />
         
        
        {/* detailed note */}
        <textarea className='p-1  border-2 rounded-lg h-60 resize-none' placeholder=" write here..." 
        value={detailedNote}
        onChange={(e) => {setDetailedNote(e.target.value)}} />
      <button className='py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 active:bg-blue-700'>Add Note</button>
      
      </form>
      <div className="flex flex-col p-1 lg:w-1/2 rounded-xl ml-2 h-auto overflow-auto">
      <h1 className="text-xl font-bold" >Recent Notes</h1>
        
       {task.map(function (elem, idx) {

            return <div key={idx} className=" flex justify-between flex-col items-start relative h-52 w-40 bg-cover rounded-xl text-black pt-9 pb-4 px-4 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')]">
              <div>
                <h3 className='leading-tight text-lg font-bold'>{elem.notes}</h3>
                <p className='mt-2 leading-tight text-xs font-semibold text-gray-600'>{elem.detailedNote}</p>
              </div>  
          
          <button onClick={() => {
                deleteNote(idx)
              }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
            </div>
       })}
      </div>
    </div>
  )
}

export default App
