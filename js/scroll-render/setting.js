class ElementData {
    constructor(query, ani_class, callback) {
        this.element = document.querySelector(query);
        this.animation_class = ani_class;
        this.callback = callback;
    }
}

export const OBSERVE_DATAs = [
    new ElementData(".mc-server-intro", "default-fade-in", (elem) => {
        setTimeout(() => {
            const stable_panel = elem.querySelector("div div");
            stable_panel.classList.add("server-stable-chart");
    
            setTimeout(() => {
                stable_panel.querySelectorAll("h3").forEach(elem => {
                    elem.style.display = 'block';
                    elem.classList.add("default-fade-in");
                });
                
                stable_panel.querySelectorAll("div").forEach(elem => {
                    elem.style.display = 'block';
                    elem.classList.add("default-fade-in");
                });
            }, 200);
        }, 300)
    }),
    new ElementData(".discord-server-intro", "default-fade-in", null)
];


export const OBSERVE_ROOT = null;
export const OBSERVE_THRESHOLD = 0.3;

export const RE_OBSERVABLE = false;

export const STARTING_DELAY = 500;