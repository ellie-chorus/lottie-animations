let player = document.getElementById("firstLottie");

LottieInteractivity.create({
			  mode:"scroll",
			  player: "#firstLottie",
			  actions: [
        {
            visibility:[0, 1.0],
            type: "seek",
            frames: [0, 300],
        },
        ]
			});
