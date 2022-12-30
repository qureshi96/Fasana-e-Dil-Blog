import { BlogPostModel } from "./blogPostModel";
import {Id_0_EdinburghLife} from "./Id_0_EdinburghLife";
import { Id_1_Cricket } from "./Id_1_Cricket";

export class BlogPostsList{
    blogsList : BlogPostModel[]= [];
    obj:any;

    constructor(){
        this.obj=new Id_0_EdinburghLife
        this.blogsList[0]=this.obj.blogPost;
        //this.obj=new Id_1_Cricket;
       // this.blogsList[1]=this.obj.blogPost;
    }
}