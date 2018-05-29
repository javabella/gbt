(function (){
	'use strict';
	var argsAreValid = true;
	var args = process.argv.slice(-2).map(function(arg) {
		var a = parseInt(arg);
		argsAreValid &= (a >= 1 && a <= 100);
		return a;
	});

	if (!argsAreValid) {
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