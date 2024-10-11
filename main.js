(function() {
    function setInfiniteCookies() {
        Game.cookies = Infinity;
        Game.cookiesEarned = Infinity;
    }

    setInterval(setInfiniteCookies, 1000);

    console.log("Infinite Cookies mod loaded!");
})();
