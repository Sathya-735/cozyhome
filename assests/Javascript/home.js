

const bttn=document.querySelector('.hamburger')
const navigationbar=document.querySelector('.navbar')

bttn.addEventListener("click",()=>{
        navigationbar.classList.toggle("show")
})

const slideshowData = [
        {
          image: "./assests/Images/chair.jpg",
          text: "New Eliterigo\nHigh Black Chair",
          color: "white", 
          secondLineSmall: true,
        },
        {
          image: "./assests/Images/Mattress Stores _ Inofia_Com.jpg",
          text: "Sleep on a Cloud of Comfort\nwith our cozy beds",
          color: "black",
          secondLineSmall: true,
        },
        {
          image: "./assests/Images/7 Piece Dining Room Set (1).jpg",
          text: "New Marle Top Dining Set",
          color: "black",
          secondLineSmall: false,
        },
        {
          image: "./assests/Images/sofa.jpg",
          text: "Leather Recliners\nThe Ages Like Fine Wine",
          color: "white",
          secondLineSmall: true,
        },
      ];
    function homeslideimage() {
      let currentIndex = 0;
      function updateSlideshow() {
        const currentSlide = slideshowData[currentIndex];
        const slideshowText = document.getElementById("slideshowText");
        document.getElementById("slideshowImage").src = currentSlide.image;
      
        let textContent = currentSlide.text;
        if (currentSlide.secondLineSmall && textContent.includes('\n')) {
          const parts = textContent.split('\n');
          textContent = parts[0] + '<br><span class="second-line-small">' + parts[1] + '</span>';
          slideshowText.innerHTML = textContent;
        } else if (textContent.includes('\n')) {
          const parts = textContent.split('\n');
          textContent = parts[0] + '<br>' + parts[1];
          slideshowText.innerHTML = textContent;
        } else {
          slideshowText.textContent = currentSlide.text;
        }
      
        // Set text color
        if (currentSlide.color === "black") {
          slideshowText.classList.remove("white-text");
          slideshowText.classList.add("black-text");
        } else {
          slideshowText.classList.remove("black-text");
          slideshowText.classList.add("white-text");
        }
      }
      
      function nextSlide() {
        currentIndex = (currentIndex + 1) % slideshowData.length;
        updateSlideshow();
      }
      
      setInterval(nextSlide, 3000); 
      updateSlideshow(); 
    }  
     
            

const cards = document.querySelectorAll('.cart-container .card');

cards.forEach(card => {
    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    function handleMouseDown(e) {
        isDragging = true;
        startX = e.pageX - card.offsetLeft;
        scrollLeft = card.parentElement.scrollLeft;
        card.style.cursor = 'grabbing';
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseup', handleMouseUp);
        card.addEventListener('mouseleave', handleMouseUp);
    }

    function handleMouseMove(e) {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - card.offsetLeft;
        const walk = (x - startX) * 0.7;
        card.parentElement.scrollLeft = scrollLeft - walk;
    }

    function handleMouseUp() {
        isDragging = false;
        card.style.cursor = 'grab';
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseup', handleMouseUp);
        card.removeEventListener('mouseleave', handleMouseUp);
    }

    card.addEventListener('mousedown', handleMouseDown);
});

          // product drag and scroll

const productSection = document.querySelector('.product-section');
let isDragging = false;
let startX;
let scrollLeft;
function dragscroll() {
  productSection.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - productSection.offsetLeft;
    scrollLeft = productSection.scrollLeft;
    productSection.style.cursor = 'grabbing'; 
});

productSection.addEventListener('mouseleave', () => {
    isDragging = false;
    productSection.style.cursor = 'grab';
});

productSection.addEventListener('mouseup', () => {
    isDragging = false;
    productSection.style.cursor = 'grab';
});

productSection.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - productSection.offsetLeft;
    const walk = (x - startX) * 2; 
    productSection.scrollLeft = scrollLeft - walk;
});
}



