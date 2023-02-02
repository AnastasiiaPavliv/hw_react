import {Component} from "react";
import {postsService} from "../service";

import {Post} from "./Post";

class Posts extends Component{
constructor(props) {
    super(props);
    this.state ={posts:[]}
}
componentDidMount() {
    postsService.getAll().then(({data})=> this.setState({posts:[...data]}))
}

    render(){
    return(
    <div>
        {this.state.posts.map(post=><Post key={post.id} post={post}/>)}
    </div>
)}
}
export {Posts}