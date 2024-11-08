"use strict";
(function () {

    window.addEventListener("load", init);

    async function init() {
        try {
            let result_m3 = await m3();
            let result_m1 = await m1(result_m3);
            let result_m2 = await m2(result_m1);
            console.log(result_m2);
        } catch (error) {
            console.error(error);
        }
    }

    function m1(value) {
        return value + " lemon squeezy!";
    }

    function m2(value) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(value + " I'm gettin the hang of it now");
            }, 2000);
        });
    }

    function m3() {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve("easy peasy");
            }, 1000);
        });
    }

})();