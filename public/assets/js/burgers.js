// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $(".devour-the-burger").on("click", function (event) {
        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");

        var newDevouredState = {
            devoured: true
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function () {
                console.log("changed devoured to", newDevoured);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newDevoured = {
            burger_name: $("#ca").val().trim(),
            devoured: $("[name=devoured]:checked").val().trim()        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newDevoured
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });
});