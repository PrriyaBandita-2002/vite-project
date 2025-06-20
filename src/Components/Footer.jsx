/**
 * Footer Component
 * A responsive footer with copyright information and navigation links
 * Uses Tailwind CSS for styling with dark mode support
 */
const Footer = () => {
    return (
        <footer className="m-4 bg-white rounded-sm shadow dark:bg-gray-800">
            <div className="w-full max-w-screen-xl p-4 mx-auto md:flex md:items-center md:justify-between">
                {/* Copyright section */}
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2025 <a href="https://flowbite.com/" className="hover:underline">Flowbite™</a>. All Rights Reserved.
                </span>
                
                {/* Footer navigation links */}
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">About</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                    </li>
                    <li>
                        <a href="#" className="hover:underline">Contact</a>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer