const bedroomproducts = [
    {
      id: 1,
      name: "Florita King Size Bed",
      price: "₹ 54,000",
      mrp: "₹ 61,900",
      image: "../assests/Images/Florita King Size Bed.jpg",
      iconimage:"../assests/Images/wish.png"  
    },
    {
      id: 2,
      name: "Classy Dressing Table",
      price: "₹ 18,000",
      mrp: "₹ 21,800",
      image: "../assests/Images/Classy Dressing Table.jpg",
      iconimage:"../assests/Images/wish.png"
    },
    {
      id: 3,
      name: "Storage Accessories",
      price: "₹ 18,000",
      mrp: "₹ 21,900",
      image: "../assests/Images/Storage Accessories.jpg", 
      iconimage:"../assests/Images/wish.png"
    },
    {
      id: 4,
      name: "Olympus Mattresses",
      price: "₹ 28,000",
      mrp: "₹ 31,800",
      image: "../assests/Images/Olympus Mattresses.jpg", 
      iconimage:"../assests/Images/wish.png"
    },
    {
        id: 5,
        name: "Queen Size Beds",
        price: "₹ 28,000",
        mrp: "₹ 31,800",
        image: "../assests/Images/Queen Size Beds.jpg", 
        iconimage:"../assests/Images/wish.png"
      },
      {
        id: 6,
        name: "Furnished Wardrobes",
        price: "₹ 25,000",
        mrp: "₹ 28,900",
        image: "../assests/Images/Furnished Wardrobes.jpg", 
        iconimage:"../assests/Images/wish.png"
      },
      {
        id: 7,
        name: "Storage Table",
        price: "₹ 18,000",
        mrp: "₹ 21,900",
        image: "../assests/Images/Storage Table.jpg", 
        iconimage:"../assests/Images/wish.png"
      },
      {
        id: 8,
        name: "Mattresses",
        price: "₹ 18,000",
        mrp: "₹ 21,900",
        image: "../assests/Images/Mattresses.jpg", 
        iconimage:"../assests/Images/wish.png"
      },
      {
        id: 9,
        name: "Classy Dressing Table",
        price: "₹ 18,000",
        mrp: "₹ 21,900",
        image: "../assests/Images/Classy Dressing Tableone.jpg", 
        iconimage:"../assests/Images/wish.png"
      },
      {
        id: 10,
        name: "Classy Dressing Table",
        price: "₹ 18,000",
        mrp: "₹ 21,900",
        image: "../assests/Images/Classy Dressing Table.jpg", 
        iconimage:"../assests/Images/wish.png"
      },
  ];

  // const cartCount = document.getElementsByClassName('cart-value');
  // const cartLink = document.getElementById('paddtocart');
  // const backToShop = document.getElementById('backToShop');
  
  
  
  function bedproduct() {
    const bedproductContainer = document.getElementById("bedroom-product-container");
    bedroomproducts.forEach((product) => {
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML = `
            <div class="column-one">
                <img src="${product.image}" alt="${product.name}" class="product-image">
            </div> 
            <div class="column-two">
                <h2 class="product-title">${product.name}</h2> 
                <p class="product-price">${product.price}</p>
                <p class="product-mrp"><del>MRP ${product.mrp}</del> <br> (Inc of all taxes)</p>
                <img src="${product.iconimage}" alt="${product.name}" class="icon-image">
                <button class="add-to-cart-btn" data-product-id="${product.id}">Add To Cart</button>
                <button class="buy-now-btn" data-product-id="${product.id}">Buy Now</button>
            </div>
        `;
        bedproductContainer.append(productCard);
    });
    
  }
  


const diningroomproducts=[{
  id: 11,
  name: "8 Seater Dining Table",
  price: "₹ 54,000",
  mrp: "₹ 61,900",
  image: "../assests/Images/8 Seater Dining Table.jpg",
  iconimage:"../assests/Images/wish.png"  
},
{
  id: 12,
  name: "8 Seater Dining Table",
  price: "₹ 54,000",
  mrp: "₹ 61,900",
  image: "../assests/Images/8 Seater Dining Tabletwo.jpg",
  iconimage:"../assests/Images/wish.png"
},
{
  id: 13,
  name: "6/7 Seater Dining Set",
  price: "₹ 44,000",
  mrp: "₹ 61,900",
  image: "../assests/Images/Seater Dining Setone.jpg", 
  iconimage:"../assests/Images/wish.png"
},
{
  id: 14,
  name: "6/7 Seater Dining Set",
  price: "₹ 45,000",
  mrp: "₹ 61,900",
  image: "../assests/Images/Seater Dining Settwo.jpg", 
  iconimage:"../assests/Images/wish.png"
},
{
    id: 15,
    name: "6 Seater Dining",
    price: "₹ 40,000",
    mrp: "₹ 61,900",
    image: "../assests/Images/6 Seater Dining.jpg", 
    iconimage:"../assests/Images/wish.png"
  },
  {
    id: 16,
    name: "Kitchen & Dining Set",
    price: "₹ 54,000",
    mrp: "₹ 61,900",
    image: "../assests/Images/Kitchen & Dining Set.jpg", 
    iconimage:"../assests/Images/wish.png"
  },
  {
    id: 17,
    name: "4/6/8 Dining Table",
    price: "₹ 54,000",
    mrp: "₹ 61,900",
    image: "../assests/Images/468 Dining Table.jpg", 
    iconimage:"../assests/Images/wish.png"
  },
  {
    id: 18,
    name: "4 Seater Dining Table",
    price: "₹ 54,000",
    mrp: "₹ 61,900",
    image: "../assests/Images/Mattresses.jpg", 
    iconimage:"../assests/Images/wish.png"
  },
];




function dining()
{     
  const diningroomcontainer=document.getElementById('diningcartcontainer')
    diningroomproducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
  
    productCard.innerHTML = `
        <div class="column-one">
        <img src="${product.image}" alt="${product.name}" class="product-image">
        </div> 
      <div class="column-two">
        <h2 class="product-title">${product.name}</h2> 
        <p class="product-price">${product.price}</p>
        <p class="product-mrp"><del>MRP ${product.mrp}</del> <br> (Inc of all taxes)</p>
        <img src="${product.iconimage}" alt="${product.name}" class="icon-image">
        <button class="add-to-cart-btn" data-product-id="${product.id}">Add To Cart</button>
        <button class="buy-now-btn" data-product-id="${product.id}">Buy Now</button>
        </div>
    `;
    diningroomcontainer.append(productCard)
  })
}


const livingroomproducts=[
  {
    id: 19,
    name: "Leather Sofa Sets",
    price: "₹ 50,000",
    mrp: "₹ 61,900",
    image: "../assests/Images/Leather Sofa Sets.jpg",
    iconimage:"../assests/Images/wish.png"  
  },
  {
    id: 20,
    name: "Luxurious Sofa Sets",
    price: "₹ 54,000",
    mrp: "₹ 61,900",
    image: "../assests/Images/Luxurious Sofa Sets.jpg",
    iconimage:"../assests/Images/wish.png"
  },
  {
    id: 21,
    name: "Center Table Set",
    price: "₹ 54,000",
    mrp: "₹ 61,900",
    image: "../assests/Images/Center Table Set.jpg", 
    iconimage:"../assests/Images/wish.png"
  },
  {
    id: 22,
    name: "Center Table Sets",
    price: "₹ 54,000",
    mrp: "₹ 61,900",
    image: "../assests/Images/Center Table Sets.jpg", 
    iconimage:"../assests/Images/wish.png"
  },
  {
      id: 23,
      name: "Smart Recliners",
      price: "₹ 54,000",
      mrp: "₹ 61,900",
      image: "../assests/Images/Smart Recliners.jpg", 
      iconimage:"../assests/Images/wish.png"
    },
    {
      id: 24,
      name: "Leather Recliners",
      price: "₹ 54,000",
      mrp: "₹ 61,900",
      image: "../assests/Images/Leather Recliners.jpg", 
      iconimage:"../assests/Images/wish.png"
    },
    {
      id: 25,
      name: "Entertainment Units",
      price: "₹ 54,000",
      mrp: "₹ 61,900",
      image: "../assests/Images/Entertainment Units.jpg", 
      iconimage:"../assests/Images/wish.png"
    },
    {
      id: 26,
      name: "Center Table Sets",
      price: "₹ 54,000",
      mrp: "₹ 61,900",
      image: "../assests/Images/Center Table Sets(1).jpg", 
      iconimage:"../assests/Images/wish.png"
    },
    {
      id: 27,
      name: "Shoe Cabinet Set",
      price: "₹ 54,000",
      mrp: "₹ 61,900",
      image: "../assests/Images/Shoe Cabinet Set.jpg", 
      iconimage:"../assests/Images/wish.png"
    },
    {
      id: 28,
      name: "Large Shoe Units",
      price: "₹ 54,000",
      mrp: "₹ 61,900",
      image: "../assests/Images/Large Shoe Units.jpg", 
      iconimage:"../assests/Images/wish.png"
    },

];

const livingcontainer=document.getElementById('livingroom-product-container')

function living() {
  livingroomproducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
  
    productCard.innerHTML = `
        <div class="column-one">
        <img src="${product.image}" alt="${product.name}" class="product-image">
        </div> 
      <div class="column-two">
        <h2 class="product-title">${product.name}</h2> 
        <p class="product-price">${product.price}</p>
        <p class="product-mrp"><del>MRP ${product.mrp}</del> <br> (Inc of all taxes)</p>
        <img src="${product.iconimage}" alt="${product.name}" class="icon-image">
        <button class="add-to-cart-btn" data-product-id="${product.id}">Add To Cart</button>
        <button class="buy-now-btn" data-product-id="${product.id}">Buy Now</button>
        </div>
    `;
    livingcontainer.append(productCard)
  })
}

const studyandofficeproducts=[
  {
    id: 29,
    name: "Office High Back Chair",
    price: "₹ 25,000",
    mrp: "₹ 28,900",
    image: "../assests/Images/Office High Back Chair.jpg",
    iconimage:"../assests/Images/wish.png"  
  },
  {
    id: 30,
    name: "Business Rolling Chair",
    price: "₹ 25,000",
    mrp: "₹ 28,900",
    image: "../assests/Images/Business Rolling Chair.jpg",
    iconimage:"../assests/Images/wish.png"
  },
  {
    id: 31,
    name: "Office/Study Cupboard",
    price: "₹ 25,000",
    mrp: "₹ 28,900",
    image: "../assests/Images/OfficeStudy Cupboard.jpg", 
    iconimage:"../assests/Images/wish.png"
  },
  {
    id: 32,
    name: "Rustic Wood Office Table",
    price: "₹ 25,000",
    mrp: "₹ 28,900",
    image: "../assests/Images/Rustic Wood Office Table.jpg", 
    iconimage:"../assests/Images/wish.png"
  },
  {
    id: 33,
    name: "Office Desk",
    price: "₹ 25,000",
    mrp: "₹ 28,900",
    image: "../assests/Images/Office Desk.jpg", 
    iconimage:"../assests/Images/wish.png"
    },
    {
      id: 34,
      name: "2 Drawer Cupboard",
      price: "₹ 25,000",
      mrp: "₹ 28,900",
      image: "../assests/Images/2 Drawer Cupboard.jpg", 
      iconimage:"../assests/Images/wish.png"
    },
];



