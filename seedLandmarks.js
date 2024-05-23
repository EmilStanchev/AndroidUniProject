const { db } = require("./FirebaseConfig");
const { collection, addDoc } = require("firebase/firestore");

const landmarks = [
  {
    country_name: "Bulgaria",
    title: "Rila Monastery",
    description:
      "Rila Monastery is one of Bulgaria's most iconic monasteries and a UNESCO World Heritage site.",
    contact_id: "Contact details",
    imageUrl:
      "https://www.laughtraveleat.com/wp-content/uploads/2023/03/rila-monastery-day-trip-from-sofia-bulgaria-laugh-travel-eat.jpg",
    rating: 4.7,
    review: "0 Reviews",
    location: "Rila Monastery, Bulgaria",
    latitude: 42.1333,
    longitude: 23.4,
    popular: [],
    type: "Monastery",
  },
  {
    country_name: "Bulgaria",
    title: "Alexander Nevsky Cathedral",
    description:
      "The stunning Alexander Nevsky Cathedral in Sofia is one of the largest Eastern Orthodox cathedrals in the world.",
    contact_id: "Contact details",
    imageUrl: "https://images2.alphacoders.com/484/thumb-1920-484148.jpg",
    rating: 4.6,
    review: "0 Reviews",
    location: "Sofia, Bulgaria",
    latitude: 42.6977,
    longitude: 23.3219,
    popular: [],
    type: "Cathedral",
  },
  {
    country_name: "Bulgaria",
    title: "Plovdiv Old Town",
    description:
      "Explore the charming old town of Plovdiv, known for its cobblestone streets and historic architecture.",
    contact_id: "Contact details",
    imageUrl: "https://lostinplovdiv.com/media/images/752d2efe4.jpg",
    rating: 4.4,
    review: "0 Reviews",
    location: "Plovdiv, Bulgaria",
    latitude: 42.1354,
    longitude: 24.7453,
    popular: [],
    type: "Historic Town",
  },
  {
    country_name: "Serbia",
    title: "Belgrade Fortress",
    description:
      "Belgrade Fortress, located at the confluence of the River Sava and Danube, is a historic landmark with a rich history dating back to ancient times. Explore the well-preserved fortifications, museums, and enjoy panoramic views of the city.",
    contact_id: "Contact details",
    imageUrl:
      "https://media.istockphoto.com/id/1369116230/photo/kalemegdan-fortress-in-belgrade-serbia.jpg?s=612x612&w=0&k=20&c=oSuS4KEjqBTckRpclIq2-9hPahl_o25yAn8XKxM4ph8=",
    rating: 4.5,
    review: "0 Reviews",
    location: "Belgrade, Serbia",
    latitude: 44.822,
    longitude: 20.4493,
    popular: [],
    type: "Fortress",
  },
  {
    country_name: "Serbia",
    title: "Niš Fortress",
    description:
      "Niš Fortress, one of the best-preserved fortifications in the Balkans, stands as a testament to Niš' long and varied history. Explore the fortress grounds, visit the museums within its walls, and soak in the cultural heritage of this historic site.",
    contact_id: "Contact details",
    imageUrl:
      "https://media.istockphoto.com/id/497384316/photo/gate-of-old-medieval-nis-fortress-serbia.jpg?s=612x612&w=0&k=20&c=mM-c6LKvB9WCSrrOUVxkMQIzSzlL-syjHVwX6NjN8c0=",
    rating: 4.6,
    review: "0 Reviews",
    location: "Niš, Serbia",
    latitude: 43.3186,
    longitude: 21.8958,
    popular: [],
    type: "Fortress",
  },
  {
    country_name: "Serbia",
    title: "Drvengrad (Kustendorf)",
    description:
      "Drvengrad, also known as Kustendorf, is a unique wooden village nestled in the Serbian mountains. Conceived by filmmaker Emir Kusturica, this ethno-village offers a distinctive atmosphere with traditional architecture, cultural events, and a serene escape into nature.",
    contact_id: "Contact details",
    imageUrl:
      "https://st4.depositphotos.com/3209557/24970/v/600/depositphotos_249705092-stock-video-drvengrad-mecavnik-kustendorf-traditional-village.jpg",
    rating: 4.8,
    review: "0 Reviews",
    location: "Mokra Gora, Serbia",
    latitude: 43.7951,
    longitude: 19.5309,
    popular: [],
    type: "Village",
  },
  {
    country_name: "Germany",
    title: "Neuschwanstein Castle",
    description:
      "Neuschwanstein Castle, a fairytale-like fortress nestled in the Bavarian Alps, is an iconic symbol of Germany. Explore the ornate architecture, breathtaking landscapes, and delve into the history of this enchanting castle.",
    contact_id: "Contact details",
    imageUrl:
      "https://themunichguide.de/wp-content/uploads/2020/01/neuschwanstein-castle-in-winter-1-1024x684.jpg",
    rating: 4.9,
    review: "0 Reviews",
    location: "Hohenschwangau, Germany",
    latitude: 47.5576,
    longitude: 10.7498,
    popular: [],
    type: "Castle",
  },
  {
    country_name: "Germany",
    title: "Cologne Cathedral (Kölner Dom)",
    description:
      "Cologne Cathedral, a masterpiece of Gothic architecture, dominates the skyline of Cologne. Marvel at the intricate details, climb to the top for panoramic views, and experience the spiritual and cultural significance of this iconic cathedral.",
    contact_id: "Contact details",
    imageUrl: "https://live.staticflickr.com/7103/7276385146_3104539fd7_4k.jpg",
    rating: 4.8,
    review: "0 Reviews",
    location: "Cologne, Germany",
    latitude: 50.9413,
    longitude: 6.9583,
    popular: [],
    type: "Cathedral",
  },
  {
    country_name: "Spain",
    title: "Sagrada Família",
    description:
      "The Sagrada Família, a masterpiece by architect Antoni Gaudí, is an iconic basilica in Barcelona. Admire the unique architecture, intricate facades, and immerse yourself in the spiritual and artistic significance of this ongoing construction.",
    contact_id: "Contact details",
    imageUrl:
      "https://i.pinimg.com/originals/df/85/ff/df85ff5f444ec6eedd4b657c10d3c8e8.png",
    rating: 4.9,
    review: "0 Reviews",
    location: "Barcelona, Spain",
    latitude: 41.4036,
    longitude: 2.1744,
    popular: [],
    type: "Basilica",
  },
  {
    country_name: "Spain",
    title: "Park Güell",
    description:
      "Park Güell, another creation by Antoni Gaudí, is a colorful public park in Barcelona. Enjoy the vibrant mosaic sculptures, unique architecture, and panoramic views of the city while experiencing the artistic and playful atmosphere of this park.",
    contact_id: "Contact details",
    imageUrl: "https://wallpapercave.com/wp/wp4196479.jpg",
    rating: 4.7,
    review: "0 Reviews",
    location: "Barcelona, Spain",
    latitude: 41.4145,
    longitude: 2.1527,
    popular: [],
    type: "Park",
  },
  {
    country_name: "France",
    title: "Eiffel Tower",
    description:
      "The Eiffel Tower is one of the world's most iconic landmarks, offering breathtaking views of Paris.",
    contact_id: "Contact details",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfr91uk_ZvRBuf9SW5sA-m_TBHjR6Y1dT9OBJ8PwHT4pPFuQfr2F7En0VS9MrhMPx4gFw&usqp=CAU",
    rating: 4.9,
    review: "0 Reviews",
    location: "Paris, France",
    latitude: 48.858844,
    longitude: 2.294351,
    popular: [],
    type: "Tower",
  },
  {
    country_name: "France",
    title: "Louvre Museum",
    description:
      "The Louvre is one of the world's largest and most famous art museums, home to countless masterpieces.",
    contact_id: "Contact details",
    imageUrl:
      "https://w0.peakpx.com/wallpaper/222/338/HD-wallpaper-louvre-paris-france-travel.jpg",
    rating: 4.8,
    review: "0 Reviews",
    location: "Paris, France",
    latitude: 48.860642,
    longitude: 2.335769,
    popular: [],
    type: "Museum",
  },
  {
    country_name: "France",
    title: "Mont Saint-Michel",
    description:
      "Mont Saint-Michel is a picturesque island commune known for its medieval abbey perched on a hill.",
    contact_id: "Contact details",
    imageUrl:
      "https://w0.peakpx.com/wallpaper/493/2/HD-wallpaper-mont-saint-michel-sunset-french-landmarks-island-france-europe.jpg",
    rating: 4.7,
    review: "0 Reviews",
    location: "Normandy, France",
    latitude: 48.6361,
    longitude: -1.512,
    popular: [],
    type: "Abbey",
  },
  {
    country_name: "Italy",
    title: "Colosseum",
    description:
      "The Colosseum is an iconic Roman amphitheater in Rome, a symbol of ancient Rome and a must-visit attraction.",
    contact_id: "Contact details",
    imageUrl:
      "https://media.istockphoto.com/id/1290101405/sv/foto/colosseum-i-rom-med-morgonsol.jpg?s=170667a&w=0&k=20&c=d5GI9hed3t2X6rzI19Gaj5OraF-Q2t9pAN-_90Q1JCc=",
    rating: 4.9,
    review: "0 Reviews",
    location: "Rome, Italy",
    latitude: 41.8902,
    longitude: 12.4923,
    popular: [],
    type: "Amphitheater",
  },
  {
    country_name: "Italy",
    title: "Venice Canals",
    description:
      "Explore the romantic canals of Venice, known for its gondolas and historic architecture.",
    contact_id: "Contact details",
    imageUrl: "https://i.ytimg.com/vi/iDWVxKKTmK8/maxresdefault.jpg",
    rating: 4.8,
    review: "0 Reviews",
    location: "Venice, Italy",
    latitude: 45.4408,
    longitude: 12.3155,
    popular: [],
    type: "Canals",
  },
  {
    country_name: "Italy",
    title: "Florence's Historic Center",
    description:
      "The historic center of Florence is the birthplace of the Renaissance, home to world-renowned art and architecture.",
    contact_id: "Contact details",
    imageUrl:
      "https://tourismmedia.italia.it/is/image/mitur/20210401173629-firenze-toscana-gettyimages-1145040590-2?wid=600&hei=700&fit=constrain,1&fmt=webp",
    rating: 4.7,
    review: "0 Reviews",
    location: "Florence, Italy",
    latitude: 43.7695,
    longitude: 11.2558,
    popular: [],
    type: "Historic Center",
  },
  {
    country_name: "USA",
    title: "Statue of Liberty",
    description:
      "The Statue of Liberty is an iconic symbol of freedom and democracy, located on Liberty Island in New York Harbor.",
    contact_id: "Contact details",
    imageUrl:
      "https://wallpapermemory.com/uploads/393/statue-of-liberty-background-hd-2560x1440-475984.jpg",
    rating: 4.9,
    review: "0 Reviews",
    location: "New York, United States",
    latitude: 40.6892,
    longitude: -74.0445,
    popular: [],
    type: "Statue",
  },
  {
    country_name: "USA",
    title: "Grand Canyon",
    description:
      "The Grand Canyon is a monumental natural wonder, showcasing breathtaking canyons and stunning landscapes in Arizona.",
    contact_id: "Contact details",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/940/939/655/grand-canyon-4k-best-computer-wallpaper-preview.jpg",
    rating: 4.8,
    review: "0 Reviews",
    location: "Arizona, United States",
    latitude: 36.0551,
    longitude: -112.1401,
    popular: [],
    type: "Natural Wonder",
  },
  {
    country_name: "USA",
    title: "Yellowstone National Park",
    description:
      "Yellowstone National Park is a world-famous park known for its geothermal wonders, wildlife, and stunning landscapes.",
    contact_id: "Contact details",
    imageUrl: "https://images4.alphacoders.com/103/103848.jpg",
    rating: 4.7,
    review: "0 Reviews",
    location: "Wyoming, Montana, and Idaho, United States",
    latitude: 44.428,
    longitude: -110.5885,
    popular: [],
    type: "National Park",
  },
  {
    country_name: "Greece",
    title: "Acropolis of Athens",
    description:
      "The Acropolis of Athens, a UNESCO World Heritage site, is an ancient citadel perched on a rocky outcrop above the city. Explore iconic structures like the Parthenon, Erechtheion, and Propylaea, and witness the architectural wonders of ancient Greece.",
    contact_id: "Contact details",
    imageUrl:
      "https://c4.wallpaperflare.com/wallpaper/52/874/427/ruins-of-the-acropolis-athens-attiki-greece-wallpaper-preview.jpg",
    rating: 4.9,
    review: "0 Reviews",
    location: "Athens, Greece",
    latitude: 37.9715,
    longitude: 23.7263,
    popular: [],
    type: "Citadel",
  },
  {
    country_name: "Greece",
    title: "Santorini",
    description:
      "Santorini, a stunning island in the Aegean Sea, is famous for its white-washed buildings, blue-domed churches, and breathtaking sunsets. Explore the charming villages, relax on beautiful beaches, and experience the unique beauty of this Greek paradise.",
    contact_id: "Contact details",
    imageUrl:
      "https://images.pond5.com/sunset-santorini-greece-073996165_prevstill.jpeg",
    rating: 4.8,
    review: "0 Reviews",
    location: "Santorini, Greece",
    latitude: 36.3932,
    longitude: 25.4615,
    popular: [],
    type: "Island",
  },
];

async function seedLandmarks() {
  const landmarkRef = collection(db, "landmarks");
  landmarks.forEach((landmark) => {
    addDoc(landmarkRef, landmark)
      .then(() => {
        console.log("Landmark added:", landmark.title);
      })
      .catch((error) => {
        console.error("Error adding landmark:", error);
      });
  });
}
seedLandmarks();
