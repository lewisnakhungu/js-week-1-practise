function speedDetector (speed) {
    const speedCap = 70;
    const speedIncrement = 5;
    const maxPoints = 12;

    if (speed < 70){
        console.log("Speed is Ok.");

    } else {
        let points = Math.floor((speed - speedCap) / speedIncrement);
        console.log( `Points :${points}`);

        if (points > maxPoints) {
            console.log("Licence Suspended.");
        };

    };
};

speedDetector(200);