export {};
type Profile = {
    name: string;
    age: number;
    //code: number;
};

const me: Profile = {
    name: 'ztmy',
    age: 19,
};
me.age++;
console.log(me);
type PersonalDataType = Readonly<Profile>;
const friend: PersonalDataType = {
    name: 'zutomayo',
    age: 40,
};
friend.age++;
type Yomitori<T> = {
    readonly [P in keyof T]: T[P];
};
type YomitoriProfile = Yomitori<Profile>;
