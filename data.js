// =========================================
// StreamFlix Movie Database
// Part 1 - Trending
// =========================================

const movies = [

{
    id:1,
    title:"Night Hunter",
    category:"Trending",
    genre:"Action",
    year:2025,
    duration:"2h 08m",
    rating:8.5,
    age:"16+",
    poster:"images/posters/movie1.jpg",
    banner:"images/banners/movie1.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"A fearless bounty hunter tracks the world's most dangerous criminal across multiple countries."
},

{
    id:2,
    title:"Lost Planet",
    category:"Trending",
    genre:"Sci-Fi",
    year:2024,
    duration:"2h 17m",
    rating:8.9,
    age:"13+",
    poster:"images/posters/movie2.jpg",
    banner:"images/banners/movie2.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"A rescue crew lands on an abandoned planet where mysterious creatures begin hunting them."
},

{
    id:3,
    title:"Galaxy War",
    category:"Trending",
    genre:"Sci-Fi",
    year:2026,
    duration:"2h 31m",
    rating:9.1,
    age:"13+",
    poster:"images/posters/movie3.jpg",
    banner:"images/banners/movie3.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"Humanity's last fleet fights to save Earth from an interstellar invasion."
},

{
    id:4,
    title:"Dark City",
    category:"Trending",
    genre:"Thriller",
    year:2023,
    duration:"1h 56m",
    rating:8.2,
    age:"16+",
    poster:"images/posters/movie4.jpg",
    banner:"images/banners/movie4.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"A detective uncovers terrifying secrets hidden beneath a city that never sleeps."
},

{
    id:5,
    title:"The Escape",
    category:"Trending",
    genre:"Adventure",
    year:2025,
    duration:"2h 14m",
    rating:8.7,
    age:"13+",
    poster:"images/posters/movie5.jpg",
    banner:"images/banners/movie5.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"Five strangers attempt the impossible escape from a maximum-security island prison."
},

{
    id:6,
    title:"Invisible",
    category:"Trending",
    genre:"Mystery",
    year:2024,
    duration:"2h 02m",
    rating:8.4,
    age:"16+",
    poster:"images/posters/movie6.jpg",
    banner:"images/banners/movie6.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"A journalist investigates unexplained disappearances linked to an ancient legend."
},

{
    id:7,
    title:"Iron Blade",
    category:"Trending",
    genre:"Action",
    year:2025,
    duration:"2h 19m",
    rating:8.8,
    age:"16+",
    poster:"images/posters/movie7.jpg",
    banner:"images/banners/movie7.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"A retired soldier returns to battle after a powerful organization threatens his family."
},

{
    id:8,
    title:"Last Mission",
    category:"Trending",
    genre:"Action",
    year:2026,
    duration:"2h 10m",
    rating:8.9,
    age:"16+",
    poster:"images/posters/movie8.jpg",
    banner:"images/banners/movie8.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"An elite covert team embarks on one final mission that could prevent global catastrophe."
},

{
    id:9,
    title:"Storm Force",
    category:"Trending",
    genre:"Adventure",
    year:2024,
    duration:"2h 05m",
    rating:8.3,
    age:"13+",
    poster:"images/posters/movie9.jpg",
    banner:"images/banners/movie9.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"A team of storm chasers races against time to stop a weather experiment gone wrong."
},

{
    id:10,
    title:"Red Shadow",
    category:"Trending",
    genre:"Crime",
    year:2025,
    duration:"2h 01m",
    rating:8.6,
    age:"18+",
    poster:"images/posters/movie10.jpg",
    banner:"images/banners/movie10.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"A mysterious assassin becomes the target after uncovering a deadly political conspiracy."
}

];

// =========================================
// Helper Functions
// =========================================

// Get all movies
function getAllMovies() {
    return movies;
}

// Find movie by ID
function getMovieById(id) {
    return movies.find(movie => movie.id === id);
}

