import hello, {birthday, goodbye, calculate, butterfly} from "./hello";
import jsTypes, {tsTypes, symbolType, tupleType} from "./jsTypes";
import operator, {destructure, spread} from "./operator";
import loop from "./loop";

let menu: number = 3
let name, profile: string = ""
switch (menu) {
    case 0:
        name = "홍길동"
        const  message = goodbye(name)
        console.log(message)
        break
    case 1:
        name = "김유신"
        let year: number = 2002
        profile = JSON.stringify(birthday(name,year))
        console.log(profile)
        break

    case 2:
        let num1: number =10
        let num2: number =30
        let addResult = calculate(num1, num2)
        console.log(`덧셈결과: ${addResult}`)
        break

    case 3: // 자바스크립트 타입 출력
        //jsTypes()
        //tsTypes()
        // symbolType()
        //tupleType()
        //operator()
        // destructure()
        // spread()
        loop()
        break

    case 9:
        let no1: string = "나비처럼 날아가 볼까"
        let no2: string = "일렁거리는 바람에 실려"
        let no3: string = "이런 느낌을 언제나 느낄수 있을까"
        let singing = butterfly(no1, no2, no3)
        console.log(`노래가사: ${singing}`)
        break

    default :
        console.log("존재하지 않는 케이스입니다.")
        break
}

