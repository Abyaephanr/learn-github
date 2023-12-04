// Cek email & Password


const login = (email, password) => {
    const domainEmail = "@binaracademy.org"
    if (email.endsWith(domainEmail)) {

        const alphanumericCharacters = /^(?=.*[a-zA-Z])(?=.*[0-9])/
        const spesialKarakter = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

        if (password.lenght < 8 && !spesialKarakter.test(password) && !alphanumericCharacters.test(password)) {
            return "Password tidak sesuai format"

        } else {
            return "Anda berhasil login"
        }
    } else {
        return "Email tidak sesuai format"
    }
}

const emailLogin = "abya@binaracademy.org"
const passLogin = "abya"

const result = login(emailLogin, passLogin)
console.log(result)