let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                let aplikasi = JSON.parse(this.responseText);
                for (var i in aplikasi) {
                    if (aplikasi[i]['namaApps']=='Mobile Legends:Bang Bang') {
                        const isi = document.querySelector('.oldversion');
                        isi.innerHTML +=  `
                        <li><a href='#'>${aplikasi[i]['versi']}</a></li>
                        `;   
                    }
                }
            }
        }
xhr.open('GET', 'https://rawcdn.githack.com/mauludani/project/e26b77d0cd07af37e9a9f823b286383b83ad8850/kategori.json', true);
xhr.send();
