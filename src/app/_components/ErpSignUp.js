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
        <>
            <h2>Sign up page</h2>
            <div className="input-wrapper">
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    className="input-field"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="input-wrapper">
                <input
                    type="password"
                    placeholder="Enter your password"
                    value={password}
                    className="input-field"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className="input-wrapper">
                <input
                    type="password"
                    placeholder="Confirm your password"
                    value={repassword}
                    className="input-field"
                    onChange={(e) => setRepassword(e.target.value)}
                />
            </div>
            <div className="input-wrapper">
                <input
                    type="text"
                    placeholder="Restaurant name"
                    value={name}
                    className="input-field"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="input-wrapper">
                <input
                    type="text"
                    placeholder="Full address"
                    value={address}
                    className="input-field"
                    onChange={(e) => setAddress(e.target.value)}
                />
            </div>
            <div className="input-wrapper">
                <input
                    type="text"
                    placeholder="Mobile number"
                    value={mobile}
                    className="input-field"
                    onChange={(e) => setMobile(e.target.value)}
                />
            </div>
            <div>
                <button className="button" onClick={handleSignUp}>Signup</button>
            </div>
        </>
    );
}

export default ErpSignUp;
