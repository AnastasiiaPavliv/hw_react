import {Component} from "react";

class Post extends Component{
    constructor (props) {
        super(props);
    }
    render(){
       const {userId, id, title,body} =this.props.post;
        return(
            <div>
                <div>userId: {userId}</div>
                <div>id: {id}</div>
                <div>title: {title}</div>
                <div>body: {body}</div>
            </div>
        )}
}
export {Post}