

// alert("Hallo dani")
// confirm("Apakah anda yakin menghapus file ini?")



function ganti_teks(){
    // dom
    /**
     * 1. menggunakan id (harus beda/unik)
     * 2. menggunakan classname
     * */ 

    const masukan = document.getElementById("masukan");

    const element = document.getElementById("bagian-judul");
    element.innerText = masukan.value

}

function lihat_judul(){
    // dom
    /**
     * 1. menggunakan id (harus beda/unik)
     * 2. menggunakan classname
     * */ 
    const element = document.getElementById("bagian-judul");
    element.classList.remove('sbok')
    element.classList.add('gitak')

}


function sembunyikan_judul(){
    const bagianJudul = document.getElementById("bagian-judul");
    bagianJudul.classList.remove('gitak')
    bagianJudul.classList.add('sbok')
}