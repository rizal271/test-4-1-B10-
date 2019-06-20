var mat = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

function matrik(params) {
    var hasil = []
    for (var k = 0; k < params.length; k++) {
        hasil.push([])
    }
    for (var i = 0; i < params.length; i++) {
        for (var j = 0; j < params[i].length; j++) {
            hasil[j].push(params[i][j])
        }
        '/n'
    }
    return hasil
}

console.log(matrik(mat))