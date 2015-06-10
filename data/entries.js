var uuid = require('node-uuid');
var _ = require('lodash');

var entries = [];

exports.list = function() {
	return entries;
};

exports.add = function(entry) {
	entry.id = uuid.v1();
	entries.push(entry);
}

exports.get = function(id) {
	return _.find(entries, function(entry) {
		return entry.id === id;
	})
}