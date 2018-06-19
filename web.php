<!DOCTYPE html>
<html lang="en">
<head>
  <title>Phone Answer Bot</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<body>

<div class="container-fluid">
  <h1>Phone Answer Bot</h1>
  <p>Calls listed below.</p> 
    <table class="table table-hover">
    <thead>
      <tr>
        <th>Event Type</th>
        <th>Number</th>
        <th>Time Recived</th>
        <th>Content</th>
      </tr>
    </thead>
    <tbody>
        <?php
$eventlist = explode(";", file_get_contents("eventlist.csv"));
foreach ($eventlist as $eventarr) {
    $event = explode(",",$eventarr);
    if ($event[0] == "") {} else {
echo '
   <tr>
   <td>'. $event[0] .'</td>
        <td>'. $event[1] .'</td>
        <td>'. date("Y-m-d h:i:sa", $event[2]) .'</td>
        <td>'. $event[3] .'</td>
      </tr>
';
        }
}


        ?>

    </tbody>
  </table>
</div>

</body>
</html>
