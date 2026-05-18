"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _airbnbPropTypes = require("airbnb-prop-types");
var _reactWithStyles = require("react-with-styles");
var _defaultPhrases = require("../defaultPhrases");
var _getPhrasePropTypes = _interopRequireDefault(require("../utils/getPhrasePropTypes"));
var _noflip = _interopRequireDefault(require("../utils/noflip"));
var _OpenDirectionShape = _interopRequireDefault(require("../shapes/OpenDirectionShape"));
var _DateInput = _interopRequireDefault(require("./DateInput"));
var _IconPositionShape = _interopRequireDefault(require("../shapes/IconPositionShape"));
var _DisabledShape = _interopRequireDefault(require("../shapes/DisabledShape"));
var _RightArrow = _interopRequireDefault(require("./RightArrow"));
var _LeftArrow = _interopRequireDefault(require("./LeftArrow"));
var _CloseButton = _interopRequireDefault(require("./CloseButton"));
var _CalendarIcon = _interopRequireDefault(require("./CalendarIcon"));
var _constants = require("../constants");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var propTypes = process.env.NODE_ENV !== "production" ? (0, _airbnbPropTypes.forbidExtraProps)(_objectSpread(_objectSpread({}, _reactWithStyles.withStylesPropTypes), {}, {
  children: _propTypes["default"].node,
  startDateId: _propTypes["default"].string,
  startDatePlaceholderText: _propTypes["default"].string,
  startDateAriaLabel: _propTypes["default"].string,
  startDateTitleText: _propTypes["default"].string,
  screenReaderMessage: _propTypes["default"].string,
  endDateId: _propTypes["default"].string,
  endDatePlaceholderText: _propTypes["default"].string,
  endDateAriaLabel: _propTypes["default"].string,
  endDateTitleText: _propTypes["default"].string,
  onStartDateFocus: _propTypes["default"].func,
  onEndDateFocus: _propTypes["default"].func,
  onStartDateChange: _propTypes["default"].func,
  onEndDateChange: _propTypes["default"].func,
  onStartDateShiftTab: _propTypes["default"].func,
  onEndDateTab: _propTypes["default"].func,
  onClearDates: _propTypes["default"].func,
  onKeyDownArrowDown: _propTypes["default"].func,
  onKeyDownQuestionMark: _propTypes["default"].func,
  startDate: _propTypes["default"].string,
  endDate: _propTypes["default"].string,
  isStartDateFocused: _propTypes["default"].bool,
  isEndDateFocused: _propTypes["default"].bool,
  showClearDates: _propTypes["default"].bool,
  disabled: _DisabledShape["default"],
  required: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  openDirection: _OpenDirectionShape["default"],
  showCaret: _propTypes["default"].bool,
  showDefaultInputIcon: _propTypes["default"].bool,
  inputIconPosition: _IconPositionShape["default"],
  customInputIcon: _propTypes["default"].node,
  customArrowIcon: _propTypes["default"].node,
  customCloseIcon: _propTypes["default"].node,
  noBorder: _propTypes["default"].bool,
  block: _propTypes["default"].bool,
  small: _propTypes["default"].bool,
  regular: _propTypes["default"].bool,
  verticalSpacing: _airbnbPropTypes.nonNegativeInteger,
  autoComplete: _propTypes["default"].string,
  // accessibility
  isFocused: _propTypes["default"].bool,
  // describes actual DOM focus

  // i18n
  phrases: _propTypes["default"].shape((0, _getPhrasePropTypes["default"])(_defaultPhrases.DateRangePickerInputPhrases)),
  isRTL: _propTypes["default"].bool
})) : {};
var defaultProps = {
  children: null,
  startDateId: _constants.START_DATE,
  endDateId: _constants.END_DATE,
  startDatePlaceholderText: 'Start Date',
  endDatePlaceholderText: 'End Date',
  startDateAriaLabel: undefined,
  endDateAriaLabel: undefined,
  startDateTitleText: undefined,
  endDateTitleText: undefined,
  screenReaderMessage: '',
  autoComplete: 'off',
  onStartDateFocus: function onStartDateFocus() {},
  onEndDateFocus: function onEndDateFocus() {},
  onStartDateChange: function onStartDateChange() {},
  onEndDateChange: function onEndDateChange() {},
  onStartDateShiftTab: function onStartDateShiftTab() {},
  onEndDateTab: function onEndDateTab() {},
  onClearDates: function onClearDates() {},
  onKeyDownArrowDown: function onKeyDownArrowDown() {},
  onKeyDownQuestionMark: function onKeyDownQuestionMark() {},
  startDate: '',
  endDate: '',
  isStartDateFocused: false,
  isEndDateFocused: false,
  showClearDates: false,
  disabled: false,
  required: false,
  readOnly: false,
  openDirection: _constants.OPEN_DOWN,
  showCaret: false,
  showDefaultInputIcon: false,
  inputIconPosition: _constants.ICON_BEFORE_POSITION,
  customInputIcon: null,
  customArrowIcon: null,
  customCloseIcon: null,
  noBorder: false,
  block: false,
  small: false,
  regular: false,
  verticalSpacing: undefined,
  // accessibility
  isFocused: false,
  // i18n
  phrases: _defaultPhrases.DateRangePickerInputPhrases,
  isRTL: false
};
function DateRangePickerInput(_ref) {
  var _ref$children = _ref.children,
    children = _ref$children === void 0 ? defaultProps.children : _ref$children,
    _ref$startDate = _ref.startDate,
    startDate = _ref$startDate === void 0 ? defaultProps.startDate : _ref$startDate,
    _ref$startDateId = _ref.startDateId,
    startDateId = _ref$startDateId === void 0 ? defaultProps.startDateId : _ref$startDateId,
    _ref$startDatePlaceho = _ref.startDatePlaceholderText,
    startDatePlaceholderText = _ref$startDatePlaceho === void 0 ? defaultProps.startDatePlaceholderText : _ref$startDatePlaceho,
    _ref$screenReaderMess = _ref.screenReaderMessage,
    screenReaderMessage = _ref$screenReaderMess === void 0 ? defaultProps.screenReaderMessage : _ref$screenReaderMess,
    _ref$isStartDateFocus = _ref.isStartDateFocused,
    isStartDateFocused = _ref$isStartDateFocus === void 0 ? defaultProps.isStartDateFocused : _ref$isStartDateFocus,
    _ref$onStartDateChang = _ref.onStartDateChange,
    onStartDateChange = _ref$onStartDateChang === void 0 ? defaultProps.onStartDateChange : _ref$onStartDateChang,
    _ref$onStartDateFocus = _ref.onStartDateFocus,
    onStartDateFocus = _ref$onStartDateFocus === void 0 ? defaultProps.onStartDateFocus : _ref$onStartDateFocus,
    _ref$onStartDateShift = _ref.onStartDateShiftTab,
    onStartDateShiftTab = _ref$onStartDateShift === void 0 ? defaultProps.onStartDateShiftTab : _ref$onStartDateShift,
    _ref$startDateAriaLab = _ref.startDateAriaLabel,
    startDateAriaLabel = _ref$startDateAriaLab === void 0 ? defaultProps.startDateAriaLabel : _ref$startDateAriaLab,
    _ref$startDateTitleTe = _ref.startDateTitleText,
    startDateTitleText = _ref$startDateTitleTe === void 0 ? defaultProps.startDateTitleText : _ref$startDateTitleTe,
    _ref$endDate = _ref.endDate,
    endDate = _ref$endDate === void 0 ? defaultProps.endDate : _ref$endDate,
    _ref$endDateId = _ref.endDateId,
    endDateId = _ref$endDateId === void 0 ? defaultProps.endDateId : _ref$endDateId,
    _ref$endDatePlacehold = _ref.endDatePlaceholderText,
    endDatePlaceholderText = _ref$endDatePlacehold === void 0 ? defaultProps.endDatePlaceholderText : _ref$endDatePlacehold,
    _ref$isEndDateFocused = _ref.isEndDateFocused,
    isEndDateFocused = _ref$isEndDateFocused === void 0 ? defaultProps.isEndDateFocused : _ref$isEndDateFocused,
    _ref$onEndDateChange = _ref.onEndDateChange,
    onEndDateChange = _ref$onEndDateChange === void 0 ? defaultProps.onEndDateChange : _ref$onEndDateChange,
    _ref$onEndDateFocus = _ref.onEndDateFocus,
    onEndDateFocus = _ref$onEndDateFocus === void 0 ? defaultProps.onEndDateFocus : _ref$onEndDateFocus,
    _ref$onEndDateTab = _ref.onEndDateTab,
    onEndDateTab = _ref$onEndDateTab === void 0 ? defaultProps.onEndDateTab : _ref$onEndDateTab,
    _ref$endDateAriaLabel = _ref.endDateAriaLabel,
    endDateAriaLabel = _ref$endDateAriaLabel === void 0 ? defaultProps.endDateAriaLabel : _ref$endDateAriaLabel,
    _ref$endDateTitleText = _ref.endDateTitleText,
    endDateTitleText = _ref$endDateTitleText === void 0 ? defaultProps.endDateTitleText : _ref$endDateTitleText,
    _ref$onKeyDownArrowDo = _ref.onKeyDownArrowDown,
    onKeyDownArrowDown = _ref$onKeyDownArrowDo === void 0 ? defaultProps.onKeyDownArrowDown : _ref$onKeyDownArrowDo,
    _ref$onKeyDownQuestio = _ref.onKeyDownQuestionMark,
    onKeyDownQuestionMark = _ref$onKeyDownQuestio === void 0 ? defaultProps.onKeyDownQuestionMark : _ref$onKeyDownQuestio,
    _ref$onClearDates = _ref.onClearDates,
    onClearDates = _ref$onClearDates === void 0 ? defaultProps.onClearDates : _ref$onClearDates,
    _ref$showClearDates = _ref.showClearDates,
    showClearDates = _ref$showClearDates === void 0 ? defaultProps.showClearDates : _ref$showClearDates,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? defaultProps.disabled : _ref$disabled,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? defaultProps.required : _ref$required,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? defaultProps.readOnly : _ref$readOnly,
    _ref$autoComplete = _ref.autoComplete,
    autoComplete = _ref$autoComplete === void 0 ? defaultProps.autoComplete : _ref$autoComplete,
    _ref$showCaret = _ref.showCaret,
    showCaret = _ref$showCaret === void 0 ? defaultProps.showCaret : _ref$showCaret,
    _ref$openDirection = _ref.openDirection,
    openDirection = _ref$openDirection === void 0 ? defaultProps.openDirection : _ref$openDirection,
    _ref$showDefaultInput = _ref.showDefaultInputIcon,
    showDefaultInputIcon = _ref$showDefaultInput === void 0 ? defaultProps.showDefaultInputIcon : _ref$showDefaultInput,
    _ref$inputIconPositio = _ref.inputIconPosition,
    inputIconPosition = _ref$inputIconPositio === void 0 ? defaultProps.inputIconPosition : _ref$inputIconPositio,
    _ref$customInputIcon = _ref.customInputIcon,
    customInputIcon = _ref$customInputIcon === void 0 ? defaultProps.customInputIcon : _ref$customInputIcon,
    _ref$customArrowIcon = _ref.customArrowIcon,
    customArrowIcon = _ref$customArrowIcon === void 0 ? defaultProps.customArrowIcon : _ref$customArrowIcon,
    _ref$customCloseIcon = _ref.customCloseIcon,
    customCloseIcon = _ref$customCloseIcon === void 0 ? defaultProps.customCloseIcon : _ref$customCloseIcon,
    _ref$isFocused = _ref.isFocused,
    isFocused = _ref$isFocused === void 0 ? defaultProps.isFocused : _ref$isFocused,
    _ref$phrases = _ref.phrases,
    phrases = _ref$phrases === void 0 ? defaultProps.phrases : _ref$phrases,
    _ref$isRTL = _ref.isRTL,
    isRTL = _ref$isRTL === void 0 ? defaultProps.isRTL : _ref$isRTL,
    _ref$noBorder = _ref.noBorder,
    noBorder = _ref$noBorder === void 0 ? defaultProps.noBorder : _ref$noBorder,
    _ref$block = _ref.block,
    block = _ref$block === void 0 ? defaultProps.block : _ref$block,
    _ref$verticalSpacing = _ref.verticalSpacing,
    verticalSpacing = _ref$verticalSpacing === void 0 ? defaultProps.verticalSpacing : _ref$verticalSpacing,
    _ref$small = _ref.small,
    small = _ref$small === void 0 ? defaultProps.small : _ref$small,
    _ref$regular = _ref.regular,
    regular = _ref$regular === void 0 ? defaultProps.regular : _ref$regular,
    css = _ref.css,
    styles = _ref.styles;
  var calendarIcon = customInputIcon || /*#__PURE__*/_react["default"].createElement(_CalendarIcon["default"], css(styles.DateRangePickerInput_calendarIcon_svg));
  var arrowIcon = /*#__PURE__*/_react["default"].createElement(_RightArrow["default"], css(styles.DateRangePickerInput_arrow_svg));
  if (isRTL) arrowIcon = /*#__PURE__*/_react["default"].createElement(_LeftArrow["default"], css(styles.DateRangePickerInput_arrow_svg));
  if (small) arrowIcon = '-';
  if (customArrowIcon) arrowIcon = customArrowIcon;
  var closeIcon = customCloseIcon || /*#__PURE__*/_react["default"].createElement(_CloseButton["default"], css(styles.DateRangePickerInput_clearDates_svg, small && styles.DateRangePickerInput_clearDates_svg__small));
  var screenReaderStartDateText = screenReaderMessage || phrases.keyboardForwardNavigationInstructions;
  var screenReaderEndDateText = screenReaderMessage || phrases.keyboardBackwardNavigationInstructions;
  var inputIcon = (showDefaultInputIcon || customInputIcon !== null) && /*#__PURE__*/_react["default"].createElement("button", (0, _extends2["default"])({}, css(styles.DateRangePickerInput_calendarIcon), {
    type: "button",
    disabled: disabled,
    "aria-label": phrases.focusStartDate,
    onClick: onKeyDownArrowDown
  }), calendarIcon);
  var startDateDisabled = disabled === _constants.START_DATE || disabled === true;
  var endDateDisabled = disabled === _constants.END_DATE || disabled === true;
  return /*#__PURE__*/_react["default"].createElement("div", css(styles.DateRangePickerInput, disabled && styles.DateRangePickerInput__disabled, isRTL && styles.DateRangePickerInput__rtl, !noBorder && styles.DateRangePickerInput__withBorder, block && styles.DateRangePickerInput__block, showClearDates && styles.DateRangePickerInput__showClearDates), inputIconPosition === _constants.ICON_BEFORE_POSITION && inputIcon, /*#__PURE__*/_react["default"].createElement(_DateInput["default"], {
    id: startDateId,
    placeholder: startDatePlaceholderText,
    ariaLabel: startDateAriaLabel,
    autoComplete: autoComplete,
    titleText: startDateTitleText,
    displayValue: startDate,
    screenReaderMessage: screenReaderStartDateText,
    focused: isStartDateFocused,
    isFocused: isFocused,
    disabled: startDateDisabled,
    required: required,
    readOnly: readOnly,
    showCaret: showCaret,
    openDirection: openDirection,
    onChange: onStartDateChange,
    onFocus: onStartDateFocus,
    onKeyDownShiftTab: onStartDateShiftTab,
    onKeyDownArrowDown: onKeyDownArrowDown,
    onKeyDownQuestionMark: onKeyDownQuestionMark,
    verticalSpacing: verticalSpacing,
    small: small,
    regular: regular
  }), !isEndDateFocused && children, /*#__PURE__*/_react["default"].createElement("div", (0, _extends2["default"])({}, css(styles.DateRangePickerInput_arrow), {
    "aria-hidden": "true",
    role: "presentation"
  }), arrowIcon), /*#__PURE__*/_react["default"].createElement(_DateInput["default"], {
    id: endDateId,
    placeholder: endDatePlaceholderText,
    ariaLabel: endDateAriaLabel,
    autoComplete: autoComplete,
    titleText: endDateTitleText,
    displayValue: endDate,
    screenReaderMessage: screenReaderEndDateText,
    focused: isEndDateFocused,
    isFocused: isFocused,
    disabled: endDateDisabled,
    required: required,
    readOnly: readOnly,
    showCaret: showCaret,
    openDirection: openDirection,
    onChange: onEndDateChange,
    onFocus: onEndDateFocus,
    onKeyDownArrowDown: onKeyDownArrowDown,
    onKeyDownQuestionMark: onKeyDownQuestionMark,
    onKeyDownTab: onEndDateTab,
    verticalSpacing: verticalSpacing,
    small: small,
    regular: regular
  }), isEndDateFocused && children, showClearDates && /*#__PURE__*/_react["default"].createElement("button", (0, _extends2["default"])({
    type: "button",
    "aria-label": phrases.clearDates
  }, css(styles.DateRangePickerInput_clearDates, small && styles.DateRangePickerInput_clearDates__small, !customCloseIcon && styles.DateRangePickerInput_clearDates_default, !(startDate || endDate) && styles.DateRangePickerInput_clearDates__hide), {
    onClick: onClearDates,
    disabled: disabled
  }), closeIcon), inputIconPosition === _constants.ICON_AFTER_POSITION && inputIcon);
}
DateRangePickerInput.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
var _default = exports["default"] = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
    border = _ref2$reactDates.border,
    color = _ref2$reactDates.color,
    sizing = _ref2$reactDates.sizing;
  return {
    DateRangePickerInput: {
      backgroundColor: color.background,
      display: 'inline-block'
    },
    DateRangePickerInput__disabled: {
      background: color.disabled
    },
    DateRangePickerInput__withBorder: {
      borderColor: color.border,
      borderWidth: border.pickerInput.borderWidth,
      borderStyle: border.pickerInput.borderStyle,
      borderRadius: border.pickerInput.borderRadius
    },
    DateRangePickerInput__rtl: {
      direction: (0, _noflip["default"])('rtl')
    },
    DateRangePickerInput__block: {
      display: 'block'
    },
    DateRangePickerInput__showClearDates: {
      paddingRight: 30 // TODO: should be noflip wrapped and handled by an isRTL prop
    },
    DateRangePickerInput_arrow: {
      display: 'inline-block',
      verticalAlign: 'middle',
      color: color.text
    },
    DateRangePickerInput_arrow_svg: {
      verticalAlign: 'middle',
      fill: color.text,
      height: sizing.arrowWidth,
      width: sizing.arrowWidth
    },
    DateRangePickerInput_clearDates: {
      background: 'none',
      border: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      cursor: 'pointer',
      padding: 10,
      margin: '0 10px 0 5px',
      // TODO: should be noflip wrapped and handled by an isRTL prop
      position: 'absolute',
      right: 0,
      // TODO: should be noflip wrapped and handled by an isRTL prop
      top: '50%',
      transform: 'translateY(-50%)'
    },
    DateRangePickerInput_clearDates__small: {
      padding: 6
    },
    DateRangePickerInput_clearDates_default: {
      ':focus': {
        background: color.core.border,
        borderRadius: '50%'
      },
      ':hover': {
        background: color.core.border,
        borderRadius: '50%'
      }
    },
    DateRangePickerInput_clearDates__hide: {
      visibility: 'hidden'
    },
    DateRangePickerInput_clearDates_svg: {
      fill: color.core.grayLight,
      height: 12,
      width: 15,
      verticalAlign: 'middle'
    },
    DateRangePickerInput_clearDates_svg__small: {
      height: 9
    },
    DateRangePickerInput_calendarIcon: {
      background: 'none',
      border: 0,
      color: 'inherit',
      font: 'inherit',
      lineHeight: 'normal',
      overflow: 'visible',
      cursor: 'pointer',
      display: 'inline-block',
      verticalAlign: 'middle',
      padding: 10,
      margin: '0 5px 0 10px' // TODO: should be noflip wrapped and handled by an isRTL prop
    },
    DateRangePickerInput_calendarIcon_svg: {
      fill: color.core.grayLight,
      height: 15,
      width: 14,
      verticalAlign: 'middle'
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(DateRangePickerInput);