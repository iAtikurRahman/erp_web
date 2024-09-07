'use client';
import React, { useState, useEffect } from 'react';
import ErpHeader from '../../_components/ErpHeader';
import Sidebar from '../../_components/ErpSidebar';

const Administration = () => {
    // State for members data
    const [members, setMembers] = useState([]);
    const [loading, setLoading] = useState(true); // State for loading
    const [error, setError] = useState(null); // State for errors
    const [showModal, setShowModal] = useState(false); // State for modal visibility
    const [currentMember, setCurrentMember] = useState(null); // State for the currently selected member

    // State for Sidebar collapse and Dark mode
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Load initial dark mode preference from localStorage
        const savedDarkMode = localStorage.getItem('isDarkMode');
        return savedDarkMode === 'true';
    });

    // Fetch members data from the API
    useEffect(() => {
        const fetchMembers = async () => {
            try {
                const response = await fetch('/api/auth/user?limit=10&page=1');
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                if (data && data.members) {
                    setMembers(data.members);
                } else {
                    setMembers([]); // Set to empty array if no members found
                }
            } catch (err) {
                setError(err.message || 'An error occurred');
                setMembers([]); // Ensure members is set to an empty array in case of error
            } finally {
                setLoading(false); // Stop loading spinner
            }
        };

        fetchMembers();
    }, []);

    // Function to handle adding a new member
    const handleAddMember = () => {
        setShowModal(true);
        setCurrentMember(null); // Clear the current member state for adding a new member
    };

    // Function to handle updating a member
    const handleUpdateMember = (member) => {
        setShowModal(true);
        setCurrentMember(member); // Set the current member for updating
    };

    // Function to handle deleting a member
    const handleDeleteMember = async (id) => {
        try {
            const response = await fetch(`/api/users/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                setMembers(members.filter((member) => member.id !== id)); // Remove the deleted member from state
                alert(`Member with ID: ${id} deleted successfully`);
            } else {
                const data = await response.json();
                alert(`Failed to delete member: ${data.message}`);
            }
        } catch (err) {
            alert(`Error deleting member: ${err.message}`);
        }
    };

    // Function to handle form submission for adding/updating a member
    const handleSubmit = async (e) => {
        e.preventDefault();

        const method = currentMember ? 'PUT' : 'POST';
        const endpoint = currentMember ? `/api/users/${currentMember.id}` : '/api/users/create';

        try {
            const response = await fetch(endpoint, {
                method: method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(currentMember),
            });

            const data = await response.json();
            if (response.ok) {
                if (currentMember) {
                    // Update member in state
                    setMembers(members.map((member) => (member.id === currentMember.id ? data.updatedMember : member)));
                } else {
                    // Add new member to state
                    setMembers([...members, data.newMember]);
                }
                setShowModal(false); // Close modal after success
            } else {
                alert(`Failed to ${currentMember ? 'update' : 'add'} member: ${data.message}`);
            }
        } catch (err) {
            alert(`Error: ${err.message}`);
        }
    };

    // Function to handle input changes in the form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCurrentMember((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle dark mode changes
    const handleDarkModeChange = (newDarkMode) => {
        setIsDarkMode(newDarkMode);
        localStorage.setItem('isDarkMode', newDarkMode); // Save the new dark mode preference
    };

    return (
        <>
            <ErpHeader onDarkModeChange={handleDarkModeChange} /> {/* Pass state updater to Header */}
            <Sidebar 
                onCollapseChange={setIsSidebarCollapsed} 
                isDarkMode={isDarkMode} // Pass isDarkMode state to Sidebar
            />

            {/* Main content container */}
            <div className={`transition-all duration-300 ${isSidebarCollapsed ? 'ml-0' : 'ml-[220px]'} mt-[90px] p-8 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'} min-h-screen`}>
                <div className={`max-w-4xl mx-auto p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
                    <h2 className="text-center text-2xl font-semibold mb-6">Administration</h2>

                    {/* Add Member Button */}
                    <div className="flex justify-end mb-4">
                        <button
                            onClick={handleAddMember}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                        >
                            Add Member
                        </button>
                    </div>

                    {/* Display loading, error, or the members table */}
                    {loading ? (
                        <p>Loading...</p>
                    ) : error ? (
                        <p className="text-red-500">Error: {error}</p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className={`min-w-full rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
                                <thead>
                                    <tr className={`${isDarkMode ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'}`}>
                                        <th className="py-2 px-4 text-left">Name</th>
                                        <th className="py-2 px-4 text-left">Role</th>
                                        <th className="py-2 px-4 text-left">Designation</th>
                                        <th className="py-2 px-4 text-left">Phone</th>
                                        <th className="py-2 px-4 text-left">Thana</th>
                                        <th className="py-2 px-4 text-center">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {members.map((member) => (
                                        <tr key={member.id} className={`border-b ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                                            <td className="py-2 px-4">{member.name}</td>
                                            <td className="py-2 px-4">{member.access_role}</td>
                                            <td className="py-2 px-4">{member.designation}</td>
                                            <td className="py-2 px-4">{member.phone}</td>
                                            <td className="py-2 px-4">{member.thana}</td>
                                            <td className="py-2 px-4 text-center">
                                                <button
                                                    onClick={() => handleUpdateMember(member)}
                                                    className="bg-green-500 text-white px-2 py-1 rounded-lg mr-2 hover:bg-green-600 transition duration-300"
                                                >
                                                    Update
                                                </button>
                                                <button
                                                    onClick={() => handleDeleteMember(member.id)}
                                                    className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition duration-300"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>

            {/* Modal for adding/updating a member */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className={`bg-white p-6 rounded-lg shadow-lg w-1/3 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
                        <h2 className="text-xl font-bold mb-4">{currentMember ? 'Update Member' : 'Add Member'}</h2>
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={currentMember?.name || ''}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded mb-4"
                                required
                            />
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                value={currentMember?.email || ''}
                                onChange={handleInputChange}
                                className="w-full p-2 border rounded mb-4"
                                required
                            />
                            {/* Additional form fields for other member details */}
                            <button
                                type="submit"
                                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                            >
                                {currentMember ? 'Update' : 'Add'} Member
                            </button>
                            <button
                                type="button"
                                onClick={() => setShowModal(false)}
                                className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-gray-600 transition duration-300 ml-4"
                            >
                                Cancel
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default Administration;
