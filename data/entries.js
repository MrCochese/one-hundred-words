var entries = [{
	words: 'Blah blah blah'
},
{
	words: 'Yackety Smackety'
}];

exports.list = function() {
	return entries;
};

exports.add = function(entry) {
	entries.push(entry);
}