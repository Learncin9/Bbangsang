import {OBSERVE_DATAs, ElementData, OBSERVE_ROOT, OBSERVE_THRESHOLD, RE_OBSERVABLE} from './setting.js';

const options = {
    root: OBSERVE_ROOT,
    rootMargin: '0px',
    threshold: OBSERVE_THRESHOLD,
}

function get_animation_class_by_element(target_element) {
    for (let i=0; i<OBSERVE_DATAs.length; i++) {//find animation_class (will be added)
        if (OBSERVE_DATAs[i].element === target_element) {
            return OBSERVE_DATAs[i].animation_class;
        }
    }
}

const observe_callback = (entries, observer) => {
    const observed_element = entries[0].target;

    if (observed_element.isIntersecting === false) return;
    
    //get animation class
    let adding_animation_class = get_animation_class_by_element(observed_element);

    //apply animation
    observed_element.style.opacity = '0';
    observed_element.classList.add(adding_animation_class);

    if (!RE_OBSERVABLE) observer.unobserve(observed_element);
}

const intersection_observer = new IntersectionObserver(observe_callback, options);


OBSERVE_DATAs.forEach(data => {
    intersection_observer.observe(data.element);
});