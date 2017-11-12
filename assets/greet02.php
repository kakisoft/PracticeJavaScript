<?php

//echo htmlspecialchars("hi! " . $_GET['name'], ENT_QUOTES, "utf-8");

$rs = array(
    "message" => htmlspecialchars("hi! " . $_POST['name'], ENT_QUOTES, "utf-8"),
    "length" => strlen($_POST['name'])
);

header('Content-Type: application/json; charset=utf-8');
echo json_encode($rs);