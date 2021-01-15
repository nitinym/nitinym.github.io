
window.addEventListener('message', function (eventData) {
    try {
        if (JSON.parse(eventData.data)) {
            let event = JSON.parse(eventData.data);
            console.log(event, "nitin testing")
            if (event.data && event.data.code === "payment_page") {
                var newWindow = window.open(event.data.data, "_self");
                return;
            } else {
                return;
            }
        }
        return;
    } catch (error) {
        console.log(error, "error")
    }
}, false);
