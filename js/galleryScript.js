document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("myModal");
    const modalImage = document.getElementById("modalImage");
    const closeModal = document.getElementsByClassName("close")[0];
  
    document.querySelectorAll(".gallery-item").forEach(item => {
      item.addEventListener("click", function () {
        modal.style.display = "block";
        modalImage.src = this.dataset.src;
      });
    });
  
    closeModal.addEventListener("click", function () {
      modal.style.display = "none";
    });
  
    window.addEventListener("click", function (event) {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });
  });
