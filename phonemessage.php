<?php
function logevent($name, $number, $content) {
file_put_contents("eventlist.csv", $name .",". $number .",". time(). ",". $content.";". file_get_contents("eventlist.csv"));
}
if (isset($_GET['event'])) {
    if ($_GET['event'] == "call") {
logevent("Call logged", $_GET['callerid'], "Called ". $_GET['calledid']);
    }
      if ($_GET['event'] == "press") {
logevent("Menu", $_GET['callerid'], "Caller pressed ". $_GET['press']);
    } 
    die();
}
 $target_path = $_FILES['filename']['name'];
  if(move_uploaded_file($_FILES['filename']['tmp_name'], $target_path)) {
logevent("Message Recording", $_GET['callerid'], "<audio controls><source src='". $target_path ."'></audio>");
  } else {

  }


?>
