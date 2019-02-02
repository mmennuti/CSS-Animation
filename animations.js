window.onload = function () {
    var wedgesDone = 0;
    var polysActive = false;

    var wedges = document.getElementsByClassName("wedge");
    for(let wedge of wedges) {
        wedge.addEventListener("animationend", loadingAnimEnd);
        wedge.addEventListener("webkitAnimationEnd", loadingAnimEnd);
    };

    function loadingAnimEnd(event) {
        
        event.target.removeEventListener("animationend", loadingAnimEnd);
        event.target.removeEventListener("webkitAnimationEnd", loadingAnimEnd);

        

        wedgesDone++;
        if (wedgesDone >= 7) {
            wedgesDone = 0;
            let wedges = document.getElementsByClassName("wedge")
            for(let wedge of wedges) {
                wedge.classList.add("wedgeshift");
                wedge.style.animationDelay = "0s";

                wedge.addEventListener("animationend", triangleAnimEnd);
                wedge.addEventListener("webkitAnimationEnd", triangleAnimEnd);
            }
            while (wedges.length > 0) {
                wedges[0].classList.remove("wedge");
            }
        }
    }

    function triangleAnimEnd(event) {
        wedgesDone++;
        if (!polysActive && wedgesDone >= 7) {
            polysActive = true;
            startPolys();
            let wedges = document.getElementsByClassName("wedgeshift")
            for(let wedge of wedges) {
                wedge.classList.add("noDisplay");
            }
        }
    }

    function startPolys() {
        let polys = document.getElementsByClassName("poly");
        let index = 0;
        for(let poly of polys) {
            poly.classList.add("poly" + index);
            index++;
            poly.classList.add("polyAnim");
            poly.classList.remove("noDisplay");
        }
    }
    
}