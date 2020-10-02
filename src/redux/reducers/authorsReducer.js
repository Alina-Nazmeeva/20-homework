import Bikini from "../../img/Bikini.jpg";
import Milka from "../../img/Milka.jpg";
import Murka from "../../img/Murka.jpg";
import Cutie from "../../img/Cutie.JPG";

const initialState = {
    authors: [{
        name: "Bikini",
        avatar: Bikini,
        nickname: "@bikinyator"
    }, {
        name: "Milka",
        avatar: Milka,
        nickname: "@milkyway"
    }, {
        name: "Murka",
        avatar: Murka,
        nickname: "@murembo"
    }, {
        name: "Cutie",
        avatar: Cutie,
        nickname: "@beast"
    }]
}

export const authorsReducer = (state = initialState, action) => {
    return state;
}