import React from 'react';

const Product = () => {
  return (
    <div className="bg-white min-h-screen pt-6 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-start">
          {/* Image gallery */}
          <div className="flex flex-col">
            <div className="w-full aspect-w-1 aspect-h-1 rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Premium Wireless Headphones"
                className="w-full h-full object-center object-cover"
              />
            </div>
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:px-0 sm:mt-16 lg:mt-0">
            <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">Premium Wireless Headphones</h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl text-indigo-600 font-bold">$299.00</p>
            </div>

            {/* Reviews */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <svg key={rating} className="h-5 w-5 flex-shrink-0 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="ml-3 text-sm text-gray-500">117 reviews</p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <div className="text-base text-gray-700 space-y-6">
                <p>The Premium Wireless Headphones deliver immersive, high-fidelity audio with active noise cancellation. Designed for comfort and long listening sessions, these headphones offer up to 40 hours of battery life.</p>
              </div>
            </div>

            <form className="mt-10">
              {/* Colors */}
              <div>
                <h3 className="text-sm text-gray-600 font-medium">Color</h3>
                <div className="flex items-center space-x-3 mt-4">
                  <div className="w-8 h-8 rounded-full bg-black border border-gray-300 cursor-pointer focus:outline-none ring-2 ring-offset-2 ring-indigo-500"></div>
                  <div className="w-8 h-8 rounded-full bg-indigo-500 border border-gray-300 cursor-pointer focus:outline-none"></div>
                  <div className="w-8 h-8 rounded-full bg-gray-200 border border-gray-300 cursor-pointer focus:outline-none"></div>
                </div>
              </div>

              <div className="mt-10 flex">
                <button
                  type="submit"
                  className="max-w-xs flex-1 bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200 sm:w-full"
                >
                  Add to bag
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;