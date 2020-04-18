let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                let aplikasi = JSON.parse(this.responseText);
                for (var i in aplikasi) {
                    if (aplikasi[i]['namaApps']==namaApps) {
                        const isi = document.querySelector('.oldversion');
                        isi.innerHTML +=  `
                        <li><a href='#'>${aplikasi[i]['versi']}</a></li>
                        `;   
                    } else {
                    console.log(namaApps+' gagal dibaca');
                    }
                }
            }
        }
xhr.open('GET', 'https://raw.githubusercontent.com/mauludani/project/master/kategori.json', true);
xhr.send();
