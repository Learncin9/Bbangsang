const DEVITATION = 0;

const MOBILE_SCREEN_WIDTH = 700;
const IS_MOBILE_SCREEN = (screen.width <= MOBILE_SCREEN_WIDTH);

const ELEMENT_QUERY = 0;
const REMOVAL = 1;
const ADDITION = 2;
const ONLOAD_CALLBACK = 3;

const NON_REMOVAL = -1;

class ElementData {
    constructor(query, removal, addition, onload_callback) {
        this.element = document.querySelector(query);
        this.removal = removal;
        this.addition = addition;
        this.onload_callback = onload_callback;

        this.is_loaded = false;
    }
}
//=========================================================


const targets = [
    new ElementData(".mc-server-intro", "left-out", "default-fade-in", 
    () => {
        setTimeout(() => {
            const stability_panel = document.querySelector(".mc-server-intro div div");
            stability_panel.classList.add("server-stable-chart");
        }, 700);

        setTimeout(() => {
            const panel_elements = [
                document.querySelectorAll(".mc-server-intro div div h3")[0],
                document.querySelectorAll(".mc-server-intro div div h3")[1],
                document.querySelectorAll(".mc-server-intro div div div")[0],
                document.querySelectorAll(".mc-server-intro div div div")[1]
            ]

            for (let i=0; i<panel_elements.length; i++) {
                panel_elements[i].style.display = "block";
                panel_elements[i].classList.add("panel-element");
            }
        }, 1700);
    }),
];


//==========================================================
let cur_page_y = 0;
let init_page_y = -1;
let element_y;
let aa;

function scroll_response_render(pageY) {
    aa = pageY;

    if (init_page_y === -1) {
        cur_page_y = 0;
        init_page_y = pageY;
    } else {
        cur_page_y = pageY - init_page_y;
    }

    for (let i=0; i<targets.length; i++) {
        element_y = (window.pageYOffset + targets[i].element.getBoundingClientRect().top - targets[i].element.clientHeight);

        if (cur_page_y - DEVITATION >= element_y) {

            console.log(`page Y : ${cur_page_y} / elementY : ${element_y}`);

            if (targets[i][REMOVAL] !== NON_REMOVAL) {
                targets[i].element.classList.replace(targets[i].removal, targets[i].addition);
            } else {
                targets[i].element.classList.add(targets[i].addition);
            }

            if (targets[i].is_loaded === false) {
                targets[i].onload_callback();

                targets[i].is_loaded = true;
            }
            
        }
    }
}

document.addEventListener('scroll', (e) => {
    scroll_response_render(e.pageY);
});

document.addEventListener('wheel', (e) => {
    scroll_response_render(e.pageY);
});

//to do : convert [scroll event] to [Intersection Observer]