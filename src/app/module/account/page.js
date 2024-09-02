'use client'
import React, { useState } from 'react';
import ErpHeader from '../../_components/ErpHeader';

const Account = () => {
    // Sample data for daily income
    const [data, setData] = useState([
        { id: 1, date: '2024-09-01', office_name: 'Dhaka Office', area: 'Gulshan', cost: 5000, product: 'Electronics', income: 20000 },
        { id: 2, date: '2024-09-02', office_name: 'Chittagong Office', area: 'Agrabad', cost: 3000, product: 'Clothing', income: 15000 },
        { id: 3, date: '2024-09-03', office_name: 'Kustia Office', area: 'Kushtia Sadar', cost: 7000, product: 'Furniture', income: 25000 },
        { id: 4, date: '2024-09-04', office_name: 'Dhaka Office', area: 'Banani', cost: 2000, product: 'Clothing', income: 12000 },
        { id: 5, date: '2024-09-05', office_name: 'Barisal Office', area: 'Barisal Sadar', cost: 4000, product: 'Electronics', income: 18000 },
        { id: 6, date: '2024-09-06', office_name: 'Dhaka Office', area: 'Mirpur', cost: 6000, product: 'Food', income: 22000 },
        { id: 7, date: '2024-09-07', office_name: 'Sylhet Office', area: 'Sylhet Sadar', cost: 2500, product: 'Furniture', income: 17000 },
        { id: 8, date: '2024-09-08', office_name: 'Chittagong Office', area: 'Pahartali', cost: 4500, product: 'Food', income: 21000 },
        { id: 9, date: '2024-09-09', office_name: 'Dhaka Office', area: 'Dhanmondi', cost: 5500, product: 'Electronics', income: 30000 },
        { id: 10, date: '2024-09-10', office_name: 'Rajshahi Office', area: 'Rajshahi Sadar', cost: 5000, product: 'Clothing', income: 14000 },
        // More data can be added here
    ]);

    // States for filters
    const [officeFilter, setOfficeFilter] = useState('');
    const [areaFilter, setAreaFilter] = useState('');
    const [productFilter, setProductFilter] = useState('');
    const [dateFilter, setDateFilter] = useState('');

    // Filtered data based on filters
    const filteredData = data.filter(item => {
        return (
            (officeFilter === '' || item.office_name === officeFilter) &&
            (areaFilter === '' || item.area === areaFilter) &&
            (productFilter === '' || item.product === productFilter) &&
            (dateFilter === '' || item.date === dateFilter)
        );
    });

    return (
        <>
            <ErpHeader />
            <div className="w-4/5 mx-auto p-8 pt-32 bg-gray-100 rounded-lg shadow-lg">
                <h2 className="text-center text-2xl font-semibold mb-6">Account - Daily Income of a Month</h2>

                {/* Filters */}
                <div className="flex justify-between mb-6 space-x-4">
                    <select 
                        value={officeFilter} 
                        onChange={(e) => setOfficeFilter(e.target.value)} 
                        className="p-2 bg-white border rounded shadow">
                        <option value="">Filter by Office</option>
                        <option value="Dhaka Office">Dhaka Office</option>
                        <option value="Chittagong Office">Chittagong Office</option>
                        <option value="Kustia Office">Kustia Office</option>
                        <option value="Barisal Office">Barisal Office</option>
                        <option value="Sylhet Office">Sylhet Office</option>
                        <option value="Rajshahi Office">Rajshahi Office</option>
                    </select>

                    <select 
                        value={areaFilter} 
                        onChange={(e) => setAreaFilter(e.target.value)} 
                        className="p-2 bg-white border rounded shadow">
                        <option value="">Filter by Area</option>
                        <option value="Gulshan">Gulshan</option>
                        <option value="Agrabad">Agrabad</option>
                        <option value="Kushtia Sadar">Kushtia Sadar</option>
                        <option value="Banani">Banani</option>
                        <option value="Barisal Sadar">Barisal Sadar</option>
                        <option value="Mirpur">Mirpur</option>
                        <option value="Sylhet Sadar">Sylhet Sadar</option>
                        <option value="Pahartali">Pahartali</option>
                        <option value="Dhanmondi">Dhanmondi</option>
                        <option value="Rajshahi Sadar">Rajshahi Sadar</option>
                    </select>

                    <select 
                        value={productFilter} 
                        onChange={(e) => setProductFilter(e.target.value)} 
                        className="p-2 bg-white border rounded shadow">
                        <option value="">Filter by Product</option>
                        <option value="Electronics">Electronics</option>
                        <option value="Clothing">Clothing</option>
                        <option value="Furniture">Furniture</option>
                        <option value="Food">Food</option>
                    </select>

                    <input 
                        type="date" 
                        value={dateFilter} 
                        onChange={(e) => setDateFilter(e.target.value)} 
                        className="p-2 bg-white border rounded shadow" 
                    />
                </div>

                {/* Table for displaying filtered data */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white rounded-lg shadow-md">
                        <thead>
                            <tr className="bg-gray-200 text-gray-700">
                                <th className="py-2 px-4 text-left">Date</th>
                                <th className="py-2 px-4 text-left">Office Name</th>
                                <th className="py-2 px-4 text-left">Area</th>
                                <th className="py-2 px-4 text-left">Cost</th>
                                <th className="py-2 px-4 text-left">Product</th>
                                <th className="py-2 px-4 text-left">Income</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredData.map((item) => (
                                <tr key={item.id} className="border-b hover:bg-gray-100">
                                    <td className="py-2 px-4">{item.date}</td>
                                    <td className="py-2 px-4">{item.office_name}</td>
                                    <td className="py-2 px-4">{item.area}</td>
                                    <td className="py-2 px-4">{item.cost.toLocaleString()}</td>
                                    <td className="py-2 px-4">{item.product}</td>
                                    <td className="py-2 px-4">{item.income.toLocaleString()}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Account;
