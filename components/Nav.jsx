"use client";

import React from 'react';
import Link from 'next/link';
import {useState, useEffect} from "react";
import Image from 'next/image';
import { signIn, signOut, useSession, getProviders} from 'next-auth/react';

const Nav = () => {
    const isUserLoggedIn = false;

    const [providers, setProviders] = useState(null)

    useEffect(() => {
        const setProviders = async () = {
            const response = await getProviders();
            setProviders(response)
        }
    }, []);
    

    return (
        <nav className="flex-between w-full mb-16 pt-3">
            <Link href="/" className="flex gap-2 flex-center">
                <Image
                    src="assets/images/logo.svg"
                    alt="Logo"
                    width={30}
                    height={30}
                />
                <p className="logo_text">NextPrompt</p>
            </Link>

            {/* Mobile navigation */}
            <div className="sm:flex hidden">
                {isUserLoggedIn ? (
                    <div className="flex gap-3 md:gap-5">
                        <Link href="/create-prompt"
                              className="black_btn">
                            Create post
                        </Link>
                        <button type="button" onClick={signOut} className="outline_btn">
                            Sign Out
                        </button>
                        <Link href="/profile">
                            <Image
                                src="/assets/images/logo.svg"
                                width={37}
                                height={37}
                                className="rounded-full"
                                alt="profile"
                            />
                        </Link>
                    </div>
                ): (
                    <>
                    </>
                )}
            </div>
        </nav>
    );
};

export default Nav;
