import React,{useState,useEffect} from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Container, Search } from 'lucide-react'
import { NavLink } from 'react-router-dom';





const carouselItems = [
  {
    id: 1,
    imgSrc: 'https://cdn.venuelook.com/images/new-home-images/wedding.png',
    text:'Wedding',
    alt: 'slide1',
  },
  {
    id: 2,
    imgSrc: 'https://cdn.venuelook.com/images/new-home-images/cake.png',
    text:'Birthday',
    alt: 'slide2',
  },
  {
    id: 3,
    imgSrc: 'https://cdn.venuelook.com/images/new-home-images/ring.png',
    text:'Engagement',
    alt: 'slide3',
  },
  {
    id: 4,
    imgSrc: 'https://cdn.venuelook.com/images/new-home-images/pool.png',
    text:'Pool party',
    alt: 'slide4',
  },
  {
    id: 5,
    imgSrc: 'https://cdn.venuelook.com/images/new-home-images/cocktail.png',
    text:'Cocktail Party',
    alt: 'slide5',
  },
  {
    id: 6,
    imgSrc: 'https://cdn.venuelook.com/images/new-home-images/ofc-party.png',
    text:'Corporate Party',
    alt: 'slide6',
  },
  {
    id: 7,
    imgSrc: 'https://cdn.venuelook.com/images/new-home-images/banquet.png',
    text:'Banquet Halls',
    alt: 'slide7',
  },
  {
    id: 8,
    imgSrc: 'https://cdn.venuelook.com/images/new-home-images/kitty.png',
    text:'Kitty Party',
    alt: 'slide8',
  },
 
];



const carouselItemsvenue = [
  {
    id: 1,
    img: 'https://cdn.venuelook.com/uploads/albums/album_145/thumb/photo_145_1681392031692552_fix_480.jpg',
    head:'Birthday celebration',
    tail:'Selvam Mahaal at Chennai',
    alt: 'slide1',
  },
  {
    id: 2,
    img: 'https://cdn.venuelook.com/uploads/albums/album_148/thumb/photo_148_1685339433594665_fix_480.jpg',
    head:'Team Outing',
    tail:'At Rishikesh',
    alt: 'slide2',
  },
  {
    id: 3,
    img: 'https://www.conferencerental.com/media/zoo/images/CorporateMeetings_9e625fab68584fa202a53e8b49ebb2b7.JPG',
    head:'Corporate meeting',
    tail:'VK Residency at Coimbatore',
    alt: 'slide3',
  },
  {
    id: 4,
    img: 'https://media-cdn.tripadvisor.com/media/photo-s/07/2e/bc/f7/marriage-function.jpg',
    head:'Wedding',
    tail:'Guru Mahal at Coimbatore',
    alt: 'slide4',
  },
  {
    id: 5,
    img: 'https://image.wedmegood.com/resized/450X/uploads/member/2876203/1721642189_WhatsApp_Image_2024_07_22_at_11.00.16_AM.jpeg?crop=166,244,1266,712',
    head: 'Banquet Halls',
    tail:'CVS Residency at Coimbatore',
    alt:'slide 5',
  },
  {
    id: 6,
    img: 'https://vinepair.com/wp-content/uploads/2016/01/Cocktail-Party-soc.jpg',
    
    head: 'Cocktail Party',
    tail:'SP Halls at Trichy',
    alt: 'slide6',
  },
  
];
const halls = [
  { id: 1, name: 'Grand Wedding Hall', location: 'New York' },
  { id: 2, name: 'Sunset Party Hall', location: 'New York' },
  { id: 3, name: 'Oceanview Conference Hall', location: 'San Francisco' },
  { id: 4, name: 'Mountain Function Hall', location: 'Denver' },
];



