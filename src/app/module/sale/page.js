'use client'
import React, { useState } from 'react';
import ErpHeader from '../../_components/ErpHeader';

const Sale = () => {
    // Sample data for sales
    const [sales, setSales] = useState([
        { id: 1, date: '2024-09-01', product_name: 'Product A', rate: 20, amount: 100, area: 'Area 1', income: 2000, loss: 0 },
        { id: 2, date: '2024-09-02', product_name: 'Product B', rate: 30, amount: 150, area: 'Area 2', income: 4500, loss: 100 },
        { id: 3, date: '2024-09-03', product_name: 'Product C', rate: 25, amount: 200, area: 'Area 1', income: 5000, loss: 200 },
        { id: 4, date: '2024-09-04', product_name: 'Product D', rate: 15, amount: 250, area: 'Area 3', income: 3750, loss: 50 },
        // More data can be added here
    ]);

    // States for filters and new sale form
    const [dateFilter, setDateFilter] = useState('');
    const [productNameFilter, setProductNameFilter] = useState('');
    const [rateFilter, setRateFilter] = useState('');
    const [amountFilter, setAmountFilter] = useState('');
    const [areaFilter, setAreaFilter] = useState('');
    const [incomeFilter, setIncomeFilter] = useState('');
    const [lossFilter, setLossFilter] = useState('');
    const [newSale, setNewSale] = useState({ date: '', product_name: '', rate: '', amount: '', area: '', income: '', loss: '' });
    const [editSaleId, setEditSaleId] = useState(null);

    // Filtered data based on filters
    const filteredSales = sales.filter(sale => {
        return (
            (dateFilter === '' || sale.date.includes(dateFilter)) &&
            (productNameFilter === '' || sale.product_name.includes(productNameFilter)) &&
            (rateFilter === '' || sale.rate.toString().includes(rateFilter)) &&
            (amountFilter === '' || sale.amount.toString().includes(amountFilter)) &&
            (areaFilter === '' || sale.area.includes(areaFilter)) &&
            (incomeFilter === '' || sale.income.toString().includes(incomeFilter)) &&
            (lossFilter === '' || sale.loss.toString().includes(lossFilter))
        );
    });

    // Function to handle adding a new sale
    const handleAddSale = () => {
        if (newSale.date && newSale.product_name && newSale.rate && newSale.amount && newSale.area && newSale.income && newSale.loss) {
            setSales([
                ...sales,
                { ...newSale, id: sales.length + 1 }
            ]);
            setNewSale({ date: '', product_name: '', rate: '', amount: '', area: '', income: '', loss: '' });
        } else {
            alert("Please fill in all fields!");
        }
    };

    // Function to handle updating a sale
    const handleUpdateSale = () => {
        if (editSaleId !== null) {
            setSales(sales.map(sale =>
                sale.id === editSaleId ? { ...newSale, id: sale.id } : sale
            ));
            setEditSaleId(null);
            setNewSale({ date: '', product_name: '', rate: '', amount: '', area: '', income: '', loss: '' });
        }
    };

    // Function to handle deleting a sale
    const handleDeleteSale = (id) => {
        if (window.confirm("Are you sure you want to delete this sale?")) {
            setSales(sales.filter(sale => sale.id !== id));
        }
    };

    // Function to handle editing a sale
    const handleEditSale = (sale) => {
        setNewSale(sale);
        setEditSaleId(sale.id);
    };

    return (
        <>
            <ErpHeader />
            <div className="w-4/5 mx-auto p-8 pt-32 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-center text-2xl font-semibold mb-6">Sales for the Month</h2>

                {/* Add Sale Button */}
                <div className="flex justify-end mb-4">
                    <button
                        className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600"
                        onClick={() => handleAddSale()}
                    >
                        Add Sale
                    </button>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-between mb-6 space-x-4">
                    <input
                        type="date"
                        value={dateFilter}
                        onChange={(e) => setDateFilter(e.target.value)}
                        className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/4"
                    />

                    <input
                        type="text"
                        placeholder="Filter by Product Name"
                        value={productNameFilter}
                        onChange={(e) => setProductNameFilter(e.target.value)}
                        className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/4"
                    />

                    <input
                        type="number"
                        placeholder="Filter by Rate"
                        value={rateFilter}
                        onChange={(e) => setRateFilter(e.target.value)}
                        className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/4"
                    />

                    <input
                        type="number"
                        placeholder="Filter by Amount"
                        value={amountFilter}
                        onChange={(e) => setAmountFilter(e.target.value)}
                        className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/4"
                    />

                    <input
                        type="text"
                        placeholder="Filter by Area"
                        value={areaFilter}
                        onChange={(e) => setAreaFilter(e.target.value)}
                        className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/4"
                    />

                    <input
                        type="number"
                        placeholder="Filter by Income"
                        value={incomeFilter}
                        onChange={(e) => setIncomeFilter(e.target.value)}
                        className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/4"
                    />

                    <input
                        type="number"
                        placeholder="Filter by Loss"
                        value={lossFilter}
                        onChange={(e) => setLossFilter(e.target.value)}
                        className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/4"
                    />
                </div>

                {/* New Sale Form */}
                <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                    <h3 className="text-lg font-semibold mb-4">{editSaleId ? 'Update Sale' : 'Add New Sale'}</h3>
                    <div className="flex flex-wrap mb-4">
                        <input
                            type="date"
                            value={newSale.date}
                            onChange={(e) => setNewSale({ ...newSale, date: e.target.value })}
                            className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/2"
                        />
                        <input
                            type="text"
                            placeholder="Product Name"
                            value={newSale.product_name}
                            onChange={(e) => setNewSale({ ...newSale, product_name: e.target.value })}
                            className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/2"
                        />
                        <input
                            type="number"
                            placeholder="Rate"
                            value={newSale.rate}
                            onChange={(e) => setNewSale({ ...newSale, rate: e.target.value })}
                            className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/2"
                        />
                        <input
                            type="number"
                            placeholder="Amount"
                            value={newSale.amount}
                            onChange={(e) => setNewSale({ ...newSale, amount: e.target.value })}
                            className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/2"
                        />
                        <input
                            type="text"
                            placeholder="Area"
                            value={newSale.area}
                            onChange={(e) => setNewSale({ ...newSale, area: e.target.value })}
                            className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/2"
                        />
                        <input
                            type="number"
                            placeholder="Income"
                            value={newSale.income}
                            onChange={(e) => setNewSale({ ...newSale, income: e.target.value })}
                            className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/2"
                        />
                        <input
                            type="number"
                            placeholder="Loss"
                            value={newSale.loss}
                            onChange={(e) => setNewSale({ ...newSale, loss: e.target.value })}
                            className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/2"
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            className="bg-blue-500 text-white py-2 px-4 rounded shadow hover:bg-blue-600"
                            onClick={editSaleId ? handleUpdateSale : handleAddSale}
                        >
                            {editSaleId ? 'Update Sale' : 'Add Sale'}
                        </button>
                    </div>
                </div>

                {/* Sales Table */}
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <table className="w-full border-collapse">
                        <thead>
                            <tr className="border-b bg-gray-100">
                                <th className="py-2 px-4 text-left">Date</th>
                                <th className="py-2 px-4 text-left">Product Name</th>
                                <th className="py-2 px-4 text-left">Rate</th>
                                <th className="py-2 px-4 text-left">Amount</th>
                                <th className="py-2 px-4 text-left">Area</th>
                                <th className="py-2 px-4 text-left">Income</th>
                                <th className="py-2 px-4 text-left">Loss</th>
                                <th className="py-2 px-4 text-left">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredSales.map((sale) => (
                                <tr key={sale.id} className="border-b hover:bg-gray-100">
                                    <td className="py-2 px-4">{sale.date}</td>
                                    <td className="py-2 px-4">{sale.product_name}</td>
                                    <td className="py-2 px-4">{sale.rate}</td>
                                    <td className="py-2 px-4">{sale.amount}</td>
                                    <td className="py-2 px-4">{sale.area}</td>
                                    <td className="py-2 px-4">{sale.income}</td>
                                    <td className="py-2 px-4">{sale.loss}</td>
                                    <td className="py-2 px-4 flex space-x-2">
                                        <button
                                            onClick={() => handleEditSale(sale)}
                                            className="bg-yellow-500 text-white py-1 px-2 rounded hover:bg-yellow-600"
                                        >
                                            Update
                                        </button>
                                        <button
                                            onClick={() => handleDeleteSale(sale.id)}
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

export default Sale;
