'use client'

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie';
import '../../styles/globals.css'
import NavBar from '../../components/nav';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {

    const router = useRouter();

    useEffect(() => {
        // Get the token from cookies
        const token = Cookies.get('token');

        // If there's no token, redirect to login page
        if (!token) {
            router.push('/');
        }
    },[]);

    return (

          <main className="flex">

              <NavBar />

              <div className="pl-24 md:pl-28 pr-6 md:pr-8 py-8 w-full max-w-4xl">
                
                  {children}

              </div>
              
          </main>

    )
}