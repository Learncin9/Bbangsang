export class ElementData {
    constructor(query, ani_class) {
        this.element = document.querySelector(query);
        this.animation_class = ani_class;
    }
}

export const OBSERVE_DATAs = [
    new ElementData(".mc-server-intro", "default-fade-in")
];


export const OBSERVE_ROOT = null;
export const OBSERVE_THRESHOLD = 0.3;

export const RE_OBSERVABLE = false;