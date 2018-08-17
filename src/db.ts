import {den, dny} from './data.js';
//vracim string pro web server, pripadne prepsat na objekt pro potreby db
 function insert(data:den):string{
    dny.push(data);    
    return JSON.stringify(dny)
};

console.log(insert ({
    id:2,
    kdo:2,
    datum: new Date(),
    pozn1: 'xx',
    pozn2: 'xx2'
}),
);

 function select():string{
    return JSON.stringify(dny);

};
 function update():void{};

 export {select,update,insert};