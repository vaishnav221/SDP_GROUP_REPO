// import React, { useState, useEffect } from 'react';
// import { FaStar, FaBookmark, FaMapMarkerAlt, FaSearch, FaPlus } from 'react-icons/fa';

// const HallCard = () => {
//   const [halls, setHalls] = useState([]);
//   const [selectedHall, setSelectedHall] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isAddingHall, setIsAddingHall] = useState(false);
//   const [newHall, setNewHall] = useState({
//     hallName: '',
//     location: '',
//     price: '',
//     description: '',
//     rating: 0,
//     hallDetails: {
//       capacity: '',
//       amenities: ''
//     }
//   });
//   const dummyHalls = [
//     {
//       id: 1,
//       hallName: "Grand Ballroom",
//       location: "Downtown City Center",
//       price: 1500,
//       description: "Elegant and spacious ballroom perfect for large events and weddings.",
//       rating: 4.8,
//       hallDetails: {
//         capacity: 500,
//         amenities: "Stage, Dance Floor, Audio System, Chandeliers"
//       }
//     },
//     {
//       id: 2,
//       hallName: "Tech Conference Center",
//       location: "Business District",
//       price: 1200,
//       description: "Modern conference hall equipped with the latest technology for corporate events.",
//       rating: 4.5,
//       hallDetails: {
//         capacity: 300,
//         amenities: "Projectors, Video Conferencing, High-speed Wi-Fi, Breakout Rooms"
//       }
//     },
//     {
//       id: 3,
//       hallName: "Rustic Barn Venue",
//       location: "Countryside",
//       price: 800,
//       description: "Charming converted barn for unique and cozy events.",
//       rating: 4.2,
//       hallDetails: {
//         capacity: 150,
//         amenities: "Outdoor Area, BBQ Pit, String Lights, Hay Bales"
//       }
//     },
//     {
//       id: 4,
//       hallName: "Seaside Pavilion",
//       location: "Beachfront",
//       price: 2000,
//       description: "Beautiful open-air pavilion with stunning ocean views.",
//       rating: 4.9,
//       hallDetails: {
//         capacity: 200,
//         amenities: "Ocean View, Covered Area, Beach Access, Cooling Fans"
//       }
//     },
//     {
//       id: 5,
//       hallName: "Cultural Center Hall",
//       location: "Arts District",
//       price: 1000,
//       description: "Versatile space suitable for exhibitions, performances, and cultural events.",
//       rating: 4.3,
//       hallDetails: {
//         capacity: 250,
//         amenities: "Gallery Lighting, Modular Staging, Sound System, Green Room"
//       }
//     },
//     {
//       id: 6,
//       hallName: "Garden Terrace",
//       location: "Botanical Gardens",
//       price: 1300,
//       description: "Picturesque outdoor terrace surrounded by lush gardens.",
//       rating: 4.7,
//       hallDetails: {
//         capacity: 180,
//         amenities: "Garden Views, Tent Option, Fairy Lights, Patio Heaters"
//       }
//     }
//   ];
//   useEffect(() => {
//     // Simulating API call with dummy data
//     setHalls(dummyHalls);
//   }, []);

//   useEffect(() => {
//     fetchHalls();
//   }, []);

//   const fetchHalls = async () => {
//     try {
//       // Replace with your actual API endpoint
//       const response = await fetch('/api/halls');
//       const data = await response.json();
//       setHalls(data);
//     } catch (error) {
//       console.error('Error fetching halls:', error);
//     }
//   };

//   const handleBookNow = (hall) => {
//     // Implement booking logic here
//     console.log('Booking hall:', hall);
//   };

//   const handleBookmark = (hall) => {
//     // Implement bookmarking logic here
//     console.log('Bookmarking hall:', hall);
//   };

//   const handleAddHall = async (e) => {
//     e.preventDefault();
//     try {
//       // Replace with your actual API endpoint
//       const response = await fetch('/api/halls', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(newHall),
//       });
//       if (response.ok) {
//         fetchHalls(); // Refresh the list of halls
//         setIsAddingHall(false);
//         setNewHall({
//           hallName: '',
//           location: '',
//           price: '',
//           description: '',
//           rating: 0,
//           hallDetails: {
//             capacity: '',
//             amenities: ''
//           }
//         });
//       } else {
//         console.error('Failed to add hall');
//       }
//     } catch (error) {
//       console.error('Error adding hall:', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'capacity' || name === 'amenities') {
//       setNewHall(prev => ({
//         ...prev,
//         hallDetails: {
//           ...prev.hallDetails,
//           [name]: value
//         }
//       }));
//     } else {
//       setNewHall(prev => ({ ...prev, [name]: value }));
//     }
//   };

//   const filteredHalls = halls.filter(hall =>
//     hall.hallName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     hall.location.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-8">Available Halls</h1>
      
