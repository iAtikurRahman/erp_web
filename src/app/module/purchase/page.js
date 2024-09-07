'use client';
import React, { useState, useEffect } from 'react';
import ErpHeader from '../../_components/ErpHeader';
import Sidebar from '../../_components/ErpSidebar';

const Purchase = () => {
    // Sample data for purchases
    const [purchases, setPurchases] = useState([
        { id: 1, supplier: 'Supplier A', product: 'Product A', quantity: 100, price: 50, date: '2024-09-01' },
        { id: 2, supplier: 'Supplier B', product: 'Product B', quantity: 200, price: 30, date: '2024-09-02' },
        { id: 3, supplier: 'Supplier C', product: 'Product C', quantity: 150, price: 40, date: '2024-09-03' },
        { id: 4, supplier: 'Supplier D', product: 'Product D', quantity: 120, price: 60, date: '2024-09-04' },
        // More data can be added here
    ]);

    // States for filters and new purchase form
    const [supplierFilter, setSupplierFilter] = useState('');
    const [productFilter, setProductFilter] = useState('');
    const [quantityFilter, setQuantityFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');
    const [newPurchase, setNewPurchase] = useState({ supplier: '', product: '', quantity: '', price: '', date: '' });
    const [editPurchaseId, setEditPurchaseId] = useState(null);

    // States for sidebar collapse and dark mode
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Initialize dark mode from localStorage
        if (typeof window !== 'undefined') {
            return localStorage.getItem('isDarkMode') === 'true';
        }
        return false;
    });

    // Save dark mode preference to localStorage whenever it changes
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('isDarkMode', isDarkMode);
        }
    }, [isDarkMode]);

    // Filtered data based on filters
    const filteredPurchases = purchases.filter(item => {
        return (
            (supplierFilter === '' || item.supplier.includes(supplierFilter)) &&
            (productFilter === '' || item.product.includes(productFilter)) &&
            (quantityFilter === '' || item.quantity.toString().includes(quantityFilter)) &&
            (priceFilter === '' || item.price.toString().includes(priceFilter)) &&
            (dateFilter === '' || item.date.includes(dateFilter))
        );
    });

    // Function to handle adding new purchase
    const handleAddPurchase = () => {
        if (newPurchase.supplier && newPurchase.product && newPurchase.quantity && newPurchase.price && newPurchase.date) {
            setPurchases([
                ...purchases,
                { ...newPurchase, id: purchases.length + 1 }
            ]);
            setNewPurchase({ supplier: '', product: '', quantity: '', price: '', date: '' });
        } else {
            alert("Please fill in all fields!");
        }
    };

    // Function to handle updating purchase
    const handleUpdatePurchase = () => {
        if (editPurchaseId !== null) {
            setPurchases(purchases.map(item =>
                item.id === editPurchaseId ? { ...newPurchase, id: item.id } : item
            ));
            setEditPurchaseId(null);
            setNewPurchase({ supplier: '', product: '', quantity: '', price: '', date: '' });
        }
    };

    // Function to handle deleting purchase
    const handleDeletePurchase = (id) => {
        if (window.confirm("Are you sure you want to delete this purchase?")) {
            setPurchases(purchases.filter(item => item.id !== id));
        }
    };

    // Function to handle editing purchase
    const handleEditPurchase = (item) => {
        setNewPurchase(item);
        setEditPurchaseId(item.id);
    };

    // Toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    // Toggle sidebar collapse
    const toggleSidebarCollapse = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    return (
        <>
            <ErpHeader onDarkModeChange={toggleDarkMode} />
            <Sidebar
                onCollapseChange={toggleSidebarCollapse}
                isDarkMode={isDarkMode}
                isCollapsed={isSidebarCollapsed}
            />
            <div className={`ml-${isSidebarCollapsed ? '[80px]' : '[220px]'} mt-[90px] p-8 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-900'} min-h-screen`}>
                <div className={`w-full max-w-6xl mx-auto ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'} p-8 rounded-lg shadow-lg`}>
                    <h2 className="text-center text-2xl font-semibold mb-6">Purchase Management</h2>

                    {/* Add Purchase Button */}
                    <div className="flex justify-end mb-4">
                        <button
                            className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 transition"
                            onClick={handleAddPurchase}
                        >
                            Add Purchase
                        </button>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-4 mb-6">
                        <input
                            type="text"
                            placeholder="Filter by Supplier"
                            value={supplierFilter}
                            onChange={(e) => setSupplierFilter(e.target.value)}
                            className={`p-2 border rounded shadow w-full sm:w-1/4 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}
                        />

                        <input
                            type="text"
                            placeholder="Filter by Product"
                            value={productFilter}
                            onChange={(e) => setProductFilter(e.target.value)}
                            className={`p-2 border rounded shadow w-full sm:w-1/4 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}
                        />

                        <input
                            type="number"
                            placeholder="Filter by Quantity"
                            value={quantityFilter}
                            onChange={(e) => setQuantityFilter(e.target.value)}
                            className={`p-2 border rounded shadow w-full sm:w-1/4 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}
                        />

                        <input
                            type="number"
                            placeholder="Filter by Price"
                            value={priceFilter}
                            onChange={(e) => setPriceFilter(e.target.value)}
                            className={`p-2 border rounded shadow w-full sm:w-1/4 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}
                        />

                        <input
                            type="date"
                            value={dateFilter}
                            onChange={(e) => setDateFilter(e.target.value)}
                            className={`p-2 border rounded shadow w-full sm:w-1/4 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}
                        />
                    </div>

                    {/* New Purchase Form */}
                    <div className={`p-4 rounded-lg shadow-md mb-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <h3 className="text-lg font-semibold mb-4">{editPurchaseId ? 'Update Purchase' : 'Add New Purchase'}</h3>
                        <div className="flex flex-wrap gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="Supplier"
                                value={newPurchase.supplier}
                                onChange={(e) => setNewPurchase({ ...newPurchase, supplier: e.target.value })}
                                className={`p-2 border rounded shadow w-full sm:w-1/2 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}
                            />
                            <input
                                type="text"
                                placeholder="Product"
                                value={newPurchase.product}
                                onChange={(e) => setNewPurchase({ ...newPurchase, product: e.target.value })}
                                className={`p-2 border rounded shadow w-full sm:w-1/2 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}
                            />
                            <input
                                type="number"
                                placeholder="Quantity"
                                value={newPurchase.quantity}
                                onChange={(e) => setNewPurchase({ ...newPurchase, quantity: e.target.value })}
                                className={`p-2 border rounded shadow w-full sm:w-1/2 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}
                            />
                            <input
                                type="number"
                                placeholder="Price"
                                value={newPurchase.price}
                                onChange={(e) => setNewPurchase({ ...newPurchase, price: e.target.value })}
                                className={`p-2 border rounded shadow w-full sm:w-1/2 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}
                            />
                            <input
                                type="date"
                                value={newPurchase.date}
                                onChange={(e) => setNewPurchase({ ...newPurchase, date: e.target.value })}
                                className={`p-2 border rounded shadow w-full sm:w-1/2 ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-white'}`}
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 transition"
                                onClick={editPurchaseId ? handleUpdatePurchase : handleAddPurchase}
                            >
                                {editPurchaseId ? 'Update Purchase' : 'Add Purchase'}
                            </button>
                        </div>
                    </div>

                    {/* Purchase Table */}
                    <div className={`p-4 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className={`border-b ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                                    <th className="py-2 px-4 text-left">Supplier</th>
                                    <th className="py-2 px-4 text-left">Product</th>
                                    <th className="py-2 px-4 text-left">Quantity</th>
                                    <th className="py-2 px-4 text-left">Price</th>
                                    <th className="py-2 px-4 text-left">Date</th>
                                    <th className="py-2 px-4 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredPurchases.map((item) => (
                                    <tr key={item.id} className={`border-b ${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'}`}>
                                        <td className="py-2 px-4">{item.supplier}</td>
                                        <td className="py-2 px-4">{item.product}</td>
                                        <td className="py-2 px-4">{item.quantity}</td>
                                        <td className="py-2 px-4">{item.price.toLocaleString()}</td>
                                        <td className="py-2 px-4">{item.date}</td>
                                        <td className="py-2 px-4 flex space-x-2">
                                            <button
                                                onClick={() => handleEditPurchase(item)}
                                                className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 transition"
                                            >
                                                Update
                                            </button>
                                            <button
                                                onClick={() => handleDeletePurchase(item.id)}
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

export default Purchase;
