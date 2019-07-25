class Post {

    constructor(private _title:string, private _authorName:string, private _noOfLikes:number = 0){

    }

    get title():string{
        return this._title;
    }

    get authorName():string{
        return this._authorName;
    }

    like = ()=>{
        this._noOfLikes++;
    }

    get noOfLikes():number{
        return this._noOfLikes;
    }
}

let post1 = new Post('Closures', 'Ravi');
post1.like();
post1.like();
post1.like();
post1.like();
post1.like();
post1.like();
post1.like();

console.log(post1.noOfLikes);