//       {/* Search bar and Add Hall button */}
//       <div className="mb-6 flex justify-between items-center">
//         <div className="relative w-2/3">
//           <input
//             type="text"
//             placeholder="Search halls..."
//             className="w-full p-4 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//           <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
//         </div>
//         <button
//           className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
//           onClick={() => setIsAddingHall(true)}
//         >
//           <FaPlus className="mr-2" /> Add New Hall
//         </button>
//       </div>

//       {/* Hall listing */}
//       <div className="flex flex-wrap -mx-4">
//         {filteredHalls.map(hall => (
//           <div key={hall.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
//             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//               <div className="p-6">
//                 <h2 className="text-xl font-bold mb-2">{hall.hallName}</h2>
//                 <p className="text-gray-600 mb-4">{hall.description}</p>
//                 <div className="flex items-center mb-2">
//                   <FaMapMarkerAlt className="text-red-500 mr-2" />
//                   <span className="text-gray-600">{hall.location}</span>
//                 </div>
//                 <div className="flex items-center mb-2">
//                   <span className="font-bold text-lg mr-2">${hall.price}</span>
//                   <span className="text-gray-600">per day</span>
//                 </div>
//                 <div className="flex items-center mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <FaStar
//                       key={i}
//                       className={i < hall.rating ? "text-yellow-500" : "text-gray-300"}
//                     />
//                   ))}
//                   <span className="ml-2 text-gray-600">({hall.rating}/5)</span>
//                 </div>
//                 <button
//                   className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
//                   onClick={() => setSelectedHall(hall)}
//                 >
//                   View Details
//                 </button>
//                 <button
//                   className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
//                   onClick={() => handleBookmark(hall)}
//                 >
//                   <FaBookmark className="inline-block mr-1" /> Bookmark
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Hall Details Modal */}
//       {selectedHall && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
//           <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
//             <div className="mt-3 text-center">
//               <h3 className="text-lg leading-6 font-medium text-gray-900">{selectedHall.hallName}</h3>
//               <div className="mt-2 px-7 py-3">
//                 <p className="text-sm text-gray-500 mb-2">{selectedHall.description}</p>
//                 <p className="text-sm text-gray-500 mb-2">Location: {selectedHall.location}</p>
//                 <p className="text-sm text-gray-500 mb-2">Price: ${selectedHall.price} per day</p>
//                 <p className="text-sm text-gray-500 mb-2">Rating: {selectedHall.rating}/5</p>
//                 {selectedHall.hallDetails && (
//                   <>
//                     <p className="text-sm text-gray-500 mb-2">Capacity: {selectedHall.hallDetails.capacity}</p>
//                     <p className="text-sm text-gray-500 mb-2">Amenities: {selectedHall.hallDetails.amenities}</p>
//                   </>
//                 )}
//               </div>
//               <div className="items-center px-4 py-3">
//                 <button
//                   className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
//                   onClick={() => handleBookNow(selectedHall)}
//                 >
//                   Book Now
//                 </button>
//                 <button
//                   className="mt-3 px-4 py-2 bg-gray-300 text-gray-800 text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
//                   onClick={() => setSelectedHall(null)}
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Add New Hall Modal */}
//       {isAddingHall && (
//         <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
//           <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
//             <h2 className="text-2xl font-bold mb-4">Add New Hall</h2>
//             <form onSubmit={handleAddHall}>
//               <input
//                 type="text"
//                 name="hallName"
//                 value={newHall.hallName}
//                 onChange={handleInputChange}
//                 placeholder="Hall Name"
//                 className="w-full p-2 mb-4 border rounded"
//                 required
//               />
//               <input
//                 type="text"
//                 name="location"
//                 value={newHall.location}
//                 onChange={handleInputChange}
//                 placeholder="Location"
//                 className="w-full p-2 mb-4 border rounded"
//                 required
//               />
//               <input
//                 type="number"
//                 name="price"
//                 value={newHall.price}
//                 onChange={handleInputChange}
//                 placeholder="Price per day"
//                 className="w-full p-2 mb-4 border rounded"
//                 required
//               />
//               <textarea
//                 name="description"
//                 value={newHall.description}
//                 onChange={handleInputChange}
//                 placeholder="Description"
//                 className="w-full p-2 mb-4 border rounded"
//                 required
//               />
//               <input
//                 type="number"
//                 name="rating"
//                 value={newHall.rating}
//                 onChange={handleInputChange}
//                 placeholder="Rating (0-5)"
//                 min="0"
//                 max="5"
//                 className="w-full p-2 mb-4 border rounded"
//                 required
//               />
//               <input
//                 type="number"
//                 name="capacity"
//                 value={newHall.hallDetails.capacity}
//                 onChange={handleInputChange}
//                 placeholder="Capacity"
//                 className="w-full p-2 mb-4 border rounded"
//                 required
//               />
//               <input
//                 type="text"
//                 name="amenities"
//                 value={newHall.hallDetails.amenities}
//                 onChange={handleInputChange}
//                 placeholder="Amenities (comma-separated)"
//                 className="w-full p-2 mb-4 border rounded"
//                 required
//               />
//               <div className="flex justify-end">
//                 <button
//                   type="button"
//                   onClick={() => setIsAddingHall(false)}
//                   className="px-4 py-2 bg-gray-300 text-gray-800 text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 mr-2"
//                 >
//                   Cancel
//                 </button>
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
//                 >
//                   Add Hall
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HallCard;


