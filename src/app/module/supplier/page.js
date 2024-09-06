'use client'
import React, { useState, useEffect } from 'react';
import ErpHeader from '../../_components/ErpHeader';
import Sidebar from '../../_components/ErpSidebar';

const Supplier = () => {
    // State management for Sidebar collapse and Dark mode
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Retrieve dark mode preference from localStorage
        const savedMode = localStorage.getItem('isDarkMode');
        return savedMode === 'true'; // Convert string to boolean
    });

    // Sample data for suppliers
    const [suppliers, setSuppliers] = useState([
        { id: 1, name: 'Supplier A', contact: '1234567890', address: 'Address A', product: 'Product A' },
        { id: 2, name: 'Supplier B', contact: '0987654321', address: 'Address B', product: 'Product B' },
        { id: 3, name: 'Supplier C', contact: '1122334455', address: 'Address C', product: 'Product C' },
        { id: 4, name: 'Supplier D', contact: '5566778899', address: 'Address D', product: 'Product D' },
    ]);

    // States for filters and new supplier form
    const [nameFilter, setNameFilter] = useState('');
    const [contactFilter, setContactFilter] = useState('');
    const [addressFilter, setAddressFilter] = useState('');
    const [productFilter, setProductFilter] = useState('');
    const [newSupplier, setNewSupplier] = useState({ name: '', contact: '', address: '', product: '' });
    const [editSupplierId, setEditSupplierId] = useState(null);

    // Filtered data based on filters
    const filteredSuppliers = suppliers.filter(item => {
        return (
            (nameFilter === '' || item.name.includes(nameFilter)) &&
            (contactFilter === '' || item.contact.includes(contactFilter)) &&
            (addressFilter === '' || item.address.includes(addressFilter)) &&
            (productFilter === '' || item.product.includes(productFilter))
        );
    });

    // Function to handle adding new supplier
    const handleAddSupplier = () => {
        if (newSupplier.name && newSupplier.contact && newSupplier.address && newSupplier.product) {
            setSuppliers([
                ...suppliers,
                { ...newSupplier, id: suppliers.length + 1 }
            ]);
            setNewSupplier({ name: '', contact: '', address: '', product: '' });
        } else {
            alert("Please fill in all fields!");
        }
    };

    // Function to handle updating supplier
    const handleUpdateSupplier = () => {
        if (editSupplierId !== null) {
            setSuppliers(suppliers.map(item =>
                item.id === editSupplierId ? { ...newSupplier, id: item.id } : item
            ));
            setEditSupplierId(null);
            setNewSupplier({ name: '', contact: '', address: '', product: '' });
        }
    };

    // Function to handle deleting supplier
    const handleDeleteSupplier = (id) => {
        if (window.confirm("Are you sure you want to delete this supplier?")) {
            setSuppliers(suppliers.filter(item => item.id !== id));
        }
    };

    // Function to handle editing supplier
    const handleEditSupplier = (item) => {
        setNewSupplier(item);
        setEditSupplierId(item.id);
    };

    // Toggle dark mode and save to localStorage
    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode);
        localStorage.setItem('isDarkMode', newMode); // Save preference to localStorage
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
            <div className={`transition-all duration-300 ${isSidebarCollapsed ? 'ml-0' : 'ml-[220px]'} mt-[90px] p-8 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100'} min-h-screen`}> {/* Margin adjusted for the fixed sidebar and header */}
                <div className={`w-full max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}> {/* Centered content container */}
                    <h2 className="text-center text-2xl font-semibold mb-6">Supplier Management</h2>

                    {/* Add Supplier Button */}
                    <div className="flex justify-end mb-4">
                        <button
                            className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600"
                            onClick={() => handleAddSupplier()}
                        >
                            Add Supplier
                        </button>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap justify-between mb-6 space-x-4">
                        <input
                            type="text"
                            placeholder="Filter by Name"
                            value={nameFilter}
                            onChange={(e) => setNameFilter(e.target.value)}
                            className={`p-2 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} border rounded shadow mb-2 w-full sm:w-1/4`}
                        />

                        <input
                            type="text"
                            placeholder="Filter by Contact"
                            value={contactFilter}
                            onChange={(e) => setContactFilter(e.target.value)}
                            className={`p-2 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} border rounded shadow mb-2 w-full sm:w-1/4`}
                        />

                        <input
                            type="text"
                            placeholder="Filter by Address"
                            value={addressFilter}
                            onChange={(e) => setAddressFilter(e.target.value)}
                            className={`p-2 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} border rounded shadow mb-2 w-full sm:w-1/4`}
                        />

                        <input
                            type="text"
                            placeholder="Filter by Product"
                            value={productFilter}
                            onChange={(e) => setProductFilter(e.target.value)}
                            className={`p-2 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} border rounded shadow mb-2 w-full sm:w-1/4`}
                        />
                    </div>

                    {/* New Supplier Form */}
                    <div className={`bg-white p-4 rounded-lg shadow-md mb-6 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
                        <h3 className="text-lg font-semibold mb-4">{editSupplierId ? 'Update Supplier' : 'Add New Supplier'}</h3>
                        <div className="flex flex-wrap mb-4">
                            <input
                                type="text"
                                placeholder="Name"
                                value={newSupplier.name}
                                onChange={(e) => setNewSupplier({ ...newSupplier, name: e.target.value })}
                                className={`p-2 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} border rounded shadow mb-2 w-full sm:w-1/2`}
                            />
                            <input
                                type="text"
                                placeholder="Contact"
                                value={newSupplier.contact}
                                onChange={(e) => setNewSupplier({ ...newSupplier, contact: e.target.value })}
                                className={`p-2 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} border rounded shadow mb-2 w-full sm:w-1/2`}
                            />
                            <input
                                type="text"
                                placeholder="Address"
                                value={newSupplier.address}
                                onChange={(e) => setNewSupplier({ ...newSupplier, address: e.target.value })}
                                className={`p-2 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} border rounded shadow mb-2 w-full sm:w-1/2`}
                            />
                            <input
                                type="text"
                                placeholder="Product"
                                value={newSupplier.product}
                                onChange={(e) => setNewSupplier({ ...newSupplier, product: e.target.value })}
                                className={`p-2 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} border rounded shadow mb-2 w-full sm:w-1/2`}
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600"
                                onClick={editSupplierId ? handleUpdateSupplier : handleAddSupplier}
                            >
                                {editSupplierId ? 'Update Supplier' : 'Add Supplier'}
                            </button>
                        </div>
                    </div>

                    {/* Supplier Table */}
                    <div className={`bg-white p-4 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b bg-gray-100">
                                    <th className="py-2 px-4 text-left">Name</th>
                                    <th className="py-2 px-4 text-left">Contact</th>
                                    <th className="py-2 px-4 text-left">Address</th>
                                    <th className="py-2 px-4 text-left">Product</th>
                                    <th className="py-2 px-4 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredSuppliers.map((item) => (
                                    <tr key={item.id} className="border-b hover:bg-gray-100">
                                        <td className="py-2 px-4">{item.name}</td>
                                        <td className="py-2 px-4">{item.contact}</td>
                                        <td className="py-2 px-4">{item.address}</td>
                                        <td className="py-2 px-4">{item.product}</td>
                                        <td className="py-2 px-4 flex space-x-2">
                                            <button
                                                onClick={() => handleEditSupplier(item)}
                                                className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600"
                                            >
                                                Update
                                            </button>
                                            <button
                                                onClick={() => handleDeleteSupplier(item.id)}
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

export default Supplier;
