export {};

//中身をその時その時で追加できないのか
//それがインデックスシグネチャー

//書き方
//{ [ index: typeForIndex ] : typeForValue }
//let profile: { [index: string]: string | number } = {};

interface Profile {
    name: string;
    underTwenty: boolean;
    [index: string]: string | number | boolean;
}

let profile: Profile = { name: 'ztmy', underTwenty: false };

profile.name = 'ztmy';
profile.age = 43;
