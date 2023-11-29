// script.js
$(document).ready(function() {
    $(".dropbtn").click(function() {
        $(".dropdown-content").toggle();
    });

    // Close the dropdown if the user clicks outside of it
    $(document).on("click", function(event) {
        if (!$(event.target).closest(".dropdown_login").length) {
            $(".dropdown-content").hide();
        }
    });
});
