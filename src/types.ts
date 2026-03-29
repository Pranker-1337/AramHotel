export type Language = 'en' | 'tj' | 'ru';

export interface Room {
  id: string;
  name: { [key in Language]: string };
  description: { [key in Language]: string };
  price: number;
  image: string;
  amenities: string[];
}

export interface Translation {
  hero: {
    title: string;
    subtitle: string;
    bookNow: string;
    checkAvailability: string;
  };
  booking: {
    checkIn: string;
    checkOut: string;
    guests: string;
    search: string;
  };
  trust: {
    rating: string;
    reviews: string;
    trusted: string;
  };
  rooms: {
    title: string;
    from: string;
    night: string;
    bookThis: string;
  };
  whyUs: {
    title: string;
    location: string;
    locationDesc: string;
    parking: string;
    parkingDesc: string;
    wifi: string;
    wifiDesc: string;
    breakfast: string;
    breakfastDesc: string;
    ac: string;
    acDesc: string;
  };
  gallery: {
    title: string;
  };
  location: {
    title: string;
    address: string;
    phone: string;
    attractions: string;
    airport: string;
  };
  reviews: {
    title: string;
  };
  cta: {
    title: string;
    book: string;
    call: string;
  };
  footer: {
    quickLinks: string;
    contact: string;
    followUs: string;
  };
  urgency: {
    fewRooms: string;
    bestPrice: string;
    freeCancellation: string;
  };
}
