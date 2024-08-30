'use client'
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import ErpHeader from '../_components/ErpHeader'; // Use Next.js router for navigation
import '../dashboard/page.css'; // Import the CSS file

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
        <div className="dashboard-container">
        <ErpHeader/>
            <h2>Dashboard</h2>

            <div className="dashboard-content">
                {/* Income Column */}
                <div className="income-column">
                    <h3>Last 5 Days Income</h3>
                    <ul>
                        {lastFiveDaysIncome.map((income, index) => (
                            <li key={index}>
                                Day {index + 1}: {income.toLocaleString()} K
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Circle with Today's Data */}
                <div className="today-data-circle">
                    <div>Today's Cost: {todayCost}</div>
                    <div>Today's Income: {todayIncome}</div>
                </div>
            </div>

            {/* Sections at the bottom */}
            <div className="sections-container">
                {['Selling', 'HR & Workers', 'Customer', 'Supplier', 'Stock', 'Purchase'].map((section, index) => (
                    <div key={index} className="section-box">
                        {section}
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default Dashboard;
