'use client'
import React, { useState } from 'react';
import ErpHeader from '../../_components/ErpHeader';

const Administration = () => {
    // Sample data for members
    const [members, setMembers] = useState([
        { id: 1, name: 'Atikur Rahman', role: 'User', designation: 'Accountant', department: 'Sales', office: 'Kustia Office' },
        { id: 2, name: 'John Doe', role: 'Admin', designation: 'Manager', department: 'HR', office: 'Dhaka Office' },
        { id: 3, name: 'Jane Smith', role: 'User', designation: 'Developer', department: 'IT', office: 'Chittagong Office' },
        { id: 4, name: 'Michael Brown', role: 'User', designation: 'Designer', department: 'Design', office: 'Sylhet Office' },
        { id: 5, name: 'Emily Davis', role: 'Admin', designation: 'Sales Manager', department: 'Sales', office: 'Barisal Office' },
        { id: 6, name: 'Daniel Wilson', role: 'User', designation: 'Support Engineer', department: 'Support', office: 'Rangpur Office' },
        { id: 7, name: 'Sophia Lee', role: 'Admin', designation: 'HR Manager', department: 'HR', office: 'Dhaka Office' },
        { id: 8, name: 'William Martinez', role: 'User', designation: 'Data Analyst', department: 'Analytics', office: 'Mymensingh Office' },
        { id: 9, name: 'Ava Anderson', role: 'Admin', designation: 'Product Manager', department: 'Product', office: 'Comilla Office' },
        { id: 10, name: 'David Thomas', role: 'User', designation: 'Marketing Specialist', department: 'Marketing', office: 'Jessore Office' },
        { id: 11, name: 'Isabella Johnson', role: 'User', designation: 'Project Coordinator', department: 'Projects', office: 'Rajshahi Office' },
    ]);

    // Function to handle adding a new member
    const handleAddMember = () => {
        // Add logic to add a new member (e.g., open a form modal to enter new member details)
        alert('Add Member functionality coming soon!');
    };

    // Function to handle updating a member
    const handleUpdateMember = (id) => {
        // Add logic to update member details (e.g., open a form modal with current details)
        alert(`Update Member with ID: ${id}`);
    };

    // Function to handle deleting a member
    const handleDeleteMember = (id) => {
        // Remove the member with the specified ID
        const updatedMembers = members.filter(member => member.id !== id);
        setMembers(updatedMembers);
        alert(`Member with ID: ${id} deleted`);
    };

    return (
        <>
            <ErpHeader />
            <div className="w-4/5 mx-auto p-8 pt-32 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-center text-2xl font-semibold mb-6">Administration</h2>
                
                {/* Add Member Button */}
                <div className="flex justify-end mb-4">
                    <button onClick={handleAddMember} className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300">
                        Add Member
                    </button>
                </div>

                {/* Members Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg shadow-md">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700">
                                <th className="py-2 px-4 text-left">Name</th>
                                <th className="py-2 px-4 text-left">Role</th>
                                <th className="py-2 px-4 text-left">Designation</th>
                                <th className="py-2 px-4 text-left">Department</th>
                                <th className="py-2 px-4 text-left">Office</th>
                                <th className="py-2 px-4 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {members.map((member) => (
                                <tr key={member.id} className="border-b hover:bg-gray-100">
                                    <td className="py-2 px-4">{member.name}</td>
                                    <td className="py-2 px-4">{member.role}</td>
                                    <td className="py-2 px-4">{member.designation}</td>
                                    <td className="py-2 px-4">{member.department}</td>
                                    <td className="py-2 px-4">{member.office}</td>
                                    <td className="py-2 px-4 text-center">
                                        <button onClick={() => handleUpdateMember(member.id)} className="bg-green-500 text-white px-2 py-1 rounded-lg mr-2 hover:bg-green-600 transition duration-300">
                                            Update
                                        </button>
                                        <button onClick={() => handleDeleteMember(member.id)} className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600 transition duration-300">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Administration;
