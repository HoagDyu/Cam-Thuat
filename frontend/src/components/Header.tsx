function Header() {
    return (
        <div className="w-screen px-4 py-4 bg-black flex items-center justify-between fixed top-0 left-0">
            {/* left: logo */}
            <div className="flex items-center">
                <h1 className="px-5 text-[30px] uppercase font-bold text-pink-500">Bán Độ Web</h1>
            </div>
            {/* center: navigation */}
            <nav className="flex-1 flex justify-center space-x-6">
                <a href="#" className="text-white">Home</a>
                <a href="#" className="text-white">Products</a>
                <a href="#" className="text-white">About</a>
                <a href="#" className="text-white">Contact</a>
            </nav>
            {/* right: search */}
            <div className="flex items-center space-x-4">
                <input type="text" placeholder="Search..." className="px-4 py-2 text-black placeholder:text-black bg-white"/>
                <button className="px-4 py-2 text-white bg-pink-500 hover:bg-pink-600">Search</button>
            </div>
        </div>
    )
}

export default Header;