import { Game } from "./Game";
import { Tools } from "../system/Tools";

export const Config = {
    bgSpeed: 1,
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