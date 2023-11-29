import { App } from "../system/App";
import { Scene } from "../system/Scene";
import { Background } from "./Background.js";
import { Hero } from "./Hero.js";
import { Platforms } from "./Platforms.js";

export class Game extends Scene {
    create() {
        this.createBackground();
        this.createHero();
        this.createPlatforms();
    }

    createPlatforms() {
        this.platfroms = new Platforms();
        this.container.addChild(this.platfroms.container);
    }

    createHero() {
        this.hero = new Hero();
        this.container.addChild(this.hero.sprite);
    }

    createBackground() {
        this.bg = new Background();
        this.container.addChild(this.bg.container);
    }

    update(dt) {
        this.bg.update(dt);
        this.platfroms.update(dt);
    }
}
