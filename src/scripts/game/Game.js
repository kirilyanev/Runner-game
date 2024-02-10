import * as Matter from "matter-js";
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
        this.setEvents();
    }

    setEvents() {
        Matter.Events.on(App.physics, 'collisionStart', this.onCollisionStart.bind(this));
    }

    onCollisionStart(event) {
        const colliders = [event.pairs[0].bodyA, event.pairs[0].bodyB];
        const hero = colliders.find(body => body.gameHero);
        const platform = colliders.find(body => body.gamePlatform);

        if (hero && platform) {
            this.hero.stayOnPlatform(platform.gamePlatform);
        }
    }

    createPlatforms() {
        this.platforms = new Platforms();
        this.container.addChild(this.platforms.container);
    }

    createHero() {
        this.hero = new Hero();
        this.container.addChild(this.hero.sprite);
        this.container.interactive = true;
        this.container.on("pointerdown", () => {
            this.hero.startJump();
        })
    }

    createBackground() {
        this.bg = new Background();
        this.container.addChild(this.bg.container);
    }

    update(dt) {
        this.bg.update(dt);
        this.platforms.update(dt);
    }
}
