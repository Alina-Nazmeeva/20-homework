import React from 'react';
import LikeIcon from "../../img/likes.png";
import CommentsIcon from "../../img/comments.png";
import RepostsIcon from "../../img/reposts.png";
import ShareIcon from "../../img/share.png";
import { connect } from 'react-redux';
import {toggleLike, toggleComment, toggleRepost} from "../../redux/actions";

function Post(props){
    const toggle = (event) => {
        switch(event.currentTarget.id){
            case "like":
                props.toggleLike(props.liked, props.likes, props.id);
                break;
            case "comment":
                props.toggleComment(props.commented, props.comments, props.id);
                break;
            case "share":
                props.toggleRepost(props.reposted, props.reposts, props.id);
                break;
            default:
                break;
        }
    }

    return (
        <div className="post">
            <div className="post-header">
                <div className="avatar" style={{backgroundImage: `url(${props.author.avatar})`}}></div>
                <div className="post-text">
                    <p><strong className="name">{props.author.name}</strong><span>{props.author.nickname} • {props.date}</span></p>
                    <p className="post-content">{props.content}</p>
                </div>
            </div>
            <div className="photo" style={{backgroundImage: `url(${props.photo})`}}></div>
            <div className="post-footer">
                <div className="buttons" id="like" onClick={toggle}>
                    <img className="icon" src={LikeIcon} alt="like" />
                    <span style={{fontWeight: `${props.liked ? "700" : "400"}`}}>{props.likes}</span>
                </div>
                <div className="buttons" id="comment" onClick={toggle}>
                    <img className="icon" src={CommentsIcon} alt="comment"/>
                    <span style={{fontWeight: `${props.commented ? "700" : "400"}`}}>{props.comments}</span>
                </div>
                <div className="buttons">
                    <img className="icon" src={RepostsIcon} alt="repost"/>
                    <span style={{fontWeight: `${props.reposted ? "700" : "400"}`}}>{props.reposts}</span>
                </div>
                <div className="buttons" id="share" onClick={toggle}>
                    <img className="icon" src={ShareIcon} alt="share"/>
                </div>
            </div>
        </div>
    )
}

const mapDispatch = {
    toggleLike, toggleComment, toggleRepost
}

export default connect(null, mapDispatch)(Post);