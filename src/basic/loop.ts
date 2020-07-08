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
    symboleIterator() //9
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
}
function forInObjectLoop(){
    console.log(`---4.forInObjectLoop---`)
}
function forOfArrayLoop(){
    console.log(`---5.forOfArrayLoop---`)
}
function forOfMapLoop(){
    console.log(`---6.forOfMapLoop---`)
}
function forOfSetLoop(){
    console.log(`---7.forOfSetLoop---`)
}
function forOfStringLoop(){
    console.log(`---8.forOfStringLoop---`)
}
function symboleIterator(){
    console.log(`---9.symboleIterator---`)
}
