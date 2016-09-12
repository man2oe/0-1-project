var input = $( ".checkbox input:radio" )
	.parent()
		.css({
				background: "#3f4049",
				border: "2px #fff solid",
				"border-radius": "50%",
				width: "19px",
				height: "20px"
		   });

$(input).click(function() {
	$(this).css({border: orange})
});