import React, { useState, useEffect } from 'react';
import { FaStar, FaBookmark, FaMapMarkerAlt, FaSearch, FaPlus } from 'react-icons/fa';

const HallCard = () => {
  const [halls, setHalls] = useState([]);
  const [selectedHall, setSelectedHall] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [isAddingHall, setIsAddingHall] = useState(false);
  const [newHall, setNewHall] = useState({
    hallName: '',
    location: '',
    price: '',
    description: '',
    rating: 0,
    hallDetails: {
      capacity: '',
      amenities: ''
    }
  });

  const dummyHalls = [
    {
      id: 1,
      hallName: "Grand Ballroom",
      location: "Downtown City Center",
      price: 1500,
      description: "Elegant and spacious ballroom perfect for large events and weddings.",
      rating: 4.8,
      hallDetails: {
        capacity: 500,
        amenities: "Stage, Dance Floor, Audio System, Chandeliers"
      }
    },
    {
      id: 2,
      hallName: "Tech Conference Center",
      location: "Business District",
      price: 1200,
      description: "Modern conference hall equipped with the latest technology for corporate events.",
      rating: 4.5,
      hallDetails: {
        capacity: 300,
        amenities: "Projectors, Video Conferencing, High-speed Wi-Fi, Breakout Rooms"
      }
    },
    {
      id: 3,
      hallName: "Rustic Barn Venue",
      location: "Countryside",
      price: 800,
      description: "Charming converted barn for unique and cozy events.",
      rating: 4.2,
      hallDetails: {
        capacity: 150,
        amenities: "Outdoor Area, BBQ Pit, String Lights, Hay Bales"
      }
    },
    {
      id: 4,
      hallName: "Seaside Pavilion",
      location: "Beachfront",
      price: 2000,
      description: "Beautiful open-air pavilion with stunning ocean views.",
      rating: 4.9,
      hallDetails: {
        capacity: 200,
        amenities: "Ocean View, Covered Area, Beach Access, Cooling Fans"
      }
    },
    {
      id: 5,
      hallName: "Cultural Center Hall",
      location: "Arts District",
      price: 1000,
      description: "Versatile space suitable for exhibitions, performances, and cultural events.",
      rating: 4.3,
      hallDetails: {
        capacity: 250,
        amenities: "Gallery Lighting, Modular Staging, Sound System, Green Room"
      }
    },
    {
      id: 6,
      hallName: "Garden Terrace",
      location: "Botanical Gardens",
      price: 1300,
      description: "Picturesque outdoor terrace surrounded by lush gardens.",
      rating: 4.7,
      hallDetails: {
        capacity: 180,
        amenities: "Garden Views, Tent Option, Fairy Lights, Patio Heaters"
      }
    }
  ];

  useEffect(() => {
    // Simulating API call with dummy data
    setHalls(dummyHalls);
  }, []);

  const handleBookNow = (hall) => {
    // Implement booking logic here
    console.log('Booking hall:', hall);
  };

  const handleBookmark = (hall) => {
    // Implement bookmarking logic here
    console.log('Bookmarking hall:', hall);
  };

  const handleAddHall = (e) => {
    e.preventDefault();
    try {
      // Create a new hall object with a temporary ID
      const newHallWithId = {
        ...newHall,
        id: Date.now(), // Use timestamp as a temporary ID
        rating: parseFloat(newHall.rating), // Ensure rating is a number
        price: parseFloat(newHall.price), // Ensure price is a number
        hallDetails: {
          capacity: parseInt(newHall.hallDetails.capacity), // Ensure capacity is a number
          amenities: newHall.hallDetails.amenities
        }
      };

      // Add the new hall to the local state immediately
      setHalls(prevHalls => [...prevHalls, newHallWithId]);

      // Reset the form and close the modal
      setIsAddingHall(false);
      setNewHall({
        hallName: '',
        location: '',
        price: '',
        description: '',
        rating: 0,
        hallDetails: {
          capacity: '',
          amenities: ''
        }
      });

    } catch (error) {
      console.error('Error adding hall:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'capacity' || name === 'amenities') {
      setNewHall(prev => ({
        ...prev,
        hallDetails: {
          ...prev.hallDetails,
          [name]: value
        }
      }));
    } else {
      setNewHall(prev => ({ ...prev, [name]: value }));
    }
  };

  const filteredHalls = halls.filter(hall =>
    hall.hallName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hall.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Available Halls</h1>
      
      {/* Search bar and Add Hall button */}
      <div className="mb-6 flex justify-between items-center">
        <div className="relative w-2/3">
          <input
            type="text"
            placeholder="Search halls..."
            className="w-full p-4 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center"
          onClick={() => setIsAddingHall(true)}
        >
          <FaPlus className="mr-2" /> Add New Hall
        </button>
      </div>

      {/* Hall listing */}
      <div className="flex flex-wrap -mx-4">
        {filteredHalls.map(hall => (
          <div key={hall.id} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-bold mb-2">{hall.hallName}</h2>
                <p className="text-gray-600 mb-4">{hall.description}</p>
                <div className="flex items-center mb-2">
                  <FaMapMarkerAlt className="text-red-500 mr-2" />
                  <span className="text-gray-600">{hall.location}</span>
                </div>
                <div className="flex items-center mb-2">
                  <span className="font-bold text-lg mr-2">${hall.price}</span>
                  <span className="text-gray-600">per day</span>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={i < hall.rating ? "text-yellow-500" : "text-gray-300"}
                    />
                  ))}
                  <span className="ml-2 text-gray-600">({hall.rating}/5)</span>
                </div>
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => setSelectedHall(hall)}
                >
                  View Details
                </button>
                <button
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded"
                  onClick={() => handleBookmark(hall)}
                >
                  <FaBookmark className="inline-block mr-1" /> Bookmark
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Hall Details Modal */}
      {selectedHall && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <div className="mt-3 text-center">
              <h3 className="text-lg leading-6 font-medium text-gray-900">{selectedHall.hallName}</h3>
              <div className="mt-2 px-7 py-3">
                <p className="text-sm text-gray-500 mb-2">{selectedHall.description}</p>
                <p className="text-sm text-gray-500 mb-2">Location: {selectedHall.location}</p>
                <p className="text-sm text-gray-500 mb-2">Price: ${selectedHall.price} per day</p>
                <p className="text-sm text-gray-500 mb-2">Rating: {selectedHall.rating}/5</p>
                {selectedHall.hallDetails && (
                  <>
                    <p className="text-sm text-gray-500 mb-2">Capacity: {selectedHall.hallDetails.capacity}</p>
                    <p className="text-sm text-gray-500 mb-2">Amenities: {selectedHall.hallDetails.amenities}</p>
                  </>
                )}
              </div>
              <div className="items-center px-4 py-3">
                <button
                  className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                  onClick={() => handleBookNow(selectedHall)}
                >
                  Book Now
                </button>
                <button
                  className="mt-3 px-4 py-2 bg-gray-300 text-gray-800 text-base font-medium rounded-md w-full shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  onClick={() => setSelectedHall(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add New Hall Modal */}
      {isAddingHall && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
          <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
            <h2 className="text-2xl font-bold mb-4">Add New Hall</h2>
            <form onSubmit={handleAddHall}>
              <input
                type="text"
                name="hallName"
                value={newHall.hallName}
                onChange={handleInputChange}
                placeholder="Hall Name"
                className="w-full p-2 mb-4 border rounded"
                required
              />
              <input
                type="text"
                name="location"
                value={newHall.location}
                onChange={handleInputChange}
                placeholder="Location"
                className="w-full p-2 mb-4 border rounded"
                required
              />
              <input
                type="number"
                name="price"
                value={newHall.price}
                onChange={handleInputChange}
                placeholder="Price per day"
                className="w-full p-2 mb-4 border rounded"
                required
              />
              <textarea
                name="description"
                value={newHall.description}
                onChange={handleInputChange}
                placeholder="Description"
                className="w-full p-2 mb-4 border rounded"
                required
              />
              <input
                type="number"
                name="rating"
                value={newHall.rating}
                onChange={handleInputChange}
                placeholder="Rating (0-5)"
                min="0"
                max="5"
                step="0.1"
                className="w-full p-2 mb-4 border rounded"
                required
              />
              <input
                type="number"
                name="capacity"
                value={newHall.hallDetails.capacity}
                onChange={handleInputChange}
                placeholder="Capacity"
                className="w-full p-2 mb-4 border rounded"
                required
              />
              <input
                type="text"
                name="amenities"
                value={newHall.hallDetails.amenities}
                onChange={handleInputChange}
                placeholder="Amenities (comma-separated)"
                className="w-full p-2 mb-4 border rounded"
                required
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsAddingHall(false)}
                  className="px-4 py-2 bg-gray-300 text-gray-800 text-base font-medium rounded-md shadow-sm hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300 mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
                >
                  Add Hall
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default HallCard;