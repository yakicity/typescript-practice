export {};

type Profile = {
    name: string;
    age: number;
    code: number;
};

type PartialType = Partial<Profile>;

type Profile2 = {
    name: string;
    age?: number;
    code: number;
};
/*partial<T> = {
    [P in keyof T]?: T[P];
    //keyof Tとはユニオン型の各要素を文字列リテラル型として取り出す
    //inは一個ずつ取り出す
}

type RequiredType = Required<Profile2>;

type PropertyTypes = keyof Profile;
type Optional<T> = { [P in keyof T]?: T[P] };
type OptionalProfile = Optional<Profile>;
