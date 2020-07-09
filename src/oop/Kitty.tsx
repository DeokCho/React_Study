import React,{Component} from "react";
export default class Kitty extends Component{
    public formatDate(date) {
        return date.toLocaleDateString();
    }
    public state = {
        date: new Date(),
        text: 'I hope you give me your code!',
        author: {
            name: '코조(26세)',
            avatarUrl: 'https://file.thisisgame.com/upload/tboard/user/2009/11/09/20091109182154_7781.jpg',
        },
    };
    public comment= ()=> {
        return (
            <div className="Comment">
                <div className="UserInfo">
                    <img
                        className="Avatar"
                        src={this.state.author.avatarUrl}
                        alt={this.state.author.name}
                    />
                    <div className="UserInfo-name">
                        {this.state.author.name}
                    </div>
                </div>
                <div className="Comment-text">{this.state.text}</div>
                <div className="Comment-date">
                    {this.formatDate(this.state.date)}
                </div>
            </div>
        );
    }
    public render(){
        return(<div>
            {this.comment()}
        </div>)
    }
}