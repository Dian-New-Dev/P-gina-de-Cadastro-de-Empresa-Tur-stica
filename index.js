// for (let i = 1; i <= 100; i++) {
//     if (i > 5) {
//         i = 1;
//     }
//     console.log(i);
// }

const img = document.getElementsByTagName('main')
function delayedLoop(i) {
    setTimeout(function() {
        img[0].style.backgroundImage = 'url("images/img'+i+'.png")';;

        if (i < 5) {
            delayedLoop(i + 1);
        } else {
            delayedLoop(1);
        }
    }, 5000);
}

delayedLoop(1);

