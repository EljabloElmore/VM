/* global monogatari */

// Only show the Start button on the main menu.
monogatari.configuration ('main-menu', {
	buttons: [
		{ string: 'Start', data: { action: 'start' } }
	]
});

// Define the messages used in the game.
monogatari.action ('message').messages ({
	'Help': {
		title: 'Help',
		subtitle: 'Some useful Links',
		body: `
			<p><a href='https://developers.monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p>
			<p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>
		`
	}
});

// Define the notifications used in the game
monogatari.action ('notification').notifications ({
	'Welcome': {
		title: 'Welcome',
		body: 'This is the Monogatari VN Engine',
		icon: ''
	}
});

// Define the Particles JS Configurations used in the game
monogatari.action ('particles').particles ({

});

// Define the canvas objects used in the game
monogatari.action ('canvas').objects ({

});

// Credits of the people involved in the creation of this awesome game
monogatari.configuration ('credits', {

});


// Define the images that will be available on your game's image gallery
monogatari.assets ('gallery', {

});

// Define the music used in the game.
monogatari.assets ('music', {

});

// Define the voice files used in the game.
monogatari.assets ('voices', {

});

// Define the sounds used in the game.
monogatari.assets ('sounds', {

});

// Define the videos used in the game.
monogatari.assets ('videos', {

});

// Define the images used in the game.
monogatari.assets ('images', {

});

// Define the backgrounds for each scene.
monogatari.assets ('scenes', {
	'ss1':  'tutorial/1.png',
	'ss2':  'tutorial/2.png',
	'ss3':  'tutorial/3.png',
	'ss4':  'tutorial/4.png',
	'ss5':  'tutorial/5.png',
	'ss6':  'tutorial/6.png',
	'ss7':  'tutorial/7.png',
	'ss8':  'tutorial/8.png',
	'ss9':  'tutorial/9.png',
	'ss10': 'tutorial/10.png',
	'ss11': 'tutorial/11.png',
	'ss12': 'tutorial/12.png',
	'ss13': 'tutorial/13.png',
	'ss14': 'tutorial/14.png',
	'ss15': 'tutorial/15.png',
	'ss16': 'tutorial/16.png',
	'ss17': 'tutorial/17.png'
});


// Define the Characters
monogatari.characters ({
	'y': {
		name: 'Narrator',
		color: '#5bcaff'
	}
});

monogatari.script ({
	// SS = 1
	'Start': [
		'show scene ss1 with fadeIn',
		'show notification Welcome',

		'y Hallo selamat datang pada tutorial WBS',
		'y Pada tutorial ini, saya akan menjelaskan bagaimana cara menggunakan WBS',
		'y WBS dapat ditemukan pada menu di sebelah kiri.',

		'jump Next'
	],

	'Next': [
		// SS = 2
		'show scene ss2 with fadeIn',
		'y Pada halaman WBS, ada daftar aduan dimana anda bisa melihat aduan yang sudah ada',
		'y Selain itu, ada tombol pencarian yang dapat digunakan untuk mencari aduan tertentu',

		// SS = 3
		'show scene ss3 with fadeIn',
		'y Pada pencarian anda dapat mencari aduan berdasarkan ',

		// SS = 4
		'show scene ss4 with fadeIn',
		'y nomor aduan,',

		// SS = 5
		'show scene ss5 with fadeIn',
		'y kategori aduan',

		// SS = 6
		'show scene ss6 with fadeIn',
		'y dan status aduan.',

		'jump Next2'
	],

	'Next2': [
		// SS = 7 - 8
		'show scene ss7 with fadeIn',
		'y Anda sekarang berada di halaman detail aduan,',
		'y anda dapat melihat detail aduan pada halaman ini',

		'show scene ss8 with fadeIn',
		'y dan pada samping kanan ada tombol Update',

		// SS = 9
		'show scene ss9 with fadeIn',
		'y update digunakan untuk membuat response terhadap aduan, external berarti akan ditampikan di halaman WBS, dan internal berarti tidak akan di tampilkan di halaman WBS',

		// SS = 10
		'show scene ss10 with fadeIn',
		'y dan pada status, opsi untuk memberi bagaimana status aduan terserbut, dan jika status CLOSED, maka aduan tersebut tidak dapat di update lagi',

		// SS = 11
		'show scene ss11 with fadeIn',
		'y dan pada kolom terakhir anda dapat input deskripsi response terhadapat aduan, jika sudah maka pencet tombol save untuk menyimpan updatenya.',

		'jump Next3'
	],

	'Next3': [
		// SS = 12
		'show scene ss12 with fadeIn',
		'y Balik ke halaman WBS, anda dapat memencet tombol Create untuk membuat aduan baru',

		// SS = 13
		'show scene ss13 with fadeIn',
		'y pada halaman Create, anda dapat menginput kategori, location, parties involved, chronology',

		// SS = 14
		'show scene ss14 with fadeIn',
		'y dan pada samping kiri ada tombol submit anonymously, jika di centang maka anda tidak perlu isi kolom name, email dan phone',
		'y tetapi jika evidence tidak memuaskan, maka handler dapat CLOSE aduan tersebut tanpa mengkontak anda',

		// SS = 15
		'show scene ss15 with fadeIn',
		'y dan pada kolom terakhir untuk mengupload evidence, jika sudah maka pencet tombol submit untuk menyimpan aduan baru tersebut',

		// SS = 16
		'show scene ss16 with fadeIn',
		'y dan cancel jika tidak jadi membuat aduan baru, dan akan diarahkan kembali ke halaman WBS.',

		'jump END'
	],

	'END': [
		// SS = 17
		'show scene ss17 with fadeIn',
		'Terima kasih tutorial WBS telah selesai, silahkan tutup halaman browser ini.'
	]
});
