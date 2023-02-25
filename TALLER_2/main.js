const todos=document.getElementById("all")
const plato_p=document.getElementById("plato_principal")
const postres=document.getElementById("postres")
const bebidas=document.getElementById("bebidas")
const productos=document.getElementById("plato_principal_product")
const principal_product=document.getElementsByClassName("plato_principal_product")
const bebidas_product=document.getElementsByClassName("bebidas_product")
const postres_product=document.getElementsByClassName("postres_product")

console.log(principal_product)
todos.addEventListener("click",todos_platos);
function todos_platos(){
   principal_product.style.display="flex";
   bebidas_product.style.display="flex";
   postres_product.style.display="flex";
} 
plato_p.addEventListener("click",principal);
function principal(){
    principal_product.style.display="none";
    bebidas_product.style.display="none"
    postres_product.style.display="none"
} 