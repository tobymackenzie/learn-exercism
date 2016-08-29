var Bob = function() {};
Bob.prototype.hey = function(_expression){
	switch(_determineExpressionType(_expression)){
		case 'nothing':
			return 'Fine. Be that way!';
		// break;
		case 'question':
			return 'Sure.';
		// break;
		case 'yell':
			return 'Whoa, chill out!';
		// break;
		default:
			return 'Whatever.';
		// break;
	}
};

var _determineExpressionType = function(_expression){
	if(
		/[A-Za-z]+/.test(_expression)
		&& _expression.toUpperCase() === _expression
	){
		return 'yell';
	}else if(_expression.charAt(_expression.length - 1) === '?'){
		return 'question';
	}else if(!_expression || /^[\s]+$/.test(_expression)){
		return 'nothing';
	}else{
		return 'other';
	}
};

module.exports = Bob;
