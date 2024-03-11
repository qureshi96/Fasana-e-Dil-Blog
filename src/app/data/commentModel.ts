export class CommentModel{
    _id:any;
    postid:string;
    text:string;
    username:string;
    photoUrl:string;
    email:string;
    time:Date;

    constructor(postid,text,username,photoUrl,email,time){
        this.postid=postid;
        this.text=text;
        this.username=username;
        this.photoUrl=photoUrl;
        this.email=email;
        this.time=time;
    }
}