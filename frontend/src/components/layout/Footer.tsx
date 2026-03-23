function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-300 py-12 px-6 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <h1 className="text-white font-bold text-xl tracking-wide">
                <img src="/Logo.png" alt="Logo" className="w-8 h-8" />
                <span className="text-white">Bán Độ</span>
                <span className="text-pink-500">Web</span>
              </h1>
            </div>
            <p className="text-sm text-gray-400">
              Creating the finest global fashion tastes for the modern, style, and role-obsessed to your lifetime.
            </p>
          </div>

          {/* Shop Column */}
          <div>
            <h3 className="text-white font-bold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Men's Collection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Women's Collection</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Limited Drops</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Outlet</a></li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-white font-bold mb-4">Support</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Order Tracking</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h3 className="text-white font-bold mb-4">Connect</h3>
            <p className="text-sm mb-4">Subscribe to our newsletter for exclusive updates.</p>
            <div className="flex gap-3">
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-pink-500 flex items-center justify-center transition-colors">
                <span className="text-xs">f</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-pink-500 flex items-center justify-center transition-colors">
                <span className="text-xs">𝕏</span>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-pink-500 flex items-center justify-center transition-colors">
                <span className="text-xs">📷</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 flex items-center justify-between text-xs text-gray-500">
          <p>© 2025 Bán Bị Web. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
