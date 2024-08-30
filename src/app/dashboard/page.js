'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ErpHeader from '../_components/ErpHeader'; // Use Next.js router for navigation

const Dashboard = () => {
    const router = useRouter();

    // Data for the last five days
    const lastFiveDaysIncome = [40000, 120000, 39000, 50000, 200000];
    const todayCost = 36;
    const todayIncome = 74;

    // Check for the token on page load
    useEffect(() => {
        const token = localStorage.getItem('token'); // Get the token from localStorage
        
        // Redirect if the token is missing or invalid
        if (token !== 'iamauserfrompc') {
            alert('Access Denied. Invalid token.');
            router.push('/login'); // Redirect to login page or another route
        }
    }, [router]);

    return (
        <>
            <ErpHeader />
            {/* Add padding to the top to avoid overlapping with the fixed header */}
            <div className="w-4/5 mx-auto p-8 pt-32 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-center text-2xl font-semibold mb-6">Dashboard</h2>

                <div className="flex justify-between gap-6 mb-8">
                    {/* Income Column */}
                    <div className="flex-1 p-4 bg-gray-200 rounded-lg shadow-md">
                        <h3 className="text-center text-lg font-medium text-gray-700 mb-4">Last 5 Days Income</h3>
                        <ul className="space-y-2">
                            {lastFiveDaysIncome.map((income, index) => (
                                <li key={index} className={`py-2 rounded-md font-bold text-white text-center ${index === 0 ? 'bg-blue-500' : index === 1 ? 'bg-green-500' : index === 2 ? 'bg-yellow-500' : index === 3 ? 'bg-red-500' : 'bg-teal-500'}`}>
                                    Day {index + 1}: {income.toLocaleString()} K
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Circle with Today's Data */}
                    <div className="flex-1 flex justify-center items-center">
                        {/* Further increase circle size */}
                        <div className="w-56 h-56 flex flex-col justify-center items-center rounded-full bg-white shadow-md" style={{ background: 'conic-gradient(#28a745 0% 74%, #dc3545 74% 100%)' }}>
                            <div className="text-white text-lg font-bold">Today’s Cost: {todayCost}</div>
                            <div className="text-white text-lg font-bold">Today’s Income: {todayIncome}</div>
                        </div>
                    </div>
                </div>

                {/* Sections at the bottom */}
                <div className="grid grid-cols-3 gap-6 mt-6">
                    {['Selling', 'HR & Workers', 'Customer', 'Supplier', 'Stock', 'Purchase'].map((section, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg text-center shadow-md font-semibold text-gray-700 hover:transform hover:-translate-y-1 hover:shadow-lg transition duration-300">
                            {section}
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Dashboard;
