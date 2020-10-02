import React, { Component } from "react";
import {connect} from "react-redux";
import {createPost} from "../../redux/actions";

class PostForm extends Component{
    state = {
        content: "",
        photo: "https://elephant-travel.com.ua/userfiles/%D1%82%D0%B0%D0%B8%D1%82%D0%B82.jpg",
        authorName: "Bikini"
    }

    handleChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        })
    }
    
    submit = () => {
        const {content, photo, authorName} = this.state;
        if(!content.trim() && !photo.trim()){
            return;
        }
        const authorObject = this.props.authors.find((author) => {
            return Object.values(author).find((value) => {
                return value === authorName
            })
        })
        const date = new Date();
        const options = {
            day: "numeric",
            month: "short"
        }
        const newPost = {
            author: authorObject,
            content, 
            photo, 
            date: date.toLocaleDateString('en-US', options),
            likes: 0,
            comments: 0,
            reposts: 0,
            liked: false,
            commented: false,
            reposted: false
        }
        console.log(newPost);
        this.props.createPost(newPost);
        this.setState({
            content: "",
            photo: ""
        })
    }

    render(){
        return(
            <div className="form-wrapper">
                <h3>Create Post</h3>
                <textarea id="content" value={this.state.content} onChange={this.handleChange} placeholder="What's new?"/>
                <label>
                    <span>Picture URL:</span>
                    <input type="text" id="photo" value={this.state.photo} onChange={this.handleChange} />
                </label>                
                <label>
                    <span>Choose an author:</span>
                    <select name="authors" id="authorName" value={this.state.authorName} onChange={this.handleChange} >
                        {this.props.authors.map((author, index) => {
                            return <option value={author.name} key={index}>{author.name}</option>
                        })}
                    </select>
                </label> 
                <button onClick={this.submit}>Create</button>
            </div>
        )
    }
}

const mapState = (state) => {
    return {
        authors: state.authors.authors
    }
}

const mapDispatch = {
    createPost
}

export default connect(mapState, mapDispatch)(PostForm);