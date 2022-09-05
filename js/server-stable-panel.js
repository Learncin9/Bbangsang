const server_stable = document.querySelectorAll(".mc-server-intro div div div")[0];
const update_time = document.querySelectorAll(".mc-server-intro div div div")[1];

server_stable.innerText = "98%";
server_stable.style.width = `${85 * 0.96}%`

update_time.innerText = "2 Hour";
update_time.style.width = `${(85 * 0.0833) + 10}%`