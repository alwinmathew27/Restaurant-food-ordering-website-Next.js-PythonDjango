// 'use client'

// import React, { useEffect, useState } from 'react'

// // Base URL of your Django backend
// const API_URL = 'https://alwinmathew.pythonanywhere.com/api/foods/'
// const MEDIA_BASE = 'https://alwinmathew.pythonanywhere.com'

// const Foodmenu = () => {
//   // Holds the list of foods we get from the API
//   const [foods, setFoods] = useState([])
//   // Tells us if the data is still loading
//   const [loading, setLoading] = useState(true)

//   // useEffect runs once when the component loads
//   useEffect(() => {
//     fetch(API_URL)
//       .then((response) => response.json()) // convert response to JSON
//       .then((data) => {
//         setFoods(data)    // save the data in state
//         setLoading(false) // loading is done
//       })
//       .catch((error) => {
//         console.log('Error fetching foods:', error)
//         setLoading(false)
//       })
//   }, [])

//   // Show a simple loading message while data is being fetched
//   if (loading) {
//     return <p className="text-center mt-10">Loading menu...</p>
//   }

//   return (
//     <div className="p-5">
//       <h1 className="text-3xl font-bold text-center mb-6">Food Menu</h1>

//       <div className="grid grid-cols-4 justify-items-center-safe gap-4 ">
//         {foods.map((food) => (
//           <div
//             key={food.id}
//             className="w-64 border border-gray-200 rounded-lg p-3 shadow-sm"
//           >
//             <img
//               src={`${MEDIA_BASE}${food.image}`}
//               alt={food.name}
//               className="w-full h-40 object-cover rounded-md"
//             />
//             <h2 className="text-lg font-semibold mt-2">{food.name}</h2>
//             <p className="text-sm text-gray-600">{food.description}</p>
//             <p className="mt-1 font-bold">₹{food.price}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default Foodmenu


// 'use client'

// import React, { useEffect, useState } from 'react'
// import { API_URL } from '@/utils/constants'
// import { MEDIA_BASE } from '@/utils/constants'

// // Base URL of your Django backend

// const Foodmenu = () => {
//   // Holds the list of foods we get from the API
//   const [foods, setFoods] = useState([])
//   // Tells us if the data is still loading
//   const [loading, setLoading] = useState(true)
//   // Holds the items the user has added to cart
//   const [cart, setCart] = useState([])

//   // useEffect runs once when the component loads
//   useEffect(() => {
//     fetch(API_URL)
//       .then((response) => response.json()) // convert response to JSON
//       .then((data) => {
//         setFoods(data)    // save the data in state
//         setLoading(false) // loading is done
//       })
//       .catch((error) => {
//         console.log('Error fetching foods:', error)
//         setLoading(false)
//       })
//   }, [])

//   // Add a food item to the cart
//   const addToCart = (food) => {
//     setCart([...cart, food])
//   }

//   // Check if a food item is already in the cart (to change button text)
//   const isInCart = (foodId) => {
//     return cart.some((item) => item.id === foodId)
//   }

//   // Show a simple loading message while data is being fetched
//   if (loading) {
//     return <p className="text-center mt-10">Loading menu...</p>
//   }

