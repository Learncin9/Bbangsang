import {OBSERVE_DATAs, STARTING_DELAY, OBSERVE_ROOT, OBSERVE_THRESHOLD, RE_OBSERVABLE} from './setting.js';

const options = {
    root: OBSERVE_ROOT,
    rootMargin: '0px',
    threshold: OBSERVE_THRESHOLD,
}

function get_index_by_element(target_element) {
    for (let i=0; i<OBSERVE_DATAs.length; i++) {//find animation_class (will be added)
        if (OBSERVE_DATAs[i].element === target_element) {
            return i;
        }
    }
}

const observe_callback = (entries, observer) => {
    if (entries[0].isIntersecting == false) return;//check if the element was observed
    console.log("observed; " + entries[0].isIntersecting.toString());
    
    //get animation class
    let element_index = get_index_by_element(entries[0].target);

    let adding_animation_class = OBSERVE_DATAs[element_index].animation_class;

    //apply animation
    entries[0].target.classList.add(adding_animation_class);
    console.log(entries[0].target);

    //call callback
    OBSERVE_DATAs[element_index].callback(entries[0].target);

    if (!RE_OBSERVABLE) observer.unobserve(entries[0].target);
}

const intersection_observer = new IntersectionObserver(observe_callback, options);

OBSERVE_DATAs.forEach(data => {
    data.element.style.opacity = '0';//before observed it is transperant
});

setTimeout(() => {
    OBSERVE_DATAs.forEach(data => {
        intersection_observer.observe(data.element);
    });
}, STARTING_DELAY);
