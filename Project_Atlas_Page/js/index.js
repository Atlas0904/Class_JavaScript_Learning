function showContent(choice) {
	// 先把大家都藏起來
	var page;
	for(var i=0; i< nav_names.length; i++) {
		page = document.getElementById("page-" + i);
		page.style.display="none";
	}
	page = document.getElementById("page-" + choice);
	page.style.display = "block";
}
function changeNavColor(elt, action) {
	if (action == "over") {
		elt.style.color = "#2F4F4F";
	} else if (action == "out") {
		elt.style.color = "white";
	} else {
		elt.style.color = "white";
	}
}