import { useRouter } from '../../contexts/RouterContext';


function Header() {
    const { navigateTo } = useRouter();

    return (
        <header className="w-full px-6 py-4 bg-white border-b border-gray-300 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo + Website Name */}
                <button 
                    onClick={() => navigateTo('home')}
                    className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
                >
                    <h1 className="flex items-center gap-2 text-xl font-bold">
                        <img src="/Logo.png" alt="Logo" className="w-8 h-8" />
                        <span className="text-gray-900">Bán Độ</span>
                        <span className="text-pink-500">Web</span>
                    </h1>
                </button>
                
                {/* Navigation + Auth Buttons */}
                <div className="flex items-center space-x-8">
                    <button 
                        onClick={() => navigateTo('home')}
                        className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
                    >
                        Home
                    </button>
                    <a href="#" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">Pricing</a>
                    <a href="#" className="text-gray-700 hover:text-pink-500 font-medium transition-colors">Contact</a>
                    
                    <div className="flex items-center space-x-3">
                        <button 
                            onClick={() => navigateTo('register')}
                            className="px-6 py-2 text-gray-700 hover:text-gray-900 font-semibold border-2 border-pink-500 rounded-full hover:border-pink-500 transition-all"
                        >
                            Sign up
                        </button>
                        <button 
                            onClick={() => navigateTo('login')}
                            className="px-6 py-2 bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full transition-colors"
                        >
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;