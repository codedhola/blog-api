
const emailValidator = (email) => {
    return email.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/i)
}


module.exports = {
    emailValidator,

}