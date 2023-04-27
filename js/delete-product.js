
function deleteProduct(id) {
    let answer = confirm('Do you want to delete this product');
    if(answer) {
        let productsArray = JSON.parse(localStorage.getItem('products'));
        let prd_index = productsArray.findIndex(item => item.prd_id==id);
        productsArray.splice(prd_index, 1);
        localStorage.setItem('products', JSON.stringify(productsArray));
        location.reload();
    }
}