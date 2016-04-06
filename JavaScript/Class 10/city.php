<?php
	//http://local/city.php?city=taipei
	$city = $_REQUEST["city"];
	if ($city == "taipei") {
		echo "300W";
	} else if ($city == "hsinchu") {
		echo "30W";
	} else {
		echo "No data";
	}
?>
