export class SignInData
{
     email:string;
     password:string;

    constructor( email:string,password:string)
    {
        this.email = email;
        this.password = password;
    }
    getEmail()
    {
        return this.email;
    
    }
    getPassword()
    {
        return this.password;
    }
}