var DnaTranscriber = function(){};
var _dnaToRnaMap = {
	'G': 'C'
	,'C': 'G'
	,'T': 'A'
	,'A': 'U'
};
DnaTranscriber.prototype.toRna = function(_dnaSequence){
	var _rnaSequence = '';
	var _length = _dnaSequence.length;
	for(var _i = 0; _i < _length; ++_i){
		_rnaSequence += _dnaToRnaMap[_dnaSequence[_i]];
	}
	return _rnaSequence;
};
module.exports = DnaTranscriber;
