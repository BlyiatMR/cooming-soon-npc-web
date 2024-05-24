class Countdown {

    initCountDown() {

        if (document.getElementById("days")) {
            var eventCountDown = new Date("June 30, 2024 16:37:52").getTime();

            var myfunc = setInterval(function() {

                var now = new Date().getTime();
                var timeleft = eventCountDown - now;

                var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
                var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

                document.getElementById("days").innerHTML = days
                document.getElementById("hours").innerHTML = hours
                document.getElementById("minutes").innerHTML = minutes
                document.getElementById("seconds").innerHTML = seconds

                if (timeleft < 0) {
                    clearInterval(myfunc);
                    document.getElementById("days").innerHTML = ""
                    document.getElementById("hours").innerHTML = ""
                    document.getElementById("minutes").innerHTML = ""
                    document.getElementById("seconds").innerHTML = ""
                    document.getElementById("end").innerHTML = "00:00:00:00";
                }
            }, 1000);
        }
    }

    init() {
        this.initCountDown();
    }
}



new Countdown().init();
