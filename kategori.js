let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                let aplikasi = JSON.parse(this.responseText);
                for (var i in aplikasi) {
                    if (aplikasi[i]['namaApps']=='Mobile Legends:Bang Bang') {
                        const isi = document.querySelector('.oldversion');
                        isi.innerHTML +=  `
                        <li><a href='#'>${aplikasi[i]['namaApps']}</a></li>
                        `;   
                    }
                }
            }
        }
xhr.open('GET', 'kategori.json', true);
xhr.send();