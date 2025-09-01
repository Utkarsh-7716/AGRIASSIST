let isMarathi = false;

const products = [
  {
    en: "Organic Fertilizers",
    mr: "सेंद्रिय खते",
    image: "assets/images/organic.jpg",
    description: {
      en: "Improves soil health naturally.",
      mr: "मातीचे आरोग्य नैसर्गिकरीत्या सुधारते."
    },
    price: "₹350 per 5kg"
  },
  {
    en: "Urea",
    mr: "युरिया",
    image: "assets/images/urea.jpg",
    description: {
      en: "High nitrogen content for fast growth.",
      mr: "जलद वाढीसाठी उच्च नायट्रोजन."
    },
    price: "₹250 per 50kg"
  },
  {
    en: "NPK Mixtures",
    mr: "NPK मिश्रणे",
    image: "assets/images/npk.jpg",
    description: {
      en: "Balanced nutrients for all crops.",
      mr: "सर्व पिकांसाठी संतुलित अन्नद्रव्ये."
    },
    price: "₹300 per 50kg"
  },
  {
    en: "Pesticides",
    mr: "कीटकनाशके",
    image: "assets/images/pesticides.jpg",
    description: {
      en: "Protects against pests and insects.",
      mr: "कीटकांपासून संरक्षण करते."
    },
    price: "₹180 per litre"
  },
  {
    en: "Micronutrients",
    mr: "सूक्ष्म अन्नद्रव्ये",
    image: "assets/images/micronutrients.jpg",
    description: {
      en: "Essential for plant development.",
      mr: "वनस्पतींच्या वाढीसाठी अत्यावश्यक."
    },
    price: "₹220 per kg"
  }
];

// Load all products
function loadProducts() {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';

  products.forEach((product, index) => {
    const name = isMarathi ? product.mr : product.en;
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${product.image}" alt="${name}">
      <h4>${name}</h4>
      <p>${product.price}</p>
      <button onclick="openModal(${index})">Details</button>
      <button onclick="buyNow('${name}', '${product.price}')">Buy Now</button>
    `;
    grid.appendChild(card);
  });

  // Update headings
  document.getElementById('title').textContent = isMarathi ? 'अ‍ॅग्रीअ‍ॅसिस्ट - खत दुकान' : 'AgriAssist - Fertilizer Shop';
  document.getElementById('categories-title').textContent = isMarathi ? 'उत्पादन श्रेणी' : 'Product Categories';
}

// Toggle language
function toggleLanguage() {
  isMarathi = !isMarathi;
  loadProducts();
}

// Search product
function searchProducts() {
  const input = document.getElementById('searchInput').value.toLowerCase();
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    const text = card.querySelector('h4').textContent.toLowerCase();
    card.style.display = text.includes(input) ? 'block' : 'none';
  });
}

// Open product modal
function openModal(index) {
  const product = products[index];
  document.getElementById('modalTitle').textContent = isMarathi ? product.mr : product.en;
  document.getElementById('modalDesc').textContent = isMarathi ? product.description.mr : product.description.en;
  document.getElementById('modalPrice').textContent = product.price;
  document.getElementById('modalImg').src = product.image;
  document.getElementById('productModal').style.display = 'block';
}

// Close modal
function closeModal() {
  document.getElementById('productModal').style.display = 'none';
}

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle('dark-mode');
}

// Redirect to payment
function buyNow(name, price) {
  const url = `payment.html?product=${encodeURIComponent(name)}&price=${encodeURIComponent(price)}`;
  window.location.href = url;
}

// Initial load
loadProducts();
