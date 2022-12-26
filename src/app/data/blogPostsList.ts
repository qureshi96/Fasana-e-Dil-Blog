import { BlogPostModel } from "./blogPostModel";
import {Id_0_EdinburghLife} from "./Id_0_EdinburghLife";

export class BlogPostsList{
    blogsList : BlogPostModel[]= [];
    obj:Id_0_EdinburghLife= new Id_0_EdinburghLife();

    constructor(){
        
        this.blogsList[0]=this.obj.blogPost;
    }
}