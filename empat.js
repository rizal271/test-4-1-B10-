var mat1 =[
    [3,4],
    [1,2]]
var mat2 =[
    [7,5],
    [6,4]]
        
    function kalimatrix( matA, matB ) {
	
        var arr = new Array( matA.length );
        
        for ( var i = 0; i < arr.length; i++ ) {
            
            arr[ i ] = new Array( matB[ i ].length );
            for ( var j = 0; j < matA.length; j++ ) {
                
                arr[ i ][ j ] = 0
                for ( var k = 0; k < matB.length; k++ ) {
                    
                    arr[ i ][ j ] += matA[ i ][ k ] * matB[ k ][ j ];
                }
            }
        }
        
        return arr;
    }
console.log(kalimatrix(mat1,mat2))