<?php
include_once './../language.php';

if (isset($windowWidth)) {
	$introWordsHtml = '';

	if ($windowWidth >= 769) {
		$introWords = $introWords['desktop'];
	}
	if ($windowWidth > 600 && $windowWidth <= 768) {
		$introWords = $introWords['tablet'];
	}
	if ($windowWidth <= 600) {
		$introWords = $introWords['mobile'];
	}

    foreach ($introWords as $index=>$line) {
		$introWordsHtml .= '<div class="line line-'. ($index+1) .'">';
		foreach($line as $letter) {
			$introWordsHtml .= '<span class="letter">'. $letter .'</span> ';
		}
		$introWordsHtml .= '</div>';
    }

    echo $introWordsHtml;
}
?>