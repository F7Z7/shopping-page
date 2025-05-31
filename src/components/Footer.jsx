export default function Footer() {
    return (
        <footer className="bg-gradient-to-r from-pink-100 via-rose-200 to-pink-100 text-gray-800 py-6 mt-10">
            <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm sm:text-base text-center">
                    &copy; {new Date().getFullYear()} <span className="font-bold text-rose-600">Stark.Shoppy</span>. All rights reserved.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="hover:text-rose-500 transition">Privacy Policy</a>
                    <a href="#" className="hover:text-rose-500 transition">Terms</a>
                    <a href="#" className="hover:text-rose-500 transition">Contact</a>
                </div>
            </div>
        </footer>
    );
}
