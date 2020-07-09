import React, {Component} from "react";

interface CounterProps{
    startNumber : number // 자바에서는 이곳에서 기능정의를 했는데 ts에서는 프로퍼티 정의를 함
}

class Counter extends Component<CounterProps>{
    // 자바로 치면 ArrayList<?> arr = new
    // arr.add("")
    public state = {number: 0}
    props : any

    constructor(props: CounterProps) {
        // 자바에서는 생성자가 Counter(){} 였지만 ts에서는 constructor(){}이다.
        super(props);
        this.state.number = props.startNumber
    }
    public handleClick = () =>{
        this.setState({
            number: this.state.number +1 
            // 내가 선언하지 않았는데 사용할 수 있는 것은 상속밖에 없다. (OOP 세상에서)
        })
    }

    public render(){
        return <div>
            <h1>{this.state.number}</h1>
            <h1>{this.props.startNumber}</h1> //
            <button onClick={this.handleClick}>클 릭</button>
        </div>
        // 화면과 연결되는 JSX파일을 사용하고 있기 때문에 파일을 tsx로 해야함.
    }
}
export default Counter