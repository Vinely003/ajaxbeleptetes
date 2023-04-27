$(document).ready(function () {
    $('#gomb').click(function () {
        $.get("templates/regisztracio_temp3.php", function (vissza_temp) {
            var tempobj = $().add(vissza_temp);
            tempobj.appendTo($("body"));
        });
    });
});