// Find movie by title
function getMovieByTitle(title) {
    return movies.find(movie =>
        movie.title.toLowerCase() === title.toLowerCase()
    );
}

// Filter by category
function getMoviesByCategory(category) {
    return movies.filter(movie =>
        movie.category === category
    );
}

// Filter by genre
function getMoviesByGenre(genre) {
    return movies.filter(movie =>
        movie.genre === genre
    );
}

console.log("StreamFlix Database Loaded");
// =========================================
// StreamFlix Database
// Part 2 - Action & Sci-Fi
// =========================================

movies.push(

{
    id:11,
    title:"Vortex",
    category:"Action",
    genre:"Sci-Fi",
    year:2026,
    duration:"2h 11m",
    rating:8.8,
    age:"13+",
    poster:"images/posters/movie11.jpg",
    banner:"images/banners/movie11.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"Scientists accidentally open a portal that unleashes dangerous creatures from another dimension."
},

{
    id:12,
    title:"Shadow Strike",
    category:"Action",
    genre:"Action",
    year:2025,
    duration:"2h 09m",
    rating:8.4,
    age:"16+",
    poster:"images/posters/movie12.jpg",
    banner:"images/banners/movie12.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"An undercover operative infiltrates an international crime syndicate before a global attack begins."
},

{
    id:13,
    title:"Cyber City",
    category:"Sci-Fi",
    genre:"Sci-Fi",
    year:2026,
    duration:"2h 25m",
    rating:9.0,
    age:"13+",
    poster:"images/posters/movie13.jpg",
    banner:"images/banners/movie13.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"In a futuristic megacity, one hacker discovers a secret capable of changing humanity forever."
},

{
    id:14,
    title:"Frozen Earth",
    category:"Sci-Fi",
    genre:"Adventure",
    year:2025,
    duration:"2h 18m",
    rating:8.6,
    age:"13+",
    poster:"images/posters/movie14.jpg",
    banner:"images/banners/movie14.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"The survivors of a frozen planet search for the last source of heat before civilization disappears."
},

{
    id:15,
    title:"Inferno",
    category:"Action",
    genre:"Action",
    year:2024,
    duration:"2h 06m",
    rating:8.3,
    age:"16+",
    poster:"images/posters/movie15.jpg",
    banner:"images/banners/movie15.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"A firefighter faces impossible odds while trying to save an entire city from a deadly wildfire."
},

{
    id:16,
    title:"Zero Hour",
    category:"Action",
    genre:"Thriller",
    year:2026,
    duration:"2h 14m",
    rating:8.9,
    age:"16+",
    poster:"images/posters/movie16.jpg",
    banner:"images/banners/movie16.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"A former intelligence officer has only one hour to stop a devastating cyber attack."
},

{
    id:17,
    title:"Skyline 2099",
    category:"Sci-Fi",
    genre:"Sci-Fi",
    year:2027,
    duration:"2h 20m",
    rating:9.2,
    age:"13+",
    poster:"images/posters/movie17.jpg",
    banner:"images/banners/movie17.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"Pilots defend the floating cities of Earth from mysterious aerial invaders."
},

{
    id:18,
    title:"Steel Titan",
    category:"Action",
    genre:"Action",
    year:2025,
    duration:"2h 16m",
    rating:8.7,
    age:"13+",
    poster:"images/posters/movie18.jpg",
    banner:"images/banners/movie18.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"A prototype combat robot becomes humanity's final hope after an AI rebellion."
},

{
    id:19,
    title:"Deep Horizon",
    category:"Adventure",
    genre:"Adventure",
    year:2024,
    duration:"2h 07m",
    rating:8.2,
    age:"13+",
    poster:"images/posters/movie19.jpg",
    banner:"images/banners/movie19.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"A deep-sea expedition discovers an ancient civilization beneath the ocean floor."
},

{
    id:20,
    title:"Quantum Chase",
    category:"Sci-Fi",
    genre:"Sci-Fi",
    year:2026,
    duration:"2h 13m",
    rating:9.1,
    age:"13+",
    poster:"images/posters/movie20.jpg",
    banner:"images/banners/movie20.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"A physicist races through parallel universes to stop reality itself from collapsing."
}
);

