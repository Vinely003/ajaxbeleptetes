$(document).ready(function () {
    $.get("templates/belepes_temp1.php", function (vissza_temp) {
        var tempobj = $().add(vissza_temp);
        tempobj.find("#belepgomb").click(function () {
            $.ajax({
                url: "belepes_ellenor.php",
                type: "POST",
                dataType: "html",
                data: {
                    "email": tempobj.find("#belepemail").val(),
                    "jelszo": tempobj.find("#belepjelszo").val()
                },
                success: function (valasz) {
                    if (valasz.trim() == "Sikeres!") {
                        $('body').html('<script type="text/javascript" src="./script/belepve.js"></script>');
                    }
                }
            });
        });
        tempobj.appendTo($("body"));
    });
});
