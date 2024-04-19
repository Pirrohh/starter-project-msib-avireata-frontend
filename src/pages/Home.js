import * as React from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../fire';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Home({
    user,
    setAuthState,
    setUser
}) {

    const signOutHandler = () => {
        signOut(auth)
        .then(() => {
            setUser(null);
            setAuthState('login');
        })
        .catch((err) => console.log(err));
    }

    return (
        <div>
      <Navbar/>
      <Hero/>
    </div>
    )
}