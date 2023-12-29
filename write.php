<?php
$myfile = fopen("log.txt", "a+") or die("Unable to open file!");

$data = array(
'nexcrmlog' => isset($_POST['nexcrmlog']) ? $_POST['nexcrmlog'] : false,
'dblog' => isset($_POST['dblog']) ? $_POST['dblog'] : false,
);

fwrite($myfile, "\n". $data['nexcrmlog']. "\n -----------------------");

fwrite($myfile, $data['dblog']. "\n -----------------------");
fclose($myfile);

?>