import { CREATE_POST, TOGGLE_LIKE, TOGGLE_COMMENT, TOGGLE_REPOST } from "../types";
import Bikini from "../../img/Bikini.jpg";
import BikiniPost from "../../img/BikiniPost.jpg";
import Milka from "../../img/Milka.jpg";
import MilkaPost1 from "../../img/MilkaPost1.jpg";
import MilkaPost2 from "../../img/MilkaPost2.jpg";
import Murka from "../../img/Murka.jpg";
import MurkaPost1 from "../../img/MurkaPost1.jpg";
import MurkaPost2 from "../../img/MurkaPost2.jpg";

const initialState = {
    posts: [{
        author: {
          name: "Bikini",
          avatar: Bikini,
          nickname: "@bikinyator"
        },
        content: "My sister and me",
        photo: BikiniPost,
        date: "Sep 26",
        likes: 444,
        comments: 22,
        reposts: 2,
        liked: false,
        commented: false,
        reposted: false
      }, {
        author: {
            name: "Milka",
            avatar: Milka,
            nickname: "@milkyway"
          },
          content: "Human bought me new toy!",
          photo: MilkaPost1,
          date: "Sep 24",
          likes: 598,
          comments: 25,
          reposts: 3,
          liked: false,
          commented: false,
          reposted: false
      }, {
        author: {
            name: "Milka",
            avatar: Milka,
            nickname: "@milkyway"
          },
          content: "My kids",
          photo: MilkaPost2,
          date: "Sep 14",
          likes: 564,
          comments: 28,
          reposts: 3,
          liked: false,
          commented: false,
          reposted: false
      }, {
        author: {
          name: "Murka",
          avatar: Murka,
          nickname: "@murembo"
        },
        content: "Do NOT step outside your comfort zone",
        photo: MurkaPost1,
        date: "Sep 12",
        likes: 546,
        comments: 18,
        reposts: 6,
        liked: false,
        commented: false,
        reposted: false
      }, {
        author: {
          name: "Murka",
          avatar: Murka,
          nickname: "@murembo"
        },
        content: "Yes, I've eaten your food. No, I'm not sorry",
        photo: MurkaPost2,
        date: "Sep 10",
        likes: 666,
        comments: 24,
        reposts: 2,
        liked: false,
        commented: false,
        reposted: false
      }
    ]
}

export const postsReducer = (state = initialState, action) => {
    switch(action.type){
        case CREATE_POST: {
            return {...state, posts: [action.payload, ...state.posts]}
        }
        case TOGGLE_LIKE: {
            return {...state, posts : [...state.posts].map((item, index) => {
                if(index === action.id){
                    return {...item, liked: action.liked, likes: action.likes}
                } else return item;
            })}
        }
        case TOGGLE_COMMENT: {
            return {...state, posts : [...state.posts].map((item, index) => {
                if(index === action.id){
                    return {...item, commented: action.commented, comments: action.comments}
                } else return item;
            })}
        }
        case TOGGLE_REPOST: {
            return {...state, posts : [...state.posts].map((item, index) => {
                if(index === action.id){
                    return {...item, reposted: action.reposted, reposts: action.reposts}
                } else return item;
            })}
        }
        default: return state;
    }
}