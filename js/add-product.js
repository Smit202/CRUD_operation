let form = document.getElementById('product-form');
let productsArray;

form.addEventListener('submit', () => {

    let prd_id = document.getElementById('prd-id').value;
    let prd_name = document.getElementById('prd-name').value;
    let prd_price = document.getElementById('prd-price').value;
    let prd_category = document.getElementById('prd-category').value;
    let prd_description = document.getElementById('prd-description').value;
    let prd_image = document.getElementById('prd-image');

    if(localStorage.getItem('products') == null) {
        productsArray = [];
    } 
    else {
        console.log('hello');
        productsArray = JSON.parse(localStorage.getItem('products'));
        console.log(productsArray.length);
    }   

    const reader = new FileReader();
    reader.readAsDataURL(prd_image.files[0]);

    reader.addEventListener('load', () => {
        productsArray.push({
            prd_id,
            prd_name,
            prd_price,
            prd_category,
            prd_description,
            prd_image: reader.result,
        });
        localStorage.setItem('products', JSON.stringify(productsArray));
        alert('product is added successfully');
    });
});
console.log(JSON.parse(localStorage.getItem('products')).length);
console.log(JSON.parse(localStorage.getItem('products')));