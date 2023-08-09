import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="blue-bg cream h-screen">
            <div className="mt-4">
                <Link href="/" className="font-medium px-6 transition py-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mr-2" viewBox="0 0 50 50" width="20px" height="20px"><path d="M12,39h32V2H12C8.691,2,6,4.691,6,8v34.417C6,45.496,8.691,48,12,48h32v-2H12c-2.168,0-4-1.641-4-3.583	C8,40.501,9.757,39,12,39z M36.709,31.706C36.514,31.902,36.257,32,36,32c-0.255,0-0.511-0.097-0.705-0.292l-6.523-6.494l-1.76,1.76	l-1.846-1.879l3.153-3.153l8.387,8.349C37.097,30.681,37.099,31.314,36.709,31.706z M16.286,10.007l7.733,7.781l-3.044,3.044	L16.23,16C14.568,14.338,14.594,11.637,16.286,10.007z M14.329,30.293l13.024-13.024c-0.034-0.085-0.083-0.163-0.107-0.252	c-0.399-1.509-0.322-3.426,1.045-4.777c2.031-2.094,5.497-2.989,6.998-1.505c1.501,1.571,0.596,4.909-1.435,6.916	c-1.444,1.428-3.298,1.545-4.8,1.16c-0.104-0.027-0.196-0.081-0.294-0.122L14.743,31.707C14.548,31.902,15.292,32,15.036,32	s-0.512-0.098-0.707-0.293C13.938,31.316,13.938,30.684,14.329,30.293z"/></svg>
                    <span>My Recipes</span>
                </Link>
                <Link href="/my-week" className="font-medium px-6 transition py-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mr-2" viewBox="0 0 50 50" width="20px" height="20px"><path d="M 12 0 C 10.90625 0 10 0.90625 10 2 L 10 4 L 4 4 C 2.839844 4 2 4.839844 2 6 L 2 13 L 48 13 L 48 6 C 48 4.839844 47.160156 4 46 4 L 40 4 L 40 2 C 40 0.90625 39.09375 0 38 0 L 36 0 C 34.90625 0 34 0.90625 34 2 L 34 4 L 16 4 L 16 2 C 16 0.90625 15.09375 0 14 0 Z M 12 2 L 14 2 L 14 8 L 12 8 Z M 36 2 L 38 2 L 38 8 L 36 8 Z M 2 15 L 2 46 C 2 47.160156 2.839844 48 4 48 L 46 48 C 47.160156 48 48 47.160156 48 46 L 48 15 Z M 12 21 L 17 21 L 17 26 L 12 26 Z M 19 21 L 24 21 L 24 26 L 19 26 Z M 26 21 L 31 21 L 31 26 L 26 26 Z M 33 21 L 38 21 L 38 26 L 33 26 Z M 12 28 L 17 28 L 17 33 L 12 33 Z M 19 28 L 24 28 L 24 33 L 19 33 Z M 26 28 L 31 28 L 31 33 L 26 33 Z M 33 28 L 38 28 L 38 33 L 33 33 Z M 12 35 L 17 35 L 17 40 L 12 40 Z M 19 35 L 24 35 L 24 40 L 19 40 Z M 26 35 L 31 35 L 31 40 L 26 40 Z M 33 35 L 38 35 L 38 40 L 33 40 Z"/></svg>
                    <span>My Week</span>
                </Link>
                <Link href="/grocery-list" className="font-medium px-6 transition py-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="mr-2" viewBox="0 0 128 128" width="20px" height="20px"><path d="M21,32h2.7c-2,2.7-3.8,5.7-5.1,9c0,0,0,0,0,0H4c-0.9,0-1.7,0.4-2.2,1S0.9,43.5,1,44.4l8.9,71.2c0.8,6.5,6.4,11.4,12.9,11.4 h82.3c6.5,0,12.1-4.9,12.9-11.4l8.9-71.2c0.1-0.9-0.2-1.7-0.7-2.4s-1.4-1-2.2-1h-7V28c0-14.9-12.1-27-27-27S63,13.1,63,28 c0,1.7,1.3,3,3,3s3-1.3,3-3c0-11.6,9.4-21,21-21c9.1,0,16.9,5.9,19.8,14L97.5,31.3c-1.3,1.1-1.4,3-0.4,4.2c0.6,0.7,1.4,1.1,2.3,1.1 c0.7,0,1.4-0.2,1.9-0.7l9.6-8.1c0,0.1,0,0.1,0,0.2v13H25.2C30.6,30,41.6,23,54,23c1.7,0,3-1.3,3-3s-1.3-3-3-3c-8.1,0-15.7,2.5-22,7 v-3c0-11-9-20-20-20H4C2.3,1,1,2.3,1,4v8C1,23,10,32,21,32z M91,103.6l5-40c0.2-1.6,1.7-2.8,3.3-2.6c1.6,0.2,2.8,1.7,2.6,3.3l-5,40 c-0.2,1.5-1.5,2.6-3,2.6c-0.1,0-0.2,0-0.4,0C92,106.8,90.8,105.3,91,103.6z M71,64c0-1.7,1.3-3,3-3s3,1.3,3,3v40c0,1.7-1.3,3-3,3 s-3-1.3-3-3V64z M51,64c0-1.7,1.3-3,3-3s3,1.3,3,3v40c0,1.7-1.3,3-3,3s-3-1.3-3-3V64z M28.6,61c1.6-0.2,3.1,1,3.3,2.6l5,40 c0.2,1.6-1,3.1-2.6,3.3c-0.1,0-0.3,0-0.4,0c-1.5,0-2.8-1.1-3-2.6l-5-40C25.8,62.7,27,61.2,28.6,61z M7,7h5c7.7,0,14,6.3,14,14v5h-5 c-7.7,0-14-6.3-14-14V7z"/></svg>
                    <span>Grocery List</span>
                </Link>
            </div>
        </nav>
    )
}