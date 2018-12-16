$('.shift-menu').click(function() {
    $('[data-toggle="wy-nav-shift"]').toggleClass('shift');
});

$(document).one("click", ".language-picker", function(e) {
    $.get(gitbook.state.bookRoot +"index.html", function(data) {
        var list = data.match(/<ul class=\"languages\">([\s\S]+?)<\/ul>/);
        if (list) {
            var langData = [];
            list[1].replace(/<a href=\"([^\/]+)[^>]+>(.+?)<\/a>/g, function(a, b, c) {
                langData.push([b, c]);
            });
            console.log(langData);
        }
    }, "html");
});

function parseLanguages(gitbook, elem, maxColumns, cb) {
	if (location.protocol == "file:") {
		var langData = [];
		langData.push(["en", "English"]);
		languagePickerGrid(gitbook, elem, maxColumns, langData);
		cb(elem);
	}
	else {
		$.get(gitbook.state.bookRoot +"index.html", function(data) {
			var list = data.match(/<ul class=\"languages\">([\s\S]+?)<\/ul>/);
			if (list) {
				var langData = [];
				list[1].replace(/<a href=\"([^\/]+)[^>]+>(.+?)<\/a>/g, function(a, b, c) {
					langData.push([b, c]);
				});
				languagePickerGrid(gitbook, elem, maxColumns, langData);
				cb(elem);
			}
		}, "html");
	}
}