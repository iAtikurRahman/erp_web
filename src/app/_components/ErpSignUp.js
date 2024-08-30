import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ErpSignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repassword, setRepassword] = useState('');
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const router = useRouter();

    async function handleSignUp() {
        try {
            let result = await fetch("http://localhost:3000/api/restaurant", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password, name, address, mobile })
            });
            result = await result.json();
            if (result.success) {
                const { data } = result; // Destructure data from result
                if (data) {
                    delete data.password;
                    localStorage.setItem('restaurantUser', JSON.stringify(data));
                    router.push('/erp/dashboard');
                } else {
                    console.error('Data object is null or undefined');
                }
            } else {
                alert('Restaurant not created successfully');
            }
        } catch (error) {
            console.error('Error during sign up:', error);
        }
    }

    return (
        <div className="flex flex-col items-center justify-center bg-gray-100 p-4">
            <h2 className="text-2xl font-semibold mb-6">Sign Up Page</h2>
            
            <div className="w-full max-w-md space-y-4">
                <div className="input-wrapper">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-wrapper">
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="input-wrapper">
                    <input
                        type="password"
                        placeholder="Confirm your password"
                        value={repassword}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setRepassword(e.target.value)}
                    />
                </div>
                <div className="input-wrapper">
                    <input
                        type="text"
                        placeholder="Restaurant name"
                        value={name}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="input-wrapper">
                    <input
                        type="text"
                        placeholder="Full address"
                        value={address}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className="input-wrapper">
                    <input
                        type="text"
                        placeholder="Mobile number"
                        value={mobile}
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        onChange={(e) => setMobile(e.target.value)}
                    />
                </div>
                <div>
                    <button
                        className="w-full p-3 mt-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
                        onClick={handleSignUp}
                    >
                        Signup
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ErpSignUp;
