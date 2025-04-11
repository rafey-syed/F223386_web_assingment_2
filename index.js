// for the nav bar=================================================================
document.querySelectorAll('a.myLink').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});



//================ Start of the product section of javascript======================//
const cardData = [
    // Replace with your own product images, titles, etc.
    { img: 'images/p1.jpg', title: 'Tomatoes', desc: 'Fresh organic tomatoes' },
    { img: 'images/p2.jpg', title: 'Potatoes', desc: 'Farm fresh potatoes' },
    { img: 'images/p3.jpg', title: 'Carrots', desc: 'Crunchy and sweet' },
    { img: 'images/p4.jpg', title: 'Onions', desc: 'Everyday essential' },
    { img: 'images/p5.jpg', title: 'Broccoli', desc: 'Green and healthy' },
    { img: 'images/p6.jpg', title: 'Apples', desc: 'Juicy red apples' },
    { img: 'images/p7.jpg', title: 'Bananas', desc: 'High in energy' },
    { img: 'images/p8.jpg', title: 'Cucumbers', desc: 'Cool and crisp' },
    { img: 'images/p9.jpg', title: 'Peppers', desc: 'Add spice to life' },
    { img: 'images/p10.jpg', title: 'Grapes', desc: 'Sweet and fresh' },
    { img: 'images/p11.jpg', title: 'Oranges', desc: 'Vitamin C boost' },
    { img: 'images/p12.jpg', title: 'Spinach', desc: 'Leafy green power' },
    { img: 'images/p13.jpg', title: 'Lettuce', desc: 'Crunchy freshness' },
    { img: 'images/p14.jpg', title: 'Mangoes', desc: 'Tropical delight' },
    { img: 'images/p15.jpg', title: 'Pineapple', desc: 'Sweet and tangy' },
    { img: 'images/p16.jpg', title: 'Zucchini', desc: 'Low-carb veggie' },
    { img: 'images/p17.jpg', title: 'Beetroot', desc: 'Full of iron' },
    { img: 'images/p18.jpg', title: 'Cabbage', desc: 'Great for salads' },
  ];
  
  function showPage(pageNum) {
    const cardsPerPage = 9;
    const start = (pageNum - 1) * cardsPerPage;
    const end = start + cardsPerPage;
    const currentCards = cardData.slice(start, end);
  
    const gallery = document.getElementById('card-gallery');
    gallery.innerHTML = '';
  
    currentCards.forEach(item => {
      const col = document.createElement('div');
      col.className = 'col-md-4 mb-4';
      col.innerHTML = ` 
      <a href="#" class="card-link">
        <div class="card h-100 shadow-sm">
          <img src="${item.img}" class="card-img-top" alt="${item.title}">
          <div class="card-body">
            <h5 class="card-title text-success">${item.title}</h5>
            <p class="card-text">${item.desc}</p>
          </div>
        </div>
       </a>
      `;
      gallery.appendChild(col);
    });
  }
  
  // Show first page on load
  window.onload = () => showPage(1);

  //===================== End of the product section ===================//
  