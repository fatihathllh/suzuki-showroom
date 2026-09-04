function openModal(carName) {

    const modal = document.getElementById("productModal");
    const title = document.getElementById("modalTitle");
    const text = document.getElementById("modalText");

    title.innerText = carName;

    text.innerText =
        "Hubungi Muhammad Fatih Athallah untuk mendapatkan informasi harga, promo, simulasi kredit, dan ketersediaan unit " + carName + ".";

    modal.style.display = "block";
}


function closeModal() {

    document.getElementById("productModal").style.display = "none";

}


window.onclick = function(event) {

    const modal = document.getElementById("productModal");

    if (event.target === modal) {
        modal.style.display = "none";
    }

};