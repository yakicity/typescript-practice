import axios from 'axios';
import { title } from 'process';
import { deserialize } from 'v8';
export {};

let url: string =
    'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

//getの引数にurlをわたすとgetリクエストを渡すことができる
//コールバック関数であるthenでレスポンスを受け取れる
//その中でfunctionという関数を使ってconsole.logしている

//any型に依存しないアノテーションの作り方を学んだ
axios.get(url).then(function (Response) {
    interface Article {
        id: number;
        title: string;
        description: string;
    }
    //let data: any;
    let data: Article[];
    data = Response.data;
    /*
    data = [
        {
            id: 1,
            title: 'ztmy',
            description: 'zutomayo',
        }
    ]
    */
    console.log(data);
});
