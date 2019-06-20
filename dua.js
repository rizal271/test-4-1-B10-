var bilangan = [167,7,5]




function hitung() {
    // var hasil=0
    var akhir = 0
    var cek = 0
    var cekb = 0
    for (var x = 0; x < bilangan.length; x++) {
        akhir += bilangan[x];
        digits = Array.from(String(akhir), Number)

    }

        for (var i = 0; i < digits.length; i++) {
            cek += digits[i]
            digitsb = Array.from(String(cek), Number)
        }
        for (var a = 0; a < digitsb.length; a++) {
            cekb += digitsb[a]
            digitsc = Array.from(String(cekb), Number)
        }
    return cekb
}
console.log(hitung())