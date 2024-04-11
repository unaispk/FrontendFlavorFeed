import React from 'react';

const Searchbar = () => {
  return (
   
      <div className="flex items-center ml-6">
        {/* Search input */}
        <input
          type="text"
          placeholder="Search recipes..."
          className="px-6 py-1 mr-2 border border-gray-600 rounded-md"
        />

        {/* Search button */}
        <button className="px-3 py-1 bg-primary text-white rounded-md">Search</button>
      </div>

     
  );
};

export default Searchbar;
