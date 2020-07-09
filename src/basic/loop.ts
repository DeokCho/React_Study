export default function loop(){
    whileLoop() //0
    doWhile() //1 es5
    forLoop() //2 es5
    forInArrayLoop() //3
    forInObjectLoop() //4
    forOfArrayLoop() //5
    forOfMapLoop() //6
    forOfSetLoop() //7
    forOfStringLoop() //8
    symbolIterator() //9
}

function whileLoop(){
    console.log(`---0.while Loop---`)
    console.log(`1부터 100까지의 합`)
    let count:number =0
    let sum:number =0
    while(count<100){
        count++
        sum+=count
    }
    console.log(sum)
}
function doWhile(){
    console.log(`---1.doWhile---`)
    let count: number = 0
    let sum:number =0
    do{count++
        sum+=count
    }while(count != 100)
    console.log(`1부터 100까지의 합`)
    console.log(sum)
}
function forLoop(){
    console.log(`---2.forLoop---`)
    console.log(`1부터 100까지의 합`)
    let i:number = 0
    let sum:number = 0
    for(i=0; i<101; i++){
        sum+=i
    }
    console.log(sum)
}
function forInArrayLoop(){
    console.log(`---3.forInArrayLoop---`)
    let arr:object = ["a", "b", "c", "d"]
    for(let i in arr){
        console.log(i, arr[i])
    }
}
function forInObjectLoop(){
    console.log(`---4.forInObjectLoop---`)
    let fruits = {"a":"apple", "b":"banana", "c":"cherry"}
    for(let i in fruits){
        console.log(i, fruits[i])
    }
}
function forOfArrayLoop(){
    console.log(`---5.forOfArrayLoop---`)
    for(const i of [1,2,3]){
        console.log(i)
    }
}
function forOfMapLoop(){
    console.log(`---6.forOfMapLoop---`)
    let map = new Map([["a", 1],["b",2]])
    map.set("a", 3)
    for(let i of map){
        console.log(i)
    }
}
function forOfSetLoop(){
    console.log(`---7.forOfSetLoop---`)
    let set = new Set(["a", "b", "c", "d", "a", "b", "c"])
    for(let i of set){
        console.log(i)
    }
}
function forOfStringLoop(){
    console.log(`---8.forOfStringLoop---`)
    for(let i of "Hello"){
        console.log(i)
    }
}
function symbolIterator(){
    console.log(`---9.symboleIterator---`)
    let arr = [1,2]
    let obj = arr[Symbol.iterator]()
    console.log(`1. ${typeof obj}`)
    console.log(`2. ${obj.next()}`)
    console.log(`3. ${obj.next()}`)
    console.log(`4. ${obj.next()}`)
}
