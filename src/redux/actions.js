import { CREATE_POST, TOGGLE_LIKE, TOGGLE_COMMENT, TOGGLE_REPOST } from "./types";

export function createPost(post){
    return {
        type: CREATE_POST,
        payload: post
    }
}

export function toggleLike(liked, likes, id){
    return {
        type: TOGGLE_LIKE,
        liked: !liked,
        likes: liked ? likes - 1 : likes + 1,
        id: id
    }
}
export function toggleComment(commented, comments, id){
    return {
        type: TOGGLE_COMMENT,
        commented: !commented,
        comments: commented ? comments - 1 : comments + 1,
        id: id
    }
}
export function toggleRepost(reposted, reposts, id){
    return {
        type: TOGGLE_REPOST,
        reposted: !reposted,
        reposts: reposted ? reposts - 1 : reposts + 1,
        id: id
    }
}