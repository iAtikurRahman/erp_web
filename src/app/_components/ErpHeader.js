// header.js
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import '../_components/css/ErpHeader.css'; // Import the CSS file

const ErpHeader = () => {
    const router = useRouter();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Function to handle logout
    const handleLogout = () => {
        // Clear any session or localStorage if needed here
        router.push('/'); // Redirect to the home page
    };

    return (
        <header className="erp-header">
            <div className="logo-container">
                <img src="./asset/logo.jpg" alt="Logo" className="logo" /> {/* Replace with your logo URL */}
                <span className="app-name">ERP System</span>
            </div>
            <div
                className="admin-section"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
            >
                <span className="admin-name">Admin</span>
                {isDropdownOpen && (
                    <div className="dropdown-menu">
                        <Link href="/my_profile/user" className="dropdown-item">
                            Profile
                        </Link>
                        <span className="dropdown-item" onClick={handleLogout}>
                            Logout
                        </span>
                    </div>
                )}
            </div>
        </header>
    );
};

export default ErpHeader;
