import { Game } from "./Game";
import { Tools } from "../system/Tools";

export const Config = {
    score: {
        x: 10,
        y: 10,
        anchor: 0,
        style: {
           fontFamily: "Verdana",
           fontWeight: "bold",
           fontSize: 44,
           fill: ["#FF7F50"] 
        }
    },
    bgSpeed: 2,
    platforms: {
        moveSpeed: -1.5,
        ranges: {
            rows: {
                min: 2,
                max: 6
            },
            cols: {
                min: 3,
                max: 9
            },
            offset: {
                min: 60,
                max: 200
            }
        }
    },
    hero: {
        position: {
            x: 350,
            y: 250
        },
        jumpSpeed: 15,
        maxJumps: 2,
    },
    diamonds: {
        chance: 0.4,
        offset: {
            min: 100,
            max: 200
        }
    },
    loader: Tools.massiveRequire(require["context"]('./../../sprites/', true, /\.(mp3|png|jpe?g)$/)),
    scenes: {
        "Game": Game
    }
};