const reviews = [
  {
    name: 'John Doe',
    date: 'July 20, 2024',
    rev: 'This is an amazing product! I highly recommend it.',
    rating: 5,
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Jane Smith',
    date: 'July 18, 2024',
    rev: 'Great value for the money. Will buy again.',
    rating: 4,
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Yoo Smith',
    date: 'July 18, 2024',
    rev: 'Great value for the money. Will buy again.',
    rating: 4,
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Alex',
    date: 'July 18, 2024',
    rev: 'Great value for the money. Will buy again.',
    rating: 4,
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  
];
const Home = () => {

  const [query, setQuery] = useState('');
  const [filteredHalls, setFilteredHalls] = useState([]);
  const [searched, setSearched] = useState(false);
  
  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    filterHalls(value);
    setSearched(value.trim() !== '');
  };

  const filterHalls = (query) => {
    const results = halls.filter(hall =>
      hall.name.toLowerCase().includes(query.toLowerCase()) ||
      hall.location.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredHalls(results);
  };


  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  const review = reviews[currentIndex];




  const [currentIndi, setCurrentIndi] = useState(0);

  
  useEffect(() => {
    const intervals = setInterval(() => {
      setCurrentIndi((prevIndex) => (prevIndex + 2) % reviews.length);
    }, 4000); 
    return () => clearInterval(intervals);
  }, []);

  const reviee = reviews[currentIndi];
  return (
    <>
          <div className="relative w-full h-[60vh]">
      <img 
        src="https://www.elizabethanne-weddings.com/wp-content/uploads/2023/02/louisgabriel-367-scaled.jpg" 
        alt="Banner Image" 
        className="w-full h-full object-cover bg-opacity-5" 
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-4 rounded shadow-lg z-10">
        <h1 className="text-center text-4xl font-bold text-slate-50 mb-4">
          Find & Book the Best Venue For Every Special Event
        </h1>
        <div className="flex items-center border border-gray-300 rounded-lg">
        <input 
              type="text" 
              placeholder="Search for halls, services, or events..." 
              value={query}
              onChange={handleInputChange}
              className="flex-grow p-2 px-4 border-none rounded-l-lg focus:outline-none"
            />
          <button className="p-2 px-4 text-white bg-primary rounded-r-lg flex items-center">
            <Search className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>

    <div className="p-4">
        {searched && filteredHalls.length > 0 ? (
          <ul>
            {filteredHalls.map(hall => (
              <li key={hall.id} className="p-2 border-b border-gray-300">
                {hall.name} - {hall.location}
              </li>
            ))}
          </ul>
        )  :(
          searched && <NavLink to='/login' className='font-bold text-start text-lg text-orange-700 cursor-pointer'>Login for more results</NavLink>
        )}
      </div>


    <div className='w-full flex justify-center items-start p-8'>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[80%] h-auto"
        >
          <CarouselContent>
            {carouselItems.map((item) => (
              <CarouselItem key={item.id} className="basis-1/5">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img src={item.imgSrc} alt={item.alt} className="w-full h-full object-cover" />
                    </CardContent>
                    {/* <div className='w-full'>
                      <p className="mt-2 text-lg font-normal text-center pb-5  cursor-pointer">{item.text}</p>
                      </div> */}
                      <p className="mt-2 text-lg font-normal text-center pb-5  cursor-pointer">{item.text}</p>
                  </Card>
                </div>
                
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <hr className='border-solid p-5'/>
    <div className='w-full flex justify-center items-center text-3xl font-semibold'>
      <h6>How it works ?</h6>
    </div>


    <div className='w-full p-8'>
  <div className="flex justify-center space-x-4">
   
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-neutral-500 bg-opacity-5">
      <div className='w-full flex items-center justify-center'>
        <img className="flex aspect-square" src="https://cdn.venuelook.com/images/new-home-images/search.png" alt="Card image"/>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">Browse Venues</div>
        <p className="text-gray-700 text-base text-center">
          Check out the best suited Venues, compare photos, special offers and function packages.
        </p>
      </div>
    </div>

   
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-neutral-500 bg-opacity-5">
      <div className='w-full flex items-center justify-center'>
        <img className="flex aspect-square" src="https://cdn.venuelook.com/images/new-home-images/rupee.png" alt="Card image"/>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">Request Quotes</div>
        <p className="text-gray-700 text-base text-center">
        Get custom quotes of your short-listed Venues at the click of GET FREE QUOTES button.
        </p>
      </div>
    </div>

    
    <div className="max-w-xs rounded overflow-hidden shadow-lg bg-neutral-500 bg-opacity-5">
      <div className='w-full flex items-center justify-center'>
        <img className="flex aspect-square" src="https://cdn.venuelook.com/images/new-home-images/calender.png" alt="Card image"/>
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-center">Book a Venue</div>
        <p className="text-gray-700 text-base text-center">
        Select and Book the perfect venue in no time at all. Time is money, save both.
        </p>
      </div>
    </div>
  </div>
</div>


<div >
      <h6 className='w-full flex justify-center items-center text-3xl font-semibold p-4'>Get Inspired</h6>
      <p className='w-full flex justify-center items-center'>Discover some real events organized by us.</p>
    </div>

    <div className='h-full w-full flex justify-center items-center pb-14'>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[70%] h-auto"
        >
          <CarouselContent>
            {carouselItemsvenue.map((thing) => (
              <CarouselItem key={thing.id} className="basis-1/3">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <img src={thing.img} alt={thing.alt} className="w-full h-full object-cover rounded" />
                    </CardContent>
                      <p className="mt-2 text-xl font-semibold text-center">{thing.head}</p>
                      <p className="mt-1 text-sm font-normal text-center pb-5">{thing.tail}</p>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <div className="flex flex-col items-center  pb-20">
      <h1 className="text-2xl font-bold mb-8 text-gray-900 dark:text-gray-100">Customer Reviews</h1>
      <div className='flex flex-row items-center gap-8'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white dark:bg-gray-800">
        <div className="flex items-center mb-4">
          <img className="w-10 h-10 rounded-full mr-4" src={review.avatar} alt="Avatar" />
          <div className="text-sm">
            <p className="text-gray-900 dark:text-gray-100 leading-none">{review.name}</p>
            <p className="text-gray-600 dark:text-gray-400">{review.date}</p>
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-base">{review.rev}</p>
        <div className="mt-4">
          {Array(review.rating).fill().map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-500 inline-block" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.09 2.67L6.18 11 2 7.24l6.91-.64L10 2l1.09 4.6L18 7.24 13.82 11l1.27 6.67z"/>
            </svg>
          ))}
        </div>
      </div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-6 bg-white dark:bg-gray-800">
        <div className="flex items-center mb-4">
          <img className="w-10 h-10 rounded-full mr-4" src={reviee.avatar} alt="Avatar" />
          <div className="text-sm">
            <p className="text-gray-900 dark:text-gray-100 leading-none">{reviee.name}</p>
            <p className="text-gray-600 dark:text-gray-400">{reviee.date}</p>
          </div>
        </div>
        <p className="text-gray-700 dark:text-gray-300 text-base">{reviee.rev}</p>
        <div className="mt-4">
          {Array(reviee.rating).fill().map((_, i) => (
            <svg key={i} className="w-5 h-5 text-yellow-500 inline-block" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 15l-5.09 2.67L6.18 11 2 7.24l6.91-.64L10 2l1.09 4.6L18 7.24 13.82 11l1.27 6.67z"/>
            </svg>
          ))}
        </div>
        </div>
      </div>
    </div>
    
    </>
  )
}

export default Home