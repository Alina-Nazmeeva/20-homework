import React from "react";
import './Posts.css';
import Post from "./Post";
import { connect } from "react-redux";

const Posts = ({posts}) => {
    return(
        <div>
            {posts.map((post, index) => {
                return <Post {...post} key={index} id={index} />
            })}
        </div>
    )   
}

const mapState = (state) => {
    return {
        posts: state.posts.posts
    }
}

export default connect(mapState, null)(Posts);