if (!lightdm) {
    var lightdm = {
        can_suspend: true,
        can_hibernate: true,
        can_restart: true,
        can_shutdown: true
    };
}

function show_prompt(text, type) {}

function show_message(text, type) {}

function authentication_complete() {}

function autologin_timer_expired(username) {}

//

function clear_messages() {}

function start_authentication() {}

function handle_input() {}

if (!lightdm.can_suspend) document.getElementById("suspend").hidden = true;
if (!lightdm.can_hibernate) document.getElementById("hibernate").hidden = true;
if (!lightdm.can_restart) document.getElementById("restart").hidden = true;
if (!lightdm.can_shutdown) document.getElementById("shutdown").hidden = true;

function toggleLeaveMenu(state) {
    document.getElementById("leave-menu").hidden = state || !document.getElementById("leave-menu").hidden;
}

function doSuspend() {
    console.log("suspend");
    toggleLeaveMenu(false);
    lightdm.suspend();
}

function doHibernate() {
    console.log("hibernate");
    toggleLeaveMenu(false);
    lightdm.hibernate();
}

function doRestart() {
    console.log("restart");
    toggleLeaveMenu(false);
    lightdm.restart();
}

function doShutdown() {
    console.log("shutdown");
    toggleLeaveMenu(false);
    lightdm.shutdown();
}