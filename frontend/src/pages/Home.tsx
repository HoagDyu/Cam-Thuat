import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  discount?: string;
  isNew?: boolean;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Mountain Wool Coat',
    category: 'AESTHETIC CHOICES',
    price: 120.00,
    originalPrice: 150.00,
    image: 'https://images.unsplash.com/photo-1539533057440-7814bbb10758?w=300&q=80',
    discount: 'Sale',
    isNew: false,
  },
  {
    id: 2,
    name: 'Oversized Graphic Hoodie',
    category: 'URBAN FITS',
    price: 75.00,
    originalPrice: 95.00,
    image: 'https://images.unsplash.com/photo-1556821552-5ff63b63f318?w=300&q=80',
    discount: 'Hot',
    isNew: true,
  },
  {
    id: 3,
    name: 'Black Performance Jacket',
    category: 'TECH JACKETS',
    price: 125.00,
    originalPrice: 160.00,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16ebc5?w=300&q=80',
    isNew: true,
  },
  {
    id: 4,
    name: 'Supreme Cotton Basic Tee',
    category: 'ESSENTIALS',
    price: 30.00,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&q=80',
    isNew: false,
  },
];

const categories = ['All Items', 'New Trend', 'Fashion', 'Outerwear', 'Accessories', 'Flash Sale'];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All Items');
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="min-h-screen bg-white">
      {/* Search Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-20 z-40">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center gap-4">
            <div className="relative flex-1">
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search for luxury fashion, street style, or accessories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-6 overflow-x-auto py-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`whitespace-nowrap py-2 px-4 rounded-full font-semibold text-sm transition-colors ${
                  selectedCategory === category
                    ? 'bg-pink-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Flash Sale Banner */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="bg-black rounded-xl overflow-hidden relative">
          <div className="grid grid-cols-2 gap-8 items-center">
            {/* Text Content */}
            <div className="px-8 py-12">
              <div className="inline-block bg-pink-500 text-white text-xs font-bold px-4 py-2 rounded-full mb-4">
                LIMITED TIME
              </div>
              <h2 className="text-5xl font-bold text-white mb-4">FLASH SALE!</h2>
              <p className="text-gray-300 text-lg mb-6">
                Refresh your wardrobe with up to <span className="text-pink-500 font-bold">70% OFF</span> on your <br /> favorite premium brands.
              </p>
              <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-6 py-3 rounded-full transition-colors">
                Shop the Collection
              </button>
            </div>
            {/* Image */}
            <div className="h-full">
              <img
                src="https://images.unsplash.com/photo-1439062396253-d67f74645c41?w=500&q=80"
                alt="Flash Sale"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Recommended Products */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-gray-900">Recommended for You</h3>
          <a href="#" className="text-pink-500 hover:text-pink-600 font-semibold">
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Product Image */}
              <div className="relative mb-4 overflow-hidden rounded-lg bg-gray-200 h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {product.discount && (
                  <div className={`absolute top-4 left-4 text-white text-xs font-bold px-3 py-1 rounded-full ${
                    product.discount === 'Sale' ? 'bg-pink-500' : 'bg-red-500'
                  }`}>
                    {product.discount}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <p className="text-xs text-gray-600 font-semibold">{product.category}</p>
                <h4 className="text-sm font-semibold text-gray-900 group-hover:text-pink-500 transition-colors">
                  {product.name}
                </h4>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Join Community Section */}
      <div className="bg-pink-100 rounded-2xl max-w-7xl mx-auto my-16 px-6 py-12">
        <div className="grid grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Join the community.</h3>
            <p className="text-gray-700 mb-6">
              Create an account today to unlock early access to sales, member-<br />
              only shops, and <span className="font-bold">10% off</span> your first order.
            </p>
            <button className="bg-pink-500 hover:bg-pink-600 text-white font-bold px-6 py-3 rounded-full transition-colors">
              Join Now Or More
            </button>
            <p className="text-xs text-gray-600 mt-4">
              <a href="#" className="text-pink-500 hover:text-pink-600 font-semibold">
                Already a member? Log in
              </a>
            </p>
          </div>
          <div className="flex justify-end">
            <div className="w-48 h-48 bg-gradient-to-br from-pink-300 to-pink-500 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
