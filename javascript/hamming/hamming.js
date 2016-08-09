var Hamming = function(){};
Hamming.prototype.compute = function(_sequence1, _sequence2){
	var _count = 0;
	var _length = _sequence1.length;
	if(_length !== _sequence2.length){
		throw new Error('DNA strands must be of equal length.');
	}
	for(var _i = 0; _i < _length; ++_i){
		if(_sequence1[_i] !== _sequence2[_i]){
			++_count;
		}
	}
	return _count;
};
module.exports = Hamming;
