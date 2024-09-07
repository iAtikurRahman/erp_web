'use client'
import React, { useState, useEffect } from 'react';
import ErpHeader from '../../_components/ErpHeader';
import Sidebar from '../../_components/ErpSidebar';

const Product = () => {
    // Sample data for products
    const [products, setProducts] = useState([
        { id: 1, name: 'Product A', amount: 100, rate: 20, time: '2024-09-01', state: 'Available', godown_name: 'Godown 1', size: 1 },
        { id: 2, name: 'Product B', amount: 200, rate: 30, time: '2024-09-02', state: 'Out of Stock', godown_name: 'Godown 2', size: 5 },
        { id: 3, name: 'Product C', amount: 150, rate: 25, time: '2024-09-03', state: 'Available', godown_name: 'Godown 3', size: 25 },
        { id: 4, name: 'Product D', amount: 300, rate: 15, time: '2024-09-04', state: 'Available', godown_name: 'Godown 1', size: 50 },
        // More data can be added here
    ]);

    // States for filters and new product form
    const [nameFilter, setNameFilter] = useState('');
    const [amountFilter, setAmountFilter] = useState('');
    const [rateFilter, setRateFilter] = useState('');
    const [timeFilter, setTimeFilter] = useState('');
    const [stateFilter, setStateFilter] = useState('');
    const [godownNameFilter, setGodownNameFilter] = useState('');
    const [sizeFilter, setSizeFilter] = useState('');
    const [newProduct, setNewProduct] = useState({ name: '', amount: '', rate: '', time: '', state: '', godown_name: '', size: '' });
    const [editProductId, setEditProductId] = useState(null);

    // States for sidebar collapse and dark mode
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Retrieve the dark mode preference from localStorage
        const savedDarkMode = localStorage.getItem('darkMode');
        return savedDarkMode ? JSON.parse(savedDarkMode) : false;
    });

    // Save dark mode preference to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    }, [isDarkMode]);

    // Filtered data based on filters
    const filteredProducts = products.filter(product => {
        return (
            (nameFilter === '' || product.name.includes(nameFilter)) &&
            (amountFilter === '' || product.amount.toString().includes(amountFilter)) &&
            (rateFilter === '' || product.rate.toString().includes(rateFilter)) &&
            (timeFilter === '' || product.time.includes(timeFilter)) &&
            (stateFilter === '' || product.state === stateFilter) &&
            (godownNameFilter === '' || product.godown_name === godownNameFilter) &&
            (sizeFilter === '' || product.size.toString().includes(sizeFilter))
        );
    });

    // Function to handle adding a new product
    const handleAddProduct = () => {
        if (newProduct.name && newProduct.amount && newProduct.rate && newProduct.time && newProduct.state && newProduct.godown_name && newProduct.size) {
            setProducts([
                ...products,
                { ...newProduct, id: products.length + 1 }
            ]);
            setNewProduct({ name: '', amount: '', rate: '', time: '', state: '', godown_name: '', size: '' });
        } else {
            alert("Please fill in all fields!");
        }
    };

    // Function to handle updating a product
    const handleUpdateProduct = () => {
        if (editProductId !== null) {
            setProducts(products.map(product =>
                product.id === editProductId ? { ...newProduct, id: product.id } : product
            ));
            setEditProductId(null);
            setNewProduct({ name: '', amount: '', rate: '', time: '', state: '', godown_name: '', size: '' });
        }
    };

    // Function to handle deleting a product
    const handleDeleteProduct = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            setProducts(products.filter(product => product.id !== id));
        }
    };

    // Function to handle editing a product
    const handleEditProduct = (product) => {
        setNewProduct(product);
        setEditProductId(product.id);
    };

    // Toggle dark mode
    const toggleDarkMode = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    // Toggle sidebar collapse
    const toggleSidebarCollapse = () => {
        setIsSidebarCollapsed(prevState => !prevState);
    };

    return (
        <>
            <ErpHeader onDarkModeChange={toggleDarkMode} />
            <Sidebar
                onCollapseChange={toggleSidebarCollapse}
                isDarkMode={isDarkMode}
                isCollapsed={isSidebarCollapsed}
            />
            <div className={`ml-${isSidebarCollapsed ? '[80px]' : '[220px]'} mt-[90px] p-8 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800'} min-h-screen`}>
                <div className={`w-full max-w-6xl mx-auto ${isDarkMode ? 'bg-gray-900' : 'bg-white'} p-8 rounded-lg shadow-lg`}>
                    <h2 className="text-center text-2xl font-semibold mb-6">Product Information</h2>

                    {/* Add Product Button */}
                    <div className="flex justify-end mb-4">
                        <button
                            className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 transition"
                            onClick={handleAddProduct}
                        >
                            Add Product
                        </button>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-4 mb-6">
                        <input
                            type="text"
                            placeholder="Filter by Name"
                            value={nameFilter}
                            onChange={(e) => setNameFilter(e.target.value)}
                            className="p-2 border rounded shadow w-full sm:w-1/3"
                        />

                        <input
                            type="number"
                            placeholder="Filter by Amount"
                            value={amountFilter}
                            onChange={(e) => setAmountFilter(e.target.value)}
                            className="p-2 border rounded shadow w-full sm:w-1/3"
                        />

                        <input
                            type="number"
                            placeholder="Filter by Rate"
                            value={rateFilter}
                            onChange={(e) => setRateFilter(e.target.value)}
                            className="p-2 border rounded shadow w-full sm:w-1/3"
                        />

                        <input
                            type="date"
                            value={timeFilter}
                            onChange={(e) => setTimeFilter(e.target.value)}
                            className="p-2 border rounded shadow w-full sm:w-1/3"
                        />

                        <select
                            value={stateFilter}
                            onChange={(e) => setStateFilter(e.target.value)}
                            className="p-2 border rounded shadow w-full sm:w-1/3"
                        >
                            <option value="">Filter by State</option>
                            <option value="Available">Available</option>
                            <option value="Out of Stock">Out of Stock</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Filter by Godown Name"
                            value={godownNameFilter}
                            onChange={(e) => setGodownNameFilter(e.target.value)}
                            className="p-2 border rounded shadow w-full sm:w-1/3"
                        />

                        <select
                            value={sizeFilter}
                            onChange={(e) => setSizeFilter(e.target.value)}
                            className="p-2 border rounded shadow w-full sm:w-1/3"
                        >
                            <option value="">Filter by Size</option>
                            <option value="1">1</option>
                            <option value="5">5</option>
                            <option value="25">25</option>
                            <option value="50">50</option>
                        </select>
                    </div>

                    {/* New Product Form */}
                    <div className={`p-4 rounded-lg shadow-md mb-6 ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
                        <h3 className="text-lg font-semibold mb-4">{editProductId ? 'Update Product' : 'Add New Product'}</h3>
                        <div className="flex flex-wrap gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="Name"
                                value={newProduct.name}
                                onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                                className="p-2 border rounded shadow w-full sm:w-1/2"
                            />
                            <input
                                type="number"
                                placeholder="Amount"
                                value={newProduct.amount}
                                onChange={(e) => setNewProduct({ ...newProduct, amount: e.target.value })}
                                className="p-2 border rounded shadow w-full sm:w-1/2"
                            />
                            <input
                                type="number"
                                placeholder="Rate"
                                value={newProduct.rate}
                                onChange={(e) => setNewProduct({ ...newProduct, rate: e.target.value })}
                                className="p-2 border rounded shadow w-full sm:w-1/2"
                            />
                            <input
                                type="date"
                                value={newProduct.time}
                                onChange={(e) => setNewProduct({ ...newProduct, time: e.target.value })}
                                className="p-2 border rounded shadow w-full sm:w-1/2"
                            />
                            <select
                                value={newProduct.state}
                                onChange={(e) => setNewProduct({ ...newProduct, state: e.target.value })}
                                className="p-2 border rounded shadow w-full sm:w-1/2"
                            >
                                <option value="">State</option>
                                <option value="Available">Available</option>
                                <option value="Out of Stock">Out of Stock</option>
                            </select>
                            <input
                                type="text"
                                placeholder="Godown Name"
                                value={newProduct.godown_name}
                                onChange={(e) => setNewProduct({ ...newProduct, godown_name: e.target.value })}
                                className="p-2 border rounded shadow w-full sm:w-1/2"
                            />
                            <select
                                value={newProduct.size}
                                onChange={(e) => setNewProduct({ ...newProduct, size: e.target.value })}
                                className="p-2 border rounded shadow w-full sm:w-1/2"
                            >
                                <option value="">Size</option>
                                <option value="1">1</option>
                                <option value="5">5</option>
                                <option value="25">25</option>
                                <option value="50">50</option>
                            </select>
                        </div>
                        <div className="flex justify-end mt-4">
                            <button
                                className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600 transition"
                                onClick={editProductId ? handleUpdateProduct : handleAddProduct}
                            >
                                {editProductId ? 'Update Product' : 'Add Product'}
                            </button>
                        </div>
                    </div>

                    {/* Product Table */}
                    <div className={`p-4 rounded-lg shadow-md ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className={`border-b ${isDarkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
                                    <th className="py-2 px-4 text-left">Name</th>
                                    <th className="py-2 px-4 text-left">Amount</th>
                                    <th className="py-2 px-4 text-left">Rate</th>
                                    <th className="py-2 px-4 text-left">Time</th>
                                    <th className="py-2 px-4 text-left">State</th>
                                    <th className="py-2 px-4 text-left">Godown Name</th>
                                    <th className="py-2 px-4 text-left">Size</th>
                                    <th className="py-2 px-4 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredProducts.map((product) => (
                                    <tr key={product.id} className={`border-b hover:bg-gray-100 ${isDarkMode ? 'hover:bg-gray-600' : ''}`}>
                                        <td className="py-2 px-4">{product.name}</td>
                                        <td className="py-2 px-4">{product.amount.toLocaleString()}</td>
                                        <td className="py-2 px-4">{product.rate.toLocaleString()}</td>
                                        <td className="py-2 px-4">{product.time}</td>
                                        <td className="py-2 px-4">{product.state}</td>
                                        <td className="py-2 px-4">{product.godown_name}</td>
                                        <td className="py-2 px-4">{product.size}</td>
                                        <td className="py-2 px-4 flex space-x-2">
                                            <button
                                                onClick={() => handleEditProduct(product)}
                                                className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600 transition"
                                            >
                                                Update
                                            </button>
                                            <button
                                                onClick={() => handleDeleteProduct(product.id)}
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

export default Product;
