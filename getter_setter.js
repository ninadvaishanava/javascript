 class user {
    constructor(email, name){
        this.email = email
        this.name = name
    }

get email(){
    return this._email.toUpperCase()
}

set email(value){
    this._email = value
}
 }

 const values = new user ("ninad@bi","ninad")
 console.log(values.email);