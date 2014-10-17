var items = [
	{
		'id': 1,
		'name': 'First',
		'year': 1990,
		'thumb': '',
		'image': '',
		'tags': ['tag 1', 'tag 2']
	},
	{
		'id': 1,
		'name': 'First',
		'year': 1995,
		'thumb': '',
		'image': '',
		'tags': ['tag 1', 'tag 2']
	},
	{
		'id': 1,
		'name': 'First',
		'year': 2000,
		'thumb': '',
		'image': '',
		'tags': ['tag 1', 'tag 2']
	},
	{
		'id': 2,
		'name': 'Second',
		'year': 2010,
		'thumb': '',
		'image': '',
		'tags': ['tag 1', 'tag 3']
	},
	{
		'id': 3,
		'name': 'Third',
		'year': 2005,
		'thumb': '',
		'image': '',
		'tags': ['tag 1', 'tag 2']
	}
];

// denominator: high - low = 12
// numerator: new - low = 5

// percent: 5 / 12 * 100 = 41.6%
// pixels: width * 5 / 12

var low = 1990;		// n jaar voor eerste hype
var high = 2014;
var width = $('#timeline').width();

var $timeline = $('#timeline');

setItems(items);


// Click op item laat background image zien en div over product
// Search op name, tags, year
// Arrow keys om naar de volgende/vorige te gaan


/*
 * Place the items on the timeline
 *
 * Items hebben fixed width
 */
function setItems(items) {
	for(var i=0; i<items.length; i++) {
		var denominator = high - low;
		var numerator = items[i].year - low;
		var pixels = (numerator / denominator) * width;

		console.log(pixels);

		$('<span>', {
		    id: 'foo',
		    class: 'item',
		    text: items[i].name,
			css: {'position': 'absolute',
			'left': pixels + 'px'},	// 0 veranderen naar juiste position
		}).appendTo('#timeline');
	}
}

// Year tooltip

$(document).on('mousemove', '#timeline', function(e) {
	var pos = e.pageX;
	var posPercent = pos / width;
	var yearDiff = high - low;

	var year = Math.round((posPercent * yearDiff) + low);

	$('#year-tooltip').html(year);

	var tooltipWidth = $('#year-tooltip').width();

	$('#year-tooltip').css('left', pos - 10 - (tooltipWidth / 2) + 'px').show();
});

$(document).on('mouseout', '#timeline', function(e) {
	$('#year-tooltip').hide();
});