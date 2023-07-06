document.addEventListener("DOMContentLoaded", function () {
  const showMoreButton = document.getElementById("showMoreButton");
  const loadingIndicator = document.getElementById("loadingIndicator");
  const productGrid = document.querySelector(".grid");
  const products = Array.from(productGrid.getElementsByClassName("product"));
  let visibleProducts = 3; // Broj trenutno vidljivih product

// Sakrij sve product osim prvih 3
  products.slice(visibleProducts).forEach(product => {
    product.style.display = "none";
  });

  showMoreButton.addEventListener("click", function () {
    showMoreButton.style.display = "none"; // sakrij gumb "show"
    loadingIndicator.style.display = "block"; //prikaz indikatora
    loadingIndicator.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';

// Simuliraj dohvaćanje informacija sa servera
    setTimeout(function () {
      const nextProducts = products.slice(visibleProducts, visibleProducts + 3);
      nextProducts.forEach(product => {
        product.style.display = "block";
      });

      visibleProducts += 3;

// Ako su svi productovi prikazani, sakrij gumb "Show more"
      showMoreButton.style.display = visibleProducts >= products.length ? "none" : "block";
      loadingIndicator.style.display = "none"; // Sakrij indikator 
    }, 1000); // sekunde
  });
});
