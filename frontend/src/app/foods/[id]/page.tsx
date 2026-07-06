
// 'use client'

// import React, { useEffect, useState } from 'react'
// import { useParams, useRouter } from 'next/navigation'
// import { API_URL, MEDIA_BASE } from '@/utils/constants'
// import Shimmer from '../../../components/uieffect/Shimmer'

// const FoodDetails = () => {
//   const { id } = useParams()
//   const router = useRouter()

//   const [food, setFood] = useState(null)
//   const [loading, setLoading] = useState(true)
//   const [added, setAdded] = useState(false)

//   useEffect(() => {
//     fetch(API_URL)
//       .then((response) => response.json())
//       .then((data) => {
//         const match = data.find((item) => String(item.id) === String(id))
//         setFood(match || null)
//         setLoading(false)
//       })
//       .catch((error) => {
//         console.log('Error fetching food details:', error)
//         setLoading(false)
//       })
//   }, [id])

//   if (loading) {
//     return <Shimmer />
//   }

//   if (!food) {
//     return (
//       <div className="p-6 text-center mt-10">
//         <h2 className="text-xl font-bold">Food not found 😔</h2>
//         <button
//           onClick={() => router.push('/foods')}
//           className="mt-4 bg-black text-white px-4 py-2 rounded"
//         >
//           ← Back to Menu
//         </button>
//       </div>
//     )
//   }

//   return (
//     <div className="p-6 max-w-4xl mx-auto">

//       {/* Back button */}
//       <button
//         onClick={() => router.back()}
//         className="mb-6 text-sm text-gray-600 hover:text-black"
//       >
//         ← Back
//       </button>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

//               {/* Image */}
//               <div className='w-full h-80 relative'>
                  
//                     <img
//                     src={`${MEDIA_BASE}${food.image}`}
//                       alt={food.name}
//                       fill
//                     className=" object-contain rounded-lg shadow-md"
//                     />

//                 </div>

//         {/* Details */}
//         <div className="flex flex-col">

//           <span
//             className={`text-xs px-2 py-1 rounded w-fit ${
//               food.food_type.toLowerCase() === 'veg'
//                 ? 'bg-green-100 text-green-700'
//                 : 'bg-red-100 text-red-700'
//             }`}
//           >
//             {food.food_type}
//           </span>

//           <h1 className="text-3xl font-bold mt-3">{food.name}</h1>

//           <p className="text-gray-600 mt-3">{food.description}</p>

//           <p className="text-sm mt-4">
//             Ingredients:
//             <span className="text-gray-500"> {food.ingredients}</span>
//           </p>

//           <p className="mt-3 text-lg">⭐ {food.rating}</p>

//           <div className="mt-auto pt-6 flex items-center justify-between">
//             <span className="text-2xl font-bold">₹{food.price}</span>

//             <button
//               onClick={() => setAdded(true)}
//               disabled={added}
//               className={`px-5 py-2 rounded text-white ${
//                 added ? 'bg-green-600' : 'bg-black hover:bg-gray-800'
//               }`}
//             >
//               {added ? 'Added ✓' : 'Add to Cart'}
//             </button>
//           </div>

//         </div>

//       </div>

//     </div>
//   )
// }

// export default FoodDetails

import { API_URL, MEDIA_BASE } from "@/utils/constants";
import Link from "next/link";

type Food = {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  food_type: string;
  ingredients: string;
  rating: number;
};

// Generate all static pages
export async function generateStaticParams() {
  const res = await fetch(API_URL);

  const foods: Food[] = await res.json();

  return foods.map((food) => ({
    id: food.id.toString(),
  }));
}

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function FoodDetails({ params }: Props) {
  const { id } = await params;

  const res = await fetch(API_URL);

  const foods: Food[] = await res.json();

  const food = foods.find((item) => item.id.toString() === id);

  if (!food) {
    return (
      <div className="p-6 text-center mt-10">
        <h2 className="text-xl font-bold">Food not found 😔</h2>

        <Link
          href="/foods"
          className="mt-4 inline-block bg-black text-white px-4 py-2 rounded"
        >
          ← Back to Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <Link
        href="/foods"
        className="mb-6 inline-block text-sm text-gray-600 hover:text-black"
      >
        ← Back
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="w-full h-80">
          <img
            src={`${MEDIA_BASE}${food.image}`}
            alt={food.name}
            className="w-full h-full object-contain rounded-lg shadow-md"
          />
        </div>

        <div className="flex flex-col">
          <span
            className={`text-xs px-2 py-1 rounded w-fit ${
              food.food_type.toLowerCase() === "veg"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {food.food_type}
          </span>

          <h1 className="text-3xl font-bold mt-3">{food.name}</h1>

          <p className="text-gray-600 mt-3">{food.description}</p>

          <p className="text-sm mt-4">
            Ingredients:
            <span className="text-gray-500">
              {" "}
              {food.ingredients}
            </span>
          </p>

          <p className="mt-3 text-lg">⭐ {food.rating}</p>

          <div className="mt-auto pt-6 flex items-center justify-between">
            <span className="text-2xl font-bold">₹{food.price}</span>

            <button className="px-5 py-2 rounded text-white bg-black hover:bg-gray-800">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}