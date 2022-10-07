<!doctype html>
<html lang="en">
<title>The Geoffrey Watling Charity</title>
<head>

    <!-- Required meta tags -->
    <meta charset="utf-8">

    <!-- To ensure proper rendering and touch zooming: -->
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <link href='https://fonts.googleapis.com/css?family=Lato:400,700,100,100italic,300,300italic,700italic,900,900italic,400italic' rel='stylesheet' type='text/css'>

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="../css/custom.css">
    <link rel="stylesheet" type="text/css" href="../css/get-fixed.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <script src='../js/global.js'></script>
    <script src="//inc.freefind.com/inc/ffse-overlay.min.js" async></script>

</head>

<body>
<?php

$base_url = 'http://localhost:8000';

include 'form-handling/index.php';

?>



<div class="container-fluid container-center">

    <div class="row">
        <div class="col-sm-12 menu-space" style="text-align:right;">
            <!-- close col -->
        </div>
        <!-- close row -->
    </div>

    <div class="row">

        <div class="col-sm-6">


            <form action="<?php echo $base_url.$_SERVER["PHP_SELF"]; ?>" method="POST">
                <div>User name</div>
                <div>
                    <input type="text" required class="form-control" name="user_name" maxlength="25" value="">
                    <div><span class="help-block"><?php echo $nameError;?></span></div>
                </div>
                <div>Email</div>
                <div>
                    <input type="email" required class="form-control" name="email" maxlength="25" value="">
                    <div><span class="help-block"><?php echo $emailError;?></span></div>
                </div>
                <div>Phone</div>
                <div>
                    <input type="text" required class="form-control" name="phone" maxlength="25" value="">
                    <div><span class="help-block"><?php echo $phoneError;?></span></div>
                </div>

                <div>
                    <input type="submit" class="btn btn-primary" value="next ...">
                </div>
            </form>


            <!-- close column -->
        </div>

        <div class="col-sm-6">
            <!-- close column -->
        </div>




        <!-- close row -->
    </div>

    <!-- close container -->

    <div style="height:100px"></div>
</div><!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"></script>

</body>
</html>
