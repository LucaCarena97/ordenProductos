import productsList from "./products.json" with { type: "json" };

function getProductsSortedByPrice() {
  return [...productsList].sort((a, b) => a.price - b.price);
}

export function productsListComponent() {
  const section = document.createElement("section");
  section.style.border = "solid 1px #ccc";
  section.style.padding = "10px";

  const list = document.createElement("ul");
  const sortedProducts = getProductsSortedByPrice();
  
  sortedProducts.forEach((product) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${product.title} - $${product.price}`;
    list.appendChild(listItem);
  });

  section.appendChild(list);

  return section;
}