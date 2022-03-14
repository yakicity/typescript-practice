export {};

// Record<K,T>
//Kにはユニオン型
//でその複数のメンバーに繰り返し繰り返しTというものを設定する
type Prefecture = 'Tokyo' | 'Chiba' | 'Osaka';
type Covid19 = {
    name: string;
    cases: number;
};

const covid19: Record<Prefecture, Covid19> = {
    Tokyo: { name: 'a', cases: 12 },
    Chiba: { name: 'b', cases: 11 },
    Osaka: { name: 'c', cases: 10 },
    Kyoto: { name: 'd', cases: 100 },
};