function studyandoffice() {
  const studyandofficecontainer=document.getElementById('study-and-office-container')
  studyandofficeproducts.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product-card");
  
    productCard.innerHTML = `
        <div class="column-one">
        <img src="${product.image}" alt="${product.name}" class="product-image">
        </div> 
      <div class="column-two">
        <h2 class="product-title">${product.name}</h2> 
        <p class="product-price">${product.price}</p>
        <p class="product-mrp"><del>MRP ${product.mrp}</del> <br> (Inc of all taxes)</p>
        <img src="${product.iconimage}" alt="${product.name}" class="icon-image">
        <button class="add-to-cart-btn" data-product-id="${product.id}">Add To Cart</button>
        <button class="buy-now-btn"  data-product-id="${product.id}">Buy Now</button>
        </div>
    `;
    studyandofficecontainer.append(productCard)
    
  }) 
  const btn=document.querySelectorAll(".add-to-cart-btn")
  console.log(btn); 
   
}

  const allProducts = [
    ...bedroomproducts,
    ...diningroomproducts,
    ...livingroomproducts,
    ...studyandofficeproducts
  ];

  localStorage.setItem('bedroomProducts', JSON.stringify(bedroomproducts));
  localStorage.setItem('diningroomProducts', JSON.stringify(diningroomproducts));
  localStorage.setItem('livingroomProducts', JSON.stringify(livingroomproducts));
  localStorage.setItem('studyandofficeProducts', JSON.stringify(studyandofficeproducts));

  const bedroomProductsString = localStorage.getItem('bedroomProducts');
const diningroomProductsString = localStorage.getItem('diningroomProducts');
const livingroomProductsString = localStorage.getItem('livingroomProducts');
const studyandofficeProductsString = localStorage.getItem('studyandofficeProducts');

const bedroomProducts = bedroomProductsString ? JSON.parse(bedroomProductsString) : [];
const diningroomProducts = diningroomProductsString ? JSON.parse(diningroomProductsString) : [];
const livingroomProducts = livingroomProductsString ? JSON.parse(livingroomProductsString) : [];
const studyandofficeProducts = studyandofficeProductsString ? JSON.parse(studyandofficeProductsString) : [];


const bedproductNames = bedroomProducts.map(product => product.name);
const diningproductNames = diningroomProducts.map(product => product.name);
const livingproductNames = livingroomProducts.map(product => product.name);
const studyandofficeproductNames = studyandofficeProducts.map(product => product.name);

const allProductNames = [
    ...bedproductNames,
    ...diningproductNames,
    ...livingproductNames,
    ...studyandofficeproductNames
];

console.log(allProductNames);



  const searchinput=document.querySelector('.search-input')
  const searchbutton=document.querySelector(".search-button")
  console.log(searchbutton);
  console.log(searchinput);
  
  document.addEventListener('DOMContentLoaded', () => {
    const searchbutton = document.querySelector(".search-button");
    const searchinput = document.querySelector(".search-input");

    if (searchbutton && searchinput) {
        searchbutton.addEventListener("click", (e) => {
            e.preventDefault();

            const searchTerm = searchinput.value.trim().toLowerCase();

            // Retrieve product names
            const bedroomProductsString = localStorage.getItem('bedroomProducts');
            const diningroomProductsString = localStorage.getItem('diningroomProducts');
            const livingroomProductsString = localStorage.getItem('livingroomProducts');
            const studyandofficeProductsString = localStorage.getItem('studyandofficeProducts');

            const bedroomProducts = bedroomProductsString ? JSON.parse(bedroomProductsString) : [];
            const diningroomProducts = diningroomProductsString ? JSON.parse(diningroomProductsString) : [];
            const livingroomProducts = livingroomProductsString ? JSON.parse(livingroomProductsString) : [];
            const studyandofficeProducts = studyandofficeProductsString ? JSON.parse(studyandofficeProductsString) : [];

            const bedproductNames = bedroomProducts.map(product => product.name);
            const diningproductNames = diningroomProducts.map(product => product.name);
            const livingproductNames = livingroomProducts.map(product => product.name);
            const studyandofficeproductNames = studyandofficeProducts.map(product => product.name);

            // Identify the current page
            const currentPage = window.location.pathname.split('/').pop();

            // Search and redirect
            let redirectUrl = null;

            if (bedproductNames.some(name => name.toLowerCase().includes(searchTerm))) {
                redirectUrl = './Pages/bedrooms.html';
            } else if (diningproductNames.some(name => name.toLowerCase().includes(searchTerm))) {
                redirectUrl = './Pages/dining.html';
            } else if (livingproductNames.some(name => name.toLowerCase().includes(searchTerm))) {
                redirectUrl = './Pages/living.html';
            } else if (studyandofficeproductNames.some(name => name.toLowerCase().includes(searchTerm))) {
                redirectUrl = './Pages/study-and-office.html';
            } else {
                alert("No matching product found!");
            }

            if (redirectUrl) {
                if (currentPage !== 'index.html') {
                    redirectUrl = redirectUrl.replace('./Pages/', ''); // Remove extra './Pages/'
                    redirectUrl += `?from=${currentPage}`;
                }
                window.location.href = redirectUrl;
            }
        });
    } else {
        console.error("Search elements not found on this page.");
    }
});

