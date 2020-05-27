let dataset = new Array();
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        
        dataset = JSON.parse(this.responseText);
        // dataset adalah variabel array
        let petallength = new Array();
        for (let i in dataset){
            petallength.push(dataset[i]["Petal Length"]);
        }

        let angka = petallength.map(part => parseFloat(part));
        // angka.sort();
        const unique = (value, index, self) => {
            return self.indexOf(value) === index;
        }
        PetalL = angka.filter(unique).sort();
        console.log(PetalL);
    }
}
xhr.open('GET', 'koneksi.php', true);
xhr.send();
