const todos=document.getElementById("all")
const plato_p=document.getElementById("plato_principal")
const postres=document.getElementById("postres")
const bebidas=document.getElementById("bebidas")
const productos=document.getElementById("plato_principal_product")
const principal_product=document.querySelectorAll(".plato_principal_product")
const bebidas_product=document.querySelectorAll(".bebidas_product")
const postres_product=document.querySelectorAll(".postres_product")

todos.addEventListener("click",todos_platos);
function todos_platos(){
    principal_product.forEach(element => {
        element.style.display="block";
    });

    bebidas_product.forEach(element => {
        element.style.display="block";
    });

    postres_product.forEach(element => {
        element.style.display="block";
    });
} 

plato_p.addEventListener("click", showPrincipal);

function showPrincipal(){
    principal_product.forEach(element => {
        element.style.display="block";
    });
    bebidas_product.forEach(element => {
        element.style.display="none";
    });
    postres_product.forEach(element => {
        element.style.display="none";
    });
} 

bebidas.addEventListener("click", showBebidas);
function showBebidas(){
    principal_product.forEach(element => {
        element.style.display="none";
    });
    bebidas_product.forEach(element => {
        element.style.display="block";
    });
    postres_product.forEach(element => {
        element.style.display="none";
    });
} 
postres.addEventListener("click", showPostres);
function showPostres(){
    principal_product.forEach(element => {
        element.style.display="none";
    });
    bebidas_product.forEach(element => {
        element.style.display="none";
    });
    postres_product.forEach(element => {
        element.style.display="block";
    });
} 


