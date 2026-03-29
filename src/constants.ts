import { Language, Room, Translation } from './types';

export const LANGUAGES: { code: Language; label: string }[] = [
  { code: 'en', label: 'EN' },
  { code: 'tj', label: 'TJ' },
  { code: 'ru', label: 'RU' },
];

export const ROOMS: Room[] = [
  {
    id: 'standard',
    name: {
      en: 'Standard Room',
      tj: 'Ҳуҷраи стандартӣ',
      ru: 'Стандартный номер',
    },
    description: {
      en: 'Comfortable and cozy room for a peaceful stay.',
      tj: 'Ҳуҷраи бароҳат ва шинам барои истироҳати ором.',
      ru: 'Уютный и комфортабельный номер для спокойного отдыха.',
    },
    price: 550,
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80&w=800',
    amenities: ['Wi-Fi', 'TV', 'AC', 'Shower'],
  },
  {
    id: 'twin',
    name: {
      en: 'Twin Room',
      tj: 'Ҳуҷра бо ду кати алоҳида',
      ru: 'Двухместный номер с двумя кроватями',
    },
    description: {
      en: 'Perfect for friends or colleagues traveling together.',
      tj: 'Беҳтарин барои дӯстон ё ҳамкороне, ки якҷоя сафар мекунанд.',
      ru: 'Идеально подходит для друзей или коллег, путешествующих вместе.',
    },
    price: 600,
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800',
    amenities: ['Wi-Fi', 'TV', 'AC', 'Shower'],
  },
  {
    id: 'double',
    name: {
      en: 'Double Room',
      tj: 'Ҳуҷраи дукаса',
      ru: 'Двухместный номер с одной кроватью',
    },
    description: {
      en: 'Spacious room with a large bed for ultimate comfort.',
      tj: 'Ҳуҷраи васеъ бо кати калон барои бароҳатии комил.',
      ru: 'Просторный номер с большой кроватью для максимального комфорта.',
    },
    price: 650,
    image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800',
    amenities: ['Wi-Fi', 'TV', 'AC', 'Bathtub'],
  },
];

