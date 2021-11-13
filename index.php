<?php require_once('config.php'); ?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1" />
        <title><?php echo $title; ?></title>

        <link rel="icon" type="image/png" sizes="60x60" href="<?php echo $pageurl; ?>/public/images/favicon.png" />
        
        <meta name="msapplication-TileColor" content="#111111" />
        <meta name="theme-color" content="#111111" />

        <link rel="stylesheet" href="<?php echo $pageurl; ?>/public/index.css" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="<?php echo $title; ?>" />
        <meta property="og:description" content="<?php echo $description; ?>" />
        <meta property="og:image" content="<?php echo $pageurl; ?>/public/images/share.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="<?php echo $title; ?>" />
        <meta name="twitter:description" content="<?php echo $description; ?>" />
        <meta name="twitter:image" content="<?php echo $pageurl; ?>/public/images/share.jpg" />
    </head>

    <body id="<?php echo $page; ?>">
        <div class="webapp">
            <?php include('components/preload.php'); ?>
            
            <?php include('components/header.php'); ?>

            <div asscroll-container>
        
                <div>
                    <?php
                        if($page != NULL){
                            include('pages/'.$page.'.php');
                        }
                    ?>
                
                    <?php include('components/footer.php'); ?>
                </div>

            </div>
        </div>
        
        <script src="<?php echo $pageurl; ?>/public/index.js"></script>
    </body>
</html>