(function() {

// Active item
// Arrow keys om naar de volgende/vorige te gaan
// Click op item laat background image zien en div over product
// Search op name, tags, year

var items = [
	{
		'id': 5,
		'name': '3D film',
		'description': 'In 1922 werd "The Power of Love" als eerste film ooit getoont in 3d. Dit gebeurde op de premiere in het Ambassador Hotel in Los Angelos.',
		'year': 1922,
		'thumb': '',
		'image': '',
		'tags': ['film', '3d']
	},
	{
		'id': 5,
		'name': '3D televisie',
		'description': '',
		'year': 1927,
		'thumb': '',
		'image': '',
		'tags': ['televisie', '3d']
	},
	{
		'id': 5,
		'name': 'Ebooks',
		'description': 'In 1949 patenteerde de spanjaard Ángela Ruiz Robles het eerste electronische boek.',
		'year': 1949,
		'thumb': '',
		'image': '',
		'tags': ['ebook', 'reader', 'e-reader', 'e-book']
	},
		{
		'id': 4,
		'name': 'Laserdisc',
		'description': '',
		'year': 1972,
		'thumb': '',
		'image': '',
		'tags': ['laserdisc', 'cd']
	},
	{
		'id': 3,
		'name': 'Smartwatch',
		'description': '',
		'year': 1972,
		'thumb': '',
		'image': '',
		'tags': ['apple', 'watch', 'smartwatch']
	},
	// {
	// 	'id': 5,
	// 	'name': 'PDA',
	// 	'description': '',
	// 	'year': 2001,
	// 	'thumb': '',
	// 	'image': '',
	// 	'tags': ['pda']
	// },
	{
		'id': 5,
		'name': 'Online Banking',
		'description': '',
		'year': 1981,
		'thumb': '',
		'image': '',
		'tags': ['online', 'bank']
	},
	{
		'id': 5,
		'name': 'Draagbare Muziekspeler',
		'description': '',
		'year': 1981,
		'thumb': '',
		'image': '',
		'tags': ['draagbare', 'muziek', 'portable', 'mp3', 'speler', 'music', 'walkman']
	},
	{
		'id': 5,
		'name': '3D printer',
		'description': '',
		'year': 1984,
		'thumb': '',
		'image': '',
		'tags': ['3d', 'printer']
	},
	{
		'id': 5,
		'name': 'WAP',
		'description': '',
		'year': 1989,
		'thumb': '',
		'image': '',
		'tags': ['wap', 'wireless', 'application', 'protocol']
	},
	{
		'id': 5,
		'name': 'Virtual Reality',
		'description': 'In 1991 werd de Sega VR aangekondigd door Sega. Andere zeer primitieve modellen van virtual reality brillen kwamen nog voor deze, maar van hoe virtual reality brillen in zijn houdige vorm zijn, was de Sega VR de eerste.',
		'year': 1991,
		'thumb': '',
		'image': '',
		'tags': ['virtual', 'reality', 'vr', 'ocolus', 'rift']
	},
	{
		'id': 5,
		'name': 'Atari Jaguar',
		'description': 'De Jaguar van Atari kwam in 1993 uit en was in die tijd (een van) de beste spelcomputers qua prijs/kwaliteit verhouding.',
		'year': 1993,
		'thumb': '',
		'image': '',
		'tags': ['jaguar', 'atari', 'game', 'gaming', 'console']
	},
	{
		'id': 5,
		'name': 'Netscape',
		'description': 'Netscape is opgericht in 1994 onder de naam "Mosaic Communications Corporation" en kwam met één van de eerste webbrowsers.',
		'year': 1994,
		'thumb': '',
		'image': '',
		'tags': ['netscape', 'browser']
	},
	{
		'id': 1,
		'name': 'Smartphone',
		'description': 'De Simon Personal Communicator is volgens velen de eerste smartphone. IBM bracht hem uit in 1992.',
		'year': 1994,
		'thumb': '',
		'image': 'img/smartphone.jpg',
		'tags': ['smartphone', 'simon']
	},
	{
		'id': 5,
		'name': 'Sega',
		'description': 'De Sega Dreamcast kwam uit in Japan in 1998. Het bracht een nieuwe techniek met zich mee waardoor spellen als Quake beter draaiden op de Dreamcast dan op de concurrenten.',
		'year': 1998,
		'thumb': '',
		'image': '',
		'tags': ['sega', 'dreamcast', 'game', 'gaming', 'console']
	},
	{
		'id': 2,
		'name': 'Tablet',
		'description': 'In 1991 bracht AT&T hun eerste EO Personal Communicator uit, wat beschouwd word als de eerste commerciële tablet.',
		'year': 2002,
		'thumb': '',
		'image': 'img/tablet.jpg',
		'tags': ['microsoft', 'tablet', 'bill', 'gates']
	},
	{
		'id': 5,
		'name': 'Spraakherkenning',
		'description': 'De eerste vorm van spraakherkenning werd pas gerealiseerd in 2004. in Zweden werd de JAS-39 straaljager uitgerust met spraakherkenning om elementen  er van te kunnen besturen.',
		'year': 2004,
		'thumb': '',
		'image': '',
		'tags': ['spraak', 'herkenning', 'spraakherkenning']
	},
];


var low = 1920,
	high = 2014,
	width = $('#timeline').width();

// Cache elements
var $timeline = $('#timeline'),
	$container = $('#container');

// Initialize the timeline
setItems(items);


/*
 * Place the items on the timeline
 *
 * Items hebben fixed width
 */
function setItems(items) {
	// denominator: high - low = 12
	// numerator: new - low = 5

	// percent: 5 / 12 * 100 = 41.6%
	// pixels: width * 5 / 12

	for(var i=0; i<items.length; i++) {
		var denominator = high - low;
		var numerator = items[i].year - low;
		var pixels = (numerator / denominator) * width;
		var top;


		console.log(i % 1 === 0);
		console.log(i);

		if(i % 5 === 0) { top = 160; } else
		if(i % 4 === 0) { top = 120; } else
		if(i % 3 === 0) { top = 80; } else
		if(i % 2 === 0) { top = 40; } else
		if(i % 1 === 0) { top = 0; } 
		// if(i == 0) { top = 0; }

		console.log(top);

		$('<span>', {
		    id: i,
		    class: 'item',
		    text: items[i].name,
		    // text: i,
			css: {'position': 'absolute',
			'left': pixels + 'px',
			'top': top + 'px'}
		}).appendTo('#timeline');



		// Create a line for the item
		$('<div>', {
			id: 'line-' + i,
			class: 'timeline-line',
			css: {
				'left': pixels + 'px'
			}
		}).appendTo('#timeline');



		$('#' + i).data('year', items[i].year);

		$('#min-year-tooltip').html('1922');
		$('#max-year-tooltip').html('2014');
	}
}

/*
 * Show the information for the clicked items
 */
function setItem(o) {
	$('#item .name').html(o.name);
	$('#item .year').html(o.year);
	$('#item .description').html(o.description);

	// $container.css('background-image', 'url(' + o.image + ')');
}

/*
 * Search through the tags or year for an item with the provided keyword
 */
function search(keyword) {
	var matches = [],
		tag;

	// Loop through items
	for(var i=0; i<items.length; i++) {
		
		// Did the user search on the year?
		if(keyword == items[i].year) {
			matches.push(items[i]);

			continue;
		}

		// Loop through tags
		for(var j=0; j<items[i].tags.length; j++) {
			tag = items[i].tags[j];

			// Regex if tag contains part of the searched keyword
			var r = new RegExp(keyword);	// /keyword/g
			if(r.test(tag)) {
				matches.push(items[i]);

				// Break from the item
				break;
			}
		}
	}
	
	// If there are results, show the first one
	if(matches.length != 0) {
		setItem(matches[0]);
	}

	console.log(matches);
}



/* START EVENTS ----------------------------------------------------------------------- */
var hovering = false;

/*
 * When the user moves the cursor over the timeline
 */
$(document).on('mousemove', '#timeline', function(e) {
	var pos = e.pageX;
	var posPercent = pos / width;
	var yearDiff = high - low;

	// Is the user hovering over an item, if so don't show the year from the timeline
	if(hovering === false) {
		var year = Math.round((posPercent * yearDiff) + low);

		$('#year-tooltip').html(year);
	}

	var tooltipWidth = $('#year-tooltip').width();

	$('#year-tooltip').css('left', pos - 15 - (tooltipWidth / 2) + 'px').show();
	$('#timeline-cursor').css('left', pos + 'px').show();
});


/*
 * When the user leaves the timeline
 */
$(document).on('mouseleave', '#timeline', function(e) {
	$('#year-tooltip').fadeOut(600);
	$('#timeline-cursor').fadeOut(600);
});

/*
 * When the user clicks on an item on the timeline
 */
$(document).on('click', '.item', function() {
	var id = $(this).attr('id');

	setItem(items[id]);
});

/*
 * When the user hovers over an item
 */
$(document).on('mouseover', '.item', function(e) {
	hovering = true;

	// Show the item's year in the year tooltip
	$('#year-tooltip').html($(this).data('year'));
});

/*
 * When the user leaves the item
 */
$(document).on('mouseleave', '.item', function(e) {
	hovering = false;
});

/*
 * When the user starts typing in the search box
 */
var timer;
$(document).on('keyup', '#search', function(e) {
	var keyword = $(this).val();

	// Enter was pressed
	if(e.which == 13) {
		clearTimeout(timer);

		search(keyword);
	}

	if(keyword.trim() != '') {
		clearTimeout(timer);
	
	    timer = setTimeout(function() {
			search(keyword);
	    }, 1000);
	}
});

$(document).on('keyup', '#focus', function(e) {
	this.select();
});

$(document).on('mouseover', '.item', function(e) {
	var id = $(this).attr('id');

	$('.item').css({
		'z-index': 100,
		'box-shadow': '1px 1px 2px #000000'
	});
	$(this).css({
		'z-index': 1000,
		'box-shadow': '0px 0px 6px #2C97D1'
	});

	$('#line-' + id).css({
		'box-shadow': '0px 0px 6px #2C97D1'
	});
});

$(document).on('mouseout', '.item', function(e) {
	var id = $(this).attr('id');

	$('.item').css({
		'z-index': 100,
		'box-shadow': '1px 1px 2px #000000'
	});

	$('#line-' + id).css({
		'box-shadow': 'none'
	});
});

})();