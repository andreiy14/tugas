






function hitungKembalian(totalBelanja, jumlahUang){
    var kembalianUang = jumlahUang - totalBelanja;
    
    var lembar = ["dua","tiga","empat","lima","enam","tujuh","delapan","sembilan"];
    var uang = [ [50000,0],
     [20000,0],
     [10000,0],
     [5000,0],
     [2000,0],
     [1000,0],
     [500,0]];
    //  var lengthUang = uang.length
    result= []
    var sisa = kembalianUang;
    while(sisa!=0){
        for(var i=0; i<uang.length; i++){
            
            if (sisa >= uang[i][0]){
                uang[i][1] = Math.floor(sisa / uang[i][0]) 
                sisa = sisa % uang[i][0]
                if(uang[i][1]!=1){
                    result.push(lembar[uang[i][1]-2]+" lembar "+String(uang[i][0]))
                } else if(uang[6][1]!=0){
                    result.push("satu koin "+String(uang[i][0]))
                }else{
                    result.push("selembar "+String(uang[i][0]))
                }
            }
        }
    }
    return result
 }



 var hasil = hitungKembalian(15500,50000)

console.log(hasil)