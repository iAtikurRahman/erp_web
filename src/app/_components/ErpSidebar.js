import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HiArrowLeft, HiArrowRight } from 'react-icons/hi'; // Assuming you're using react-icons

const Sidebar = ({ onCollapseChange, isDarkMode }) => {  // Accept isDarkMode as a prop
    const pathname = usePathname(); // Get the current path
    const [isCollapsed, setIsCollapsed] = useState(false);

    const menuItems = [
        { label: 'Dashboard', link: '/dashboard' },
        { label: 'Sale', link: '/module/sale' },
        { label: 'HR & Workers', link: '/module/administration' },
        { label: 'Customer', link: '/module/customer' },
        { label: 'Supplier', link: '/module/supplier' },
        { label: 'Stock', link: '/module/stock' },
        { label: 'Purchase', link: '/module/purchase' },
        { label: 'Product', link: '/module/product' },
        { label: 'Transportation', link: '/module/transportation' },
        { label: 'Account', link: '/module/account' },
    ];

    const handleCollapseToggle = () => {
        setIsCollapsed(!isCollapsed);
        onCollapseChange(!isCollapsed); // Notify parent of the collapse change
    };

    return (
        <div className={`fixed top-[72px] left-0 transition-all duration-300 ${isCollapsed ? 'w-[10%] translate-x-[-90%]' : 'w-[200px] translate-x-0'} ${isDarkMode ? 'bg-gray-800' : 'bg-white'} p-2 shadow-lg h-[calc(100vh-72px)] z-40`}>
            <button 
                onClick={handleCollapseToggle} 
                className={`absolute right-[-20px] top-1/2 transform -translate-y-1/2 p-2 rounded-full border focus:outline-none shadow-md ${isCollapsed ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
                style={{ zIndex: 50 }}
            >
                {isCollapsed ? <HiArrowRight /> : <HiArrowLeft />}
            </button>
            <ul className={`space-y-2 ${isCollapsed ? 'hidden' : 'block'}`}>
                {menuItems.map((section, index) => (
                    <li key={index}>
                        <Link href={section.link}>
                            <div className={`p-2 rounded-lg text-center font-semibold cursor-pointer transition duration-200 ${
                                pathname === section.link 
                                    ? isDarkMode ? 'bg-blue-500 text-white' : 'bg-blue-500 text-white' 
                                    : isDarkMode ? 'bg-gray-700 text-gray-200 hover:bg-gray-600' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}>
                                {!isCollapsed && section.label}
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
