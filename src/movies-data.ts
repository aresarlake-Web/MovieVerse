import { Movie, MovieDetail, Genre } from "./types";

export const GENRES: Genre[] = [
  { id: 28, name: "Action" },
  { id: 12, name: "Adventure" },
  { id: 16, name: "Animation" },
  { id: 35, name: "Comedy" },
  { id: 80, name: "Crime" },
  { id: 99, name: "Documentary" },
  { id: 18, name: "Drama" },
  { id: 10751, name: "Family" },
  { id: 14, name: "Fantasy" },
  { id: 36, name: "History" },
  { id: 27, name: "Horror" },
  { id: 10402, name: "Music" },
  { id: 9648, name: "Mystery" },
  { id: 10749, name: "Romance" },
  { id: 878, name: "Science Fiction" },
  { id: 53, name: "Thriller" },
  { id: 10752, name: "War" }
];

export const MOCK_MOVIES: MovieDetail[] = [
  {
    id: 20260701,
    title: "Shrek 5",
    overview: "The beloved green ogre Shrek and his loudmouthed partner Donkey return alongside Fiona and Puss in Boots for a brand new, hilarious fairy tale adventure in Far Far Away, navigating family life and comedic quests.",
    poster_path: "https://images.unsplash.com/photo-1608889174637-3c44f6326f1a?auto=format&fit=crop&q=80&w=500",
    backdrop_path: "https://images.unsplash.com/photo-1518156677180-95a2893f3e9f?auto=format&fit=crop&q=80&w=1200",
    vote_average: 8.5,
    release_date: "2026-07-01",
    genre_ids: [16, 12, 35, 10751, 14],
    genres: [
      { id: 16, name: "Animation" },
      { id: 12, name: "Adventure" },
      { id: 35, name: "Comedy" },
      { id: 10751, name: "Family" },
      { id: 14, name: "Fantasy" }
    ],
    popularity: 520.5,
    vote_count: 2450,
    runtime: 105,
    tagline: "The swamp was just the beginning.",
    trailer_url: "https://www.youtube.com/embed/zSWdZVtXT7E",
    cast: [
      { id: 41101, name: "Mike Myers", character: "Shrek (voice)", profile_path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
      { id: 41102, name: "Eddie Murphy", character: "Donkey (voice)", profile_path: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" },
      { id: 41103, name: "Cameron Diaz", character: "Princess Fiona (voice)", profile_path: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" },
      { id: 41104, name: "Antonio Banderas", character: "Puss in Boots (voice)", profile_path: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  },
  {
    id: 20260710,
    title: "Moana (Live Action)",
    overview: "A majestic, live-action reimagining of Disney's cherished animated classic. The high-spirited princess Moana sets sail on a daring, epic journey across the Pacific Ocean alongside the larger-than-life demigod Maui to restore the heart of Te Fiti.",
    poster_path: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=500",
    backdrop_path: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&q=80&w=1200",
    vote_average: 8.2,
    release_date: "2026-07-10",
    genre_ids: [12, 14, 10751, 35],
    genres: [
      { id: 12, name: "Adventure" },
      { id: 14, name: "Fantasy" },
      { id: 10751, name: "Family" },
      { id: 35, name: "Comedy" }
    ],
    popularity: 490.2,
    vote_count: 1820,
    runtime: 125,
    tagline: "The ocean is calling you home.",
    trailer_url: "https://www.youtube.com/embed/LKFuXETZUsI",
    cast: [
      { id: 41201, name: "Catherine Laga'aia", character: "Moana", profile_path: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" },
      { id: 41202, name: "Dwayne Johnson", character: "Maui", profile_path: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" },
      { id: 41203, name: "John Tui", character: "Chief Tui", profile_path: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  },
  {
    id: 20260717,
    title: "The Horizon",
    overview: "The secretive, highly anticipated sci-fi thriller from auteur director Christopher Nolan. Set against the backdrops of gravity, time, and human endurance, a team of pioneering specialists embark on a mind-bending, risky journey to the ultimate outer boundary.",
    poster_path: "https://images.unsplash.com/photo-1461360370896-922624d12aa1?auto=format&fit=crop&q=80&w=500",
    backdrop_path: "https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?auto=format&fit=crop&q=80&w=1200",
    vote_average: 8.7,
    release_date: "2026-07-17",
    genre_ids: [18, 53, 878],
    genres: [
      { id: 18, name: "Drama" },
      { id: 53, name: "Thriller" },
      { id: 878, name: "Science Fiction" }
    ],
    popularity: 550.0,
    vote_count: 3200,
    runtime: 148,
    tagline: "Christopher Nolan's Next Groundbreaking Experience.",
    trailer_url: "https://www.youtube.com/embed/uYPbbksJxIg",
    cast: [
      { id: 41301, name: "Tom Holland", character: "The Specialist", profile_path: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" },
      { id: 41302, name: "Matt Damon", character: "The Director", profile_path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
      { id: 41303, name: "Lupita Nyong'o", character: "The Analyst", profile_path: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  },
  {
    id: 20260724,
    title: "Spider-Man 4",
    overview: "Peter Parker returns in a brand new installment. Living a life completely separate from his old friends following the multiverse events, he finds himself forced out of isolation when an ambitious, deadly threat begins consuming New York City.",
    poster_path: "https://images.unsplash.com/photo-1635805737707-575885ab0820?auto=format&fit=crop&q=80&w=500",
    backdrop_path: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=1200",
    vote_average: 8.6,
    release_date: "2026-07-24",
    genre_ids: [28, 12, 878],
    genres: [
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 878, name: "Science Fiction" }
    ],
    popularity: 580.8,
    vote_count: 4500,
    runtime: 138,
    tagline: "The neighborhood has changed. So has the Hero.",
    trailer_url: "https://www.youtube.com/embed/shW9i6k8Mc0",
    cast: [
      { id: 41301, name: "Tom Holland", character: "Peter Parker / Spider-Man", profile_path: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" },
      { id: 505710, name: "Zendaya", character: "MJ", profile_path: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" },
      { id: 41401, name: "Jacob Batalon", character: "Ned Leeds", profile_path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  },
  {
    id: 20260703,
    title: "Supergirl: Woman of Tomorrow",
    overview: "Kara Zor-El, Superman's battle-tested cousin, journeys across galaxies alongside her companion Krypto and a young alien girl on a ruthless, cosmic quest for vengeance and justice.",
    poster_path: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=500",
    backdrop_path: "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1200",
    vote_average: 7.9,
    release_date: "2026-07-03",
    genre_ids: [878, 28, 12],
    genres: [
      { id: 878, name: "Science Fiction" },
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" }
    ],
    popularity: 430.4,
    vote_count: 1220,
    runtime: 130,
    tagline: "Out of the shadow. Into the light.",
    trailer_url: "https://www.youtube.com/embed/zSWdZVtXT7E",
    cast: [
      { id: 41501, name: "Milly Alcock", character: "Kara Zor-El / Supergirl", profile_path: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" },
      { id: 41502, name: "Eve Ridley", character: "Ruthye Marye Knolle", profile_path: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  },
  {
    id: 157336,
    title: "Interstellar",
    overview: "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    poster_path: "/gEU2Qv6vK677efYv6gA7m765GZz.jpg",
    backdrop_path: "/xJHbZay9p79gC8gYm8gY6gA7m76.jpg",
    vote_average: 8.4,
    release_date: "2014-11-05",
    genre_ids: [878, 18, 12],
    genres: [
      { id: 878, name: "Science Fiction" },
      { id: 18, name: "Drama" },
      { id: 12, name: "Adventure" }
    ],
    popularity: 145.2,
    vote_count: 34320,
    runtime: 169,
    tagline: "Mankind was born on Earth. It was never meant to die here.",
    trailer_url: "https://www.youtube.com/embed/zSWdZVtXT7E",
    cast: [
      { id: 10205, name: "Matthew McConaughey", character: "Cooper", profile_path: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" },
      { id: 1813, name: "Anne Hathaway", character: "Brand", profile_path: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" },
      { id: 83002, name: "Jessica Chastain", character: "Murph", profile_path: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200" },
      { id: 3895, name: "Michael Caine", character: "Professor Brand", profile_path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  },
  {
    id: 27205,
    title: "Inception",
    overview: "Cobb, a skilled thief who commits corporate espionage by infiltrating the sub-conscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
    poster_path: "/o067vCCb69as6686by9vsnSy66U.jpg",
    backdrop_path: "/zt8A6S7gY6V756f8f5M67y0u6oT.jpg",
    vote_average: 8.3,
    release_date: "2010-07-16",
    genre_ids: [878, 28, 12, 53],
    genres: [
      { id: 878, name: "Science Fiction" },
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 53, name: "Thriller" }
    ],
    popularity: 125.4,
    vote_count: 35640,
    runtime: 148,
    tagline: "Your mind is the scene of the crime.",
    trailer_url: "https://www.youtube.com/embed/YoHD9XEInc0",
    cast: [
      { id: 6193, name: "Leonardo DiCaprio", character: "Cobb", profile_path: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
      { id: 2524, name: "Tom Hardy", character: "Eames", profile_path: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" },
      { id: 3084, name: "Elliot Page", character: "Ariadne", profile_path: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" },
      { id: 1100, name: "Joseph Gordon-Levitt", character: "Arthur", profile_path: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  },
  {
    id: 155,
    title: "The Dark Knight",
    overview: "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
    poster_path: "/qJ2tW6jUORz9bq6K8HzgU7gPl0v.jpg",
    backdrop_path: "/nMKgE4G206y6U1vW33bS4C6N4nO.jpg",
    vote_average: 8.5,
    release_date: "2008-07-16",
    genre_ids: [18, 28, 80, 53],
    genres: [
      { id: 18, name: "Drama" },
      { id: 28, name: "Action" },
      { id: 80, name: "Crime" },
      { id: 53, name: "Thriller" }
    ],
    popularity: 138.9,
    vote_count: 31850,
    runtime: 152,
    tagline: "Why So Serious?",
    trailer_url: "https://www.youtube.com/embed/EXeTwQWrcwY",
    cast: [
      { id: 3894, name: "Christian Bale", character: "Bruce Wayne / Batman", profile_path: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
      { id: 1810, name: "Heath Ledger", character: "Joker", profile_path: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200" },
      { id: 1546, name: "Gary Oldman", character: "Jim Gordon", profile_path: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200" },
      { id: 1912, name: "Aaron Eckhart", character: "Harvey Dent", profile_path: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  },
  {
    id: 872585,
    title: "Oppenheimer",
    overview: "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
    poster_path: "/8Gxv8gS6Y0g7gGsb9gG9eU6vG9z.jpg",
    backdrop_path: "/fm6ZVDmIDvD0YPGCOxe37cwgS69.jpg",
    vote_average: 8.1,
    release_date: "2023-07-19",
    genre_ids: [18, 36],
    genres: [
      { id: 18, name: "Drama" },
      { id: 36, name: "History" }
    ],
    popularity: 185.2,
    vote_count: 8200,
    runtime: 180,
    tagline: "The world forever changes.",
    trailer_url: "https://www.youtube.com/embed/uYPbbksJxIg",
    cast: [
      { id: 2037, name: "Cillian Murphy", character: "J. Robert Oppenheimer", profile_path: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
      { id: 5081, name: "Emily Blunt", character: "Kitty Oppenheimer", profile_path: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" },
      { id: 227, name: "Matt Damon", character: "Leslie Groves", profile_path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
      { id: 113, name: "Robert Downey Jr.", character: "Lewis Strauss", profile_path: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  },
  {
    id: 967847,
    title: "Dune: Part Two",
    overview: "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, he endeavors to prevent a terrible future only he can foresee.",
    poster_path: "/czemb77OIv6Ur87VgG9vEPSgFBb.jpg",
    backdrop_path: "/xOMo8BRK7ev677v976fe7vFe8ev.jpg",
    vote_average: 8.3,
    release_date: "2024-02-27",
    genre_ids: [878, 12],
    genres: [
      { id: 878, name: "Science Fiction" },
      { id: 12, name: "Adventure" }
    ],
    popularity: 250.6,
    vote_count: 5320,
    runtime: 166,
    tagline: "Long live the fighters.",
    trailer_url: "https://www.youtube.com/embed/Way9Dexny3w",
    cast: [
      { id: 1190668, name: "Timothée Chalamet", character: "Paul Atreides", profile_path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
      { id: 505710, name: "Zendaya", character: "Chani", profile_path: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" },
      { id: 934273, name: "Rebecca Ferguson", character: "Lady Jessica Atreides", profile_path: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" },
      { id: 1391300, name: "Austin Butler", character: "Feyd-Rautha Harkonnen", profile_path: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  },
  {
    id: 438631,
    title: "Dune",
    overview: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
    poster_path: "/d5NXSklXLi06mZ7WElKT9Ym6FuI.jpg",
    backdrop_path: "/ee9vE68C8x8bF0M7xXpZFe9vEPS.jpg",
    vote_average: 7.8,
    release_date: "2021-09-15",
    genre_ids: [878, 12],
    genres: [
      { id: 878, name: "Science Fiction" },
      { id: 12, name: "Adventure" }
    ],
    popularity: 135.2,
    vote_count: 10420,
    runtime: 155,
    tagline: "It begins.",
    trailer_url: "https://www.youtube.com/embed/n9xhJrPXop4",
    cast: [
      { id: 1190668, name: "Timothée Chalamet", character: "Paul Atreides", profile_path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
      { id: 505710, name: "Zendaya", character: "Chani", profile_path: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" },
      { id: 934273, name: "Rebecca Ferguson", character: "Lady Jessica Atreides", profile_path: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" },
      { id: 16828, name: "Oscar Isaac", character: "Duke Leto Atreides", profile_path: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  },
  {
    id: 324857,
    title: "Spider-Man: Into the Spider-Verse",
    overview: "Miles Morales is juggling his life between being a high school student and being a spider-man. When Wilson \"Kingpin\" Fisk uses a super collider, others from across the Spider-Verse are pulled into this dimension.",
    poster_path: "/ii067vCCb69as6686by9vsnSy66U.jpg",
    backdrop_path: "/7t8A6S7gY6V756f8f5M67y0u6oT.jpg",
    vote_average: 8.4,
    release_date: "2018-12-06",
    genre_ids: [16, 28, 12, 878],
    genres: [
      { id: 16, name: "Animation" },
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 878, name: "Science Fiction" }
    ],
    popularity: 140.8,
    vote_count: 14850,
    runtime: 117,
    tagline: "More than one wears the mask.",
    trailer_url: "https://www.youtube.com/embed/g4HbzUKyJDg",
    cast: [
      { id: 154789, name: "Shameik Moore", character: "Miles Morales / Spider-Man (voice)", profile_path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
      { id: 228965, name: "Hailee Steinfeld", character: "Gwen Stacy / Spider-Woman (voice)", profile_path: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" },
      { id: 4124, name: "Jake Johnson", character: "Peter B. Parker / Spider-Man (voice)", profile_path: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  },
  {
    id: 569094,
    title: "Spider-Man: Across the Spider-Verse",
    overview: "After reuniting with Gwen Stacy, Brooklyn’s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider-Society, a team of Spider-People charged with protecting the Multiverse’s very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must redefine what it means to be a hero so he can save the people he loves most.",
    poster_path: "/8Vt1gAz626g9g3N686fe7eUeV6z.jpg",
    backdrop_path: "/fm6ZVDmIDvD0YPGCOxe37cwgS69.jpg",
    vote_average: 8.4,
    release_date: "2023-05-31",
    genre_ids: [16, 28, 12, 878],
    genres: [
      { id: 16, name: "Animation" },
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 878, name: "Science Fiction" }
    ],
    popularity: 195.4,
    vote_count: 6500,
    runtime: 140,
    tagline: "It's how you wear the mask.",
    trailer_url: "https://www.youtube.com/embed/shW9i6k8Mc0",
    cast: [
      { id: 154789, name: "Shameik Moore", character: "Miles Morales / Spider-Man (voice)", profile_path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
      { id: 228965, name: "Hailee Steinfeld", character: "Gwen Stacy / Spider-Woman (voice)", profile_path: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" },
      { id: 1391300, name: "Oscar Isaac", character: "Miguel O'Hara / Spider-Man 2099 (voice)", profile_path: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  },
  {
    id: 603,
    title: "The Matrix",
    overview: "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents who are fighting the vast and powerful computers who now rule the world.",
    poster_path: "/f89gAz626g9g3N686fe7eUeV6z.jpg",
    backdrop_path: "/zt8A6S7gY6V756f8f5M67y0u6oT.jpg",
    vote_average: 8.2,
    release_date: "1999-03-30",
    genre_ids: [878, 28],
    genres: [
      { id: 878, name: "Science Fiction" },
      { id: 28, name: "Action" }
    ],
    popularity: 98.4,
    vote_count: 24500,
    runtime: 136,
    tagline: "Welcome to the Real World.",
    trailer_url: "https://www.youtube.com/embed/m8e-FF8MqbU",
    cast: [
      { id: 6384, name: "Keanu Reeves", character: "Neo", profile_path: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
      { id: 2975, name: "Laurence Fishburne", character: "Morpheus", profile_path: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" },
      { id: 530, name: "Carrie-Anne Moss", character: "Trinity", profile_path: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  },
  {
    id: 24428,
    title: "The Avengers",
    overview: "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins.",
    poster_path: "/vYHgA626g9g3N686fe7eUeV6z.jpg",
    backdrop_path: "/xJHbZay9p79gC8gYm8gY6gA7m76.jpg",
    vote_average: 7.7,
    release_date: "2012-04-25",
    genre_ids: [878, 28, 12],
    genres: [
      { id: 878, name: "Science Fiction" },
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" }
    ],
    popularity: 110.5,
    vote_count: 29200,
    runtime: 143,
    tagline: "Some assembly required.",
    trailer_url: "https://www.youtube.com/embed/eOrNdBpGMv8",
    cast: [
      { id: 113, name: "Robert Downey Jr.", character: "Tony Stark / Iron Man", profile_path: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" },
      { id: 16828, name: "Chris Evans", character: "Steve Rogers / Captain America", profile_path: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
      { id: 1245, name: "Scarlett Johansson", character: "Natasha Romanoff / Black Widow", profile_path: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  },
  {
    id: 68718,
    title: "Django Unchained",
    overview: "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
    poster_path: "/7o67vCCb69as6686by9vsnSy66U.jpg",
    backdrop_path: "/nMKgE4G206y6U1vW33bS4C6N4nO.jpg",
    vote_average: 8.2,
    release_date: "2012-12-25",
    genre_ids: [18, 12],
    genres: [
      { id: 18, name: "Drama" },
      { id: 12, name: "Adventure" }
    ],
    popularity: 88.6,
    vote_count: 21000,
    runtime: 165,
    tagline: "Life, liberty and the pursuit of vengeance.",
    trailer_url: "https://www.youtube.com/embed/0fUCuvNlOCg",
    cast: [
      { id: 134, name: "Jamie Foxx", character: "Django", profile_path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
      { id: 353, name: "Christoph Waltz", character: "Dr. King Schultz", profile_path: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" },
      { id: 6193, name: "Leonardo DiCaprio", character: "Calvin J. Candie", profile_path: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  },
  {
    id: 19995,
    title: "Avatar",
    overview: "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following his orders and protecting the world he feels is his home.",
    poster_path: "/jRXYjXN6Y0g7gGsb9gG9eU6vG9z.jpg",
    backdrop_path: "/ee9vE68C8x8bF0M7xXpZFe9vEPS.jpg",
    vote_average: 7.6,
    release_date: "2009-12-10",
    genre_ids: [28, 12, 14, 878],
    genres: [
      { id: 28, name: "Action" },
      { id: 12, name: "Adventure" },
      { id: 14, name: "Fantasy" },
      { id: 878, name: "Science Fiction" }
    ],
    popularity: 110.2,
    vote_count: 28900,
    runtime: 162,
    tagline: "Enter the world.",
    trailer_url: "https://www.youtube.com/embed/5PSNL1q36VY",
    cast: [
      { id: 65731, name: "Sam Worthington", character: "Jake Sully", profile_path: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
      { id: 172069, name: "Zoe Saldana", character: "Neytiri", profile_path: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" },
      { id: 10205, name: "Sigourney Weaver", character: "Dr. Grace Augustine", profile_path: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  },
  {
    id: 299534,
    title: "Avengers: Endgame",
    overview: "After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    poster_path: "/or067vCCb69as6686by9vsnSy66U.jpg",
    backdrop_path: "/fm6ZVDmIDvD0YPGCOxe37cwgS69.jpg",
    vote_average: 8.3,
    release_date: "2019-04-24",
    genre_ids: [12, 878, 28],
    genres: [
      { id: 12, name: "Adventure" },
      { id: 878, name: "Science Fiction" },
      { id: 28, name: "Action" }
    ],
    popularity: 162.8,
    vote_count: 23800,
    runtime: 181,
    tagline: "Part of the journey is the end.",
    trailer_url: "https://www.youtube.com/embed/TcMBFSGVi1c",
    cast: [
      { id: 113, name: "Robert Downey Jr.", character: "Tony Stark / Iron Man", profile_path: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" },
      { id: 16828, name: "Chris Evans", character: "Steve Rogers / Captain America", profile_path: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
      { id: 7421, name: "Chris Hemsworth", character: "Thor Odinson", profile_path: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  },
  {
    id: 118340,
    title: "Guardians of the Galaxy",
    overview: "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.",
    poster_path: "/ii1gAz626g9g3N686fe7eUeV6z.jpg",
    backdrop_path: "/zt8A6S7gY6V756f8f5M67y0u6oT.jpg",
    vote_average: 7.9,
    release_date: "2014-07-30",
    genre_ids: [28, 878, 12],
    genres: [
      { id: 28, name: "Action" },
      { id: 878, name: "Science Fiction" },
      { id: 12, name: "Adventure" }
    ],
    popularity: 92.5,
    vote_count: 26500,
    runtime: 121,
    tagline: "Allies of the Universe.",
    trailer_url: "https://www.youtube.com/embed/d96cjJhvlMA",
    cast: [
      { id: 73457, name: "Chris Pratt", character: "Peter Quill / Star-Lord", profile_path: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" },
      { id: 172069, name: "Zoe Saldana", character: "Gamora", profile_path: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" },
      { id: 5432, name: "Dave Bautista", character: "Drax the Destroyer", profile_path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  },
  {
    id: 13,
    title: "Forrest Gump",
    overview: "A man with a low IQ has accomplished great things in his life and been present during significant historic events—in each case, far exceeding what anyone imagined he could do. But despite all he has achieved, his one true love eludes him.",
    poster_path: "/ar067vCCb69as6686by9vsnSy66U.jpg",
    backdrop_path: "/xJHbZay9p79gC8gYm8gY6gA7m76.jpg",
    vote_average: 8.5,
    release_date: "1994-06-23",
    genre_ids: [35, 18, 10749],
    genres: [
      { id: 35, name: "Comedy" },
      { id: 18, name: "Drama" },
      { id: 10749, name: "Romance" }
    ],
    popularity: 85.3,
    vote_count: 25600,
    runtime: 142,
    tagline: "The world will never be the same once you've seen it through the eyes of Forrest Gump.",
    trailer_url: "https://www.youtube.com/embed/bLvqoHBptjg",
    cast: [
      { id: 31, name: "Tom Hanks", character: "Forrest Gump", profile_path: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
      { id: 4125, name: "Robin Wright", character: "Jenny Curran", profile_path: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" },
      { id: 2639, name: "Gary Sinise", character: "Lieutenant Dan Taylor", profile_path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  },
  {
    id: 278,
    title: "The Shawshank Redemption",
    overview: "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long years in prison, Dufresne befriends a band of fellow inmates, most notably a wise long-term convict named Red.",
    poster_path: "/q6be0v6Z677efYv6gA7m765GZz.jpg",
    backdrop_path: "/ee9vE68C8x8bF0M7xXpZFe9vEPS.jpg",
    vote_average: 8.7,
    release_date: "1994-09-23",
    genre_ids: [18, 80],
    genres: [
      { id: 18, name: "Drama" },
      { id: 80, name: "Crime" }
    ],
    popularity: 98.2,
    vote_count: 26100,
    runtime: 142,
    tagline: "Fear can hold you prisoner. Hope can set you free.",
    trailer_url: "https://www.youtube.com/embed/PLl99DlL6b4",
    cast: [
      { id: 504, name: "Tim Robbins", character: "Andy Dufresne", profile_path: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" },
      { id: 192, name: "Morgan Freeman", character: "Ellis Boyd 'Red' Redding", profile_path: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=200" },
      { id: 3895, name: "Bob Gunton", character: "Warden Samuel Norton", profile_path: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  },
  {
    id: 122,
    title: "The Lord of the Rings: The Return of the King",
    overview: "Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam bring the ring closer to the heart of Mordor, the dark lord's domain.",
    poster_path: "/rCbe0v6Z677efYv6gA7m765GZz.jpg",
    backdrop_path: "/xJHbZay9p79gC8gYm8gY6gA7m76.jpg",
    vote_average: 8.5,
    release_date: "2003-12-01",
    genre_ids: [12, 14, 28],
    genres: [
      { id: 12, name: "Adventure" },
      { id: 14, name: "Fantasy" },
      { id: 28, name: "Action" }
    ],
    popularity: 110.4,
    vote_count: 22400,
    runtime: 201,
    tagline: "The Eye of the Enemy is moving.",
    trailer_url: "https://www.youtube.com/embed/r5X-hFf6Bwo",
    cast: [
      { id: 1327, name: "Elijah Wood", character: "Frodo Baggins", profile_path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
      { id: 1328, name: "Ian McKellen", character: "Gandalf", profile_path: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" },
      { id: 1329, name: "Viggo Mortensen", character: "Aragorn", profile_path: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  },
  {
    id: 6479,
    title: "The Grand Budapest Hotel",
    overview: "The writer relates his adventures at a renowned European resort hotel between the first and second World Wars with a concierge who is wrongly accused of murder.",
    poster_path: "/g89gAz626g9g3N686fe7eUeV6z.jpg",
    backdrop_path: "/fm6ZVDmIDvD0YPGCOxe37cwgS69.jpg",
    vote_average: 8.0,
    release_date: "2014-02-26",
    genre_ids: [35, 18],
    genres: [
      { id: 35, name: "Comedy" },
      { id: 18, name: "Drama" }
    ],
    popularity: 58.6,
    vote_count: 13400,
    runtime: 99,
    tagline: "A perfect sanctuary for eccentrics.",
    trailer_url: "https://www.youtube.com/embed/1Fg5iWmQjwk",
    cast: [
      { id: 9642, name: "Ralph Fiennes", character: "Monsieur Gustave H.", profile_path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
      { id: 83002, name: "Tony Revolori", character: "Zero Moustafa", profile_path: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" },
      { id: 1813, name: "Saoirse Ronan", character: "Agatha", profile_path: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  },
  {
    id: 436270,
    title: "La La Land",
    overview: "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
    poster_path: "/qCbe0v6Z677efYv6gA7m765GZz.jpg",
    backdrop_path: "/ee9vE68C8x8bF0M7xXpZFe9vEPS.jpg",
    vote_average: 7.9,
    release_date: "2016-11-29",
    genre_ids: [35, 18, 10749, 10402],
    genres: [
      { id: 35, name: "Comedy" },
      { id: 18, name: "Drama" },
      { id: 10749, name: "Romance" },
      { id: 10402, name: "Music" }
    ],
    popularity: 64.2,
    vote_count: 15600,
    runtime: 128,
    tagline: "Here's to the fools who dream.",
    trailer_url: "https://www.youtube.com/embed/0pdqf4P9MB8",
    cast: [
      { id: 30614, name: "Ryan Gosling", character: "Sebastian Wilder", profile_path: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" },
      { id: 54693, name: "Emma Stone", character: "Mia Dolan", profile_path: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" },
      { id: 17742, name: "John Legend", character: "Keith", profile_path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  },
  {
    id: 129,
    title: "Spirited Away",
    overview: "A young girl, Chihiro, becomes trapped in a strange new world of spirits. When her parents undergo a mysterious transformation, she must call upon the courage she never knew she had to free her family.",
    poster_path: "/3Cbe0v6Z677efYv6gA7m765GZz.jpg",
    backdrop_path: "/zt8A6S7gY6V756f8f5M67y0u6oT.jpg",
    vote_average: 8.5,
    release_date: "2001-07-20",
    genre_ids: [16, 10751, 14],
    genres: [
      { id: 16, name: "Animation" },
      { id: 10751, name: "Family" },
      { id: 14, name: "Fantasy" }
    ],
    popularity: 88.3,
    vote_count: 14800,
    runtime: 125,
    tagline: "Nothing that happens is ever forgotten, even if you can't remember it.",
    trailer_url: "https://www.youtube.com/embed/ByXuk9QqQkk",
    cast: [
      { id: 19588, name: "Rumi Hiiragi", character: "Chihiro Ogino (voice)", profile_path: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" },
      { id: 19589, name: "Miyu Irino", character: "Haku (voice)", profile_path: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  }
];

// Replicate some list expansions so we have 25 additional movies in a smaller form, or complete detailed movies for paging.
export const EXTRA_MOCK_MOVIES: MovieDetail[] = [
  {
    id: 335984,
    title: "Blade Runner 2049",
    overview: "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos.",
    poster_path: "/g69gAz626g9g3N686fe7eUeV6z.jpg",
    backdrop_path: "/fm6ZVDmIDvD0YPGCOxe37cwgS69.jpg",
    vote_average: 7.9,
    release_date: "2017-10-04",
    genre_ids: [878, 18],
    genres: [{ id: 878, name: "Science Fiction" }, { id: 18, name: "Drama" }],
    popularity: 94.1,
    vote_count: 11800,
    runtime: 164,
    tagline: "There's still a page left.",
    trailer_url: "https://www.youtube.com/embed/gCcx85zbxz4",
    cast: [
      { id: 30614, name: "Ryan Gosling", character: "K", profile_path: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" },
      { id: 3, name: "Harrison Ford", character: "Rick Deckard", profile_path: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  },
  {
    id: 2501,
    title: "Whiplash",
    overview: "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
    poster_path: "/ii067vCCb69as6686by9vsnSy66U.jpg",
    backdrop_path: "/ee9vE68C8x8bF0M7xXpZFe9vEPS.jpg",
    vote_average: 8.4,
    release_date: "2014-10-10",
    genre_ids: [18, 10402],
    genres: [{ id: 18, name: "Drama" }, { id: 10402, name: "Music" }],
    popularity: 76.5,
    vote_count: 13900,
    runtime: 106,
    tagline: "Not quite my tempo.",
    trailer_url: "https://www.youtube.com/embed/7d_jQyG8DQY",
    cast: [
      { id: 123847, name: "Miles Teller", character: "Andrew Neiman", profile_path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
      { id: 18239, name: "J.K. Simmons", character: "Terence Fletcher", profile_path: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  },
  {
    id: 496243,
    title: "Parasite",
    overview: "All unemployed, Ki-taek's family takes peculiar interest in the wealthy and glamorous Parks for their livelihood until they get entangled in an unexpected incident.",
    poster_path: "/ar067vCCb69as6686by9vsnSy66U.jpg",
    backdrop_path: "/xJHbZay9p79gC8gYm8gY6gA7m76.jpg",
    vote_average: 8.5,
    release_date: "2019-05-30",
    genre_ids: [35, 18, 53],
    genres: [{ id: 35, name: "Comedy" }, { id: 18, name: "Drama" }, { id: 53, name: "Thriller" }],
    popularity: 110.8,
    vote_count: 16500,
    runtime: 132,
    tagline: "Act like you own the place.",
    trailer_url: "https://www.youtube.com/embed/5xH0HfJHsaY",
    cast: [
      { id: 98721, name: "Song Kang-ho", character: "Ki-taek", profile_path: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" },
      { id: 2841, name: "Lee Sun-kyun", character: "Mr. Park", profile_path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  },
  {
    id: 372058,
    title: "Your Name.",
    overview: "High schoolers Mitsuha and Taki are complete strangers living separate lives. But one night, they suddenly switch places. Mitsuha wakes up in Taki’s body, and he in hers. This bizarre occurrence continues to happen randomly, and the two must adjust their lives around each other.",
    poster_path: "/q6be0v6Z677efYv6gA7m765GZz.jpg",
    backdrop_path: "/zt8A6S7gY6V756f8f5M67y0u6oT.jpg",
    vote_average: 8.5,
    release_date: "2016-08-26",
    genre_ids: [16, 18, 14, 10749],
    genres: [{ id: 16, name: "Animation" }, { id: 18, name: "Drama" }, { id: 14, name: "Fantasy" }, { id: 10749, name: "Romance" }],
    popularity: 88.4,
    vote_count: 10500,
    runtime: 106,
    tagline: "Beautiful destiny.",
    trailer_url: "https://www.youtube.com/embed/hRfHcp2G6gE",
    cast: [
      { id: 19588, name: "Ryunosuke Kamiki", character: "Taki Tachibana (voice)", profile_path: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" },
      { id: 19589, name: "Mone Kamishiraishi", character: "Mitsuha Miyamizu (voice)", profile_path: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  },
  {
    id: 502356,
    title: "Inside Out 2",
    overview: "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who’ve long been running a successful operation by all accounts, aren’t sure how to feel when Anxiety shows up. And it looks like she’s not alone.",
    poster_path: "/czemb77OIv6Ur87VgG9vEPSgFBb.jpg",
    backdrop_path: "/fm6ZVDmIDvD0YPGCOxe37cwgS69.jpg",
    vote_average: 7.7,
    release_date: "2024-06-11",
    genre_ids: [16, 10751, 14, 35],
    genres: [{ id: 16, name: "Animation" }, { id: 10751, name: "Family" }, { id: 14, name: "Fantasy" }, { id: 35, name: "Comedy" }],
    popularity: 380.5,
    vote_count: 3200,
    runtime: 96,
    tagline: "Make room for new emotions.",
    trailer_url: "https://www.youtube.com/embed/LEjhY28568U",
    cast: [
      { id: 54693, name: "Amy Poehler", character: "Joy (voice)", profile_path: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200" },
      { id: 30614, name: "Maya Hawke", character: "Anxiety (voice)", profile_path: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  },
  {
    id: 575264,
    title: "Gladiator II",
    overview: "Years after witnessing the death of the revered hero Maximus at the hands of his uncle, Lucius is forced to enter the Colosseum after his home is conquered by the tyrannical Emperors who now lead Rome with an iron fist. With rage in his heart and the future of the Empire at stake, Lucius must look to his past to find strength and honor to return the glory of Rome to its people.",
    poster_path: "/8Gxv8gS6Y0g7gGsb9gG9eU6vG9z.jpg",
    backdrop_path: "/xOMo8BRK7ev677v976fe7vFe8ev.jpg",
    vote_average: 6.9,
    release_date: "2024-11-13",
    genre_ids: [28, 12, 18],
    genres: [{ id: 28, name: "Action" }, { id: 12, name: "Adventure" }, { id: 18, name: "Drama" }],
    popularity: 420.2,
    vote_count: 1850,
    runtime: 150,
    tagline: "A hero will rise.",
    trailer_url: "https://www.youtube.com/embed/4rgYUipGJNo",
    cast: [
      { id: 1245, name: "Paul Mescal", character: "Lucius", profile_path: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200" },
      { id: 1100, name: "Pedro Pascal", character: "Marcus Acacius", profile_path: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200" },
      { id: 504, name: "Denzel Washington", character: "Macrinus", profile_path: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200" }
    ],
    similar: []
  }
];

export const ALL_MOVIES = [...MOCK_MOVIES, ...EXTRA_MOCK_MOVIES];

// Cross-reference similar movies
for (const m of ALL_MOVIES) {
  // Similar are movies that share at least one genre.
  // We shallow-copy similar movies and ensure their similar field is empty to prevent circular references.
  m.similar = ALL_MOVIES
    .filter(other => other.id !== m.id && other.genre_ids.some(gid => m.genre_ids.includes(gid)))
    .slice(0, 4)
    .map(other => ({
      ...other,
      similar: []
    }));
}
