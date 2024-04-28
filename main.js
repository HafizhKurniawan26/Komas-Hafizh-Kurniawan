
  // Data
  const data = [
   { 
    id: 1, 
    title: 'Pertemuan 1', 
    content: 'Pengenalan Komputer',
    link: 'https://tugas-hafizh-kurniawan.blogspot.com/p/pertemuan-1.html?m=1'
   },
   { 
    id: 2, 
    title: 'Pertemuan 2', 
    content: 'Sejarah, Perkembangan, Kritik Tentang Teknologi Maju',
    link: 'https://tugas-hafizh-kurniawan.blogspot.com/p/pertemuan-2.html'
   },
   { 
    id: 3, 
    title: 'Pertemuan 3', 
    content: 'Pemanfaatan Komputer Di Masyarakat',
    link: 'https://tugas-hafizh-kurniawan.blogspot.com/p/pertemuan-3.html'
   },
   { 
    id: 4, 
    title: 'Pertemuan 4', 
    content: 'Komputer Dan Pendidikan',
    link: 'https://tugas-hafizh-kurniawan.blogspot.com/p/pertemuan-4.html'
   },
   { 
    id: 5, 
    title: 'Pertemuan 5', 
    content: 'Komputer Dan Pemerintahan',
    link: 'https://tugas-hafizh-kurniawan.blogspot.com/p/pertemuan-5.html'
   },
   { 
    id: 6, 
    title: 'Pertemuan 6', 
    content: 'Komputer Dan Industri',
    link: 'https://tugas-hafizh-kurniawan.blogspot.com/p/pertemuan-6.html'
   },
   { 
    id: 7, 
    title: 'Pertemuan 7', 
    content: 'Masyarakat Informasi',
    link: 'https://tugas-hafizh-kurniawan.blogspot.com/p/pertemuan-7.html'
   },
   { 
    id: 8, 
    title: 'Pertemuan 8', 
    content: 'Ciri-Ciri Masyarakat Dan Teknologi Informasi Modern',
    link: 'https://tugas-hafizh-kurniawan.blogspot.com/p/pertemuan-8.html'
   },
   { 
    id: 9, 
    title: 'Pertemuan 9', 
    content: 'Dunia Usaha',
    link: 'https://tugas-hafizh-kurniawan.blogspot.com/p/pertemuan-9.html'
   },
   { 
    id: 10, 
    title: 'Pertemuan 10', 
    content: 'Sistem E-Commerce Dan E-Business',
    link: 'https://tugas-hafizh-kurniawan.blogspot.com/p/pertemuan-10.html'
   },
   { 
    id: 11, 
    title: 'Pertemuan 11', 
    content: 'Keamanan Sistem Informasi Dan Etika',
    link: 'https://tugas-hafizh-kurniawan.blogspot.com/p/pertemuan-11.html'
   },
   { 
    id: 12, 
    title: 'Pertemuan 12', 
    content: 'Privacy Dan Kejahatan Komputer',
    link: 'https://tugas-hafizh-kurniawan.blogspot.com/p/pertemuan-12.html'
   },
   { 
    id: 13, 
    title: 'Pertemuan 13', 
    content: 'Etika Dan Profesionalisme',
    link: 'https://tugas-hafizh-kurniawan.blogspot.com/p/pertemuan-13.html'
   },
   { 
    id: 14, 
    title: 'Pertemuan 14', 
    content: 'Etika Penggunaan Komputer',
    link: 'https://tugas-hafizh-kurniawan.blogspot.com/p/pertemuan-14.html'
   }
    
  ];

function createCard(cardData) {
  const card = document.createElement('div');
  card.className = 'w-full p-6 bg-white border border-gray-200 rounded-lg shadow text-center';
  card.innerHTML = `
    <h1>
      <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">${cardData.title}</h5>
    </h1>
    <p class="mb-3 font-normal text-gray-700">${cardData.content}</p>
  `;
  
  // Memeriksa apakah properti 'link' ada pada objek 'cardData'
  if (cardData.link) {
    const link = document.createElement('a');
    link.href = cardData.link;
    link.className = 'inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300';
    link.innerHTML = `
      Read more
      <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
      </svg>
    `;
    card.appendChild(link);
  }
  
  return card;
}

function renderCards(data) {
  const cardsContainer = document.getElementById('cards-container');
  data.forEach(cardData => {
    const cardElement = createCard(cardData);
    cardsContainer.appendChild(cardElement);
  });
}

// Render the cards
renderCards(data);










