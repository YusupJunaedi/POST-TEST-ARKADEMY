const cetak_gambar = (n) => {

    console.log('--- panjang ---')
    for(let row=0; row < n; row++){
        let lines = "";

        for(let col=0; col<n;col++){
            if(col === 0 || col === n-1){
                lines += '* ';
            } else if(row === Math.floor(n/2)){
                lines += '* ';
            } else {
                lines += '= ';
            }
        }
        console.log(lines)
    }  
};

cetak_gambar(5);