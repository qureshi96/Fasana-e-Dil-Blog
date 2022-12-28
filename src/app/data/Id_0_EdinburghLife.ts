import { BlogPostModel } from "./blogPostModel";

export class Id_0_EdinburghLife{
    blogPost: BlogPostModel = new BlogPostModel();


    constructor(){
        this.blogPost.author="Usman Ahmed";
        this.blogPost.id='0';
        this.blogPost.title='Settling in';
        this.blogPost.subtitle="What's life in Edinburgh like";
        this.blogPost.Created_date ="December 28, 2023";
        this.blogPost.content[0]= "";
        this.blogPost.content[1]= "";
        this.blogPost.content[2]= "";
    }
}