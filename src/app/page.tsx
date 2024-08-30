'use client'
import { useState } from "react";
import ErpLogIn from './_components/ErpLogIn'
import ErpSignUp from './_components/ErpSignUp'
import ErpFooter from './_components/ErpFooter'

export default function Home() {
  const [login, setLogIn] = useState(true);
  return (
    <>
    <div className="container">
        {
                login ? <ErpLogIn /> : <ErpSignUp />
            }
            <div>
                <button onClick={() => setLogIn(!login)} className="botton-link">
                    {login ? "Do not have an account? Sign up" : "Already have an account? Log in"}
                </button>
            </div>
        </div>
        <ErpFooter />
    </>
  );
}
