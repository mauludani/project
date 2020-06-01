$.getJSON("http://localhost/dmab/koneksi.php",function(result){
    let dataset = new Array();
    let iris = [];
               $.each(result, function(i, kolom){
                dataset.push(kolom);
                iris.push(kolom["Iris"]);
               })
        let petallength = new Array();
        // deklarasi array kosongan

        for (let i in dataset){
            petallength.push(dataset[i]["Petal Length"]);
        }        

        let angka = petallength.map(bagian => parseFloat(bagian));

        const unique = (value, index, self) => {
            return self.indexOf(value) === index;
        }

        const PetalL = angka.filter(unique).sort();        
        let rata = new Array();

        for (let i=0; i <= PetalL.length; i++){
            if(i < PetalL.length-1){
                rata.push((PetalL[i]+PetalL[i+1])/2);
            }
        }   
        let hasil = [];     
        let tempHasil = [];
        function a(iris, atribut, rata, i) {
            this.rata = rata;
            this.iris = iris;
            this.rata = rata;
            this.atribut = atribut;
            let kurangdari = 0;
            let lebihdari = 0;
            let obj = {};
            function kurang() {
                for (let i in dataset){
                    if (dataset[i]["Iris"] == this.iris && dataset[i][this.atribut]<=this.rata) {
                    kurangdari++;
                    }
                }   
                obj[this.atribut+" <= "+this.rata] = kurangdari;
                tempHasil.push(obj);
                lebih();                
            }
            function lebih() {
                for (let i in dataset){
                    if (dataset[i]["Iris"] == this.iris && dataset[i][this.atribut]>this.rata) {
                    lebihdari++;
                    }
                }  
                obj[this.atribut+" > "+this.rata] = lebihdari;
                tempHasil.join(obj);                
            }
            
            kurang();
            return;
            }
            for (let i in rata){                
                for (let k in dataset){
                    if (dataset[k]["Iris"]=="Iris-setosa") {
                        a('Iris-setosa', 'Petal Length', rata[i], i);
                    }                                        
                }
            }
            for (let i in tempHasil){
                if (JSON.stringify(tempHasil[i]) != JSON.stringify(tempHasil[i-1])) {
                    hasil.push(tempHasil[i]);
                }
            }
            console.log(hasil);
    })
