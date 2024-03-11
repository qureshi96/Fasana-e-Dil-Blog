export class userModel{
name:string="";
photoUrl:string="";
email:string ="";

constructor(){
    

}
setUserDetails(name,photoUrl,email){
    this.name=name;
    this.photoUrl=photoUrl;
    this.email=email;
}

}