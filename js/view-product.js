let container = document.getElementById('products-container');

let productsArray = JSON.parse(localStorage.getItem('products'));

productsArray.forEach(item => {
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