const bbangsang_txt = document.querySelector(".txt-bbangsang");

const txt_list = [
    "B",
    "Bb",
    "Bba",
    "Bban",
    "Bbang",
    "Bbangs",
    "Bbangsa",
    "Bbangsan",
    "Bbangsang",
    "<custom-title/>"
];

let add_index = 0;

bbangsang_txt.classList.add("title-txt");

let rendering = setInterval(() => {
    if (add_index === txt_list.length) {
        clearInterval(rendering);
        return;
    }

    bbangsang_txt.innerHTML = txt_list[add_index];

    add_index++;
}, Math.random() * 100);