console.log("Action & Sci-Fi movies loaded.");// =========================================
// StreamFlix Database
// Part 3 - Comedy, Horror, Drama & Animation
// =========================================

movies.push(

{
    id:21,
    title:"Laugh Out Loud",
    category:"Comedy",
    genre:"Comedy",
    year:2025,
    duration:"1h 52m",
    rating:8.1,
    age:"13+",
    poster:"images/posters/movie21.jpg",
    banner:"images/banners/movie21.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"Three lifelong friends accidentally become internet celebrities overnight."
},

{
    id:22,
    title:"Weekend Trouble",
    category:"Comedy",
    genre:"Comedy",
    year:2024,
    duration:"1h 49m",
    rating:7.9,
    age:"13+",
    poster:"images/posters/movie22.jpg",
    banner:"images/banners/movie22.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"A relaxing vacation turns into complete chaos after one wrong suitcase."
},

{
    id:23,
    title:"Crazy Family",
    category:"Comedy",
    genre:"Comedy",
    year:2025,
    duration:"2h 01m",
    rating:8.4,
    age:"U",
    poster:"images/posters/movie23.jpg",
    banner:"images/banners/movie23.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"A family reunion quickly spirals into hilarious disasters."
},

{
    id:24,
    title:"Haunted Manor",
    category:"Horror",
    genre:"Horror",
    year:2026,
    duration:"2h 03m",
    rating:8.5,
    age:"18+",
    poster:"images/posters/movie24.jpg",
    banner:"images/banners/movie24.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"A group of friends spend one terrifying night inside an abandoned mansion."
},

{
    id:25,
    title:"Silent Forest",
    category:"Horror",
    genre:"Horror",
    year:2025,
    duration:"1h 58m",
    rating:8.2,
    age:"18+",
    poster:"images/posters/movie25.jpg",
    banner:"images/banners/movie25.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"Something ancient awakens in a forest where no one returns alive."
},

{
    id:26,
    title:"Broken Dreams",
    category:"Drama",
    genre:"Drama",
    year:2024,
    duration:"2h 12m",
    rating:8.8,
    age:"13+",
    poster:"images/posters/movie26.jpg",
    banner:"images/banners/movie26.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"An inspiring story about hope, family, and second chances."
},

{
    id:27,
    title:"Beyond Tomorrow",
    category:"Drama",
    genre:"Drama",
    year:2025,
    duration:"2h 18m",
    rating:8.9,
    age:"13+",
    poster:"images/posters/movie27.jpg",
    banner:"images/banners/movie27.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"A young scientist struggles to balance ambition with personal sacrifice."
},

{
    id:28,
    title:"Magic Kingdom",
    category:"Animation",
    genre:"Animation",
    year:2026,
    duration:"1h 45m",
    rating:8.7,
    age:"U",
    poster:"images/posters/movie28.jpg",
    banner:"images/banners/movie28.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"A brave young wizard embarks on an unforgettable magical adventure."
},

{
    id:29,
    title:"Ocean Friends",
    category:"Animation",
    genre:"Animation",
    year:2025,
    duration:"1h 41m",
    rating:8.3,
    age:"U",
    poster:"images/posters/movie29.jpg",
    banner:"images/banners/movie29.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"Two sea creatures journey across the ocean to save their coral home."
},

{
    id:30,
    title:"Forever Together",
    category:"Romance",
    genre:"Romance",
    year:2024,
    duration:"2h 09m",
    rating:8.6,
    age:"13+",
    poster:"images/posters/movie30.jpg",
    banner:"images/banners/movie30.jpg",
    trailer:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    description:"A chance encounter changes two strangers' lives forever."
}

);

console.log("Comedy, Horror, Drama, Animation & Romance movies loaded.");