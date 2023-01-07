import { BlogPostModel } from "./blogPostModel";

export class Id_2_Tirana{
    blogPost: BlogPostModel = new BlogPostModel();


    constructor(){
        this.blogPost.author="Usman Ahmed";
        this.blogPost.id='2';
        this.blogPost.title='';
        this.blogPost.subtitle="";
        this.blogPost.Created_date ="";
        this.blogPost.content[0]= "";
    }
}