//   return (
//     <div className="p-5">
//       {/* Header with cart count */}
//       <div className="flex justify-between items-center mb-6">
//         <h1 className="text-3xl font-bold">Food Menu</h1>
//         <span className="bg-black text-white px-4 py-2 rounded-full text-sm">
//           Cart: {cart.length}
//         </span>
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {foods.map((food) => (
//           <div
//             key={food.id}
//             className="border border-gray-200 rounded-lg p-3 shadow-sm flex flex-col"
//           >
//             <img
//               src={`${MEDIA_BASE}${food.image}`}
//               alt={food.name}
//               className="w-full h-40 object-cover rounded-md"
//             />

//             {/* Veg / Non-veg indicator */}
//             <span
//               className={`mt-2 w-fit text-xs px-2 py-1 rounded ${
//                 food.food_type === 'veg'
//                   ? 'bg-green-100 text-green-700'
//                   : 'bg-red-100 text-red-700'
//               }`}
//             >
//               {food.food_type === 'veg' ? 'Veg' : 'Non-Veg'}
//             </span>

//             <h2 className="text-lg font-semibold mt-2">{food.name}</h2>
//             <p className="text-sm text-gray-600">{food.description}</p>
//             <p className="text-xs text-gray-500 mt-1">
//               Ingredients: {food.ingredients}
//             </p>
//             <p className="text-sm mt-1">⭐ {food.rating}</p>

//             {/* Price and Add to Cart button pushed to bottom */}
//             <div className="mt-auto flex items-center justify-between pt-3">
//               <span className="font-bold">₹{food.price}</span>
//               <button
//                 onClick={() => addToCart(food)}
//                 className="bg-black text-white text-sm px-3 py-1.5 rounded-md hover:bg-gray-800"
//               >
//                 {isInCart(food.id) ? 'Added ✓' : 'Add to Cart'}
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
// export default Foodmenu

'use client'

import React, { useEffect, useState } from 'react'
import { API_URL, MEDIA_BASE } from '@/utils/constants'
import Shimmer from "../../components/uieffect/Shimmer" 
import Link from 'next/link'
import Image from 'next/image'

const Foodmenu = () => {
  const [foods, setFoods] = useState([])
  const [filteredFoods, setFilteredFoods] = useState([])
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState([])
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setFoods(data)
        setFilteredFoods(data)
        setLoading(false)
      })
      .catch((error) => {
        console.log('Error fetching foods:', error)
        setLoading(false)
      })
  }, [])

  // Add to Cart
  const addToCart = (food) => {
    if (!cart.some((item) => item.id === food.id)) {
      setCart([...cart, food])
    }
  }

  // Check item already in cart
  const isInCart = (foodId) => {
    return cart.some((item) => item.id === foodId)
  }

  // Show All
  const showAllFoods = () => {
    setFilteredFoods(foods)
  }

  // Top Rated
  const topRatedFoods = () => {
    const filtered = foods.filter((food) => Number(food.rating) >= 4)
    setFilteredFoods(filtered)
  }

  // Veg
  const vegFoods = () => {
    const filtered = foods.filter(
      (food) => food.food_type.toLowerCase() === 'veg'
    )
    setFilteredFoods(filtered)
  }

  // Non Veg
  const nonVegFoods = () => {
    const filtered = foods.filter(
      (food) => food.food_type.toLowerCase() === 'non_veg'
    )
    setFilteredFoods(filtered)
  }

  // Under ₹200
  const under200 = () => {
    const filtered = foods.filter((food) => Number(food.price) <= 200)
    setFilteredFoods(filtered)
  }

  // Search
  const searchFood = () => {
    const filtered = foods.filter((food) =>
      food.name.toLowerCase().includes(searchText.toLowerCase())
    )

    setFilteredFoods(filtered)
  }

  // if (loading) {
  //   return <h2 className="text-center mt-10 text-xl">Loading Menu...</h2>
  // }
  if (loading) {
  return <Shimmer />;
}

  return (
    <div className="p-6">

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Food Menu</h1>

        <div className="bg-black text-white px-4 py-2 rounded-full">
          🛒 Cart : {cart.length}
        </div>
      </div>

      {/* Search */}
      <div className="flex gap-3 mb-6">
        <input
          type="text"
          placeholder="Search food..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="border p-2 rounded w-72"
        />

        <button
          onClick={searchFood}
          className="bg-blue-600 text-white px-4 rounded"
        >
          Search
        </button>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-3 mb-8">

        <button
          onClick={showAllFoods}
          className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-900"
        >
          All Foods
        </button>

        <button
          onClick={topRatedFoods}
          className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
        >
          ⭐ Top Rated
        </button>

        <button
          onClick={vegFoods}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          🥗 Veg
        </button>

        <button
          onClick={nonVegFoods}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          🍗 Non Veg
        </button>

        <button
          onClick={under200}
          className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          ₹ Under 200
        </button>

      </div>

      {/* Food Cards */}

      <div className="grid grid-cols-1 xs:grid-cols-2  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5">

        {filteredFoods.map((food) => (
          
          <Link href={`/foods/${food.id}`} key={food.id}>
            <div
              key={food.id}
              className="border rounded-lg shadow-md overflow-hidden flex flex-col"
            >
              <div className='w-full h-48 relative '>

              <Image
                src={`${MEDIA_BASE}${food.image}`}
                alt={food.name}
                className=" object-contain p-2"
                fill
              />
              </div>

              <div className="p-4 flex flex-col flex-grow">

                <span
                  className={`text-xs px-2 py-1 rounded w-fit ${
                    food.food_type.toLowerCase() === 'veg'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}
                >
                  {food.food_type}
                </span>

                <h2 className="text-xl font-bold mt-2">
                  {food.name}
                </h2>

                <p className="text-gray-600 mt-2">
                  {food.description}
                </p>

             {/* /   <p className="text-sm mt-2">
                  Ingredients:
                  <span className="text-gray-500">
                    {' '}
                    {food.ingredients}
                  </span>
                </p> */}

                <p className="mt-2">
                  ⭐ {food.rating}
                </p>

                <div className="mt-auto flex justify-between items-center pt-4">

                  <span className="text-xl font-bold">
                    ₹{food.price}
                  </span>

                  <button
                    onClick={() => addToCart(food)}
                    disabled={isInCart(food.id)}
                    className={`px-3 py-2 rounded text-white ${
                      isInCart(food.id)
                        ? 'bg-green-600'
                        : 'bg-black hover:bg-gray-800'
                    }`}
                  >
                    {isInCart(food.id) ? 'Added ✓' : 'Add to Cart'}
                  </button>

                </div>

              </div>

              </div>
            </Link>
            

        ))}

      </div>

      {filteredFoods.length === 0 && (
        <h2 className="text-center text-xl mt-10">
          No food found 😔
        </h2>
      )}
    </div>
  )
}

export default Foodmenu