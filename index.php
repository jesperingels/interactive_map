<?php
// voeg het bestand in dat de connectie maakt met de database
include 'conn.php';
// bereid het SQL statement voor
$sql = '
           SELECT Game_id, Game_Duration_Seconds,User_Avatar, User_Gender, g.User_Name, Game_Score
           FROM Games as g, Users as u
           WHERE g.User_Name = u.User_Name
           ORDER BY User_Name
           '
           ;

$query = $db->prepare($sql);




// voer je statement uit
$query->execute();
// sla het resultaat op in de variabele $result
$result = $query->fetchAll(PDO::FETCH_ASSOC);

// vertaal het resultaat naar een json object
$json = json_encode($result);
// toon het json object
echo $json;