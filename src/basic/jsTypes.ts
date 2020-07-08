import {object} from "prop-types";

export default function jsTypes(): void{
    console.log("------Javascript Types------")
    /* Vanila JS의 Types :
        boolean, number, string, undefined, null, JSON, array, function
        ProtoType 내부에 정의되어있음

        TypeScript에서는 내부가 아닌 외부에 노출시킴으로서 정의한다.
     * */

    // 자바스크립트는 우측에 할당되는 값에 의해 타입이 정해진다.
    let myBoolean = true
    let myNumber = 1
    let myString = "가나다라"
    let myUndefined
    let myNull = []
    let myJSON = {}
    let myArray = [1,2,3]
    let myFunction = object


    console.log(`myBoolean:${typeof myBoolean}`)
    console.log(`myNumber:${typeof myNumber}`)
    console.log(`myString:${typeof myString}`)
    console.log(`myUndefined:${typeof myUndefined}`)
    console.log(`myNull:${typeof myNull}`)
    console.log(`myJSON:${typeof myJSON}`)
    console.log(`myArray:${typeof myArray}`)
    console.log(`myFunction:${typeof myFunction}`)
}

export function tsTypes():void{
    let basket : any = 10
    basket = true
    basket = "TV"
    // console.log(basket)
    let arr : string[] = ["a", "b", "c"]
    for(let i=0; i<arr.length; i++){
        console.log(`${arr[i]}\t`)
    }
    let arr2: Array<string> = ["a", "b", "c"]
    for(let i=0; i<arr2.length; i++){
        console.log(`${arr2[i]}\t`)
    }
    console.log(`----enum-----`);
    enum WeekDay {
        Mon = 0, Tue = 1, Wed=2, Thu=Tue+Wed
    }
    const thu2: number = 10 * 2;
    enum WeekDay2 {
        Mon = 10, Tue = 11, Wed = 10 << 2, Thu = thu2
    }
    enum WeekDay3 {
        Mon = "Monday", Tue="Tuesday"
    }
    console.log(`1. ${JSON.stringify(WeekDay)}`);
    console.log(`2. ${JSON.stringify(WeekDay2)}`);
    console.log(`3. ${JSON.stringify(WeekDay3)}`);
    console.log(`4. Mon = ${WeekDay.Mon}, Tue=${WeekDay["Tue"]}, Wed=${WeekDay.Wed}`);
    console.log(`5. 0 = ${WeekDay[0]}, 1 = ${WeekDay[1]}, 3=${WeekDay.Wed}`);
    console.log(`6. ${typeof WeekDay}`);
    console.log(`7. ${typeof WeekDay.Mon}, ${typeof WeekDay3.Mon}`);
    console.log(`8. ${typeof WeekDay[0]}, ${WeekDay[0]}`);
    const myDay: WeekDay = 50;
    console.log(`9. ${typeof myDay}, ${myDay}`);
    const myDay2: WeekDay3 = WeekDay3.Mon;
    console.log(`10. ${typeof myDay2}, ${myDay2}`);
}

export function symbolType(): void{
    const hello = Symbol("hello")
    const hello2 = Symbol("hello")
    // @ts-ignore
    console.log(hello===hello2)
    console.log(hello, hello2)
    console.log(typeof hello)

    console.log(`----Symbol 2----`)
    const uniqueKey = Symbol() // Symbol 이 키값
    let obj = {}
    obj[uniqueKey] = 1234
    console.log(obj)
}

export function tupleType(): void{
    let x: [string, number]
    x = ["tuple", 100]
    console.log(typeof x, typeof x[0], typeof x[1])
    console.log(x[0].substr(0,2), x[1].toFixed(2)) // 끝의 자리 수(length)는 포함하지 않음

    let x2: [string, number, string, boolean] = ["tuple", 3,"tuple2",false]
    console.log(x2)
}