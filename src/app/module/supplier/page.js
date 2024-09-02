'use client'
import React, { useState } from 'react';
import ErpHeader from '../../_components/ErpHeader';

const Supplier = () => {
    // Sample data for suppliers
    const [suppliers, setSuppliers] = useState([
        { id: 1, name: 'Supplier A', contact: '1234567890', address: 'Address A', product: 'Product A' },
        { id: 2, name: 'Supplier B', contact: '0987654321', address: 'Address B', product: 'Product B' },
        { id: 3, name: 'Supplier C', contact: '1122334455', address: 'Address C', product: 'Product C' },
        { id: 4, name: 'Supplier D', contact: '5566778899', address: 'Address D', product: 'Product D' },
        // More data can be added here
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

    return (
        <>
            <ErpHeader />
            <div className="w-4/5 mx-auto p-8 pt-32 bg-gray-100 rounded-lg shadow-lg">
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
                        className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/4"
                    />

                    <input
                        type="text"
                        placeholder="Filter by Contact"
                        value={contactFilter}
                        onChange={(e) => setContactFilter(e.target.value)}
                        className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/4"
                    />

                    <input
                        type="text"
                        placeholder="Filter by Address"
                        value={addressFilter}
                        onChange={(e) => setAddressFilter(e.target.value)}
                        className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/4"
                    />

                    <input
                        type="text"
                        placeholder="Filter by Product"
                        value={productFilter}
                        onChange={(e) => setProductFilter(e.target.value)}
                        className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/4"
                    />
                </div>

                {/* New Supplier Form */}
                <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                    <h3 className="text-lg font-semibold mb-4">{editSupplierId ? 'Update Supplier' : 'Add New Supplier'}</h3>
                    <div className="flex flex-wrap mb-4">
                        <input
                            type="text"
                            placeholder="Name"
                            value={newSupplier.name}
                            onChange={(e) => setNewSupplier({ ...newSupplier, name: e.target.value })}
                            className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/2"
                        />
                        <input
                            type="text"
                            placeholder="Contact"
                            value={newSupplier.contact}
                            onChange={(e) => setNewSupplier({ ...newSupplier, contact: e.target.value })}
                            className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/2"
                        />
                        <input
                            type="text"
                            placeholder="Address"
                            value={newSupplier.address}
                            onChange={(e) => setNewSupplier({ ...newSupplier, address: e.target.value })}
                            className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/2"
                        />
                        <input
                            type="text"
                            placeholder="Product"
                            value={newSupplier.product}
                            onChange={(e) => setNewSupplier({ ...newSupplier, product: e.target.value })}
                            className="p-2 bg-white border rounded shadow mb-2 w-full sm:w-1/2"
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
                <div className="bg-white p-4 rounded-lg shadow-md">
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
        </>
    );
};

export default Supplier;
