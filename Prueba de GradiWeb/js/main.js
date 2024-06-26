document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const productContainer = document.getElementById('product-container');
    let products = new Product();
    let lstProducts = Array(products);
    let currentIndex = 0;

    async function fetchProducts() {
        try {
            const API_URL = 'https://gradistore-spi.herokuapp.com/products/all';
            const response = await globalThis.fetch(API_URL);
            const data = await response.json();
            lstProducts = data.products.nodes;
            renderProducts();
            updateButtons();
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    function renderProducts() {
        productContainer.innerHTML = '';
        lstProducts.forEach((product, index) => {
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productElement.setAttribute('data-index', index);
            
            let pointCounterReview = 0;
            let pointSumReview = 0;
            let totalPoints = 0;

            product["tags"].forEach((tag) => {
                if(!isNaN(tag)){
                    pointSumReview += parseFloat(tag);
                    pointCounterReview++;
                }
            });

            if (pointCounterReview != 0) {
                totalPoints = Math.ceil((pointSumReview/pointCounterReview)/100)
                if (totalPoints > 5) totalPoints = 5;                
            }

            productElement.innerHTML = `
                <img src="${product.featuredImage.url}" alt="${product.title}">
                <h3>${product.title}</h3>                 
                <div class="product-info">
                    <div class="product-info">
                        <p>${'⭐'.repeat(totalPoints)}</p>&nbsp;
                        <p class="a-price">(${pointSumReview/pointCounterReview})</p>
                    </div>
                    <div class="product-info">
                        <p class="a-price"><del>€${product.prices.max.amount}</del></p> &nbsp;&nbsp;
                        <p>€${product.prices.min.amount}</p>
                    </div>
                </div>
            `;
            productContainer.appendChild(productElement);
        });
    }

    function updateButtons() {
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === products.length - 1;
    }

    function slideProducts() {
        const productWidth = document.querySelector('.product').clientWidth;
        productContainer.style.transform = `translateX(-${currentIndex * (productWidth + 20)}px)`;
        updateButtons();
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            slideProducts();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < lstProducts.length - 1) {
            currentIndex++;
            slideProducts();
        }
    });

    const newsletterForm = document.getElementById('newsletter-form');
    newsletterForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('email').value;
        
        // Validación del correo electrónico
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(email)) {
            alert(`Gracias por suscribirte con el correo: ${email}`);
            newsletterForm.reset();
        } else {
            alert('Por favor, introduce un correo electrónico válido.');
        }
    });

    fetchProducts();
});
