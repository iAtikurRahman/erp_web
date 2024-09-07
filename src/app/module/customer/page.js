'use client';
import React, { useState, useEffect } from 'react';
import ErpHeader from '../../_components/ErpHeader';
import Sidebar from '../../_components/ErpSidebar';

const Customer = () => {
    // Sample data for customers
    const [customers, setCustomers] = useState([
        { id: 1, customer_type: 'Retail', area: 'Gulshan', product: 'Electronics', credit: 20000, debit: 5000 },
        { id: 2, customer_type: 'Wholesale', area: 'Banani', product: 'Clothing', credit: 30000, debit: 10000 },
        { id: 3, customer_type: 'Online', area: 'Dhanmondi', product: 'Furniture', credit: 15000, debit: 2000 },
        { id: 4, customer_type: 'Retail', area: 'Uttara', product: 'Electronics', credit: 40000, debit: 12000 },
        { id: 5, customer_type: 'Wholesale', area: 'Mirpur', product: 'Food', credit: 35000, debit: 5000 },
        { id: 6, customer_type: 'Retail', area: 'Mohammadpur', product: 'Clothing', credit: 25000, debit: 8000 },
        { id: 7, customer_type: 'Online', area: 'Bashundhara', product: 'Electronics', credit: 20000, debit: 4000 },
        { id: 8, customer_type: 'Wholesale', area: 'Tejgaon', product: 'Food', credit: 30000, debit: 10000 },
        { id: 9, customer_type: 'Retail', area: 'Gulshan', product: 'Furniture', credit: 45000, debit: 15000 },
        { id: 10, customer_type: 'Online', area: 'Banani', product: 'Clothing', credit: 22000, debit: 6000 },
    ]);

    // States for filters and new customer form
    const [customerTypeFilter, setCustomerTypeFilter] = useState('');
    const [areaFilter, setAreaFilter] = useState('');
    const [productFilter, setProductFilter] = useState('');
    const [creditFilter, setCreditFilter] = useState('');
    const [debitFilter, setDebitFilter] = useState('');
    const [newCustomer, setNewCustomer] = useState({ customer_type: '', area: '', product: '', credit: '', debit: '' });
    const [editCustomerId, setEditCustomerId] = useState(null);

    // States for Sidebar collapse and Dark mode
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Load initial dark mode preference from localStorage
        const savedDarkMode = localStorage.getItem('isDarkMode');
        return savedDarkMode === 'true';
    });

    // Save dark mode preference to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('isDarkMode', isDarkMode);
    }, [isDarkMode]);

    // Filtered data based on filters
    const filteredCustomers = customers.filter((customer) => {
        return (
            (customerTypeFilter === '' || customer.customer_type === customerTypeFilter) &&
            (areaFilter === '' || customer.area === areaFilter) &&
            (productFilter === '' || customer.product === productFilter) &&
            (creditFilter === '' || customer.credit.toString().includes(creditFilter)) &&
            (debitFilter === '' || customer.debit.toString().includes(debitFilter))
        );
    });

    // Function to handle adding a new customer
    const handleAddCustomer = () => {
        if (newCustomer.customer_type && newCustomer.area && newCustomer.product && newCustomer.credit && newCustomer.debit) {
            setCustomers([
                ...customers,
                { ...newCustomer, id: customers.length + 1 }
            ]);
            setNewCustomer({ customer_type: '', area: '', product: '', credit: '', debit: '' });
        } else {
            alert("Please fill in all fields!");
        }
    };

    // Function to handle updating a customer
    const handleUpdateCustomer = () => {
        if (editCustomerId !== null) {
            setCustomers(customers.map(customer =>
                customer.id === editCustomerId ? { ...newCustomer, id: customer.id } : customer
            ));
            setEditCustomerId(null);
            setNewCustomer({ customer_type: '', area: '', product: '', credit: '', debit: '' });
        }
    };

    // Function to handle deleting a customer
    const handleDeleteCustomer = (id) => {
        if (window.confirm("Are you sure you want to delete this customer?")) {
            setCustomers(customers.filter(customer => customer.id !== id));
        }
    };

    // Function to handle editing a customer
    const handleEditCustomer = (customer) => {
        setNewCustomer(customer);
        setEditCustomerId(customer.id);
    };

    return (
        <>
            <ErpHeader onDarkModeChange={setIsDarkMode} /> {/* Pass state updater to Header */}
            <Sidebar 
                onCollapseChange={setIsSidebarCollapsed} 
                isDarkMode={isDarkMode} // Pass isDarkMode state to Sidebar
                isCollapsed={isSidebarCollapsed} // Pass isSidebarCollapsed state to Sidebar
            />

            {/* Main content container */}
            <div className={`transition-all duration-300 ${isSidebarCollapsed ? 'ml-0' : 'ml-[220px]'} mt-[90px] p-8 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'} min-h-screen`}> {/* Margin adjusted for the fixed sidebar and header */}
                <div className={`w-full max-w-6xl mx-auto p-8 rounded-lg shadow-lg ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}> {/* Centered content container */}
                    <h2 className="text-center text-2xl font-semibold mb-6">Customer Information</h2>

                    {/* Add Customer Button */}
                    <div className="flex justify-end mb-4">
                        <button
                            className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 transition"
                            onClick={() => handleAddCustomer()}
                        >
                            Add Customer
                        </button>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-4 mb-6">
                        <select
                            value={customerTypeFilter}
                            onChange={(e) => setCustomerTypeFilter(e.target.value)}
                            className="p-2 border rounded shadow"
                        >
                            <option value="">Filter by Customer Type</option>
                            <option value="Retail">Retail</option>
                            <option value="Wholesale">Wholesale</option>
                            <option value="Online">Online</option>
                        </select>

                        <select
                            value={areaFilter}
                            onChange={(e) => setAreaFilter(e.target.value)}
                            className="p-2 border rounded shadow"
                        >
                            <option value="">Filter by Area</option>
                            <option value="Gulshan">Gulshan</option>
                            <option value="Banani">Banani</option>
                            <option value="Dhanmondi">Dhanmondi</option>
                            <option value="Uttara">Uttara</option>
                            <option value="Mirpur">Mirpur</option>
                            <option value="Mohammadpur">Mohammadpur</option>
                            <option value="Bashundhara">Bashundhara</option>
                            <option value="Tejgaon">Tejgaon</option>
                        </select>

                        <select
                            value={productFilter}
                            onChange={(e) => setProductFilter(e.target.value)}
                            className="p-2 border rounded shadow"
                        >
                            <option value="">Filter by Product</option>
                            <option value="Electronics">Electronics</option>
                            <option value="Clothing">Clothing</option>
                            <option value="Furniture">Furniture</option>
                            <option value="Food">Food</option>
                        </select>

                        <input
                            type="number"
                            value={creditFilter}
                            onChange={(e) => setCreditFilter(e.target.value)}
                            placeholder="Filter by Credit"
                            className="p-2 border rounded shadow"
                        />

                        <input
                            type="number"
                            value={debitFilter}
                            onChange={(e) => setDebitFilter(e.target.value)}
                            placeholder="Filter by Debit"
                            className="p-2 border rounded shadow"
                        />
                    </div>

                    {/* New Customer Form */}
                    <div className={`p-4 rounded-lg shadow-md mb-6 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
                        <h3 className="text-lg font-semibold mb-4">{editCustomerId ? 'Update Customer' : 'Add New Customer'}</h3>
                        <div className="flex flex-wrap gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="Customer Type"
                                value={newCustomer.customer_type}
                                onChange={(e) => setNewCustomer({ ...newCustomer, customer_type: e.target.value })}
                                className="p-2 border rounded shadow w-full sm:w-1/3"
                            />
                            <input
                                type="text"
                                placeholder="Area"
                                value={newCustomer.area}
                                onChange={(e) => setNewCustomer({ ...newCustomer, area: e.target.value })}
                                className="p-2 border rounded shadow w-full sm:w-1/3"
                            />
                            <input
                                type="text"
                                placeholder="Product"
                                value={newCustomer.product}
                                onChange={(e) => setNewCustomer({ ...newCustomer, product: e.target.value })}
                                className="p-2 border rounded shadow w-full sm:w-1/3"
                            />
                        </div>
                        <div className="flex flex-wrap gap-4">
                            <input
                                type="number"
                                placeholder="Credit"
                                value={newCustomer.credit}
                                onChange={(e) => setNewCustomer({ ...newCustomer, credit: e.target.value })}
                                className="p-2 border rounded shadow w-full sm:w-1/2"
                            />
                            <input
                                type="number"
                                placeholder="Debit"
                                value={newCustomer.debit}
                                onChange={(e) => setNewCustomer({ ...newCustomer, debit: e.target.value })}
                                className="p-2 border rounded shadow w-full sm:w-1/2"
                            />
                        </div>
                        <div className="flex justify-end mt-4">
                            <button
                                className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 transition"
                                onClick={editCustomerId ? handleUpdateCustomer : handleAddCustomer}
                            >
                                {editCustomerId ? 'Update Customer' : 'Add Customer'}
                            </button>
                        </div>
                    </div>

                    {/* Customer Table */}
                    <div className={`p-4 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="border-b bg-gray-100">
                                    <th className="py-2 px-4 text-left">Customer Type</th>
                                    <th className="py-2 px-4 text-left">Area</th>
                                    <th className="py-2 px-4 text-left">Product</th>
                                    <th className="py-2 px-4 text-left">Credit</th>
                                    <th className="py-2 px-4 text-left">Debit</th>
                                    <th className="py-2 px-4 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredCustomers.map((customer) => (
                                    <tr key={customer.id} className="border-b hover:bg-gray-100">
                                        <td className="py-2 px-4">{customer.customer_type}</td>
                                        <td className="py-2 px-4">{customer.area}</td>
                                        <td className="py-2 px-4">{customer.product}</td>
                                        <td className="py-2 px-4">{customer.credit.toLocaleString()}</td>
                                        <td className="py-2 px-4">{customer.debit.toLocaleString()}</td>
                                        <td className="py-2 px-4 flex space-x-2">
                                            <button
                                                onClick={() => handleEditCustomer(customer)}
                                                className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 transition"
                                            >
                                                Update
                                            </button>
                                            <button
                                                onClick={() => handleDeleteCustomer(customer.id)}
                                                className="bg-red-500 text-white py-1 px-2 rounded hover:bg-red-600 transition"
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

export default Customer;
