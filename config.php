<?php

// $pageurl = "https://".$_SERVER["SERVER_NAME"]."loopzero"; // Production
$pageurl = "../loopzero"; // Development

$url = explode('/', $_GET['cod']);
$page = $url["0"];
$subpage = $url["1"];

if($page == NULL){
	$page = "home";
}

if (!is_file("pages/".$page.".php")) { $page = "404"; }

switch($page){
	case "404":
		$title = "Página não encontrada";
		$description = "Infelizmente essa página não foi encontrada.";
		break;

	case "home":
		$title = "Loopzero";
		$description = "Soluções completas para o segmento de fundição de alumínio";
		break;

	default:
		$title = "Loopzero";
		$description = "Soluções completas para o segmento de fundição de alumínio";
		break;
}

?>