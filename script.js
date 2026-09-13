const appConfig = {
  currency: 'idr',
  rooms: {
    'surf-cabin': { idr: 1650000, usd: 110 },
    'lagoon-suite': { idr: 2350000, usd: 155 },
    'familys-bungalow': { idr: 2800000, usd: 190 },
    'swell-pod': { idr: 1980000, usd: 130 },
    'ocean-villa': { idr: 3200000, usd: 220 },
    'private-retreat': { idr: 4200000, usd: 290 }
  },
};

const translations = {
  'Beranda': 'Home',
  'Tentang': 'About',
  'Kamar & Tarif': 'Rooms & Rates',
  'Kamar': 'Rooms',
  'Aktivitas': 'Activities',
  'Kontak': 'Contact',
  'Pesan Kamar': 'Book a Room',
  'Tanya paket': 'Ask about this package',
  'Paket Basic': 'Basic Package',
  'Paket Full': 'Full Package',
  'Paket Crown': 'Crown Package',
  'Hak Cipta Dilindungi.': 'All Rights Reserved.',
  'Paket surfing': 'Surfing packages',
  'Paket perjalanan': 'Travel packages',
  'Tarif menginap dan surfing': 'Stay and surf rates',
  'Promo': 'Special offer',
  'hari / orang': 'day / person',
  'Pilih paket perjalanan yang sesuai dengan gaya surfing Anda, dari pengalaman basic hingga layanan all-inclusive.': 'Choose the travel package that fits your surfing style, from a simple experience to all-inclusive service.',
  'Paket promo untuk pengalaman surfing yang sederhana dan fleksibel.': 'A special package for a simple and flexible surfing experience.',
  'Pilihan untuk surfer yang ingin menjelajahi spot setiap hari dengan perahu.': 'For surfers who want to explore the breaks by boat every day.',
  'Pengalaman all-inclusive. Datang dan biarkan kami mengatur seluruh perjalanan Anda.': 'An all-inclusive experience. Arrive and let us arrange your entire trip.',
  'Akomodasi': 'Accommodation',
  '3 kali makan / hari': '3 meals / day',
  'Kopi, teh & air': 'Coffee, tea & water',
  'Surf guide camp ke spot': 'Surf guide to the breaks',
  '2x boat surfing / hari': '2 boat surf sessions / day',
  'Transfer Siberut Harbor ke camp': 'Siberut Harbor to camp transfer',
  'Tiket ferry Padang ↔ Mentawai': 'Padang ↔ Mentawai ferry tickets',
  'Semua transfer': 'All transfers',
  'Cerita kami': 'Our story',
  'Tentang Bankvault': 'About Bankvault',
  'Kenapa Bankvault': 'Why Bankvault',
  'Pengalaman': 'The experience',
  'Bankvault Mentawai': 'Bankvault Mentawai',
  'Pengalaman pulau': 'Island experiences',
  'Jelajahi surfing, snorkeling, island hopping, sunset cruise, dan aktivitas lainnya di Bankvault Mentawai Surfcamp.': 'Explore surfing, snorkeling, island hopping, sunset cruises, and more at Bankvault Mentawai Surfcamp.',
  'Setiap hari di Mentawai bisa dibentuk di sekitar laut, pulau, dan kekayaan hidup lokal.': 'Every day in Mentawai can be shaped around the sea, the islands, and the richness of local life.',
  'Lihat lebih dekat ritme laut, pulau, dan pengalaman yang menanti di Bankvault Mentawai Surfcamp.': 'Take a closer look at the rhythm of the sea, the islands, and the experiences waiting at Bankvault Mentawai Surfcamp.',
  'Pelajari kisah, semangat, dan pengalaman di balik Bankvault Mentawai Surfcamp di Kepulauan Mentawai.': 'Learn the story, spirit, and experience behind Bankvault Mentawai Surfcamp in the Mentawai Islands.',
  'Kami menciptakan Bankvault untuk memberikan cara yang lebih lambat, lebih kaya, dan lebih utuh dalam merasakan Kepulauan Mentawai bukan hanya tempat tidur, tetapi tempat untuk merasakan ritme laut dan denyut pulau.': 'We created Bankvault to offer a slower, richer, more complete way to experience the Mentawai Islands — not just a bed, but a place to feel the rhythm of the sea and the pulse of the island.',
  'Di mana budaya surfing bertemu ketenangan pulau': 'Where surf culture meets island calm',
  'Baik Anda bepergian sendiri, berdua, bersama teman, atau dalam grup yang fokus pada surfing, setiap bagian pengalaman dibuat terasa personal, immersive, dan terhubung erat dengan lanskap sekitarnya.': 'Whether you travel solo, as a couple, with friends, or in a surf-focused group, every part of the experience is personal, immersive, and closely connected to the surrounding landscape.',
  'Bankvault bukan hanya surf camp ini adalah basis pulau yang dipikirkan dengan matang bagi traveler yang mengejar ombak bersih, istirahat dalam, dan keramahan lokal yang autentik. Konsep kami berakar pada keindahan alam Mentawai laut, karang, hutan, dan jenis kedamaian yang membuat Anda benar-benar rileks.': 'Bankvault is more than a surf camp; it is a thoughtfully designed island base for travelers seeking clean waves, deep rest, and authentic local hospitality. Our concept is rooted in Mentawai’s natural beauty — sea, reefs, forests, and the kind of peace that lets you truly relax.',
  'Kenapa Bankvault': 'Why Bankvault',
  'Dirancang untuk pecinta laut dan impian pulau': 'Designed for sea lovers and island dreamers',
  'Menginap yang dibentuk oleh pulau itu sendiri': 'A stay shaped by the island itself',
  'Energi laut pagi': 'Morning ocean energy',
  'Desain ramah traveler': 'Traveler-friendly design',
  'Hidup yang berorientasi alam': 'Nature-led living',
  'Mulai hari dengan suara laut, kopi, dan jadwal yang dibangun di sekitar kondisi ombak terbaik.': 'Start the day with the sound of the sea, coffee, and a schedule built around the best surf conditions.',
  'Kami melayani surfer, backpacker, pasangan, dan traveler penasaran yang menghargai petualangan dengan kenyamanan.': 'We welcome surfers, backpackers, couples, and curious travelers who value adventure with comfort.',
  'Dari karang hingga hutan dan langit, setiap pemandangan dan setiap kamar dirancang terasa terhubung dengan pulau.': 'From reefs to forests and skies, every view and every room is designed to feel connected to the island.',
  'Spot Mentawai terkenal di seluruh dunia, dan setup kami membawa tamu dekat dengan sesi terbaik.': 'Mentawai breaks are famous worldwide, and our setup brings guests close to the best sessions.',
  'Relaksasi terbuka, angin laut, dan pemandangan pulau yang hijau menciptakan suasana yang menenangkan.': 'Open-air relaxation, sea breezes, and green island views create a calming atmosphere.',
  'Tamu dapat menjelajah teluk tersembunyi, snorkeling di karang, dan mengakses tempat lokal melalui koneksi yang autentik.': 'Guests can explore hidden bays, snorkel coral reefs, and reach local places through authentic connections.',
  'Kami menjaga semuanya hangat, manusiawi, dan jujur — menyeimbangkan kenyamanan dengan keindahan alam yang mentah.': 'We keep everything warm, human, and honest — balancing comfort with raw natural beauty.',
  'Suasana boutique membantu tamu merasa tenang dan menikmati ruang dengan ritme mereka sendiri.': 'Our boutique atmosphere helps guests feel at ease and enjoy space at their own pace.',
  'Setiap malam terasa sinematik, lambat, dan berkesan — penutup hari di pulau yang sempurna.': 'Every evening feels cinematic, slow, and memorable — the perfect end to an island day.',
  'Informasi, reservasi, atau pertanyaan': 'Information, reservations, or questions',
  'Untuk informasi, reservasi, atau pertanyaan seputar pengalaman di Mentawai, kami siap membantu.': 'For information, reservations, or questions about your Mentawai experience, we are here to help.',
  'Temukan kami di kanal komunikasi berikut untuk informasi, reservasi, dan pertanyaan seputar pengalaman surfing serta liburan Anda di Mentawai.': 'Find us through the channels below for information, reservations, and questions about your surfing experience and holiday in Mentawai.',
  'Hubungi kami': 'Get in touch',
  'Kontak': 'Contact',
  'Aktivitas dalam video': 'Activities on video',
  'Cerita dari pulau': 'Stories from the island',
  'Pengalaman surfing': 'Surfing experience',
  'Eksplorasi pantai': 'Coastal exploration',
  'Pengalaman budaya lokal': 'Local culture experience',
  'Pengalaman relaksasi': 'Relaxation experience',
  'Aktivitas memancing': 'Fishing activity',
  'Pemandangan pesisir dan kehidupan lokal': 'Coastal views and local life',
  'Pelarian surf tropis premium di Kepulauan Mentawai.': 'A premium tropical surf escape in the Mentawai Islands.',
  'Nikmati keindahan Mentawai bersama Bankvault Mentawai Surfcamp. Temukan hidup tropis di pulau, surfing, akomodasi, dan petualangan yang tak terlupakan.': 'Experience the beauty of Mentawai with Bankvault Mentawai Surfcamp. Discover tropical island living, surfing, accommodation, and unforgettable adventures.',
  'Lihat pilihan paket surfing Bankvault Mentawai Surfcamp: Basic, Full, dan Crown Package.': 'Explore Bankvault Mentawai Surfcamp packages: Basic, Full, and Crown.',
  'Jelajahi surfing, snorkeling, island hopping, sunset cruise, dan aktivitas lainnya di Bankvault Mentawai Surfcamp.': 'Explore surfing, snorkeling, island hopping, sunset cruises, and more at Bankvault Mentawai Surfcamp.',
  'Hubungi Bankvault Mentawai Surfcamp untuk informasi, reservasi, dan pertanyaan seputar pengalaman di Mentawai.': 'Contact Bankvault Mentawai Surfcamp for information, reservations, and questions about your Mentawai experience.',
  'Atmosfer pulau Bankvault': 'The Bankvault island atmosphere',
  'Gunakan Bahasa Indonesia': 'Use Indonesian',
  'Use English': 'Gunakan Bahasa Inggris',
  'Surf kelas dunia': 'World-class surfing',
  'Surga tropis': 'Tropical paradise',
  'Petualangan pulau': 'Island adventure',
  'Pengalaman autentik': 'Authentic experiences',
  'Privat & tenang': 'Private & peaceful',
  'Sunset tak terlupakan': 'Unforgettable sunsets',
  'Jelajahi surga di ujung dunia dengan ombak kelas dunia, alam yang masih asli, dan ritme hidup pulau yang lebih tenang di Mentawai.': 'Explore paradise at the edge of the world with world-class waves, untouched nature, and a slower island rhythm in the Mentawai.',
  'Babak baru di pulau': 'A new chapter on the island',
  'Tempat Dimana Keindahan Alam Dan Laut Bertemu': 'Where natural beauty meets the sea',
  'Segalanya yang Anda butuhkan untuk liburan pulau yang lebih baik': 'Everything you need for a better island holiday',
  'Bankvault terletak di jantung kepulauan Mentawai destinasi yang dikenal dengan garis pantai yang dipenuhi karang, keindahan pulau yang masih asli, dan spot surfing.': 'Bankvault sits in the heart of the Mentawai Islands, known for reef-lined shores, untouched island beauty, and world-class surf breaks.',
  'Tentang Bankvault': 'About Bankvault',
  'Hidup surfing yang mewah dan tenang': 'A luxurious and peaceful surf life',
  'Lebih dari sekadar trip surfing': 'More than a surf trip',
  'Bangun di tepi laut': 'Wake up by the sea',
  'Naiki ombak yang sempurna': 'Ride the perfect waves',
  'Jelajahi pulau tersembunyi': 'Explore hidden islands',
  'Menikmati sunset': 'Enjoy the sunset',
  'Melambat & bernapas': 'Slow down & breathe',
  'Reconnect dengan alam': 'Reconnect with nature',
  'LOKASI': 'LOCATION',
  'Temukan jalan Anda ke Mentawai': 'Find your way to Mentawai',
  'Kepulauan Mentawai': 'Mentawai Islands',
  'Akses': 'Access',
  'Padang ke Mentawai': 'Padang to Mentawai',
  'Transportasi': 'Transport',
  'Jalur kapal cepat / speed boat': 'Fast ferry / speed boat route',
  'Perjalanan': 'Journey',
  'Estimasi 3-4 jam': 'Estimated 3–4 hours',
  'Cocok untuk': 'Best for',
  'Surf, istirahat, dan pelarian pulau': 'Surfing, rest, and an island escape',
  'Buka di Google Maps ↗': 'Open in Google Maps ↗',
  'Akses ke spot Mentawai yang ikonik, ombak yang ramah perjalanan, dan pengalaman surf trip yang sesungguhnya dengan dukungan lokal.': 'Access iconic Mentawai breaks, travel-friendly waves, and an authentic surf trip supported by local knowledge.',
  'Bangun dengan udara laut, pemandangan laut, dan pohon kelapa yang masih asli di tengah kedamaian pulau.': 'Wake to sea air, ocean views, and untouched palms in the peace of the island.',
  'Mulai dari snorkeling hingga island hopping, setiap hari menawarkan cara baru untuk reconnect dengan pesisir.': 'From snorkeling to island hopping, every day offers a new way to reconnect with the coast.',
  'Berakar pada budaya lokal dan keramahan yang tulus, dengan pesona tinggal di Mentawai yang nyata.': 'Rooted in local culture and genuine hospitality, with the real charm of staying in Mentawai.',
  'Ruang yang dipikirkan dengan baik, layanan hangat, dan suasana tenang yang dirancang untuk tamu yang ingin bernapas lega.': 'Thoughtful spaces, warm service, and a peaceful atmosphere for guests who want room to breathe.',
  'Akhiri hari dengan pemandangan golden hour, seafood segar, dan cakrawala yang akan terus Anda ingat.': 'End the day with golden-hour views, fresh seafood, and a horizon you will remember.',
  'Hirup udara pagi dan mulailah hari sebelum dunia benar-benar terbangun.': 'Breathe in the morning air and start your day before the world truly wakes up.',
  'Pilih ritme yang sesuai dengan level surfing Anda dan nikmati swell Mentawai yang asli.': 'Choose a rhythm that suits your surfing level and enjoy the genuine Mentawai swell.',
  'Pergi dari pesisir dan temukan teluk terpencil, jalur pulau, serta keajaiban karang.': 'Leave the coast behind and discover remote bays, island trails, and coral wonders.',
  'Pemandangan golden hour dan koktail malam menjadi bagian dari cerita pulau Anda.': 'Golden-hour views and evening cocktails become part of your island story.',
  'Tinggalkan kesibukan dan biarkan pulau menetapkan ritme yang lebih alami untuk hari-hari Anda.': 'Leave the busy life behind and let the island set a more natural rhythm for your days.',
  'Luangkan waktu dengan laut, hutan, dan kehangatan budaya Mentawai yang tulus.': 'Make time for the sea, forest, and genuine warmth of Mentawai culture.',
  'Bankvault Mentawai Surfcamp adalah pintu masuk menuju ombak legendaris dan pemandangan alam yang memukau di Kepulauan Mentawai. Di sini, laut selalu dekat dan setiap hari terasa seperti ajakan untuk melambat, menjelajah, dan mengikuti ritme pantai.': 'Bankvault Mentawai Surfcamp is your gateway to legendary waves and breathtaking landscapes in the Mentawai Islands. Here, the sea is always close and every day invites you to slow down, explore, and follow the rhythm of the coast.',
  'Terletak di jantung salah satu lanskap laut paling indah di Indonesia, Bankvault memadukan semangat surf camp santai dengan sentuhan resort pulau yang intim. Anda akan mendapatkan keramahan hangat, keindahan alam yang mentah, serta ketenangan yang hanya bisa dirasakan dari pelarian tepi laut yang sejati.': 'Set in one of Indonesia’s most beautiful seascapes, Bankvault combines the relaxed spirit of a surf camp with the intimacy of an island resort. Expect warm hospitality, raw natural beauty, and the calm found only in a true seaside escape.',
  'Mulai dari kopi pagi di dek hingga sesi sunset di bawah pohon kelapa, setiap momen di sini dibangun di sekitar waktu laut, dikelilingi hijau tropis dan ritme ombak yang bergulung.': 'From morning coffee on the deck to sunset sessions beneath the palms, every moment is shaped by the sea, surrounded by tropical green and rolling waves.',
  'Kami dirancang untuk surfer, petualang, pasangan, dan traveler yang ingin lebih dari sekadar kamar — mereka ingin cerita yang tak terlupakan, ditulis dalam air asin dan sinar matahari, dengan kebebasan untuk pulih, menjelajah, dan reconnect.': 'We are designed for surfers, adventurers, couples, and travelers who want more than a room — they want unforgettable stories written in saltwater and sunlight, with the freedom to recover, explore, and reconnect.',
  'Pemandangan resort Mentawai': 'Mentawai resort view',
  'Surfing di perairan tropis': 'Surfing in tropical waters',
  'Browser Anda tidak mendukung pemutaran video.': 'Your browser does not support video playback.',
  'BANKVAULT MENTAWAI SURFCAMP': 'BANKVAULT MENTAWAI SURFCAMP',
  'IDR': 'IDR',
};

