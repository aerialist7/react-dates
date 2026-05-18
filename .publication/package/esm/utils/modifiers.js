import _defineProperty from "@babel/runtime/helpers/esm/defineProperty";
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
import isDayVisible from './isDayVisible';
import toISODateString from './toISODateString';
import toISOMonthString from './toISOMonthString';
import getPreviousMonthMemoLast from './getPreviousMonthMemoLast';
import { VERTICAL_SCROLLABLE } from '../constants';
export function addModifier(updatedDays, day, modifier, props, state) {
  var numberOfVisibleMonths = props.numberOfMonths,
    enableOutsideDays = props.enableOutsideDays,
    orientation = props.orientation;
  var firstVisibleMonth = state.currentMonth,
    visibleDays = state.visibleDays;
  var currentMonth = firstVisibleMonth;
  var numberOfMonths = numberOfVisibleMonths;
  if (orientation === VERTICAL_SCROLLABLE) {
    numberOfMonths = Object.keys(visibleDays).length;
  } else {
    currentMonth = getPreviousMonthMemoLast(currentMonth);
    numberOfMonths += 2;
  }
  if (!day || !isDayVisible(day, currentMonth, numberOfMonths, enableOutsideDays)) {
    return updatedDays;
  }
  var iso = toISODateString(day);
  var updatedDaysAfterAddition = _objectSpread({}, updatedDays);
  if (enableOutsideDays) {
    var monthsToUpdate = Object.keys(visibleDays).filter(function (monthKey) {
      return Object.keys(visibleDays[monthKey]).indexOf(iso) > -1;
    });
    updatedDaysAfterAddition = monthsToUpdate.reduce(function (acc, monthIso) {
      var month = updatedDays[monthIso] || visibleDays[monthIso];
      if (!month[iso] || !month[iso].has(modifier)) {
        var modifiers = new Set(month[iso]);
        modifiers.add(modifier);
        acc[monthIso] = _objectSpread(_objectSpread({}, month), {}, _defineProperty({}, iso, modifiers));
      }
      return acc;
    }, updatedDaysAfterAddition);
  } else {
    var monthIso = toISOMonthString(day);
    var month = updatedDays[monthIso] || visibleDays[monthIso] || {};
    if (!month[iso] || !month[iso].has(modifier)) {
      var modifiers = new Set(month[iso]);
      modifiers.add(modifier);
      updatedDaysAfterAddition[monthIso] = _objectSpread(_objectSpread({}, month), {}, _defineProperty({}, iso, modifiers));
    }
  }
  return updatedDaysAfterAddition;
}
export function deleteModifier(updatedDays, day, modifier, props, state) {
  var numberOfVisibleMonths = props.numberOfMonths,
    enableOutsideDays = props.enableOutsideDays,
    orientation = props.orientation;
  var firstVisibleMonth = state.currentMonth,
    visibleDays = state.visibleDays;
  var currentMonth = firstVisibleMonth;
  var numberOfMonths = numberOfVisibleMonths;
  if (orientation === VERTICAL_SCROLLABLE) {
    numberOfMonths = Object.keys(visibleDays).length;
  } else {
    currentMonth = getPreviousMonthMemoLast(currentMonth);
    numberOfMonths += 2;
  }
  if (!day || !isDayVisible(day, currentMonth, numberOfMonths, enableOutsideDays)) {
    return updatedDays;
  }
  var iso = toISODateString(day);
  var updatedDaysAfterDeletion = _objectSpread({}, updatedDays);
  if (enableOutsideDays) {
    var monthsToUpdate = Object.keys(visibleDays).filter(function (monthKey) {
      return Object.keys(visibleDays[monthKey]).indexOf(iso) > -1;
    });
    updatedDaysAfterDeletion = monthsToUpdate.reduce(function (acc, monthIso) {
      var month = updatedDays[monthIso] || visibleDays[monthIso];
      if (month[iso] && month[iso].has(modifier)) {
        var modifiers = new Set(month[iso]);
        modifiers["delete"](modifier);
        acc[monthIso] = _objectSpread(_objectSpread({}, month), {}, _defineProperty({}, iso, modifiers));
      }
      return acc;
    }, updatedDaysAfterDeletion);
  } else {
    var monthIso = toISOMonthString(day);
    var month = updatedDays[monthIso] || visibleDays[monthIso] || {};
    if (month[iso] && month[iso].has(modifier)) {
      var modifiers = new Set(month[iso]);
      modifiers["delete"](modifier);
      updatedDaysAfterDeletion[monthIso] = _objectSpread(_objectSpread({}, month), {}, _defineProperty({}, iso, modifiers));
    }
  }
  return updatedDaysAfterDeletion;
}