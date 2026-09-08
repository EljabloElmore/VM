'use strict';
/* global Monogatari, monogatari */

const { $_ready, $_ } = Monogatari;

// 1. Outside the $_ready function:

monogatari.debug.level(5);

// Only show the "Start" button on the main menu (drop Load/Settings/Help).
monogatari.configuration('main-menu', {
	buttons: [
		{ string: 'Start', data: { action: 'start' } }
	]
});

$_ready(() => {
	// 2. Inside the $_ready function:

	monogatari.init('#monogatari').then(() => {
		// 3. Inside the init function:
	});
});