function initLanguageToggle() {
  const buttons = document.querySelectorAll('[data-language]');
  const savedLanguage = localStorage.getItem('bankvault-language') || 'id';

  const replaceText = (language) => {
    document.documentElement.lang = language;
    document.querySelectorAll('[data-language]').forEach((button) => {
      const isActive = button.dataset.language === language;
      button.classList.toggle('active', isActive);
      button.setAttribute('aria-pressed', String(isActive));
      button.setAttribute(
        'aria-label',
        button.dataset.language === 'id'
          ? (language === 'en' ? 'Use Indonesian' : 'Gunakan Bahasa Indonesia')
          : (language === 'en' ? 'Use English' : 'Gunakan Bahasa Inggris')
      );
    });

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const textNodes = [];
    while (walker.nextNode()) textNodes.push(walker.currentNode);
    textNodes.forEach((node) => {
      if (node.parentElement?.closest('.language-toggle')) return;
      const current = node.textContent.trim();
      const translated = language === 'en'
        ? translations[current]
        : Object.keys(translations).find((key) => translations[key] === current);
      if (translated) {
        node.textContent = node.textContent.replace(current, translated);
      }
      if (language === 'en') {
        node.textContent = node.textContent.replaceAll(' / hari / orang', ' / day / person');
      } else {
        node.textContent = node.textContent.replaceAll(' / day / person', ' / hari / orang');
      }
    });

    document.querySelectorAll('[alt], [title], meta[name="description"], meta[property="og:description"]').forEach((element) => {
      const attribute = element.hasAttribute('content') ? 'content' : element.hasAttribute('alt') ? 'alt' : 'title';
      const current = element.getAttribute(attribute);
      const translated = language === 'en'
        ? translations[current]
        : Object.keys(translations).find((key) => translations[key] === current);
      if (translated) element.setAttribute(attribute, translated);
    });

    const title = document.querySelector('title');
    if (title) {
      const translatedTitle = language === 'en'
        ? title.textContent.replace('Tentang', 'About').replace('Kamar & Tarif', 'Rooms & Rates').replace('Aktivitas', 'Activities').replace('Kontak', 'Contact').replace('Tinggal & Jelajahi', 'Stay & Explore')
        : title.textContent.replace('About', 'Tentang').replace('Rooms & Rates', 'Kamar & Tarif').replace('Activities', 'Aktivitas').replace('Contact', 'Kontak').replace('Stay & Explore', 'Tinggal & Jelajahi');
      title.textContent = translatedTitle;
    }
  };

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const language = button.dataset.language;
      localStorage.setItem('bankvault-language', language);
      replaceText(language);
    });
  });
  replaceText(savedLanguage);
}

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initLanguageToggle();
  initPriceToggle();
  initLightbox();
  initTestimonials();
  initCounters();
  initRevealAnimations();
  initScrollProgress();
  document.body.classList.add('page-loaded');
});

