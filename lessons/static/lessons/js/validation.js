$(".input_name input").on("change focusout", function () {
	if($(this).val() != ''){
		$(this).parent().removeClass("error");
		$(this).parent().addClass("success");
	} else{
		$(this).parent().removeClass("success");
		$(this).parent().addClass("error");
	}
});


$(".input_expirience input").on("change focusout", function () {
	if ($(this).val().match(/^-?\d+\.?\d*$/)) {
		$(this).parent().removeClass("error");
		$(this).parent().addClass("success");
	} else {
		$(this).parent().removeClass("success");
		$(this).parent().addClass("error");
	}
});

$(".input_phone input").on("change focusout", function () {
	if ($(this).val().match(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/)) {
		$(this).parent().removeClass("error");
		$(this).parent().addClass("success");
	} else {
		$(this).parent().removeClass("success");
		$(this).parent().addClass("error");
	}
});

$(".input_mail input").on("change focusout", function () {
	if ($(this).val().match(/^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/)) {
		$(this).parent().removeClass("error");
		$(this).parent().addClass("success");
	} else {
		$(this).parent().removeClass("success");
		$(this).parent().addClass("error");
	}
});

$(".input__sity input").on("change focusout", function () {
	if($(this).val() != ''){
		$(this).parent().removeClass("error");
		$(this).parent().addClass("success");
	}else{
		$(this).parent().removeClass("success");
		$(this).parent().addClass("error");
	}
});


$("label.error").change(function() {
    if ($(this).is(':checked')) {
        $('#popupButton').prop('disabled', true);
    } else {
        $('#popupButton').prop('disabled', false);
    }
});