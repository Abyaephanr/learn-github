// mendeklarasikan function
function tambah (num1, num2) {
    const hasil = num1 +num2
    return hasil
}

console.log(tambah(5, 8))


function word (word1, word2) {
    const full = word1 + " " + word2
    return full
}

console.log(word("Hallo", "KONTOL"))



function batasUsia(usia) {
    if(usia >= 13){
        const text = "Silahkan lanjutkan registrasi"
        return text

    } else if (usia < 13){
        const text = "Maaf, Usia anda di bawah ketentuan pengguna"
        return text

    } else if (usia != typeof 0) {
        const text = "Mohon masukkan angka usia Anda"
        return text

    } else {
        const text = "Mohon masukkan angka usia Anda"
        return text
    }
}

const final = batasUsia("hurgianto")

console.log(final)

// arrow function

var kali = (angka1, angka2) => {
    const operasi = angka1 * angka2
    return operasi
}

console.log(kali(3, 5))