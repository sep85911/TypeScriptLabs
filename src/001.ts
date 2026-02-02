export const myName:string = "Micah"

export function sayMyName(myWords:string):void{
    console.log(`My Name is ${myWords}!!!`);
}

const steve = {
    name:"Steve",
    phoneBattery:70,
    charge:function(level1:number,level2:number){
        this.phoneBattery = level1 + level2
    }
}

const becky = {
    name:"Becky",
    phoneBattery:30,
}

steve.charge.apply(becky,[99,1])

console.log(becky.phoneBattery)