function initNavigation() {
  const topbar = document.querySelector('.topbar');
  const navLinks = document.querySelectorAll('.nav-link');
  const menuToggle = document.querySelector('.menu-toggle');
  const navCenter = document.querySelector('.nav-center');
  const path = window.location.pathname.split('/').pop() || 'index.html';

  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) return;
    if (href === path || (path === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  const onScroll = () => {
    if (window.scrollY > 20) {
      topbar?.classList.add('nav-scrolled');
    } else {
      topbar?.classList.remove('nav-scrolled');
    }
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  menuToggle?.addEventListener('click', () => {
    const isOpen = navCenter?.classList.toggle('is-open') ?? false;
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });
  navLinks.forEach((link) => link.addEventListener('click', () => {
    navCenter?.classList.remove('is-open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  }));

}

function initPriceToggle() {
  const toggleButtons = document.querySelectorAll('[data-price-toggle] button');

  toggleButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const target = button.dataset.currency;
      appConfig.currency = target;
      toggleButtons.forEach((btn) => btn.classList.toggle('active', btn === button));
      updateRoomPrices();
    });
  });

  updateRoomPrices();
}

function updateRoomPrices() {
  const roomCards = document.querySelectorAll('[data-room-id]');
  roomCards.forEach((card) => {
    const roomId = card.dataset.roomId;
    const price = appConfig.rooms[roomId];
    if (!price) return;

    const value = price[appConfig.currency];
    const display = appConfig.currency === 'idr'
      ? `IDR ${formatMoney(value, 'idr')}`
      : `USD ${formatMoney(value, 'usd')}`;

    const labelNode = card.querySelector('[data-price-value]');
    if (labelNode) {
      labelNode.textContent = display;
    }
  });
}

function formatMoney(value, currency) {
  return new Intl.NumberFormat(currency === 'idr' ? 'id-ID' : 'en-US', {
    maximumFractionDigits: currency === 'idr' ? 0 : 2,
    minimumFractionDigits: currency === 'idr' ? 0 : 2,
    notation: 'compact'
  }).format(value);
}

function initLightbox() {
  const galleryItems = document.querySelectorAll('.gallery-item');
  const lightbox = document.querySelector('.lightbox');
  const lightboxImage = document.querySelector('.lightbox-image');
  const closeButton = document.querySelector('.lightbox-close');
  const prevButton = document.querySelector('.lightbox-prev');
  const nextButton = document.querySelector('.lightbox-next');

  if (!lightbox || !lightboxImage) return;

  const images = Array.from(galleryItems).map((item) => item.querySelector('img').src);
  let activeIndex = 0;

  const updateLightbox = (index) => {
    activeIndex = (index + images.length) % images.length;
    lightboxImage.src = images[activeIndex];
  };

  galleryItems.forEach((item, index) => {
    item.addEventListener('click', () => {
      updateLightbox(index);
      lightbox.classList.add('open');
    });
  });

  const close = () => lightbox.classList.remove('open');
  closeButton?.addEventListener('click', close);
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) close();
  });
  prevButton?.addEventListener('click', () => updateLightbox(activeIndex - 1));
  nextButton?.addEventListener('click', () => updateLightbox(activeIndex + 1));
  document.addEventListener('keydown', (event) => {
    if (!lightbox.classList.contains('open')) return;
    if (event.key === 'Escape') close();
    if (event.key === 'ArrowLeft') updateLightbox(activeIndex - 1);
    if (event.key === 'ArrowRight') updateLightbox(activeIndex + 1);
  });
}

