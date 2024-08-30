import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ErpLogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    async function handleLogIn() {
        try {
            let result = await fetch("/api/auth", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            result = await result.json();
            if (result.success) {
                localStorage.setItem('token', result.token);
                router.push('/dashboard');
            } else {
                alert('Login failed. Please check your credentials.');
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    }

    return (
        <div className="flex justify-center items-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-80 flex flex-col justify-center items-center">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800">Login Page</h3>
                <div className="mb-4 w-full">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-4 w-full">
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button
                    className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
                    onClick={handleLogIn}
                >
                    Login
                </button>
            </div>
        </div>
    );
};

export default ErpLogIn;
