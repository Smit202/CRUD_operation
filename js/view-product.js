let container = document.getElementById('products-container');

let sortByNameAtoZ = document.getElementById('byNameAtoZ');
let sortByNameZtoA = document.getElementById('byNameZtoA');
let sortByPriceLtoH = document.getElementById('byPriceLtoH');
let sortByPriceHtoL = document.getElementById('byPriceHtoL');
let categories = document.querySelectorAll('.category-item');

let productsArray = JSON.parse(localStorage.getItem('products'));
showProducts(productsArray);

sortByNameAtoZ.addEventListener('click', () => {
    container.innerHTML = '';
    let productsArray = JSON.parse(localStorage.getItem('products'));
    productsArray.sort((item) => item.prd_name);
    console.log(productsArray);
    showProducts(productsArray);
});

sortByNameZtoA.addEventListener('click', () => {
    container.innerHTML = '';
    let productsArray = JSON.parse(localStorage.getItem('products'));
    productsArray.sort((item) => item.prd_name);
    productsArray.reverse();
    console.log(productsArray);
    showProducts(productsArray);
});

sortByPriceLtoH.addEventListener('click', () => {
    container.innerHTML = '';
    let productsArray = JSON.parse(localStorage.getItem('products'));
    productsArray.sort((a, b) => a.prd_price - b.prd_price);
    console.log(productsArray);
    showProducts(productsArray);
});

sortByPriceHtoL.addEventListener('click', () => {
    container.innerHTML = '';
    let productsArray = JSON.parse(localStorage.getItem('products'));
    productsArray.sort((a, b) => b.prd_price - a.prd_price);
    console.log(productsArray);
    showProducts(productsArray);
});

document.getElementById('searchButton').addEventListener('click', () => {
    let searchProductValue = document.getElementById('searchProduct').value;
    
    if(searchProductValue.length !=0) {
        container.innerHTML = '';
        let matchedProducts;
        matchedProducts = productsArray.filter(item => item.prd_id == searchProductValue);

        if(matchedProducts.length === 0) {

            let searchWords = searchProductValue.toLowerCase().split(' ');

            matchedProducts = productsArray.filter(item => {

                prdNameWords = item.prd_name.toLowerCase()  .split(' ');

                for(let i=0; i<searchWords.length; i++) {
                    if(prdNameWords.includes(searchWords[i])) return true;
                }
                return false;
            });
        }
        document.querySelector('.view-products .heading').innerHTML = 'Matched Products';
        showProducts(matchedProducts);
    }
});

categories.forEach(category => {
    let flag = 0;
    category.addEventListener('click', () => {
        categories.forEach(item => {
            if(category !== item) item.style.backgroundColor = 'white';
            else item.style.backgroundColor = 'rgba(128, 128, 128, .22)';
        })
        if(flag==0) {
            container.innerHTML = '';
            let productsArray = JSON.parse(localStorage.getItem('products'));
            let matchedProducts = productsArray.filter(item => item.prd_category == category.id);
            document.querySelector('.view-products .heading').innerHTML = 'Matched Products';
            showProducts(matchedProducts);
            flag = 1;
        }
        else {
            flag = 0;
            location.reload();
        }
    });
})

function showProducts(array) {
    array.forEach(item => {
        const product = document.createElement('div');
        product.classList.add('product');
    
        product.innerHTML = `
        <div class="product-image"><img src="${item.prd_image}" alt="hgh"></div>
        <div class="product-info">
            <div class="product-id">
                <h5>ID: ${item.prd_id}</h5>
            </div>
            <div class="product-name">
                <h3>${item.prd_name}</h3>
            </div>
            <div class="product-price">
                <p>&#8377 ${item.prd_price}</p>
            </div>
        </div>
        <div class="description">
            <div class="content">
                <h3>Description</h3>
                ${item.prd_description}
            </div>
            <div class="product-btn">
                <button type="button" class="btn" id="${item.prd_id}" onclick="showUpdateForm(${item.prd_id})">Update</button>
                <button type="button" class="btn delete" id="${item.prd_id}" onclick="deleteProduct(${item.prd_id})">Delete</button>
            </div>
        </div>  `;
    
        container.appendChild(product);
    });
}