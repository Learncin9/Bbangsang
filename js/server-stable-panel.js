const server_stable = document.querySelectorAll(".mc-server-intro div div div")[0];
const update_time = document.querySelectorAll(".mc-server-intro div div div")[1];

server_stable.innerText = "98%";
server_stable.style.width = `${85 * 0.96}%`

const MOBILE_SCREEN = 1300;
if (screen.width > MOBILE_SCREEN) {
    update_time.innerText = "2 Hour";
} else {
    update_time.innerText = "2H";
}

update_time.style.width = `${(85 * 0.0833) + 17}%`;