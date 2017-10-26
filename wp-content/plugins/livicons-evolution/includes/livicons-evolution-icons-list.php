<?php
// If this file is called directly, abort.
if ( ! defined( 'ABSPATH' ) ) exit;

//Icons total: 375

//return the full list of icons names in different categories 
function livicons_evolution_icons_list() {
	//added 'NEW_' before name for new icons
	$data = array(
		'miscellaneous' => array(
			'adjust',
			'alarm',
			'anchor',
			'apple',
			'balance',
			'ban',
			'bank',
			'bar-chart',
			'battery-charge',
			'battery-full',
			'battery-low',
			'bell',
			'bomb',
			'box-add',
			'box-delete',
			'box-extract',
			'box',
			'briefcase',
			'british-pound',
			'brush',
			'bug',
			'building',
			'bulb',
			'calculator',
			'calendar',
			'camcoder',
			'camera',
			'car',
			'check-alt',
			'check',
			'circle',
			'clapboard',
			'clock',
			'close',
			'cloud-download',
			'cloud-upload',
			'coins',
			'NEW_collapse',
			'comment',
			'comments',
			'compass',
			'credit-card-in',
			'credit-card-out',
			'dashboard',
			'desktop',
			'diagram',
			'dislike',
			'divide-alt',
			'divide',
			'download',
			'drop',
			'dropper',
			'envelope-pull',
			'envelope-put',
			'euro',
			'NEW_expand',
			'external-link',
			'file-export',
			'file-import',
			'fire',
			'flag',
			'gear',
			'gears',
			'gift',
			'globe',
			'grid',
			'hammer',
			'handcuffs',
			'hand-bottom',
			'hand-left',
			'hand-right',
			'hand-top',
			'heart',
			'help',
			'home',
			'hourglass',
			'idea',
			'image',
			'info-alt',
			'info',
			'lab',
			'label-hot',
			'label-new',
			'leaf',
			'legal',
			'lightning',
			'like',
			'line-chart',
			'link',
			'list',
			'location',
			'location-alt',
			'lock',
			'magic',
			'magnet',
			'map',
			'minus-alt',
			'minus',
			'multiply-alt',
			'multiply',
			'music',
			'NEW_narrow-screen',
			'notebook',
			'octagon',
			'paper-clip',
			'paper-plane',
			'pen',
			'pencil',
			'phone-alt',
			'phone',
			'pie-chart',
			'piggybank',
			'NEW_playlist',
			'plus-alt',
			'plus',
			'print-doc',
			'print-image',
			'priority-high',
			'priority-low',
			'pulse',
			'question-alt',
			'question',
			'remove',
			'servers',
			'responsive',
			'rocket',
			'satellite',
			'save',
			'scissors',
			'screenshot',
			'search',
			'settings',
			'share-alt',
			'share',
			'shield',
			'shoppingcart-in',
			'shoppingcart-out',
			'shoppingcart',
			'sky-dish',
			'smartphone',
			'sort',
			'square',
			'star-half',
			'star',
			'step-four-fifth',
			'step-full',
			'step-one-fifth',
			'step-one-fourth',
			'step-one-third',
			'step-three-fifth',
			'step-three-fourth',
			'step-two-fifth',
			'step-two-fourth',
			'step-two-third',
			'stopwatch',
			'tablet',
			'tag',
			'thumbnails-big',
			'thumbnails-small',
			'timer',
			'touch',
			'trash',
			'trophy',
			'truck',
			'umbrella',
			'unlink',
			'unlock',
			'upload',
			'us-dollar',
			'user',
			'users',
			'warning-alt',
			'warning',
			'wifi',
			'NEW_wide-screen',
			'wine-glass',
			'wrench',
			'zoom-in',
			'zoom-out'
		),
		'arrows' => array(
			'angle-wide-bottom-alt',
			'angle-wide-bottom',
			'angle-wide-left-alt',
			'angle-wide-left',
			'angle-wide-right-alt',
			'angle-wide-right',
			'angle-wide-top-alt',
			'angle-wide-top',
			'arrow-bottom-alt',
			'arrow-bottom',
			'arrow-left-alt',
			'arrow-left',
			'arrow-right-alt',
			'arrow-right',
			'arrow-top-alt',
			'arrow-top',
			'caret-bottom',
			'caret-left',
			'caret-right',
			'caret-top',
			'chevron-bottom-double',
			'chevron-bottom',
			'chevron-left-double',
			'chevron-left',
			'chevron-right-double',
			'chevron-right',
			'chevron-top-double',
			'chevron-top',
			'more',
			'refresh',
			'retweet',
			'rotate-left',
			'rotate-right',
			'scroll',
			'scroll-alt',
			'swap-horizontal',
			'swap-vertical',
			'redo',
			'two-pointers',
			'undo'
		),
		'morphs' => array(
			'morph-add-remove',
			'morph-arrow-left-right',
			'morph-arrow-top-bottom',
			'morph-bar-chart',
			'morph-bell',
			'morph-brightness',
			'morph-bulb',
			'morph-bookmark',
			'morph-celsius-fahrenheit',
			'morph-checkbox-1',
			'morph-checkbox-2',
			'morph-checkbox-3',
			'morph-checkbox-4',
			'morph-chevron-close',
			'morph-chevron-left-right',
			'morph-chevron-top-bottom',
			'morph-clock',
			'morph-cloud',
			'morph-connect',
			'morph-desktop-smartphone',
			'morph-desktop-tablet',
			'morph-doc',
			'morph-envelope',
			'morph-eye-open-close',
			'morph-flag',
			'morph-folder',
			'morph-fullscreen-close',
			'morph-fullscreen',
			'morph-glass',
			'morph-heart',
			'morph-link',
			'morph-lock',
			'morph-login',
			'morph-login2',
			'morph-map',
			'morph-menu-arrow-bottom',
			'morph-menu-arrow-left',
			'morph-menu-arrow-right',
			'morph-menu-arrow-top',
			'morph-menu-collapse',
			'morph-menu-close',
			'morph-menu-close-alt',
			'morph-microphone',
			'morph-minus-plus',
			'morph-orientation-smartphone',
			'morph-orientation-tablet',
			'morph-pin',
			'morph-play-pause',
			'morph-play-stop',
			'morph-powerswitch',
			'morph-preview',
			'morph-quality',
			'morph-radio-1',
			'morph-radio-2',
			'morph-radio-3',
			'morph-radio-4',
			'morph-resize-diagonal',
			'morph-resize-left-right',
			'morph-resize-top-bottom',
			'morph-search-close',
			'morph-shield',
			'morph-slider-left-right',
			'morph-slider-top-bottom',
			'morph-smile',
			'morph-sort',
			'morph-sort-alt',
			'morph-speaker',
			'morph-stack',
			'morph-star',
			'morph-sun-moon',
			'morph-table-lamp',
			'morph-tablet-smartphone',
			'morph-thumbnails-close',
			'morph-toggle-1',
			'morph-toggle-2',
			'morph-umbrella',
			'morph-zoom'
		),
		'background morphs' => array(
			'morph-circle-octagon',
			'morph-circle-octagon2',
			'morph-circle-rounded',
			'morph-circle-smooth',
			'morph-circle-square',
			'morph-circle-square2',
			'morph-circle-sticker',
			'morph-circle-sticker2',
			'morph-circle-triangle',
			'morph-circle-triangle2',
			'morph-octagon-rounded',
			'morph-octagon-smooth',
			'morph-octagon-square',
			'morph-octagon-square2',
			'morph-octagon-sticker',
			'morph-octagon-sticker2',
			'morph-octagon-triangle',
			'morph-octagon-triangle2',
			'morph-octagon2-rounded',
			'morph-octagon2-smooth',
			'morph-octagon2-square',
			'morph-octagon2-square2',
			'morph-octagon2-sticker',
			'morph-octagon2-sticker2',
			'morph-octagon2-triangle',
			'morph-octagon2-triangle2',
			'morph-rounded-smooth',
			'morph-rounded-square',
			'morph-rounded-square2',
			'morph-rounded-sticker',
			'morph-rounded-sticker2',
			'morph-rounded-triangle',
			'morph-rounded-triangle2',
			'morph-smooth-square',
			'morph-smooth-square2',
			'morph-smooth-sticker',
			'morph-smooth-sticker2',
			'morph-smooth-triangle',
			'morph-smooth-triangle2',
			'morph-square-sticker',
			'morph-square-sticker2',
			'morph-square-triangle',
			'morph-square-triangle2',
			'morph-square2-sticker',
			'morph-square2-sticker2',
			'morph-square2-triangle',
			'morph-square2-triangle2',
			'morph-sticker-triangle',
			'morph-sticker-triangle2',
			'morph-sticker2-triangle',
			'morph-sticker2-triangle2'
		),
		'weather' => array(
			'weather-cloud-sun',
			'weather-cloud',
			'weather-rain-thunder',
			'weather-rain',
			'weather-snow',
			'weather-sun',
			'weather-thunderstorm',
			'wind-east',
			'wind-north',
			'wind-south',
			'wind-west',
			'wind'
		),
		'loaders' => array(
			'loader-1',
			'loader-2',
			'loader-3',
			'loader-4',
			'loader-5',
			'loader-6',
			'loader-7',
			'loader-8',
			'loader-9',
			'loader-10',
			'loader-11',
			'loader-12',
			'loader-13',
			'loader-14',
			'loader-15',
			'loader-16'
		)
	);
	return $data;
}
