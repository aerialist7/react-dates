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
var _DateInput = _interopRequireDefault(require("./DateInput"));
var _IconPositionShape = _interopRequireDefault(require("../shapes/IconPositionShape"));
var _CloseButton = _interopRequireDefault(require("./CloseButton"));
var _CalendarIcon = _interopRequireDefault(require("./CalendarIcon"));
var _OpenDirectionShape = _interopRequireDefault(require("../shapes/OpenDirectionShape"));
var _constants = require("../constants");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0, _defineProperty2["default"])(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var propTypes = process.env.NODE_ENV !== "production" ? (0, _airbnbPropTypes.forbidExtraProps)(_objectSpread(_objectSpread({}, _reactWithStyles.withStylesPropTypes), {}, {
  id: _propTypes["default"].string.isRequired,
  children: _propTypes["default"].node,
  placeholder: _propTypes["default"].string,
  ariaLabel: _propTypes["default"].string,
  autoComplete: _propTypes["default"].string,
  titleText: _propTypes["default"].string,
  displayValue: _propTypes["default"].string,
  screenReaderMessage: _propTypes["default"].string,
  focused: _propTypes["default"].bool,
  isFocused: _propTypes["default"].bool,
  // describes actual DOM focus
  disabled: _propTypes["default"].bool,
  required: _propTypes["default"].bool,
  readOnly: _propTypes["default"].bool,
  openDirection: _OpenDirectionShape["default"],
  showCaret: _propTypes["default"].bool,
  showClearDate: _propTypes["default"].bool,
  customCloseIcon: _propTypes["default"].node,
  showDefaultInputIcon: _propTypes["default"].bool,
  inputIconPosition: _IconPositionShape["default"],
  customInputIcon: _propTypes["default"].node,
  isRTL: _propTypes["default"].bool,
  noBorder: _propTypes["default"].bool,
  block: _propTypes["default"].bool,
  small: _propTypes["default"].bool,
  regular: _propTypes["default"].bool,
  verticalSpacing: _airbnbPropTypes.nonNegativeInteger,
  onChange: _propTypes["default"].func,
  onClearDate: _propTypes["default"].func,
  onFocus: _propTypes["default"].func,
  onKeyDownShiftTab: _propTypes["default"].func,
  onKeyDownTab: _propTypes["default"].func,
  onKeyDownArrowDown: _propTypes["default"].func,
  onKeyDownQuestionMark: _propTypes["default"].func,
  // i18n
  phrases: _propTypes["default"].shape((0, _getPhrasePropTypes["default"])(_defaultPhrases.SingleDatePickerInputPhrases))
})) : {};
var defaultProps = {
  children: null,
  placeholder: 'Select Date',
  ariaLabel: undefined,
  autoComplete: 'off',
  titleText: undefined,
  displayValue: '',
  screenReaderMessage: '',
  focused: false,
  isFocused: false,
  disabled: false,
  required: false,
  readOnly: false,
  openDirection: _constants.OPEN_DOWN,
  showCaret: false,
  showClearDate: false,
  showDefaultInputIcon: false,
  inputIconPosition: _constants.ICON_BEFORE_POSITION,
  customCloseIcon: null,
  customInputIcon: null,
  isRTL: false,
  noBorder: false,
  block: false,
  small: false,
  regular: false,
  verticalSpacing: undefined,
  onChange: function onChange() {},
  onClearDate: function onClearDate() {},
  onFocus: function onFocus() {},
  onKeyDownShiftTab: function onKeyDownShiftTab() {},
  onKeyDownTab: function onKeyDownTab() {},
  onKeyDownArrowDown: function onKeyDownArrowDown() {},
  onKeyDownQuestionMark: function onKeyDownQuestionMark() {},
  // i18n
  phrases: _defaultPhrases.SingleDatePickerInputPhrases
};
function SingleDatePickerInput(_ref) {
  var id = _ref.id,
    _ref$children = _ref.children,
    children = _ref$children === void 0 ? defaultProps.children : _ref$children,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? defaultProps.placeholder : _ref$placeholder,
    _ref$ariaLabel = _ref.ariaLabel,
    ariaLabel = _ref$ariaLabel === void 0 ? defaultProps.ariaLabel : _ref$ariaLabel,
    _ref$autoComplete = _ref.autoComplete,
    autoComplete = _ref$autoComplete === void 0 ? defaultProps.autoComplete : _ref$autoComplete,
    _ref$titleText = _ref.titleText,
    titleText = _ref$titleText === void 0 ? defaultProps.titleText : _ref$titleText,
    _ref$displayValue = _ref.displayValue,
    displayValue = _ref$displayValue === void 0 ? defaultProps.displayValue : _ref$displayValue,
    _ref$focused = _ref.focused,
    focused = _ref$focused === void 0 ? defaultProps.focused : _ref$focused,
    _ref$isFocused = _ref.isFocused,
    isFocused = _ref$isFocused === void 0 ? defaultProps.isFocused : _ref$isFocused,
    _ref$disabled = _ref.disabled,
    disabled = _ref$disabled === void 0 ? defaultProps.disabled : _ref$disabled,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? defaultProps.required : _ref$required,
    _ref$readOnly = _ref.readOnly,
    readOnly = _ref$readOnly === void 0 ? defaultProps.readOnly : _ref$readOnly,
    _ref$showCaret = _ref.showCaret,
    showCaret = _ref$showCaret === void 0 ? defaultProps.showCaret : _ref$showCaret,
    _ref$showClearDate = _ref.showClearDate,
    showClearDate = _ref$showClearDate === void 0 ? defaultProps.showClearDate : _ref$showClearDate,
    _ref$showDefaultInput = _ref.showDefaultInputIcon,
    showDefaultInputIcon = _ref$showDefaultInput === void 0 ? defaultProps.showDefaultInputIcon : _ref$showDefaultInput,
    _ref$inputIconPositio = _ref.inputIconPosition,
    inputIconPosition = _ref$inputIconPositio === void 0 ? defaultProps.inputIconPosition : _ref$inputIconPositio,
    _ref$phrases = _ref.phrases,
    phrases = _ref$phrases === void 0 ? defaultProps.phrases : _ref$phrases,
    _ref$onClearDate = _ref.onClearDate,
    onClearDate = _ref$onClearDate === void 0 ? defaultProps.onClearDate : _ref$onClearDate,
    _ref$onChange = _ref.onChange,
    onChange = _ref$onChange === void 0 ? defaultProps.onChange : _ref$onChange,
    _ref$onFocus = _ref.onFocus,
    onFocus = _ref$onFocus === void 0 ? defaultProps.onFocus : _ref$onFocus,
    _ref$onKeyDownShiftTa = _ref.onKeyDownShiftTab,
    onKeyDownShiftTab = _ref$onKeyDownShiftTa === void 0 ? defaultProps.onKeyDownShiftTab : _ref$onKeyDownShiftTa,
    _ref$onKeyDownTab = _ref.onKeyDownTab,
    onKeyDownTab = _ref$onKeyDownTab === void 0 ? defaultProps.onKeyDownTab : _ref$onKeyDownTab,
    _ref$onKeyDownArrowDo = _ref.onKeyDownArrowDown,
    onKeyDownArrowDown = _ref$onKeyDownArrowDo === void 0 ? defaultProps.onKeyDownArrowDown : _ref$onKeyDownArrowDo,
    _ref$onKeyDownQuestio = _ref.onKeyDownQuestionMark,
    onKeyDownQuestionMark = _ref$onKeyDownQuestio === void 0 ? defaultProps.onKeyDownQuestionMark : _ref$onKeyDownQuestio,
    _ref$screenReaderMess = _ref.screenReaderMessage,
    screenReaderMessage = _ref$screenReaderMess === void 0 ? defaultProps.screenReaderMessage : _ref$screenReaderMess,
    _ref$customCloseIcon = _ref.customCloseIcon,
    customCloseIcon = _ref$customCloseIcon === void 0 ? defaultProps.customCloseIcon : _ref$customCloseIcon,
    _ref$customInputIcon = _ref.customInputIcon,
    customInputIcon = _ref$customInputIcon === void 0 ? defaultProps.customInputIcon : _ref$customInputIcon,
    _ref$openDirection = _ref.openDirection,
    openDirection = _ref$openDirection === void 0 ? defaultProps.openDirection : _ref$openDirection,
    _ref$isRTL = _ref.isRTL,
    isRTL = _ref$isRTL === void 0 ? defaultProps.isRTL : _ref$isRTL,
    _ref$noBorder = _ref.noBorder,
    noBorder = _ref$noBorder === void 0 ? defaultProps.noBorder : _ref$noBorder,
    _ref$block = _ref.block,
    block = _ref$block === void 0 ? defaultProps.block : _ref$block,
    _ref$small = _ref.small,
    small = _ref$small === void 0 ? defaultProps.small : _ref$small,
    _ref$regular = _ref.regular,
    regular = _ref$regular === void 0 ? defaultProps.regular : _ref$regular,
    _ref$verticalSpacing = _ref.verticalSpacing,
    verticalSpacing = _ref$verticalSpacing === void 0 ? defaultProps.verticalSpacing : _ref$verticalSpacing,
    css = _ref.css,
    styles = _ref.styles;
  var calendarIcon = customInputIcon || /*#__PURE__*/_react["default"].createElement(_CalendarIcon["default"], css(styles.SingleDatePickerInput_calendarIcon_svg));
  var closeIcon = customCloseIcon || /*#__PURE__*/_react["default"].createElement(_CloseButton["default"], css(styles.SingleDatePickerInput_clearDate_svg, small && styles.SingleDatePickerInput_clearDate_svg__small));
  var screenReaderText = screenReaderMessage || phrases.keyboardForwardNavigationInstructions;
  var inputIcon = (showDefaultInputIcon || customInputIcon !== null) && /*#__PURE__*/_react["default"].createElement("button", (0, _extends2["default"])({}, css(styles.SingleDatePickerInput_calendarIcon), {
    type: "button",
    disabled: disabled,
    "aria-label": phrases.focusStartDate,
    onClick: onFocus,
    tabIndex: "-1"
  }), calendarIcon);
  return /*#__PURE__*/_react["default"].createElement("div", css(styles.SingleDatePickerInput, disabled && styles.SingleDatePickerInput__disabled, isRTL && styles.SingleDatePickerInput__rtl, !noBorder && styles.SingleDatePickerInput__withBorder, block && styles.SingleDatePickerInput__block, showClearDate && styles.SingleDatePickerInput__showClearDate), inputIconPosition === _constants.ICON_BEFORE_POSITION && inputIcon, /*#__PURE__*/_react["default"].createElement(_DateInput["default"], {
    id: id,
    placeholder: placeholder,
    ariaLabel: ariaLabel,
    autoComplete: autoComplete,
    titleText: titleText,
    displayValue: displayValue,
    screenReaderMessage: screenReaderText,
    focused: focused,
    isFocused: isFocused,
    disabled: disabled,
    required: required,
    readOnly: readOnly,
    showCaret: showCaret,
    onChange: onChange,
    onFocus: onFocus,
    onKeyDownShiftTab: onKeyDownShiftTab,
    onKeyDownTab: onKeyDownTab,
    onKeyDownArrowDown: onKeyDownArrowDown,
    onKeyDownQuestionMark: onKeyDownQuestionMark,
    openDirection: openDirection,
    verticalSpacing: verticalSpacing,
    small: small,
    regular: regular,
    block: block
  }), children, showClearDate && /*#__PURE__*/_react["default"].createElement("button", (0, _extends2["default"])({}, css(styles.SingleDatePickerInput_clearDate, small && styles.SingleDatePickerInput_clearDate__small, !customCloseIcon && styles.SingleDatePickerInput_clearDate__default, !displayValue && styles.SingleDatePickerInput_clearDate__hide), {
    type: "button",
    "aria-label": phrases.clearDate,
    disabled: disabled,
    onClick: onClearDate
  }), closeIcon), inputIconPosition === _constants.ICON_AFTER_POSITION && inputIcon);
}
SingleDatePickerInput.propTypes = process.env.NODE_ENV !== "production" ? propTypes : {};
var _default = exports["default"] = (0, _reactWithStyles.withStyles)(function (_ref2) {
  var _ref2$reactDates = _ref2.reactDates,
    border = _ref2$reactDates.border,
    color = _ref2$reactDates.color;
  return {
    SingleDatePickerInput: {
      display: 'inline-block',
      backgroundColor: color.background
    },
    SingleDatePickerInput__withBorder: {
      borderColor: color.border,
      borderWidth: border.pickerInput.borderWidth,
      borderStyle: border.pickerInput.borderStyle,
      borderRadius: border.pickerInput.borderRadius
    },
    SingleDatePickerInput__rtl: {
      direction: (0, _noflip["default"])('rtl')
    },
    SingleDatePickerInput__disabled: {
      backgroundColor: color.disabled
    },
    SingleDatePickerInput__block: {
      display: 'block'
    },
    SingleDatePickerInput__showClearDate: {
      paddingRight: 30 // TODO: should be noflip wrapped and handled by an isRTL prop
    },
    SingleDatePickerInput_clearDate: {
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
    SingleDatePickerInput_clearDate__default: {
      ':focus': {
        background: color.core.border,
        borderRadius: '50%'
      },
      ':hover': {
        background: color.core.border,
        borderRadius: '50%'
      }
    },
    SingleDatePickerInput_clearDate__small: {
      padding: 6
    },
    SingleDatePickerInput_clearDate__hide: {
      visibility: 'hidden'
    },
    SingleDatePickerInput_clearDate_svg: {
      fill: color.core.grayLight,
      height: 12,
      width: 15,
      verticalAlign: 'middle'
    },
    SingleDatePickerInput_clearDate_svg__small: {
      height: 9
    },
    SingleDatePickerInput_calendarIcon: {
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
    SingleDatePickerInput_calendarIcon_svg: {
      fill: color.core.grayLight,
      height: 15,
      width: 14,
      verticalAlign: 'middle'
    }
  };
}, {
  pureComponent: typeof _react["default"].PureComponent !== 'undefined'
})(SingleDatePickerInput);