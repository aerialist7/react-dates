"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WEEKDAYS = exports.VERTICAL_SCROLLABLE = exports.VERTICAL_ORIENTATION = exports.START_DATE = exports.OPEN_UP = exports.OPEN_DOWN = exports.NAV_POSITION_TOP = exports.NAV_POSITION_BOTTOM = exports.MODIFIER_KEY_NAMES = exports.ISO_MONTH_FORMAT = exports.ISO_FORMAT = exports.INFO_POSITION_TOP = exports.INFO_POSITION_BOTTOM = exports.INFO_POSITION_BEFORE = exports.INFO_POSITION_AFTER = exports.ICON_BEFORE_POSITION = exports.ICON_AFTER_POSITION = exports.HORIZONTAL_ORIENTATION = exports.FANG_WIDTH_PX = exports.FANG_HEIGHT_PX = exports.END_DATE = exports.DISPLAY_FORMAT = exports.DEFAULT_VERTICAL_SPACING = exports.DAY_SIZE = exports.BLOCKED_MODIFIER = exports.ANCHOR_RIGHT = exports.ANCHOR_LEFT = void 0;
var DISPLAY_FORMAT = exports.DISPLAY_FORMAT = 'L';
var ISO_FORMAT = exports.ISO_FORMAT = 'YYYY-MM-DD';
var ISO_MONTH_FORMAT = exports.ISO_MONTH_FORMAT = 'YYYY-MM'; // TODO delete this line of dead code on next breaking change

var START_DATE = exports.START_DATE = 'startDate';
var END_DATE = exports.END_DATE = 'endDate';
var HORIZONTAL_ORIENTATION = exports.HORIZONTAL_ORIENTATION = 'horizontal';
var VERTICAL_ORIENTATION = exports.VERTICAL_ORIENTATION = 'vertical';
var VERTICAL_SCROLLABLE = exports.VERTICAL_SCROLLABLE = 'verticalScrollable';
var NAV_POSITION_BOTTOM = exports.NAV_POSITION_BOTTOM = 'navPositionBottom';
var NAV_POSITION_TOP = exports.NAV_POSITION_TOP = 'navPositionTop';
var ICON_BEFORE_POSITION = exports.ICON_BEFORE_POSITION = 'before';
var ICON_AFTER_POSITION = exports.ICON_AFTER_POSITION = 'after';
var INFO_POSITION_TOP = exports.INFO_POSITION_TOP = 'top';
var INFO_POSITION_BOTTOM = exports.INFO_POSITION_BOTTOM = 'bottom';
var INFO_POSITION_BEFORE = exports.INFO_POSITION_BEFORE = 'before';
var INFO_POSITION_AFTER = exports.INFO_POSITION_AFTER = 'after';
var ANCHOR_LEFT = exports.ANCHOR_LEFT = 'left';
var ANCHOR_RIGHT = exports.ANCHOR_RIGHT = 'right';
var OPEN_DOWN = exports.OPEN_DOWN = 'down';
var OPEN_UP = exports.OPEN_UP = 'up';
var DAY_SIZE = exports.DAY_SIZE = 39;
var BLOCKED_MODIFIER = exports.BLOCKED_MODIFIER = 'blocked';
var WEEKDAYS = exports.WEEKDAYS = [0, 1, 2, 3, 4, 5, 6];
var FANG_WIDTH_PX = exports.FANG_WIDTH_PX = 20;
var FANG_HEIGHT_PX = exports.FANG_HEIGHT_PX = 10;
var DEFAULT_VERTICAL_SPACING = exports.DEFAULT_VERTICAL_SPACING = 22;
var MODIFIER_KEY_NAMES = exports.MODIFIER_KEY_NAMES = new Set(['Shift', 'Control', 'Alt', 'Meta']);