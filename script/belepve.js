$(document).ready(function () {
    $.get("templates/belepve_temp2.php", function (vissza_temp) {
        var tempobj = $().add(vissza_temp);
        tempobj.appendTo($("body"));
    });
});