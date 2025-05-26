/**
 * membuat penyimpanan data dalam array
 * */
const dataUser=[];

let htmlDataUser=``;

document.getElementById("formData")
.addEventListener("submit", function (event) {
            event.preventDefault(); // supaya tidak reload
            const formData = new FormData(this);
            const data = Object.fromEntries(formData.entries());
             console.log("Data Form:", data);
            /**
             * Menyimpan data ke array
             * */ 
            dataUser.push(data)
            console.log("data setelah di tambahkan");
            console.log(dataUser);  
            
            view_data();

});

function view_data(){

            /**
             * som tabel body data user
             * */ 
            const tabelDataUser= document.getElementById('tabel-data-user')

            /**
             * Looping
             * */
            // i=0
            //i++ >>>>>>1
            //i++ >>>>>>>2
            // i 

            // -4,-3,-2,-1,0,1,2,3,4,5
            // <

            // dataUser.length = sebanyak data dataUser 3
            // -5 < 3

            // ========================
            // let i=0
            // i< dataUser.length ========= 0 < 3
            // eksekusi body/tubuh for
            // i++
            // ======================
            // i=1
            // i< dataUser.length ========= 1 < 3
            // eksekusi body/tubuh for
            // i++
            // ================================
            // i=2
            // i< dataUser.length ========= 2 < 3
            // eksekusi body/tubuh for
            // i++
            // ================================
            // i=3
            // i< dataUser.length ========= 3 < 3

            htmlDataUser=``
            for(let i=0; i < dataUser.length ;i++){
                /**
                 * ini akan di eksekusi ketika pernyataan
                 * i < dataUser.length
                 * di nyakatan benar
                 * */ 
                htmlDataUser = htmlDataUser+`
                <tr>
                    <td class="td">${i+1}</td>
                    <td>${dataUser[i].nama}</td>
                    <td>${dataUser[i].alamat}</td>
                    <td>${dataUser[i].jenis_kelamin}</td>
                    <td>${dataUser[i].umur}</td>
                    <td>${dataUser[i].kewarganegaraan}</td>
                    <td>${dataUser[i].pendidika_terakhir}</td>
                </tr>`

            }

            /** Menampilkan data */ 
            tabelDataUser.innerHTML=htmlDataUser;
}

