let wakaTimeData;

const getWakaTimeData = () => {
    $.ajax({
        type: "GET",
        url: "https://wakatime.com/share/@6890f6ce-e891-46bb-b605-5fc5dcd096d6/582bf0e8-520f-413d-aa6d-1181b5487dec.json",
        dataType: "jsonp",
        success: function (response) {
            wakaTimeData = response.data;
        },
    });
};

getWakaTimeData();
console.log(wakaTimeData);

const contactFormEndpoint =
    "https://powerful-mountain-66898.herokuapp.com/api/contact";

const sendContactForm = () => {
    const inputName = document.getElementById("contact-name");
    const inputEmail = document.getElementById("contact-email");
    const inputMessage = document.getElementById("contact-message");
    if (!inputName || !inputEmail || !inputMessage) {
        return window.alert("Please fill in all of the required fields!");
    }
    const contactFormData = {
        name: inputName.value,
        email: inputEmail.value,
        message: inputMessage.value,
    };
    console.log(contactFormData);
    try {
        fetch(contactFormEndpoint, {
            method: "POST",

            headers: {
                "Content-Type": "application/json",
                mode: "no-cors",
            },
            body: JSON.stringify(contactFormData),
        })
            .then((response) => {
                console.log(response);
                document.getElementsByClassName(
                    "contact__toast-success"
                )[0].style.display = "block";
                setTimeout(() => {
                    document.getElementsByClassName(
                        "contact__toast-success"
                    )[0].style.display = "none";
                    inputName.value = "";
                    inputEmail.value = "";
                    inputMessage.value = "";
                }, 5000);
            })
            .catch((error) => {
                console.log(error);
                document.getElementsByClassName(
                    "contact__toast-failed"
                )[0].style.display = "block";
                setTimeout(() => {
                    document.getElementsByClassName(
                        "contact__toast-failed"
                    )[0].style.display = "none";
                }, 5000);
            });
    } catch (error) {
        console.log(error);
        document.getElementsByClassName(
            "contact__toast-failed"
        )[0].style.display = "block";
        setTimeout(() => {
            document.getElementsByClassName(
                "contact__toast-failed"
            )[0].style.display = "none";
        }, 5000);
    }
};

const contactSubmitButton = document.getElementById("contact-button");
contactSubmitButton.addEventListener("click", (event) => {
    event.preventDefault();
    sendContactForm();
});