export const TRANSLATIONS: { [key in Language]: Translation } = {
  en: {
    hero: {
      title: 'Comfortable Stay in the Heart of Dushanbe',
      subtitle: 'Affordable rooms, modern amenities, and a peaceful experience',
      bookNow: 'Book Now',
      checkAvailability: 'Check Availability',
    },
    booking: {
      checkIn: 'Check-in',
      checkOut: 'Check-out',
      guests: 'Guests',
      search: 'Search',
    },
    trust: {
      rating: '4.1 Rating',
      reviews: 'Based on guest reviews',
      trusted: 'Trusted by travelers visiting Dushanbe',
    },
    rooms: {
      title: 'Our Rooms',
      from: 'From',
      night: 'night',
      bookThis: 'Book this room',
    },
    whyUs: {
      title: 'Why Choose Aram Hotel',
      location: 'Central Location',
      locationDesc: 'Located in the heart of Dushanbe, close to key attractions.',
      parking: 'Free Parking',
      parkingDesc: 'Secure and free parking for all our guests.',
      wifi: 'Fast Wi-Fi',
      wifiDesc: 'High-speed internet access throughout the hotel.',
      breakfast: 'Breakfast Included',
      breakfastDesc: 'Start your day with a delicious and fresh breakfast.',
      ac: 'Air Conditioning',
      acDesc: 'All rooms are fully air-conditioned for your comfort.',
    },
    gallery: {
      title: 'Gallery',
    },
    location: {
      title: 'Location',
      address: 'кӯчаи Хуссейнзода 2/1, Dushanbe',
      phone: '+992 94 562 2222',
      attractions: 'Close to key attractions',
      airport: 'Easy airport access',
    },
    reviews: {
      title: 'Guest Reviews',
    },
    cta: {
      title: 'Ready to stay at Aram Hotel?',
      book: 'Book Your Room',
      call: 'Call Now',
    },
    footer: {
      quickLinks: 'Quick Links',
      contact: 'Contact Us',
      followUs: 'Follow Us',
    },
    urgency: {
      fewRooms: 'Only a few rooms left',
      bestPrice: 'Best price guarantee',
      freeCancellation: 'Free cancellation available',
    },
  },
  tj: {
    hero: {
      title: 'Иқомати бароҳат дар маркази Душанбе',
      subtitle: 'Ҳуҷраҳои дастрас, шароити муосир ва таҷрибаи ором',
      bookNow: 'Ҳозир фармоиш диҳед',
      checkAvailability: 'Мавҷудиятро санҷед',
    },
    booking: {
      checkIn: 'Вуруд',
      checkOut: 'Хуруҷ',
      guests: 'Меҳмонон',
      search: 'Ҷустуҷӯ',
    },
    trust: {
      rating: 'Рейтинги 4.1',
      reviews: 'Дар асоси баррасиҳои меҳмонон',
      trusted: 'Мавриди эътимоди сайёҳоне, ки ба Душанбе меоянд',
    },
    rooms: {
      title: 'Ҳуҷраҳои мо',
      from: 'Аз',
      night: 'шаб',
      bookThis: 'Ин ҳуҷраро фармоиш диҳед',
    },
    whyUs: {
      title: 'Чаро Aram Hotel-ро интихоб кунед',
      location: 'Ҷойгиршавии марказӣ',
      locationDesc: 'Дар маркази Душанбе, наздик ба ҷойҳои ҷолиби диққат ҷойгир аст.',
      parking: 'Истгоҳи ройгон',
      parkingDesc: 'Истгоҳи бехатар ва ройгон барои ҳамаи меҳмонони мо.',
      wifi: 'Wi-Fi-и зуд',
      wifiDesc: 'Дастрасии баландсуръат ба интернет дар тамоми меҳмонхона.',
      breakfast: 'Нонушта дохил карда шудааст',
      breakfastDesc: 'Рӯзи худро бо нонуштаи болаззат ва тару тоза оғоз кунед.',
      ac: 'Кондитсионер',
      acDesc: 'Ҳама ҳуҷраҳо барои бароҳатии шумо пурра бо кондитсионер муҷаҳҳаз шудаанд.',
    },
    gallery: {
      title: 'Галерея',
    },
    location: {
      title: 'Ҷойгиршавӣ',
      address: 'кӯчаи Хуссейнзода 2/1, Душанбе',
      phone: '+992 94 562 2222',
      attractions: 'Наздик ба ҷойҳои ҷолиби диққат',
      airport: 'Дастрасии осон ба фурудгоҳ',
    },
    reviews: {
      title: 'Баррасиҳои меҳмонон',
    },
    cta: {
      title: 'Барои иқомат дар Aram Hotel омодаед?',
      book: 'Ҳуҷраро фармоиш диҳед',
      call: 'Ҳозир занг занед',
    },
    footer: {
      quickLinks: 'Пайвандҳои зуд',
      contact: 'Бо мо тамос гиред',
      followUs: 'Моро пайгирӣ кунед',
    },
    urgency: {
      fewRooms: 'Танҳо чанд ҳуҷра боқӣ мондааст',
      bestPrice: 'Кафолати нархи беҳтарин',
      freeCancellation: 'Бекоркунии ройгон мавҷуд аст',
    },
  },
  ru: {
    hero: {
      title: 'Комфортный отдых в самом сердце Душанбе',
      subtitle: 'Доступные номера, современные удобства и спокойная атмосфера',
      bookNow: 'Забронировать',
      checkAvailability: 'Проверить наличие',
    },
    booking: {
      checkIn: 'Заезд',
      checkOut: 'Выезд',
      guests: 'Гости',
      search: 'Поиск',
    },
    trust: {
      rating: 'Рейтинг 4.1',
      reviews: 'На основе отзывов гостей',
      trusted: 'Нам доверяют путешественники, посещающие Душанбе',
    },
    rooms: {
      title: 'Наши номера',
      from: 'От',
      night: 'ночь',
      bookThis: 'Забронировать этот номер',
    },
    whyUs: {
      title: 'Почему выбирают Aram Hotel',
      location: 'Центральное расположение',
      locationDesc: 'Расположен в самом центре Душанбе, рядом с основными достопримечательностями.',
      parking: 'Бесплатная парковка',
      parkingDesc: 'Охраняемая и бесплатная парковка для всех наших гостей.',
      wifi: 'Быстрый Wi-Fi',
      wifiDesc: 'Высокоскоростной доступ в интернет на всей территории отеля.',
      breakfast: 'Завтрак включен',
      breakfastDesc: 'Начните свой день с вкусного и свежего завтрака.',
      ac: 'Кондиционер',
      acDesc: 'Все номера полностью кондиционированы для вашего комфорта.',
    },
    gallery: {
      title: 'Галерея',
    },
    location: {
      title: 'Расположение',
      address: 'улица Хуссейнзода 2/1, Душанбе',
      phone: '+992 94 562 2222',
      attractions: 'Рядом с основными достопримечательностями',
      airport: 'Легкий доступ к аэропорту',
    },
    reviews: {
      title: 'Отзывы гостей',
    },
    cta: {
      title: 'Готовы остановиться в Aram Hotel?',
      book: 'Забронировать номер',
      call: 'Позвонить сейчас',
    },
    footer: {
      quickLinks: 'Быстрые ссылки',
      contact: 'Связаться с нами',
      followUs: 'Подписывайтесь на нас',
    },
    urgency: {
      fewRooms: 'Осталось всего несколько номеров',
      bestPrice: 'Гарантия лучшей цены',
      freeCancellation: 'Доступна бесплатная отмена',
    },
  },
};
