$(document).ready(function () {
    $('#submit').click(function () {
        var nev = $('#name').val();
        var ev = $('#birth').val();
        $('#kiiratas').html("Név: " + nev + "<br>Születés: " + ev);
    });
});