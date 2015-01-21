'use strict';

$(document).ready(function() {
  $("#contact-form-submit").click(function (e) {
    e.preventDefault(); // prevent page reload
    $.ajax({
      type: "POST",
      url: '/contact',
      data: $("#contact-form").serialize(),
      success: function (response) {
        $("#submitResponse").html(response);
      }
    });
  });
});
