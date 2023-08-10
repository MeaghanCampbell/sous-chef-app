'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function NavBar() {

    const [open, setOpen] = useState(false);
    
    return (
        <nav className={`rich-black-bg blush min-h-screen ${open ? 'open' : 'closed'}`}>
            <div className="mt-4 fixed">
                <button className="hidden sm:block px-5 blush pt-4 pb-2" onClick={() => setOpen(!open)}>
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 50 50" width="30px" height="30px"><path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"/></svg>
                </button>
                <div>
                    <Link href="/" className="nav-title font-medium px-5 transition py-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mr-2 icon" viewBox="0 0 24 24" width="25px" height="25px"><path d="M16,4c-1.657,0-3,1.343-3,3v10c0,0.552-0.448,1-1,1h0c-0.552,0-1-0.448-1-1V7c0-1.657-1.343-3-3-3H3C2.448,4,2,4.448,2,5v13 c0,1.105,0.895,2,2,2h6.277c0.346,0.595,0.984,1,1.723,1s1.376-0.405,1.723-1H20c1.105,0,2-0.895,2-2V5c0-0.552-0.448-1-1-1H16z"/></svg>
                        <span>My Cookbook</span>
                    </Link>
                    <Link href="/my-week" className="nav-title font-medium px-5 transition py-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mr-2 icon" viewBox="0 0 24 24" width="25px" height="25px"><path d="M 7 1 C 6.448 1 6 1.448 6 2 L 6 3 L 5 3 C 3.9 3 3 3.9 3 5 L 3 19 C 3 20.1 3.9 21 5 21 L 19 21 C 20.1 21 21 20.1 21 19 L 21 5 C 21 3.9 20.1 3 19 3 L 18 3 L 18 2 C 18 1.448 17.552 1 17 1 C 16.448 1 16 1.448 16 2 L 16 3 L 8 3 L 8 2 C 8 1.448 7.552 1 7 1 z M 5 8 L 19 8 L 19 18 C 19 18.552 18.552 19 18 19 L 6 19 C 5.448 19 5 18.552 5 18 L 5 8 z"/></svg>
                        <span>My Week</span>
                    </Link>
                    <Link href="/grocery-list" className="nav-title font-medium px-5 transition py-4 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mr-2 icon" viewBox="0 0 24 24" width="25px" height="25px"><path d="M 5 2 C 3.895 2 3 2.895 3 4 L 3 6 C 3 7.105 3.895 8 5 8 L 7 8 C 8.105 8 9 7.105 9 6 L 9 4 C 9 2.895 8.105 2 7 2 L 5 2 z M 12 4 A 1.0001 1.0001 0 1 0 12 6 L 20 6 A 1.0001 1.0001 0 1 0 20 4 L 12 4 z M 5 9 C 3.9069372 9 3 9.9069372 3 11 L 3 13 C 3 14.093063 3.9069372 15 5 15 L 7 15 C 8.0930628 15 9 14.093063 9 13 L 9 11 C 9 9.9069372 8.0930628 9 7 9 L 5 9 z M 5 11 L 7 11 L 7 13 L 5 13 L 5 11 z M 12 11 A 1.0001 1.0001 0 1 0 12 13 L 20 13 A 1.0001 1.0001 0 1 0 20 11 L 12 11 z M 5 16 C 3.895 16 3 16.895 3 18 L 3 20 C 3 21.105 3.895 22 5 22 L 7 22 C 8.105 22 9 21.105 9 20 L 9 18 C 9 16.895 8.105 16 7 16 L 5 16 z M 12 18 A 1.0001 1.0001 0 1 0 12 20 L 20 20 A 1.0001 1.0001 0 1 0 20 18 L 12 18 z"/></svg>
                        <span>Grocery List</span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}