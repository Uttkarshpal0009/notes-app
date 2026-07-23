import { useState } from "react";
import "./index.css";
import NoteCard from "./components/NoteCard";

const App = () => {
  const [notes, setNotes] = useState("");
  const [detailedNote, setDetailedNote] = useState("");
  const [task, setTask] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
const [isEditing, setIsEditing] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();

    if (!notes.trim() || !detailedNote.trim()) {
      alert("Please fill all fields!");
      return;
    }

    const noteData = {
  notes,
  detailedNote,
  date: new Date().toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }),
};

if (isEditing) {
  const updatedTask = [...task];
  updatedTask[editIndex] = noteData;
  setTask(updatedTask);

  setIsEditing(false);
  setEditIndex(null);
} else {
  setTask([...task, noteData]);
}
    setNotes("");
    setDetailedNote("");
  };

  const deleteNote = (idx) => {
    setTask(task.filter((_, index) => index !== idx));
  };
  const editNote = (idx) => {
  setNotes(task[idx].notes);
  setDetailedNote(task[idx].detailedNote);

  setEditIndex(idx);
  setIsEditing(true);
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-slate-950 text-white p-6">

      <div className="max-w-7xl mx-auto">

        {/* Header */}

        <div className="text-center mb-12">

          <h1 className="text-5xl font-extrabold">
            📝 Notes Keeper
          </h1>

          <p className="text-gray-400 mt-3">
            Organize your ideas beautifully
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Left */}

          <div className="bg-white/5 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 shadow-2xl">

            <h2 className="text-3xl font-bold mb-8">
              Add New Note
            </h2>

            <form
              onSubmit={submitHandler}
              className="space-y-6"
            >

              <input
                type="text"
                placeholder="Enter note title"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full rounded-xl bg-gray-900 border border-gray-700 px-5 py-4 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                placeholder="Write your thoughts..."
                value={detailedNote}
                onChange={(e) =>
                  setDetailedNote(e.target.value)
                }
                className="w-full h-56 rounded-xl bg-gray-900 border border-gray-700 p-5 resize-none outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                className="w-full py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-blue-600 to-cyan-500 hover:scale-[1.02] transition-all"
              >
                {isEditing ? "💾 Update Note" : "➕ Add Note"}
              </button>

            </form>

          </div>

          {/* Right */}

          <div className="bg-white/5 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 shadow-2xl">

            <div className="flex justify-between items-center mb-8">

              <h2 className="text-3xl font-bold">
                Your Notes
              </h2>

              <span className="bg-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                {task.length} Notes
              </span>

            </div>

            {task.length === 0 ? (

              <div className="h-80 flex flex-col justify-center items-center text-center text-gray-400">

                <div className="text-7xl">
                  📝
                </div>

                <h3 className="text-2xl font-bold mt-3">
                  No Notes Yet
                </h3>

                <p className="mt-2">
                  Create your first note.
                </p>

              </div>

            ) : (

              <div className="grid md:grid-cols-2 gap-6">

                {task.map((elem, idx) => (

                <NoteCard
  key={idx}
  note={elem.notes}
  description={elem.detailedNote}
  date={elem.date}
  onDelete={() => deleteNote(idx)}
  onEdit={() => editNote(idx)}
/>

                ))}

              </div>

            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default App;