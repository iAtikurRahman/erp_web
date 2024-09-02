'use client'
import React, { useState } from 'react';
import ErpHeader from '../../_components/ErpHeader';

const Stock = () => {
    // Sample data for stock
    const [stock, setStock] = useState([
        { id: 1, product_name: 'Product A', quantity: 100, location: 'Godown 1', size: '1', date: '2024-09-01' },
        { id: 2, product_name: 'Product B', quantity: 200, location: 'Godown 2', size: '5', date: '2024-09-02' },
        { id: 3, product_name: 'Product C', quantity: 150, location: 'Godown 1', size: '25', date: '2024-09-03' },
        { id: 4, product_name: 'Product D', quantity: 50, location: 'Godown 3', size: '50', date: '2024-09-04' },
        // More data can be added here
    ]);

    // States for filters and new stock form
    const [productNameFilter, setProductNameFilter] = useState('');
    const [locationFilter, setLocationFilter] = useState('');
    const [sizeFilter, setSizeFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');
    const [newStock, setNewStock] = useState({ product_name: '', quantity: '', location: '', size: '', date: '' });
    const [editStockId, setEditStockId] = useState(null);

    // Filtered data based on filters
    const filteredStock = stock.filter(item => {
        return (
            (productNameFilter === '' || item.product_name.includes(productNameFilter)) &&
            (locationFilter === '' || item.location.includes(locationFilter)) &&
            (sizeFilter === '' || item.size.includes(sizeFilter)) &&
            (dateFilter === '' || item.date.includes(dateFilter))
        );
    });

    // Function to handle adding new stock
    const handleAddStock = () => {
        if (newStock.product_name && newStock.quantity && newStock.location && newStock.size && newStock.date) {
            setStock([
                ...stock,
                { ...newStock, id: stock.length + 1 }
            ]);
            setNewStock({ product_name: '', quantity: '', location: '', size: '', date: '' });
        } else {
            alert("Please fill in all fields!");
        }
    };

    // Function to handle updating stock
    const handleUpdateStock = () => {
        if (editStockId !== null) {
            setStock(stock.map(item =>
                item.id === editStockId ? { ...newStock, id: item.id } : item
            ));
            setEditStockId(null);
            setNewStock({ product_name: '', quantity: '', location: '', size: '', date: '' });
        }
    };

    // Function to handle deleting stock
    const handleDeleteStock = (id) => {
        if (window.confirm("Are you sure you want to delete this stock entry?")) {
            setStock(stock.filter(item => item.id !== id));
        }
    };

    // Function to handle editing stock
    const handleEditStock = (item) => {
        setNewStock(item);
        setEditStockId(item.id);
    };

    return (
        <>
            <ErpHeader />
            <div className="w-4/5 mx-auto p-8 pt-32 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-center text-2xl font-semibold mb-6">Stock Management</h2>

                {/* Add Stock Button */}
                <div className="flex justify-end mb-4">
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600"
                        onClick={() => handleAddStock()}
                    >
                        Add Stock
                    </button>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-between mb-6 space-x-4">
                    <input
                        type="text"
                        placeholder="Filter by Product Name"
                        value={productNameFilter}
                        onChange={(e) => setProductNameFilter(e.target.value)}
                        className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/4"
                    />

                    <input
                        type="text"
                        placeholder="Filter by Location"
                        value={locationFilter}
                        onChange={(e) => setLocationFilter(e.target.value)}
                        className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/4"
                    />

                    <select
                        value={sizeFilter}
                        onChange={(e) => setSizeFilter(e.target.value)}
                        className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/4"
                    >
                        <option value="">Filter by Size</option>
                        <option value="1">1</option>
                        <option value="5">5</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </select>

                    <input
                        type="date"
                        value={dateFilter}
                        onChange={(e) => setDateFilter(e.target.value)}
                        className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/4"
                    />
                </div>

                {/* New Stock Form */}
                <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                    <h3 className="text-lg font-semibold mb-4">{editStockId ? 'Update Stock' : 'Add New Stock'}</h3>
                    <div className="flex flex-wrap mb-4">
                        <input
                            type="text"
                            placeholder="Product Name"
                            value={newStock.product_name}
                            onChange={(e) => setNewStock({ ...newStock, product_name: e.target.value })}
                            className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/2"
                        />
                        <input
                            type="number"
                            placeholder="Quantity"
                            value={newStock.quantity}
                            onChange={(e) => setNewStock({ ...newStock, quantity: e.target.value })}
                            className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/2"
                        />
                        <input
                            type="text"
                            placeholder="Location"
                            value={newStock.location}
                            onChange={(e) => setNewStock({ ...newStock, location: e.target.value })}
                            className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/2"
                        />
                        <select
                            value={newStock.size}
                            onChange={(e) => setNewStock({ ...newStock, size: e.target.value })}
                            className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/2"
                        >
                            <option value="">Size</option>
                            <option value="1">1</option>
                            <option value="5">5</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                        <input
                            type="date"
                            value={newStock.date}
                            onChange={(e) => setNewStock({ ...newStock, date: e.target.value })}
                            className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/2"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600"
                            onClick={editStockId ? handleUpdateStock : handleAddStock}
                        >
                            {editStockId ? 'Update Stock' : 'Add Stock'}
                        </button>
                    </div>
                </div>

                {/* Stock Table */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b bg-gray-100">
                                <th className="py-2 px-4 text-left">Product Name</th>
                                <th className="py-2 px-4 text-left">Quantity</th>
                                <th className="py-2 px-4 text-left">Location</th>
                                <th className="py-2 px-4 text-left">Size</th>
                                <th className="py-2 px-4 text-left">Date</th>
                                <th className="py-2 px-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredStock.map((item) => (
                                <tr key={item.id} className="border-b hover:bg-gray-100">
                                    <td className="py-2 px-4">{item.product_name}</td>
                                    <td className="py-2 px-4">{item.quantity}</td>
                                    <td className="py-2 px-4">{item.location}</td>
                                    <td className="py-2 px-4">{item.size}</td>
                                    <td className="py-2 px-4">{item.date}</td>
                                    <td className="py-2 px-4 flex space-x-2">
                                        <button
                                            onClick={() => handleEditStock(item)}
                                            className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => handleDeleteStock(item.id)}
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
        </>
    );
};

export default Stock;
