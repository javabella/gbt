(function (){
	'use strict';

	var args = process.argv.slice(-2).map(function(arg) {
		return parseInt(arg);
	});

	if (args[0] < 1 || args[1] > 100) {
		return false;
	}

	var N = args[0];
	var E = args[1];
	var sum = 0;

	for (var n = 1; n <= N; n++) {
		sum += Math.pow(n, E);
	}

	process.stdout.write(sum.toString());
})();