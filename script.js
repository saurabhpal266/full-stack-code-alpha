// script.js
const galleryItems = document.querySelectorAll('.gallery-item img');
const modal = document.getElementById('lightbox');
const modalImg = document.getElementById('modal-img');
const closeBtn = document.querySelector('.close');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const filterBtns = document.querySelectorAll('.filter-btn');

let currentIndex = 0;

// Open Lightbox
galleryItems.forEach((img, index) => {
    img.addEventListener('click', () => {
        currentIndex = index;
        updateModal();
        modal.style.display = 'flex';
    });
});

function updateModal() {
    modalImg.src = galleryItems[currentIndex].src;
}

// Navigation
nextBtn.onclick = () => {
    currentIndex = (currentIndex + 1) % galleryItems.length;
    updateModal();
};

prevBtn.onclick = () => {
    currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    updateModal();
};

// Close Modal
closeBtn.onclick = () => modal.style.display = 'none';
window.onclick = (e) => { if(e.target == modal) modal.style.display = 'none'; };

// Filter Logic (Bonus)
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.getAttribute('data-filter');
        document.querySelector('.active').classList.remove('active');
        btn.classList.add('active');

        document.querySelectorAll('.gallery-item').forEach(item => {
            if (filter === 'all' || item.getAttribute('data-category') === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});