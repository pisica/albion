import React from 'react';
import HomeView from './views/HomeView';
import DashboardView from './views/DashboardView';
import SettingsView from './views/SettingsView';
import NavButton from './components/NavButton'; // Now imported

export default function App() {
    const [currentView, setCurrentView] = React.useState('Home');

    // Function to render the correct component based on state
    const renderContent = () => {
        switch (currentView) {
            case 'Home': return <HomeView />;
            // ... other cases ...
        }
    };

    return (
        <div className="flex w-full max-w-5xl h-[70vh] rounded-xl shadow-2xl">
            {/* Left Sidebar Menu */}
            <div className="w-1/4 bg-gray-50 p-6 border-r border-gray-200">
                {/* NavButton would be used here, passing down state handlers */}
                <NavButton viewName="Home" currentView={currentView} setCurrentView={setCurrentView} />
                {/* ... other NavButtons ... */}
            </div>

            {/* Main Content Area */}
            <div className="w-3/4 bg-white overflow-y-auto">
                {renderContent()}
            </div>
        </div>
    );
}

