const NoteCard = ({
  note,
  description,
  date,
  onDelete,
  onEdit,
}) => {
  return (
    <div className="group bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-5 shadow-lg hover:shadow-blue-500/30 hover:border-blue-500 transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between min-h-[260px]">

      <div>
        <h3 className="text-2xl font-bold text-cyan-400 break-words">
          {note}
        </h3>

        <p className="mt-4 text-gray-300 leading-7 break-words">
          {description}
        </p>
      </div>

      <div className="mt-6">
        <p className="text-xs text-gray-500 mb-4">
          📅 {date}
        </p>

        {/* 👇 Edit Button yahan add hoga */}

        <button
          onClick={onEdit}
          className="w-full mb-3 rounded-xl bg-gradient-to-r from-yellow-500 to-orange-500 py-3 font-semibold text-white hover:from-yellow-600 hover:to-orange-600 transition-all duration-300"
        >
          ✏️ Edit
        </button>

        {/* 👇 Delete Button iske niche rahega */}

        <button
          onClick={onDelete}
          className="w-full rounded-xl bg-gradient-to-r from-red-500 to-red-600 py-3 font-semibold text-white hover:from-red-600 hover:to-red-700 transition-all duration-300"
        >
          🗑 Delete
        </button>
      </div>
    </div>
  );
};

export default NoteCard;