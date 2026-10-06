var isChromium = window.chrome;
var winNav = window.navigator;
var vendorName = winNav.vendor;
var isOpera = typeof window.opr !== "undefined";
var isIEedge = winNav.userAgent.indexOf("Edg") > -1;
var isIOSChrome = winNav.userAgent.match("CriOS");

function checkBrowser() {
    if (
        !isIOSChrome &&
        isChromium !== null &&
        typeof isChromium !== "undefined" &&
        vendorName === "Google Inc." &&
        isOpera === false &&
        isIEedge === false
    ) {
        alert('You are running the game on Chrome. Chrome may lag or glitch out while playing the game. Switch to Microsoft Edge for a better user experience.')
    }
    // Browser detection adapted from: https://stackoverflow.com/questions/4565112/javascript-how-to-find-out-if-the-user-browser-is-chrome
}
