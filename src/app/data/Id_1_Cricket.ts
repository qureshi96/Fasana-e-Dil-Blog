import { BlogPostModel } from "./blogPostModel";

export class Id_1_Cricket{
    blogPost : BlogPostModel = new BlogPostModel();

    constructor(){
        this.blogPost.author="Usman Ahmed";
        this.blogPost.id='1';
        this.blogPost.title="Cricket";
        this.blogPost.subtitle="The most beautiful sport";
        this.blogPost.Created_date="January 2, 2023";
        this.blogPost.content[0]="";
        this.blogPost.content[1]="";
    }
}