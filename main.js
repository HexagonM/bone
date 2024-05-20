
function main() {
        var imageUrls = [
                './花_0.png',
                './花_1.png',
                './花_2.png',
                './花_3.png',
                './花_4.png',
        ];
        var imagesToLoad = imageUrls.length;
        var loadedImages = 0;
        function preloadImages() {
                imageUrls.forEach(function (url) {
                        var img = new Image();
                        img.onload = function () {
                                loadedImages++;
                                checkImagesLoaded();
                        };
                        img.onerror = function () {
                                loadedImages++;
                                checkImagesLoaded(); 
                        };
                        img.src = url;
                });
        }
        function checkImagesLoaded() {
                if (loadedImages === imagesToLoad) {
                        initPage();
                }
        }
        function initPage() {
                document.body.style.backgroundImage = 'url("./花_0.png")';
                var overlay = document.getElementById("overlay");
                overlay.style.display = "flex";
                var ptext = document.getElementById("ptext");
                ptext.style.display = "none";
        }
        preloadImages();
        var clicked = false;
        var delayTime = 500;
        window.handleClick = function () {
                if (clicked == false) {
                        function step4() {
                                document.body.style.backgroundColor = "rgb(0, 0, 0)";   
                                document.body.style.backgroundImage = 'url("./花_4.png")';
                                setTimeout(step3, delayTime);
                        }
                        function step3() {
                                document.body.style.backgroundColor = "rgb(0, 0, 0)";  
                                document.body.style.backgroundImage = 'url("./花_3.png")';
                                setTimeout(step4, delayTime);
                        }
                        function step2() {
                                document.body.style.backgroundColor = "rgb(127, 127, 127)";  
                                document.body.style.backgroundImage = 'url("./花_2.png")';
                                setTimeout(step3, delayTime);
                        }
                        function step1() {
                                document.body.style.backgroundColor = "rgb(191, 191, 191)";  
                                document.body.style.backgroundImage = 'url("./花_1.png")';
                                setTimeout(step2, delayTime);
                        }
                        setTimeout(step1, delayTime);
                        clicked = true;
                }
        };
}

main();
