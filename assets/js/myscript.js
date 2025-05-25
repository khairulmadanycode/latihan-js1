function ganti_teks() {
    const masukan = document.getElementById("masukan");

    const element = document.getElementById("bagian_judul");
    element.innerText = masukan.value
    console.log(masukan.value)

}

function tampilkan_alert () {
     const masukan = document.getElementById("masukan_1");

    alert(masukan.value)
}

function lihat_judul() {
    console.log("ini lihat judul")
    const element = document.getElementById("bagian_judul");
    element.classList.remove('sbok')
    element.classList.add('gitak')

}

function sembunyikan_judul() {
    console.log("ini sembunyikan")
    const bagianjudul = document.getElementById("bagian_judul");
    bagianjudul.classList.remove('gitak')
    bagianjudul.classList.add('sbok')
}

function lihat_alert () {
    console.log ("lihat_alert")
    alert(masukan_2.value)
}

function menampilkan_alert () {
   console.log ("mennampilkan_alert")
    alert(lihat.value)
}

function memanggil_alert () {
    const masukan = document.getElementById("melihat");

    alert(melihat.value)
}

