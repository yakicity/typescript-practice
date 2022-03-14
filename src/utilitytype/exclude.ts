import { type } from 'os';

export {};

type Debug = () => void;
type SomeTypes = string | number | Debug;
type Function = Exclude<SomeTypes, string | number>;
type MyFunction = Exclude<SomeTypes, string | number>;

//Exclude<全体, 除きたい型>
//もう一つやり方がある
type FunctionExtract = Extract<SomeTypes, Debug>;
//ユニオンからnullとかundefinedを排除
type NULLable = string | number | null | undefined;
type NonNUllableTypes = NonNullable<NULLable>;
