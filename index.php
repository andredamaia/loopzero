<?php require_once('config.php'); ?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1" />
        <title><?php echo $title; ?></title>

        <link rel="apple-touch-icon" sizes="180x180" href="<?php echo $pageurl; ?>/dist/assets/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="60x60" href="<?php echo $pageurl; ?>/dist/assets/images/favicon.png" />
        <link rel="manifest" href="<?php echo $pageurl; ?>/site.webmanifest" />
        
        <meta name="msapplication-TileColor" content="#111111" />
        <meta name="theme-color" content="#111111" />

        <link rel="stylesheet" href="<?php echo $pageurl; ?>/dist/main.css" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="<?php echo $title; ?>" />
        <meta property="og:description" content="<?php echo $description; ?>" />
        <meta property="og:image" content="<?php echo $pageurl; ?>/dist/images/share.jpg" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="<?php echo $title; ?>" />
        <meta name="twitter:description" content="<?php echo $description; ?>" />
        <meta name="twitter:image" content="<?php echo $pageurl; ?>/dist/images/share.jpg" />
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
        
        <script src="<?php echo $pageurl; ?>/dist/main.bundle.js"></script>
    </body>
</html>