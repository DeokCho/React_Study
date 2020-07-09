import React, {Component} from "react";

interface HelloProps{
    name:""
}
class Hello extends Component<HelloProps> {
    public state = {name: ""}
    props: any
    constructor(props: HelloProps) {
        super(props);
        this.state.name = props.name
    }
    public handleClick = () => {
        this.setState({
            name: "안녕\t"+this.state.name
        })
    }
    public render() {
        return <div>
            <h1>{this.state.name}</h1>
            <button onClick={this.handleClick}>클 릭</button>
        </div>
    }
}
export default Hello
