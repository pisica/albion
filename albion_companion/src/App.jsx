import React from 'react';
import CraftingCalcView from './views/CraftingCalcView';
import GearEnchantCalcView from './views/GearEnchantCalcView';
import NavButton from './components/NavButton';

export default function App() {
    const [currentView, setCurrentView] = React.useState('Crafting Calculator');

    // Function to render the correct component based on state
    const renderContent = () => {
        switch (currentView) {
            case 'Crafting Calculator': return <CraftingCalcView />;
            case 'Gear Enchanting Calculator': return <GearEnchantCalcView />;
        }
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Application Header - Top of the Page */}
            <div className="w-full bg-orange-900 text-gray-100 p-4 flex justify-between items-center shadow-md relative">
                <h1 className="text-2xl font-extrabold tracking-wide text-white">
                  Albion Companion App
                </h1>
            </div>

            <div className="flex flex-grow w-full h-full">
                {/* Left Sidebar Menu */}
                <div className="w-1/6 bg-gray-500 py-6 border-r border-black flex flex-col">
                    {/* NavButton would be used here, passing down state handlers */}
                    <h2 className="text-xl px-4 font-bold text-white mb-2 border-b pb-5 border-black">
                      Navigation
                    </h2>
                    <NavButton viewName="Crafting Calculator" currentView={currentView} setCurrentView={setCurrentView} />
                    <NavButton viewName="Gear Enchanting Calculator" currentView={currentView} setCurrentView={setCurrentView} />
                </div>

                {/* Main Content Area */}
                <div className="w-full text-white bg-gray-600 overflow-y-auto">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
}

