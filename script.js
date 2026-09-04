function openModal(carName) {

```
const modal = document.getElementById("productModal");
const title = document.getElementById("modalTitle");
const text = document.getElementById("modalText");
const whatsappButton = document.getElementById("whatsappButton");

title.innerText = carName;

text.innerText =
    "Hubungi Muhammad Fatih Athallah untuk mendapatkan informasi harga, promo, simulasi kredit, dan ketersediaan unit " + carName + ".";

const nomorWhatsApp = "6289516129537";

const pesan =
    "Halo, saya ingin menanyakan informasi harga dan promo " + carName;

const linkWhatsApp =
    "https://wa.me/" + nomorWhatsApp + "?text=" +
    encodeURIComponent(pesan);

whatsappButton.href = linkWhatsApp;

modal.style.display = "block";
```

}

function closeModal() {

```
document.getElementById("productModal").style.display = "none";
```

}

window.onclick = function(event) {

```
const modal = document.getElementById("productModal");

if (event.target === modal) {
    modal.style.display = "none";
}
```

};
