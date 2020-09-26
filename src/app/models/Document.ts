enum Rating {
    Negative = 0,
    Neutral = 1,
    Positive = 2
}

export class Document {
    id:number;
    title:string;
    author:string;
    date:string;
    url:string;
    companies:Array<number>;
    rating:Rating;
    description:string;
}