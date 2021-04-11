$(document).ready(function () {
    $('#functionSelected').hide();
    $('div.radioDirection').hide();
    $('div.valorN').hide();
    $('div.posicionN').hide();
    $('#finalList').hide();

    $('#createList').click(() => {
        $('#functionSelected').show();
        $('#finalList').show();
    });

    $('#functionSelected').change(() => {
        let option = $('#functionSelected').val();
        if (option === "1") {
            $('div.radioDirection').show();
            $('div.valorN').show();
            $('div.posicionN').hide();
        } else if (option === "2") {
            $('div.radioDirection').show();
            $('div.valorN').hide();
            $('div.posicionN').hide();
        } else if (option === "3" || option === "4") {
            $('div.radioDirection').hide();
            $('div.valorN').hide();
            $('div.posicionN').show();
        } else if (option === "5" || option === "6") {
            $('div.radioDirection').hide();
            $('div.valorN').show();
            $('div.posicionN').show();
        } else if (option === "7") {
            $('div.radioDirection').hide();
            $('div.valorN').show();
            $('div.posicionN').hide();
        } else if (option === "8") {
            $('div.radioDirection').hide();
            $('div.valorN').hide();
            $('div.posicionN').hide();
        }
    })
});