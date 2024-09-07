'use client';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import ErpHeader from '../_components/ErpHeader'; // Import Header component
import Sidebar from '../_components/ErpSidebar'; // Import Sidebar component
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
    const router = useRouter();
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        // Load dark mode preference from localStorage in the browser only
        const savedDarkMode = typeof window !== 'undefined' ? localStorage.getItem('isDarkMode') : null;
        setIsDarkMode(savedDarkMode === 'true');

        // Check authentication token
        const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
        if (token !== 'iamauserfrompc') {
            alert('Access Denied. Invalid token.');
            router.push('/');
        }
    }, [router]);

    const handleDarkModeChange = (newDarkMode) => {
        setIsDarkMode(newDarkMode);
        if (typeof window !== 'undefined') {
            localStorage.setItem('isDarkMode', newDarkMode);
        }
    };

    // Data
    const totalRevenue = 45231.89;
    const subscriptions = 2350;
    const sales = 12234;
    const activeNow = 573;

    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Revenue',
                data: [3000, 1500, 4500, 5000, 1800, 4000, 6000, 5500, 4500, 3000, 2000, 3500],
                backgroundColor: '#4a90e2',
            },
        ],
    };

    const recentSales = [
        { name: 'Olivia Martin', email: 'olivia.martin@email.com', amount: 1999.0, avatar: '/asset/pic.jpg' },
        { name: 'Jackson Lee', email: 'jackson.lee@email.com', amount: 1999.0, avatar: '/asset/pic1.jpg' },
        { name: 'Isabella Nguyen', email: 'isabella.nguyen@email.com', amount: 39.0, avatar: '/asset/pic2.jpg' },
        { name: 'William Kim', email: 'will@email.com', amount: 299.0, avatar: '/asset/pic3.jpg' },
        { name: 'Sofia Davis', email: 'sofia.davis@email.com', amount: 39.0, avatar: '/asset/pic4.jpg' },
    ];

    return (
        <>
            <ErpHeader onDarkModeChange={handleDarkModeChange} />
            <Sidebar 
                onCollapseChange={setIsSidebarCollapsed} 
                isDarkMode={isDarkMode}
            />

            {/* Main content starts below the header */}
            <div className={`flex flex-col items-center min-h-screen transition-all duration-300 mt-[120px] ${isSidebarCollapsed ? 'ml-0' : 'ml-[220px]'}`}>
                <div className={`w-full max-w-7xl p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100'}`}>
                <h2 className="text-center text-2xl font-semibold mb-6">Dashboard</h2>
                    
                    {/* Top Stats */}
                    <div className="grid grid-cols-4 gap-6 mb-8">
                        <div className={`p-4 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                            <h3 className="text-lg font-medium">Total Revenue</h3>
                            <p className="text-2xl font-bold">${totalRevenue.toLocaleString()}</p>
                            <p className="text-sm text-green-500">+20.1% from last month</p>
                        </div>
                        <div className={`p-4 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                            <h3 className="text-lg font-medium">Subscriptions</h3>
                            <p className="text-2xl font-bold">+{subscriptions}</p>
                            <p className="text-sm text-green-500">+180.1% from last month</p>
                        </div>
                        <div className={`p-4 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                            <h3 className="text-lg font-medium">Sales</h3>
                            <p className="text-2xl font-bold">+{sales.toLocaleString()}</p>
                            <p className="text-sm text-green-500">+19% from last month</p>
                        </div>
                        <div className={`p-4 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-700' : 'bg-white'}`}>
                            <h3 className="text-lg font-medium">Active Now</h3>
                            <p className="text-2xl font-bold">+{activeNow}</p>
                            <p className="text-sm text-green-500">+201 since last hour</p>
                        </div>
                    </div>

                    {/* Flex Container for Parallel Sections */}
                    <div className="flex gap-8">
                        {/* Overview Graph */}
                        <div className="w-1/2 mb-8 h-[100px]" >
                            <h3 className="text-lg font-medium mb-4">Overview</h3>
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <Bar data={chartData} />
                            </div>
                        </div>

                        {/* Recent Sales */}
                        <div className="w-1/2">
                            <h3 className="text-lg font-medium mb-4">Recent Sales</h3>
                            <ul className="space-y-4">
                                {recentSales.map((sale, index) => (
                                    <li key={index} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md">
                                        <div className="flex items-center">
                                            <img src={sale.avatar} alt={sale.name} className="w-10 h-10 rounded-full mr-4" />
                                            <div>
                                                <p className="font-bold">{sale.name}</p>
                                                <p className="text-sm text-gray-500">{sale.email}</p>
                                            </div>
                                        </div>
                                        <p className="font-bold">${sale.amount.toLocaleString()}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Dashboard;
