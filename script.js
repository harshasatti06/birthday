/* =====================================================
   BIRTHDAY WEBSITE JAVASCRIPT
===================================================== */


/* =====================================================
   PIN SYSTEM
===================================================== */

const correctPIN = "18102005";

const pinInput =
    document.getElementById("pinInput");

const unlockBtn =
    document.getElementById("unlockBtn");

const lockScreen =
    document.getElementById("lockScreen");

const birthdayPage =
    document.getElementById("birthdayPage");


/* =====================================================
   UNLOCK
===================================================== */

unlockBtn.addEventListener(
    "click",
    unlockWebsite
);


pinInput.addEventListener(
    "keydown",
    function (event) {

        if (event.key === "Enter") {
            unlockWebsite();
        }

    }
);


function unlockWebsite() {

    const enteredPIN =
        pinInput.value.trim();


    if (enteredPIN === correctPIN) {

        lockScreen.style.animation =
            "lockExit .9s ease forwards";


        setTimeout(function () {

            lockScreen.classList.add(
                "hidden"
            );

            birthdayPage.classList.remove(
                "hidden"
            );

            window.scrollTo({
                top: 0,
                behavior: "instant"
            });

        }, 850);

    }


    else {

        alert(
            "Enter the correct date of birth."
        );


        pinInput.style.animation =
            "shake .45s";


        setTimeout(function () {

            pinInput.style.animation = "";

        }, 500);


        pinInput.value = "";

        pinInput.focus();

    }

}


/* =====================================================
   CANDLES
===================================================== */

const candleItems =
    document.querySelectorAll(
        ".candle-item"
    );

const candleMessage =
    document.getElementById(
        "candleMessage"
    );

const letterIntro =
    document.getElementById(
        "letterIntro"
    );


let blownCount = 0;


/*
    Each entire candle area is clickable.
    This works better on mobile than requiring
    the user to tap only the flame.
*/

candleItems.forEach(function (candleItem) {

    candleItem.addEventListener(
        "click",
        function () {

            if (
                candleItem.classList.contains(
                    "blown"
                )
            ) {
                return;
            }


            candleItem.classList.add(
                "blown"
            );


            blownCount++;


            const remaining =
                candleItems.length -
                blownCount;


            if (remaining > 0) {

                candleMessage.textContent =
                    remaining +
                    (
                        remaining === 1
                            ? " candle"
                            : " candles"
                    ) +
                    " remaining... Make your wish ✨";

            }


            if (
                blownCount ===
                candleItems.length
            ) {

                candleMessage.textContent =
                    "All wishes are yours. ✨";


                createConfetti();


                setTimeout(function () {

                    letterIntro.classList.remove(
                        "hidden"
                    );


                    letterIntro.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }, 1500);

            }

        },
        {
            passive: true
        }
    );

});


/* =====================================================
   OPEN LETTER
===================================================== */

const openLetterBtn =
    document.getElementById(
        "openLetterBtn"
    );

const letterSection =
    document.getElementById(
        "letterSection"
    );


openLetterBtn.addEventListener(
    "click",
    function () {

        letterSection.classList.remove(
            "hidden"
        );


        setTimeout(function () {

            letterSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);

    }
);


/* =====================================================
   CONFETTI
===================================================== */

function createConfetti() {

    const container =
        document.getElementById(
            "confettiContainer"
        );


    const colors = [

        "#B76E79",
        "#965560",
        "#F7E7CE",
        "#F4C2C2",
        "#D4AF8C",
        "#FFF9F5"

    ];


    for (
        let i = 0;
        i < 150;
        i++
    ) {

        const piece =
            document.createElement(
                "div"
            );


        piece.className =
            "confetti";


        piece.style.left =
            Math.random() * 100 + "vw";


        piece.style.width =
            Math.random() * 8 + 5 + "px";


        piece.style.height =
            Math.random() * 12 + 5 + "px";


        piece.style.background =
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ];


        piece.style.animationDuration =
            Math.random() * 3 + 3 + "s";


        piece.style.animationDelay =
            Math.random() * 1.5 + "s";


        container.appendChild(
            piece
        );


        setTimeout(function () {

            piece.remove();

        }, 7000);

    }

}


/* =====================================================
   AUTO FOCUS
===================================================== */

window.addEventListener(
    "load",
    function () {

        setTimeout(function () {

            pinInput.focus();

        }, 700);

    }
);


/* =====================================================
   LOCK EXIT ANIMATION
===================================================== */

const extraStyle =
    document.createElement("style");


extraStyle.innerHTML = `

@keyframes lockExit {

    from {
        opacity: 1;
        transform: scale(1);
    }

    to {
        opacity: 0;
        transform: scale(1.05);
    }

}

`;


document.head.appendChild(
    extraStyle
);
