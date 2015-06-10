var entries = [];

exports.list = function() {
	return entries;
};

exports.add = function(entry) {
	entries.push(entry);
}