function initTestimonials() {
  const slider = document.querySelector('.testimonial-slider');
  if (!slider) return;

  const track = slider.querySelector('.testimonial-track');
  const slides = [...slider.querySelectorAll('.testimonial-slide')];
  const prevBtn = slider.querySelector('[data-slide="prev"]');
  const nextBtn = slider.querySelector('[data-slide="next"]');
  let active = 0;

  const updateSlider = () => {
    track.style.transform = `translateX(-${active * 100}%)`;
  };

  prevBtn?.addEventListener('click', () => {
    active = (active - 1 + slides.length) % slides.length;
    updateSlider();
  });

  nextBtn?.addEventListener('click', () => {
    active = (active + 1) % slides.length;
    updateSlider();
  });

  updateSlider();
}

function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  const motionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = Number(el.dataset.target || 0);
      const suffix = el.dataset.suffix || '';
      const duration = 1200;
      const start = performance.now();

      const tick = (now) => {
        const elapsed = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - elapsed, 3);
        const value = Math.round(target * eased);
        el.textContent = `${value}${suffix}`;
        if (elapsed < 1) requestAnimationFrame(tick);
      };

      requestAnimationFrame(tick);
      motionObserver.unobserve(el);
    });
  }, { threshold: 0.4 });

  counters.forEach((counter) => motionObserver.observe(counter));
}

function initRevealAnimations() {
  const revealTargets = document.querySelectorAll('.reveal, .feature-card, .room-card, .activity-card, .gallery-item, .testimonial-slider, .location-panel, .contact-panel, .booking-panel');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach((item) => observer.observe(item));
  window.setTimeout(() => {
    revealTargets.forEach((item) => item.classList.add('is-visible'));
  }, 900);
}

function initScrollProgress() {
  const bar = document.querySelector('.scroll-progress-bar');
  if (!bar) return;

  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const height = document.body.scrollHeight - window.innerHeight;
    const progress = height > 0 ? (scrollTop / height) * 100 : 0;
    bar.style.width = `${progress}%`;
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}
