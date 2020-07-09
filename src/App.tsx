import React, {Component} from 'react';
// @ts-ignore
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Home,ChatBot } from './components';
// @ts-ignore
import {Hello, Counter, Clock, Kitty} from './oop';
import './App.css';

class App extends Component<any, any> {
    public render() {
        return <Router>
            <Link to="/">홈으로 이동</Link> <br/>
            <Link to="/chat">챗봇</Link><br/>
            <Link to="/Counter">카운터</Link><br/>
            <Link to="/Hello">헬로우</Link><br/>
            <Link to="/Clock">클락</Link><br/>
            <Link to="/Kitty">코조</Link><br/>
            <Route exact path='/chat' component={ChatBot}/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/Counter'><Counter startNumber={0}/></Route>
            <Route exact path='/Hello'><Hello name={"홍길동"}/></Route>
            <Route exact path='/Clock' component={Clock}/>
            <Route exact path='/Kitty' component={Kitty}/>
        </Router>
    }
}
export default App;


