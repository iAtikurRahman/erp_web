// header.js
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ErpHeader = () => {
    const router = useRouter();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to handle logout
    const handleLogout = () => {
        // Clear any session or localStorage if needed here
        router.push('/'); // Redirect to the home page
    };

    return (
        <header className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-gray-800 text-white shadow-md z-50">
            <div className="flex items-center">
                <img src="./asset/logo.jpg" alt="Logo" className="w-10 h-10 mr-2" /> {/* Replace with your logo URL */}
                <span className="text-lg font-bold">ERP System</span>
            </div>
            <div
                className="relative cursor-pointer"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
            >
                <span className="px-3 py-1 rounded transition-colors duration-300 hover:bg-white hover:bg-opacity-10">Admin</span>
                {isDropdownOpen && (
                    <div className="absolute top-8 right-0 bg-white text-gray-800 border border-gray-200 rounded shadow-md overflow-hidden">
                        <Link href="/my_profile/user" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                            Profile
                        </Link>
                        <span className="block px-4 py-2 text-gray-800 cursor-pointer hover:bg-gray-100" onClick={handleLogout}>
                            Logout
                        </span>
                    </div>
                )}
            </div>
        </header>
    );
};

export default ErpHeader;
