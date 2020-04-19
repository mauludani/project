let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                let aplikasi = JSON.parse(this.responseText);
                    aplikasi.sort(GetSortOrder("tglUpdate"));  
                for (var i in aplikasi) {
                    if (aplikasi[i]['namaApps']==namaApps) {
                        const isi = document.querySelector('.oldversion');
                        isi.innerHTML +=  `
                        <li><a href='${aplikasi[i]['url']}'>${aplikasi[i]['namaApps']} ${aplikasi[i]['versi']}</a></li>
                        `;   
                    } else {
                    console.log(namaApps+' gagal dibaca');
                    }
                }
            }
        }
function GetSortOrder(prop) {  
    return function(a, b) {  
        if (a[prop] < b[prop]) {  
            return 1;  
        } else if (a[prop] > b[prop]) {  
            return -1;  
        }  
        return 0;  
    }  
}  
xhr.open('GET', 'https://mauludani.000webhostapp.com/json/json.json', true);
xhr.send();
