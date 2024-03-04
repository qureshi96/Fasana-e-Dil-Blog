export class CommentModel{
    text:string;
    username:string;
    photoUrl:string;
    email:string;
    time:Date;

    constructor(text,username,photoUrl,email,time){
        this.text=text;
        this.username=username;
        this.photoUrl=photoUrl;
        this.email=email;
        this.time=time;
    }
}