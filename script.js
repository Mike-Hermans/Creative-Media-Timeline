(function() {

// Active item
// Arrow keys om naar de volgende/vorige te gaan
// Click op item laat background image zien en div over product
// Search op name, tags, year

var items = [
	{
		'id': 1,
		'name': 'Smartphone',
		'description': 'Simon',
		'year': 1994,
		'thumb': '',
		'image': 'img/smartphone.jpg',
		'tags': ['smartphone', 'simon']
	},
	{
		'id': 2,
		'name': 'Tablet',
		'description': '',
		'year': 2002,
		'thumb': '',
		'image': 'img/tablet.jpg',
		'tags': ['microsoft', 'tablet', 'bill', 'gates']
	},
	{
		'id': 3,
		'name': 'Smartwatch',
		'description': '',
		'year': 2000,
		'thumb': '',
		'image': '',
		'tags': ['apple', 'watch', 'smartwatch']
	},
	{
		'id': 4,
		'name': 'Laserdisc',
		'description': '',
		'year': 2010,
		'thumb': '',
		'image': '',
		'tags': ['laserdisc', 'cd']
	},
	{
		'id': 5,
		'name': '3D film',
		'description': '',
		'year': 2005,
		'thumb': '',
		'image': '',
		'tags': ['film', '3d']
	},
	{
		'id': 5,
		'name': '3D televisie',
		'description': '',
		'year': 2005,
		'thumb': '',
		'image': '',
		'tags': ['televisie', '3d']
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
		'name': 'Virtual Reality',
		'description': '',
		'year': 1980,
		'thumb': '',
		'image': '',
		'tags': ['virtual', 'reality', 'vr', 'ocolus', 'rift']
	},
	{
		'id': 5,
		'name': 'Ebooks',
		'description': '',
		'year': 1990,
		'thumb': '',
		'image': '',
		'tags': ['ebook', 'reader', 'e-reader', 'e-book']
	},
	{
		'id': 5,
		'name': 'Online Banking',
		'description': '',
		'year': 2008,
		'thumb': '',
		'image': '',
		'tags': ['online', 'bank']
	},
	{
		'id': 5,
		'name': 'PDA',
		'description': '',
		'year': 2001,
		'thumb': '',
		'image': '',
		'tags': ['pda']
	},
	{
		'id': 5,
		'name': 'WAP',
		'description': '',
		'year': 2000,
		'thumb': '',
		'image': '',
		'tags': ['wap', 'wireless', 'application', 'protocol']
	},
	{
		'id': 5,
		'name': 'Spraakherkenning',
		'description': '',
		'year': 1997,
		'thumb': '',
		'image': '',
		'tags': ['spraak', 'herkenning', 'spraakherkenning']
	},
	{
		'id': 5,
		'name': 'Sega',
		'description': 'Sega Dreamcast',
		'year': 1993,
		'thumb': '',
		'image': '',
		'tags': ['sega', 'dreamcast', 'game', 'gaming', 'console']
	},
	{
		'id': 5,
		'name': 'Netscape',
		'description': '',
		'year': 1980,
		'thumb': '',
		'image': '',
		'tags': ['netscape']
	},
	{
		'id': 5,
		'name': 'Draagbare Muziekspeler',
		'description': '',
		'year': 2004,
		'thumb': '',
		'image': '',
		'tags': ['draagbare', 'muziek', 'portable', 'mp3', 'speler', 'music']
	},
	{
		'id': 5,
		'name': 'Atari Jaguar',
		'description': '',
		'year': 1995,
		'thumb': '',
		'image': '',
		'tags': ['jaguar', 'atari', 'game', 'gaming', 'console']
	}
];


var low = 1990,
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

		$('<span>', {
		    id: i,
		    class: 'item',
		    text: items[i].name,
			css: {'position': 'absolute',
			'left': pixels + 'px'}
		}).appendTo('#timeline');

		$('#' + i).data('year', items[i].year);
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
$(document).on('keyup', '#search', function() {
	var keyword = $(this).val();

	if(keyword.trim() != '') {
		clearTimeout(timer); 
	
	    timer = setTimeout(function() {
			search(keyword);
	    }, 1000);
	}
});

})();