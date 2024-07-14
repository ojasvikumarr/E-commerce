// components/SearchDropdown.js
import { motion, AnimatePresence } from "framer-motion";

export default function SearchDropdown({ results, onSelect }) {
  return (
    <div className="absolute top-12 left-0 right-0 bg-white shadow-md rounded-md z-50 max-h-64 overflow-y-auto">
      {results.length > 0 ? (
        results.map((result) => (
          <div
            key={result._id}
            className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            onClick={() => onSelect(result.name)}
          >
            {result.name}
          </div>
        ))
      ) : (
        <div className="px-4 py-2 text-gray-500">No results found</div>
      )}
    </div>
  );
}
