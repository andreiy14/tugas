var result = '';
var x = new Array();
function segitiga(){
    for( var i = 1; i<6; i++){   
        x[i] = new Array()
        for(var j =1; j<=i; j++){
            if(j==1 || j==i){
                x[i][j]=1;
            }else{
                x[i][j] = x[i-1][j-1] + x[i-1][j];
            }
        }
    
    }
    
    for(var i=1; i<6; i++){
        for( var j=1; j<=i; j++){
            result+=(x[i] [j]+ " ");
        }
        result+='\n'
    }
    return result
}

console.log(segitiga());