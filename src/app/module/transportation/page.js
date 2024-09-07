'use client'
import React, { useState, useEffect } from 'react';
import ErpHeader from '../../_components/ErpHeader';
import Sidebar from '../../_components/ErpSidebar';

const Transportation = () => {
    // State management for Sidebar collapse and Dark mode
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Retrieve dark mode preference from localStorage
        const savedMode = localStorage.getItem('isDarkMode');
        return savedMode === 'true'; // Convert string to boolean
    });

    // Sample data for transportation
    const [transportation, setTransportation] = useState([
        { id: 1, vehicle: 'Truck A', driver: 'John Doe', route: 'Route 1', date: '2024-09-01', cost: 1500 },
        { id: 2, vehicle: 'Truck B', driver: 'Jane Smith', route: 'Route 2', date: '2024-09-02', cost: 2000 },
        { id: 3, vehicle: 'Van A', driver: 'Jim Brown', route: 'Route 3', date: '2024-09-03', cost: 1200 },
        { id: 4, vehicle: 'Van B', driver: 'Emily Davis', route: 'Route 4', date: '2024-09-04', cost: 1800 },
    ]);

    // States for filters and new transportation form
    const [vehicleFilter, setVehicleFilter] = useState('');
    const [driverFilter, setDriverFilter] = useState('');
    const [routeFilter, setRouteFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');
    const [costFilter, setCostFilter] = useState('');
    const [newTransportation, setNewTransportation] = useState({ vehicle: '', driver: '', route: '', date: '', cost: '' });
    const [editTransportationId, setEditTransportationId] = useState(null);

    // Filtered data based on filters
    const filteredTransportation = transportation.filter(item => {
        return (
            (vehicleFilter === '' || item.vehicle.includes(vehicleFilter)) &&
            (driverFilter === '' || item.driver.includes(driverFilter)) &&
            (routeFilter === '' || item.route.includes(routeFilter)) &&
            (dateFilter === '' || item.date.includes(dateFilter)) &&
            (costFilter === '' || item.cost.toString().includes(costFilter))
        );
    });

    // Function to handle adding new transportation entry
    const handleAddTransportation = () => {
        if (newTransportation.vehicle && newTransportation.driver && newTransportation.route && newTransportation.date && newTransportation.cost) {
            setTransportation([
                ...transportation,
                { ...newTransportation, id: transportation.length + 1 }
            ]);
            setNewTransportation({ vehicle: '', driver: '', route: '', date: '', cost: '' });
        } else {
            alert("Please fill in all fields!");
        }
    };

    // Function to handle updating transportation entry
    const handleUpdateTransportation = () => {
        if (editTransportationId !== null) {
            setTransportation(transportation.map(item =>
                item.id === editTransportationId ? { ...newTransportation, id: item.id } : item
            ));
            setEditTransportationId(null);
            setNewTransportation({ vehicle: '', driver: '', route: '', date: '', cost: '' });
        }
    };

    // Function to handle deleting transportation entry
    const handleDeleteTransportation = (id) => {
        if (window.confirm("Are you sure you want to delete this transportation entry?")) {
            setTransportation(transportation.filter(item => item.id !== id));
        }
    };

    // Function to handle editing transportation entry
    const handleEditTransportation = (item) => {
        setNewTransportation(item);
        setEditTransportationId(item.id);
    };

    // Toggle dark mode and save to localStorage
    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('isDarkMode', newMode.toString()); // Save preference to localStorage
    };

    // Effect to initialize dark mode from localStorage
    useEffect(() => {
        const savedMode = localStorage.getItem('isDarkMode');
        if (savedMode) {
            setIsDarkMode(savedMode === 'true');
        }
    }, []);

    return (
        <>
            <ErpHeader onDarkModeChange={toggleDarkMode} /> {/* Pass state updater to Header */}
            <Sidebar 
                onCollapseChange={setIsSidebarCollapsed} 
                isDarkMode={isDarkMode} // Pass isDarkMode state to Sidebar
            />
            <div className={`transition-all duration-300 ${isSidebarCollapsed ? 'ml-0' : 'ml-[220px]'} mt-[90px] p-8 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100'} min-h-screen`}>
                <div className={`w-full max-w-6xl mx-auto p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
                    <h2 className="text-center text-2xl font-semibold mb-6">Transportation Management</h2>

                    {/* Add Transportation Button */}
                    <div className="flex justify-end mb-4">
                        <button
                            className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600"
                            onClick={handleAddTransportation}
                        >
                            Add Transportation
                        </button>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-4 mb-6">
                        <input
                            type="text"
                            placeholder="Filter by Vehicle"
                            value={vehicleFilter}
                            onChange={(e) => setVehicleFilter(e.target.value)}
                            className={`p-2 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} border rounded shadow w-full sm:w-1/4`}
                        />

                        <input
                            type="text"
                            placeholder="Filter by Driver"
                            value={driverFilter}
                            onChange={(e) => setDriverFilter(e.target.value)}
                            className={`p-2 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} border rounded shadow w-full sm:w-1/4`}
                        />

                        <input
                            type="text"
                            placeholder="Filter by Route"
                            value={routeFilter}
                            onChange={(e) => setRouteFilter(e.target.value)}
                            className={`p-2 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} border rounded shadow w-full sm:w-1/4`}
                        />

                        <input
                            type="date"
                            value={dateFilter}
                            onChange={(e) => setDateFilter(e.target.value)}
                            className={`p-2 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} border rounded shadow w-full sm:w-1/4`}
                        />

                        <input
                            type="number"
                            placeholder="Filter by Cost"
                            value={costFilter}
                            onChange={(e) => setCostFilter(e.target.value)}
                            className={`p-2 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} border rounded shadow w-full sm:w-1/4`}
                        />
                    </div>

                    {/* New Transportation Form */}
                    <div className={`bg-white p-4 rounded-lg shadow-md mb-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
                        <h3 className="text-lg font-semibold mb-4">{editTransportationId ? 'Update Transportation' : 'Add New Transportation'}</h3>
                        <div className="flex flex-wrap gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="Vehicle"
                                value={newTransportation.vehicle}
                                onChange={(e) => setNewTransportation({ ...newTransportation, vehicle: e.target.value })}
                                className={`p-2 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} border rounded shadow w-full sm:w-1/2`}
                            />
                            <input
                                type="text"
                                placeholder="Driver"
                                value={newTransportation.driver}
                                onChange={(e) => setNewTransportation({ ...newTransportation, driver: e.target.value })}
                                className={`p-2 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} border rounded shadow w-full sm:w-1/2`}
                            />
                            <input
                                type="text"
                                placeholder="Route"
                                value={newTransportation.route}
                                onChange={(e) => setNewTransportation({ ...newTransportation, route: e.target.value })}
                                className={`p-2 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} border rounded shadow w-full sm:w-1/2`}
                            />
                            <input
                                type="date"
                                value={newTransportation.date}
                                onChange={(e) => setNewTransportation({ ...newTransportation, date: e.target.value })}
                                className={`p-2 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} border rounded shadow w-full sm:w-1/2`}
                            />
                            <input
                                type="number"
                                placeholder="Cost"
                                value={newTransportation.cost}
                                onChange={(e) => setNewTransportation({ ...newTransportation, cost: e.target.value })}
                                className={`p-2 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} border rounded shadow w-full sm:w-1/2`}
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600"
                                onClick={editTransportationId ? handleUpdateTransportation : handleAddTransportation}
                            >
                                {editTransportationId ? 'Update Transportation' : 'Add Transportation'}
                            </button>
                        </div>
                    </div>

                    {/* Transportation Table */}
                    <div className={`bg-white p-4 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b bg-gray-100">
                                    <th className="py-2 px-4 text-left">Vehicle</th>
                                    <th className="py-2 px-4 text-left">Driver</th>
                                    <th className="py-2 px-4 text-left">Route</th>
                                    <th className="py-2 px-4 text-left">Date</th>
                                    <th className="py-2 px-4 text-left">Cost</th>
                                    <th className="py-2 px-4 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredTransportation.map((item) => (
                                    <tr key={item.id} className="border-b hover:bg-gray-100">
                                        <td className="py-2 px-4">{item.vehicle}</td>
                                        <td className="py-2 px-4">{item.driver}</td>
                                        <td className="py-2 px-4">{item.route}</td>
                                        <td className="py-2 px-4">{item.date}</td>
                                        <td className="py-2 px-4">{item.cost.toLocaleString()}</td>
                                        <td className="py-2 px-4 flex space-x-2">
                                            <button
                                                onClick={() => handleEditTransportation(item)}
                                                className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600"
                                            >
                                                Update
                                            </button>
                                            <button
                                                onClick={() => handleDeleteTransportation(item.id)}
                                                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Transportation;
