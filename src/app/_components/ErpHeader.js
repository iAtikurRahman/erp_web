import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const ErpHeader = ({ onDarkModeChange }) => {
    const router = useRouter();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Load initial dark mode preference from localStorage
        const savedDarkMode = localStorage.getItem('isDarkMode');
        return savedDarkMode === 'true';
    });

    // Function to handle logout
    const handleLogout = () => {
        router.push('/'); // Redirect to the home page
    };

    // Toggle dark mode
    const toggleDarkMode = () => {
        const newDarkMode = !isDarkMode;
        setIsDarkMode(newDarkMode);
        localStorage.setItem('isDarkMode', newDarkMode); // Save the new dark mode preference
        onDarkModeChange(newDarkMode); // Notify parent about dark mode change
    };

    // Update the theme class in the body element based on the isDarkMode state
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <header className={`fixed top-0 left-0 w-full flex justify-between items-center p-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} shadow-md z-50`}>
            <div className="flex items-center">
                <img src="./asset/logo.jpg" alt="Logo" className="w-10 h-10 mr-2" />
                <span className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>ERP System</span>
            </div>
            <div className="flex items-center space-x-4">
                <button 
                    onClick={toggleDarkMode} 
                    className={`px-3 py-1 rounded transition-colors duration-300 ${
                        isDarkMode 
                            ? 'bg-gray-700 hover:bg-gray-600 text-white'
                            : 'bg-gray-200 hover:bg-gray-300 text-gray-800'
                    }`}
                >
                    {isDarkMode ? 'Light Mode' : 'Dark Mode'}
                </button>
                <div
                    className="relative cursor-pointer"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                >
                    <span className={`px-3 py-1 rounded transition-colors duration-300 ${isDarkMode ? 'hover:bg-white hover:bg-opacity-10 text-white' : 'hover:bg-gray-100 text-gray-800'}`}>Admin</span>
                    {isDropdownOpen && (
                        <div className={`absolute top-8 right-0 ${isDarkMode ? 'bg-gray-700 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-200'} border rounded shadow-md overflow-hidden`}>
                            <Link href="/my_profile/user" className={`block px-4 py-2 ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'} ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                                Profile
                            </Link>
                            <span 
                                className={`block px-4 py-2 cursor-pointer ${isDarkMode ? 'hover:bg-gray-600' : 'hover:bg-gray-100'} ${isDarkMode ? 'text-white' : 'text-gray-800'}`} 
                                onClick={handleLogout}
                            >
                                Logout
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default ErpHeader;
