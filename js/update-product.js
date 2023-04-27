
function showUpdateForm(id) {
    document.querySelector('.update-form-container').classList.toggle('active');

    let prd_id = document.getElementById('prd-id');
    let prd_name = document.getElementById('prd-name');
    let prd_price = document.getElementById('prd-price');
    let prd_category = document.getElementById('prd-category');
    let prd_description = document.getElementById('prd-description');
    let prd_image = document.getElementById('prd-image');

    let productsArray = JSON.parse(localStorage.getItem('products'));
    let product = productsArray.find(item => item.prd_id==id);
    prd_id.value = product.prd_id;
    prd_name.value = product.prd_name;
    prd_price.value = product.prd_price;
    prd_category.value = product.prd_category;
    prd_description.value = product.prd_description;
    prd_image.value = product.prd_image;
}

document.getElementById('cancel-update-btn').onclick = () => {
    document.querySelector('.update-form-container').classList.remove('active');
}

let updateForm = document.getElementById('update-form');

updateForm.addEventListener('submit', () => {
    let prd_id = document.getElementById('prd-id');
    let prd_name = document.getElementById('prd-name');
    let prd_price = document.getElementById('prd-price');
    let prd_category = document.getElementById('prd-category').value;
    let prd_description = document.getElementById('prd-description');
    let prd_image = document.getElementById('prd-image');

    let productsArray = JSON.parse(localStorage.getItem('products'));
    let prd_index = productsArray.findIndex(item => item.prd_id==prd_id.value);

    productsArray[prd_index].prd_name = prd_name.value;
    productsArray[prd_index].prd_price = prd_price.value;
    productsArray[prd_index].prd_category = prd_category.value;
    productsArray[prd_index].prd_description = prd_description.value;

    if(prd_image.files.length!=0) {
        const reader = new FileReader();
        reader.readAsDataURL(prd_image.files[0]);

        reader.addEventListener('load', () => {
            
            productsArray[prd_index].prd_image = reader.result;

            localStorage.setItem('products', JSON.stringify(productsArray));
            document.querySelector('.update-form-container').classList.remove('active');
            alert('Product updated successfully');
        });
    }

    localStorage.setItem('products', JSON.stringify(productsArray));
    document.querySelector('.update-form-container').classList.remove('active');
    alert('Product updated successfully.');
});