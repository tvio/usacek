
type den=  {
    id: number;
    datum: Date;
    pozn1?: string;
    pozn2?: string;
    kdo: number;
   
};
 let den1:den = {
   id : 1,
   datum : new Date,
   pozn1 : "jojo",
   pozn2 : "nene",
   kdo : 1
 }


let dny:den[] = [den1];

console.log(dny[0]);

export  {den,dny};
