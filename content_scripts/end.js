var branch_obj;
var branch;
var download_button;
var link_button;
var buttons_block;

function reload() {
    function createElementFromHTML(htmlString, type) {
        var div = document.createElement(type);
        div.innerHTML = htmlString.trim();
        div.firstChild.style.width = '32px';
        div.firstChild.style.height = '32px';
        return div.firstChild;
    }

    buttons_block = document.getElementsByClassName("Box-sc-g0xbh4-0 bWpuBf")[0];
    var user = window.location.pathname.split("/")[1]
    var project = window.location.pathname.split("/")[2]

    var download_svg = `<svg width="512" height="512" viewBox="0 0 512 512" style="color:currentColor" xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="256px" height="256px" viewBox="0 0 24 24" fill="currentColor" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15V3m0 12l-4-4m4 4l4-4M2 17l.621 2.485A2 2 0 0 0 4.561 21h14.878a2 2 0 0 0 1.94-1.515L22 17"/></g></svg></svg>`
    var copy_svg = `<svg width="512" height="512" viewBox="0 0 512 512" style="color:currentColor" xmlns="http://www.w3.org/2000/svg" class="h-full w-full"><rect width="512" height="512" x="0" y="0" rx="30" fill="transparent" stroke="transparent" stroke-width="0" stroke-opacity="100%" paint-order="stroke"></rect><svg width="256px" height="256px" viewBox="0 0 24 24" fill="currentColor" x="128" y="128" role="img" style="display:inline-block;vertical-align:middle" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path d="M8 4v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7.242a2 2 0 0 0-.602-1.43L16.083 2.57A2 2 0 0 0 14.685 2H10a2 2 0 0 0-2 2Z"/><path d="M16 18v2a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2"/></g></g></svg></svg>`;

    branch_obj = document.querySelector("#branch-picker-repos-header-ref-selector > span > span:nth-child(1) > div > div.Box-sc-g0xbh4-0.caeYDk.ref-selector-button-text-container > span");
    branch = branch_obj.textContent.trim();

    download_button = document.createElement("button")
    download_button.classList.add("types__StyledButton-sc-ws60qy-0")
    download_button.classList.add("gHwUxl")
    download_button.id = "download-button"
    download_button.append(createElementFromHTML(download_svg, "svg"));

    link_button = document.createElement("button")
    link_button.classList.add("types__StyledButton-sc-ws60qy-0")
    link_button.classList.add("gHwUxl")
    link_button.id = "link-button"

    link_button.append(createElementFromHTML(copy_svg, "svg"));

    link_button.onclick = function () {
        navigator.clipboard.writeText(`git clone -b ${branch} https://github.com/${user}/${project}.git`);
        alert("copied");
    }
    download_button.onclick = function () {
        window.open(`https://github.com/${user}/${project}/archive/refs/heads/${branch}.zip`, "_blank");
    }
    add_buttons();
}

function add_buttons() {
    if (!document.getElementById("download-button") || !document.getElementById("link-button")) {
        buttons_block.append(
            link_button
        )
        buttons_block.append(
            download_button
        )
    }
}

$(document).ready(function () {
    setInterval(reload, 500);
});
