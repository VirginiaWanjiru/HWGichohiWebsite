// components/DropdownMenu.js
export default function DropdownMenu() {
    return (
      <div className="relative inline-block text-left">
        {/* Menu Button */}
        <div className="dropdown-button">
          <button className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
            Hover Me
          </button>
        </div>
  
        {/* Dropdown Content */}
        <div className="dropdown-content absolute hidden group-hover:block right-0 mt-2 w-56 origin-top-right rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {/* Read-only list items */}
            <p className="block px-4 py-2 text-sm text-gray-700 cursor-not-allowed">Option 1</p>
            <p className="block px-4 py-2 text-sm text-gray-700 cursor-not-allowed">Option 2</p>
            <p className="block px-4 py-2 text-sm text-gray-700 cursor-not-allowed">Option 3</p>
          </div>
        </div>
      </div>
    );
  }
  