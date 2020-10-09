<?php 
    $header = "welcome to php";
    $space = "  ";
    $mystring = "MyString ---- "
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $header;?></title>
</head>
<body>
    <h1><?php echo $mystring; ?></h1>
    <form action="/process.php" method="post">
        <label for="fname">First name:</label><br>
        <input type="text" id="fname" name="fname" value="John"><br>
        <label for="lname">Last name:</label><br>
        <input type="text" id="lname" name="lname" value="Doe"><br><br>
        <input type="submit" value="Submit">
    </form>

    <?php
        $db = new PDE('')
    ?> 

</body>
</html>
