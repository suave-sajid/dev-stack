export default function MyStackPanel({ addStack, onRemove, onRemoveAll }) {
  return (
    <div className="max-w-xs w-full lg:flex-shrink-0 md:flex-shrink-0 lg:sticky lg:top-18 lg:max-h-[calc(100vh-6rem)] md:sticky md:top-20 md:max-h-[calc(100vh-6rem)] sm:sticky sm:top-20 sm:max-h-[calc(100vh-6rem)]   flex flex-col overflow-y-auto bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
      {/* Header */}
      <h3 className="text-lg font-semibold text-gray-900 mb-1">Your Stack</h3>
      <p className="text-sm text-gray-400 mb-5">
        {addStack.length} Technology Selected
      </p>

      {/* Selected items */}
      <div className="flex flex-col gap-3 mb-6">
        {addStack.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border border-gray-100 rounded-xl px-4 py-3"
          >
            <div className="flex items-center gap-3">
              <img src={item.icon} alt={item.name} className="w-8 h-8" />
              <div>
                <p className="text-sm font-medium text-gray-900">{item.name}</p>
                <p className="text-xs text-gray-400">{item.category}</p>
              </div>
            </div>
            <button
              onClick={() => onRemove(item.id)}
              className=" cursor-pointer text-gray-300 hover:text-gray-500 transition"
              aria-label={`Remove ${item.name}`}
            >
              X
            </button>
          </div>
        ))}

        {addStack.length === 0 && (
          <p className="text-sm text-gray-400 text-center py-6">
            No technology selected yet.
          </p>
        )}
      </div>

      {/* Remove all */}
      {addStack.length > 0 && (
        <button
          onClick={() => onRemoveAll()}
          className="w-full h-11 rounded-xl border border-red-200 text-red-500 text-sm font-semibold hover:bg-red-50 active:scale-[0.98] transition"
        >
          Remove All
        </button>
      )}
    </div>
  );
}
