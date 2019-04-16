window.openModal = function (id, delay = 0) {
  setTimeout(function() {
    var modalElement = document.getElementById(id);
    modalElement.classList.remove("hidden");
    modalElement.classList.add("shown");
  }, delay);
};

window.closeModal = function (id) {
  var modalElement = document.getElementById(id);
  modalElement.classList.remove("shown");
  modalElement.classList.add("hidden");
};