document.addEventListener('DOMContentLoaded', () => {
  const urlParams = new URLSearchParams(window.location.search);
  const fromPage = urlParams.get('from');

  if (fromPage) {
      // Adjust navigation links based on fromPage
      const homeLink = document.querySelector('a[href="../index.html"]');
      const bedroomsLink = document.querySelector('a[href="./bedrooms.html"]');
      const diningLink = document.querySelector('a[href="./dining.html"]');
      const livingLink = document.querySelector('a[href="./living.html"]');
      const studyLink = document.querySelector('a[href="./study-and-office.html"]');

      if (fromPage === 'dining.html') {
          homeLink.href = '../index.html';
          bedroomsLink.href = './bedrooms.html';
          livingLink.href = './living.html';
          studyLink.href = './study-and-office.html';
      } else if (fromPage === 'living.html') {
          homeLink.href = '../index.html';
          bedroomsLink.href = './bedrooms.html';
          diningLink.href = './dining.html';
          studyLink.href = './study-and-office.html';
      } else if (fromPage === 'study-and-office.html') {
          homeLink.href = '../index.html';
          bedroomsLink.href = './bedrooms.html';
          diningLink.href = './dining.html';
          livingLink.href = './living.html';
      } else if (fromPage === 'bedrooms.html') {
          homeLink.href = '../index.html';
          diningLink.href = './dining.html';
          livingLink.href = './living.html';
          studyLink.href = './study-and-office.html';
      }
  }
});


const uploadButton = document.getElementById('uploadButton');

uploadButton.addEventListener('click', () => {
  const tempInput = document.createElement('input');
  tempInput.type = 'file';
  tempInput.accept = 'image/jpeg, image/png, image/jpg, image/jpeng';

  tempInput.addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (file) {
      const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg', 'image/jpeng'];
      if (allowedTypes.includes(file.type)) {
        const reader = new FileReader();

        reader.onload = (e) => {
          const imageSrc = e.target.result;

          // Display the uploaded image in the button's place

          const imageElement = document.createElement('img');
          imageElement.src = imageSrc;
          imageElement.style.width = '100px';
          imageElement.style.height = '100px';
          imageElement.style.objectFit = 'cover'; // Ensure the image fills the 100x100 area

          // Replace the button with the image
          uploadButton.replaceWith(imageElement);

          // Optional: Upload the image
          // uploadImage(file);
        };

        reader.readAsDataURL(file);
      } else {
        alert('Please select a valid image file (JPG, PNG, JPEG, JPENG).');
      }
    }

    tempInput.remove();
  });

  tempInput.click();
});

// Example upload function (replace with your server-side logic)
async function uploadImage(file) {
  const formData = new FormData();
  formData.append('image', file);

  try {
    const response = await fetch('/upload', {
      method: 'POST',
      body: formData,
    });

    if (response.ok) {
      console.log('Image uploaded successfully!');
    } else {
      console.error('Image upload failed.');
    }
  } catch (error) {
    console.error('Error uploading image:', error);
  }
}
  
  
  
  


  












        

  