"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectedStyles = exports.selectedSpanStyles = exports.outsideStyles = exports.lastInRangeStyles = exports.hoveredSpanStyles = exports.highlightedCalendarStyles = exports.defaultStyles = exports["default"] = exports.blockedOutOfRangeStyles = exports.blockedMinNightsStyles = exports.blockedCalendarStyles = exports.PureCustomizableCalendarDay = void 0;
var _enzymeShallowEqual = _interopRequireDefault(require("enzyme-shallow-equal"));
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _reactMomentProptypes = _interopRequireDefault(require("react-moment-proptypes"));
var _airbnbPropTypes = require("airbnb-prop-types");
var _reactWithStyles = require("react-with-styles");
var _moment = _interopRequireDefault(require("moment"));
var _raf = _interopRequireDefault(require("raf"));
var _defaultPhrases = require("../defaultPhrases");
var _getPhrasePropTypes = _interopRequireDefault(require("../utils/getPhrasePropTypes"));
var _getCalendarDaySettings = _interopRequireDefault(require("../utils/getCalendarDaySettings"));
var _constants = require("../constants");
var _DefaultTheme = _interopRequireDefault(require("../theme/DefaultTheme"));
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var color = _DefaultTheme["default"].reactDates.color;
function getStyles(stylesObj, isHovered) {
  if (!stylesObj) return null;
  var hover = stylesObj.hover;
  if (isHovered && hover) {
    return hover;
  }
  return stylesObj;
}
var DayStyleShape = process.env.NODE_ENV !== "production" ? _propTypes["default"].shape({
  background: _propTypes["default"].string,
  border: (0, _airbnbPropTypes.or)([_propTypes["default"].string, _propTypes["default"].number]),
  color: _propTypes["default"].string,
  hover: _propTypes["default"].shape({
    background: _propTypes["default"].string,
    border: (0, _airbnbPropTypes.or)([_propTypes["default"].string, _propTypes["default"].number]),
    color: _propTypes["default"].string
  })
}) : {};
var propTypes = process.env.NODE_ENV !== "production" ? (0, _airbnbPropTypes.forbidExtraProps)(_objectSpread(_objectSpread({}, _reactWithStyles.withStylesPropTypes), {}, {
  day: _reactMomentProptypes["default"].momentObj,
  daySize: _airbnbPropTypes.nonNegativeInteger,
  isOutsideDay: _propTypes["default"].bool,
  modifiers: _propTypes["default"].instanceOf(Set),
  isFocused: _propTypes["default"].bool,
  tabIndex: _propTypes["default"].oneOf([0, -1]),
  onDayClick: _propTypes["default"].func,
  onDayMouseEnter: _propTypes["default"].func,
  onDayMouseLeave: _propTypes["default"].func,
  renderDayContents: _propTypes["default"].func,
  ariaLabelFormat: _propTypes["default"].string,
  // style overrides
  defaultStyles: DayStyleShape,
  outsideStyles: DayStyleShape,
  todayStyles: DayStyleShape,
  firstDayOfWeekStyles: DayStyleShape,
  lastDayOfWeekStyles: DayStyleShape,
  highlightedCalendarStyles: DayStyleShape,
  blockedMinNightsStyles: DayStyleShape,
  blockedCalendarStyles: DayStyleShape,
  blockedOutOfRangeStyles: DayStyleShape,
  hoveredSpanStyles: DayStyleShape,
  selectedSpanStyles: DayStyleShape,
  lastInRangeStyles: DayStyleShape,
  selectedStyles: DayStyleShape,
  selectedStartStyles: DayStyleShape,
  selectedEndStyles: DayStyleShape,
  afterHoveredStartStyles: DayStyleShape,
  hoveredStartFirstPossibleEndStyles: DayStyleShape,
  hoveredStartBlockedMinNightsStyles: DayStyleShape,
  // internationalization
  phrases: _propTypes["default"].shape((0, _getPhrasePropTypes["default"])(_defaultPhrases.CalendarDayPhrases))
})) : {};
var defaultStyles = exports.defaultStyles = {
  border: "1px solid ".concat(color.core.borderLight),
  color: color.text,
  background: color.background,
  hover: {
    background: color.core.borderLight,
    border: "1px solid ".concat(color.core.borderLight),
    color: 'inherit'
  }
};
var outsideStyles = exports.outsideStyles = {
  background: color.outside.backgroundColor,
  border: 0,
  color: color.outside.color
};
var highlightedCalendarStyles = exports.highlightedCalendarStyles = {
  background: color.highlighted.backgroundColor,
  color: color.highlighted.color,
  hover: {
    background: color.highlighted.backgroundColor_hover,
    color: color.highlighted.color_active
  }
};
var blockedMinNightsStyles = exports.blockedMinNightsStyles = {
  background: color.minimumNights.backgroundColor,
  border: "1px solid ".concat(color.minimumNights.borderColor),
  color: color.minimumNights.color,
  hover: {
    background: color.minimumNights.backgroundColor_hover,
    color: color.minimumNights.color_active
  }
};
var blockedCalendarStyles = exports.blockedCalendarStyles = {
  background: color.blocked_calendar.backgroundColor,
  border: "1px solid ".concat(color.blocked_calendar.borderColor),
  color: color.blocked_calendar.color,
  hover: {
    background: color.blocked_calendar.backgroundColor_hover,
    border: "1px solid ".concat(color.blocked_calendar.borderColor),
    color: color.blocked_calendar.color_active
  }
};
var blockedOutOfRangeStyles = exports.blockedOutOfRangeStyles = {
  background: color.blocked_out_of_range.backgroundColor,
  border: "1px solid ".concat(color.blocked_out_of_range.borderColor),
  color: color.blocked_out_of_range.color,
  hover: {
    background: color.blocked_out_of_range.backgroundColor_hover,
    border: "1px solid ".concat(color.blocked_out_of_range.borderColor),
    color: color.blocked_out_of_range.color_active
  }
};
var hoveredSpanStyles = exports.hoveredSpanStyles = {
  background: color.hoveredSpan.backgroundColor,
  border: "1px double ".concat(color.hoveredSpan.borderColor),
  color: color.hoveredSpan.color,
  hover: {
    background: color.hoveredSpan.backgroundColor_hover,
    border: "1px double ".concat(color.hoveredSpan.borderColor),
    color: color.hoveredSpan.color_active
  }
};
var selectedSpanStyles = exports.selectedSpanStyles = {
  background: color.selectedSpan.backgroundColor,
  border: "1px double ".concat(color.selectedSpan.borderColor),
  color: color.selectedSpan.color,
  hover: {
    background: color.selectedSpan.backgroundColor_hover,
    border: "1px double ".concat(color.selectedSpan.borderColor),
    color: color.selectedSpan.color_active
  }
};
var lastInRangeStyles = exports.lastInRangeStyles = {};
var selectedStyles = exports.selectedStyles = {
  background: color.selected.backgroundColor,
  border: "1px double ".concat(color.selected.borderColor),
  color: color.selected.color,
  hover: {
    background: color.selected.backgroundColor_hover,
    border: "1px double ".concat(color.selected.borderColor),
    color: color.selected.color_active
  }
};
var defaultProps = {
  day: (0, _moment["default"])(),
  daySize: _constants.DAY_SIZE,
  isOutsideDay: false,
  modifiers: new Set(),
  isFocused: false,
  tabIndex: -1,
  onDayClick: function onDayClick() {},
  onDayMouseEnter: function onDayMouseEnter() {},
  onDayMouseLeave: function onDayMouseLeave() {},
  renderDayContents: null,
  ariaLabelFormat: 'dddd, LL',
  // style defaults
  defaultStyles: defaultStyles,
  outsideStyles: outsideStyles,
  todayStyles: {},
  highlightedCalendarStyles: highlightedCalendarStyles,
  blockedMinNightsStyles: blockedMinNightsStyles,
  blockedCalendarStyles: blockedCalendarStyles,
  blockedOutOfRangeStyles: blockedOutOfRangeStyles,
  hoveredSpanStyles: hoveredSpanStyles,
  selectedSpanStyles: selectedSpanStyles,
  lastInRangeStyles: lastInRangeStyles,
  selectedStyles: selectedStyles,
  selectedStartStyles: {},
  selectedEndStyles: {},
  afterHoveredStartStyles: {},
  firstDayOfWeekStyles: {},
  lastDayOfWeekStyles: {},
  hoveredStartFirstPossibleEndStyles: {},
  hoveredStartBlockedMinNightsStyles: {},
  // internationalization
  phrases: _defaultPhrases.CalendarDayPhrases
};
var CustomizableCalendarDay = exports.PureCustomizableCalendarDay = /*#__PURE__*/function (_ref2, _ref) {
  function CustomizableCalendarDay() {
    var _this;
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _ref2.call.apply(_ref2, [this].concat(args)) || this;
    _this.state = {
      isHovered: false
    };
    _this.setButtonRef = _this.setButtonRef.bind(_this);
    return _this;
  }
  (0, _inheritsLoose2["default"])(CustomizableCalendarDay, _ref2);
  var _proto = CustomizableCalendarDay.prototype;
  _proto[_ref] = function (nextProps, nextState) {
    return !(0, _enzymeShallowEqual["default"])(this.props, nextProps) || !(0, _enzymeShallowEqual["default"])(this.state, nextState);
  };
  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var _this2 = this;
    var _this$props = this.props,
      isFocused = _this$props.isFocused,
      tabIndex = _this$props.tabIndex;
    if (tabIndex === 0) {
      if (isFocused || tabIndex !== prevProps.tabIndex) {
        (0, _raf["default"])(function () {
          if (_this2.buttonRef) {
            _this2.buttonRef.focus();
          }
        });
      }
    }
  };
  _proto.onDayClick = function onDayClick(day, e) {
    var onDayClick = this.props.onDayClick;
    onDayClick(day, e);
  };
  _proto.onDayMouseEnter = function onDayMouseEnter(day, e) {
    var onDayMouseEnter = this.props.onDayMouseEnter;
    this.setState({
      isHovered: true
    });
    onDayMouseEnter(day, e);
  };
  _proto.onDayMouseLeave = function onDayMouseLeave(day, e) {
    var onDayMouseLeave = this.props.onDayMouseLeave;
    this.setState({
      isHovered: false
    });
    onDayMouseLeave(day, e);
  };
  _proto.onKeyDown = function onKeyDown(day, e) {
    var onDayClick = this.props.onDayClick;
    var key = e.key;
    if (key === 'Enter' || key === ' ') {
      onDayClick(day, e);
    }
  };
  _proto.setButtonRef = function setButtonRef(ref) {
    this.buttonRef = ref;
  };
  _proto.render = function render() {
    var _this3 = this;
    var _this$props2 = this.props,
      day = _this$props2.day,
      ariaLabelFormat = _this$props2.ariaLabelFormat,
      daySize = _this$props2.daySize,
      isOutsideDay = _this$props2.isOutsideDay,
      modifiers = _this$props2.modifiers,
      tabIndex = _this$props2.tabIndex,
      renderDayContents = _this$props2.renderDayContents,
      css = _this$props2.css,
      styles = _this$props2.styles,
      phrases = _this$props2.phrases,
      defaultStylesWithHover = _this$props2.defaultStyles,
      outsideStylesWithHover = _this$props2.outsideStyles,
      todayStylesWithHover = _this$props2.todayStyles,
      firstDayOfWeekStylesWithHover = _this$props2.firstDayOfWeekStyles,
      lastDayOfWeekStylesWithHover = _this$props2.lastDayOfWeekStyles,
      highlightedCalendarStylesWithHover = _this$props2.highlightedCalendarStyles,
      blockedMinNightsStylesWithHover = _this$props2.blockedMinNightsStyles,
      blockedCalendarStylesWithHover = _this$props2.blockedCalendarStyles,
      blockedOutOfRangeStylesWithHover = _this$props2.blockedOutOfRangeStyles,
      hoveredSpanStylesWithHover = _this$props2.hoveredSpanStyles,
      selectedSpanStylesWithHover = _this$props2.selectedSpanStyles,
      lastInRangeStylesWithHover = _this$props2.lastInRangeStyles,
      selectedStylesWithHover = _this$props2.selectedStyles,
      selectedStartStylesWithHover = _this$props2.selectedStartStyles,
      selectedEndStylesWithHover = _this$props2.selectedEndStyles,
      afterHoveredStartStylesWithHover = _this$props2.afterHoveredStartStyles,
      hoveredStartFirstPossibleEndStylesWithHover = _this$props2.hoveredStartFirstPossibleEndStyles,
      hoveredStartBlockedMinNightsStylesWithHover = _this$props2.hoveredStartBlockedMinNightsStyles;
    var isHovered = this.state.isHovered;
    if (!day) return /*#__PURE__*/_react["default"].createElement("td", null);
    var _getCalendarDaySettin = (0, _getCalendarDaySettings["default"])(day, ariaLabelFormat, daySize, modifiers, phrases),
      daySizeStyles = _getCalendarDaySettin.daySizeStyles,
      useDefaultCursor = _getCalendarDaySettin.useDefaultCursor,
      selected = _getCalendarDaySettin.selected,
      hoveredSpan = _getCalendarDaySettin.hoveredSpan,
      isOutsideRange = _getCalendarDaySettin.isOutsideRange,
      ariaLabel = _getCalendarDaySettin.ariaLabel;
    return /*#__PURE__*/_react["default"].createElement("td", (0, _extends2["default"])({}, css(styles.CalendarDay, useDefaultCursor && styles.CalendarDay__defaultCursor, daySizeStyles, getStyles(defaultStylesWithHover, isHovered), isOutsideDay && getStyles(outsideStylesWithHover, isHovered), modifiers.has('today') && getStyles(todayStylesWithHover, isHovered), modifiers.has('first-day-of-week') && getStyles(firstDayOfWeekStylesWithHover, isHovered), modifiers.has('last-day-of-week') && getStyles(lastDayOfWeekStylesWithHover, isHovered), modifiers.has('hovered-start-first-possible-end') && getStyles(hoveredStartFirstPossibleEndStylesWithHover, isHovered), modifiers.has('hovered-start-blocked-minimum-nights') && getStyles(hoveredStartBlockedMinNightsStylesWithHover, isHovered), modifiers.has('highlighted-calendar') && getStyles(highlightedCalendarStylesWithHover, isHovered), modifiers.has('blocked-minimum-nights') && getStyles(blockedMinNightsStylesWithHover, isHovered), modifiers.has('blocked-calendar') && getStyles(blockedCalendarStylesWithHover, isHovered), hoveredSpan && getStyles(hoveredSpanStylesWithHover, isHovered), modifiers.has('after-hovered-start') && getStyles(afterHoveredStartStylesWithHover, isHovered), modifiers.has('selected-span') && getStyles(selectedSpanStylesWithHover, isHovered), modifiers.has('last-in-range') && getStyles(lastInRangeStylesWithHover, isHovered), selected && getStyles(selectedStylesWithHover, isHovered), modifiers.has('selected-start') && getStyles(selectedStartStylesWithHover, isHovered), modifiers.has('selected-end') && getStyles(selectedEndStylesWithHover, isHovered), isOutsideRange && getStyles(blockedOutOfRangeStylesWithHover, isHovered)), {
      role: "button" // eslint-disable-line jsx-a11y/no-noninteractive-element-to-interactive-role
      ,
      ref: this.setButtonRef,
      "aria-disabled": modifiers.has('blocked'),
      "aria-label": ariaLabel,
      onMouseEnter: function onMouseEnter(e) {
        _this3.onDayMouseEnter(day, e);
      },
      onMouseLeave: function onMouseLeave(e) {
        _this3.onDayMouseLeave(day, e);
      },
      onMouseUp: function onMouseUp(e) {
        e.currentTarget.blur();
      },
      onClick: function onClick(e) {
        _this3.onDayClick(day, e);
      },
      onKeyDown: function onKeyDown(e) {
        _this3.onKeyDown(day, e);
      },
      tabIndex: tabIndex
    }), renderDayContents ? renderDayContents(day, modifiers) : day.format('D'));
  };
  return CustomizableCalendarDay;
}(_react["default"].PureComponent || _react["default"].Component, !_react["default"].PureComponent && "shouldComponentUpdate");
CustomizableCalendarDay.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
CustomizableCalendarDay.defaultProps = defaultProps;
var _default = exports["default"] = (0, _reactWithStyles.withStyles)(function (_ref3) {
  var font = _ref3.reactDates.font;
  return {
    CalendarDay: {
      boxSizing: 'border-box',
      cursor: 'pointer',
      fontSize: font.size,
      textAlign: 'center',
      ':active': {
        outline: 0
      }
    },
    CalendarDay__defaultCursor: {
      cursor: 'default'
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(CustomizableCalendarDay);