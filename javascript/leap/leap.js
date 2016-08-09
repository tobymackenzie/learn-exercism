var Year = function(_value){
	this.value = _value;
};
Year.prototype.isLeap = function(){
	return this.value % 400 === 0 || (this.value % 4 === 0 && this.value % 100 !== 0);
};
module.exports = Year;
