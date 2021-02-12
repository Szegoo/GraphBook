import React from 'react';
import '../../assets/css/style.css';
import { Helmet } from 'react-helmet'

const posts = [{
    id: 2,
    text: 'Lorem Ispum',
    user: {
        avatar: '/uploads/avatar1.png',
        username: 'Test User'
    }
},
{
    id: 1,
    text: 'Lorem Ispum',
    user: {
        avatar: '/uploads/avatar2.png',
        username: 'Test User 2'
    }
}];
export default class App extends React.Component {
    state = {
        posts: posts,
        postContent: ''
    }
    handlePostContentChange = (event) => {
        this.setState({postContent: event.target.value});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const newPost = {
            id: this.state.posts.length + 1,
            text: this.state.postContent,
            user: {
                avatar: '/uploads/avatar1.png',
                username: 'Sinak'
            }
        };
        this.setState((prevState) => ({
            posts: [newPost, ...prevState.posts],
            postContent: ''
        }));
    }
    render(){
        const {posts, postContent} = this.state;
        return(
            <div className="container">
                <Helmet>
                    <title>Graphbook - Feed</title>
                    <meta name="description" content="New messagess from all your friends at Graphbook"/>
                </Helmet>
                {posts.map((post, i) => 
                <div key={post.id} className="post">
                    <div className="header">
                        <img src={post.user.avatar}/>
                        <h2>{post.user.username}</h2>
                    </div>
                    <div className="feed">
                        <div className="postForm">
                            <form onSubmit={this.handleSubmit}>
                                <textarea value={postContent} onChange={this.handlePostContentChange}
                                placeholder="Write first your post :)" />
                                    <input type="submit" value="Submit"/>
                            </form>
                        </div>
                        <p className="content">
                            {post.text}
                        </p>
                    </div>
                </div>
                )}
            </div>
        )
    }
}