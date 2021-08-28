export {};

//nullを渡しただけではany型として型推論されてしまう
let absence = null;
//なので自分でアノテーションする
let absence2: null = null;
//absence2 = 123;

//undefinedを渡しただけではany型として型推論されてしまう
let data = undefined;
//なので自分でアノテーションする
let data2: undefined = undefined;
//data2 = 123;

//echo 'export {} ;' > src/null-undi.ts
//npm run dev-watch src/null-undi.ts
