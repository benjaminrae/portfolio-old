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
