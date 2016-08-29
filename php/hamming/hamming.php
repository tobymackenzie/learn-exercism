<?php
function distance($a, $b){
	$length = strlen($a);
	if($length !== strlen($b)){
		throw new InvalidArgumentException('DNA strands must be of equal length.');
	}
	$count = 0;
	for($i = 0; $i < $length; ++$i){
		if($a[$i] !== $b[$i]){
			++$count;
		}
	}
	return $count;
}
