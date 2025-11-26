import React from 'react';

export default function NavButton({ viewName, currentView, setCurrentView }) {
    const isActive = currentView === viewName;
    const baseClasses = "mp-1 w-full py-2 text-white px-4 transition duration-150";
    const activeClasses = "bg-orange-900 shadow-md";
    const inactiveClasses = "hover:bg-gray-400";
    return (
        <button
            onClick={() => setCurrentView(viewName)}
            className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
        >
            {viewName}
        </button>
    );
}

