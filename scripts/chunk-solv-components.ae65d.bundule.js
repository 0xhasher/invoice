"use strict";
(self["webpackChunktokenised_invoice_interface"] = self["webpackChunktokenised_invoice_interface"] || []).push([[156],{

/***/ 1351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ styles_ThemeProvider_ThemeProvider)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7883);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(16338);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(30758);
;// ./node_modules/.pnpm/@mui+private-theming@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/private-theming/useTheme/ThemeContext.js

const ThemeContext = /*#__PURE__*/react.createContext(null);
if (false) {}
/* harmony default export */ const useTheme_ThemeContext = (ThemeContext);
;// ./node_modules/.pnpm/@mui+private-theming@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/private-theming/useTheme/useTheme.js


function useTheme() {
  const theme = react.useContext(useTheme_ThemeContext);
  if (false) {}
  return theme;
}
;// ./node_modules/.pnpm/@mui+private-theming@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/private-theming/ThemeProvider/nested.js
const hasSymbol = typeof Symbol === 'function' && Symbol.for;
/* harmony default export */ const nested = (hasSymbol ? Symbol.for('mui.nested') : '__THEME_NESTED__');
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
;// ./node_modules/.pnpm/@mui+private-theming@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/private-theming/ThemeProvider/ThemeProvider.js








// To support composition of theme.

function mergeOuterLocalTheme(outerTheme, localTheme) {
  if (typeof localTheme === 'function') {
    const mergedTheme = localTheme(outerTheme);
    if (false) {}
    return mergedTheme;
  }
  return (0,esm_extends/* default */.A)({}, outerTheme, localTheme);
}

/**
 * This component takes a `theme` prop.
 * It makes the `theme` available down the React tree thanks to React context.
 * This component should preferably be used at **the root of your component tree**.
 */
function ThemeProvider(props) {
  const {
    children,
    theme: localTheme
  } = props;
  const outerTheme = useTheme();
  if (false) {}
  const theme = react.useMemo(() => {
    const output = outerTheme === null ? localTheme : mergeOuterLocalTheme(outerTheme, localTheme);
    if (output != null) {
      output[nested] = outerTheme !== null;
    }
    return output;
  }, [localTheme, outerTheme]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(useTheme_ThemeContext.Provider, {
    value: theme,
    children: children
  });
}
 false ? 0 : void 0;
if (false) {}
/* harmony default export */ const ThemeProvider_ThemeProvider = (ThemeProvider);
// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1/node_modules/@emotion/react/dist/emotion-element-f0de968e.browser.esm.js
var emotion_element_f0de968e_browser_esm = __webpack_require__(50487);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/useThemeWithoutDefault.js
var useThemeWithoutDefault = __webpack_require__(87771);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/RtlProvider/index.js
var RtlProvider = __webpack_require__(50648);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(55153);
;// ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/ThemeProvider/ThemeProvider.js
'use client';











const EMPTY_THEME = {};
function useThemeScoping(themeId, upperTheme, localTheme, isPrivate = false) {
  return react.useMemo(() => {
    const resolvedTheme = themeId ? upperTheme[themeId] || upperTheme : upperTheme;
    if (typeof localTheme === 'function') {
      const mergedTheme = localTheme(resolvedTheme);
      const result = themeId ? (0,esm_extends/* default */.A)({}, upperTheme, {
        [themeId]: mergedTheme
      }) : mergedTheme;
      // must return a function for the private theme to NOT merge with the upper theme.
      // see the test case "use provided theme from a callback" in ThemeProvider.test.js
      if (isPrivate) {
        return () => result;
      }
      return result;
    }
    return themeId ? (0,esm_extends/* default */.A)({}, upperTheme, {
      [themeId]: localTheme
    }) : (0,esm_extends/* default */.A)({}, upperTheme, localTheme);
  }, [themeId, upperTheme, localTheme, isPrivate]);
}

/**
 * This component makes the `theme` available down the React tree.
 * It should preferably be used at **the root of your component tree**.
 *
 * <ThemeProvider theme={theme}> // existing use case
 * <ThemeProvider theme={{ id: theme }}> // theme scoping
 */
function ThemeProvider_ThemeProvider_ThemeProvider(props) {
  const {
    children,
    theme: localTheme,
    themeId
  } = props;
  const upperTheme = (0,useThemeWithoutDefault/* default */.A)(EMPTY_THEME);
  const upperPrivateTheme = useTheme() || EMPTY_THEME;
  if (false) {}
  const engineTheme = useThemeScoping(themeId, upperTheme, localTheme);
  const privateTheme = useThemeScoping(themeId, upperPrivateTheme, localTheme, true);
  const rtlValue = engineTheme.direction === 'rtl';
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ThemeProvider_ThemeProvider, {
    theme: privateTheme,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(emotion_element_f0de968e_browser_esm.T.Provider, {
      value: engineTheme,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(RtlProvider/* default */.A, {
        value: rtlValue,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(DefaultPropsProvider/* default */.A, {
          value: engineTheme == null ? void 0 : engineTheme.components,
          children: children
        })
      })
    })
  });
}
 false ? 0 : void 0;
if (false) {}
/* harmony default export */ const esm_ThemeProvider_ThemeProvider = (ThemeProvider_ThemeProvider_ThemeProvider);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/styles/identifier.js
var identifier = __webpack_require__(54073);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/styles/ThemeProvider.js
'use client';



const _excluded = ["theme"];





function styles_ThemeProvider_ThemeProvider(_ref) {
  let {
      theme: themeInput
    } = _ref,
    props = (0,objectWithoutPropertiesLoose/* default */.A)(_ref, _excluded);
  const scopedTheme = themeInput[identifier/* default */.A];
  let finalTheme = scopedTheme || themeInput;
  if (typeof themeInput !== 'function') {
    if (scopedTheme && !scopedTheme.vars) {
      finalTheme = (0,esm_extends/* default */.A)({}, scopedTheme, {
        vars: null
      });
    } else if (themeInput && !themeInput.vars) {
      finalTheme = (0,esm_extends/* default */.A)({}, themeInput, {
        vars: null
      });
    }
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_ThemeProvider_ThemeProvider, (0,esm_extends/* default */.A)({}, props, {
    themeId: scopedTheme ? identifier/* default */.A : undefined,
    theme: finalTheme
  }));
}
 false ? 0 : void 0;

/***/ }),

/***/ 5043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30758);

/**
 * @ignore - internal component.
 */
const FormControlContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
if (false) {}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormControlContext);

/***/ }),

/***/ 5316:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ getDisplayName),
  getFunctionName: () => (/* reexport */ getFunctionName)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/react-is@19.0.0/node_modules/react-is/cjs/react-is.production.js
var react_is_production = __webpack_require__(13491);
;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/getDisplayName/getDisplayName.js


// Simplified polyfill for IE11 support
// https://github.com/JamesMGreene/Function.name/blob/58b314d4a983110c3682f1228f845d39ccca1817/Function.name.js#L3
const fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function getFunctionName(fn) {
  const match = `${fn}`.match(fnNameMatchRegex);
  const name = match && match[1];
  return name || '';
}
function getFunctionComponentName(Component, fallback = '') {
  return Component.displayName || Component.name || getFunctionName(Component) || fallback;
}
function getWrappedName(outerType, innerType, wrapperName) {
  const functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== '' ? `${wrapperName}(${functionName})` : wrapperName);
}

/**
 * cherry-pick from
 * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
 * originally forked from recompose/getDisplayName with added IE11 support
 */
function getDisplayName(Component) {
  if (Component == null) {
    return undefined;
  }
  if (typeof Component === 'string') {
    return Component;
  }
  if (typeof Component === 'function') {
    return getFunctionComponentName(Component, 'Component');
  }

  // TypeScript can't have components as objects but they exist in the form of `memo` or `Suspense`
  if (typeof Component === 'object') {
    switch (Component.$$typeof) {
      case react_is_production/* ForwardRef */.vM:
        return getWrappedName(Component, Component.render, 'ForwardRef');
      case react_is_production/* Memo */.lD:
        return getWrappedName(Component, Component.type, 'memo');
      default:
        return undefined;
    }
  }
  return undefined;
}
;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/getDisplayName/index.js



/***/ }),

/***/ 7857:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ formatMuiErrorMessage)
/* harmony export */ });
/**
 * WARNING: Don't import this directly.
 * Use `MuiError` from `@mui/internal-babel-macros/MuiError.macro` instead.
 * @param {number} code
 */
function formatMuiErrorMessage(code) {
  // Apply babel-plugin-transform-template-literals in loose mode
  // loose mode is safe if we're concatenating primitives
  // see https://babeljs.io/docs/en/babel-plugin-transform-template-literals#loose
  /* eslint-disable prefer-template */
  let url = 'https://mui.com/production-error/?code=' + code;
  for (let i = 1; i < arguments.length; i += 1) {
    // rest params over-transpile for this case
    // eslint-disable-next-line prefer-rest-params
    url += '&args[]=' + encodeURIComponent(arguments[i]);
  }
  return 'Minified MUI error #' + code + '; visit ' + url + ' for the full message.';
  /* eslint-enable prefer-template */
}

/***/ }),

/***/ 10684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   b: () => (/* binding */ useDefaultProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30758);
/* harmony import */ var _mui_system_DefaultPropsProvider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(55153);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
'use client';






function DefaultPropsProvider(props) {
  return /*#__PURE__*/_jsx(SystemDefaultPropsProvider, _extends({}, props));
}
 false ? 0 : void 0;
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (DefaultPropsProvider)));
function useDefaultProps(params) {
  return (0,_mui_system_DefaultPropsProvider__WEBPACK_IMPORTED_MODULE_2__/* .useDefaultProps */ .b)(params);
}

/***/ }),

/***/ 13528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ getThemeProps)
/* harmony export */ });
/* harmony import */ var _mui_utils_resolveProps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(20711);

function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name] || !theme.components[name].defaultProps) {
    return props;
  }
  return (0,_mui_utils_resolveProps__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(theme.components[name].defaultProps, props);
}

/***/ }),

/***/ 14152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ styleFunctionSx_defaultSxConfig)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/spacing.js + 1 modules
var spacing = __webpack_require__(96300);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/style.js
var style = __webpack_require__(62597);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/merge.js
var merge = __webpack_require__(46648);
;// ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/compose.js

function compose(...styles) {
  const handlers = styles.reduce((acc, style) => {
    style.filterProps.forEach(prop => {
      acc[prop] = style;
    });
    return acc;
  }, {});

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const fn = props => {
    return Object.keys(props).reduce((acc, prop) => {
      if (handlers[prop]) {
        return (0,merge/* default */.A)(acc, handlers[prop](props));
      }
      return acc;
    }, {});
  };
  fn.propTypes =  false ? 0 : {};
  fn.filterProps = styles.reduce((acc, style) => acc.concat(style.filterProps), []);
  return fn;
}
/* harmony default export */ const esm_compose = (compose);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/breakpoints.js
var breakpoints = __webpack_require__(65192);
;// ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/borders.js





function borderTransform(value) {
  if (typeof value !== 'number') {
    return value;
  }
  return `${value}px solid`;
}
function createBorderStyle(prop, transform) {
  return (0,style/* default */.Ay)({
    prop,
    themeKey: 'borders',
    transform
  });
}
const border = createBorderStyle('border', borderTransform);
const borderTop = createBorderStyle('borderTop', borderTransform);
const borderRight = createBorderStyle('borderRight', borderTransform);
const borderBottom = createBorderStyle('borderBottom', borderTransform);
const borderLeft = createBorderStyle('borderLeft', borderTransform);
const borderColor = createBorderStyle('borderColor');
const borderTopColor = createBorderStyle('borderTopColor');
const borderRightColor = createBorderStyle('borderRightColor');
const borderBottomColor = createBorderStyle('borderBottomColor');
const borderLeftColor = createBorderStyle('borderLeftColor');
const outline = createBorderStyle('outline', borderTransform);
const outlineColor = createBorderStyle('outlineColor');

// false positive
// eslint-disable-next-line react/function-component-definition
const borderRadius = props => {
  if (props.borderRadius !== undefined && props.borderRadius !== null) {
    const transformer = (0,spacing/* createUnaryUnit */.MA)(props.theme, 'shape.borderRadius', 4, 'borderRadius');
    const styleFromPropValue = propValue => ({
      borderRadius: (0,spacing/* getValue */._W)(transformer, propValue)
    });
    return (0,breakpoints/* handleBreakpoints */.NI)(props, props.borderRadius, styleFromPropValue);
  }
  return null;
};
borderRadius.propTypes =  false ? 0 : {};
borderRadius.filterProps = ['borderRadius'];
const borders = esm_compose(border, borderTop, borderRight, borderBottom, borderLeft, borderColor, borderTopColor, borderRightColor, borderBottomColor, borderLeftColor, borderRadius, outline, outlineColor);
/* harmony default export */ const esm_borders = ((/* unused pure expression or super */ null && (borders)));
;// ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/cssGrid.js






// false positive
// eslint-disable-next-line react/function-component-definition
const gap = props => {
  if (props.gap !== undefined && props.gap !== null) {
    const transformer = (0,spacing/* createUnaryUnit */.MA)(props.theme, 'spacing', 8, 'gap');
    const styleFromPropValue = propValue => ({
      gap: (0,spacing/* getValue */._W)(transformer, propValue)
    });
    return (0,breakpoints/* handleBreakpoints */.NI)(props, props.gap, styleFromPropValue);
  }
  return null;
};
gap.propTypes =  false ? 0 : {};
gap.filterProps = ['gap'];

// false positive
// eslint-disable-next-line react/function-component-definition
const columnGap = props => {
  if (props.columnGap !== undefined && props.columnGap !== null) {
    const transformer = (0,spacing/* createUnaryUnit */.MA)(props.theme, 'spacing', 8, 'columnGap');
    const styleFromPropValue = propValue => ({
      columnGap: (0,spacing/* getValue */._W)(transformer, propValue)
    });
    return (0,breakpoints/* handleBreakpoints */.NI)(props, props.columnGap, styleFromPropValue);
  }
  return null;
};
columnGap.propTypes =  false ? 0 : {};
columnGap.filterProps = ['columnGap'];

// false positive
// eslint-disable-next-line react/function-component-definition
const rowGap = props => {
  if (props.rowGap !== undefined && props.rowGap !== null) {
    const transformer = (0,spacing/* createUnaryUnit */.MA)(props.theme, 'spacing', 8, 'rowGap');
    const styleFromPropValue = propValue => ({
      rowGap: (0,spacing/* getValue */._W)(transformer, propValue)
    });
    return (0,breakpoints/* handleBreakpoints */.NI)(props, props.rowGap, styleFromPropValue);
  }
  return null;
};
rowGap.propTypes =  false ? 0 : {};
rowGap.filterProps = ['rowGap'];
const gridColumn = (0,style/* default */.Ay)({
  prop: 'gridColumn'
});
const gridRow = (0,style/* default */.Ay)({
  prop: 'gridRow'
});
const gridAutoFlow = (0,style/* default */.Ay)({
  prop: 'gridAutoFlow'
});
const gridAutoColumns = (0,style/* default */.Ay)({
  prop: 'gridAutoColumns'
});
const gridAutoRows = (0,style/* default */.Ay)({
  prop: 'gridAutoRows'
});
const gridTemplateColumns = (0,style/* default */.Ay)({
  prop: 'gridTemplateColumns'
});
const gridTemplateRows = (0,style/* default */.Ay)({
  prop: 'gridTemplateRows'
});
const gridTemplateAreas = (0,style/* default */.Ay)({
  prop: 'gridTemplateAreas'
});
const gridArea = (0,style/* default */.Ay)({
  prop: 'gridArea'
});
const grid = esm_compose(gap, columnGap, rowGap, gridColumn, gridRow, gridAutoFlow, gridAutoColumns, gridAutoRows, gridTemplateColumns, gridTemplateRows, gridTemplateAreas, gridArea);
/* harmony default export */ const cssGrid = ((/* unused pure expression or super */ null && (grid)));
;// ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/palette.js


function paletteTransform(value, userValue) {
  if (userValue === 'grey') {
    return userValue;
  }
  return value;
}
const color = (0,style/* default */.Ay)({
  prop: 'color',
  themeKey: 'palette',
  transform: paletteTransform
});
const bgcolor = (0,style/* default */.Ay)({
  prop: 'bgcolor',
  cssProperty: 'backgroundColor',
  themeKey: 'palette',
  transform: paletteTransform
});
const backgroundColor = (0,style/* default */.Ay)({
  prop: 'backgroundColor',
  themeKey: 'palette',
  transform: paletteTransform
});
const palette = esm_compose(color, bgcolor, backgroundColor);
/* harmony default export */ const esm_palette = ((/* unused pure expression or super */ null && (palette)));
;// ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/sizing.js



function sizingTransform(value) {
  return value <= 1 && value !== 0 ? `${value * 100}%` : value;
}
const width = (0,style/* default */.Ay)({
  prop: 'width',
  transform: sizingTransform
});
const maxWidth = props => {
  if (props.maxWidth !== undefined && props.maxWidth !== null) {
    const styleFromPropValue = propValue => {
      var _props$theme, _props$theme2;
      const breakpoint = ((_props$theme = props.theme) == null || (_props$theme = _props$theme.breakpoints) == null || (_props$theme = _props$theme.values) == null ? void 0 : _props$theme[propValue]) || breakpoints/* values */.zu[propValue];
      if (!breakpoint) {
        return {
          maxWidth: sizingTransform(propValue)
        };
      }
      if (((_props$theme2 = props.theme) == null || (_props$theme2 = _props$theme2.breakpoints) == null ? void 0 : _props$theme2.unit) !== 'px') {
        return {
          maxWidth: `${breakpoint}${props.theme.breakpoints.unit}`
        };
      }
      return {
        maxWidth: breakpoint
      };
    };
    return (0,breakpoints/* handleBreakpoints */.NI)(props, props.maxWidth, styleFromPropValue);
  }
  return null;
};
maxWidth.filterProps = ['maxWidth'];
const minWidth = (0,style/* default */.Ay)({
  prop: 'minWidth',
  transform: sizingTransform
});
const height = (0,style/* default */.Ay)({
  prop: 'height',
  transform: sizingTransform
});
const maxHeight = (0,style/* default */.Ay)({
  prop: 'maxHeight',
  transform: sizingTransform
});
const minHeight = (0,style/* default */.Ay)({
  prop: 'minHeight',
  transform: sizingTransform
});
const sizeWidth = (0,style/* default */.Ay)({
  prop: 'size',
  cssProperty: 'width',
  transform: sizingTransform
});
const sizeHeight = (0,style/* default */.Ay)({
  prop: 'size',
  cssProperty: 'height',
  transform: sizingTransform
});
const boxSizing = (0,style/* default */.Ay)({
  prop: 'boxSizing'
});
const sizing = esm_compose(width, maxWidth, minWidth, height, maxHeight, minHeight, boxSizing);
/* harmony default export */ const esm_sizing = ((/* unused pure expression or super */ null && (sizing)));
;// ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js





const defaultSxConfig = {
  // borders
  border: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderTop: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderRight: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderBottom: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderLeft: {
    themeKey: 'borders',
    transform: borderTransform
  },
  borderColor: {
    themeKey: 'palette'
  },
  borderTopColor: {
    themeKey: 'palette'
  },
  borderRightColor: {
    themeKey: 'palette'
  },
  borderBottomColor: {
    themeKey: 'palette'
  },
  borderLeftColor: {
    themeKey: 'palette'
  },
  outline: {
    themeKey: 'borders',
    transform: borderTransform
  },
  outlineColor: {
    themeKey: 'palette'
  },
  borderRadius: {
    themeKey: 'shape.borderRadius',
    style: borderRadius
  },
  // palette
  color: {
    themeKey: 'palette',
    transform: paletteTransform
  },
  bgcolor: {
    themeKey: 'palette',
    cssProperty: 'backgroundColor',
    transform: paletteTransform
  },
  backgroundColor: {
    themeKey: 'palette',
    transform: paletteTransform
  },
  // spacing
  p: {
    style: spacing/* padding */.Ms
  },
  pt: {
    style: spacing/* padding */.Ms
  },
  pr: {
    style: spacing/* padding */.Ms
  },
  pb: {
    style: spacing/* padding */.Ms
  },
  pl: {
    style: spacing/* padding */.Ms
  },
  px: {
    style: spacing/* padding */.Ms
  },
  py: {
    style: spacing/* padding */.Ms
  },
  padding: {
    style: spacing/* padding */.Ms
  },
  paddingTop: {
    style: spacing/* padding */.Ms
  },
  paddingRight: {
    style: spacing/* padding */.Ms
  },
  paddingBottom: {
    style: spacing/* padding */.Ms
  },
  paddingLeft: {
    style: spacing/* padding */.Ms
  },
  paddingX: {
    style: spacing/* padding */.Ms
  },
  paddingY: {
    style: spacing/* padding */.Ms
  },
  paddingInline: {
    style: spacing/* padding */.Ms
  },
  paddingInlineStart: {
    style: spacing/* padding */.Ms
  },
  paddingInlineEnd: {
    style: spacing/* padding */.Ms
  },
  paddingBlock: {
    style: spacing/* padding */.Ms
  },
  paddingBlockStart: {
    style: spacing/* padding */.Ms
  },
  paddingBlockEnd: {
    style: spacing/* padding */.Ms
  },
  m: {
    style: spacing/* margin */.Lc
  },
  mt: {
    style: spacing/* margin */.Lc
  },
  mr: {
    style: spacing/* margin */.Lc
  },
  mb: {
    style: spacing/* margin */.Lc
  },
  ml: {
    style: spacing/* margin */.Lc
  },
  mx: {
    style: spacing/* margin */.Lc
  },
  my: {
    style: spacing/* margin */.Lc
  },
  margin: {
    style: spacing/* margin */.Lc
  },
  marginTop: {
    style: spacing/* margin */.Lc
  },
  marginRight: {
    style: spacing/* margin */.Lc
  },
  marginBottom: {
    style: spacing/* margin */.Lc
  },
  marginLeft: {
    style: spacing/* margin */.Lc
  },
  marginX: {
    style: spacing/* margin */.Lc
  },
  marginY: {
    style: spacing/* margin */.Lc
  },
  marginInline: {
    style: spacing/* margin */.Lc
  },
  marginInlineStart: {
    style: spacing/* margin */.Lc
  },
  marginInlineEnd: {
    style: spacing/* margin */.Lc
  },
  marginBlock: {
    style: spacing/* margin */.Lc
  },
  marginBlockStart: {
    style: spacing/* margin */.Lc
  },
  marginBlockEnd: {
    style: spacing/* margin */.Lc
  },
  // display
  displayPrint: {
    cssProperty: false,
    transform: value => ({
      '@media print': {
        display: value
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: gap
  },
  rowGap: {
    style: rowGap
  },
  columnGap: {
    style: columnGap
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: 'zIndex'
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: 'shadows'
  },
  // sizing
  width: {
    transform: sizingTransform
  },
  maxWidth: {
    style: maxWidth
  },
  minWidth: {
    transform: sizingTransform
  },
  height: {
    transform: sizingTransform
  },
  maxHeight: {
    transform: sizingTransform
  },
  minHeight: {
    transform: sizingTransform
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: 'typography'
  },
  fontSize: {
    themeKey: 'typography'
  },
  fontStyle: {
    themeKey: 'typography'
  },
  fontWeight: {
    themeKey: 'typography'
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: false,
    themeKey: 'typography'
  }
};
/* harmony default export */ const styleFunctionSx_defaultSxConfig = (defaultSxConfig);

/***/ }),

/***/ 14904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ FormHelperText_FormHelperText)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(16338);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7883);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(30758);
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(13526);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(70927);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/FormControl/formControlState.js
var formControlState = __webpack_require__(52689);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/FormControl/useFormControl.js
var useFormControl = __webpack_require__(50635);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(38209);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(30825);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(49505);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js + 1 modules
var generateUtilityClass = __webpack_require__(34772);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/FormHelperText/formHelperTextClasses.js


function getFormHelperTextUtilityClasses(slot) {
  return (0,generateUtilityClass/* default */.Ay)('MuiFormHelperText', slot);
}
const formHelperTextClasses = (0,generateUtilityClasses/* default */.A)('MuiFormHelperText', ['root', 'error', 'disabled', 'sizeSmall', 'sizeMedium', 'contained', 'focused', 'filled', 'required']);
/* harmony default export */ const FormHelperText_formHelperTextClasses = (formHelperTextClasses);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(10684);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/FormHelperText/FormHelperText.js
'use client';



var _span;
const _excluded = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"];











const useUtilityClasses = ownerState => {
  const {
    classes,
    contained,
    size,
    disabled,
    error,
    filled,
    focused,
    required
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', error && 'error', size && `size${(0,capitalize/* default */.A)(size)}`, contained && 'contained', focused && 'focused', filled && 'filled', required && 'required']
  };
  return (0,composeClasses/* default */.A)(slots, getFormHelperTextUtilityClasses, classes);
};
const FormHelperTextRoot = (0,styled/* default */.Ay)('p', {
  name: 'MuiFormHelperText',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.size && styles[`size${(0,capitalize/* default */.A)(ownerState.size)}`], ownerState.contained && styles.contained, ownerState.filled && styles.filled];
  }
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.A)({
  color: (theme.vars || theme).palette.text.secondary
}, theme.typography.caption, {
  textAlign: 'left',
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${FormHelperText_formHelperTextClasses.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled
  },
  [`&.${FormHelperText_formHelperTextClasses.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
}, ownerState.size === 'small' && {
  marginTop: 4
}, ownerState.contained && {
  marginLeft: 14,
  marginRight: 14
}));
const FormHelperText = /*#__PURE__*/react.forwardRef(function FormHelperText(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiFormHelperText'
  });
  const {
      children,
      className,
      component = 'p'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded);
  const muiFormControl = (0,useFormControl/* default */.A)();
  const fcs = (0,formControlState/* default */.A)({
    props,
    muiFormControl,
    states: ['variant', 'size', 'disabled', 'error', 'filled', 'focused', 'required']
  });
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    component,
    contained: fcs.variant === 'filled' || fcs.variant === 'outlined',
    variant: fcs.variant,
    size: fcs.size,
    disabled: fcs.disabled,
    error: fcs.error,
    filled: fcs.filled,
    focused: fcs.focused,
    required: fcs.required
  });
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(FormHelperTextRoot, (0,esm_extends/* default */.A)({
    as: component,
    ownerState: ownerState,
    className: (0,clsx/* default */.A)(classes.root, className),
    ref: ref
  }, other, {
    children: children === ' ' ? // notranslate needed while Google Translate will not fix zero-width space issue
    _span || (_span = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: "notranslate",
      children: "\u200B"
    })) : children
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const FormHelperText_FormHelperText = (FormHelperText);

/***/ }),

/***/ 20711:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ resolveProps)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7883);

/**
 * Add keys, values of `defaultProps` that does not exist in `props`
 * @param {object} defaultProps
 * @param {object} props
 * @returns {object} resolved props
 */
function resolveProps(defaultProps, props) {
  const output = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({}, props);
  Object.keys(defaultProps).forEach(propName => {
    if (propName.toString().match(/^(components|slots)$/)) {
      output[propName] = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({}, defaultProps[propName], output[propName]);
    } else if (propName.toString().match(/^(componentsProps|slotProps)$/)) {
      const defaultSlotProps = defaultProps[propName] || {};
      const slotProps = props[propName];
      output[propName] = {};
      if (!slotProps || !Object.keys(slotProps)) {
        // Reduce the iteration if the slot props is empty
        output[propName] = defaultSlotProps;
      } else if (!defaultSlotProps || !Object.keys(defaultSlotProps)) {
        // Reduce the iteration if the default slot props is empty
        output[propName] = slotProps;
      } else {
        output[propName] = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({}, slotProps);
        Object.keys(defaultSlotProps).forEach(slotPropName => {
          output[propName][slotPropName] = resolveProps(defaultSlotProps[slotPropName], slotProps[slotPropName]);
        });
      }
    } else if (output[propName] === undefined) {
      output[propName] = defaultProps[propName];
    }
  });
  return output;
}

/***/ }),

/***/ 30825:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_utils_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39875);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_mui_utils_capitalize__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A);

/***/ }),

/***/ 30882:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalStyles: () => (/* reexport safe */ _GlobalStyles__WEBPACK_IMPORTED_MODULE_4__.A),
/* harmony export */   StyledEngineProvider: () => (/* reexport safe */ _StyledEngineProvider__WEBPACK_IMPORTED_MODULE_3__.A),
/* harmony export */   ThemeContext: () => (/* reexport safe */ _emotion_react__WEBPACK_IMPORTED_MODULE_1__.T),
/* harmony export */   css: () => (/* reexport safe */ _emotion_react__WEBPACK_IMPORTED_MODULE_2__.AH),
/* harmony export */   "default": () => (/* binding */ styled),
/* harmony export */   internal_processStyles: () => (/* binding */ internal_processStyles),
/* harmony export */   keyframes: () => (/* reexport safe */ _emotion_react__WEBPACK_IMPORTED_MODULE_2__.i7)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(87968);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50487);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19936);
/* harmony import */ var _StyledEngineProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93435);
/* harmony import */ var _GlobalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68105);
/**
 * @mui/styled-engine v5.16.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
'use client';

/* eslint-disable no-underscore-dangle */

function styled(tag, options) {
  const stylesFactory = (0,_emotion_styled__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(tag, options);
  if (false) {}
  return stylesFactory;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const internal_processStyles = (tag, processor) => {
  // Emotion attaches all the styles as `__emotion_styles`.
  // Ref: https://github.com/emotion-js/emotion/blob/16d971d0da229596d6bcc39d282ba9753c9ee7cf/packages/styled/src/base.js#L186
  if (Array.isArray(tag.__emotion_styles)) {
    tag.__emotion_styles = processor(tag.__emotion_styles);
  }
};




/***/ }),

/***/ 31374:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  l: () => (/* binding */ DatePicker)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7883);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(16338);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(30758);
var react_namespaceObject = /*#__PURE__*/__webpack_require__.t(react, 2);
;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/useEnhancedEffect/useEnhancedEffect.js
'use client';



/**
 * A version of `React.useLayoutEffect` that does not show a warning when server-side rendering.
 * This is useful for effects that are only needed for client-side rendering but not for SSR.
 *
 * Before you use this hook, make sure to read https://gist.github.com/gaearon/e7d97cdf38a2907924ea12e4ebdf3c85
 * and confirm it doesn't apply to your use-case.
 */
const useEnhancedEffect = typeof window !== 'undefined' ? react.useLayoutEffect : react.useEffect;
/* harmony default export */ const useEnhancedEffect_useEnhancedEffect = (useEnhancedEffect);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/useThemeProps/getThemeProps.js
var getThemeProps = __webpack_require__(13528);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/useThemeWithoutDefault.js
var useThemeWithoutDefault = __webpack_require__(87771);
;// ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/useMediaQuery/useMediaQuery.js
'use client';






/**
 * @deprecated Not used internally. Use `MediaQueryListEvent` from lib.dom.d.ts instead.
 */

/**
 * @deprecated Not used internally. Use `MediaQueryList` from lib.dom.d.ts instead.
 */

/**
 * @deprecated Not used internally. Use `(event: MediaQueryListEvent) => void` instead.
 */

function useMediaQueryOld(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr) {
  const [match, setMatch] = react.useState(() => {
    if (noSsr && matchMedia) {
      return matchMedia(query).matches;
    }
    if (ssrMatchMedia) {
      return ssrMatchMedia(query).matches;
    }

    // Once the component is mounted, we rely on the
    // event listeners to return the correct matches value.
    return defaultMatches;
  });
  useEnhancedEffect_useEnhancedEffect(() => {
    let active = true;
    if (!matchMedia) {
      return undefined;
    }
    const queryList = matchMedia(query);
    const updateMatch = () => {
      // Workaround Safari wrong implementation of matchMedia
      // TODO can we remove it?
      // https://github.com/mui/material-ui/pull/17315#issuecomment-528286677
      if (active) {
        setMatch(queryList.matches);
      }
    };
    updateMatch();
    // TODO: Use `addEventListener` once support for Safari < 14 is dropped
    queryList.addListener(updateMatch);
    return () => {
      active = false;
      queryList.removeListener(updateMatch);
    };
  }, [query, matchMedia]);
  return match;
}

// eslint-disable-next-line no-useless-concat -- Workaround for https://github.com/webpack/webpack/issues/14814
const maybeReactUseSyncExternalStore = react_namespaceObject['useSyncExternalStore' + ''];
function useMediaQueryNew(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr) {
  const getDefaultSnapshot = react.useCallback(() => defaultMatches, [defaultMatches]);
  const getServerSnapshot = react.useMemo(() => {
    if (noSsr && matchMedia) {
      return () => matchMedia(query).matches;
    }
    if (ssrMatchMedia !== null) {
      const {
        matches
      } = ssrMatchMedia(query);
      return () => matches;
    }
    return getDefaultSnapshot;
  }, [getDefaultSnapshot, query, ssrMatchMedia, noSsr, matchMedia]);
  const [getSnapshot, subscribe] = react.useMemo(() => {
    if (matchMedia === null) {
      return [getDefaultSnapshot, () => () => {}];
    }
    const mediaQueryList = matchMedia(query);
    return [() => mediaQueryList.matches, notify => {
      // TODO: Use `addEventListener` once support for Safari < 14 is dropped
      mediaQueryList.addListener(notify);
      return () => {
        mediaQueryList.removeListener(notify);
      };
    }];
  }, [getDefaultSnapshot, matchMedia, query]);
  const match = maybeReactUseSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return match;
}
function useMediaQuery(queryInput, options = {}) {
  const theme = (0,useThemeWithoutDefault/* default */.A)();
  // Wait for jsdom to support the match media feature.
  // All the browsers MUI support have this built-in.
  // This defensive check is here for simplicity.
  // Most of the time, the match media logic isn't central to people tests.
  const supportMatchMedia = typeof window !== 'undefined' && typeof window.matchMedia !== 'undefined';
  const {
    defaultMatches = false,
    matchMedia = supportMatchMedia ? window.matchMedia : null,
    ssrMatchMedia = null,
    noSsr = false
  } = (0,getThemeProps/* default */.A)({
    name: 'MuiUseMediaQuery',
    props: options,
    theme
  });
  if (false) {}
  let query = typeof queryInput === 'function' ? queryInput(theme) : queryInput;
  query = query.replace(/^@media( ?)/m, '');

  // TODO: Drop `useMediaQueryOld` and use  `use-sync-external-store` shim in `useMediaQueryNew` once the package is stable
  const useMediaQueryImplementation = maybeReactUseSyncExternalStore !== undefined ? useMediaQueryNew : useMediaQueryOld;
  const match = useMediaQueryImplementation(query, defaultMatches, matchMedia, ssrMatchMedia, noSsr);
  if (false) {}
  return match;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/styles/useThemeProps.js + 1 modules
var useThemeProps = __webpack_require__(60469);
// EXTERNAL MODULE: ./node_modules/.pnpm/prop-types@15.8.1/node_modules/prop-types/index.js
var prop_types = __webpack_require__(2736);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);
;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/resolveComponentProps/resolveComponentProps.js
/**
 * If `componentProps` is a function, calls it with the provided `ownerState`.
 * Otherwise, just returns `componentProps`.
 */
function resolveComponentProps(componentProps, ownerState, slotState) {
  if (typeof componentProps === 'function') {
    return componentProps(ownerState, slotState);
  }
  return componentProps;
}
/* harmony default export */ const resolveComponentProps_resolveComponentProps = (resolveComponentProps);
;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/refType/refType.js

const refType = prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).object]);
/* harmony default export */ const refType_refType = (refType);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/utils/views.js
const views_areViewsEqual = (views, expectedViews) => {
  if (views.length !== expectedViews.length) {
    return false;
  }
  return expectedViews.every(expectedView => views.includes(expectedView));
};
const applyDefaultViewProps = ({
  openTo,
  defaultOpenTo,
  views,
  defaultViews
}) => {
  const viewsWithDefault = views ?? defaultViews;
  let openToWithDefault;
  if (openTo != null) {
    openToWithDefault = openTo;
  } else if (viewsWithDefault.includes(defaultOpenTo)) {
    openToWithDefault = defaultOpenTo;
  } else if (viewsWithDefault.length > 0) {
    openToWithDefault = viewsWithDefault[0];
  } else {
    throw new Error('MUI X: The `views` prop must contain at least one view.');
  }
  return {
    views: viewsWithDefault,
    openTo: openToWithDefault
  };
};
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/utils/date-utils.js

const mergeDateAndTime = (utils, dateParam, timeParam) => {
  let mergedDate = dateParam;
  mergedDate = utils.setHours(mergedDate, utils.getHours(timeParam));
  mergedDate = utils.setMinutes(mergedDate, utils.getMinutes(timeParam));
  mergedDate = utils.setSeconds(mergedDate, utils.getSeconds(timeParam));
  mergedDate = utils.setMilliseconds(mergedDate, utils.getMilliseconds(timeParam));
  return mergedDate;
};
const findClosestEnabledDate = ({
  date,
  disableFuture,
  disablePast,
  maxDate,
  minDate,
  isDateDisabled,
  utils,
  timezone
}) => {
  const today = mergeDateAndTime(utils, utils.date(undefined, timezone), date);
  if (disablePast && utils.isBefore(minDate, today)) {
    minDate = today;
  }
  if (disableFuture && utils.isAfter(maxDate, today)) {
    maxDate = today;
  }
  let forward = date;
  let backward = date;
  if (utils.isBefore(date, minDate)) {
    forward = minDate;
    backward = null;
  }
  if (utils.isAfter(date, maxDate)) {
    if (backward) {
      backward = maxDate;
    }
    forward = null;
  }
  while (forward || backward) {
    if (forward && utils.isAfter(forward, maxDate)) {
      forward = null;
    }
    if (backward && utils.isBefore(backward, minDate)) {
      backward = null;
    }
    if (forward) {
      if (!isDateDisabled(forward)) {
        return forward;
      }
      forward = utils.addDays(forward, 1);
    }
    if (backward) {
      if (!isDateDisabled(backward)) {
        return backward;
      }
      backward = utils.addDays(backward, -1);
    }
  }
  return null;
};
const replaceInvalidDateByNull = (utils, value) => value == null || !utils.isValid(value) ? null : value;
const date_utils_applyDefaultDate = (utils, value, defaultValue) => {
  if (value == null || !utils.isValid(value)) {
    return defaultValue;
  }
  return value;
};
const areDatesEqual = (utils, a, b) => {
  if (!utils.isValid(a) && a != null && !utils.isValid(b) && b != null) {
    return true;
  }
  return utils.isEqual(a, b);
};
const getMonthsInYear = (utils, year) => {
  const firstMonth = utils.startOfYear(year);
  const months = [firstMonth];
  while (months.length < 12) {
    const prevMonth = months[months.length - 1];
    months.push(utils.addMonths(prevMonth, 1));
  }
  return months;
};
const getTodayDate = (utils, timezone, valueType) => valueType === 'date' ? utils.startOfDay(utils.date(undefined, timezone)) : utils.date(undefined, timezone);
const formatMeridiem = (utils, meridiem) => {
  const date = utils.setHours(utils.date(), meridiem === 'am' ? 2 : 14);
  return utils.format(date, 'meridiem');
};
const dateViews = ['year', 'month', 'day'];
const isDatePickerView = view => dateViews.includes(view);
const resolveDateFormat = (utils, {
  format,
  views
}, isInToolbar) => {
  if (format != null) {
    return format;
  }
  const formats = utils.formats;
  if (views_areViewsEqual(views, ['year'])) {
    return formats.year;
  }
  if (views_areViewsEqual(views, ['month'])) {
    return formats.month;
  }
  if (views_areViewsEqual(views, ['day'])) {
    return formats.dayOfMonth;
  }
  if (views_areViewsEqual(views, ['month', 'year'])) {
    return `${formats.month} ${formats.year}`;
  }
  if (views_areViewsEqual(views, ['day', 'month'])) {
    return `${formats.month} ${formats.dayOfMonth}`;
  }
  if (isInToolbar) {
    // Little localization hack (Google is doing the same for android native pickers):
    // For english localization it is convenient to include weekday into the date "Mon, Jun 1".
    // For other locales using strings like "June 1", without weekday.
    return /en/.test(utils.getCurrentLocaleCode()) ? formats.normalDateWithWeekday : formats.normalDate;
  }
  return formats.keyboardDate;
};
const getWeekdays = (utils, date) => {
  const start = utils.startOfWeek(date);
  return [0, 1, 2, 3, 4, 5, 6].map(diff => utils.addDays(start, diff));
};
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/utils/time-utils.js

const timeViews = ['hours', 'minutes', 'seconds'];
const isTimeView = view => timeViews.includes(view);
const isInternalTimeView = view => timeViews.includes(view) || view === 'meridiem';
const time_utils_getMeridiem = (date, utils) => {
  if (!date) {
    return null;
  }
  return utils.getHours(date) >= 12 ? 'pm' : 'am';
};
const convertValueToMeridiem = (value, meridiem, ampm) => {
  if (ampm) {
    const currentMeridiem = value >= 12 ? 'pm' : 'am';
    if (currentMeridiem !== meridiem) {
      return meridiem === 'am' ? value - 12 : value + 12;
    }
  }
  return value;
};
const time_utils_convertToMeridiem = (time, meridiem, ampm, utils) => {
  const newHoursAmount = convertValueToMeridiem(utils.getHours(time), meridiem, ampm);
  return utils.setHours(time, newHoursAmount);
};
const getSecondsInDay = (date, utils) => {
  return utils.getHours(date) * 3600 + utils.getMinutes(date) * 60 + utils.getSeconds(date);
};
const createIsAfterIgnoreDatePart = (disableIgnoringDatePartForTimeValidation, utils) => (dateLeft, dateRight) => {
  if (disableIgnoringDatePartForTimeValidation) {
    return utils.isAfter(dateLeft, dateRight);
  }
  return getSecondsInDay(dateLeft, utils) > getSecondsInDay(dateRight, utils);
};
const resolveTimeFormat = (utils, {
  format,
  views,
  ampm
}) => {
  if (format != null) {
    return format;
  }
  const formats = utils.formats;
  if (areViewsEqual(views, ['hours'])) {
    return ampm ? `${formats.hours12h} ${formats.meridiem}` : formats.hours24h;
  }
  if (areViewsEqual(views, ['minutes'])) {
    return formats.minutes;
  }
  if (areViewsEqual(views, ['seconds'])) {
    return formats.seconds;
  }
  if (areViewsEqual(views, ['minutes', 'seconds'])) {
    return `${formats.minutes}:${formats.seconds}`;
  }
  if (areViewsEqual(views, ['hours', 'minutes', 'seconds'])) {
    return ampm ? `${formats.hours12h}:${formats.minutes}:${formats.seconds} ${formats.meridiem}` : `${formats.hours24h}:${formats.minutes}:${formats.seconds}`;
  }
  return ampm ? `${formats.hours12h}:${formats.minutes} ${formats.meridiem}` : `${formats.hours24h}:${formats.minutes}`;
};
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/utils/getDefaultReferenceDate.js


const SECTION_TYPE_GRANULARITY = {
  year: 1,
  month: 2,
  day: 3,
  hours: 4,
  minutes: 5,
  seconds: 6,
  milliseconds: 7
};
const getSectionTypeGranularity = sections => Math.max(...sections.map(section => SECTION_TYPE_GRANULARITY[section.type] ?? 1));
const roundDate = (utils, granularity, date) => {
  if (granularity === SECTION_TYPE_GRANULARITY.year) {
    return utils.startOfYear(date);
  }
  if (granularity === SECTION_TYPE_GRANULARITY.month) {
    return utils.startOfMonth(date);
  }
  if (granularity === SECTION_TYPE_GRANULARITY.day) {
    return utils.startOfDay(date);
  }

  // We don't have startOfHour / startOfMinute / startOfSecond
  let roundedDate = date;
  if (granularity < SECTION_TYPE_GRANULARITY.minutes) {
    roundedDate = utils.setMinutes(roundedDate, 0);
  }
  if (granularity < SECTION_TYPE_GRANULARITY.seconds) {
    roundedDate = utils.setSeconds(roundedDate, 0);
  }
  if (granularity < SECTION_TYPE_GRANULARITY.milliseconds) {
    roundedDate = utils.setMilliseconds(roundedDate, 0);
  }
  return roundedDate;
};
const getDefaultReferenceDate = ({
  props,
  utils,
  granularity,
  timezone,
  getTodayDate: inGetTodayDate
}) => {
  let referenceDate = inGetTodayDate ? inGetTodayDate() : roundDate(utils, granularity, getTodayDate(utils, timezone));
  if (props.minDate != null && utils.isAfterDay(props.minDate, referenceDate)) {
    referenceDate = roundDate(utils, granularity, props.minDate);
  }
  if (props.maxDate != null && utils.isBeforeDay(props.maxDate, referenceDate)) {
    referenceDate = roundDate(utils, granularity, props.maxDate);
  }
  const isAfter = createIsAfterIgnoreDatePart(props.disableIgnoringDatePartForTimeValidation ?? false, utils);
  if (props.minTime != null && isAfter(props.minTime, referenceDate)) {
    referenceDate = roundDate(utils, granularity, props.disableIgnoringDatePartForTimeValidation ? props.minTime : mergeDateAndTime(utils, referenceDate, props.minTime));
  }
  if (props.maxTime != null && isAfter(referenceDate, props.maxTime)) {
    referenceDate = roundDate(utils, granularity, props.disableIgnoringDatePartForTimeValidation ? props.maxTime : mergeDateAndTime(utils, referenceDate, props.maxTime));
  }
  return referenceDate;
};
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/hooks/useField/useField.utils.js

const getDateSectionConfigFromFormatToken = (utils, formatToken) => {
  const config = utils.formatTokenMap[formatToken];
  if (config == null) {
    throw new Error([`MUI X: The token "${formatToken}" is not supported by the Date and Time Pickers.`, 'Please try using another token or open an issue on https://github.com/mui/mui-x/issues/new/choose if you think it should be supported.'].join('\n'));
  }
  if (typeof config === 'string') {
    return {
      type: config,
      contentType: config === 'meridiem' ? 'letter' : 'digit',
      maxLength: undefined
    };
  }
  return {
    type: config.sectionType,
    contentType: config.contentType,
    maxLength: config.maxLength
  };
};
const getDeltaFromKeyCode = keyCode => {
  switch (keyCode) {
    case 'ArrowUp':
      return 1;
    case 'ArrowDown':
      return -1;
    case 'PageUp':
      return 5;
    case 'PageDown':
      return -5;
    default:
      return 0;
  }
};
const getDaysInWeekStr = (utils, format) => {
  const elements = [];
  const now = utils.date(undefined, 'default');
  const startDate = utils.startOfWeek(now);
  const endDate = utils.endOfWeek(now);
  let current = startDate;
  while (utils.isBefore(current, endDate)) {
    elements.push(current);
    current = utils.addDays(current, 1);
  }
  return elements.map(weekDay => utils.formatByString(weekDay, format));
};
const getLetterEditingOptions = (utils, timezone, sectionType, format) => {
  switch (sectionType) {
    case 'month':
      {
        return getMonthsInYear(utils, utils.date(undefined, timezone)).map(month => utils.formatByString(month, format));
      }
    case 'weekDay':
      {
        return getDaysInWeekStr(utils, format);
      }
    case 'meridiem':
      {
        const now = utils.date(undefined, timezone);
        return [utils.startOfDay(now), utils.endOfDay(now)].map(date => utils.formatByString(date, format));
      }
    default:
      {
        return [];
      }
  }
};

// This format should be the same on all the adapters
// If some adapter does not respect this convention, then we will need to hardcode the format on each adapter.
const FORMAT_SECONDS_NO_LEADING_ZEROS = 's';
const NON_LOCALIZED_DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const getLocalizedDigits = utils => {
  const today = utils.date(undefined);
  const formattedZero = utils.formatByString(utils.setSeconds(today, 0), FORMAT_SECONDS_NO_LEADING_ZEROS);
  if (formattedZero === '0') {
    return NON_LOCALIZED_DIGITS;
  }
  return Array.from({
    length: 10
  }).map((_, index) => utils.formatByString(utils.setSeconds(today, index), FORMAT_SECONDS_NO_LEADING_ZEROS));
};
const removeLocalizedDigits = (valueStr, localizedDigits) => {
  if (localizedDigits[0] === '0') {
    return valueStr;
  }
  const digits = [];
  let currentFormattedDigit = '';
  for (let i = 0; i < valueStr.length; i += 1) {
    currentFormattedDigit += valueStr[i];
    const matchingDigitIndex = localizedDigits.indexOf(currentFormattedDigit);
    if (matchingDigitIndex > -1) {
      digits.push(matchingDigitIndex.toString());
      currentFormattedDigit = '';
    }
  }
  return digits.join('');
};
const applyLocalizedDigits = (valueStr, localizedDigits) => {
  if (localizedDigits[0] === '0') {
    return valueStr;
  }
  return valueStr.split('').map(char => localizedDigits[Number(char)]).join('');
};
const isStringNumber = (valueStr, localizedDigits) => {
  const nonLocalizedValueStr = removeLocalizedDigits(valueStr, localizedDigits);
  // `Number(' ')` returns `0` even if ' ' is not a valid number.
  return nonLocalizedValueStr !== ' ' && !Number.isNaN(Number(nonLocalizedValueStr));
};

/**
 * Remove the leading zeroes to a digit section value.
 * E.g.: `03` => `3`
 * Warning: Should only be called with non-localized digits. Call `removeLocalizedDigits` with your value if needed.
 */
const cleanLeadingZeros = (valueStr, size) => {
  let cleanValueStr = valueStr;

  // Remove the leading zeros
  cleanValueStr = Number(cleanValueStr).toString();

  // Add enough leading zeros to fill the section
  while (cleanValueStr.length < size) {
    cleanValueStr = `0${cleanValueStr}`;
  }
  return cleanValueStr;
};
const cleanDigitSectionValue = (utils, value, sectionBoundaries, localizedDigits, section) => {
  if (false) {}
  if (section.type === 'day' && section.contentType === 'digit-with-letter') {
    const date = utils.setDate(sectionBoundaries.longestMonth, value);
    return utils.formatByString(date, section.format);
  }

  // queryValue without leading `0` (`01` => `1`)
  let valueStr = value.toString();
  if (section.hasLeadingZerosInInput) {
    valueStr = cleanLeadingZeros(valueStr, section.maxLength);
  }
  return applyLocalizedDigits(valueStr, localizedDigits);
};
const adjustSectionValue = (utils, timezone, section, keyCode, sectionsValueBoundaries, localizedDigits, activeDate, stepsAttributes) => {
  const delta = getDeltaFromKeyCode(keyCode);
  const isStart = keyCode === 'Home';
  const isEnd = keyCode === 'End';
  const shouldSetAbsolute = section.value === '' || isStart || isEnd;
  const adjustDigitSection = () => {
    const sectionBoundaries = sectionsValueBoundaries[section.type]({
      currentDate: activeDate,
      format: section.format,
      contentType: section.contentType
    });
    const getCleanValue = value => cleanDigitSectionValue(utils, value, sectionBoundaries, localizedDigits, section);
    const step = section.type === 'minutes' && stepsAttributes?.minutesStep ? stepsAttributes.minutesStep : 1;
    let newSectionValueNumber;
    if (shouldSetAbsolute) {
      if (section.type === 'year' && !isEnd && !isStart) {
        return utils.formatByString(utils.date(undefined, timezone), section.format);
      }
      if (delta > 0 || isStart) {
        newSectionValueNumber = sectionBoundaries.minimum;
      } else {
        newSectionValueNumber = sectionBoundaries.maximum;
      }
    } else {
      const currentSectionValue = parseInt(removeLocalizedDigits(section.value, localizedDigits), 10);
      newSectionValueNumber = currentSectionValue + delta * step;
    }
    if (newSectionValueNumber % step !== 0) {
      if (delta < 0 || isStart) {
        newSectionValueNumber += step - (step + newSectionValueNumber) % step; // for JS -3 % 5 = -3 (should be 2)
      }
      if (delta > 0 || isEnd) {
        newSectionValueNumber -= newSectionValueNumber % step;
      }
    }
    if (newSectionValueNumber > sectionBoundaries.maximum) {
      return getCleanValue(sectionBoundaries.minimum + (newSectionValueNumber - sectionBoundaries.maximum - 1) % (sectionBoundaries.maximum - sectionBoundaries.minimum + 1));
    }
    if (newSectionValueNumber < sectionBoundaries.minimum) {
      return getCleanValue(sectionBoundaries.maximum - (sectionBoundaries.minimum - newSectionValueNumber - 1) % (sectionBoundaries.maximum - sectionBoundaries.minimum + 1));
    }
    return getCleanValue(newSectionValueNumber);
  };
  const adjustLetterSection = () => {
    const options = getLetterEditingOptions(utils, timezone, section.type, section.format);
    if (options.length === 0) {
      return section.value;
    }
    if (shouldSetAbsolute) {
      if (delta > 0 || isStart) {
        return options[0];
      }
      return options[options.length - 1];
    }
    const currentOptionIndex = options.indexOf(section.value);
    const newOptionIndex = (currentOptionIndex + delta) % options.length;
    const clampedIndex = (newOptionIndex + options.length) % options.length;
    return options[clampedIndex];
  };
  if (section.contentType === 'digit' || section.contentType === 'digit-with-letter') {
    return adjustDigitSection();
  }
  return adjustLetterSection();
};
const getSectionVisibleValue = (section, target, localizedDigits) => {
  let value = section.value || section.placeholder;
  const hasLeadingZeros = target === 'non-input' ? section.hasLeadingZerosInFormat : section.hasLeadingZerosInInput;
  if (target === 'non-input' && section.hasLeadingZerosInInput && !section.hasLeadingZerosInFormat) {
    value = Number(removeLocalizedDigits(value, localizedDigits)).toString();
  }

  // In the input, we add an empty character at the end of each section without leading zeros.
  // This makes sure that `onChange` will always be fired.
  // Otherwise, when your input value equals `1/dd/yyyy` (format `M/DD/YYYY` on DayJs),
  // If you press `1`, on the first section, the new value is also `1/dd/yyyy`,
  // So the browser will not fire the input `onChange`.
  const shouldAddInvisibleSpace = ['input-rtl', 'input-ltr'].includes(target) && section.contentType === 'digit' && !hasLeadingZeros && value.length === 1;
  if (shouldAddInvisibleSpace) {
    value = `${value}\u200e`;
  }
  if (target === 'input-rtl') {
    value = `\u2068${value}\u2069`;
  }
  return value;
};
const changeSectionValueFormat = (utils, valueStr, currentFormat, newFormat) => {
  if (false) {}
  return utils.formatByString(utils.parse(valueStr, currentFormat), newFormat);
};
const isFourDigitYearFormat = (utils, format) => utils.formatByString(utils.date(undefined, 'system'), format).length === 4;
const doesSectionFormatHaveLeadingZeros = (utils, contentType, sectionType, format) => {
  if (contentType !== 'digit') {
    return false;
  }
  const now = utils.date(undefined, 'default');
  switch (sectionType) {
    // We can't use `changeSectionValueFormat`, because  `utils.parse('1', 'YYYY')` returns `1971` instead of `1`.
    case 'year':
      {
        // Remove once https://github.com/iamkun/dayjs/pull/2847 is merged and bump dayjs version
        if (utils.lib === 'dayjs' && format === 'YY') {
          return true;
        }
        return utils.formatByString(utils.setYear(now, 1), format).startsWith('0');
      }
    case 'month':
      {
        return utils.formatByString(utils.startOfYear(now), format).length > 1;
      }
    case 'day':
      {
        return utils.formatByString(utils.startOfMonth(now), format).length > 1;
      }
    case 'weekDay':
      {
        return utils.formatByString(utils.startOfWeek(now), format).length > 1;
      }
    case 'hours':
      {
        return utils.formatByString(utils.setHours(now, 1), format).length > 1;
      }
    case 'minutes':
      {
        return utils.formatByString(utils.setMinutes(now, 1), format).length > 1;
      }
    case 'seconds':
      {
        return utils.formatByString(utils.setSeconds(now, 1), format).length > 1;
      }
    default:
      {
        throw new Error('Invalid section type');
      }
  }
};

/**
 * Some date libraries like `dayjs` don't support parsing from date with escaped characters.
 * To make sure that the parsing works, we are building a format and a date without any separator.
 */
const getDateFromDateSections = (utils, sections, localizedDigits) => {
  // If we have both a day and a weekDay section,
  // Then we skip the weekDay in the parsing because libraries like dayjs can't parse complicated formats containing a weekDay.
  // dayjs(dayjs().format('dddd MMMM D YYYY'), 'dddd MMMM D YYYY')) // returns `Invalid Date` even if the format is valid.
  const shouldSkipWeekDays = sections.some(section => section.type === 'day');
  const sectionFormats = [];
  const sectionValues = [];
  for (let i = 0; i < sections.length; i += 1) {
    const section = sections[i];
    const shouldSkip = shouldSkipWeekDays && section.type === 'weekDay';
    if (!shouldSkip) {
      sectionFormats.push(section.format);
      sectionValues.push(getSectionVisibleValue(section, 'non-input', localizedDigits));
    }
  }
  const formatWithoutSeparator = sectionFormats.join(' ');
  const dateWithoutSeparatorStr = sectionValues.join(' ');
  return utils.parse(dateWithoutSeparatorStr, formatWithoutSeparator);
};
const createDateStrForV7HiddenInputFromSections = sections => sections.map(section => {
  return `${section.startSeparator}${section.value || section.placeholder}${section.endSeparator}`;
}).join('');
const createDateStrForV6InputFromSections = (sections, localizedDigits, isRtl) => {
  const formattedSections = sections.map(section => {
    const dateValue = getSectionVisibleValue(section, isRtl ? 'input-rtl' : 'input-ltr', localizedDigits);
    return `${section.startSeparator}${dateValue}${section.endSeparator}`;
  });
  const dateStr = formattedSections.join('');
  if (!isRtl) {
    return dateStr;
  }

  // \u2066: start left-to-right isolation
  // \u2067: start right-to-left isolation
  // \u2068: start first strong character isolation
  // \u2069: pop isolation
  // wrap into an isolated group such that separators can split the string in smaller ones by adding \u2069\u2068
  return `\u2066${dateStr}\u2069`;
};
const getSectionsBoundaries = (utils, localizedDigits, timezone) => {
  const today = utils.date(undefined, timezone);
  const endOfYear = utils.endOfYear(today);
  const endOfDay = utils.endOfDay(today);
  const {
    maxDaysInMonth,
    longestMonth
  } = getMonthsInYear(utils, today).reduce((acc, month) => {
    const daysInMonth = utils.getDaysInMonth(month);
    if (daysInMonth > acc.maxDaysInMonth) {
      return {
        maxDaysInMonth: daysInMonth,
        longestMonth: month
      };
    }
    return acc;
  }, {
    maxDaysInMonth: 0,
    longestMonth: null
  });
  return {
    year: ({
      format
    }) => ({
      minimum: 0,
      maximum: isFourDigitYearFormat(utils, format) ? 9999 : 99
    }),
    month: () => ({
      minimum: 1,
      // Assumption: All years have the same amount of months
      maximum: utils.getMonth(endOfYear) + 1
    }),
    day: ({
      currentDate
    }) => ({
      minimum: 1,
      maximum: currentDate != null && utils.isValid(currentDate) ? utils.getDaysInMonth(currentDate) : maxDaysInMonth,
      longestMonth: longestMonth
    }),
    weekDay: ({
      format,
      contentType
    }) => {
      if (contentType === 'digit') {
        const daysInWeek = getDaysInWeekStr(utils, format).map(Number);
        return {
          minimum: Math.min(...daysInWeek),
          maximum: Math.max(...daysInWeek)
        };
      }
      return {
        minimum: 1,
        maximum: 7
      };
    },
    hours: ({
      format
    }) => {
      const lastHourInDay = utils.getHours(endOfDay);
      const hasMeridiem = removeLocalizedDigits(utils.formatByString(utils.endOfDay(today), format), localizedDigits) !== lastHourInDay.toString();
      if (hasMeridiem) {
        return {
          minimum: 1,
          maximum: Number(removeLocalizedDigits(utils.formatByString(utils.startOfDay(today), format), localizedDigits))
        };
      }
      return {
        minimum: 0,
        maximum: lastHourInDay
      };
    },
    minutes: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of minutes
      maximum: utils.getMinutes(endOfDay)
    }),
    seconds: () => ({
      minimum: 0,
      // Assumption: All years have the same amount of seconds
      maximum: utils.getSeconds(endOfDay)
    }),
    meridiem: () => ({
      minimum: 0,
      maximum: 1
    }),
    empty: () => ({
      minimum: 0,
      maximum: 0
    })
  };
};
let warnedOnceInvalidSection = false;
const validateSections = (sections, valueType) => {
  if (false) {}
};
const transferDateSectionValue = (utils, section, dateToTransferFrom, dateToTransferTo) => {
  switch (section.type) {
    case 'year':
      {
        return utils.setYear(dateToTransferTo, utils.getYear(dateToTransferFrom));
      }
    case 'month':
      {
        return utils.setMonth(dateToTransferTo, utils.getMonth(dateToTransferFrom));
      }
    case 'weekDay':
      {
        const formattedDaysInWeek = getDaysInWeekStr(utils, section.format);
        const dayInWeekStrOfActiveDate = utils.formatByString(dateToTransferFrom, section.format);
        const dayInWeekOfActiveDate = formattedDaysInWeek.indexOf(dayInWeekStrOfActiveDate);
        const dayInWeekOfNewSectionValue = formattedDaysInWeek.indexOf(section.value);
        const diff = dayInWeekOfNewSectionValue - dayInWeekOfActiveDate;
        return utils.addDays(dateToTransferFrom, diff);
      }
    case 'day':
      {
        return utils.setDate(dateToTransferTo, utils.getDate(dateToTransferFrom));
      }
    case 'meridiem':
      {
        const isAM = utils.getHours(dateToTransferFrom) < 12;
        const mergedDateHours = utils.getHours(dateToTransferTo);
        if (isAM && mergedDateHours >= 12) {
          return utils.addHours(dateToTransferTo, -12);
        }
        if (!isAM && mergedDateHours < 12) {
          return utils.addHours(dateToTransferTo, 12);
        }
        return dateToTransferTo;
      }
    case 'hours':
      {
        return utils.setHours(dateToTransferTo, utils.getHours(dateToTransferFrom));
      }
    case 'minutes':
      {
        return utils.setMinutes(dateToTransferTo, utils.getMinutes(dateToTransferFrom));
      }
    case 'seconds':
      {
        return utils.setSeconds(dateToTransferTo, utils.getSeconds(dateToTransferFrom));
      }
    default:
      {
        return dateToTransferTo;
      }
  }
};
const reliableSectionModificationOrder = {
  year: 1,
  month: 2,
  day: 3,
  weekDay: 4,
  hours: 5,
  minutes: 6,
  seconds: 7,
  meridiem: 8,
  empty: 9
};
const mergeDateIntoReferenceDate = (utils, dateToTransferFrom, sections, referenceDate, shouldLimitToEditedSections) =>
// cloning sections before sort to avoid mutating it
[...sections].sort((a, b) => reliableSectionModificationOrder[a.type] - reliableSectionModificationOrder[b.type]).reduce((mergedDate, section) => {
  if (!shouldLimitToEditedSections || section.modified) {
    return transferDateSectionValue(utils, section, dateToTransferFrom, mergedDate);
  }
  return mergedDate;
}, referenceDate);
const isAndroid = () => navigator.userAgent.toLowerCase().includes('android');

// TODO v8: Remove if we drop the v6 TextField approach.
const getSectionOrder = (sections, shouldApplyRTL) => {
  const neighbors = {};
  if (!shouldApplyRTL) {
    sections.forEach((_, index) => {
      const leftIndex = index === 0 ? null : index - 1;
      const rightIndex = index === sections.length - 1 ? null : index + 1;
      neighbors[index] = {
        leftIndex,
        rightIndex
      };
    });
    return {
      neighbors,
      startIndex: 0,
      endIndex: sections.length - 1
    };
  }
  const rtl2ltr = {};
  const ltr2rtl = {};
  let groupedSectionsStart = 0;
  let groupedSectionsEnd = 0;
  let RTLIndex = sections.length - 1;
  while (RTLIndex >= 0) {
    groupedSectionsEnd = sections.findIndex(
    // eslint-disable-next-line @typescript-eslint/no-loop-func
    (section, index) => index >= groupedSectionsStart && section.endSeparator?.includes(' ') &&
    // Special case where the spaces were not there in the initial input
    section.endSeparator !== ' / ');
    if (groupedSectionsEnd === -1) {
      groupedSectionsEnd = sections.length - 1;
    }
    for (let i = groupedSectionsEnd; i >= groupedSectionsStart; i -= 1) {
      ltr2rtl[i] = RTLIndex;
      rtl2ltr[RTLIndex] = i;
      RTLIndex -= 1;
    }
    groupedSectionsStart = groupedSectionsEnd + 1;
  }
  sections.forEach((_, index) => {
    const rtlIndex = ltr2rtl[index];
    const leftIndex = rtlIndex === 0 ? null : rtl2ltr[rtlIndex - 1];
    const rightIndex = rtlIndex === sections.length - 1 ? null : rtl2ltr[rtlIndex + 1];
    neighbors[index] = {
      leftIndex,
      rightIndex
    };
  });
  return {
    neighbors,
    startIndex: rtl2ltr[0],
    endIndex: rtl2ltr[sections.length - 1]
  };
};
const parseSelectedSections = (selectedSections, sections) => {
  if (selectedSections == null) {
    return null;
  }
  if (selectedSections === 'all') {
    return 'all';
  }
  if (typeof selectedSections === 'string') {
    const index = sections.findIndex(section => section.type === selectedSections);
    return index === -1 ? null : index;
  }
  return selectedSections;
};
const getSectionValueText = (section, utils) => {
  if (!section.value) {
    return undefined;
  }
  switch (section.type) {
    case 'month':
      {
        if (section.contentType === 'digit') {
          return utils.format(utils.setMonth(utils.date(), Number(section.value) - 1), 'month');
        }
        const parsedDate = utils.parse(section.value, section.format);
        return parsedDate ? utils.format(parsedDate, 'month') : undefined;
      }
    case 'day':
      return section.contentType === 'digit' ? utils.format(utils.setDate(utils.startOfYear(utils.date()), Number(section.value)), 'dayOfMonthFull') : section.value;
    case 'weekDay':
      // TODO: improve by providing the label of the week day
      return undefined;
    default:
      return undefined;
  }
};
const getSectionValueNow = (section, utils) => {
  if (!section.value) {
    return undefined;
  }
  switch (section.type) {
    case 'weekDay':
      {
        if (section.contentType === 'letter') {
          // TODO: improve by resolving the week day number from a letter week day
          return undefined;
        }
        return Number(section.value);
      }
    case 'meridiem':
      {
        const parsedDate = utils.parse(`01:00 ${section.value}`, `${utils.formats.hours12h}:${utils.formats.minutes} ${section.format}`);
        if (parsedDate) {
          return utils.getHours(parsedDate) >= 12 ? 1 : 0;
        }
        return undefined;
      }
    case 'day':
      return section.contentType === 'digit-with-letter' ? parseInt(section.value, 10) : Number(section.value);
    case 'month':
      {
        if (section.contentType === 'digit') {
          return Number(section.value);
        }
        const parsedDate = utils.parse(section.value, section.format);
        return parsedDate ? utils.getMonth(parsedDate) + 1 : undefined;
      }
    default:
      return section.contentType !== 'letter' ? Number(section.value) : undefined;
  }
};
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/utils/valueManagers.js

const _excluded = ["value", "referenceDate"];



const singleItemValueManager = {
  emptyValue: null,
  getTodayValue: getTodayDate,
  getInitialReferenceValue: _ref => {
    let {
        value,
        referenceDate
      } = _ref,
      params = (0,objectWithoutPropertiesLoose/* default */.A)(_ref, _excluded);
    if (value != null && params.utils.isValid(value)) {
      return value;
    }
    if (referenceDate != null) {
      return referenceDate;
    }
    return getDefaultReferenceDate(params);
  },
  cleanValue: replaceInvalidDateByNull,
  areValuesEqual: areDatesEqual,
  isSameError: (a, b) => a === b,
  hasError: error => error != null,
  defaultErrorState: null,
  getTimezone: (utils, value) => value == null || !utils.isValid(value) ? null : utils.getTimezone(value),
  setTimezone: (utils, timezone, value) => value == null ? null : utils.setTimezone(value, timezone)
};
const singleItemFieldValueManager = {
  updateReferenceValue: (utils, value, prevReferenceValue) => value == null || !utils.isValid(value) ? prevReferenceValue : value,
  getSectionsFromValue: (utils, date, prevSections, getSectionsFromDate) => {
    const shouldReUsePrevDateSections = !utils.isValid(date) && !!prevSections;
    if (shouldReUsePrevDateSections) {
      return prevSections;
    }
    return getSectionsFromDate(date);
  },
  getV7HiddenInputValueFromSections: createDateStrForV7HiddenInputFromSections,
  getV6InputValueFromSections: createDateStrForV6InputFromSections,
  getActiveDateManager: (utils, state) => ({
    date: state.value,
    referenceDate: state.referenceValue,
    getSections: sections => sections,
    getNewValuesFromNewActiveDate: newActiveDate => ({
      value: newActiveDate,
      referenceValue: newActiveDate == null || !utils.isValid(newActiveDate) ? state.referenceValue : newActiveDate
    })
  }),
  parseValueStr: (valueStr, referenceValue, parseDate) => parseDate(valueStr.trim(), referenceValue)
};
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/LocalizationProvider/LocalizationProvider.js
var LocalizationProvider = __webpack_require__(38536);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/locales/utils/getPickersLocalization.js

const getPickersLocalization = pickersTranslations => {
  return {
    components: {
      MuiLocalizationProvider: {
        defaultProps: {
          localeText: (0,esm_extends/* default */.A)({}, pickersTranslations)
        }
      }
    }
  };
};
const buildGetOpenDialogAriaText = params => {
  const {
    utils,
    formatKey,
    contextTranslation,
    propsTranslation
  } = params;
  return value => {
    const formattedValue = value !== null && utils.isValid(value) ? utils.format(value, formatKey) : null;
    const translation = propsTranslation ?? contextTranslation;
    return translation(value, utils, formattedValue);
  };
};
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/locales/enUS.js


// This object is not Partial<PickersLocaleText> because it is the default values

const enUSPickers = {
  // Calendar navigation
  previousMonth: 'Previous month',
  nextMonth: 'Next month',
  // View navigation
  openPreviousView: 'Open previous view',
  openNextView: 'Open next view',
  calendarViewSwitchingButtonAriaLabel: view => view === 'year' ? 'year view is open, switch to calendar view' : 'calendar view is open, switch to year view',
  // DateRange labels
  start: 'Start',
  end: 'End',
  startDate: 'Start date',
  startTime: 'Start time',
  endDate: 'End date',
  endTime: 'End time',
  // Action bar
  cancelButtonLabel: 'Cancel',
  clearButtonLabel: 'Clear',
  okButtonLabel: 'OK',
  todayButtonLabel: 'Today',
  // Toolbar titles
  datePickerToolbarTitle: 'Select date',
  dateTimePickerToolbarTitle: 'Select date & time',
  timePickerToolbarTitle: 'Select time',
  dateRangePickerToolbarTitle: 'Select date range',
  // Clock labels
  clockLabelText: (view, time, utils, formattedTime) => `Select ${view}. ${!formattedTime && (time === null || !utils.isValid(time)) ? 'No time selected' : `Selected time is ${formattedTime ?? utils.format(time, 'fullTime')}`}`,
  hoursClockNumberText: hours => `${hours} hours`,
  minutesClockNumberText: minutes => `${minutes} minutes`,
  secondsClockNumberText: seconds => `${seconds} seconds`,
  // Digital clock labels
  selectViewText: view => `Select ${view}`,
  // Calendar labels
  calendarWeekNumberHeaderLabel: 'Week number',
  calendarWeekNumberHeaderText: '#',
  calendarWeekNumberAriaLabelText: weekNumber => `Week ${weekNumber}`,
  calendarWeekNumberText: weekNumber => `${weekNumber}`,
  // Open picker labels
  openDatePickerDialogue: (value, utils, formattedDate) => formattedDate || value !== null && utils.isValid(value) ? `Choose date, selected date is ${formattedDate ?? utils.format(value, 'fullDate')}` : 'Choose date',
  openTimePickerDialogue: (value, utils, formattedTime) => formattedTime || value !== null && utils.isValid(value) ? `Choose time, selected time is ${formattedTime ?? utils.format(value, 'fullTime')}` : 'Choose time',
  fieldClearLabel: 'Clear',
  // Table labels
  timeTableLabel: 'pick time',
  dateTableLabel: 'pick date',
  // Field section placeholders
  fieldYearPlaceholder: params => 'Y'.repeat(params.digitAmount),
  fieldMonthPlaceholder: params => params.contentType === 'letter' ? 'MMMM' : 'MM',
  fieldDayPlaceholder: () => 'DD',
  fieldWeekDayPlaceholder: params => params.contentType === 'letter' ? 'EEEE' : 'EE',
  fieldHoursPlaceholder: () => 'hh',
  fieldMinutesPlaceholder: () => 'mm',
  fieldSecondsPlaceholder: () => 'ss',
  fieldMeridiemPlaceholder: () => 'aa',
  // View names
  year: 'Year',
  month: 'Month',
  day: 'Day',
  weekDay: 'Week day',
  hours: 'Hours',
  minutes: 'Minutes',
  seconds: 'Seconds',
  meridiem: 'Meridiem',
  // Common
  empty: 'Empty'
};
const DEFAULT_LOCALE = enUSPickers;
const enUS = getPickersLocalization(enUSPickers);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/hooks/useUtils.js




const useLocalizationContext = () => {
  const localization = react.useContext(LocalizationProvider/* MuiPickersAdapterContext */.F);
  if (localization === null) {
    throw new Error(['MUI X: Can not find the date and time pickers localization context.', 'It looks like you forgot to wrap your component in LocalizationProvider.', 'This can also happen if you are bundling multiple versions of the `@mui/x-date-pickers` package'].join('\n'));
  }
  if (localization.utils === null) {
    throw new Error(['MUI X: Can not find the date and time pickers adapter from its localization context.', 'It looks like you forgot to pass a `dateAdapter` to your LocalizationProvider.'].join('\n'));
  }
  const localeText = react.useMemo(() => (0,esm_extends/* default */.A)({}, DEFAULT_LOCALE, localization.localeText), [localization.localeText]);
  return react.useMemo(() => (0,esm_extends/* default */.A)({}, localization, {
    localeText
  }), [localization, localeText]);
};
const useUtils_useUtils = () => useLocalizationContext().utils;
const useUtils_useDefaultDates = () => useLocalizationContext().defaultDates;
const useNow = timezone => {
  const utils = useUtils_useUtils();
  const now = react.useRef(undefined);
  if (now.current === undefined) {
    now.current = utils.date(undefined, timezone);
  }
  return now.current;
};
// EXTERNAL MODULE: ./node_modules/.pnpm/clsx@2.1.1/node_modules/clsx/dist/clsx.mjs
var clsx = __webpack_require__(13526);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/styleFunctionSx/extendSxProp.js
var extendSxProp = __webpack_require__(43347);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/composeClasses/composeClasses.js
var composeClasses = __webpack_require__(70927);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/styles/styled.js
var styled = __webpack_require__(38209);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/DefaultPropsProvider/DefaultPropsProvider.js
var DefaultPropsProvider = __webpack_require__(10684);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/utils/capitalize.js
var capitalize = __webpack_require__(30825);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js
var generateUtilityClasses = __webpack_require__(49505);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js + 1 modules
var generateUtilityClass_generateUtilityClass = __webpack_require__(34772);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Typography/typographyClasses.js


function getTypographyUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiTypography', slot);
}
const typographyClasses = (0,generateUtilityClasses/* default */.A)('MuiTypography', ['root', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'subtitle1', 'subtitle2', 'body1', 'body2', 'inherit', 'button', 'caption', 'overline', 'alignLeft', 'alignRight', 'alignCenter', 'alignJustify', 'noWrap', 'gutterBottom', 'paragraph']);
/* harmony default export */ const Typography_typographyClasses = ((/* unused pure expression or super */ null && (typographyClasses)));
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Typography/Typography.js
'use client';



const Typography_excluded = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"];










const useUtilityClasses = ownerState => {
  const {
    align,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ['root', variant, ownerState.align !== 'inherit' && `align${(0,capitalize/* default */.A)(align)}`, gutterBottom && 'gutterBottom', noWrap && 'noWrap', paragraph && 'paragraph']
  };
  return (0,composeClasses/* default */.A)(slots, getTypographyUtilityClass, classes);
};
const TypographyRoot = (0,styled/* default */.Ay)('span', {
  name: 'MuiTypography',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.variant && styles[ownerState.variant], ownerState.align !== 'inherit' && styles[`align${(0,capitalize/* default */.A)(ownerState.align)}`], ownerState.noWrap && styles.noWrap, ownerState.gutterBottom && styles.gutterBottom, ownerState.paragraph && styles.paragraph];
  }
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.A)({
  margin: 0
}, ownerState.variant === 'inherit' && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: 'inherit'
}, ownerState.variant !== 'inherit' && theme.typography[ownerState.variant], ownerState.align !== 'inherit' && {
  textAlign: ownerState.align
}, ownerState.noWrap && {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}, ownerState.gutterBottom && {
  marginBottom: '0.35em'
}, ownerState.paragraph && {
  marginBottom: 16
}));
const defaultVariantMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle1: 'h6',
  subtitle2: 'h6',
  body1: 'p',
  body2: 'p',
  inherit: 'p'
};

// TODO v6: deprecate these color values in v5.x and remove the transformation in v6
const colorTransformations = {
  primary: 'primary.main',
  textPrimary: 'text.primary',
  secondary: 'secondary.main',
  textSecondary: 'text.secondary',
  error: 'error.main'
};
const transformDeprecatedColors = color => {
  return colorTransformations[color] || color;
};
const Typography = /*#__PURE__*/react.forwardRef(function Typography(inProps, ref) {
  const themeProps = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiTypography'
  });
  const color = transformDeprecatedColors(themeProps.color);
  const props = (0,extendSxProp/* default */.A)((0,esm_extends/* default */.A)({}, themeProps, {
    color
  }));
  const {
      align = 'inherit',
      className,
      component,
      gutterBottom = false,
      noWrap = false,
      paragraph = false,
      variant = 'body1',
      variantMapping = defaultVariantMapping
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, Typography_excluded);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    align,
    color,
    className,
    component,
    gutterBottom,
    noWrap,
    paragraph,
    variant,
    variantMapping
  });
  const Component = component || (paragraph ? 'p' : variantMapping[variant] || defaultVariantMapping[variant]) || 'span';
  const classes = useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TypographyRoot, (0,esm_extends/* default */.A)({
    as: Component,
    ref: ref,
    ownerState: ownerState,
    className: (0,clsx/* default */.A)(classes.root, className)
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const Typography_Typography = (Typography);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/components/pickersToolbarClasses.js

function getPickersToolbarUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiPickersToolbar', slot);
}
const pickersToolbarClasses = (0,generateUtilityClasses/* default */.A)('MuiPickersToolbar', ['root', 'content']);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/components/PickersToolbar.js


const PickersToolbar_excluded = ["children", "className", "toolbarTitle", "hidden", "titleId", "isLandscape", "classes", "landscapeDirection"];







const PickersToolbar_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    content: ['content']
  };
  return (0,composeClasses/* default */.A)(slots, getPickersToolbarUtilityClass, classes);
};
const PickersToolbarRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiPickersToolbar',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: theme.spacing(2, 3),
  variants: [{
    props: {
      isLandscape: true
    },
    style: {
      height: 'auto',
      maxWidth: 160,
      padding: 16,
      justifyContent: 'flex-start',
      flexWrap: 'wrap'
    }
  }]
}));
const PickersToolbarContent = (0,styled/* default */.Ay)('div', {
  name: 'MuiPickersToolbar',
  slot: 'Content',
  overridesResolver: (props, styles) => styles.content
})({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  flex: 1,
  justifyContent: 'space-between',
  alignItems: 'center',
  flexDirection: 'row',
  variants: [{
    props: {
      isLandscape: true
    },
    style: {
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      flexDirection: 'column'
    }
  }, {
    props: {
      isLandscape: true,
      landscapeDirection: 'row'
    },
    style: {
      flexDirection: 'row'
    }
  }]
});
const PickersToolbar = /*#__PURE__*/react.forwardRef(function PickersToolbar(inProps, ref) {
  const props = (0,useThemeProps/* default */.A)({
    props: inProps,
    name: 'MuiPickersToolbar'
  });
  const {
      children,
      className,
      toolbarTitle,
      hidden,
      titleId
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, PickersToolbar_excluded);
  const ownerState = props;
  const classes = PickersToolbar_useUtilityClasses(ownerState);
  if (hidden) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(PickersToolbarRoot, (0,esm_extends/* default */.A)({
    ref: ref,
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: ownerState
  }, other, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Typography_Typography, {
      color: "text.secondary",
      variant: "overline",
      id: titleId,
      children: toolbarTitle
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(PickersToolbarContent, {
      className: classes.content,
      ownerState: ownerState,
      children: children
    })]
  }));
});
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/hooks/usePickersTranslations.js
'use client';


const usePickersTranslations = () => useLocalizationContext().localeText;
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/DatePicker/datePickerToolbarClasses.js

function getDatePickerToolbarUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiDatePickerToolbar', slot);
}
const datePickerToolbarClasses = (0,generateUtilityClasses/* default */.A)('MuiDatePickerToolbar', ['root', 'title']);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/DatePicker/DatePickerToolbar.js
'use client';



const DatePickerToolbar_excluded = ["value", "isLandscape", "onChange", "toolbarFormat", "toolbarPlaceholder", "views", "className", "onViewChange", "view"];












const DatePickerToolbar_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    title: ['title']
  };
  return (0,composeClasses/* default */.A)(slots, getDatePickerToolbarUtilityClass, classes);
};
const DatePickerToolbarRoot = (0,styled/* default */.Ay)(PickersToolbar, {
  name: 'MuiDatePickerToolbar',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})({});
const DatePickerToolbarTitle = (0,styled/* default */.Ay)(Typography_Typography, {
  name: 'MuiDatePickerToolbar',
  slot: 'Title',
  overridesResolver: (_, styles) => styles.title
})({
  variants: [{
    props: {
      isLandscape: true
    },
    style: {
      margin: 'auto 16px auto auto'
    }
  }]
});
/**
 * Demos:
 *
 * - [DatePicker](https://mui.com/x/react-date-pickers/date-picker/)
 * - [Custom components](https://mui.com/x/react-date-pickers/custom-components/)
 *
 * API:
 *
 * - [DatePickerToolbar API](https://mui.com/x/api/date-pickers/date-picker-toolbar/)
 */
const DatePickerToolbar = /*#__PURE__*/react.forwardRef(function DatePickerToolbar(inProps, ref) {
  const props = (0,useThemeProps/* default */.A)({
    props: inProps,
    name: 'MuiDatePickerToolbar'
  });
  const {
      value,
      isLandscape,
      toolbarFormat,
      toolbarPlaceholder = '––',
      views,
      className
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, DatePickerToolbar_excluded);
  const utils = useUtils_useUtils();
  const translations = usePickersTranslations();
  const classes = DatePickerToolbar_useUtilityClasses(props);
  const dateText = react.useMemo(() => {
    if (!value) {
      return toolbarPlaceholder;
    }
    const formatFromViews = resolveDateFormat(utils, {
      format: toolbarFormat,
      views
    }, true);
    return utils.formatByString(value, formatFromViews);
  }, [value, toolbarFormat, toolbarPlaceholder, utils, views]);
  const ownerState = props;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(DatePickerToolbarRoot, (0,esm_extends/* default */.A)({
    ref: ref,
    toolbarTitle: translations.datePickerToolbarTitle,
    isLandscape: isLandscape,
    className: (0,clsx/* default */.A)(classes.root, className)
  }, other, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(DatePickerToolbarTitle, {
      variant: "h4",
      align: isLandscape ? 'left' : 'center',
      ownerState: ownerState,
      className: classes.title,
      children: dateText
    })
  }));
});
 false ? 0 : void 0;
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/DatePicker/shared.js







function useDatePickerDefaultizedProps(props, name) {
  const utils = useUtils_useUtils();
  const defaultDates = useUtils_useDefaultDates();
  const themeProps = (0,useThemeProps/* default */.A)({
    props,
    name
  });
  const localeText = react.useMemo(() => {
    if (themeProps.localeText?.toolbarTitle == null) {
      return themeProps.localeText;
    }
    return (0,esm_extends/* default */.A)({}, themeProps.localeText, {
      datePickerToolbarTitle: themeProps.localeText.toolbarTitle
    });
  }, [themeProps.localeText]);
  return (0,esm_extends/* default */.A)({}, themeProps, {
    localeText
  }, applyDefaultViewProps({
    views: themeProps.views,
    openTo: themeProps.openTo,
    defaultViews: ['year', 'day'],
    defaultOpenTo: 'day'
  }), {
    disableFuture: themeProps.disableFuture ?? false,
    disablePast: themeProps.disablePast ?? false,
    minDate: date_utils_applyDefaultDate(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: date_utils_applyDefaultDate(utils, themeProps.maxDate, defaultDates.maxDate),
    slots: (0,esm_extends/* default */.A)({
      toolbar: DatePickerToolbar
    }, themeProps.slots)
  });
}
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/validation/extractValidationProps.js
const DATE_VALIDATION_PROP_NAMES = ['disablePast', 'disableFuture', 'minDate', 'maxDate', 'shouldDisableDate', 'shouldDisableMonth', 'shouldDisableYear'];
const TIME_VALIDATION_PROP_NAMES = ['disablePast', 'disableFuture', 'minTime', 'maxTime', 'shouldDisableTime', 'minutesStep', 'ampm', 'disableIgnoringDatePartForTimeValidation'];
const DATE_TIME_VALIDATION_PROP_NAMES = ['minDateTime', 'maxDateTime'];
const VALIDATION_PROP_NAMES = [...DATE_VALIDATION_PROP_NAMES, ...TIME_VALIDATION_PROP_NAMES, ...DATE_TIME_VALIDATION_PROP_NAMES];
/**
 * Extract the validation props for the props received by a component.
 * Limit the risk of forgetting some of them and reduce the bundle size.
 */
const extractValidationProps = props => VALIDATION_PROP_NAMES.reduce((extractedProps, propName) => {
  if (props.hasOwnProperty(propName)) {
    extractedProps[propName] = props[propName];
  }
  return extractedProps;
}, {});
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/validation/validateDate.js


const validateDate = ({
  props,
  value,
  timezone,
  adapter
}) => {
  if (value === null) {
    return null;
  }
  const {
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    disablePast,
    disableFuture
  } = props;
  const now = adapter.utils.date(undefined, timezone);
  const minDate = date_utils_applyDefaultDate(adapter.utils, props.minDate, adapter.defaultDates.minDate);
  const maxDate = date_utils_applyDefaultDate(adapter.utils, props.maxDate, adapter.defaultDates.maxDate);
  switch (true) {
    case !adapter.utils.isValid(value):
      return 'invalidDate';
    case Boolean(shouldDisableDate && shouldDisableDate(value)):
      return 'shouldDisableDate';
    case Boolean(shouldDisableMonth && shouldDisableMonth(value)):
      return 'shouldDisableMonth';
    case Boolean(shouldDisableYear && shouldDisableYear(value)):
      return 'shouldDisableYear';
    case Boolean(disableFuture && adapter.utils.isAfterDay(value, now)):
      return 'disableFuture';
    case Boolean(disablePast && adapter.utils.isBeforeDay(value, now)):
      return 'disablePast';
    case Boolean(minDate && adapter.utils.isBeforeDay(value, minDate)):
      return 'minDate';
    case Boolean(maxDate && adapter.utils.isAfterDay(value, maxDate)):
      return 'maxDate';
    default:
      return null;
  }
};
validateDate.valueManager = singleItemValueManager;
;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/setRef/setRef.js
/**
 * TODO v5: consider making it private
 *
 * passes {value} to {ref}
 *
 * WARNING: Be sure to only call this inside a callback that is passed as a ref.
 * Otherwise, make sure to cleanup the previous {ref} if it changes. See
 * https://github.com/mui/material-ui/issues/13539
 *
 * Useful if you want to expose the ref of an inner component to the public API
 * while still using it inside the component.
 * @param ref A ref callback or ref object. If anything falsy, this is a no-op.
 */
function setRef(ref, value) {
  if (typeof ref === 'function') {
    ref(value);
  } else if (ref) {
    ref.current = value;
  }
}
;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/useForkRef/useForkRef.js
'use client';



function useForkRef(...refs) {
  /**
   * This will create a new function if the refs passed to this hook change and are all defined.
   * This means react will call the old forkRef with `null` and the new forkRef
   * with the ref. Cleanup naturally emerges from this behavior.
   */
  return react.useMemo(() => {
    if (refs.every(ref => ref == null)) {
      return null;
    }
    return instance => {
      refs.forEach(ref => {
        setRef(ref, instance);
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, refs);
}
;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/isHostComponent/isHostComponent.js
/**
 * Determines if a given element is a DOM element name (i.e. not a React component).
 */
function isHostComponent(element) {
  return typeof element === 'string';
}
/* harmony default export */ const isHostComponent_isHostComponent = (isHostComponent);
;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/appendOwnerState/appendOwnerState.js



/**
 * Type of the ownerState based on the type of an element it applies to.
 * This resolves to the provided OwnerState for React components and `undefined` for host components.
 * Falls back to `OwnerState | undefined` when the exact type can't be determined in development time.
 */

/**
 * Appends the ownerState object to the props, merging with the existing one if necessary.
 *
 * @param elementType Type of the element that owns the `existingProps`. If the element is a DOM node or undefined, `ownerState` is not applied.
 * @param otherProps Props of the element.
 * @param ownerState
 */
function appendOwnerState(elementType, otherProps, ownerState) {
  if (elementType === undefined || isHostComponent_isHostComponent(elementType)) {
    return otherProps;
  }
  return (0,esm_extends/* default */.A)({}, otherProps, {
    ownerState: (0,esm_extends/* default */.A)({}, otherProps.ownerState, ownerState)
  });
}
/* harmony default export */ const appendOwnerState_appendOwnerState = (appendOwnerState);
;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/extractEventHandlers/extractEventHandlers.js
/**
 * Extracts event handlers from a given object.
 * A prop is considered an event handler if it is a function and its name starts with `on`.
 *
 * @param object An object to extract event handlers from.
 * @param excludeKeys An array of keys to exclude from the returned object.
 */
function extractEventHandlers(object, excludeKeys = []) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => prop.match(/^on[A-Z]/) && typeof object[prop] === 'function' && !excludeKeys.includes(prop)).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}
/* harmony default export */ const extractEventHandlers_extractEventHandlers = (extractEventHandlers);
;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/omitEventHandlers/omitEventHandlers.js
/**
 * Removes event handlers from the given object.
 * A field is considered an event handler if it is a function with a name beginning with `on`.
 *
 * @param object Object to remove event handlers from.
 * @returns Object with event handlers removed.
 */
function omitEventHandlers(object) {
  if (object === undefined) {
    return {};
  }
  const result = {};
  Object.keys(object).filter(prop => !(prop.match(/^on[A-Z]/) && typeof object[prop] === 'function')).forEach(prop => {
    result[prop] = object[prop];
  });
  return result;
}
/* harmony default export */ const omitEventHandlers_omitEventHandlers = (omitEventHandlers);
;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/mergeSlotProps/mergeSlotProps.js




/**
 * Merges the slot component internal props (usually coming from a hook)
 * with the externally provided ones.
 *
 * The merge order is (the latter overrides the former):
 * 1. The internal props (specified as a getter function to work with get*Props hook result)
 * 2. Additional props (specified internally on a Base UI component)
 * 3. External props specified on the owner component. These should only be used on a root slot.
 * 4. External props specified in the `slotProps.*` prop.
 * 5. The `className` prop - combined from all the above.
 * @param parameters
 * @returns
 */
function mergeSlotProps(parameters) {
  const {
    getSlotProps,
    additionalProps,
    externalSlotProps,
    externalForwardedProps,
    className
  } = parameters;
  if (!getSlotProps) {
    // The simpler case - getSlotProps is not defined, so no internal event handlers are defined,
    // so we can simply merge all the props without having to worry about extracting event handlers.
    const joinedClasses = (0,clsx/* default */.A)(additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
    const mergedStyle = (0,esm_extends/* default */.A)({}, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
    const props = (0,esm_extends/* default */.A)({}, additionalProps, externalForwardedProps, externalSlotProps);
    if (joinedClasses.length > 0) {
      props.className = joinedClasses;
    }
    if (Object.keys(mergedStyle).length > 0) {
      props.style = mergedStyle;
    }
    return {
      props,
      internalRef: undefined
    };
  }

  // In this case, getSlotProps is responsible for calling the external event handlers.
  // We don't need to include them in the merged props because of this.

  const eventHandlers = extractEventHandlers_extractEventHandlers((0,esm_extends/* default */.A)({}, externalForwardedProps, externalSlotProps));
  const componentsPropsWithoutEventHandlers = omitEventHandlers_omitEventHandlers(externalSlotProps);
  const otherPropsWithoutEventHandlers = omitEventHandlers_omitEventHandlers(externalForwardedProps);
  const internalSlotProps = getSlotProps(eventHandlers);

  // The order of classes is important here.
  // Emotion (that we use in libraries consuming Base UI) depends on this order
  // to properly override style. It requires the most important classes to be last
  // (see https://github.com/mui/material-ui/pull/33205) for the related discussion.
  const joinedClasses = (0,clsx/* default */.A)(internalSlotProps == null ? void 0 : internalSlotProps.className, additionalProps == null ? void 0 : additionalProps.className, className, externalForwardedProps == null ? void 0 : externalForwardedProps.className, externalSlotProps == null ? void 0 : externalSlotProps.className);
  const mergedStyle = (0,esm_extends/* default */.A)({}, internalSlotProps == null ? void 0 : internalSlotProps.style, additionalProps == null ? void 0 : additionalProps.style, externalForwardedProps == null ? void 0 : externalForwardedProps.style, externalSlotProps == null ? void 0 : externalSlotProps.style);
  const props = (0,esm_extends/* default */.A)({}, internalSlotProps, additionalProps, otherPropsWithoutEventHandlers, componentsPropsWithoutEventHandlers);
  if (joinedClasses.length > 0) {
    props.className = joinedClasses;
  }
  if (Object.keys(mergedStyle).length > 0) {
    props.style = mergedStyle;
  }
  return {
    props,
    internalRef: internalSlotProps.ref
  };
}
/* harmony default export */ const mergeSlotProps_mergeSlotProps = (mergeSlotProps);
;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/useSlotProps/useSlotProps.js
'use client';



const useSlotProps_excluded = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];




/**
 * @ignore - do not document.
 * Builds the props to be passed into the slot of an unstyled component.
 * It merges the internal props of the component with the ones supplied by the user, allowing to customize the behavior.
 * If the slot component is not a host component, it also merges in the `ownerState`.
 *
 * @param parameters.getSlotProps - A function that returns the props to be passed to the slot component.
 */
function useSlotProps(parameters) {
  var _parameters$additiona;
  const {
      elementType,
      externalSlotProps,
      ownerState,
      skipResolvingSlotProps = false
    } = parameters,
    rest = (0,objectWithoutPropertiesLoose/* default */.A)(parameters, useSlotProps_excluded);
  const resolvedComponentsProps = skipResolvingSlotProps ? {} : resolveComponentProps_resolveComponentProps(externalSlotProps, ownerState);
  const {
    props: mergedProps,
    internalRef
  } = mergeSlotProps_mergeSlotProps((0,esm_extends/* default */.A)({}, rest, {
    externalSlotProps: resolvedComponentsProps
  }));
  const ref = useForkRef(internalRef, resolvedComponentsProps == null ? void 0 : resolvedComponentsProps.ref, (_parameters$additiona = parameters.additionalProps) == null ? void 0 : _parameters$additiona.ref);
  const props = appendOwnerState_appendOwnerState(elementType, (0,esm_extends/* default */.A)({}, mergedProps, {
    ref
  }), ownerState);
  return props;
}
/* harmony default export */ const useSlotProps_useSlotProps = (useSlotProps);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/FormControl/FormControlContext.js
var FormControlContext = __webpack_require__(5043);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/FormControl/useFormControl.js
var useFormControl = __webpack_require__(50635);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/InputAdornment/inputAdornmentClasses.js


function getInputAdornmentUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiInputAdornment', slot);
}
const inputAdornmentClasses = (0,generateUtilityClasses/* default */.A)('MuiInputAdornment', ['root', 'filled', 'standard', 'outlined', 'positionStart', 'positionEnd', 'disablePointerEvents', 'hiddenLabel', 'sizeSmall']);
/* harmony default export */ const InputAdornment_inputAdornmentClasses = (inputAdornmentClasses);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/InputAdornment/InputAdornment.js
'use client';



var _span;
const InputAdornment_excluded = ["children", "className", "component", "disablePointerEvents", "disableTypography", "position", "variant"];













const overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, styles[`position${(0,capitalize/* default */.A)(ownerState.position)}`], ownerState.disablePointerEvents === true && styles.disablePointerEvents, styles[ownerState.variant]];
};
const InputAdornment_useUtilityClasses = ownerState => {
  const {
    classes,
    disablePointerEvents,
    hiddenLabel,
    position,
    size,
    variant
  } = ownerState;
  const slots = {
    root: ['root', disablePointerEvents && 'disablePointerEvents', position && `position${(0,capitalize/* default */.A)(position)}`, variant, hiddenLabel && 'hiddenLabel', size && `size${(0,capitalize/* default */.A)(size)}`]
  };
  return (0,composeClasses/* default */.A)(slots, getInputAdornmentUtilityClass, classes);
};
const InputAdornmentRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiInputAdornment',
  slot: 'Root',
  overridesResolver
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.A)({
  display: 'flex',
  height: '0.01em',
  // Fix IE11 flexbox alignment. To remove at some point.
  maxHeight: '2em',
  alignItems: 'center',
  whiteSpace: 'nowrap',
  color: (theme.vars || theme).palette.action.active
}, ownerState.variant === 'filled' && {
  // Styles applied to the root element if `variant="filled"`.
  [`&.${InputAdornment_inputAdornmentClasses.positionStart}&:not(.${InputAdornment_inputAdornmentClasses.hiddenLabel})`]: {
    marginTop: 16
  }
}, ownerState.position === 'start' && {
  // Styles applied to the root element if `position="start"`.
  marginRight: 8
}, ownerState.position === 'end' && {
  // Styles applied to the root element if `position="end"`.
  marginLeft: 8
}, ownerState.disablePointerEvents === true && {
  // Styles applied to the root element if `disablePointerEvents={true}`.
  pointerEvents: 'none'
}));
const InputAdornment = /*#__PURE__*/react.forwardRef(function InputAdornment(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiInputAdornment'
  });
  const {
      children,
      className,
      component = 'div',
      disablePointerEvents = false,
      disableTypography = false,
      position,
      variant: variantProp
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, InputAdornment_excluded);
  const muiFormControl = (0,useFormControl/* default */.A)() || {};
  let variant = variantProp;
  if (variantProp && muiFormControl.variant) {
    if (false) {}
  }
  if (muiFormControl && !variant) {
    variant = muiFormControl.variant;
  }
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    hiddenLabel: muiFormControl.hiddenLabel,
    size: muiFormControl.size,
    disablePointerEvents,
    position,
    variant
  });
  const classes = InputAdornment_useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(FormControlContext/* default */.A.Provider, {
    value: null,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(InputAdornmentRoot, (0,esm_extends/* default */.A)({
      as: component,
      ownerState: ownerState,
      className: (0,clsx/* default */.A)(classes.root, className),
      ref: ref
    }, other, {
      children: typeof children === 'string' && !disableTypography ? /*#__PURE__*/(0,jsx_runtime.jsx)(Typography_Typography, {
        color: "text.secondary",
        children: children
      }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [position === 'start' ? ( /* notranslate needed while Google Translate will not fix zero-width space issue */_span || (_span = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "notranslate",
          children: "\u200B"
        }))) : null, children]
      })
    }))
  });
});
 false ? 0 : void 0;
/* harmony default export */ const InputAdornment_InputAdornment = (InputAdornment);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/colorManipulator.js
var colorManipulator = __webpack_require__(71943);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/utils/useForkRef.js
'use client';


/* harmony default export */ const utils_useForkRef = (useForkRef);
;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/useEventCallback/useEventCallback.js
'use client';




/**
 * Inspired by https://github.com/facebook/react/issues/14099#issuecomment-440013892
 * See RFC in https://github.com/reactjs/rfcs/pull/220
 */

function useEventCallback(fn) {
  const ref = react.useRef(fn);
  useEnhancedEffect_useEnhancedEffect(() => {
    ref.current = fn;
  });
  return react.useRef((...args) =>
  // @ts-expect-error hide `this`
  (0, ref.current)(...args)).current;
}
/* harmony default export */ const useEventCallback_useEventCallback = (useEventCallback);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/utils/useEventCallback.js
'use client';


/* harmony default export */ const utils_useEventCallback = (useEventCallback_useEventCallback);
;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/useLazyRef/useLazyRef.js
'use client';


const UNINITIALIZED = {};

/**
 * A React.useRef() that is initialized lazily with a function. Note that it accepts an optional
 * initialization argument, so the initialization function doesn't need to be an inline closure.
 *
 * @usage
 *   const ref = useLazyRef(sortColumns, columns)
 */
function useLazyRef(init, initArg) {
  const ref = react.useRef(UNINITIALIZED);
  if (ref.current === UNINITIALIZED) {
    ref.current = init(initArg);
  }
  return ref;
}
;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/useOnMount/useOnMount.js
'use client';


const EMPTY = [];

/**
 * A React.useEffect equivalent that runs once, when the component is mounted.
 */
function useOnMount(fn) {
  /* eslint-disable react-hooks/exhaustive-deps */
  react.useEffect(fn, EMPTY);
  /* eslint-enable react-hooks/exhaustive-deps */
}
;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/useTimeout/useTimeout.js
'use client';



class Timeout {
  constructor() {
    this.currentId = null;
    this.clear = () => {
      if (this.currentId !== null) {
        clearTimeout(this.currentId);
        this.currentId = null;
      }
    };
    this.disposeEffect = () => {
      return this.clear;
    };
  }
  static create() {
    return new Timeout();
  }
  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay, fn) {
    this.clear();
    this.currentId = setTimeout(() => {
      this.currentId = null;
      fn();
    }, delay);
  }
}
function useTimeout() {
  const timeout = useLazyRef(Timeout.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}
;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/useIsFocusVisible/useIsFocusVisible.js
'use client';

// based on https://github.com/WICG/focus-visible/blob/v4.1.5/src/focus-visible.js


let hadKeyboardEvent = true;
let hadFocusVisibleRecently = false;
const hadFocusVisibleRecentlyTimeout = new Timeout();
const inputTypesWhitelist = {
  text: true,
  search: true,
  url: true,
  tel: true,
  email: true,
  password: true,
  number: true,
  date: true,
  month: true,
  week: true,
  time: true,
  datetime: true,
  'datetime-local': true
};

/**
 * Computes whether the given element should automatically trigger the
 * `focus-visible` class being added, i.e. whether it should always match
 * `:focus-visible` when focused.
 * @param {Element} node
 * @returns {boolean}
 */
function focusTriggersKeyboardModality(node) {
  const {
    type,
    tagName
  } = node;
  if (tagName === 'INPUT' && inputTypesWhitelist[type] && !node.readOnly) {
    return true;
  }
  if (tagName === 'TEXTAREA' && !node.readOnly) {
    return true;
  }
  if (node.isContentEditable) {
    return true;
  }
  return false;
}

/**
 * Keep track of our keyboard modality state with `hadKeyboardEvent`.
 * If the most recent user interaction was via the keyboard;
 * and the key press did not include a meta, alt/option, or control key;
 * then the modality is keyboard. Otherwise, the modality is not keyboard.
 * @param {KeyboardEvent} event
 */
function handleKeyDown(event) {
  if (event.metaKey || event.altKey || event.ctrlKey) {
    return;
  }
  hadKeyboardEvent = true;
}

/**
 * If at any point a user clicks with a pointing device, ensure that we change
 * the modality away from keyboard.
 * This avoids the situation where a user presses a key on an already focused
 * element, and then clicks on a different element, focusing it with a
 * pointing device, while we still think we're in keyboard modality.
 */
function handlePointerDown() {
  hadKeyboardEvent = false;
}
function handleVisibilityChange() {
  if (this.visibilityState === 'hidden') {
    // If the tab becomes active again, the browser will handle calling focus
    // on the element (Safari actually calls it twice).
    // If this tab change caused a blur on an element with focus-visible,
    // re-apply the class when the user switches back to the tab.
    if (hadFocusVisibleRecently) {
      hadKeyboardEvent = true;
    }
  }
}
function prepare(doc) {
  doc.addEventListener('keydown', handleKeyDown, true);
  doc.addEventListener('mousedown', handlePointerDown, true);
  doc.addEventListener('pointerdown', handlePointerDown, true);
  doc.addEventListener('touchstart', handlePointerDown, true);
  doc.addEventListener('visibilitychange', handleVisibilityChange, true);
}
function teardown(doc) {
  doc.removeEventListener('keydown', handleKeyDown, true);
  doc.removeEventListener('mousedown', handlePointerDown, true);
  doc.removeEventListener('pointerdown', handlePointerDown, true);
  doc.removeEventListener('touchstart', handlePointerDown, true);
  doc.removeEventListener('visibilitychange', handleVisibilityChange, true);
}
function isFocusVisible(event) {
  const {
    target
  } = event;
  try {
    return target.matches(':focus-visible');
  } catch (error) {
    // Browsers not implementing :focus-visible will throw a SyntaxError.
    // We use our own heuristic for those browsers.
    // Rethrow might be better if it's not the expected error but do we really
    // want to crash if focus-visible malfunctioned?
  }

  // No need for validFocusTarget check. The user does that by attaching it to
  // focusable events only.
  return hadKeyboardEvent || focusTriggersKeyboardModality(target);
}
function useIsFocusVisible() {
  const ref = react.useCallback(node => {
    if (node != null) {
      prepare(node.ownerDocument);
    }
  }, []);
  const isFocusVisibleRef = react.useRef(false);

  /**
   * Should be called if a blur event is fired
   */
  function handleBlurVisible() {
    // checking against potential state variable does not suffice if we focus and blur synchronously.
    // React wouldn't have time to trigger a re-render so `focusVisible` would be stale.
    // Ideally we would adjust `isFocusVisible(event)` to look at `relatedTarget` for blur events.
    // This doesn't work in IE11 due to https://github.com/facebook/react/issues/3751
    // TODO: check again if React releases their internal changes to focus event handling (https://github.com/facebook/react/pull/19186).
    if (isFocusVisibleRef.current) {
      // To detect a tab/window switch, we look for a blur event followed
      // rapidly by a visibility change.
      // If we don't see a visibility change within 100ms, it's probably a
      // regular focus change.
      hadFocusVisibleRecently = true;
      hadFocusVisibleRecentlyTimeout.start(100, () => {
        hadFocusVisibleRecently = false;
      });
      isFocusVisibleRef.current = false;
      return true;
    }
    return false;
  }

  /**
   * Should be called if a blur event is fired
   */
  function handleFocusVisible(event) {
    if (isFocusVisible(event)) {
      isFocusVisibleRef.current = true;
      return true;
    }
    return false;
  }
  return {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref
  };
}
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/utils/useIsFocusVisible.js
'use client';


/* harmony default export */ const utils_useIsFocusVisible = (useIsFocusVisible);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/TransitionGroup.js + 1 modules
var TransitionGroup = __webpack_require__(62627);
// EXTERNAL MODULE: ./node_modules/.pnpm/@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1/node_modules/@emotion/react/dist/emotion-react.browser.esm.js
var emotion_react_browser_esm = __webpack_require__(19936);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/ButtonBase/Ripple.js
'use client';





/**
 * @ignore - internal component.
 */

function Ripple(props) {
  const {
    className,
    classes,
    pulsate = false,
    rippleX,
    rippleY,
    rippleSize,
    in: inProp,
    onExited,
    timeout
  } = props;
  const [leaving, setLeaving] = react.useState(false);
  const rippleClassName = (0,clsx/* default */.A)(className, classes.ripple, classes.rippleVisible, pulsate && classes.ripplePulsate);
  const rippleStyles = {
    width: rippleSize,
    height: rippleSize,
    top: -(rippleSize / 2) + rippleY,
    left: -(rippleSize / 2) + rippleX
  };
  const childClassName = (0,clsx/* default */.A)(classes.child, leaving && classes.childLeaving, pulsate && classes.childPulsate);
  if (!inProp && !leaving) {
    setLeaving(true);
  }
  react.useEffect(() => {
    if (!inProp && onExited != null) {
      // react-transition-group#onExited
      const timeoutId = setTimeout(onExited, timeout);
      return () => {
        clearTimeout(timeoutId);
      };
    }
    return undefined;
  }, [onExited, inProp, timeout]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
    className: rippleClassName,
    style: rippleStyles,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      className: childClassName
    })
  });
}
 false ? 0 : void 0;
/* harmony default export */ const ButtonBase_Ripple = (Ripple);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/ButtonBase/touchRippleClasses.js


function getTouchRippleUtilityClass(slot) {
  return generateUtilityClass('MuiTouchRipple', slot);
}
const touchRippleClasses = (0,generateUtilityClasses/* default */.A)('MuiTouchRipple', ['root', 'ripple', 'rippleVisible', 'ripplePulsate', 'child', 'childLeaving', 'childPulsate']);
/* harmony default export */ const ButtonBase_touchRippleClasses = (touchRippleClasses);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/ButtonBase/TouchRipple.js
'use client';



const TouchRipple_excluded = ["center", "classes", "className"];
let _ = t => t,
  _t,
  _t2,
  _t3,
  _t4;











const DURATION = 550;
const DELAY_RIPPLE = 80;
const enterKeyframe = (0,emotion_react_browser_esm/* keyframes */.i7)(_t || (_t = _`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`));
const exitKeyframe = (0,emotion_react_browser_esm/* keyframes */.i7)(_t2 || (_t2 = _`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`));
const pulsateKeyframe = (0,emotion_react_browser_esm/* keyframes */.i7)(_t3 || (_t3 = _`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`));
const TouchRippleRoot = (0,styled/* default */.Ay)('span', {
  name: 'MuiTouchRipple',
  slot: 'Root'
})({
  overflow: 'hidden',
  pointerEvents: 'none',
  position: 'absolute',
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: 'inherit'
});

// This `styled()` function invokes keyframes. `styled-components` only supports keyframes
// in string templates. Do not convert these styles in JS object as it will break.
const TouchRippleRipple = (0,styled/* default */.Ay)(ButtonBase_Ripple, {
  name: 'MuiTouchRipple',
  slot: 'Ripple'
})(_t4 || (_t4 = _`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), ButtonBase_touchRippleClasses.rippleVisible, enterKeyframe, DURATION, ({
  theme
}) => theme.transitions.easing.easeInOut, ButtonBase_touchRippleClasses.ripplePulsate, ({
  theme
}) => theme.transitions.duration.shorter, ButtonBase_touchRippleClasses.child, ButtonBase_touchRippleClasses.childLeaving, exitKeyframe, DURATION, ({
  theme
}) => theme.transitions.easing.easeInOut, ButtonBase_touchRippleClasses.childPulsate, pulsateKeyframe, ({
  theme
}) => theme.transitions.easing.easeInOut);

/**
 * @ignore - internal component.
 *
 * TODO v5: Make private
 */
const TouchRipple = /*#__PURE__*/react.forwardRef(function TouchRipple(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiTouchRipple'
  });
  const {
      center: centerProp = false,
      classes = {},
      className
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, TouchRipple_excluded);
  const [ripples, setRipples] = react.useState([]);
  const nextKey = react.useRef(0);
  const rippleCallback = react.useRef(null);
  react.useEffect(() => {
    if (rippleCallback.current) {
      rippleCallback.current();
      rippleCallback.current = null;
    }
  }, [ripples]);

  // Used to filter out mouse emulated events on mobile.
  const ignoringMouseDown = react.useRef(false);
  // We use a timer in order to only show the ripples for touch "click" like events.
  // We don't want to display the ripple for touch scroll events.
  const startTimer = useTimeout();

  // This is the hook called once the previous timeout is ready.
  const startTimerCommit = react.useRef(null);
  const container = react.useRef(null);
  const startCommit = react.useCallback(params => {
    const {
      pulsate,
      rippleX,
      rippleY,
      rippleSize,
      cb
    } = params;
    setRipples(oldRipples => [...oldRipples, /*#__PURE__*/(0,jsx_runtime.jsx)(TouchRippleRipple, {
      classes: {
        ripple: (0,clsx/* default */.A)(classes.ripple, ButtonBase_touchRippleClasses.ripple),
        rippleVisible: (0,clsx/* default */.A)(classes.rippleVisible, ButtonBase_touchRippleClasses.rippleVisible),
        ripplePulsate: (0,clsx/* default */.A)(classes.ripplePulsate, ButtonBase_touchRippleClasses.ripplePulsate),
        child: (0,clsx/* default */.A)(classes.child, ButtonBase_touchRippleClasses.child),
        childLeaving: (0,clsx/* default */.A)(classes.childLeaving, ButtonBase_touchRippleClasses.childLeaving),
        childPulsate: (0,clsx/* default */.A)(classes.childPulsate, ButtonBase_touchRippleClasses.childPulsate)
      },
      timeout: DURATION,
      pulsate: pulsate,
      rippleX: rippleX,
      rippleY: rippleY,
      rippleSize: rippleSize
    }, nextKey.current)]);
    nextKey.current += 1;
    rippleCallback.current = cb;
  }, [classes]);
  const start = react.useCallback((event = {}, options = {}, cb = () => {}) => {
    const {
      pulsate = false,
      center = centerProp || options.pulsate,
      fakeElement = false // For test purposes
    } = options;
    if ((event == null ? void 0 : event.type) === 'mousedown' && ignoringMouseDown.current) {
      ignoringMouseDown.current = false;
      return;
    }
    if ((event == null ? void 0 : event.type) === 'touchstart') {
      ignoringMouseDown.current = true;
    }
    const element = fakeElement ? null : container.current;
    const rect = element ? element.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };

    // Get the size of the ripple
    let rippleX;
    let rippleY;
    let rippleSize;
    if (center || event === undefined || event.clientX === 0 && event.clientY === 0 || !event.clientX && !event.touches) {
      rippleX = Math.round(rect.width / 2);
      rippleY = Math.round(rect.height / 2);
    } else {
      const {
        clientX,
        clientY
      } = event.touches && event.touches.length > 0 ? event.touches[0] : event;
      rippleX = Math.round(clientX - rect.left);
      rippleY = Math.round(clientY - rect.top);
    }
    if (center) {
      rippleSize = Math.sqrt((2 * rect.width ** 2 + rect.height ** 2) / 3);

      // For some reason the animation is broken on Mobile Chrome if the size is even.
      if (rippleSize % 2 === 0) {
        rippleSize += 1;
      }
    } else {
      const sizeX = Math.max(Math.abs((element ? element.clientWidth : 0) - rippleX), rippleX) * 2 + 2;
      const sizeY = Math.max(Math.abs((element ? element.clientHeight : 0) - rippleY), rippleY) * 2 + 2;
      rippleSize = Math.sqrt(sizeX ** 2 + sizeY ** 2);
    }

    // Touche devices
    if (event != null && event.touches) {
      // check that this isn't another touchstart due to multitouch
      // otherwise we will only clear a single timer when unmounting while two
      // are running
      if (startTimerCommit.current === null) {
        // Prepare the ripple effect.
        startTimerCommit.current = () => {
          startCommit({
            pulsate,
            rippleX,
            rippleY,
            rippleSize,
            cb
          });
        };
        // Delay the execution of the ripple effect.
        // We have to make a tradeoff with this delay value.
        startTimer.start(DELAY_RIPPLE, () => {
          if (startTimerCommit.current) {
            startTimerCommit.current();
            startTimerCommit.current = null;
          }
        });
      }
    } else {
      startCommit({
        pulsate,
        rippleX,
        rippleY,
        rippleSize,
        cb
      });
    }
  }, [centerProp, startCommit, startTimer]);
  const pulsate = react.useCallback(() => {
    start({}, {
      pulsate: true
    });
  }, [start]);
  const stop = react.useCallback((event, cb) => {
    startTimer.clear();

    // The touch interaction occurs too quickly.
    // We still want to show ripple effect.
    if ((event == null ? void 0 : event.type) === 'touchend' && startTimerCommit.current) {
      startTimerCommit.current();
      startTimerCommit.current = null;
      startTimer.start(0, () => {
        stop(event, cb);
      });
      return;
    }
    startTimerCommit.current = null;
    setRipples(oldRipples => {
      if (oldRipples.length > 0) {
        return oldRipples.slice(1);
      }
      return oldRipples;
    });
    rippleCallback.current = cb;
  }, [startTimer]);
  react.useImperativeHandle(ref, () => ({
    pulsate,
    start,
    stop
  }), [pulsate, start, stop]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TouchRippleRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(ButtonBase_touchRippleClasses.root, classes.root, className),
    ref: container
  }, other, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(TransitionGroup/* default */.A, {
      component: null,
      exit: true,
      children: ripples
    })
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const ButtonBase_TouchRipple = (TouchRipple);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/ButtonBase/buttonBaseClasses.js


function getButtonBaseUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiButtonBase', slot);
}
const buttonBaseClasses = (0,generateUtilityClasses/* default */.A)('MuiButtonBase', ['root', 'disabled', 'focusVisible']);
/* harmony default export */ const ButtonBase_buttonBaseClasses = (buttonBaseClasses);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/ButtonBase/ButtonBase.js
'use client';



const ButtonBase_excluded = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"];















const ButtonBase_useUtilityClasses = ownerState => {
  const {
    disabled,
    focusVisible,
    focusVisibleClassName,
    classes
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', focusVisible && 'focusVisible']
  };
  const composedClasses = (0,composeClasses/* default */.A)(slots, getButtonBaseUtilityClass, classes);
  if (focusVisible && focusVisibleClassName) {
    composedClasses.root += ` ${focusVisibleClassName}`;
  }
  return composedClasses;
};
const ButtonBaseRoot = (0,styled/* default */.Ay)('button', {
  name: 'MuiButtonBase',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  boxSizing: 'border-box',
  WebkitTapHighlightColor: 'transparent',
  backgroundColor: 'transparent',
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: 'pointer',
  userSelect: 'none',
  verticalAlign: 'middle',
  MozAppearance: 'none',
  // Reset
  WebkitAppearance: 'none',
  // Reset
  textDecoration: 'none',
  // So we take precedent over the style of a native <a /> element.
  color: 'inherit',
  '&::-moz-focus-inner': {
    borderStyle: 'none' // Remove Firefox dotted outline.
  },
  [`&.${ButtonBase_buttonBaseClasses.disabled}`]: {
    pointerEvents: 'none',
    // Disable link interactions
    cursor: 'default'
  },
  '@media print': {
    colorAdjust: 'exact'
  }
});

/**
 * `ButtonBase` contains as few styles as possible.
 * It aims to be a simple building block for creating a button.
 * It contains a load of style reset and some focus/ripple logic.
 */
const ButtonBase = /*#__PURE__*/react.forwardRef(function ButtonBase(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiButtonBase'
  });
  const {
      action,
      centerRipple = false,
      children,
      className,
      component = 'button',
      disabled = false,
      disableRipple = false,
      disableTouchRipple = false,
      focusRipple = false,
      LinkComponent = 'a',
      onBlur,
      onClick,
      onContextMenu,
      onDragLeave,
      onFocus,
      onFocusVisible,
      onKeyDown,
      onKeyUp,
      onMouseDown,
      onMouseLeave,
      onMouseUp,
      onTouchEnd,
      onTouchMove,
      onTouchStart,
      tabIndex = 0,
      TouchRippleProps,
      touchRippleRef,
      type
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, ButtonBase_excluded);
  const buttonRef = react.useRef(null);
  const rippleRef = react.useRef(null);
  const handleRippleRef = utils_useForkRef(rippleRef, touchRippleRef);
  const {
    isFocusVisibleRef,
    onFocus: handleFocusVisible,
    onBlur: handleBlurVisible,
    ref: focusVisibleRef
  } = utils_useIsFocusVisible();
  const [focusVisible, setFocusVisible] = react.useState(false);
  if (disabled && focusVisible) {
    setFocusVisible(false);
  }
  react.useImperativeHandle(action, () => ({
    focusVisible: () => {
      setFocusVisible(true);
      buttonRef.current.focus();
    }
  }), []);
  const [mountedState, setMountedState] = react.useState(false);
  react.useEffect(() => {
    setMountedState(true);
  }, []);
  const enableTouchRipple = mountedState && !disableRipple && !disabled;
  react.useEffect(() => {
    if (focusVisible && focusRipple && !disableRipple && mountedState) {
      rippleRef.current.pulsate();
    }
  }, [disableRipple, focusRipple, focusVisible, mountedState]);
  function useRippleHandler(rippleAction, eventCallback, skipRippleAction = disableTouchRipple) {
    return utils_useEventCallback(event => {
      if (eventCallback) {
        eventCallback(event);
      }
      const ignore = skipRippleAction;
      if (!ignore && rippleRef.current) {
        rippleRef.current[rippleAction](event);
      }
      return true;
    });
  }
  const handleMouseDown = useRippleHandler('start', onMouseDown);
  const handleContextMenu = useRippleHandler('stop', onContextMenu);
  const handleDragLeave = useRippleHandler('stop', onDragLeave);
  const handleMouseUp = useRippleHandler('stop', onMouseUp);
  const handleMouseLeave = useRippleHandler('stop', event => {
    if (focusVisible) {
      event.preventDefault();
    }
    if (onMouseLeave) {
      onMouseLeave(event);
    }
  });
  const handleTouchStart = useRippleHandler('start', onTouchStart);
  const handleTouchEnd = useRippleHandler('stop', onTouchEnd);
  const handleTouchMove = useRippleHandler('stop', onTouchMove);
  const handleBlur = useRippleHandler('stop', event => {
    handleBlurVisible(event);
    if (isFocusVisibleRef.current === false) {
      setFocusVisible(false);
    }
    if (onBlur) {
      onBlur(event);
    }
  }, false);
  const handleFocus = utils_useEventCallback(event => {
    // Fix for https://github.com/facebook/react/issues/7769
    if (!buttonRef.current) {
      buttonRef.current = event.currentTarget;
    }
    handleFocusVisible(event);
    if (isFocusVisibleRef.current === true) {
      setFocusVisible(true);
      if (onFocusVisible) {
        onFocusVisible(event);
      }
    }
    if (onFocus) {
      onFocus(event);
    }
  });
  const isNonNativeButton = () => {
    const button = buttonRef.current;
    return component && component !== 'button' && !(button.tagName === 'A' && button.href);
  };

  /**
   * IE11 shim for https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat
   */
  const keydownRef = react.useRef(false);
  const handleKeyDown = utils_useEventCallback(event => {
    // Check if key is already down to avoid repeats being counted as multiple activations
    if (focusRipple && !keydownRef.current && focusVisible && rippleRef.current && event.key === ' ') {
      keydownRef.current = true;
      rippleRef.current.stop(event, () => {
        rippleRef.current.start(event);
      });
    }
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === ' ') {
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }

    // Keyboard accessibility for non interactive elements
    if (event.target === event.currentTarget && isNonNativeButton() && event.key === 'Enter' && !disabled) {
      event.preventDefault();
      if (onClick) {
        onClick(event);
      }
    }
  });
  const handleKeyUp = utils_useEventCallback(event => {
    // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
    // https://codesandbox.io/p/sandbox/button-keyup-preventdefault-dn7f0
    if (focusRipple && event.key === ' ' && rippleRef.current && focusVisible && !event.defaultPrevented) {
      keydownRef.current = false;
      rippleRef.current.stop(event, () => {
        rippleRef.current.pulsate(event);
      });
    }
    if (onKeyUp) {
      onKeyUp(event);
    }

    // Keyboard accessibility for non interactive elements
    if (onClick && event.target === event.currentTarget && isNonNativeButton() && event.key === ' ' && !event.defaultPrevented) {
      onClick(event);
    }
  });
  let ComponentProp = component;
  if (ComponentProp === 'button' && (other.href || other.to)) {
    ComponentProp = LinkComponent;
  }
  const buttonProps = {};
  if (ComponentProp === 'button') {
    buttonProps.type = type === undefined ? 'button' : type;
    buttonProps.disabled = disabled;
  } else {
    if (!other.href && !other.to) {
      buttonProps.role = 'button';
    }
    if (disabled) {
      buttonProps['aria-disabled'] = disabled;
    }
  }
  const handleRef = utils_useForkRef(ref, focusVisibleRef, buttonRef);
  if (false) {}
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    centerRipple,
    component,
    disabled,
    disableRipple,
    disableTouchRipple,
    focusRipple,
    tabIndex,
    focusVisible
  });
  const classes = ButtonBase_useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ButtonBaseRoot, (0,esm_extends/* default */.A)({
    as: ComponentProp,
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: ownerState,
    onBlur: handleBlur,
    onClick: onClick,
    onContextMenu: handleContextMenu,
    onFocus: handleFocus,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    onMouseDown: handleMouseDown,
    onMouseLeave: handleMouseLeave,
    onMouseUp: handleMouseUp,
    onDragLeave: handleDragLeave,
    onTouchEnd: handleTouchEnd,
    onTouchMove: handleTouchMove,
    onTouchStart: handleTouchStart,
    ref: handleRef,
    tabIndex: disabled ? -1 : tabIndex,
    type: type
  }, buttonProps, other, {
    children: [children, enableTouchRipple ?
    /*#__PURE__*/
    /* TouchRipple is only needed client-side, x2 boost on the server. */
    (0,jsx_runtime.jsx)(ButtonBase_TouchRipple, (0,esm_extends/* default */.A)({
      ref: handleRippleRef,
      center: centerRipple
    }, TouchRippleProps)) : null]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const ButtonBase_ButtonBase = (ButtonBase);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/IconButton/iconButtonClasses.js


function getIconButtonUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiIconButton', slot);
}
const iconButtonClasses = (0,generateUtilityClasses/* default */.A)('MuiIconButton', ['root', 'disabled', 'colorInherit', 'colorPrimary', 'colorSecondary', 'colorError', 'colorInfo', 'colorSuccess', 'colorWarning', 'edgeStart', 'edgeEnd', 'sizeSmall', 'sizeMedium', 'sizeLarge']);
/* harmony default export */ const IconButton_iconButtonClasses = (iconButtonClasses);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/IconButton/IconButton.js
'use client';



const IconButton_excluded = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"];












const IconButton_useUtilityClasses = ownerState => {
  const {
    classes,
    disabled,
    color,
    edge,
    size
  } = ownerState;
  const slots = {
    root: ['root', disabled && 'disabled', color !== 'default' && `color${(0,capitalize/* default */.A)(color)}`, edge && `edge${(0,capitalize/* default */.A)(edge)}`, `size${(0,capitalize/* default */.A)(size)}`]
  };
  return (0,composeClasses/* default */.A)(slots, getIconButtonUtilityClass, classes);
};
const IconButtonRoot = (0,styled/* default */.Ay)(ButtonBase_ButtonBase, {
  name: 'MuiIconButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== 'default' && styles[`color${(0,capitalize/* default */.A)(ownerState.color)}`], ownerState.edge && styles[`edge${(0,capitalize/* default */.A)(ownerState.edge)}`], styles[`size${(0,capitalize/* default */.A)(ownerState.size)}`]];
  }
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.A)({
  textAlign: 'center',
  flex: '0 0 auto',
  fontSize: theme.typography.pxToRem(24),
  padding: 8,
  borderRadius: '50%',
  overflow: 'visible',
  // Explicitly set the default value to solve a bug on IE11.
  color: (theme.vars || theme).palette.action.active,
  transition: theme.transitions.create('background-color', {
    duration: theme.transitions.duration.shortest
  })
}, !ownerState.disableRipple && {
  '&:hover': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0,colorManipulator/* alpha */.X4)(theme.palette.action.active, theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  }
}, ownerState.edge === 'start' && {
  marginLeft: ownerState.size === 'small' ? -3 : -12
}, ownerState.edge === 'end' && {
  marginRight: ownerState.size === 'small' ? -3 : -12
}), ({
  theme,
  ownerState
}) => {
  var _palette;
  const palette = (_palette = (theme.vars || theme).palette) == null ? void 0 : _palette[ownerState.color];
  return (0,esm_extends/* default */.A)({}, ownerState.color === 'inherit' && {
    color: 'inherit'
  }, ownerState.color !== 'inherit' && ownerState.color !== 'default' && (0,esm_extends/* default */.A)({
    color: palette == null ? void 0 : palette.main
  }, !ownerState.disableRipple && {
    '&:hover': (0,esm_extends/* default */.A)({}, palette && {
      backgroundColor: theme.vars ? `rgba(${palette.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0,colorManipulator/* alpha */.X4)(palette.main, theme.palette.action.hoverOpacity)
    }, {
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    })
  }), ownerState.size === 'small' && {
    padding: 5,
    fontSize: theme.typography.pxToRem(18)
  }, ownerState.size === 'large' && {
    padding: 12,
    fontSize: theme.typography.pxToRem(28)
  }, {
    [`&.${IconButton_iconButtonClasses.disabled}`]: {
      backgroundColor: 'transparent',
      color: (theme.vars || theme).palette.action.disabled
    }
  });
});

/**
 * Refer to the [Icons](/material-ui/icons/) section of the documentation
 * regarding the available icon options.
 */
const IconButton = /*#__PURE__*/react.forwardRef(function IconButton(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiIconButton'
  });
  const {
      edge = false,
      children,
      className,
      color = 'default',
      disabled = false,
      disableFocusRipple = false,
      size = 'medium'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, IconButton_excluded);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    edge,
    color,
    disabled,
    disableFocusRipple,
    size
  });
  const classes = IconButton_useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(IconButtonRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    centerRipple: true,
    focusRipple: !disableFocusRipple,
    disabled: disabled,
    ref: ref
  }, other, {
    ownerState: ownerState,
    children: children
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const IconButton_IconButton = (IconButton);
;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/useId/useId.js
'use client';


let globalId = 0;
function useGlobalId(idOverride) {
  const [defaultId, setDefaultId] = react.useState(idOverride);
  const id = idOverride || defaultId;
  react.useEffect(() => {
    if (defaultId == null) {
      // Fallback to this default id when possible.
      // Use the incrementing value for client-side rendering only.
      // We can't use it server-side.
      // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
      globalId += 1;
      setDefaultId(`mui-${globalId}`);
    }
  }, [defaultId]);
  return id;
}

// downstream bundlers may remove unnecessary concatenation, but won't remove toString call -- Workaround for https://github.com/webpack/webpack/issues/14814
const maybeReactUseId = react_namespaceObject['useId'.toString()];
/**
 *
 * @example <div id={useId()} />
 * @param idOverride
 * @returns {string}
 */
function useId(idOverride) {
  if (maybeReactUseId !== undefined) {
    const reactId = maybeReactUseId();
    return idOverride != null ? idOverride : reactId;
  }
  // eslint-disable-next-line react-hooks/rules-of-hooks -- `React.useId` is invariant at runtime.
  return useGlobalId(idOverride);
}
;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/getReactElementRef/getReactElementRef.js


/**
 * Returns the ref of a React element handling differences between React 19 and older versions.
 * It will throw runtime error if the element is not a valid React element.
 *
 * @param element React.ReactElement
 * @returns React.Ref<any> | null
 */
function getReactElementRef(element) {
  // 'ref' is passed as prop in React 19, whereas 'ref' is directly attached to children in older versions
  if (parseInt(react.version, 10) >= 19) {
    var _element$props;
    return (element == null || (_element$props = element.props) == null ? void 0 : _element$props.ref) || null;
  }
  // @ts-expect-error element.ref is not included in the ReactElement type
  // https://github.com/DefinitelyTyped/DefinitelyTyped/discussions/70189
  return (element == null ? void 0 : element.ref) || null;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/Transition.js + 1 modules
var Transition = __webpack_require__(76216);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/useTheme.js
var useTheme = __webpack_require__(96334);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/styles/defaultTheme.js
var defaultTheme = __webpack_require__(76612);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/styles/identifier.js
var identifier = __webpack_require__(54073);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/styles/useTheme.js
'use client';





function useTheme_useTheme() {
  const theme = (0,useTheme/* default */.A)(defaultTheme/* default */.A);
  if (false) {}
  return theme[identifier/* default */.A] || theme;
}
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/transitions/utils.js
const reflow = node => node.scrollTop;
function getTransitionProps(props, options) {
  var _style$transitionDura, _style$transitionTimi;
  const {
    timeout,
    easing,
    style = {}
  } = props;
  return {
    duration: (_style$transitionDura = style.transitionDuration) != null ? _style$transitionDura : typeof timeout === 'number' ? timeout : timeout[options.mode] || 0,
    easing: (_style$transitionTimi = style.transitionTimingFunction) != null ? _style$transitionTimi : typeof easing === 'object' ? easing[options.mode] : easing,
    delay: style.transitionDelay
  };
}
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Grow/Grow.js
'use client';



const Grow_excluded = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];










function getScale(value) {
  return `scale(${value}, ${value ** 2})`;
}
const styles = {
  entering: {
    opacity: 1,
    transform: getScale(1)
  },
  entered: {
    opacity: 1,
    transform: 'none'
  }
};

/*
 TODO v6: remove
 Conditionally apply a workaround for the CSS transition bug in Safari 15.4 / WebKit browsers.
 */
const isWebKit154 = typeof navigator !== 'undefined' && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent);

/**
 * The Grow transition is used by the [Tooltip](/material-ui/react-tooltip/) and
 * [Popover](/material-ui/react-popover/) components.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */
const Grow = /*#__PURE__*/react.forwardRef(function Grow(props, ref) {
  const {
      addEndListener,
      appear = true,
      children,
      easing,
      in: inProp,
      onEnter,
      onEntered,
      onEntering,
      onExit,
      onExited,
      onExiting,
      style,
      timeout = 'auto',
      // eslint-disable-next-line react/prop-types
      TransitionComponent = Transition/* default */.Ay
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, Grow_excluded);
  const timer = useTimeout();
  const autoTimeout = react.useRef();
  const theme = useTheme_useTheme();
  const nodeRef = react.useRef(null);
  const handleRef = utils_useForkRef(nodeRef, getReactElementRef(children), ref);
  const normalizedTransitionCallback = callback => maybeIsAppearing => {
    if (callback) {
      const node = nodeRef.current;

      // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
      if (maybeIsAppearing === undefined) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    reflow(node); // So the animation always start from the start.

    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: 'enter'
    });
    let duration;
    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }
    node.style.transition = [theme.transitions.create('opacity', {
      duration,
      delay
    }), theme.transitions.create('transform', {
      duration: isWebKit154 ? duration : duration * 0.666,
      delay,
      easing: transitionTimingFunction
    })].join(',');
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback(node => {
    const {
      duration: transitionDuration,
      delay,
      easing: transitionTimingFunction
    } = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: 'exit'
    });
    let duration;
    if (timeout === 'auto') {
      duration = theme.transitions.getAutoHeightDuration(node.clientHeight);
      autoTimeout.current = duration;
    } else {
      duration = transitionDuration;
    }
    node.style.transition = [theme.transitions.create('opacity', {
      duration,
      delay
    }), theme.transitions.create('transform', {
      duration: isWebKit154 ? duration : duration * 0.666,
      delay: isWebKit154 ? delay : delay || duration * 0.333,
      easing: transitionTimingFunction
    })].join(',');
    node.style.opacity = 0;
    node.style.transform = getScale(0.75);
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = next => {
    if (timeout === 'auto') {
      timer.start(autoTimeout.current || 0, next);
    }
    if (addEndListener) {
      // Old call signature before `react-transition-group` implemented `nodeRef`
      addEndListener(nodeRef.current, next);
    }
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TransitionComponent, (0,esm_extends/* default */.A)({
    appear: appear,
    in: inProp,
    nodeRef: nodeRef,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout === 'auto' ? null : timeout
  }, other, {
    children: (state, childProps) => {
      return /*#__PURE__*/react.cloneElement(children, (0,esm_extends/* default */.A)({
        style: (0,esm_extends/* default */.A)({
          opacity: 0,
          transform: getScale(0.75),
          visibility: state === 'exited' && !inProp ? 'hidden' : undefined
        }, styles[state], style, children.props.style),
        ref: handleRef
      }, childProps));
    }
  }));
});
 false ? 0 : void 0;
Grow.muiSupportAuto = true;
/* harmony default export */ const Grow_Grow = (Grow);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Fade/Fade.js
'use client';



const Fade_excluded = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];









const Fade_styles = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
};

/**
 * The Fade transition is used by the [Modal](/material-ui/react-modal/) component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */
const Fade = /*#__PURE__*/react.forwardRef(function Fade(props, ref) {
  const theme = useTheme_useTheme();
  const defaultTimeout = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
      addEndListener,
      appear = true,
      children,
      easing,
      in: inProp,
      onEnter,
      onEntered,
      onEntering,
      onExit,
      onExited,
      onExiting,
      style,
      timeout = defaultTimeout,
      // eslint-disable-next-line react/prop-types
      TransitionComponent = Transition/* default */.Ay
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, Fade_excluded);
  const enableStrictModeCompat = true;
  const nodeRef = react.useRef(null);
  const handleRef = utils_useForkRef(nodeRef, getReactElementRef(children), ref);
  const normalizedTransitionCallback = callback => maybeIsAppearing => {
    if (callback) {
      const node = nodeRef.current;

      // onEnterXxx and onExitXxx callbacks have a different arguments.length value.
      if (maybeIsAppearing === undefined) {
        callback(node);
      } else {
        callback(node, maybeIsAppearing);
      }
    }
  };
  const handleEntering = normalizedTransitionCallback(onEntering);
  const handleEnter = normalizedTransitionCallback((node, isAppearing) => {
    reflow(node); // So the animation always start from the start.

    const transitionProps = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: 'enter'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);
    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  const handleEntered = normalizedTransitionCallback(onEntered);
  const handleExiting = normalizedTransitionCallback(onExiting);
  const handleExit = normalizedTransitionCallback(node => {
    const transitionProps = getTransitionProps({
      style,
      timeout,
      easing
    }, {
      mode: 'exit'
    });
    node.style.webkitTransition = theme.transitions.create('opacity', transitionProps);
    node.style.transition = theme.transitions.create('opacity', transitionProps);
    if (onExit) {
      onExit(node);
    }
  });
  const handleExited = normalizedTransitionCallback(onExited);
  const handleAddEndListener = next => {
    if (addEndListener) {
      // Old call signature before `react-transition-group` implemented `nodeRef`
      addEndListener(nodeRef.current, next);
    }
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TransitionComponent, (0,esm_extends/* default */.A)({
    appear: appear,
    in: inProp,
    nodeRef: enableStrictModeCompat ? nodeRef : undefined,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: handleAddEndListener,
    timeout: timeout
  }, other, {
    children: (state, childProps) => {
      return /*#__PURE__*/react.cloneElement(children, (0,esm_extends/* default */.A)({
        style: (0,esm_extends/* default */.A)({
          opacity: 0,
          visibility: state === 'exited' && !inProp ? 'hidden' : undefined
        }, Fade_styles[state], style, children.props.style),
        ref: handleRef
      }, childProps));
    }
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const Fade_Fade = (Fade);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/styles/getOverlayAlpha.js
// Inspired by https://github.com/material-components/material-components-ios/blob/bca36107405594d5b7b16265a5b0ed698f85a5ee/components/Elevation/src/UIColor%2BMaterialElevation.m#L61
const getOverlayAlpha = elevation => {
  let alphaValue;
  if (elevation < 1) {
    alphaValue = 5.11916 * elevation ** 2;
  } else {
    alphaValue = 4.5 * Math.log(elevation + 1) + 2;
  }
  return (alphaValue / 100).toFixed(2);
};
/* harmony default export */ const styles_getOverlayAlpha = (getOverlayAlpha);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Paper/paperClasses.js


function getPaperUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiPaper', slot);
}
const paperClasses = (0,generateUtilityClasses/* default */.A)('MuiPaper', ['root', 'rounded', 'outlined', 'elevation', 'elevation0', 'elevation1', 'elevation2', 'elevation3', 'elevation4', 'elevation5', 'elevation6', 'elevation7', 'elevation8', 'elevation9', 'elevation10', 'elevation11', 'elevation12', 'elevation13', 'elevation14', 'elevation15', 'elevation16', 'elevation17', 'elevation18', 'elevation19', 'elevation20', 'elevation21', 'elevation22', 'elevation23', 'elevation24']);
/* harmony default export */ const Paper_paperClasses = ((/* unused pure expression or super */ null && (paperClasses)));
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Paper/Paper.js
'use client';



const Paper_excluded = ["className", "component", "elevation", "square", "variant"];













const Paper_useUtilityClasses = ownerState => {
  const {
    square,
    elevation,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ['root', variant, !square && 'rounded', variant === 'elevation' && `elevation${elevation}`]
  };
  return (0,composeClasses/* default */.A)(slots, getPaperUtilityClass, classes);
};
const PaperRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiPaper',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], !ownerState.square && styles.rounded, ownerState.variant === 'elevation' && styles[`elevation${ownerState.elevation}`]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$vars$overlays;
  return (0,esm_extends/* default */.A)({
    backgroundColor: (theme.vars || theme).palette.background.paper,
    color: (theme.vars || theme).palette.text.primary,
    transition: theme.transitions.create('box-shadow')
  }, !ownerState.square && {
    borderRadius: theme.shape.borderRadius
  }, ownerState.variant === 'outlined' && {
    border: `1px solid ${(theme.vars || theme).palette.divider}`
  }, ownerState.variant === 'elevation' && (0,esm_extends/* default */.A)({
    boxShadow: (theme.vars || theme).shadows[ownerState.elevation]
  }, !theme.vars && theme.palette.mode === 'dark' && {
    backgroundImage: `linear-gradient(${(0,colorManipulator/* alpha */.X4)('#fff', styles_getOverlayAlpha(ownerState.elevation))}, ${(0,colorManipulator/* alpha */.X4)('#fff', styles_getOverlayAlpha(ownerState.elevation))})`
  }, theme.vars && {
    backgroundImage: (_theme$vars$overlays = theme.vars.overlays) == null ? void 0 : _theme$vars$overlays[ownerState.elevation]
  }));
});
const Paper = /*#__PURE__*/react.forwardRef(function Paper(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiPaper'
  });
  const {
      className,
      component = 'div',
      elevation = 1,
      square = false,
      variant = 'elevation'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, Paper_excluded);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    component,
    elevation,
    square,
    variant
  });
  const classes = Paper_useUtilityClasses(ownerState);
  if (false) {}
  return /*#__PURE__*/(0,jsx_runtime.jsx)(PaperRoot, (0,esm_extends/* default */.A)({
    as: component,
    ownerState: ownerState,
    className: (0,clsx/* default */.A)(classes.root, className),
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const Paper_Paper = (Paper);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/useThemeWithoutDefault.js
var system_useThemeWithoutDefault = __webpack_require__(50991);
;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/ownerDocument/ownerDocument.js
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@popperjs+core@2.11.8/node_modules/@popperjs/core/lib/popper.js + 53 modules
var lib_popper = __webpack_require__(7017);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/index.js
var react_dom = __webpack_require__(8143);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Portal/Portal.js
'use client';






function getContainer(container) {
  return typeof container === 'function' ? container() : container;
}

/**
 * Portals provide a first-class way to render children into a DOM node
 * that exists outside the DOM hierarchy of the parent component.
 *
 * Demos:
 *
 * - [Portal](https://mui.com/material-ui/react-portal/)
 *
 * API:
 *
 * - [Portal API](https://mui.com/material-ui/api/portal/)
 */
const Portal = /*#__PURE__*/react.forwardRef(function Portal(props, forwardedRef) {
  const {
    children,
    container,
    disablePortal = false
  } = props;
  const [mountNode, setMountNode] = react.useState(null);
  const handleRef = useForkRef( /*#__PURE__*/react.isValidElement(children) ? getReactElementRef(children) : null, forwardedRef);
  useEnhancedEffect_useEnhancedEffect(() => {
    if (!disablePortal) {
      setMountNode(getContainer(container) || document.body);
    }
  }, [container, disablePortal]);
  useEnhancedEffect_useEnhancedEffect(() => {
    if (mountNode && !disablePortal) {
      setRef(forwardedRef, mountNode);
      return () => {
        setRef(forwardedRef, null);
      };
    }
    return undefined;
  }, [forwardedRef, mountNode, disablePortal]);
  if (disablePortal) {
    if ( /*#__PURE__*/react.isValidElement(children)) {
      const newProps = {
        ref: handleRef
      };
      return /*#__PURE__*/react.cloneElement(children, newProps);
    }
    return /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
      children: children
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
    children: mountNode ? /*#__PURE__*/react_dom.createPortal(children, mountNode) : mountNode
  });
});
 false ? 0 : void 0;
if (false) {}
/* harmony default export */ const Portal_Portal = (Portal);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Popper/popperClasses.js


function getPopperUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiPopper', slot);
}
const popperClasses = (0,generateUtilityClasses/* default */.A)('MuiPopper', ['root']);
/* harmony default export */ const Popper_popperClasses = ((/* unused pure expression or super */ null && (popperClasses)));
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Popper/BasePopper.js
'use client';



const BasePopper_excluded = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"],
  _excluded2 = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];









function flipPlacement(placement, direction) {
  if (direction === 'ltr') {
    return placement;
  }
  switch (placement) {
    case 'bottom-end':
      return 'bottom-start';
    case 'bottom-start':
      return 'bottom-end';
    case 'top-end':
      return 'top-start';
    case 'top-start':
      return 'top-end';
    default:
      return placement;
  }
}
function resolveAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}
function isHTMLElement(element) {
  return element.nodeType !== undefined;
}
function isVirtualElement(element) {
  return !isHTMLElement(element);
}
const BasePopper_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.A)(slots, getPopperUtilityClass, classes);
};
const defaultPopperOptions = {};
const PopperTooltip = /*#__PURE__*/react.forwardRef(function PopperTooltip(props, forwardedRef) {
  var _slots$root;
  const {
      anchorEl,
      children,
      direction,
      disablePortal,
      modifiers,
      open,
      placement: initialPlacement,
      popperOptions,
      popperRef: popperRefProp,
      slotProps = {},
      slots = {},
      TransitionProps
      // @ts-ignore internal logic
      // prevent from spreading to DOM, it can come from the parent component e.g. Select.
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, BasePopper_excluded);
  const tooltipRef = react.useRef(null);
  const ownRef = useForkRef(tooltipRef, forwardedRef);
  const popperRef = react.useRef(null);
  const handlePopperRef = useForkRef(popperRef, popperRefProp);
  const handlePopperRefRef = react.useRef(handlePopperRef);
  useEnhancedEffect_useEnhancedEffect(() => {
    handlePopperRefRef.current = handlePopperRef;
  }, [handlePopperRef]);
  react.useImperativeHandle(popperRefProp, () => popperRef.current, []);
  const rtlPlacement = flipPlacement(initialPlacement, direction);
  /**
   * placement initialized from prop but can change during lifetime if modifiers.flip.
   * modifiers.flip is essentially a flip for controlled/uncontrolled behavior
   */
  const [placement, setPlacement] = react.useState(rtlPlacement);
  const [resolvedAnchorElement, setResolvedAnchorElement] = react.useState(resolveAnchorEl(anchorEl));
  react.useEffect(() => {
    if (popperRef.current) {
      popperRef.current.forceUpdate();
    }
  });
  react.useEffect(() => {
    if (anchorEl) {
      setResolvedAnchorElement(resolveAnchorEl(anchorEl));
    }
  }, [anchorEl]);
  useEnhancedEffect_useEnhancedEffect(() => {
    if (!resolvedAnchorElement || !open) {
      return undefined;
    }
    const handlePopperUpdate = data => {
      setPlacement(data.placement);
    };
    if (false) {}
    let popperModifiers = [{
      name: 'preventOverflow',
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: 'flip',
      options: {
        altBoundary: disablePortal
      }
    }, {
      name: 'onUpdate',
      enabled: true,
      phase: 'afterWrite',
      fn: ({
        state
      }) => {
        handlePopperUpdate(state);
      }
    }];
    if (modifiers != null) {
      popperModifiers = popperModifiers.concat(modifiers);
    }
    if (popperOptions && popperOptions.modifiers != null) {
      popperModifiers = popperModifiers.concat(popperOptions.modifiers);
    }
    const popper = (0,lib_popper/* createPopper */.n4)(resolvedAnchorElement, tooltipRef.current, (0,esm_extends/* default */.A)({
      placement: rtlPlacement
    }, popperOptions, {
      modifiers: popperModifiers
    }));
    handlePopperRefRef.current(popper);
    return () => {
      popper.destroy();
      handlePopperRefRef.current(null);
    };
  }, [resolvedAnchorElement, disablePortal, modifiers, open, popperOptions, rtlPlacement]);
  const childProps = {
    placement: placement
  };
  if (TransitionProps !== null) {
    childProps.TransitionProps = TransitionProps;
  }
  const classes = BasePopper_useUtilityClasses(props);
  const Root = (_slots$root = slots.root) != null ? _slots$root : 'div';
  const rootProps = useSlotProps_useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps.root,
    externalForwardedProps: other,
    additionalProps: {
      role: 'tooltip',
      ref: ownRef
    },
    ownerState: props,
    className: classes.root
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Root, (0,esm_extends/* default */.A)({}, rootProps, {
    children: typeof children === 'function' ? children(childProps) : children
  }));
});

/**
 * @ignore - internal component.
 */
const Popper = /*#__PURE__*/react.forwardRef(function Popper(props, forwardedRef) {
  const {
      anchorEl,
      children,
      container: containerProp,
      direction = 'ltr',
      disablePortal = false,
      keepMounted = false,
      modifiers,
      open,
      placement = 'bottom',
      popperOptions = defaultPopperOptions,
      popperRef,
      style,
      transition = false,
      slotProps = {},
      slots = {}
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, _excluded2);
  const [exited, setExited] = react.useState(true);
  const handleEnter = () => {
    setExited(false);
  };
  const handleExited = () => {
    setExited(true);
  };
  if (!keepMounted && !open && (!transition || exited)) {
    return null;
  }

  // If the container prop is provided, use that
  // If the anchorEl prop is provided, use its parent body element as the container
  // If neither are provided let the Modal take care of choosing the container
  let container;
  if (containerProp) {
    container = containerProp;
  } else if (anchorEl) {
    const resolvedAnchorEl = resolveAnchorEl(anchorEl);
    container = resolvedAnchorEl && isHTMLElement(resolvedAnchorEl) ? ownerDocument(resolvedAnchorEl).body : ownerDocument(null).body;
  }
  const display = !open && keepMounted && (!transition || exited) ? 'none' : undefined;
  const transitionProps = transition ? {
    in: open,
    onEnter: handleEnter,
    onExited: handleExited
  } : undefined;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Portal_Portal, {
    disablePortal: disablePortal,
    container: container,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(PopperTooltip, (0,esm_extends/* default */.A)({
      anchorEl: anchorEl,
      direction: direction,
      disablePortal: disablePortal,
      modifiers: modifiers,
      ref: forwardedRef,
      open: transition ? !exited : open,
      placement: placement,
      popperOptions: popperOptions,
      popperRef: popperRef,
      slotProps: slotProps,
      slots: slots
    }, other, {
      style: (0,esm_extends/* default */.A)({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: 'fixed',
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display
      }, style),
      TransitionProps: transitionProps,
      children: children
    }))
  });
});
 false ? 0 : void 0;
/* harmony default export */ const BasePopper = (Popper);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Popper/Popper.js
'use client';



const Popper_excluded = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"];









const PopperRoot = (0,styled/* default */.Ay)(BasePopper, {
  name: 'MuiPopper',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});

/**
 *
 * Demos:
 *
 * - [Autocomplete](https://mui.com/material-ui/react-autocomplete/)
 * - [Menu](https://mui.com/material-ui/react-menu/)
 * - [Popper](https://mui.com/material-ui/react-popper/)
 *
 * API:
 *
 * - [Popper API](https://mui.com/material-ui/api/popper/)
 */
const Popper_Popper = /*#__PURE__*/react.forwardRef(function Popper(inProps, ref) {
  var _slots$root;
  const theme = (0,system_useThemeWithoutDefault/* default */.A)();
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiPopper'
  });
  const {
      anchorEl,
      component,
      components,
      componentsProps,
      container,
      disablePortal,
      keepMounted,
      modifiers,
      open,
      placement,
      popperOptions,
      popperRef,
      transition,
      slots,
      slotProps
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, Popper_excluded);
  const RootComponent = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : components == null ? void 0 : components.Root;
  const otherProps = (0,esm_extends/* default */.A)({
    anchorEl,
    container,
    disablePortal,
    keepMounted,
    modifiers,
    open,
    placement,
    popperOptions,
    popperRef,
    transition
  }, other);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(PopperRoot, (0,esm_extends/* default */.A)({
    as: component,
    direction: theme == null ? void 0 : theme.direction,
    slots: {
      root: RootComponent
    },
    slotProps: slotProps != null ? slotProps : componentsProps
  }, otherProps, {
    ref: ref
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const material_Popper_Popper = (Popper_Popper);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Unstable_TrapFocus/FocusTrap.js
'use client';

/* eslint-disable consistent-return, jsx-a11y/no-noninteractive-tabindex */





// Inspired by https://github.com/focus-trap/tabbable
const candidatesSelector = ['input', 'select', 'textarea', 'a[href]', 'button', '[tabindex]', 'audio[controls]', 'video[controls]', '[contenteditable]:not([contenteditable="false"])'].join(',');
function getTabIndex(node) {
  const tabindexAttr = parseInt(node.getAttribute('tabindex') || '', 10);
  if (!Number.isNaN(tabindexAttr)) {
    return tabindexAttr;
  }

  // Browsers do not return `tabIndex` correctly for contentEditable nodes;
  // https://bugs.chromium.org/p/chromium/issues/detail?id=661108&q=contenteditable%20tabindex&can=2
  // so if they don't have a tabindex attribute specifically set, assume it's 0.
  // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
  //  `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
  //  yet they are still part of the regular tab order; in FF, they get a default
  //  `tabIndex` of 0; since Chrome still puts those elements in the regular tab
  //  order, consider their tab index to be 0.
  if (node.contentEditable === 'true' || (node.nodeName === 'AUDIO' || node.nodeName === 'VIDEO' || node.nodeName === 'DETAILS') && node.getAttribute('tabindex') === null) {
    return 0;
  }
  return node.tabIndex;
}
function isNonTabbableRadio(node) {
  if (node.tagName !== 'INPUT' || node.type !== 'radio') {
    return false;
  }
  if (!node.name) {
    return false;
  }
  const getRadio = selector => node.ownerDocument.querySelector(`input[type="radio"]${selector}`);
  let roving = getRadio(`[name="${node.name}"]:checked`);
  if (!roving) {
    roving = getRadio(`[name="${node.name}"]`);
  }
  return roving !== node;
}
function isNodeMatchingSelectorFocusable(node) {
  if (node.disabled || node.tagName === 'INPUT' && node.type === 'hidden' || isNonTabbableRadio(node)) {
    return false;
  }
  return true;
}
function defaultGetTabbable(root) {
  const regularTabNodes = [];
  const orderedTabNodes = [];
  Array.from(root.querySelectorAll(candidatesSelector)).forEach((node, i) => {
    const nodeTabIndex = getTabIndex(node);
    if (nodeTabIndex === -1 || !isNodeMatchingSelectorFocusable(node)) {
      return;
    }
    if (nodeTabIndex === 0) {
      regularTabNodes.push(node);
    } else {
      orderedTabNodes.push({
        documentOrder: i,
        tabIndex: nodeTabIndex,
        node: node
      });
    }
  });
  return orderedTabNodes.sort((a, b) => a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex).map(a => a.node).concat(regularTabNodes);
}
function defaultIsEnabled() {
  return true;
}

/**
 * @ignore - internal component.
 */
function FocusTrap(props) {
  const {
    children,
    disableAutoFocus = false,
    disableEnforceFocus = false,
    disableRestoreFocus = false,
    getTabbable = defaultGetTabbable,
    isEnabled = defaultIsEnabled,
    open
  } = props;
  const ignoreNextEnforceFocus = react.useRef(false);
  const sentinelStart = react.useRef(null);
  const sentinelEnd = react.useRef(null);
  const nodeToRestore = react.useRef(null);
  const reactFocusEventTarget = react.useRef(null);
  // This variable is useful when disableAutoFocus is true.
  // It waits for the active element to move into the component to activate.
  const activated = react.useRef(false);
  const rootRef = react.useRef(null);
  const handleRef = useForkRef(getReactElementRef(children), rootRef);
  const lastKeydown = react.useRef(null);
  react.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }
    activated.current = !disableAutoFocus;
  }, [disableAutoFocus, open]);
  react.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }
    const doc = ownerDocument(rootRef.current);
    if (!rootRef.current.contains(doc.activeElement)) {
      if (!rootRef.current.hasAttribute('tabIndex')) {
        if (false) {}
        rootRef.current.setAttribute('tabIndex', '-1');
      }
      if (activated.current) {
        rootRef.current.focus();
      }
    }
    return () => {
      // restoreLastFocus()
      if (!disableRestoreFocus) {
        // In IE11 it is possible for document.activeElement to be null resulting
        // in nodeToRestore.current being null.
        // Not all elements in IE11 have a focus method.
        // Once IE11 support is dropped the focus() call can be unconditional.
        if (nodeToRestore.current && nodeToRestore.current.focus) {
          ignoreNextEnforceFocus.current = true;
          nodeToRestore.current.focus();
        }
        nodeToRestore.current = null;
      }
    };
    // Missing `disableRestoreFocus` which is fine.
    // We don't support changing that prop on an open FocusTrap
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);
  react.useEffect(() => {
    // We might render an empty child.
    if (!open || !rootRef.current) {
      return;
    }
    const doc = ownerDocument(rootRef.current);
    const loopFocus = nativeEvent => {
      lastKeydown.current = nativeEvent;
      if (disableEnforceFocus || !isEnabled() || nativeEvent.key !== 'Tab') {
        return;
      }

      // Make sure the next tab starts from the right place.
      // doc.activeElement refers to the origin.
      if (doc.activeElement === rootRef.current && nativeEvent.shiftKey) {
        // We need to ignore the next contain as
        // it will try to move the focus back to the rootRef element.
        ignoreNextEnforceFocus.current = true;
        if (sentinelEnd.current) {
          sentinelEnd.current.focus();
        }
      }
    };
    const contain = () => {
      const rootElement = rootRef.current;

      // Cleanup functions are executed lazily in React 17.
      // Contain can be called between the component being unmounted and its cleanup function being run.
      if (rootElement === null) {
        return;
      }
      if (!doc.hasFocus() || !isEnabled() || ignoreNextEnforceFocus.current) {
        ignoreNextEnforceFocus.current = false;
        return;
      }

      // The focus is already inside
      if (rootElement.contains(doc.activeElement)) {
        return;
      }

      // The disableEnforceFocus is set and the focus is outside of the focus trap (and sentinel nodes)
      if (disableEnforceFocus && doc.activeElement !== sentinelStart.current && doc.activeElement !== sentinelEnd.current) {
        return;
      }

      // if the focus event is not coming from inside the children's react tree, reset the refs
      if (doc.activeElement !== reactFocusEventTarget.current) {
        reactFocusEventTarget.current = null;
      } else if (reactFocusEventTarget.current !== null) {
        return;
      }
      if (!activated.current) {
        return;
      }
      let tabbable = [];
      if (doc.activeElement === sentinelStart.current || doc.activeElement === sentinelEnd.current) {
        tabbable = getTabbable(rootRef.current);
      }

      // one of the sentinel nodes was focused, so move the focus
      // to the first/last tabbable element inside the focus trap
      if (tabbable.length > 0) {
        var _lastKeydown$current, _lastKeydown$current2;
        const isShiftTab = Boolean(((_lastKeydown$current = lastKeydown.current) == null ? void 0 : _lastKeydown$current.shiftKey) && ((_lastKeydown$current2 = lastKeydown.current) == null ? void 0 : _lastKeydown$current2.key) === 'Tab');
        const focusNext = tabbable[0];
        const focusPrevious = tabbable[tabbable.length - 1];
        if (typeof focusNext !== 'string' && typeof focusPrevious !== 'string') {
          if (isShiftTab) {
            focusPrevious.focus();
          } else {
            focusNext.focus();
          }
        }
        // no tabbable elements in the trap focus or the focus was outside of the focus trap
      } else {
        rootElement.focus();
      }
    };
    doc.addEventListener('focusin', contain);
    doc.addEventListener('keydown', loopFocus, true);

    // With Edge, Safari and Firefox, no focus related events are fired when the focused area stops being a focused area.
    // for example https://bugzilla.mozilla.org/show_bug.cgi?id=559561.
    // Instead, we can look if the active element was restored on the BODY element.
    //
    // The whatwg spec defines how the browser should behave but does not explicitly mention any events:
    // https://html.spec.whatwg.org/multipage/interaction.html#focus-fixup-rule.
    const interval = setInterval(() => {
      if (doc.activeElement && doc.activeElement.tagName === 'BODY') {
        contain();
      }
    }, 50);
    return () => {
      clearInterval(interval);
      doc.removeEventListener('focusin', contain);
      doc.removeEventListener('keydown', loopFocus, true);
    };
  }, [disableAutoFocus, disableEnforceFocus, disableRestoreFocus, isEnabled, open, getTabbable]);
  const onFocus = event => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
    reactFocusEventTarget.current = event.target;
    const childrenPropsHandler = children.props.onFocus;
    if (childrenPropsHandler) {
      childrenPropsHandler(event);
    }
  };
  const handleFocusSentinel = event => {
    if (nodeToRestore.current === null) {
      nodeToRestore.current = event.relatedTarget;
    }
    activated.current = true;
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelStart,
      "data-testid": "sentinelStart"
    }), /*#__PURE__*/react.cloneElement(children, {
      ref: handleRef,
      onFocus
    }), /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      tabIndex: open ? 0 : -1,
      onFocus: handleFocusSentinel,
      ref: sentinelEnd,
      "data-testid": "sentinelEnd"
    })]
  });
}
 false ? 0 : void 0;
if (false) {}
/* harmony default export */ const Unstable_TrapFocus_FocusTrap = (FocusTrap);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/components/pickersPopperClasses.js

function getPickersPopperUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiPickersPopper', slot);
}
const pickersPopperClasses = (0,generateUtilityClasses/* default */.A)('MuiPickersPopper', ['root', 'paper']);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/utils/utils.js
/* Use it instead of .includes method for IE support */
function arrayIncludes(array, itemOrItems) {
  if (Array.isArray(itemOrItems)) {
    return itemOrItems.every(item => array.indexOf(item) !== -1);
  }
  return array.indexOf(itemOrItems) !== -1;
}
const onSpaceOrEnter = (innerFn, externalEvent) => event => {
  if (event.key === 'Enter' || event.key === ' ') {
    innerFn(event);

    // prevent any side effects
    event.preventDefault();
    event.stopPropagation();
  }
  if (externalEvent) {
    externalEvent(event);
  }
};
const executeInTheNextEventLoopTick = fn => {
  setTimeout(fn, 0);
};

// https://www.abeautifulsite.net/posts/finding-the-active-element-in-a-shadow-root/
const getActiveElement = (root = document) => {
  const activeEl = root.activeElement;
  if (!activeEl) {
    return null;
  }
  if (activeEl.shadowRoot) {
    return getActiveElement(activeEl.shadowRoot);
  }
  return activeEl;
};

/**
 * Gets the index of the focused list item in a given ul list element.
 *
 * @param {HTMLUListElement} listElement - The list element to search within.
 * @returns {number} The index of the focused list item, or -1 if none is focused.
 */
const getFocusedListItemIndex = listElement => {
  const children = Array.from(listElement.children);
  return children.indexOf(getActiveElement(document));
};
const DEFAULT_DESKTOP_MODE_MEDIA_QUERY = '@media (pointer: fine)';
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/hooks/useDefaultReduceAnimations.js

const PREFERS_REDUCED_MOTION = '@media (prefers-reduced-motion: reduce)';

// detect if user agent has Android version < 10 or iOS version < 13
const mobileVersionMatches = typeof navigator !== 'undefined' && navigator.userAgent.match(/android\s(\d+)|OS\s(\d+)/i);
const androidVersion = mobileVersionMatches && mobileVersionMatches[1] ? parseInt(mobileVersionMatches[1], 10) : null;
const iOSVersion = mobileVersionMatches && mobileVersionMatches[2] ? parseInt(mobileVersionMatches[2], 10) : null;
const slowAnimationDevices = androidVersion && androidVersion < 10 || iOSVersion && iOSVersion < 13 || false;
const useDefaultReduceAnimations = () => {
  const prefersReduced = useMediaQuery(PREFERS_REDUCED_MOTION, {
    defaultMatches: false
  });
  return prefersReduced || slowAnimationDevices;
};
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/components/PickersPopper.js


const PickersPopper_excluded = ["PaperComponent", "popperPlacement", "ownerState", "children", "paperSlotProps", "paperClasses", "onPaperClick", "onPaperTouchStart"];













const PickersPopper_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    paper: ['paper']
  };
  return (0,composeClasses/* default */.A)(slots, getPickersPopperUtilityClass, classes);
};
const PickersPopperRoot = (0,styled/* default */.Ay)(material_Popper_Popper, {
  name: 'MuiPickersPopper',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})(({
  theme
}) => ({
  zIndex: theme.zIndex.modal
}));
const PickersPopperPaper = (0,styled/* default */.Ay)(Paper_Paper, {
  name: 'MuiPickersPopper',
  slot: 'Paper',
  overridesResolver: (_, styles) => styles.paper
})({
  outline: 0,
  transformOrigin: 'top center',
  variants: [{
    props: ({
      placement
    }) => ['top', 'top-start', 'top-end'].includes(placement),
    style: {
      transformOrigin: 'bottom center'
    }
  }]
});
function clickedRootScrollbar(event, doc) {
  return doc.documentElement.clientWidth < event.clientX || doc.documentElement.clientHeight < event.clientY;
}
/**
 * Based on @mui/material/ClickAwayListener without the customization.
 * We can probably strip away even more since children won't be portaled.
 * @param {boolean} active Only listen to clicks when the popper is opened.
 * @param {(event: MouseEvent | TouchEvent) => void} onClickAway The callback to call when clicking outside the popper.
 * @returns {Array} The ref and event handler to listen to the outside clicks.
 */
function useClickAwayListener(active, onClickAway) {
  const movedRef = react.useRef(false);
  const syntheticEventRef = react.useRef(false);
  const nodeRef = react.useRef(null);
  const activatedRef = react.useRef(false);
  react.useEffect(() => {
    if (!active) {
      return undefined;
    }

    // Ensure that this hook is not "activated" synchronously.
    // https://github.com/facebook/react/issues/20074
    function armClickAwayListener() {
      activatedRef.current = true;
    }
    document.addEventListener('mousedown', armClickAwayListener, true);
    document.addEventListener('touchstart', armClickAwayListener, true);
    return () => {
      document.removeEventListener('mousedown', armClickAwayListener, true);
      document.removeEventListener('touchstart', armClickAwayListener, true);
      activatedRef.current = false;
    };
  }, [active]);

  // The handler doesn't take event.defaultPrevented into account:
  //
  // event.preventDefault() is meant to stop default behaviors like
  // clicking a checkbox to check it, hitting a button to submit a form,
  // and hitting left arrow to move the cursor in a text input etc.
  // Only special HTML elements have these default behaviors.
  const handleClickAway = useEventCallback_useEventCallback(event => {
    if (!activatedRef.current) {
      return;
    }

    // Given developers can stop the propagation of the synthetic event,
    // we can only be confident with a positive value.
    const insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false;
    const doc = ownerDocument(nodeRef.current);

    // 1. IE11 support, which trigger the handleClickAway even after the unbind
    // 2. The child might render null.
    // 3. Behave like a blur listener.
    if (!nodeRef.current ||
    // is a TouchEvent?
    'clientX' in event && clickedRootScrollbar(event, doc)) {
      return;
    }

    // Do not act if user performed touchmove
    if (movedRef.current) {
      movedRef.current = false;
      return;
    }
    let insideDOM;

    // If not enough, can use https://github.com/DieterHolvoet/event-propagation-path/blob/master/propagationPath.js
    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      insideDOM = !doc.documentElement.contains(event.target) || nodeRef.current.contains(event.target);
    }
    if (!insideDOM && !insideReactTree) {
      onClickAway(event);
    }
  });

  // Keep track of mouse/touch events that bubbled up through the portal.
  const handleSynthetic = () => {
    syntheticEventRef.current = true;
  };
  react.useEffect(() => {
    if (active) {
      const doc = ownerDocument(nodeRef.current);
      const handleTouchMove = () => {
        movedRef.current = true;
      };
      doc.addEventListener('touchstart', handleClickAway);
      doc.addEventListener('touchmove', handleTouchMove);
      return () => {
        doc.removeEventListener('touchstart', handleClickAway);
        doc.removeEventListener('touchmove', handleTouchMove);
      };
    }
    return undefined;
  }, [active, handleClickAway]);
  react.useEffect(() => {
    // TODO This behavior is not tested automatically
    // It's unclear whether this is due to different update semantics in test (batched in act() vs discrete on click).
    // Or if this is a timing related issues due to different Transition components
    // Once we get rid of all the manual scheduling (for example setTimeout(update, 0)) we can revisit this code+test.
    if (active) {
      const doc = ownerDocument(nodeRef.current);
      doc.addEventListener('click', handleClickAway);
      return () => {
        doc.removeEventListener('click', handleClickAway);
        // cleanup `handleClickAway`
        syntheticEventRef.current = false;
      };
    }
    return undefined;
  }, [active, handleClickAway]);
  return [nodeRef, handleSynthetic, handleSynthetic];
}
const PickersPopperPaperWrapper = /*#__PURE__*/react.forwardRef((props, ref) => {
  const {
      PaperComponent,
      popperPlacement,
      ownerState: inOwnerState,
      children,
      paperSlotProps,
      paperClasses,
      onPaperClick,
      onPaperTouchStart
      // picks up the style props provided by `Transition`
      // https://mui.com/material-ui/transitions/#child-requirement
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, PickersPopper_excluded);
  const ownerState = (0,esm_extends/* default */.A)({}, inOwnerState, {
    placement: popperPlacement
  });
  const paperProps = useSlotProps_useSlotProps({
    elementType: PaperComponent,
    externalSlotProps: paperSlotProps,
    additionalProps: {
      tabIndex: -1,
      elevation: 8,
      ref
    },
    className: paperClasses,
    ownerState
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(PaperComponent, (0,esm_extends/* default */.A)({}, other, paperProps, {
    onClick: event => {
      onPaperClick(event);
      paperProps.onClick?.(event);
    },
    onTouchStart: event => {
      onPaperTouchStart(event);
      paperProps.onTouchStart?.(event);
    },
    ownerState: ownerState,
    children: children
  }));
});
function PickersPopper(inProps) {
  const props = (0,useThemeProps/* default */.A)({
    props: inProps,
    name: 'MuiPickersPopper'
  });
  const {
    anchorEl,
    children,
    containerRef = null,
    shouldRestoreFocus,
    onBlur,
    onDismiss,
    open,
    role,
    placement,
    slots,
    slotProps,
    reduceAnimations: inReduceAnimations
  } = props;
  react.useEffect(() => {
    function handleKeyDown(nativeEvent) {
      if (open && nativeEvent.key === 'Escape') {
        onDismiss();
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onDismiss, open]);
  const lastFocusedElementRef = react.useRef(null);
  react.useEffect(() => {
    if (role === 'tooltip' || shouldRestoreFocus && !shouldRestoreFocus()) {
      return;
    }
    if (open) {
      lastFocusedElementRef.current = getActiveElement(document);
    } else if (lastFocusedElementRef.current && lastFocusedElementRef.current instanceof HTMLElement) {
      // make sure the button is flushed with updated label, before returning focus to it
      // avoids issue, where screen reader could fail to announce selected date after selection
      setTimeout(() => {
        if (lastFocusedElementRef.current instanceof HTMLElement) {
          lastFocusedElementRef.current.focus();
        }
      });
    }
  }, [open, role, shouldRestoreFocus]);
  const [clickAwayRef, onPaperClick, onPaperTouchStart] = useClickAwayListener(open, onBlur ?? onDismiss);
  const paperRef = react.useRef(null);
  const handleRef = useForkRef(paperRef, containerRef);
  const handlePaperRef = useForkRef(handleRef, clickAwayRef);
  const ownerState = props;
  const classes = PickersPopper_useUtilityClasses(ownerState);
  const defaultReduceAnimations = useDefaultReduceAnimations();
  const reduceAnimations = inReduceAnimations ?? defaultReduceAnimations;
  const handleKeyDown = event => {
    if (event.key === 'Escape') {
      // stop the propagation to avoid closing parent modal
      event.stopPropagation();
      onDismiss();
    }
  };
  const Transition = slots?.desktopTransition ?? reduceAnimations ? Fade_Fade : Grow_Grow;
  const FocusTrap = slots?.desktopTrapFocus ?? Unstable_TrapFocus_FocusTrap;
  const Paper = slots?.desktopPaper ?? PickersPopperPaper;
  const Popper = slots?.popper ?? PickersPopperRoot;
  const popperProps = useSlotProps_useSlotProps({
    elementType: Popper,
    externalSlotProps: slotProps?.popper,
    additionalProps: {
      transition: true,
      role,
      open,
      anchorEl,
      placement,
      onKeyDown: handleKeyDown
    },
    className: classes.root,
    ownerState: props
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Popper, (0,esm_extends/* default */.A)({}, popperProps, {
    children: ({
      TransitionProps,
      placement: popperPlacement
    }) => /*#__PURE__*/(0,jsx_runtime.jsx)(FocusTrap, (0,esm_extends/* default */.A)({
      open: open,
      disableAutoFocus: true
      // pickers are managing focus position manually
      // without this prop the focus is returned to the button before `aria-label` is updated
      // which would force screen readers to read too old label
      ,
      disableRestoreFocus: true,
      disableEnforceFocus: role === 'tooltip',
      isEnabled: () => true
    }, slotProps?.desktopTrapFocus, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Transition, (0,esm_extends/* default */.A)({}, TransitionProps, slotProps?.desktopTransition, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(PickersPopperPaperWrapper, {
          PaperComponent: Paper,
          ownerState: ownerState,
          popperPlacement: popperPlacement,
          ref: handlePaperRef,
          onPaperClick: onPaperClick,
          onPaperTouchStart: onPaperTouchStart,
          paperClasses: classes.paper,
          paperSlotProps: slotProps?.desktopPaper,
          children: children
        })
      }))
    }))
  }));
}
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/hooks/useOpenState.js

const useOpenState = ({
  open,
  onOpen,
  onClose
}) => {
  const isControllingOpenProp = react.useRef(typeof open === 'boolean').current;
  const [openState, setIsOpenState] = react.useState(false);

  // It is required to update inner state in useEffect in order to avoid situation when
  // Our component is not mounted yet, but `open` state is set to `true` (for example initially opened)
  react.useEffect(() => {
    if (isControllingOpenProp) {
      if (typeof open !== 'boolean') {
        throw new Error('You must not mix controlling and uncontrolled mode for `open` prop');
      }
      setIsOpenState(open);
    }
  }, [isControllingOpenProp, open]);
  const setIsOpen = react.useCallback(newIsOpen => {
    if (!isControllingOpenProp) {
      setIsOpenState(newIsOpen);
    }
    if (newIsOpen && onOpen) {
      onOpen();
    }
    if (!newIsOpen && onClose) {
      onClose();
    }
  }, [isControllingOpenProp, onOpen, onClose]);
  return {
    isOpen: openState,
    setIsOpen
  };
};
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/validation/useValidation.js
'use client';




/**
 * Utility hook to check if a given value is valid based on the provided validation props.
 * @template TDate
 * @template TValue The value type. It will be either the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
 * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
 * @param {UseValidationOptions<TValue, TDate, TError, TValidationProps>} options The options to configure the hook.
 * @param {TValue} options.value The value to validate.
 * @param {PickersTimezone} options.timezone The timezone to use for the validation.
 * @param {Validator<TValue, TDate, TError, TValidationProps>} options.validator The validator function to use.
 * @param {TValidationProps} options.props The validation props, they differ depending on the component.
 * @param {(error: TError, value: TValue) => void} options.onError Callback fired when the error associated with the current value changes.
 */
function useValidation(options) {
  const {
    props,
    validator,
    value,
    timezone,
    onError
  } = options;
  const adapter = useLocalizationContext();
  const previousValidationErrorRef = react.useRef(validator.valueManager.defaultErrorState);
  const validationError = validator({
    adapter,
    value,
    timezone,
    props
  });
  const hasValidationError = validator.valueManager.hasError(validationError);
  react.useEffect(() => {
    if (onError && !validator.valueManager.isSameError(validationError, previousValidationErrorRef.current)) {
      onError(validationError, value);
    }
    previousValidationErrorRef.current = validationError;
  }, [validator, onError, validationError, value]);
  const getValidationErrorForNewValue = useEventCallback_useEventCallback(newValue => {
    return validator({
      adapter,
      value: newValue,
      timezone,
      props
    });
  });
  return {
    validationError,
    hasValidationError,
    getValidationErrorForNewValue
  };
}
;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/useControlled/useControlled.js
'use client';

/* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */

function useControlled({
  controlled,
  default: defaultProp,
  name,
  state = 'value'
}) {
  // isControlled is ignored in the hook dependency lists as it should never change.
  const {
    current: isControlled
  } = react.useRef(controlled !== undefined);
  const [valueState, setValue] = react.useState(defaultProp);
  const value = isControlled ? controlled : valueState;
  if (false) {}
  const setValueIfUncontrolled = react.useCallback(newValue => {
    if (!isControlled) {
      setValue(newValue);
    }
  }, []);
  return [value, setValueIfUncontrolled];
}
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/hooks/useValueWithTimezone.js




/**
 * Hooks making sure that:
 * - The value returned by `onChange` always have the timezone of `props.value` or `props.defaultValue` if defined
 * - The value rendered is always the one from `props.timezone` if defined
 */
const useValueWithTimezone = ({
  timezone: timezoneProp,
  value: valueProp,
  defaultValue,
  referenceDate,
  onChange,
  valueManager
}) => {
  const utils = useUtils_useUtils();
  const firstDefaultValue = react.useRef(defaultValue);
  const inputValue = valueProp ?? firstDefaultValue.current ?? valueManager.emptyValue;
  const inputTimezone = react.useMemo(() => valueManager.getTimezone(utils, inputValue), [utils, valueManager, inputValue]);
  const setInputTimezone = useEventCallback_useEventCallback(newValue => {
    if (inputTimezone == null) {
      return newValue;
    }
    return valueManager.setTimezone(utils, inputTimezone, newValue);
  });
  let timezoneToRender;
  if (timezoneProp) {
    timezoneToRender = timezoneProp;
  } else if (inputTimezone) {
    timezoneToRender = inputTimezone;
  } else if (referenceDate) {
    timezoneToRender = utils.getTimezone(referenceDate);
  } else {
    timezoneToRender = 'default';
  }
  const valueWithTimezoneToRender = react.useMemo(() => valueManager.setTimezone(utils, timezoneToRender, inputValue), [valueManager, utils, timezoneToRender, inputValue]);
  const handleValueChange = useEventCallback_useEventCallback((newValue, ...otherParams) => {
    const newValueWithInputTimezone = setInputTimezone(newValue);
    onChange?.(newValueWithInputTimezone, ...otherParams);
  });
  return {
    value: valueWithTimezoneToRender,
    handleValueChange,
    timezone: timezoneToRender
  };
};

/**
 * Wrapper around `useControlled` and `useValueWithTimezone`
 */
const useControlledValueWithTimezone = ({
  name,
  timezone: timezoneProp,
  value: valueProp,
  defaultValue,
  referenceDate,
  onChange: onChangeProp,
  valueManager
}) => {
  const [valueWithInputTimezone, setValue] = useControlled({
    name,
    state: 'value',
    controlled: valueProp,
    default: defaultValue ?? valueManager.emptyValue
  });
  const onChange = useEventCallback_useEventCallback((newValue, ...otherParams) => {
    setValue(newValue);
    onChangeProp?.(newValue, ...otherParams);
  });
  return useValueWithTimezone({
    timezone: timezoneProp,
    value: valueWithInputTimezone,
    defaultValue: undefined,
    referenceDate,
    onChange,
    valueManager
  });
};
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/hooks/usePicker/usePickerValue.js







/**
 * Decide if the new value should be published
 * The published value will be passed to `onChange` if defined.
 */
const shouldPublishValue = params => {
  const {
    action,
    hasChanged,
    dateState,
    isControlled
  } = params;
  const isCurrentValueTheDefaultValue = !isControlled && !dateState.hasBeenModifiedSinceMount;

  // The field is responsible for only calling `onChange` when needed.
  if (action.name === 'setValueFromField') {
    return true;
  }
  if (action.name === 'setValueFromAction') {
    // If the component is not controlled, and the value has not been modified since the mount,
    // Then we want to publish the default value whenever the user pressed the "Accept", "Today" or "Clear" button.
    if (isCurrentValueTheDefaultValue && ['accept', 'today', 'clear'].includes(action.pickerAction)) {
      return true;
    }
    return hasChanged(dateState.lastPublishedValue);
  }
  if (action.name === 'setValueFromView' && action.selectionState !== 'shallow') {
    // On the first view,
    // If the value is not controlled, then clicking on any value (including the one equal to `defaultValue`) should call `onChange`
    if (isCurrentValueTheDefaultValue) {
      return true;
    }
    return hasChanged(dateState.lastPublishedValue);
  }
  if (action.name === 'setValueFromShortcut') {
    // On the first view,
    // If the value is not controlled, then clicking on any value (including the one equal to `defaultValue`) should call `onChange`
    if (isCurrentValueTheDefaultValue) {
      return true;
    }
    return hasChanged(dateState.lastPublishedValue);
  }
  return false;
};

/**
 * Decide if the new value should be committed.
 * The committed value will be passed to `onAccept` if defined.
 * It will also be used as a reset target when calling the `cancel` picker action (when clicking on the "Cancel" button).
 */
const shouldCommitValue = params => {
  const {
    action,
    hasChanged,
    dateState,
    isControlled,
    closeOnSelect
  } = params;
  const isCurrentValueTheDefaultValue = !isControlled && !dateState.hasBeenModifiedSinceMount;
  if (action.name === 'setValueFromAction') {
    // If the component is not controlled, and the value has not been modified since the mount,
    // Then we want to commit the default value whenever the user pressed the "Accept", "Today" or "Clear" button.
    if (isCurrentValueTheDefaultValue && ['accept', 'today', 'clear'].includes(action.pickerAction)) {
      return true;
    }
    return hasChanged(dateState.lastCommittedValue);
  }
  if (action.name === 'setValueFromView' && action.selectionState === 'finish' && closeOnSelect) {
    // On picker where the 1st view is also the last view,
    // If the value is not controlled, then clicking on any value (including the one equal to `defaultValue`) should call `onAccept`
    if (isCurrentValueTheDefaultValue) {
      return true;
    }
    return hasChanged(dateState.lastCommittedValue);
  }
  if (action.name === 'setValueFromShortcut') {
    return action.changeImportance === 'accept' && hasChanged(dateState.lastCommittedValue);
  }
  return false;
};

/**
 * Decide if the picker should be closed after the value is updated.
 */
const shouldClosePicker = params => {
  const {
    action,
    closeOnSelect
  } = params;
  if (action.name === 'setValueFromAction') {
    return true;
  }
  if (action.name === 'setValueFromView') {
    return action.selectionState === 'finish' && closeOnSelect;
  }
  if (action.name === 'setValueFromShortcut') {
    return action.changeImportance === 'accept';
  }
  return false;
};

/**
 * Manage the value lifecycle of all the pickers.
 */
const usePickerValue = ({
  props,
  valueManager,
  valueType,
  wrapperVariant,
  validator
}) => {
  const {
    onAccept,
    onChange,
    value: inValueWithoutRenderTimezone,
    defaultValue: inDefaultValue,
    closeOnSelect = wrapperVariant === 'desktop',
    timezone: timezoneProp,
    referenceDate
  } = props;
  const {
    current: defaultValue
  } = react.useRef(inDefaultValue);
  const {
    current: isControlled
  } = react.useRef(inValueWithoutRenderTimezone !== undefined);
  const [previousTimezoneProp, setPreviousTimezoneProp] = react.useState(timezoneProp);

  /* eslint-disable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */
  if (false) {}
  /* eslint-enable react-hooks/rules-of-hooks, react-hooks/exhaustive-deps */

  const utils = useUtils_useUtils();
  const adapter = useLocalizationContext();
  const {
    isOpen,
    setIsOpen
  } = useOpenState(props);
  const {
    timezone,
    value: inValueWithTimezoneToRender,
    handleValueChange
  } = useValueWithTimezone({
    timezone: timezoneProp,
    value: inValueWithoutRenderTimezone,
    defaultValue,
    referenceDate,
    onChange,
    valueManager
  });
  const [dateState, setDateState] = react.useState(() => {
    let initialValue;
    if (inValueWithTimezoneToRender !== undefined) {
      initialValue = inValueWithTimezoneToRender;
    } else if (defaultValue !== undefined) {
      initialValue = defaultValue;
    } else {
      initialValue = valueManager.emptyValue;
    }
    return {
      draft: initialValue,
      lastPublishedValue: initialValue,
      lastCommittedValue: initialValue,
      lastControlledValue: inValueWithoutRenderTimezone,
      hasBeenModifiedSinceMount: false
    };
  });
  const timezoneFromDraftValue = valueManager.getTimezone(utils, dateState.draft);
  if (previousTimezoneProp !== timezoneProp) {
    setPreviousTimezoneProp(timezoneProp);
    if (timezoneProp && timezoneFromDraftValue && timezoneProp !== timezoneFromDraftValue) {
      setDateState(prev => (0,esm_extends/* default */.A)({}, prev, {
        draft: valueManager.setTimezone(utils, timezoneProp, prev.draft)
      }));
    }
  }
  const {
    getValidationErrorForNewValue
  } = useValidation({
    props,
    validator,
    timezone,
    value: dateState.draft,
    onError: props.onError
  });
  const updateDate = useEventCallback_useEventCallback(action => {
    const updaterParams = {
      action,
      dateState,
      hasChanged: comparison => !valueManager.areValuesEqual(utils, action.value, comparison),
      isControlled,
      closeOnSelect
    };
    const shouldPublish = shouldPublishValue(updaterParams);
    const shouldCommit = shouldCommitValue(updaterParams);
    const shouldClose = shouldClosePicker(updaterParams);
    setDateState(prev => (0,esm_extends/* default */.A)({}, prev, {
      draft: action.value,
      lastPublishedValue: shouldPublish ? action.value : prev.lastPublishedValue,
      lastCommittedValue: shouldCommit ? action.value : prev.lastCommittedValue,
      hasBeenModifiedSinceMount: true
    }));
    let cachedContext = null;
    const getContext = () => {
      if (!cachedContext) {
        const validationError = action.name === 'setValueFromField' ? action.context.validationError : getValidationErrorForNewValue(action.value);
        cachedContext = {
          validationError
        };
        if (action.name === 'setValueFromShortcut') {
          cachedContext.shortcut = action.shortcut;
        }
      }
      return cachedContext;
    };
    if (shouldPublish) {
      handleValueChange(action.value, getContext());
    }
    if (shouldCommit && onAccept) {
      onAccept(action.value, getContext());
    }
    if (shouldClose) {
      setIsOpen(false);
    }
  });
  if (dateState.lastControlledValue !== inValueWithoutRenderTimezone) {
    const isUpdateComingFromPicker = valueManager.areValuesEqual(utils, dateState.draft, inValueWithTimezoneToRender);
    setDateState(prev => (0,esm_extends/* default */.A)({}, prev, {
      lastControlledValue: inValueWithoutRenderTimezone
    }, isUpdateComingFromPicker ? {} : {
      lastCommittedValue: inValueWithTimezoneToRender,
      lastPublishedValue: inValueWithTimezoneToRender,
      draft: inValueWithTimezoneToRender,
      hasBeenModifiedSinceMount: true
    }));
  }
  const handleClear = useEventCallback_useEventCallback(() => {
    updateDate({
      value: valueManager.emptyValue,
      name: 'setValueFromAction',
      pickerAction: 'clear'
    });
  });
  const handleAccept = useEventCallback_useEventCallback(() => {
    updateDate({
      value: dateState.lastPublishedValue,
      name: 'setValueFromAction',
      pickerAction: 'accept'
    });
  });
  const handleDismiss = useEventCallback_useEventCallback(() => {
    updateDate({
      value: dateState.lastPublishedValue,
      name: 'setValueFromAction',
      pickerAction: 'dismiss'
    });
  });
  const handleCancel = useEventCallback_useEventCallback(() => {
    updateDate({
      value: dateState.lastCommittedValue,
      name: 'setValueFromAction',
      pickerAction: 'cancel'
    });
  });
  const handleSetToday = useEventCallback_useEventCallback(() => {
    updateDate({
      value: valueManager.getTodayValue(utils, timezone, valueType),
      name: 'setValueFromAction',
      pickerAction: 'today'
    });
  });
  const handleOpen = useEventCallback_useEventCallback(event => {
    event.preventDefault();
    setIsOpen(true);
  });
  const handleClose = useEventCallback_useEventCallback(event => {
    event?.preventDefault();
    setIsOpen(false);
  });
  const handleChange = useEventCallback_useEventCallback((newValue, selectionState = 'partial') => updateDate({
    name: 'setValueFromView',
    value: newValue,
    selectionState
  }));
  const handleSelectShortcut = useEventCallback_useEventCallback((newValue, changeImportance, shortcut) => updateDate({
    name: 'setValueFromShortcut',
    value: newValue,
    changeImportance,
    shortcut
  }));
  const handleChangeFromField = useEventCallback_useEventCallback((newValue, context) => updateDate({
    name: 'setValueFromField',
    value: newValue,
    context
  }));
  const actions = {
    onClear: handleClear,
    onAccept: handleAccept,
    onDismiss: handleDismiss,
    onCancel: handleCancel,
    onSetToday: handleSetToday,
    onOpen: handleOpen,
    onClose: handleClose
  };
  const fieldResponse = {
    value: dateState.draft,
    onChange: handleChangeFromField
  };
  const viewValue = react.useMemo(() => valueManager.cleanValue(utils, dateState.draft), [utils, valueManager, dateState.draft]);
  const viewResponse = {
    value: viewValue,
    onChange: handleChange,
    onClose: handleClose,
    open: isOpen
  };
  const isValid = testedValue => {
    const error = validator({
      adapter,
      value: testedValue,
      timezone,
      props
    });
    return !valueManager.hasError(error);
  };
  const layoutResponse = (0,esm_extends/* default */.A)({}, actions, {
    value: viewValue,
    onChange: handleChange,
    onSelectShortcut: handleSelectShortcut,
    isValid
  });
  const contextValue = react.useMemo(() => ({
    onOpen: handleOpen,
    onClose: handleClose,
    open: isOpen
  }), [isOpen, handleClose, handleOpen]);
  return {
    open: isOpen,
    fieldProps: fieldResponse,
    viewProps: viewResponse,
    layoutProps: layoutResponse,
    actions,
    contextValue
  };
};
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/hooks/useViews.js



let warnedOnceNotValidView = false;
function useViews({
  onChange,
  onViewChange,
  openTo,
  view: inView,
  views,
  autoFocus,
  focusedView: inFocusedView,
  onFocusedViewChange
}) {
  if (false) {}
  const previousOpenTo = react.useRef(openTo);
  const previousViews = react.useRef(views);
  const defaultView = react.useRef(views.includes(openTo) ? openTo : views[0]);
  const [view, setView] = useControlled({
    name: 'useViews',
    state: 'view',
    controlled: inView,
    default: defaultView.current
  });
  const defaultFocusedView = react.useRef(autoFocus ? view : null);
  const [focusedView, setFocusedView] = useControlled({
    name: 'useViews',
    state: 'focusedView',
    controlled: inFocusedView,
    default: defaultFocusedView.current
  });
  react.useEffect(() => {
    // Update the current view when `openTo` or `views` props change
    if (previousOpenTo.current && previousOpenTo.current !== openTo || previousViews.current && previousViews.current.some(previousView => !views.includes(previousView))) {
      setView(views.includes(openTo) ? openTo : views[0]);
      previousViews.current = views;
      previousOpenTo.current = openTo;
    }
  }, [openTo, setView, view, views]);
  const viewIndex = views.indexOf(view);
  const previousView = views[viewIndex - 1] ?? null;
  const nextView = views[viewIndex + 1] ?? null;
  const handleFocusedViewChange = useEventCallback_useEventCallback((viewToFocus, hasFocus) => {
    if (hasFocus) {
      // Focus event
      setFocusedView(viewToFocus);
    } else {
      // Blur event
      setFocusedView(prevFocusedView => viewToFocus === prevFocusedView ? null : prevFocusedView // If false the blur is due to view switching
      );
    }
    onFocusedViewChange?.(viewToFocus, hasFocus);
  });
  const handleChangeView = useEventCallback_useEventCallback(newView => {
    // always keep the focused view in sync
    handleFocusedViewChange(newView, true);
    if (newView === view) {
      return;
    }
    setView(newView);
    if (onViewChange) {
      onViewChange(newView);
    }
  });
  const goToNextView = useEventCallback_useEventCallback(() => {
    if (nextView) {
      handleChangeView(nextView);
    }
  });
  const setValueAndGoToNextView = useEventCallback_useEventCallback((value, currentViewSelectionState, selectedView) => {
    const isSelectionFinishedOnCurrentView = currentViewSelectionState === 'finish';
    const hasMoreViews = selectedView ?
    // handles case like `DateTimePicker`, where a view might return a `finish` selection state
    // but when it's not the final view given all `views` -> overall selection state should be `partial`.
    views.indexOf(selectedView) < views.length - 1 : Boolean(nextView);
    const globalSelectionState = isSelectionFinishedOnCurrentView && hasMoreViews ? 'partial' : currentViewSelectionState;
    onChange(value, globalSelectionState, selectedView);
    // Detects if the selected view is not the active one.
    // Can happen if multiple views are displayed, like in `DesktopDateTimePicker` or `MultiSectionDigitalClock`.
    if (selectedView && selectedView !== view) {
      const nextViewAfterSelected = views[views.indexOf(selectedView) + 1];
      if (nextViewAfterSelected) {
        // move to next view after the selected one
        handleChangeView(nextViewAfterSelected);
      }
    } else if (isSelectionFinishedOnCurrentView) {
      goToNextView();
    }
  });
  return {
    view,
    setView: handleChangeView,
    focusedView,
    setFocusedView: handleFocusedViewChange,
    nextView,
    previousView,
    // Always return up-to-date default view instead of the initial one (i.e. defaultView.current)
    defaultView: views.includes(openTo) ? openTo : views[0],
    goToNextView,
    setValueAndGoToNextView
  };
}
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/hooks/usePicker/usePickerViews.js


const usePickerViews_excluded = ["className", "sx"];






/**
 * Props used to handle the views that are common to all pickers.
 */

/**
 * Props used to handle the views of the pickers.
 */

/**
 * Props used to handle the value of the pickers.
 */

/**
 * Manage the views of all the pickers:
 * - Handles the view switch
 * - Handles the switch between UI views and field views
 * - Handles the focus management when switching views
 */
const usePickerViews = ({
  props,
  propsFromPickerValue,
  additionalViewProps,
  autoFocusView,
  rendererInterceptor,
  fieldRef
}) => {
  const {
    onChange,
    open,
    onClose
  } = propsFromPickerValue;
  const {
    view: inView,
    views,
    openTo,
    onViewChange,
    viewRenderers,
    timezone
  } = props;
  const propsToForwardToView = (0,objectWithoutPropertiesLoose/* default */.A)(props, usePickerViews_excluded);
  const {
    view,
    setView,
    defaultView,
    focusedView,
    setFocusedView,
    setValueAndGoToNextView
  } = useViews({
    view: inView,
    views,
    openTo,
    onChange,
    onViewChange,
    autoFocus: autoFocusView
  });
  const {
    hasUIView,
    viewModeLookup
  } = react.useMemo(() => views.reduce((acc, viewForReduce) => {
    let viewMode;
    if (viewRenderers[viewForReduce] != null) {
      viewMode = 'UI';
    } else {
      viewMode = 'field';
    }
    acc.viewModeLookup[viewForReduce] = viewMode;
    if (viewMode === 'UI') {
      acc.hasUIView = true;
    }
    return acc;
  }, {
    hasUIView: false,
    viewModeLookup: {}
  }), [viewRenderers, views]);
  const timeViewsCount = react.useMemo(() => views.reduce((acc, viewForReduce) => {
    if (viewRenderers[viewForReduce] != null && isTimeView(viewForReduce)) {
      return acc + 1;
    }
    return acc;
  }, 0), [viewRenderers, views]);
  const currentViewMode = viewModeLookup[view];
  const shouldRestoreFocus = useEventCallback_useEventCallback(() => currentViewMode === 'UI');
  const [popperView, setPopperView] = react.useState(currentViewMode === 'UI' ? view : null);
  if (popperView !== view && viewModeLookup[view] === 'UI') {
    setPopperView(view);
  }
  useEnhancedEffect_useEnhancedEffect(() => {
    // Handle case of `DateTimePicker` without time renderers
    if (currentViewMode === 'field' && open) {
      onClose();
      setTimeout(() => {
        fieldRef?.current?.setSelectedSections(view);
        // focusing the input before the range selection is done
        // calling it outside of timeout results in an inconsistent behavior between Safari And Chrome
        fieldRef?.current?.focusField(view);
      });
    }
  }, [view]); // eslint-disable-line react-hooks/exhaustive-deps

  useEnhancedEffect_useEnhancedEffect(() => {
    if (!open) {
      return;
    }
    let newView = view;

    // If the current view is a field view, go to the last popper view
    if (currentViewMode === 'field' && popperView != null) {
      newView = popperView;
    }

    // If the current view is not the default view and both are UI views
    if (newView !== defaultView && viewModeLookup[newView] === 'UI' && viewModeLookup[defaultView] === 'UI') {
      newView = defaultView;
    }
    if (newView !== view) {
      setView(newView);
    }
    setFocusedView(newView, true);
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  const layoutProps = {
    views,
    view: popperView,
    onViewChange: setView
  };
  return {
    hasUIView,
    shouldRestoreFocus,
    layoutProps,
    renderCurrentView: () => {
      if (popperView == null) {
        return null;
      }
      const renderer = viewRenderers[popperView];
      if (renderer == null) {
        return null;
      }
      const rendererProps = (0,esm_extends/* default */.A)({}, propsToForwardToView, additionalViewProps, propsFromPickerValue, {
        views,
        timezone,
        onChange: setValueAndGoToNextView,
        view: popperView,
        onViewChange: setView,
        focusedView,
        onFocusedViewChange: setFocusedView,
        showViewSwitcher: timeViewsCount > 1,
        timeViewsCount
      });
      if (rendererInterceptor) {
        return rendererInterceptor(viewRenderers, popperView, rendererProps);
      }
      return renderer(rendererProps);
    }
  };
};
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/RtlProvider/index.js
var RtlProvider = __webpack_require__(50648);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/hooks/useIsLandscape.js



function getOrientation() {
  if (typeof window === 'undefined') {
    return 'portrait';
  }
  if (window.screen && window.screen.orientation && window.screen.orientation.angle) {
    return Math.abs(window.screen.orientation.angle) === 90 ? 'landscape' : 'portrait';
  }

  // Support IOS safari
  if (window.orientation) {
    return Math.abs(Number(window.orientation)) === 90 ? 'landscape' : 'portrait';
  }
  return 'portrait';
}
const useIsLandscape = (views, customOrientation) => {
  const [orientation, setOrientation] = react.useState(getOrientation);
  useEnhancedEffect_useEnhancedEffect(() => {
    const eventHandler = () => {
      setOrientation(getOrientation());
    };
    window.addEventListener('orientationchange', eventHandler);
    return () => {
      window.removeEventListener('orientationchange', eventHandler);
    };
  }, []);
  if (arrayIncludes(views, ['hours', 'minutes', 'seconds'])) {
    // could not display 13:34:44 in landscape mode
    return false;
  }
  const orientationToUse = customOrientation || orientation;
  return orientationToUse === 'landscape';
};
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/hooks/usePicker/usePickerLayoutProps.js




/**
 * Props used to create the layout of the views.
 * Those props are exposed on all the pickers.
 */

/**
 * Prepare the props for the view layout (managed by `PickersLayout`)
 */
const usePickerLayoutProps = ({
  props,
  propsFromPickerValue,
  propsFromPickerViews,
  wrapperVariant
}) => {
  const {
    orientation
  } = props;
  const isLandscape = useIsLandscape(propsFromPickerViews.views, orientation);
  const isRtl = (0,RtlProvider/* useRtl */.I)();
  const layoutProps = (0,esm_extends/* default */.A)({}, propsFromPickerViews, propsFromPickerValue, {
    isLandscape,
    isRtl,
    wrapperVariant,
    disabled: props.disabled,
    readOnly: props.readOnly
  });
  return {
    layoutProps
  };
};
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/hooks/usePicker/usePickerOwnerState.js

function usePickerOwnerState(parameters) {
  const {
    props,
    pickerValueResponse
  } = parameters;
  return react.useMemo(() => ({
    value: pickerValueResponse.viewProps.value,
    open: pickerValueResponse.open,
    disabled: props.disabled ?? false,
    readOnly: props.readOnly ?? false
  }), [pickerValueResponse.viewProps.value, pickerValueResponse.open, props.disabled, props.readOnly]);
}
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/hooks/usePicker/usePicker.js





const usePicker = ({
  props,
  valueManager,
  valueType,
  wrapperVariant,
  additionalViewProps,
  validator,
  autoFocusView,
  rendererInterceptor,
  fieldRef
}) => {
  if (false) {}
  const pickerValueResponse = usePickerValue({
    props,
    valueManager,
    valueType,
    wrapperVariant,
    validator
  });
  const pickerViewsResponse = usePickerViews({
    props,
    additionalViewProps,
    autoFocusView,
    fieldRef,
    propsFromPickerValue: pickerValueResponse.viewProps,
    rendererInterceptor
  });
  const pickerLayoutResponse = usePickerLayoutProps({
    props,
    wrapperVariant,
    propsFromPickerValue: pickerValueResponse.layoutProps,
    propsFromPickerViews: pickerViewsResponse.layoutProps
  });
  const pickerOwnerState = usePickerOwnerState({
    props,
    pickerValueResponse
  });
  return {
    // Picker value
    open: pickerValueResponse.open,
    actions: pickerValueResponse.actions,
    fieldProps: pickerValueResponse.fieldProps,
    // Picker views
    renderCurrentView: pickerViewsResponse.renderCurrentView,
    hasUIView: pickerViewsResponse.hasUIView,
    shouldRestoreFocus: pickerViewsResponse.shouldRestoreFocus,
    // Picker layout
    layoutProps: pickerLayoutResponse.layoutProps,
    // Picker context
    contextValue: pickerValueResponse.contextValue,
    // Picker owner state
    ownerState: pickerOwnerState
  };
};
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/PickersLayout/pickersLayoutClasses.js


function getPickersLayoutUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiPickersLayout', slot);
}
const pickersLayoutClasses = (0,generateUtilityClasses/* default */.A)('MuiPickersLayout', ['root', 'landscape', 'contentWrapper', 'toolbar', 'actionBar', 'tabs', 'shortcuts']);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/resolveProps/resolveProps.js
var resolveProps = __webpack_require__(20711);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/styles/rootShouldForwardProp.js
var rootShouldForwardProp = __webpack_require__(86757);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Button/buttonClasses.js


function getButtonUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiButton', slot);
}
const buttonClasses = (0,generateUtilityClasses/* default */.A)('MuiButton', ['root', 'text', 'textInherit', 'textPrimary', 'textSecondary', 'textSuccess', 'textError', 'textInfo', 'textWarning', 'outlined', 'outlinedInherit', 'outlinedPrimary', 'outlinedSecondary', 'outlinedSuccess', 'outlinedError', 'outlinedInfo', 'outlinedWarning', 'contained', 'containedInherit', 'containedPrimary', 'containedSecondary', 'containedSuccess', 'containedError', 'containedInfo', 'containedWarning', 'disableElevation', 'focusVisible', 'disabled', 'colorInherit', 'colorPrimary', 'colorSecondary', 'colorSuccess', 'colorError', 'colorInfo', 'colorWarning', 'textSizeSmall', 'textSizeMedium', 'textSizeLarge', 'outlinedSizeSmall', 'outlinedSizeMedium', 'outlinedSizeLarge', 'containedSizeSmall', 'containedSizeMedium', 'containedSizeLarge', 'sizeMedium', 'sizeSmall', 'sizeLarge', 'fullWidth', 'startIcon', 'endIcon', 'icon', 'iconSizeSmall', 'iconSizeMedium', 'iconSizeLarge']);
/* harmony default export */ const Button_buttonClasses = (buttonClasses);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/ButtonGroup/ButtonGroupContext.js

/**
 * @ignore - internal component.
 */
const ButtonGroupContext = /*#__PURE__*/react.createContext({});
if (false) {}
/* harmony default export */ const ButtonGroup_ButtonGroupContext = (ButtonGroupContext);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/ButtonGroup/ButtonGroupButtonContext.js

/**
 * @ignore - internal component.
 */
const ButtonGroupButtonContext = /*#__PURE__*/react.createContext(undefined);
if (false) {}
/* harmony default export */ const ButtonGroup_ButtonGroupButtonContext = (ButtonGroupButtonContext);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Button/Button.js
'use client';



const Button_excluded = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"];















const Button_useUtilityClasses = ownerState => {
  const {
    color,
    disableElevation,
    fullWidth,
    size,
    variant,
    classes
  } = ownerState;
  const slots = {
    root: ['root', variant, `${variant}${(0,capitalize/* default */.A)(color)}`, `size${(0,capitalize/* default */.A)(size)}`, `${variant}Size${(0,capitalize/* default */.A)(size)}`, `color${(0,capitalize/* default */.A)(color)}`, disableElevation && 'disableElevation', fullWidth && 'fullWidth'],
    label: ['label'],
    startIcon: ['icon', 'startIcon', `iconSize${(0,capitalize/* default */.A)(size)}`],
    endIcon: ['icon', 'endIcon', `iconSize${(0,capitalize/* default */.A)(size)}`]
  };
  const composedClasses = (0,composeClasses/* default */.A)(slots, getButtonUtilityClass, classes);
  return (0,esm_extends/* default */.A)({}, classes, composedClasses);
};
const commonIconStyles = ownerState => (0,esm_extends/* default */.A)({}, ownerState.size === 'small' && {
  '& > *:nth-of-type(1)': {
    fontSize: 18
  }
}, ownerState.size === 'medium' && {
  '& > *:nth-of-type(1)': {
    fontSize: 20
  }
}, ownerState.size === 'large' && {
  '& > *:nth-of-type(1)': {
    fontSize: 22
  }
});
const ButtonRoot = (0,styled/* default */.Ay)(ButtonBase_ButtonBase, {
  shouldForwardProp: prop => (0,rootShouldForwardProp/* default */.A)(prop) || prop === 'classes',
  name: 'MuiButton',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, styles[ownerState.variant], styles[`${ownerState.variant}${(0,capitalize/* default */.A)(ownerState.color)}`], styles[`size${(0,capitalize/* default */.A)(ownerState.size)}`], styles[`${ownerState.variant}Size${(0,capitalize/* default */.A)(ownerState.size)}`], ownerState.color === 'inherit' && styles.colorInherit, ownerState.disableElevation && styles.disableElevation, ownerState.fullWidth && styles.fullWidth];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$palette$getCon, _theme$palette;
  const inheritContainedBackgroundColor = theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey[800];
  const inheritContainedHoverBackgroundColor = theme.palette.mode === 'light' ? theme.palette.grey.A100 : theme.palette.grey[700];
  return (0,esm_extends/* default */.A)({}, theme.typography.button, {
    minWidth: 64,
    padding: '6px 16px',
    borderRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create(['background-color', 'box-shadow', 'border-color', 'color'], {
      duration: theme.transitions.duration.short
    }),
    '&:hover': (0,esm_extends/* default */.A)({
      textDecoration: 'none',
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0,colorManipulator/* alpha */.X4)(theme.palette.text.primary, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }, ownerState.variant === 'text' && ownerState.color !== 'inherit' && {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0,colorManipulator/* alpha */.X4)(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }, ownerState.variant === 'outlined' && ownerState.color !== 'inherit' && {
      border: `1px solid ${(theme.vars || theme).palette[ownerState.color].main}`,
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0,colorManipulator/* alpha */.X4)(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: 'transparent'
      }
    }, ownerState.variant === 'contained' && {
      backgroundColor: theme.vars ? theme.vars.palette.Button.inheritContainedHoverBg : inheritContainedHoverBackgroundColor,
      boxShadow: (theme.vars || theme).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        boxShadow: (theme.vars || theme).shadows[2],
        backgroundColor: (theme.vars || theme).palette.grey[300]
      }
    }, ownerState.variant === 'contained' && ownerState.color !== 'inherit' && {
      backgroundColor: (theme.vars || theme).palette[ownerState.color].dark,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: (theme.vars || theme).palette[ownerState.color].main
      }
    }),
    '&:active': (0,esm_extends/* default */.A)({}, ownerState.variant === 'contained' && {
      boxShadow: (theme.vars || theme).shadows[8]
    }),
    [`&.${Button_buttonClasses.focusVisible}`]: (0,esm_extends/* default */.A)({}, ownerState.variant === 'contained' && {
      boxShadow: (theme.vars || theme).shadows[6]
    }),
    [`&.${Button_buttonClasses.disabled}`]: (0,esm_extends/* default */.A)({
      color: (theme.vars || theme).palette.action.disabled
    }, ownerState.variant === 'outlined' && {
      border: `1px solid ${(theme.vars || theme).palette.action.disabledBackground}`
    }, ownerState.variant === 'contained' && {
      color: (theme.vars || theme).palette.action.disabled,
      boxShadow: (theme.vars || theme).shadows[0],
      backgroundColor: (theme.vars || theme).palette.action.disabledBackground
    })
  }, ownerState.variant === 'text' && {
    padding: '6px 8px'
  }, ownerState.variant === 'text' && ownerState.color !== 'inherit' && {
    color: (theme.vars || theme).palette[ownerState.color].main
  }, ownerState.variant === 'outlined' && {
    padding: '5px 15px',
    border: '1px solid currentColor'
  }, ownerState.variant === 'outlined' && ownerState.color !== 'inherit' && {
    color: (theme.vars || theme).palette[ownerState.color].main,
    border: theme.vars ? `1px solid rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.5)` : `1px solid ${(0,colorManipulator/* alpha */.X4)(theme.palette[ownerState.color].main, 0.5)}`
  }, ownerState.variant === 'contained' && {
    color: theme.vars ?
    // this is safe because grey does not change between default light/dark mode
    theme.vars.palette.text.primary : (_theme$palette$getCon = (_theme$palette = theme.palette).getContrastText) == null ? void 0 : _theme$palette$getCon.call(_theme$palette, theme.palette.grey[300]),
    backgroundColor: theme.vars ? theme.vars.palette.Button.inheritContainedBg : inheritContainedBackgroundColor,
    boxShadow: (theme.vars || theme).shadows[2]
  }, ownerState.variant === 'contained' && ownerState.color !== 'inherit' && {
    color: (theme.vars || theme).palette[ownerState.color].contrastText,
    backgroundColor: (theme.vars || theme).palette[ownerState.color].main
  }, ownerState.color === 'inherit' && {
    color: 'inherit',
    borderColor: 'currentColor'
  }, ownerState.size === 'small' && ownerState.variant === 'text' && {
    padding: '4px 5px',
    fontSize: theme.typography.pxToRem(13)
  }, ownerState.size === 'large' && ownerState.variant === 'text' && {
    padding: '8px 11px',
    fontSize: theme.typography.pxToRem(15)
  }, ownerState.size === 'small' && ownerState.variant === 'outlined' && {
    padding: '3px 9px',
    fontSize: theme.typography.pxToRem(13)
  }, ownerState.size === 'large' && ownerState.variant === 'outlined' && {
    padding: '7px 21px',
    fontSize: theme.typography.pxToRem(15)
  }, ownerState.size === 'small' && ownerState.variant === 'contained' && {
    padding: '4px 10px',
    fontSize: theme.typography.pxToRem(13)
  }, ownerState.size === 'large' && ownerState.variant === 'contained' && {
    padding: '8px 22px',
    fontSize: theme.typography.pxToRem(15)
  }, ownerState.fullWidth && {
    width: '100%'
  });
}, ({
  ownerState
}) => ownerState.disableElevation && {
  boxShadow: 'none',
  '&:hover': {
    boxShadow: 'none'
  },
  [`&.${Button_buttonClasses.focusVisible}`]: {
    boxShadow: 'none'
  },
  '&:active': {
    boxShadow: 'none'
  },
  [`&.${Button_buttonClasses.disabled}`]: {
    boxShadow: 'none'
  }
});
const ButtonStartIcon = (0,styled/* default */.Ay)('span', {
  name: 'MuiButton',
  slot: 'StartIcon',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.startIcon, styles[`iconSize${(0,capitalize/* default */.A)(ownerState.size)}`]];
  }
})(({
  ownerState
}) => (0,esm_extends/* default */.A)({
  display: 'inherit',
  marginRight: 8,
  marginLeft: -4
}, ownerState.size === 'small' && {
  marginLeft: -2
}, commonIconStyles(ownerState)));
const ButtonEndIcon = (0,styled/* default */.Ay)('span', {
  name: 'MuiButton',
  slot: 'EndIcon',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.endIcon, styles[`iconSize${(0,capitalize/* default */.A)(ownerState.size)}`]];
  }
})(({
  ownerState
}) => (0,esm_extends/* default */.A)({
  display: 'inherit',
  marginRight: -4,
  marginLeft: 8
}, ownerState.size === 'small' && {
  marginRight: -2
}, commonIconStyles(ownerState)));
const Button = /*#__PURE__*/react.forwardRef(function Button(inProps, ref) {
  // props priority: `inProps` > `contextProps` > `themeDefaultProps`
  const contextProps = react.useContext(ButtonGroup_ButtonGroupContext);
  const buttonGroupButtonContextPositionClassName = react.useContext(ButtonGroup_ButtonGroupButtonContext);
  const resolvedProps = (0,resolveProps/* default */.A)(contextProps, inProps);
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: resolvedProps,
    name: 'MuiButton'
  });
  const {
      children,
      color = 'primary',
      component = 'button',
      className,
      disabled = false,
      disableElevation = false,
      disableFocusRipple = false,
      endIcon: endIconProp,
      focusVisibleClassName,
      fullWidth = false,
      size = 'medium',
      startIcon: startIconProp,
      type,
      variant = 'text'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, Button_excluded);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    color,
    component,
    disabled,
    disableElevation,
    disableFocusRipple,
    fullWidth,
    size,
    type,
    variant
  });
  const classes = Button_useUtilityClasses(ownerState);
  const startIcon = startIconProp && /*#__PURE__*/(0,jsx_runtime.jsx)(ButtonStartIcon, {
    className: classes.startIcon,
    ownerState: ownerState,
    children: startIconProp
  });
  const endIcon = endIconProp && /*#__PURE__*/(0,jsx_runtime.jsx)(ButtonEndIcon, {
    className: classes.endIcon,
    ownerState: ownerState,
    children: endIconProp
  });
  const positionClassName = buttonGroupButtonContextPositionClassName || '';
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ButtonRoot, (0,esm_extends/* default */.A)({
    ownerState: ownerState,
    className: (0,clsx/* default */.A)(contextProps.className, classes.root, className, positionClassName),
    component: component,
    disabled: disabled,
    focusRipple: !disableFocusRipple,
    focusVisibleClassName: (0,clsx/* default */.A)(classes.focusVisible, focusVisibleClassName),
    ref: ref,
    type: type
  }, other, {
    classes: classes,
    children: [startIcon, children, endIcon]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const Button_Button = (Button);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/DialogActions/dialogActionsClasses.js


function getDialogActionsUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiDialogActions', slot);
}
const dialogActionsClasses = (0,generateUtilityClasses/* default */.A)('MuiDialogActions', ['root', 'spacing']);
/* harmony default export */ const DialogActions_dialogActionsClasses = ((/* unused pure expression or super */ null && (dialogActionsClasses)));
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/DialogActions/DialogActions.js
'use client';



const DialogActions_excluded = ["className", "disableSpacing"];








const DialogActions_useUtilityClasses = ownerState => {
  const {
    classes,
    disableSpacing
  } = ownerState;
  const slots = {
    root: ['root', !disableSpacing && 'spacing']
  };
  return (0,composeClasses/* default */.A)(slots, getDialogActionsUtilityClass, classes);
};
const DialogActionsRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiDialogActions',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.disableSpacing && styles.spacing];
  }
})(({
  ownerState
}) => (0,esm_extends/* default */.A)({
  display: 'flex',
  alignItems: 'center',
  padding: 8,
  justifyContent: 'flex-end',
  flex: '0 0 auto'
}, !ownerState.disableSpacing && {
  '& > :not(style) ~ :not(style)': {
    marginLeft: 8
  }
}));
const DialogActions = /*#__PURE__*/react.forwardRef(function DialogActions(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiDialogActions'
  });
  const {
      className,
      disableSpacing = false
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, DialogActions_excluded);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    disableSpacing
  });
  const classes = DialogActions_useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(DialogActionsRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const DialogActions_DialogActions = (DialogActions);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/PickersActionBar/PickersActionBar.js
'use client';



const PickersActionBar_excluded = ["onAccept", "onClear", "onCancel", "onSetToday", "actions"];






/**
 * Demos:
 *
 * - [Custom slots and subcomponents](https://mui.com/x/react-date-pickers/custom-components/)
 * - [Custom layout](https://mui.com/x/react-date-pickers/custom-layout/)
 *
 * API:
 *
 * - [PickersActionBar API](https://mui.com/x/api/date-pickers/pickers-action-bar/)
 */
function PickersActionBar(props) {
  const {
      onAccept,
      onClear,
      onCancel,
      onSetToday,
      actions
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, PickersActionBar_excluded);
  const translations = usePickersTranslations();
  if (actions == null || actions.length === 0) {
    return null;
  }
  const buttons = actions?.map(actionType => {
    switch (actionType) {
      case 'clear':
        return /*#__PURE__*/(0,jsx_runtime.jsx)(Button_Button, {
          onClick: onClear,
          children: translations.clearButtonLabel
        }, actionType);
      case 'cancel':
        return /*#__PURE__*/(0,jsx_runtime.jsx)(Button_Button, {
          onClick: onCancel,
          children: translations.cancelButtonLabel
        }, actionType);
      case 'accept':
        return /*#__PURE__*/(0,jsx_runtime.jsx)(Button_Button, {
          onClick: onAccept,
          children: translations.okButtonLabel
        }, actionType);
      case 'today':
        return /*#__PURE__*/(0,jsx_runtime.jsx)(Button_Button, {
          onClick: onSetToday,
          children: translations.todayButtonLabel
        }, actionType);
      default:
        return null;
    }
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(DialogActions_DialogActions, (0,esm_extends/* default */.A)({}, other, {
    children: buttons
  }));
}
 false ? 0 : void 0;

;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/List/ListContext.js
'use client';



/**
 * @ignore - internal component.
 */
const ListContext = /*#__PURE__*/react.createContext({});
if (false) {}
/* harmony default export */ const List_ListContext = (ListContext);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/List/listClasses.js


function getListUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiList', slot);
}
const listClasses = (0,generateUtilityClasses/* default */.A)('MuiList', ['root', 'padding', 'dense', 'subheader']);
/* harmony default export */ const List_listClasses = ((/* unused pure expression or super */ null && (listClasses)));
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/List/List.js
'use client';



const List_excluded = ["children", "className", "component", "dense", "disablePadding", "subheader"];










const List_useUtilityClasses = ownerState => {
  const {
    classes,
    disablePadding,
    dense,
    subheader
  } = ownerState;
  const slots = {
    root: ['root', !disablePadding && 'padding', dense && 'dense', subheader && 'subheader']
  };
  return (0,composeClasses/* default */.A)(slots, getListUtilityClass, classes);
};
const ListRoot = (0,styled/* default */.Ay)('ul', {
  name: 'MuiList',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.disablePadding && styles.padding, ownerState.dense && styles.dense, ownerState.subheader && styles.subheader];
  }
})(({
  ownerState
}) => (0,esm_extends/* default */.A)({
  listStyle: 'none',
  margin: 0,
  padding: 0,
  position: 'relative'
}, !ownerState.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, ownerState.subheader && {
  paddingTop: 0
}));
const List = /*#__PURE__*/react.forwardRef(function List(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiList'
  });
  const {
      children,
      className,
      component = 'ul',
      dense = false,
      disablePadding = false,
      subheader
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, List_excluded);
  const context = react.useMemo(() => ({
    dense
  }), [dense]);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    component,
    dense,
    disablePadding
  });
  const classes = List_useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(List_ListContext.Provider, {
    value: context,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(ListRoot, (0,esm_extends/* default */.A)({
      as: component,
      className: (0,clsx/* default */.A)(classes.root, className),
      ref: ref,
      ownerState: ownerState
    }, other, {
      children: [subheader, children]
    }))
  });
});
 false ? 0 : void 0;
/* harmony default export */ const List_List = (List);
;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/isMuiElement/isMuiElement.js

function isMuiElement(element, muiNames) {
  var _muiName, _element$type;
  return /*#__PURE__*/react.isValidElement(element) && muiNames.indexOf( // For server components `muiName` is avaialble in element.type._payload.value.muiName
  // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
  // eslint-disable-next-line no-underscore-dangle
  (_muiName = element.type.muiName) != null ? _muiName : (_element$type = element.type) == null || (_element$type = _element$type._payload) == null || (_element$type = _element$type.value) == null ? void 0 : _element$type.muiName) !== -1;
}
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/utils/isMuiElement.js

/* harmony default export */ const utils_isMuiElement = (isMuiElement);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/utils/useEnhancedEffect.js
'use client';


/* harmony default export */ const utils_useEnhancedEffect = (useEnhancedEffect_useEnhancedEffect);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/ListItem/listItemClasses.js


function getListItemUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiListItem', slot);
}
const listItemClasses = (0,generateUtilityClasses/* default */.A)('MuiListItem', ['root', 'container', 'focusVisible', 'dense', 'alignItemsFlexStart', 'disabled', 'divider', 'gutters', 'padding', 'button', 'secondaryAction', 'selected']);
/* harmony default export */ const ListItem_listItemClasses = (listItemClasses);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/ListItemButton/listItemButtonClasses.js


function getListItemButtonUtilityClass(slot) {
  return generateUtilityClass('MuiListItemButton', slot);
}
const listItemButtonClasses = (0,generateUtilityClasses/* default */.A)('MuiListItemButton', ['root', 'focusVisible', 'dense', 'alignItemsFlexStart', 'disabled', 'divider', 'gutters', 'selected']);
/* harmony default export */ const ListItemButton_listItemButtonClasses = (listItemButtonClasses);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/ListItemSecondaryAction/listItemSecondaryActionClasses.js


function getListItemSecondaryActionClassesUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiListItemSecondaryAction', slot);
}
const listItemSecondaryActionClasses = (0,generateUtilityClasses/* default */.A)('MuiListItemSecondaryAction', ['root', 'disableGutters']);
/* harmony default export */ const ListItemSecondaryAction_listItemSecondaryActionClasses = ((/* unused pure expression or super */ null && (listItemSecondaryActionClasses)));
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/ListItemSecondaryAction/ListItemSecondaryAction.js
'use client';



const ListItemSecondaryAction_excluded = ["className"];









const ListItemSecondaryAction_useUtilityClasses = ownerState => {
  const {
    disableGutters,
    classes
  } = ownerState;
  const slots = {
    root: ['root', disableGutters && 'disableGutters']
  };
  return (0,composeClasses/* default */.A)(slots, getListItemSecondaryActionClassesUtilityClass, classes);
};
const ListItemSecondaryActionRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiListItemSecondaryAction',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.disableGutters && styles.disableGutters];
  }
})(({
  ownerState
}) => (0,esm_extends/* default */.A)({
  position: 'absolute',
  right: 16,
  top: '50%',
  transform: 'translateY(-50%)'
}, ownerState.disableGutters && {
  right: 0
}));

/**
 * Must be used as the last child of ListItem to function properly.
 */
const ListItemSecondaryAction = /*#__PURE__*/react.forwardRef(function ListItemSecondaryAction(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiListItemSecondaryAction'
  });
  const {
      className
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, ListItemSecondaryAction_excluded);
  const context = react.useContext(List_ListContext);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    disableGutters: context.disableGutters
  });
  const classes = ListItemSecondaryAction_useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemSecondaryActionRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
 false ? 0 : void 0;
ListItemSecondaryAction.muiName = 'ListItemSecondaryAction';
/* harmony default export */ const ListItemSecondaryAction_ListItemSecondaryAction = (ListItemSecondaryAction);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/ListItem/ListItem.js
'use client';



const ListItem_excluded = ["className"],
  ListItem_excluded2 = ["alignItems", "autoFocus", "button", "children", "className", "component", "components", "componentsProps", "ContainerComponent", "ContainerProps", "dense", "disabled", "disableGutters", "disablePadding", "divider", "focusVisibleClassName", "secondaryAction", "selected", "slotProps", "slots"];




















const ListItem_overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, ownerState.dense && styles.dense, ownerState.alignItems === 'flex-start' && styles.alignItemsFlexStart, ownerState.divider && styles.divider, !ownerState.disableGutters && styles.gutters, !ownerState.disablePadding && styles.padding, ownerState.button && styles.button, ownerState.hasSecondaryAction && styles.secondaryAction];
};
const ListItem_useUtilityClasses = ownerState => {
  const {
    alignItems,
    button,
    classes,
    dense,
    disabled,
    disableGutters,
    disablePadding,
    divider,
    hasSecondaryAction,
    selected
  } = ownerState;
  const slots = {
    root: ['root', dense && 'dense', !disableGutters && 'gutters', !disablePadding && 'padding', divider && 'divider', disabled && 'disabled', button && 'button', alignItems === 'flex-start' && 'alignItemsFlexStart', hasSecondaryAction && 'secondaryAction', selected && 'selected'],
    container: ['container']
  };
  return (0,composeClasses/* default */.A)(slots, getListItemUtilityClass, classes);
};
const ListItemRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiListItem',
  slot: 'Root',
  overridesResolver: ListItem_overridesResolver
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.A)({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  textDecoration: 'none',
  width: '100%',
  boxSizing: 'border-box',
  textAlign: 'left'
}, !ownerState.disablePadding && (0,esm_extends/* default */.A)({
  paddingTop: 8,
  paddingBottom: 8
}, ownerState.dense && {
  paddingTop: 4,
  paddingBottom: 4
}, !ownerState.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, !!ownerState.secondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
}), !!ownerState.secondaryAction && {
  [`& > .${ListItemButton_listItemButtonClasses.root}`]: {
    paddingRight: 48
  }
}, {
  [`&.${ListItem_listItemClasses.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`&.${ListItem_listItemClasses.selected}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : (0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, theme.palette.action.selectedOpacity),
    [`&.${ListItem_listItemClasses.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : (0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  },
  [`&.${ListItem_listItemClasses.disabled}`]: {
    opacity: (theme.vars || theme).palette.action.disabledOpacity
  }
}, ownerState.alignItems === 'flex-start' && {
  alignItems: 'flex-start'
}, ownerState.divider && {
  borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`,
  backgroundClip: 'padding-box'
}, ownerState.button && {
  transition: theme.transitions.create('background-color', {
    duration: theme.transitions.duration.shortest
  }),
  '&:hover': {
    textDecoration: 'none',
    backgroundColor: (theme.vars || theme).palette.action.hover,
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: 'transparent'
    }
  },
  [`&.${ListItem_listItemClasses.selected}:hover`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : (0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.selectedOpacity})` : (0,colorManipulator/* alpha */.X4)(theme.palette.primary.main, theme.palette.action.selectedOpacity)
    }
  }
}, ownerState.hasSecondaryAction && {
  // Add some space to avoid collision as `ListItemSecondaryAction`
  // is absolutely positioned.
  paddingRight: 48
}));
const ListItemContainer = (0,styled/* default */.Ay)('li', {
  name: 'MuiListItem',
  slot: 'Container',
  overridesResolver: (props, styles) => styles.container
})({
  position: 'relative'
});

/**
 * Uses an additional container component if `ListItemSecondaryAction` is the last child.
 */
const ListItem = /*#__PURE__*/react.forwardRef(function ListItem(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiListItem'
  });
  const {
      alignItems = 'center',
      autoFocus = false,
      button = false,
      children: childrenProp,
      className,
      component: componentProp,
      components = {},
      componentsProps = {},
      ContainerComponent = 'li',
      ContainerProps: {
        className: ContainerClassName
      } = {},
      dense = false,
      disabled = false,
      disableGutters = false,
      disablePadding = false,
      divider = false,
      focusVisibleClassName,
      secondaryAction,
      selected = false,
      slotProps = {},
      slots = {}
    } = props,
    ContainerProps = (0,objectWithoutPropertiesLoose/* default */.A)(props.ContainerProps, ListItem_excluded),
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, ListItem_excluded2);
  const context = react.useContext(List_ListContext);
  const childContext = react.useMemo(() => ({
    dense: dense || context.dense || false,
    alignItems,
    disableGutters
  }), [alignItems, context.dense, dense, disableGutters]);
  const listItemRef = react.useRef(null);
  utils_useEnhancedEffect(() => {
    if (autoFocus) {
      if (listItemRef.current) {
        listItemRef.current.focus();
      } else if (false) {}
    }
  }, [autoFocus]);
  const children = react.Children.toArray(childrenProp);

  // v4 implementation, deprecated in v5, will be removed in v6
  const hasSecondaryAction = children.length && utils_isMuiElement(children[children.length - 1], ['ListItemSecondaryAction']);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    alignItems,
    autoFocus,
    button,
    dense: childContext.dense,
    disabled,
    disableGutters,
    disablePadding,
    divider,
    hasSecondaryAction,
    selected
  });
  const classes = ListItem_useUtilityClasses(ownerState);
  const handleRef = utils_useForkRef(listItemRef, ref);
  const Root = slots.root || components.Root || ListItemRoot;
  const rootProps = slotProps.root || componentsProps.root || {};
  const componentProps = (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, rootProps.className, className),
    disabled
  }, other);
  let Component = componentProp || 'li';
  if (button) {
    componentProps.component = componentProp || 'div';
    componentProps.focusVisibleClassName = (0,clsx/* default */.A)(ListItem_listItemClasses.focusVisible, focusVisibleClassName);
    Component = ButtonBase_ButtonBase;
  }

  // v4 implementation, deprecated in v5, will be removed in v6
  if (hasSecondaryAction) {
    // Use div by default.
    Component = !componentProps.component && !componentProp ? 'div' : Component;

    // Avoid nesting of li > li.
    if (ContainerComponent === 'li') {
      if (Component === 'li') {
        Component = 'div';
      } else if (componentProps.component === 'li') {
        componentProps.component = 'div';
      }
    }
    return /*#__PURE__*/(0,jsx_runtime.jsx)(List_ListContext.Provider, {
      value: childContext,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)(ListItemContainer, (0,esm_extends/* default */.A)({
        as: ContainerComponent,
        className: (0,clsx/* default */.A)(classes.container, ContainerClassName),
        ref: handleRef,
        ownerState: ownerState
      }, ContainerProps, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Root, (0,esm_extends/* default */.A)({}, rootProps, !isHostComponent_isHostComponent(Root) && {
          as: Component,
          ownerState: (0,esm_extends/* default */.A)({}, ownerState, rootProps.ownerState)
        }, componentProps, {
          children: children
        })), children.pop()]
      }))
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(List_ListContext.Provider, {
    value: childContext,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(Root, (0,esm_extends/* default */.A)({}, rootProps, {
      as: Component,
      ref: handleRef
    }, !isHostComponent_isHostComponent(Root) && {
      ownerState: (0,esm_extends/* default */.A)({}, ownerState, rootProps.ownerState)
    }, componentProps, {
      children: [children, secondaryAction && /*#__PURE__*/(0,jsx_runtime.jsx)(ListItemSecondaryAction_ListItemSecondaryAction, {
        children: secondaryAction
      })]
    }))
  });
});
 false ? 0 : void 0;
/* harmony default export */ const ListItem_ListItem = (ListItem);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/SvgIcon/svgIconClasses.js


function getSvgIconUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiSvgIcon', slot);
}
const svgIconClasses = (0,generateUtilityClasses/* default */.A)('MuiSvgIcon', ['root', 'colorPrimary', 'colorSecondary', 'colorAction', 'colorError', 'colorDisabled', 'fontSizeInherit', 'fontSizeSmall', 'fontSizeMedium', 'fontSizeLarge']);
/* harmony default export */ const SvgIcon_svgIconClasses = ((/* unused pure expression or super */ null && (svgIconClasses)));
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/SvgIcon/SvgIcon.js
'use client';



const SvgIcon_excluded = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"];










const SvgIcon_useUtilityClasses = ownerState => {
  const {
    color,
    fontSize,
    classes
  } = ownerState;
  const slots = {
    root: ['root', color !== 'inherit' && `color${(0,capitalize/* default */.A)(color)}`, `fontSize${(0,capitalize/* default */.A)(fontSize)}`]
  };
  return (0,composeClasses/* default */.A)(slots, getSvgIconUtilityClass, classes);
};
const SvgIconRoot = (0,styled/* default */.Ay)('svg', {
  name: 'MuiSvgIcon',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.color !== 'inherit' && styles[`color${(0,capitalize/* default */.A)(ownerState.color)}`], styles[`fontSize${(0,capitalize/* default */.A)(ownerState.fontSize)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  var _theme$transitions, _theme$transitions$cr, _theme$transitions2, _theme$typography, _theme$typography$pxT, _theme$typography2, _theme$typography2$px, _theme$typography3, _theme$typography3$px, _palette$ownerState$c, _palette, _palette2, _palette3;
  return {
    userSelect: 'none',
    width: '1em',
    height: '1em',
    display: 'inline-block',
    // the <svg> will define the property that has `currentColor`
    // for example heroicons uses fill="none" and stroke="currentColor"
    fill: ownerState.hasSvgAsChild ? undefined : 'currentColor',
    flexShrink: 0,
    transition: (_theme$transitions = theme.transitions) == null || (_theme$transitions$cr = _theme$transitions.create) == null ? void 0 : _theme$transitions$cr.call(_theme$transitions, 'fill', {
      duration: (_theme$transitions2 = theme.transitions) == null || (_theme$transitions2 = _theme$transitions2.duration) == null ? void 0 : _theme$transitions2.shorter
    }),
    fontSize: {
      inherit: 'inherit',
      small: ((_theme$typography = theme.typography) == null || (_theme$typography$pxT = _theme$typography.pxToRem) == null ? void 0 : _theme$typography$pxT.call(_theme$typography, 20)) || '1.25rem',
      medium: ((_theme$typography2 = theme.typography) == null || (_theme$typography2$px = _theme$typography2.pxToRem) == null ? void 0 : _theme$typography2$px.call(_theme$typography2, 24)) || '1.5rem',
      large: ((_theme$typography3 = theme.typography) == null || (_theme$typography3$px = _theme$typography3.pxToRem) == null ? void 0 : _theme$typography3$px.call(_theme$typography3, 35)) || '2.1875rem'
    }[ownerState.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (_palette$ownerState$c = (_palette = (theme.vars || theme).palette) == null || (_palette = _palette[ownerState.color]) == null ? void 0 : _palette.main) != null ? _palette$ownerState$c : {
      action: (_palette2 = (theme.vars || theme).palette) == null || (_palette2 = _palette2.action) == null ? void 0 : _palette2.active,
      disabled: (_palette3 = (theme.vars || theme).palette) == null || (_palette3 = _palette3.action) == null ? void 0 : _palette3.disabled,
      inherit: undefined
    }[ownerState.color]
  };
});
const SvgIcon = /*#__PURE__*/react.forwardRef(function SvgIcon(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiSvgIcon'
  });
  const {
      children,
      className,
      color = 'inherit',
      component = 'svg',
      fontSize = 'medium',
      htmlColor,
      inheritViewBox = false,
      titleAccess,
      viewBox = '0 0 24 24'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, SvgIcon_excluded);
  const hasSvgAsChild = /*#__PURE__*/react.isValidElement(children) && children.type === 'svg';
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    color,
    component,
    fontSize,
    instanceFontSize: inProps.fontSize,
    inheritViewBox,
    viewBox,
    hasSvgAsChild
  });
  const more = {};
  if (!inheritViewBox) {
    more.viewBox = viewBox;
  }
  const classes = SvgIcon_useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(SvgIconRoot, (0,esm_extends/* default */.A)({
    as: component,
    className: (0,clsx/* default */.A)(classes.root, className),
    focusable: "false",
    color: htmlColor,
    "aria-hidden": titleAccess ? undefined : true,
    role: titleAccess ? 'img' : undefined,
    ref: ref
  }, more, other, hasSvgAsChild && children.props, {
    ownerState: ownerState,
    children: [hasSvgAsChild ? children.props.children : children, titleAccess ? /*#__PURE__*/(0,jsx_runtime.jsx)("title", {
      children: titleAccess
    }) : null]
  }));
});
 false ? 0 : void 0;
SvgIcon.muiName = 'SvgIcon';
/* harmony default export */ const SvgIcon_SvgIcon = (SvgIcon);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/utils/createSvgIcon.js
'use client';





/**
 * Private module reserved for @mui packages.
 */

function createSvgIcon(path, displayName) {
  function Component(props, ref) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(SvgIcon_SvgIcon, (0,esm_extends/* default */.A)({
      "data-testid": `${displayName}Icon`,
      ref: ref
    }, props, {
      children: path
    }));
  }
  if (false) {}
  Component.muiName = SvgIcon_SvgIcon.muiName;
  return /*#__PURE__*/react.memo( /*#__PURE__*/react.forwardRef(Component));
}
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/internal/svg-icons/Cancel.js
'use client';




/**
 * @ignore - internal component.
 */

/* harmony default export */ const Cancel = (createSvgIcon( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), 'Cancel'));
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Chip/chipClasses.js


function getChipUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiChip', slot);
}
const chipClasses = (0,generateUtilityClasses/* default */.A)('MuiChip', ['root', 'sizeSmall', 'sizeMedium', 'colorError', 'colorInfo', 'colorPrimary', 'colorSecondary', 'colorSuccess', 'colorWarning', 'disabled', 'clickable', 'clickableColorPrimary', 'clickableColorSecondary', 'deletable', 'deletableColorPrimary', 'deletableColorSecondary', 'outlined', 'filled', 'outlinedPrimary', 'outlinedSecondary', 'filledPrimary', 'filledSecondary', 'avatar', 'avatarSmall', 'avatarMedium', 'avatarColorPrimary', 'avatarColorSecondary', 'icon', 'iconSmall', 'iconMedium', 'iconColorPrimary', 'iconColorSecondary', 'label', 'labelSmall', 'labelMedium', 'deleteIcon', 'deleteIconSmall', 'deleteIconMedium', 'deleteIconColorPrimary', 'deleteIconColorSecondary', 'deleteIconOutlinedColorPrimary', 'deleteIconOutlinedColorSecondary', 'deleteIconFilledColorPrimary', 'deleteIconFilledColorSecondary', 'focusVisible']);
/* harmony default export */ const Chip_chipClasses = (chipClasses);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Chip/Chip.js
'use client';



const Chip_excluded = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"];















const Chip_useUtilityClasses = ownerState => {
  const {
    classes,
    disabled,
    size,
    color,
    iconColor,
    onDelete,
    clickable,
    variant
  } = ownerState;
  const slots = {
    root: ['root', variant, disabled && 'disabled', `size${(0,capitalize/* default */.A)(size)}`, `color${(0,capitalize/* default */.A)(color)}`, clickable && 'clickable', clickable && `clickableColor${(0,capitalize/* default */.A)(color)}`, onDelete && 'deletable', onDelete && `deletableColor${(0,capitalize/* default */.A)(color)}`, `${variant}${(0,capitalize/* default */.A)(color)}`],
    label: ['label', `label${(0,capitalize/* default */.A)(size)}`],
    avatar: ['avatar', `avatar${(0,capitalize/* default */.A)(size)}`, `avatarColor${(0,capitalize/* default */.A)(color)}`],
    icon: ['icon', `icon${(0,capitalize/* default */.A)(size)}`, `iconColor${(0,capitalize/* default */.A)(iconColor)}`],
    deleteIcon: ['deleteIcon', `deleteIcon${(0,capitalize/* default */.A)(size)}`, `deleteIconColor${(0,capitalize/* default */.A)(color)}`, `deleteIcon${(0,capitalize/* default */.A)(variant)}Color${(0,capitalize/* default */.A)(color)}`]
  };
  return (0,composeClasses/* default */.A)(slots, getChipUtilityClass, classes);
};
const ChipRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiChip',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    const {
      color,
      iconColor,
      clickable,
      onDelete,
      size,
      variant
    } = ownerState;
    return [{
      [`& .${Chip_chipClasses.avatar}`]: styles.avatar
    }, {
      [`& .${Chip_chipClasses.avatar}`]: styles[`avatar${(0,capitalize/* default */.A)(size)}`]
    }, {
      [`& .${Chip_chipClasses.avatar}`]: styles[`avatarColor${(0,capitalize/* default */.A)(color)}`]
    }, {
      [`& .${Chip_chipClasses.icon}`]: styles.icon
    }, {
      [`& .${Chip_chipClasses.icon}`]: styles[`icon${(0,capitalize/* default */.A)(size)}`]
    }, {
      [`& .${Chip_chipClasses.icon}`]: styles[`iconColor${(0,capitalize/* default */.A)(iconColor)}`]
    }, {
      [`& .${Chip_chipClasses.deleteIcon}`]: styles.deleteIcon
    }, {
      [`& .${Chip_chipClasses.deleteIcon}`]: styles[`deleteIcon${(0,capitalize/* default */.A)(size)}`]
    }, {
      [`& .${Chip_chipClasses.deleteIcon}`]: styles[`deleteIconColor${(0,capitalize/* default */.A)(color)}`]
    }, {
      [`& .${Chip_chipClasses.deleteIcon}`]: styles[`deleteIcon${(0,capitalize/* default */.A)(variant)}Color${(0,capitalize/* default */.A)(color)}`]
    }, styles.root, styles[`size${(0,capitalize/* default */.A)(size)}`], styles[`color${(0,capitalize/* default */.A)(color)}`], clickable && styles.clickable, clickable && color !== 'default' && styles[`clickableColor${(0,capitalize/* default */.A)(color)})`], onDelete && styles.deletable, onDelete && color !== 'default' && styles[`deletableColor${(0,capitalize/* default */.A)(color)}`], styles[variant], styles[`${variant}${(0,capitalize/* default */.A)(color)}`]];
  }
})(({
  theme,
  ownerState
}) => {
  const textColor = theme.palette.mode === 'light' ? theme.palette.grey[700] : theme.palette.grey[300];
  return (0,esm_extends/* default */.A)({
    maxWidth: '100%',
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.pxToRem(13),
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    color: (theme.vars || theme).palette.text.primary,
    backgroundColor: (theme.vars || theme).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: 'nowrap',
    transition: theme.transitions.create(['background-color', 'box-shadow']),
    // reset cursor explicitly in case ButtonBase is used
    cursor: 'unset',
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: 'none',
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: 'middle',
    boxSizing: 'border-box',
    [`&.${Chip_chipClasses.disabled}`]: {
      opacity: (theme.vars || theme).palette.action.disabledOpacity,
      pointerEvents: 'none'
    },
    [`& .${Chip_chipClasses.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: theme.vars ? theme.vars.palette.Chip.defaultAvatarColor : textColor,
      fontSize: theme.typography.pxToRem(12)
    },
    [`& .${Chip_chipClasses.avatarColorPrimary}`]: {
      color: (theme.vars || theme).palette.primary.contrastText,
      backgroundColor: (theme.vars || theme).palette.primary.dark
    },
    [`& .${Chip_chipClasses.avatarColorSecondary}`]: {
      color: (theme.vars || theme).palette.secondary.contrastText,
      backgroundColor: (theme.vars || theme).palette.secondary.dark
    },
    [`& .${Chip_chipClasses.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: theme.typography.pxToRem(10)
    },
    [`& .${Chip_chipClasses.icon}`]: (0,esm_extends/* default */.A)({
      marginLeft: 5,
      marginRight: -6
    }, ownerState.size === 'small' && {
      fontSize: 18,
      marginLeft: 4,
      marginRight: -4
    }, ownerState.iconColor === ownerState.color && (0,esm_extends/* default */.A)({
      color: theme.vars ? theme.vars.palette.Chip.defaultIconColor : textColor
    }, ownerState.color !== 'default' && {
      color: 'inherit'
    })),
    [`& .${Chip_chipClasses.deleteIcon}`]: (0,esm_extends/* default */.A)({
      WebkitTapHighlightColor: 'transparent',
      color: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / 0.26)` : (0,colorManipulator/* alpha */.X4)(theme.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: 'pointer',
      margin: '0 5px 0 -6px',
      '&:hover': {
        color: theme.vars ? `rgba(${theme.vars.palette.text.primaryChannel} / 0.4)` : (0,colorManipulator/* alpha */.X4)(theme.palette.text.primary, 0.4)
      }
    }, ownerState.size === 'small' && {
      fontSize: 16,
      marginRight: 4,
      marginLeft: -4
    }, ownerState.color !== 'default' && {
      color: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].contrastTextChannel} / 0.7)` : (0,colorManipulator/* alpha */.X4)(theme.palette[ownerState.color].contrastText, 0.7),
      '&:hover, &:active': {
        color: (theme.vars || theme).palette[ownerState.color].contrastText
      }
    })
  }, ownerState.size === 'small' && {
    height: 24
  }, ownerState.color !== 'default' && {
    backgroundColor: (theme.vars || theme).palette[ownerState.color].main,
    color: (theme.vars || theme).palette[ownerState.color].contrastText
  }, ownerState.onDelete && {
    [`&.${Chip_chipClasses.focusVisible}`]: {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : (0,colorManipulator/* alpha */.X4)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
    }
  }, ownerState.onDelete && ownerState.color !== 'default' && {
    [`&.${Chip_chipClasses.focusVisible}`]: {
      backgroundColor: (theme.vars || theme).palette[ownerState.color].dark
    }
  });
}, ({
  theme,
  ownerState
}) => (0,esm_extends/* default */.A)({}, ownerState.clickable && {
  userSelect: 'none',
  WebkitTapHighlightColor: 'transparent',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.hoverOpacity}))` : (0,colorManipulator/* alpha */.X4)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.hoverOpacity)
  },
  [`&.${Chip_chipClasses.focusVisible}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.selectedChannel} / calc(${theme.vars.palette.action.selectedOpacity} + ${theme.vars.palette.action.focusOpacity}))` : (0,colorManipulator/* alpha */.X4)(theme.palette.action.selected, theme.palette.action.selectedOpacity + theme.palette.action.focusOpacity)
  },
  '&:active': {
    boxShadow: (theme.vars || theme).shadows[1]
  }
}, ownerState.clickable && ownerState.color !== 'default' && {
  [`&:hover, &.${Chip_chipClasses.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette[ownerState.color].dark
  }
}), ({
  theme,
  ownerState
}) => (0,esm_extends/* default */.A)({}, ownerState.variant === 'outlined' && {
  backgroundColor: 'transparent',
  border: theme.vars ? `1px solid ${theme.vars.palette.Chip.defaultBorder}` : `1px solid ${theme.palette.mode === 'light' ? theme.palette.grey[400] : theme.palette.grey[700]}`,
  [`&.${Chip_chipClasses.clickable}:hover`]: {
    backgroundColor: (theme.vars || theme).palette.action.hover
  },
  [`&.${Chip_chipClasses.focusVisible}`]: {
    backgroundColor: (theme.vars || theme).palette.action.focus
  },
  [`& .${Chip_chipClasses.avatar}`]: {
    marginLeft: 4
  },
  [`& .${Chip_chipClasses.avatarSmall}`]: {
    marginLeft: 2
  },
  [`& .${Chip_chipClasses.icon}`]: {
    marginLeft: 4
  },
  [`& .${Chip_chipClasses.iconSmall}`]: {
    marginLeft: 2
  },
  [`& .${Chip_chipClasses.deleteIcon}`]: {
    marginRight: 5
  },
  [`& .${Chip_chipClasses.deleteIconSmall}`]: {
    marginRight: 3
  }
}, ownerState.variant === 'outlined' && ownerState.color !== 'default' && {
  color: (theme.vars || theme).palette[ownerState.color].main,
  border: `1px solid ${theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.7)` : (0,colorManipulator/* alpha */.X4)(theme.palette[ownerState.color].main, 0.7)}`,
  [`&.${Chip_chipClasses.clickable}:hover`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : (0,colorManipulator/* alpha */.X4)(theme.palette[ownerState.color].main, theme.palette.action.hoverOpacity)
  },
  [`&.${Chip_chipClasses.focusVisible}`]: {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.focusOpacity})` : (0,colorManipulator/* alpha */.X4)(theme.palette[ownerState.color].main, theme.palette.action.focusOpacity)
  },
  [`& .${Chip_chipClasses.deleteIcon}`]: {
    color: theme.vars ? `rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.7)` : (0,colorManipulator/* alpha */.X4)(theme.palette[ownerState.color].main, 0.7),
    '&:hover, &:active': {
      color: (theme.vars || theme).palette[ownerState.color].main
    }
  }
}));
const ChipLabel = (0,styled/* default */.Ay)('span', {
  name: 'MuiChip',
  slot: 'Label',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    const {
      size
    } = ownerState;
    return [styles.label, styles[`label${(0,capitalize/* default */.A)(size)}`]];
  }
})(({
  ownerState
}) => (0,esm_extends/* default */.A)({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: 'nowrap'
}, ownerState.variant === 'outlined' && {
  paddingLeft: 11,
  paddingRight: 11
}, ownerState.size === 'small' && {
  paddingLeft: 8,
  paddingRight: 8
}, ownerState.size === 'small' && ownerState.variant === 'outlined' && {
  paddingLeft: 7,
  paddingRight: 7
}));
function isDeleteKeyboardEvent(keyboardEvent) {
  return keyboardEvent.key === 'Backspace' || keyboardEvent.key === 'Delete';
}

/**
 * Chips represent complex entities in small blocks, such as a contact.
 */
const Chip = /*#__PURE__*/react.forwardRef(function Chip(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiChip'
  });
  const {
      avatar: avatarProp,
      className,
      clickable: clickableProp,
      color = 'default',
      component: ComponentProp,
      deleteIcon: deleteIconProp,
      disabled = false,
      icon: iconProp,
      label,
      onClick,
      onDelete,
      onKeyDown,
      onKeyUp,
      size = 'medium',
      variant = 'filled',
      tabIndex,
      skipFocusWhenDisabled = false // TODO v6: Rename to `focusableWhenDisabled`.
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, Chip_excluded);
  const chipRef = react.useRef(null);
  const handleRef = utils_useForkRef(chipRef, ref);
  const handleDeleteIconClick = event => {
    // Stop the event from bubbling up to the `Chip`
    event.stopPropagation();
    if (onDelete) {
      onDelete(event);
    }
  };
  const handleKeyDown = event => {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target && isDeleteKeyboardEvent(event)) {
      // Will be handled in keyUp, otherwise some browsers
      // might init navigation
      event.preventDefault();
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  const handleKeyUp = event => {
    // Ignore events from children of `Chip`.
    if (event.currentTarget === event.target) {
      if (onDelete && isDeleteKeyboardEvent(event)) {
        onDelete(event);
      } else if (event.key === 'Escape' && chipRef.current) {
        chipRef.current.blur();
      }
    }
    if (onKeyUp) {
      onKeyUp(event);
    }
  };
  const clickable = clickableProp !== false && onClick ? true : clickableProp;
  const component = clickable || onDelete ? ButtonBase_ButtonBase : ComponentProp || 'div';
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    component,
    disabled,
    size,
    color,
    iconColor: /*#__PURE__*/react.isValidElement(iconProp) ? iconProp.props.color || color : color,
    onDelete: !!onDelete,
    clickable,
    variant
  });
  const classes = Chip_useUtilityClasses(ownerState);
  const moreProps = component === ButtonBase_ButtonBase ? (0,esm_extends/* default */.A)({
    component: ComponentProp || 'div',
    focusVisibleClassName: classes.focusVisible
  }, onDelete && {
    disableRipple: true
  }) : {};
  let deleteIcon = null;
  if (onDelete) {
    deleteIcon = deleteIconProp && /*#__PURE__*/react.isValidElement(deleteIconProp) ? ( /*#__PURE__*/react.cloneElement(deleteIconProp, {
      className: (0,clsx/* default */.A)(deleteIconProp.props.className, classes.deleteIcon),
      onClick: handleDeleteIconClick
    })) : /*#__PURE__*/(0,jsx_runtime.jsx)(Cancel, {
      className: (0,clsx/* default */.A)(classes.deleteIcon),
      onClick: handleDeleteIconClick
    });
  }
  let avatar = null;
  if (avatarProp && /*#__PURE__*/react.isValidElement(avatarProp)) {
    avatar = /*#__PURE__*/react.cloneElement(avatarProp, {
      className: (0,clsx/* default */.A)(classes.avatar, avatarProp.props.className)
    });
  }
  let icon = null;
  if (iconProp && /*#__PURE__*/react.isValidElement(iconProp)) {
    icon = /*#__PURE__*/react.cloneElement(iconProp, {
      className: (0,clsx/* default */.A)(classes.icon, iconProp.props.className)
    });
  }
  if (false) {}
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ChipRoot, (0,esm_extends/* default */.A)({
    as: component,
    className: (0,clsx/* default */.A)(classes.root, className),
    disabled: clickable && disabled ? true : undefined,
    onClick: onClick,
    onKeyDown: handleKeyDown,
    onKeyUp: handleKeyUp,
    ref: handleRef,
    tabIndex: skipFocusWhenDisabled && disabled ? -1 : tabIndex,
    ownerState: ownerState
  }, moreProps, other, {
    children: [avatar || icon, /*#__PURE__*/(0,jsx_runtime.jsx)(ChipLabel, {
      className: (0,clsx/* default */.A)(classes.label),
      ownerState: ownerState,
      children: label
    }), deleteIcon]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const Chip_Chip = (Chip);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/constants/dimensions.js
const DAY_SIZE = 36;
const DAY_MARGIN = 2;
const DIALOG_WIDTH = 320;
const MAX_CALENDAR_HEIGHT = 280;
const VIEW_HEIGHT = 336;
const DIGITAL_CLOCK_VIEW_HEIGHT = 232;
const MULTI_SECTION_CLOCK_SECTION_WIDTH = 48;
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/PickersShortcuts/PickersShortcuts.js
'use client';



const PickersShortcuts_excluded = ["items", "changeImportance", "isLandscape", "onChange", "isValid"],
  PickersShortcuts_excluded2 = ["getValue"];







/**
 * Demos:
 *
 * - [Shortcuts](https://mui.com/x/react-date-pickers/shortcuts/)
 *
 * API:
 *
 * - [PickersShortcuts API](https://mui.com/x/api/date-pickers/pickers-shortcuts/)
 */
function PickersShortcuts(props) {
  const {
      items,
      changeImportance = 'accept',
      onChange,
      isValid
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, PickersShortcuts_excluded);
  if (items == null || items.length === 0) {
    return null;
  }
  const resolvedItems = items.map(_ref => {
    let {
        getValue
      } = _ref,
      item = (0,objectWithoutPropertiesLoose/* default */.A)(_ref, PickersShortcuts_excluded2);
    const newValue = getValue({
      isValid
    });
    return (0,esm_extends/* default */.A)({}, item, {
      label: item.label,
      onClick: () => {
        onChange(newValue, changeImportance, item);
      },
      disabled: !isValid(newValue)
    });
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(List_List, (0,esm_extends/* default */.A)({
    dense: true,
    sx: [{
      maxHeight: VIEW_HEIGHT,
      maxWidth: 200,
      overflow: 'auto'
    }, ...(Array.isArray(other.sx) ? other.sx : [other.sx])]
  }, other, {
    children: resolvedItems.map(item => {
      return /*#__PURE__*/(0,jsx_runtime.jsx)(ListItem_ListItem, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Chip_Chip, (0,esm_extends/* default */.A)({}, item))
      }, item.id ?? item.label);
    })
  }));
}
 false ? 0 : void 0;

;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/PickersLayout/usePickerLayout.js
'use client';









function toolbarHasView(toolbarProps) {
  return toolbarProps.view !== null;
}
const usePickerLayout_useUtilityClasses = ownerState => {
  const {
    classes,
    isLandscape
  } = ownerState;
  const slots = {
    root: ['root', isLandscape && 'landscape'],
    contentWrapper: ['contentWrapper'],
    toolbar: ['toolbar'],
    actionBar: ['actionBar'],
    tabs: ['tabs'],
    landscape: ['landscape'],
    shortcuts: ['shortcuts']
  };
  return (0,composeClasses/* default */.A)(slots, getPickersLayoutUtilityClass, classes);
};
const usePickerLayout = props => {
  const {
    wrapperVariant,
    onAccept,
    onClear,
    onCancel,
    onSetToday,
    view,
    views,
    onViewChange,
    value,
    onChange,
    onSelectShortcut,
    isValid,
    isLandscape,
    disabled,
    readOnly,
    children,
    slots,
    slotProps
    // TODO: Remove this "as" hack. It get introduced to mark `value` prop in PickersLayoutProps as not required.
    // The true type should be
    // - For pickers value: TDate | null
    // - For range pickers value: [TDate | null, TDate | null]
  } = props;
  const classes = usePickerLayout_useUtilityClasses(props);

  // Action bar
  const ActionBar = slots?.actionBar ?? PickersActionBar;
  const actionBarProps = useSlotProps_useSlotProps({
    elementType: ActionBar,
    externalSlotProps: slotProps?.actionBar,
    additionalProps: {
      onAccept,
      onClear,
      onCancel,
      onSetToday,
      actions: wrapperVariant === 'desktop' ? [] : ['cancel', 'accept']
    },
    className: classes.actionBar,
    ownerState: (0,esm_extends/* default */.A)({}, props, {
      wrapperVariant
    })
  });
  const actionBar = /*#__PURE__*/(0,jsx_runtime.jsx)(ActionBar, (0,esm_extends/* default */.A)({}, actionBarProps));

  // Toolbar
  const Toolbar = slots?.toolbar;
  const toolbarProps = useSlotProps_useSlotProps({
    elementType: Toolbar,
    externalSlotProps: slotProps?.toolbar,
    additionalProps: {
      isLandscape,
      onChange,
      value,
      view,
      onViewChange,
      views,
      disabled,
      readOnly
    },
    className: classes.toolbar,
    ownerState: (0,esm_extends/* default */.A)({}, props, {
      wrapperVariant
    })
  });
  const toolbar = toolbarHasView(toolbarProps) && !!Toolbar ? /*#__PURE__*/(0,jsx_runtime.jsx)(Toolbar, (0,esm_extends/* default */.A)({}, toolbarProps)) : null;

  // Content
  const content = children;

  // Tabs
  const Tabs = slots?.tabs;
  const tabs = view && Tabs ? /*#__PURE__*/(0,jsx_runtime.jsx)(Tabs, (0,esm_extends/* default */.A)({
    view: view,
    onViewChange: onViewChange,
    className: classes.tabs
  }, slotProps?.tabs)) : null;

  // Shortcuts
  const Shortcuts = slots?.shortcuts ?? PickersShortcuts;
  const shortcutsProps = useSlotProps_useSlotProps({
    elementType: Shortcuts,
    externalSlotProps: slotProps?.shortcuts,
    additionalProps: {
      isValid,
      isLandscape,
      onChange: onSelectShortcut
    },
    className: classes.shortcuts,
    ownerState: {
      isValid,
      isLandscape,
      onChange: onSelectShortcut,
      wrapperVariant
    }
  });
  const shortcuts = view && !!Shortcuts ? /*#__PURE__*/(0,jsx_runtime.jsx)(Shortcuts, (0,esm_extends/* default */.A)({}, shortcutsProps)) : null;
  return {
    toolbar,
    content,
    tabs,
    actionBar,
    shortcuts
  };
};
/* harmony default export */ const PickersLayout_usePickerLayout = (usePickerLayout);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/PickersLayout/PickersLayout.js
'use client';









const PickersLayout_useUtilityClasses = ownerState => {
  const {
    isLandscape,
    classes
  } = ownerState;
  const slots = {
    root: ['root', isLandscape && 'landscape'],
    contentWrapper: ['contentWrapper']
  };
  return (0,composeClasses/* default */.A)(slots, getPickersLayoutUtilityClass, classes);
};
const PickersLayoutRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiPickersLayout',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  display: 'grid',
  gridAutoColumns: 'max-content auto max-content',
  gridAutoRows: 'max-content auto max-content',
  [`& .${pickersLayoutClasses.actionBar}`]: {
    gridColumn: '1 / 4',
    gridRow: 3
  },
  variants: [{
    props: {
      isLandscape: true
    },
    style: {
      [`& .${pickersLayoutClasses.toolbar}`]: {
        gridColumn: 1,
        gridRow: '2 / 3'
      },
      [`.${pickersLayoutClasses.shortcuts}`]: {
        gridColumn: '2 / 4',
        gridRow: 1
      }
    }
  }, {
    props: {
      isLandscape: true,
      isRtl: true
    },
    style: {
      [`& .${pickersLayoutClasses.toolbar}`]: {
        gridColumn: 3
      }
    }
  }, {
    props: {
      isLandscape: false
    },
    style: {
      [`& .${pickersLayoutClasses.toolbar}`]: {
        gridColumn: '2 / 4',
        gridRow: 1
      },
      [`& .${pickersLayoutClasses.shortcuts}`]: {
        gridColumn: 1,
        gridRow: '2 / 3'
      }
    }
  }, {
    props: {
      isLandscape: false,
      isRtl: true
    },
    style: {
      [`& .${pickersLayoutClasses.shortcuts}`]: {
        gridColumn: 3
      }
    }
  }]
});
const PickersLayoutContentWrapper = (0,styled/* default */.Ay)('div', {
  name: 'MuiPickersLayout',
  slot: 'ContentWrapper',
  overridesResolver: (props, styles) => styles.contentWrapper
})({
  gridColumn: 2,
  gridRow: 2,
  display: 'flex',
  flexDirection: 'column'
});
/**
 * Demos:
 *
 * - [Custom layout](https://mui.com/x/react-date-pickers/custom-layout/)
 *
 * API:
 *
 * - [PickersLayout API](https://mui.com/x/api/date-pickers/pickers-layout/)
 */
const PickersLayout = /*#__PURE__*/react.forwardRef(function PickersLayout(inProps, ref) {
  const props = (0,useThemeProps/* default */.A)({
    props: inProps,
    name: 'MuiPickersLayout'
  });
  const {
    toolbar,
    content,
    tabs,
    actionBar,
    shortcuts
  } = PickersLayout_usePickerLayout(props);
  const {
    sx,
    className,
    isLandscape,
    wrapperVariant
  } = props;
  const classes = PickersLayout_useUtilityClasses(props);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(PickersLayoutRoot, {
    ref: ref,
    sx: sx,
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: props,
    children: [isLandscape ? shortcuts : toolbar, isLandscape ? toolbar : shortcuts, /*#__PURE__*/(0,jsx_runtime.jsx)(PickersLayoutContentWrapper, {
      className: classes.contentWrapper,
      children: wrapperVariant === 'desktop' ? /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [content, tabs]
      }) : /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [tabs, content]
      })
    }), actionBar]
  });
});
 false ? 0 : void 0;

;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/components/PickersProvider.js



const PickersContext = /*#__PURE__*/react.createContext(null);

/**
 * Provides the context for the various parts of a picker component:
 * - contextValue: the context for the picker sub-components.
 * - localizationProvider: the translations passed through the props and through a parent LocalizationProvider.
 *
 * @ignore - do not document.
 */
function PickersProvider(props) {
  const {
    contextValue,
    localeText,
    children
  } = props;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(PickersContext.Provider, {
    value: contextValue,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(LocalizationProvider/* LocalizationProvider */.$, {
      localeText: localeText,
      children: children
    })
  });
}
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/hooks/useDesktopPicker/useDesktopPicker.js


const useDesktopPicker_excluded = ["props", "getOpenDialogAriaText"],
  useDesktopPicker_excluded2 = ["ownerState"],
  _excluded3 = ["ownerState"];











/**
 * Hook managing all the single-date desktop pickers:
 * - DesktopDatePicker
 * - DesktopDateTimePicker
 * - DesktopTimePicker
 */

const useDesktopPicker = _ref => {
  let {
      props,
      getOpenDialogAriaText
    } = _ref,
    pickerParams = (0,objectWithoutPropertiesLoose/* default */.A)(_ref, useDesktopPicker_excluded);
  const {
    slots,
    slotProps: innerSlotProps,
    className,
    sx,
    format,
    formatDensity,
    enableAccessibleFieldDOMStructure,
    selectedSections,
    onSelectedSectionsChange,
    timezone,
    name,
    label,
    inputRef,
    readOnly,
    disabled,
    autoFocus,
    localeText,
    reduceAnimations
  } = props;
  const containerRef = react.useRef(null);
  const fieldRef = react.useRef(null);
  const labelId = useId();
  const isToolbarHidden = innerSlotProps?.toolbar?.hidden ?? false;
  const {
    open,
    actions,
    hasUIView,
    layoutProps,
    renderCurrentView,
    shouldRestoreFocus,
    fieldProps: pickerFieldProps,
    contextValue,
    ownerState
  } = usePicker((0,esm_extends/* default */.A)({}, pickerParams, {
    props,
    fieldRef,
    autoFocusView: true,
    additionalViewProps: {},
    wrapperVariant: 'desktop'
  }));
  const InputAdornment = slots.inputAdornment ?? InputAdornment_InputAdornment;
  const _useSlotProps = useSlotProps_useSlotProps({
      elementType: InputAdornment,
      externalSlotProps: innerSlotProps?.inputAdornment,
      additionalProps: {
        position: 'end'
      },
      ownerState: props
    }),
    inputAdornmentProps = (0,objectWithoutPropertiesLoose/* default */.A)(_useSlotProps, useDesktopPicker_excluded2);
  const OpenPickerButton = slots.openPickerButton ?? IconButton_IconButton;
  const _useSlotProps2 = useSlotProps_useSlotProps({
      elementType: OpenPickerButton,
      externalSlotProps: innerSlotProps?.openPickerButton,
      additionalProps: {
        disabled: disabled || readOnly,
        onClick: open ? actions.onClose : actions.onOpen,
        'aria-label': getOpenDialogAriaText(pickerFieldProps.value),
        edge: inputAdornmentProps.position
      },
      ownerState: props
    }),
    openPickerButtonProps = (0,objectWithoutPropertiesLoose/* default */.A)(_useSlotProps2, _excluded3);
  const OpenPickerIcon = slots.openPickerIcon;
  const openPickerIconProps = useSlotProps_useSlotProps({
    elementType: OpenPickerIcon,
    externalSlotProps: innerSlotProps?.openPickerIcon,
    ownerState
  });
  const Field = slots.field;
  const fieldProps = useSlotProps_useSlotProps({
    elementType: Field,
    externalSlotProps: innerSlotProps?.field,
    additionalProps: (0,esm_extends/* default */.A)({}, pickerFieldProps, isToolbarHidden && {
      id: labelId
    }, {
      readOnly,
      disabled,
      className,
      sx,
      format,
      formatDensity,
      enableAccessibleFieldDOMStructure,
      selectedSections,
      onSelectedSectionsChange,
      timezone,
      label,
      name,
      autoFocus: autoFocus && !props.open,
      focused: open ? true : undefined
    }, inputRef ? {
      inputRef
    } : {}),
    ownerState: props
  });

  // TODO: Move to `useSlotProps` when https://github.com/mui/material-ui/pull/35088 will be merged
  if (hasUIView) {
    fieldProps.InputProps = (0,esm_extends/* default */.A)({}, fieldProps.InputProps, {
      ref: containerRef
    }, !props.disableOpenPicker && {
      [`${inputAdornmentProps.position}Adornment`]: /*#__PURE__*/(0,jsx_runtime.jsx)(InputAdornment, (0,esm_extends/* default */.A)({}, inputAdornmentProps, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(OpenPickerButton, (0,esm_extends/* default */.A)({}, openPickerButtonProps, {
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(OpenPickerIcon, (0,esm_extends/* default */.A)({}, openPickerIconProps))
        }))
      }))
    });
  }
  const slotsForField = (0,esm_extends/* default */.A)({
    textField: slots.textField,
    clearIcon: slots.clearIcon,
    clearButton: slots.clearButton
  }, fieldProps.slots);
  const Layout = slots.layout ?? PickersLayout;
  let labelledById = labelId;
  if (isToolbarHidden) {
    if (label) {
      labelledById = `${labelId}-label`;
    } else {
      labelledById = undefined;
    }
  }
  const slotProps = (0,esm_extends/* default */.A)({}, innerSlotProps, {
    toolbar: (0,esm_extends/* default */.A)({}, innerSlotProps?.toolbar, {
      titleId: labelId
    }),
    popper: (0,esm_extends/* default */.A)({
      'aria-labelledby': labelledById
    }, innerSlotProps?.popper)
  });
  const handleFieldRef = useForkRef(fieldRef, fieldProps.unstableFieldRef);
  const renderPicker = () => /*#__PURE__*/(0,jsx_runtime.jsxs)(PickersProvider, {
    contextValue: contextValue,
    localeText: localeText,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Field, (0,esm_extends/* default */.A)({}, fieldProps, {
      slots: slotsForField,
      slotProps: slotProps,
      unstableFieldRef: handleFieldRef
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(PickersPopper, (0,esm_extends/* default */.A)({
      role: "dialog",
      placement: "bottom-start",
      anchorEl: containerRef.current
    }, actions, {
      open: open,
      slots: slots,
      slotProps: slotProps,
      shouldRestoreFocus: shouldRestoreFocus,
      reduceAnimations: reduceAnimations,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Layout, (0,esm_extends/* default */.A)({}, layoutProps, slotProps?.layout, {
        slots: slots,
        slotProps: slotProps,
        children: renderCurrentView()
      }))
    }))]
  });
  return {
    renderPicker
  };
};
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/icons/index.js



/**
 * @ignore - internal component.
 */

const ArrowDropDownIcon = createSvgIcon(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M7 10l5 5 5-5z"
}), 'ArrowDropDown');

/**
 * @ignore - internal component.
 */
const ArrowLeftIcon = createSvgIcon(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"
}), 'ArrowLeft');

/**
 * @ignore - internal component.
 */
const ArrowRightIcon = createSvgIcon(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"
}), 'ArrowRight');

/**
 * @ignore - internal component.
 */
const CalendarIcon = createSvgIcon(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M17 12h-5v5h5v-5zM16 1v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2h-1V1h-2zm3 18H5V8h14v11z"
}), 'Calendar');

/**
 * @ignore - internal component.
 */
const ClockIcon = createSvgIcon(/*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), 'Clock');

/**
 * @ignore - internal component.
 */
const DateRangeIcon = createSvgIcon(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"
}), 'DateRange');

/**
 * @ignore - internal component.
 */
const TimeIcon = createSvgIcon(/*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
  children: [/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
    d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
  }), /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
    d: "M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"
  })]
}), 'Time');

/**
 * @ignore - internal component.
 */
const ClearIcon = createSvgIcon(/*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
}), 'Clear');
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/deepmerge/deepmerge.js
var deepmerge = __webpack_require__(44486);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/formatMuiErrorMessage/formatMuiErrorMessage.js
var formatMuiErrorMessage = __webpack_require__(7857);
;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/ownerWindow/ownerWindow.js

function ownerWindow(node) {
  const doc = ownerDocument(node);
  return doc.defaultView || window;
}
;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/debounce/debounce.js
// Corresponds to 10 frames at 60 Hz.
// A few bytes payload overhead when lodash/debounce is ~3 kB and debounce ~300 B.
function debounce(func, wait = 166) {
  let timeout;
  function debounced(...args) {
    const later = () => {
      // @ts-ignore
      func.apply(this, args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  }
  debounced.clear = () => {
    clearTimeout(timeout);
  };
  return debounced;
}
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/TextareaAutosize/TextareaAutosize.js
'use client';



const TextareaAutosize_excluded = ["onChange", "maxRows", "minRows", "style", "value"];





function getStyleValue(value) {
  return parseInt(value, 10) || 0;
}
const TextareaAutosize_styles = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: 'hidden',
    // Remove from the content flow
    position: 'absolute',
    // Ignore the scrollbar width
    overflow: 'hidden',
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: 'translateZ(0)'
  }
};
function isObjectEmpty(object) {
  // eslint-disable-next-line
  for (const _ in object) {
    return false;
  }
  return true;
}
function isEmpty(obj) {
  return isObjectEmpty(obj) || obj.outerHeightStyle === 0 && !obj.overflowing;
}

/**
 *
 * Demos:
 *
 * - [Textarea Autosize](https://mui.com/material-ui/react-textarea-autosize/)
 *
 * API:
 *
 * - [TextareaAutosize API](https://mui.com/material-ui/api/textarea-autosize/)
 */
const TextareaAutosize = /*#__PURE__*/react.forwardRef(function TextareaAutosize(props, forwardedRef) {
  const {
      onChange,
      maxRows,
      minRows = 1,
      style,
      value
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, TextareaAutosize_excluded);
  const {
    current: isControlled
  } = react.useRef(value != null);
  const textareaRef = react.useRef(null);
  const handleRef = useForkRef(forwardedRef, textareaRef);
  const heightRef = react.useRef(null);
  const hiddenTextareaRef = react.useRef(null);
  const calculateTextareaStyles = react.useCallback(() => {
    const textarea = textareaRef.current;
    const hiddenTextarea = hiddenTextareaRef.current;
    if (!textarea || !hiddenTextarea) {
      return undefined;
    }
    const containerWindow = ownerWindow(textarea);
    const computedStyle = containerWindow.getComputedStyle(textarea);

    // If input's width is shrunk and it's not visible, don't sync height.
    if (computedStyle.width === '0px') {
      return {
        outerHeightStyle: 0,
        overflowing: false
      };
    }
    hiddenTextarea.style.width = computedStyle.width;
    hiddenTextarea.value = textarea.value || props.placeholder || 'x';
    if (hiddenTextarea.value.slice(-1) === '\n') {
      // Certain fonts which overflow the line height will cause the textarea
      // to report a different scrollHeight depending on whether the last line
      // is empty. Make it non-empty to avoid this issue.
      hiddenTextarea.value += ' ';
    }
    const boxSizing = computedStyle.boxSizing;
    const padding = getStyleValue(computedStyle.paddingBottom) + getStyleValue(computedStyle.paddingTop);
    const border = getStyleValue(computedStyle.borderBottomWidth) + getStyleValue(computedStyle.borderTopWidth);

    // The height of the inner content
    const innerHeight = hiddenTextarea.scrollHeight;

    // Measure height of a textarea with a single row
    hiddenTextarea.value = 'x';
    const singleRowHeight = hiddenTextarea.scrollHeight;

    // The height of the outer content
    let outerHeight = innerHeight;
    if (minRows) {
      outerHeight = Math.max(Number(minRows) * singleRowHeight, outerHeight);
    }
    if (maxRows) {
      outerHeight = Math.min(Number(maxRows) * singleRowHeight, outerHeight);
    }
    outerHeight = Math.max(outerHeight, singleRowHeight);

    // Take the box sizing into account for applying this value as a style.
    const outerHeightStyle = outerHeight + (boxSizing === 'border-box' ? padding + border : 0);
    const overflowing = Math.abs(outerHeight - innerHeight) <= 1;
    return {
      outerHeightStyle,
      overflowing
    };
  }, [maxRows, minRows, props.placeholder]);
  const didHeightChange = useEventCallback_useEventCallback(() => {
    const textarea = textareaRef.current;
    const textareaStyles = calculateTextareaStyles();
    if (!textarea || !textareaStyles || isEmpty(textareaStyles)) {
      return false;
    }
    const outerHeightStyle = textareaStyles.outerHeightStyle;
    return heightRef.current != null && heightRef.current !== outerHeightStyle;
  });
  const syncHeight = react.useCallback(() => {
    const textarea = textareaRef.current;
    const textareaStyles = calculateTextareaStyles();
    if (!textarea || !textareaStyles || isEmpty(textareaStyles)) {
      return;
    }
    const outerHeightStyle = textareaStyles.outerHeightStyle;
    if (heightRef.current !== outerHeightStyle) {
      heightRef.current = outerHeightStyle;
      textarea.style.height = `${outerHeightStyle}px`;
    }
    textarea.style.overflow = textareaStyles.overflowing ? 'hidden' : '';
  }, [calculateTextareaStyles]);
  const frameRef = react.useRef(-1);
  useEnhancedEffect_useEnhancedEffect(() => {
    const debouncedHandleResize = debounce(syncHeight);
    const textarea = textareaRef == null ? void 0 : textareaRef.current;
    if (!textarea) {
      return undefined;
    }
    const containerWindow = ownerWindow(textarea);
    containerWindow.addEventListener('resize', debouncedHandleResize);
    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        if (didHeightChange()) {
          // avoid "ResizeObserver loop completed with undelivered notifications" error
          // by temporarily unobserving the textarea element while manipulating the height
          // and reobserving one frame later
          resizeObserver.unobserve(textarea);
          cancelAnimationFrame(frameRef.current);
          syncHeight();
          frameRef.current = requestAnimationFrame(() => {
            resizeObserver.observe(textarea);
          });
        }
      });
      resizeObserver.observe(textarea);
    }
    return () => {
      debouncedHandleResize.clear();
      cancelAnimationFrame(frameRef.current);
      containerWindow.removeEventListener('resize', debouncedHandleResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
    };
  }, [calculateTextareaStyles, syncHeight, didHeightChange]);
  useEnhancedEffect_useEnhancedEffect(() => {
    syncHeight();
  });
  const handleChange = event => {
    if (!isControlled) {
      syncHeight();
    }
    if (onChange) {
      onChange(event);
    }
  };
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)("textarea", (0,esm_extends/* default */.A)({
      value: value,
      onChange: handleChange,
      ref: handleRef
      // Apply the rows prop to get a "correct" first SSR paint
      ,
      rows: minRows,
      style: style
    }, other)), /*#__PURE__*/(0,jsx_runtime.jsx)("textarea", {
      "aria-hidden": true,
      className: props.className,
      readOnly: true,
      ref: hiddenTextareaRef,
      tabIndex: -1,
      style: (0,esm_extends/* default */.A)({}, TextareaAutosize_styles.shadow, style, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
 false ? 0 : void 0;
/* harmony default export */ const TextareaAutosize_TextareaAutosize = (TextareaAutosize);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/FormControl/formControlState.js
var formControlState = __webpack_require__(52689);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/GlobalStyles/GlobalStyles.js + 1 modules
var GlobalStyles = __webpack_require__(51610);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/InputBase/utils.js
// Supports determination of isControlled().
// Controlled input accepts its current value as a prop.
//
// @see https://facebook.github.io/react/docs/forms.html#controlled-components
// @param value
// @returns {boolean} true if string (including '') or number (including zero)
function hasValue(value) {
  return value != null && !(Array.isArray(value) && value.length === 0);
}

// Determine if field is empty or filled.
// Response determines if label is presented above field or as placeholder.
//
// @param obj
// @param SSR
// @returns {boolean} False when not present or empty string.
//                    True when any number or string with length.
function isFilled(obj, SSR = false) {
  return obj && (hasValue(obj.value) && obj.value !== '' || SSR && hasValue(obj.defaultValue) && obj.defaultValue !== '');
}

// Determine if an Input is adorned on start.
// It's corresponding to the left with LTR.
//
// @param obj
// @returns {boolean} False when no adornments.
//                    True when adorned at the start.
function isAdornedStart(obj) {
  return obj.startAdornment;
}
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/InputBase/inputBaseClasses.js


function getInputBaseUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiInputBase', slot);
}
const inputBaseClasses = (0,generateUtilityClasses/* default */.A)('MuiInputBase', ['root', 'formControl', 'focused', 'disabled', 'adornedStart', 'adornedEnd', 'error', 'sizeSmall', 'multiline', 'colorSecondary', 'fullWidth', 'hiddenLabel', 'readOnly', 'input', 'inputSizeSmall', 'inputMultiline', 'inputTypeSearch', 'inputAdornedStart', 'inputAdornedEnd', 'inputHiddenLabel']);
/* harmony default export */ const InputBase_inputBaseClasses = (inputBaseClasses);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/InputBase/InputBase.js
'use client';




const InputBase_excluded = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"];





















const rootOverridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, ownerState.formControl && styles.formControl, ownerState.startAdornment && styles.adornedStart, ownerState.endAdornment && styles.adornedEnd, ownerState.error && styles.error, ownerState.size === 'small' && styles.sizeSmall, ownerState.multiline && styles.multiline, ownerState.color && styles[`color${(0,capitalize/* default */.A)(ownerState.color)}`], ownerState.fullWidth && styles.fullWidth, ownerState.hiddenLabel && styles.hiddenLabel];
};
const inputOverridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.input, ownerState.size === 'small' && styles.inputSizeSmall, ownerState.multiline && styles.inputMultiline, ownerState.type === 'search' && styles.inputTypeSearch, ownerState.startAdornment && styles.inputAdornedStart, ownerState.endAdornment && styles.inputAdornedEnd, ownerState.hiddenLabel && styles.inputHiddenLabel];
};
const InputBase_useUtilityClasses = ownerState => {
  const {
    classes,
    color,
    disabled,
    error,
    endAdornment,
    focused,
    formControl,
    fullWidth,
    hiddenLabel,
    multiline,
    readOnly,
    size,
    startAdornment,
    type
  } = ownerState;
  const slots = {
    root: ['root', `color${(0,capitalize/* default */.A)(color)}`, disabled && 'disabled', error && 'error', fullWidth && 'fullWidth', focused && 'focused', formControl && 'formControl', size && size !== 'medium' && `size${(0,capitalize/* default */.A)(size)}`, multiline && 'multiline', startAdornment && 'adornedStart', endAdornment && 'adornedEnd', hiddenLabel && 'hiddenLabel', readOnly && 'readOnly'],
    input: ['input', disabled && 'disabled', type === 'search' && 'inputTypeSearch', multiline && 'inputMultiline', size === 'small' && 'inputSizeSmall', hiddenLabel && 'inputHiddenLabel', startAdornment && 'inputAdornedStart', endAdornment && 'inputAdornedEnd', readOnly && 'readOnly']
  };
  return (0,composeClasses/* default */.A)(slots, getInputBaseUtilityClass, classes);
};
const InputBaseRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiInputBase',
  slot: 'Root',
  overridesResolver: rootOverridesResolver
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.A)({}, theme.typography.body1, {
  color: (theme.vars || theme).palette.text.primary,
  lineHeight: '1.4375em',
  // 23px
  boxSizing: 'border-box',
  // Prevent padding issue with fullWidth.
  position: 'relative',
  cursor: 'text',
  display: 'inline-flex',
  alignItems: 'center',
  [`&.${InputBase_inputBaseClasses.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled,
    cursor: 'default'
  }
}, ownerState.multiline && (0,esm_extends/* default */.A)({
  padding: '4px 0 5px'
}, ownerState.size === 'small' && {
  paddingTop: 1
}), ownerState.fullWidth && {
  width: '100%'
}));
const InputBaseComponent = (0,styled/* default */.Ay)('input', {
  name: 'MuiInputBase',
  slot: 'Input',
  overridesResolver: inputOverridesResolver
})(({
  theme,
  ownerState
}) => {
  const light = theme.palette.mode === 'light';
  const placeholder = (0,esm_extends/* default */.A)({
    color: 'currentColor'
  }, theme.vars ? {
    opacity: theme.vars.opacity.inputPlaceholder
  } : {
    opacity: light ? 0.42 : 0.5
  }, {
    transition: theme.transitions.create('opacity', {
      duration: theme.transitions.duration.shorter
    })
  });
  const placeholderHidden = {
    opacity: '0 !important'
  };
  const placeholderVisible = theme.vars ? {
    opacity: theme.vars.opacity.inputPlaceholder
  } : {
    opacity: light ? 0.42 : 0.5
  };
  return (0,esm_extends/* default */.A)({
    font: 'inherit',
    letterSpacing: 'inherit',
    color: 'currentColor',
    padding: '4px 0 5px',
    border: 0,
    boxSizing: 'content-box',
    background: 'none',
    height: '1.4375em',
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: 'transparent',
    display: 'block',
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: '100%',
    // Fix IE11 width issue
    animationName: 'mui-auto-fill-cancel',
    animationDuration: '10ms',
    '&::-webkit-input-placeholder': placeholder,
    '&::-moz-placeholder': placeholder,
    // Firefox 19+
    '&:-ms-input-placeholder': placeholder,
    // IE11
    '&::-ms-input-placeholder': placeholder,
    // Edge
    '&:focus': {
      outline: 0
    },
    // Reset Firefox invalid required input style
    '&:invalid': {
      boxShadow: 'none'
    },
    '&::-webkit-search-decoration': {
      // Remove the padding when type=search.
      WebkitAppearance: 'none'
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${InputBase_inputBaseClasses.formControl} &`]: {
      '&::-webkit-input-placeholder': placeholderHidden,
      '&::-moz-placeholder': placeholderHidden,
      // Firefox 19+
      '&:-ms-input-placeholder': placeholderHidden,
      // IE11
      '&::-ms-input-placeholder': placeholderHidden,
      // Edge
      '&:focus::-webkit-input-placeholder': placeholderVisible,
      '&:focus::-moz-placeholder': placeholderVisible,
      // Firefox 19+
      '&:focus:-ms-input-placeholder': placeholderVisible,
      // IE11
      '&:focus::-ms-input-placeholder': placeholderVisible // Edge
    },
    [`&.${InputBase_inputBaseClasses.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (theme.vars || theme).palette.text.disabled // Fix opacity Safari bug
    },
    '&:-webkit-autofill': {
      animationDuration: '5000s',
      animationName: 'mui-auto-fill'
    }
  }, ownerState.size === 'small' && {
    paddingTop: 1
  }, ownerState.multiline && {
    height: 'auto',
    resize: 'none',
    padding: 0,
    paddingTop: 0
  }, ownerState.type === 'search' && {
    // Improve type search style.
    MozAppearance: 'textfield'
  });
});
const inputGlobalStyles = /*#__PURE__*/(0,jsx_runtime.jsx)(GlobalStyles/* default */.A, {
  styles: {
    '@keyframes mui-auto-fill': {
      from: {
        display: 'block'
      }
    },
    '@keyframes mui-auto-fill-cancel': {
      from: {
        display: 'block'
      }
    }
  }
});

/**
 * `InputBase` contains as few styles as possible.
 * It aims to be a simple building block for creating an input.
 * It contains a load of style reset and some state logic.
 */
const InputBase = /*#__PURE__*/react.forwardRef(function InputBase(inProps, ref) {
  var _slotProps$input;
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiInputBase'
  });
  const {
      'aria-describedby': ariaDescribedby,
      autoComplete,
      autoFocus,
      className,
      components = {},
      componentsProps = {},
      defaultValue,
      disabled,
      disableInjectingGlobalStyles,
      endAdornment,
      fullWidth = false,
      id,
      inputComponent = 'input',
      inputProps: inputPropsProp = {},
      inputRef: inputRefProp,
      maxRows,
      minRows,
      multiline = false,
      name,
      onBlur,
      onChange,
      onClick,
      onFocus,
      onKeyDown,
      onKeyUp,
      placeholder,
      readOnly,
      renderSuffix,
      rows,
      slotProps = {},
      slots = {},
      startAdornment,
      type = 'text',
      value: valueProp
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, InputBase_excluded);
  const value = inputPropsProp.value != null ? inputPropsProp.value : valueProp;
  const {
    current: isControlled
  } = react.useRef(value != null);
  const inputRef = react.useRef();
  const handleInputRefWarning = react.useCallback(instance => {
    if (false) {}
  }, []);
  const handleInputRef = utils_useForkRef(inputRef, inputRefProp, inputPropsProp.ref, handleInputRefWarning);
  const [focused, setFocused] = react.useState(false);
  const muiFormControl = (0,useFormControl/* default */.A)();
  if (false) {}
  const fcs = (0,formControlState/* default */.A)({
    props,
    muiFormControl,
    states: ['color', 'disabled', 'error', 'hiddenLabel', 'size', 'required', 'filled']
  });
  fcs.focused = muiFormControl ? muiFormControl.focused : focused;

  // The blur won't fire when the disabled state is set on a focused input.
  // We need to book keep the focused state manually.
  react.useEffect(() => {
    if (!muiFormControl && disabled && focused) {
      setFocused(false);
      if (onBlur) {
        onBlur();
      }
    }
  }, [muiFormControl, disabled, focused, onBlur]);
  const onFilled = muiFormControl && muiFormControl.onFilled;
  const onEmpty = muiFormControl && muiFormControl.onEmpty;
  const checkDirty = react.useCallback(obj => {
    if (isFilled(obj)) {
      if (onFilled) {
        onFilled();
      }
    } else if (onEmpty) {
      onEmpty();
    }
  }, [onFilled, onEmpty]);
  utils_useEnhancedEffect(() => {
    if (isControlled) {
      checkDirty({
        value
      });
    }
  }, [value, checkDirty, isControlled]);
  const handleFocus = event => {
    // Fix a bug with IE11 where the focus/blur events are triggered
    // while the component is disabled.
    if (fcs.disabled) {
      event.stopPropagation();
      return;
    }
    if (onFocus) {
      onFocus(event);
    }
    if (inputPropsProp.onFocus) {
      inputPropsProp.onFocus(event);
    }
    if (muiFormControl && muiFormControl.onFocus) {
      muiFormControl.onFocus(event);
    } else {
      setFocused(true);
    }
  };
  const handleBlur = event => {
    if (onBlur) {
      onBlur(event);
    }
    if (inputPropsProp.onBlur) {
      inputPropsProp.onBlur(event);
    }
    if (muiFormControl && muiFormControl.onBlur) {
      muiFormControl.onBlur(event);
    } else {
      setFocused(false);
    }
  };
  const handleChange = (event, ...args) => {
    if (!isControlled) {
      const element = event.target || inputRef.current;
      if (element == null) {
        throw new Error( false ? 0 : (0,formatMuiErrorMessage/* default */.A)(1));
      }
      checkDirty({
        value: element.value
      });
    }
    if (inputPropsProp.onChange) {
      inputPropsProp.onChange(event, ...args);
    }

    // Perform in the willUpdate
    if (onChange) {
      onChange(event, ...args);
    }
  };

  // Check the input state on mount, in case it was filled by the user
  // or auto filled by the browser before the hydration (for SSR).
  react.useEffect(() => {
    checkDirty(inputRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleClick = event => {
    if (inputRef.current && event.currentTarget === event.target) {
      inputRef.current.focus();
    }
    if (onClick) {
      onClick(event);
    }
  };
  let InputComponent = inputComponent;
  let inputProps = inputPropsProp;
  if (multiline && InputComponent === 'input') {
    if (rows) {
      if (false) {}
      inputProps = (0,esm_extends/* default */.A)({
        type: undefined,
        minRows: rows,
        maxRows: rows
      }, inputProps);
    } else {
      inputProps = (0,esm_extends/* default */.A)({
        type: undefined,
        maxRows,
        minRows
      }, inputProps);
    }
    InputComponent = TextareaAutosize_TextareaAutosize;
  }
  const handleAutoFill = event => {
    // Provide a fake value as Chrome might not let you access it for security reasons.
    checkDirty(event.animationName === 'mui-auto-fill-cancel' ? inputRef.current : {
      value: 'x'
    });
  };
  react.useEffect(() => {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    color: fcs.color || 'primary',
    disabled: fcs.disabled,
    endAdornment,
    error: fcs.error,
    focused: fcs.focused,
    formControl: muiFormControl,
    fullWidth,
    hiddenLabel: fcs.hiddenLabel,
    multiline,
    size: fcs.size,
    startAdornment,
    type
  });
  const classes = InputBase_useUtilityClasses(ownerState);
  const Root = slots.root || components.Root || InputBaseRoot;
  const rootProps = slotProps.root || componentsProps.root || {};
  const Input = slots.input || components.Input || InputBaseComponent;
  inputProps = (0,esm_extends/* default */.A)({}, inputProps, (_slotProps$input = slotProps.input) != null ? _slotProps$input : componentsProps.input);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [!disableInjectingGlobalStyles && inputGlobalStyles, /*#__PURE__*/(0,jsx_runtime.jsxs)(Root, (0,esm_extends/* default */.A)({}, rootProps, !isHostComponent_isHostComponent(Root) && {
      ownerState: (0,esm_extends/* default */.A)({}, ownerState, rootProps.ownerState)
    }, {
      ref: ref,
      onClick: handleClick
    }, other, {
      className: (0,clsx/* default */.A)(classes.root, rootProps.className, className, readOnly && 'MuiInputBase-readOnly'),
      children: [startAdornment, /*#__PURE__*/(0,jsx_runtime.jsx)(FormControlContext/* default */.A.Provider, {
        value: null,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(Input, (0,esm_extends/* default */.A)({
          ownerState: ownerState,
          "aria-invalid": fcs.error,
          "aria-describedby": ariaDescribedby,
          autoComplete: autoComplete,
          autoFocus: autoFocus,
          defaultValue: defaultValue,
          disabled: fcs.disabled,
          id: id,
          onAnimationStart: handleAutoFill,
          name: name,
          placeholder: placeholder,
          readOnly: readOnly,
          required: fcs.required,
          rows: rows,
          value: value,
          onKeyDown: onKeyDown,
          onKeyUp: onKeyUp,
          type: type
        }, inputProps, !isHostComponent_isHostComponent(Input) && {
          as: InputComponent,
          ownerState: (0,esm_extends/* default */.A)({}, ownerState, inputProps.ownerState)
        }, {
          ref: handleInputRef,
          className: (0,clsx/* default */.A)(classes.input, inputProps.className, readOnly && 'MuiInputBase-readOnly'),
          onBlur: handleBlur,
          onChange: handleChange,
          onFocus: handleFocus
        }))
      }), endAdornment, renderSuffix ? renderSuffix((0,esm_extends/* default */.A)({}, fcs, {
        startAdornment
      })) : null]
    }))]
  });
});
 false ? 0 : void 0;
/* harmony default export */ const InputBase_InputBase = (InputBase);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Input/inputClasses.js




function getInputUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiInput', slot);
}
const inputClasses = (0,esm_extends/* default */.A)({}, InputBase_inputBaseClasses, (0,generateUtilityClasses/* default */.A)('MuiInput', ['root', 'underline', 'input']));
/* harmony default export */ const Input_inputClasses = (inputClasses);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Input/Input.js
'use client';



const Input_excluded = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"];











const Input_useUtilityClasses = ownerState => {
  const {
    classes,
    disableUnderline
  } = ownerState;
  const slots = {
    root: ['root', !disableUnderline && 'underline'],
    input: ['input']
  };
  const composedClasses = (0,composeClasses/* default */.A)(slots, getInputUtilityClass, classes);
  return (0,esm_extends/* default */.A)({}, classes, composedClasses);
};
const InputRoot = (0,styled/* default */.Ay)(InputBaseRoot, {
  shouldForwardProp: prop => (0,rootShouldForwardProp/* default */.A)(prop) || prop === 'classes',
  name: 'MuiInput',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [...rootOverridesResolver(props, styles), !ownerState.disableUnderline && styles.underline];
  }
})(({
  theme,
  ownerState
}) => {
  const light = theme.palette.mode === 'light';
  let bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  if (theme.vars) {
    bottomLineColor = `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})`;
  }
  return (0,esm_extends/* default */.A)({
    position: 'relative'
  }, ownerState.formControl && {
    'label + &': {
      marginTop: 16
    }
  }, !ownerState.disableUnderline && {
    '&::after': {
      borderBottom: `2px solid ${(theme.vars || theme).palette[ownerState.color].main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: 'absolute',
      right: 0,
      transform: 'scaleX(0)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      pointerEvents: 'none' // Transparent to the hover style.
    },
    [`&.${Input_inputClasses.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: 'scaleX(1) translateX(0)'
    },
    [`&.${Input_inputClasses.error}`]: {
      '&::before, &::after': {
        borderBottomColor: (theme.vars || theme).palette.error.main
      }
    },
    '&::before': {
      borderBottom: `1px solid ${bottomLineColor}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: 'absolute',
      right: 0,
      transition: theme.transitions.create('border-bottom-color', {
        duration: theme.transitions.duration.shorter
      }),
      pointerEvents: 'none' // Transparent to the hover style.
    },
    [`&:hover:not(.${Input_inputClasses.disabled}, .${Input_inputClasses.error}):before`]: {
      borderBottom: `2px solid ${(theme.vars || theme).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        borderBottom: `1px solid ${bottomLineColor}`
      }
    },
    [`&.${Input_inputClasses.disabled}:before`]: {
      borderBottomStyle: 'dotted'
    }
  });
});
const InputInput = (0,styled/* default */.Ay)(InputBaseComponent, {
  name: 'MuiInput',
  slot: 'Input',
  overridesResolver: inputOverridesResolver
})({});
const Input = /*#__PURE__*/react.forwardRef(function Input(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$input;
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiInput'
  });
  const {
      disableUnderline,
      components = {},
      componentsProps: componentsPropsProp,
      fullWidth = false,
      inputComponent = 'input',
      multiline = false,
      slotProps,
      slots = {},
      type = 'text'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, Input_excluded);
  const classes = Input_useUtilityClasses(props);
  const ownerState = {
    disableUnderline
  };
  const inputComponentsProps = {
    root: {
      ownerState
    }
  };
  const componentsProps = (slotProps != null ? slotProps : componentsPropsProp) ? (0,deepmerge/* default */.A)(slotProps != null ? slotProps : componentsPropsProp, inputComponentsProps) : inputComponentsProps;
  const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : InputRoot;
  const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : InputInput;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(InputBase_InputBase, (0,esm_extends/* default */.A)({
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    slotProps: componentsProps,
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other, {
    classes: classes
  }));
});
 false ? 0 : void 0;
Input.muiName = 'Input';
/* harmony default export */ const Input_Input = (Input);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/FilledInput/filledInputClasses.js




function getFilledInputUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiFilledInput', slot);
}
const filledInputClasses = (0,esm_extends/* default */.A)({}, InputBase_inputBaseClasses, (0,generateUtilityClasses/* default */.A)('MuiFilledInput', ['root', 'underline', 'input']));
/* harmony default export */ const FilledInput_filledInputClasses = (filledInputClasses);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/FilledInput/FilledInput.js
'use client';



const FilledInput_excluded = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"];











const FilledInput_useUtilityClasses = ownerState => {
  const {
    classes,
    disableUnderline
  } = ownerState;
  const slots = {
    root: ['root', !disableUnderline && 'underline'],
    input: ['input']
  };
  const composedClasses = (0,composeClasses/* default */.A)(slots, getFilledInputUtilityClass, classes);
  return (0,esm_extends/* default */.A)({}, classes, composedClasses);
};
const FilledInputRoot = (0,styled/* default */.Ay)(InputBaseRoot, {
  shouldForwardProp: prop => (0,rootShouldForwardProp/* default */.A)(prop) || prop === 'classes',
  name: 'MuiFilledInput',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [...rootOverridesResolver(props, styles), !ownerState.disableUnderline && styles.underline];
  }
})(({
  theme,
  ownerState
}) => {
  var _palette;
  const light = theme.palette.mode === 'light';
  const bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  const backgroundColor = light ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.09)';
  const hoverBackground = light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.13)';
  const disabledBackground = light ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)';
  return (0,esm_extends/* default */.A)({
    position: 'relative',
    backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor,
    borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
    borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeOut
    }),
    '&:hover': {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.hoverBg : hoverBackground,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
      }
    },
    [`&.${FilledInput_filledInputClasses.focused}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
    },
    [`&.${FilledInput_filledInputClasses.disabled}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.disabledBg : disabledBackground
    }
  }, !ownerState.disableUnderline && {
    '&::after': {
      borderBottom: `2px solid ${(_palette = (theme.vars || theme).palette[ownerState.color || 'primary']) == null ? void 0 : _palette.main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: 'absolute',
      right: 0,
      transform: 'scaleX(0)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shorter,
        easing: theme.transitions.easing.easeOut
      }),
      pointerEvents: 'none' // Transparent to the hover style.
    },
    [`&.${FilledInput_filledInputClasses.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: 'scaleX(1) translateX(0)'
    },
    [`&.${FilledInput_filledInputClasses.error}`]: {
      '&::before, &::after': {
        borderBottomColor: (theme.vars || theme).palette.error.main
      }
    },
    '&::before': {
      borderBottom: `1px solid ${theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})` : bottomLineColor}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: 'absolute',
      right: 0,
      transition: theme.transitions.create('border-bottom-color', {
        duration: theme.transitions.duration.shorter
      }),
      pointerEvents: 'none' // Transparent to the hover style.
    },
    [`&:hover:not(.${FilledInput_filledInputClasses.disabled}, .${FilledInput_filledInputClasses.error}):before`]: {
      borderBottom: `1px solid ${(theme.vars || theme).palette.text.primary}`
    },
    [`&.${FilledInput_filledInputClasses.disabled}:before`]: {
      borderBottomStyle: 'dotted'
    }
  }, ownerState.startAdornment && {
    paddingLeft: 12
  }, ownerState.endAdornment && {
    paddingRight: 12
  }, ownerState.multiline && (0,esm_extends/* default */.A)({
    padding: '25px 12px 8px'
  }, ownerState.size === 'small' && {
    paddingTop: 21,
    paddingBottom: 4
  }, ownerState.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }, ownerState.hiddenLabel && ownerState.size === 'small' && {
    paddingTop: 8,
    paddingBottom: 9
  }));
});
const FilledInputInput = (0,styled/* default */.Ay)(InputBaseComponent, {
  name: 'MuiFilledInput',
  slot: 'Input',
  overridesResolver: inputOverridesResolver
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.A)({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12
}, !theme.vars && {
  '&:-webkit-autofill': {
    WebkitBoxShadow: theme.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
    WebkitTextFillColor: theme.palette.mode === 'light' ? null : '#fff',
    caretColor: theme.palette.mode === 'light' ? null : '#fff',
    borderTopLeftRadius: 'inherit',
    borderTopRightRadius: 'inherit'
  }
}, theme.vars && {
  '&:-webkit-autofill': {
    borderTopLeftRadius: 'inherit',
    borderTopRightRadius: 'inherit'
  },
  [theme.getColorSchemeSelector('dark')]: {
    '&:-webkit-autofill': {
      WebkitBoxShadow: '0 0 0 100px #266798 inset',
      WebkitTextFillColor: '#fff',
      caretColor: '#fff'
    }
  }
}, ownerState.size === 'small' && {
  paddingTop: 21,
  paddingBottom: 4
}, ownerState.hiddenLabel && {
  paddingTop: 16,
  paddingBottom: 17
}, ownerState.startAdornment && {
  paddingLeft: 0
}, ownerState.endAdornment && {
  paddingRight: 0
}, ownerState.hiddenLabel && ownerState.size === 'small' && {
  paddingTop: 8,
  paddingBottom: 9
}, ownerState.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
}));
const FilledInput = /*#__PURE__*/react.forwardRef(function FilledInput(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$input;
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiFilledInput'
  });
  const {
      components = {},
      componentsProps: componentsPropsProp,
      fullWidth = false,
      // declare here to prevent spreading to DOM
      inputComponent = 'input',
      multiline = false,
      slotProps,
      slots = {},
      type = 'text'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, FilledInput_excluded);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    fullWidth,
    inputComponent,
    multiline,
    type
  });
  const classes = FilledInput_useUtilityClasses(props);
  const filledInputComponentsProps = {
    root: {
      ownerState
    },
    input: {
      ownerState
    }
  };
  const componentsProps = (slotProps != null ? slotProps : componentsPropsProp) ? (0,deepmerge/* default */.A)(filledInputComponentsProps, slotProps != null ? slotProps : componentsPropsProp) : filledInputComponentsProps;
  const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : FilledInputRoot;
  const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : FilledInputInput;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(InputBase_InputBase, (0,esm_extends/* default */.A)({
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    componentsProps: componentsProps,
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other, {
    classes: classes
  }));
});
 false ? 0 : void 0;
FilledInput.muiName = 'Input';
/* harmony default export */ const FilledInput_FilledInput = (FilledInput);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/OutlinedInput/NotchedOutline.js
'use client';



var NotchedOutline_span;
const NotchedOutline_excluded = ["children", "classes", "className", "label", "notched"];




const NotchedOutlineRoot = (0,styled/* default */.Ay)('fieldset', {
  shouldForwardProp: rootShouldForwardProp/* default */.A
})({
  textAlign: 'left',
  position: 'absolute',
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: '0 8px',
  pointerEvents: 'none',
  borderRadius: 'inherit',
  borderStyle: 'solid',
  borderWidth: 1,
  overflow: 'hidden',
  minWidth: '0%'
});
const NotchedOutlineLegend = (0,styled/* default */.Ay)('legend', {
  shouldForwardProp: rootShouldForwardProp/* default */.A
})(({
  ownerState,
  theme
}) => (0,esm_extends/* default */.A)({
  float: 'unset',
  // Fix conflict with bootstrap
  width: 'auto',
  // Fix conflict with bootstrap
  overflow: 'hidden'
}, !ownerState.withLabel && {
  padding: 0,
  lineHeight: '11px',
  // sync with `height` in `legend` styles
  transition: theme.transitions.create('width', {
    duration: 150,
    easing: theme.transitions.easing.easeOut
  })
}, ownerState.withLabel && (0,esm_extends/* default */.A)({
  display: 'block',
  // Fix conflict with normalize.css and sanitize.css
  padding: 0,
  height: 11,
  // sync with `lineHeight` in `legend` styles
  fontSize: '0.75em',
  visibility: 'hidden',
  maxWidth: 0.01,
  transition: theme.transitions.create('max-width', {
    duration: 50,
    easing: theme.transitions.easing.easeOut
  }),
  whiteSpace: 'nowrap',
  '& > span': {
    paddingLeft: 5,
    paddingRight: 5,
    display: 'inline-block',
    opacity: 0,
    visibility: 'visible'
  }
}, ownerState.notched && {
  maxWidth: '100%',
  transition: theme.transitions.create('max-width', {
    duration: 100,
    easing: theme.transitions.easing.easeOut,
    delay: 50
  })
})));

/**
 * @ignore - internal component.
 */
function NotchedOutline(props) {
  const {
      className,
      label,
      notched
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, NotchedOutline_excluded);
  const withLabel = label != null && label !== '';
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    notched,
    withLabel
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(NotchedOutlineRoot, (0,esm_extends/* default */.A)({
    "aria-hidden": true,
    className: className,
    ownerState: ownerState
  }, other, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(NotchedOutlineLegend, {
      ownerState: ownerState,
      children: withLabel ? /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        children: label
      }) : // notranslate needed while Google Translate will not fix zero-width space issue
      NotchedOutline_span || (NotchedOutline_span = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "notranslate",
        children: "\u200B"
      }))
    })
  }));
}
 false ? 0 : void 0;
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/OutlinedInput/outlinedInputClasses.js




function getOutlinedInputUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiOutlinedInput', slot);
}
const outlinedInputClasses = (0,esm_extends/* default */.A)({}, InputBase_inputBaseClasses, (0,generateUtilityClasses/* default */.A)('MuiOutlinedInput', ['root', 'notchedOutline', 'input']));
/* harmony default export */ const OutlinedInput_outlinedInputClasses = (outlinedInputClasses);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/OutlinedInput/OutlinedInput.js
'use client';



const OutlinedInput_excluded = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"];













const OutlinedInput_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    notchedOutline: ['notchedOutline'],
    input: ['input']
  };
  const composedClasses = (0,composeClasses/* default */.A)(slots, getOutlinedInputUtilityClass, classes);
  return (0,esm_extends/* default */.A)({}, classes, composedClasses);
};
const OutlinedInputRoot = (0,styled/* default */.Ay)(InputBaseRoot, {
  shouldForwardProp: prop => (0,rootShouldForwardProp/* default */.A)(prop) || prop === 'classes',
  name: 'MuiOutlinedInput',
  slot: 'Root',
  overridesResolver: rootOverridesResolver
})(({
  theme,
  ownerState
}) => {
  const borderColor = theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
  return (0,esm_extends/* default */.A)({
    position: 'relative',
    borderRadius: (theme.vars || theme).shape.borderRadius,
    [`&:hover .${OutlinedInput_outlinedInputClasses.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      [`&:hover .${OutlinedInput_outlinedInputClasses.notchedOutline}`]: {
        borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
      }
    },
    [`&.${OutlinedInput_outlinedInputClasses.focused} .${OutlinedInput_outlinedInputClasses.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette[ownerState.color].main,
      borderWidth: 2
    },
    [`&.${OutlinedInput_outlinedInputClasses.error} .${OutlinedInput_outlinedInputClasses.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.error.main
    },
    [`&.${OutlinedInput_outlinedInputClasses.disabled} .${OutlinedInput_outlinedInputClasses.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.action.disabled
    }
  }, ownerState.startAdornment && {
    paddingLeft: 14
  }, ownerState.endAdornment && {
    paddingRight: 14
  }, ownerState.multiline && (0,esm_extends/* default */.A)({
    padding: '16.5px 14px'
  }, ownerState.size === 'small' && {
    padding: '8.5px 14px'
  }));
});
const OutlinedInput_NotchedOutlineRoot = (0,styled/* default */.Ay)(NotchedOutline, {
  name: 'MuiOutlinedInput',
  slot: 'NotchedOutline',
  overridesResolver: (props, styles) => styles.notchedOutline
})(({
  theme
}) => {
  const borderColor = theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
  return {
    borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
  };
});
const OutlinedInputInput = (0,styled/* default */.Ay)(InputBaseComponent, {
  name: 'MuiOutlinedInput',
  slot: 'Input',
  overridesResolver: inputOverridesResolver
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.A)({
  padding: '16.5px 14px'
}, !theme.vars && {
  '&:-webkit-autofill': {
    WebkitBoxShadow: theme.palette.mode === 'light' ? null : '0 0 0 100px #266798 inset',
    WebkitTextFillColor: theme.palette.mode === 'light' ? null : '#fff',
    caretColor: theme.palette.mode === 'light' ? null : '#fff',
    borderRadius: 'inherit'
  }
}, theme.vars && {
  '&:-webkit-autofill': {
    borderRadius: 'inherit'
  },
  [theme.getColorSchemeSelector('dark')]: {
    '&:-webkit-autofill': {
      WebkitBoxShadow: '0 0 0 100px #266798 inset',
      WebkitTextFillColor: '#fff',
      caretColor: '#fff'
    }
  }
}, ownerState.size === 'small' && {
  padding: '8.5px 14px'
}, ownerState.multiline && {
  padding: 0
}, ownerState.startAdornment && {
  paddingLeft: 0
}, ownerState.endAdornment && {
  paddingRight: 0
}));
const OutlinedInput = /*#__PURE__*/react.forwardRef(function OutlinedInput(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$input, _React$Fragment;
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiOutlinedInput'
  });
  const {
      components = {},
      fullWidth = false,
      inputComponent = 'input',
      label,
      multiline = false,
      notched,
      slots = {},
      type = 'text'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, OutlinedInput_excluded);
  const classes = OutlinedInput_useUtilityClasses(props);
  const muiFormControl = (0,useFormControl/* default */.A)();
  const fcs = (0,formControlState/* default */.A)({
    props,
    muiFormControl,
    states: ['color', 'disabled', 'error', 'focused', 'hiddenLabel', 'size', 'required']
  });
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    color: fcs.color || 'primary',
    disabled: fcs.disabled,
    error: fcs.error,
    focused: fcs.focused,
    formControl: muiFormControl,
    fullWidth,
    hiddenLabel: fcs.hiddenLabel,
    multiline,
    size: fcs.size,
    type
  });
  const RootSlot = (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : OutlinedInputRoot;
  const InputSlot = (_ref2 = (_slots$input = slots.input) != null ? _slots$input : components.Input) != null ? _ref2 : OutlinedInputInput;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(InputBase_InputBase, (0,esm_extends/* default */.A)({
    slots: {
      root: RootSlot,
      input: InputSlot
    },
    renderSuffix: state => /*#__PURE__*/(0,jsx_runtime.jsx)(OutlinedInput_NotchedOutlineRoot, {
      ownerState: ownerState,
      className: classes.notchedOutline,
      label: label != null && label !== '' && fcs.required ? _React$Fragment || (_React$Fragment = /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [label, "\u2009", '*']
      })) : label,
      notched: typeof notched !== 'undefined' ? notched : Boolean(state.startAdornment || state.filled || state.focused)
    }),
    fullWidth: fullWidth,
    inputComponent: inputComponent,
    multiline: multiline,
    ref: ref,
    type: type
  }, other, {
    classes: (0,esm_extends/* default */.A)({}, classes, {
      notchedOutline: null
    })
  }));
});
 false ? 0 : void 0;
OutlinedInput.muiName = 'Input';
/* harmony default export */ const OutlinedInput_OutlinedInput = (OutlinedInput);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/FormLabel/formLabelClasses.js


function getFormLabelUtilityClasses(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiFormLabel', slot);
}
const formLabelClasses = (0,generateUtilityClasses/* default */.A)('MuiFormLabel', ['root', 'colorSecondary', 'focused', 'disabled', 'error', 'filled', 'required', 'asterisk']);
/* harmony default export */ const FormLabel_formLabelClasses = (formLabelClasses);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/FormLabel/FormLabel.js
'use client';



const FormLabel_excluded = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"];











const FormLabel_useUtilityClasses = ownerState => {
  const {
    classes,
    color,
    focused,
    disabled,
    error,
    filled,
    required
  } = ownerState;
  const slots = {
    root: ['root', `color${(0,capitalize/* default */.A)(color)}`, disabled && 'disabled', error && 'error', filled && 'filled', focused && 'focused', required && 'required'],
    asterisk: ['asterisk', error && 'error']
  };
  return (0,composeClasses/* default */.A)(slots, getFormLabelUtilityClasses, classes);
};
const FormLabelRoot = (0,styled/* default */.Ay)('label', {
  name: 'MuiFormLabel',
  slot: 'Root',
  overridesResolver: ({
    ownerState
  }, styles) => {
    return (0,esm_extends/* default */.A)({}, styles.root, ownerState.color === 'secondary' && styles.colorSecondary, ownerState.filled && styles.filled);
  }
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.A)({
  color: (theme.vars || theme).palette.text.secondary
}, theme.typography.body1, {
  lineHeight: '1.4375em',
  padding: 0,
  position: 'relative',
  [`&.${FormLabel_formLabelClasses.focused}`]: {
    color: (theme.vars || theme).palette[ownerState.color].main
  },
  [`&.${FormLabel_formLabelClasses.disabled}`]: {
    color: (theme.vars || theme).palette.text.disabled
  },
  [`&.${FormLabel_formLabelClasses.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
}));
const AsteriskComponent = (0,styled/* default */.Ay)('span', {
  name: 'MuiFormLabel',
  slot: 'Asterisk',
  overridesResolver: (props, styles) => styles.asterisk
})(({
  theme
}) => ({
  [`&.${FormLabel_formLabelClasses.error}`]: {
    color: (theme.vars || theme).palette.error.main
  }
}));
const FormLabel = /*#__PURE__*/react.forwardRef(function FormLabel(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiFormLabel'
  });
  const {
      children,
      className,
      component = 'label'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, FormLabel_excluded);
  const muiFormControl = (0,useFormControl/* default */.A)();
  const fcs = (0,formControlState/* default */.A)({
    props,
    muiFormControl,
    states: ['color', 'required', 'focused', 'disabled', 'error', 'filled']
  });
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    color: fcs.color || 'primary',
    component,
    disabled: fcs.disabled,
    error: fcs.error,
    filled: fcs.filled,
    focused: fcs.focused,
    required: fcs.required
  });
  const classes = FormLabel_useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(FormLabelRoot, (0,esm_extends/* default */.A)({
    as: component,
    ownerState: ownerState,
    className: (0,clsx/* default */.A)(classes.root, className),
    ref: ref
  }, other, {
    children: [children, fcs.required && /*#__PURE__*/(0,jsx_runtime.jsxs)(AsteriskComponent, {
      ownerState: ownerState,
      "aria-hidden": true,
      className: classes.asterisk,
      children: ["\u2009", '*']
    })]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const FormLabel_FormLabel = (FormLabel);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/InputLabel/inputLabelClasses.js


function getInputLabelUtilityClasses(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiInputLabel', slot);
}
const inputLabelClasses = (0,generateUtilityClasses/* default */.A)('MuiInputLabel', ['root', 'focused', 'disabled', 'error', 'required', 'asterisk', 'formControl', 'sizeSmall', 'shrink', 'animated', 'standard', 'filled', 'outlined']);
/* harmony default export */ const InputLabel_inputLabelClasses = ((/* unused pure expression or super */ null && (inputLabelClasses)));
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/InputLabel/InputLabel.js
'use client';



const InputLabel_excluded = ["disableAnimation", "margin", "shrink", "variant", "className"];












const InputLabel_useUtilityClasses = ownerState => {
  const {
    classes,
    formControl,
    size,
    shrink,
    disableAnimation,
    variant,
    required
  } = ownerState;
  const slots = {
    root: ['root', formControl && 'formControl', !disableAnimation && 'animated', shrink && 'shrink', size && size !== 'normal' && `size${(0,capitalize/* default */.A)(size)}`, variant],
    asterisk: [required && 'asterisk']
  };
  const composedClasses = (0,composeClasses/* default */.A)(slots, getInputLabelUtilityClasses, classes);
  return (0,esm_extends/* default */.A)({}, classes, composedClasses);
};
const InputLabelRoot = (0,styled/* default */.Ay)(FormLabel_FormLabel, {
  shouldForwardProp: prop => (0,rootShouldForwardProp/* default */.A)(prop) || prop === 'classes',
  name: 'MuiInputLabel',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${FormLabel_formLabelClasses.asterisk}`]: styles.asterisk
    }, styles.root, ownerState.formControl && styles.formControl, ownerState.size === 'small' && styles.sizeSmall, ownerState.shrink && styles.shrink, !ownerState.disableAnimation && styles.animated, ownerState.focused && styles.focused, styles[ownerState.variant]];
  }
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.A)({
  display: 'block',
  transformOrigin: 'top left',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  maxWidth: '100%'
}, ownerState.formControl && {
  position: 'absolute',
  left: 0,
  top: 0,
  // slight alteration to spec spacing to match visual spec result
  transform: 'translate(0, 20px) scale(1)'
}, ownerState.size === 'small' && {
  // Compensation for the `Input.inputSizeSmall` style.
  transform: 'translate(0, 17px) scale(1)'
}, ownerState.shrink && {
  transform: 'translate(0, -1.5px) scale(0.75)',
  transformOrigin: 'top left',
  maxWidth: '133%'
}, !ownerState.disableAnimation && {
  transition: theme.transitions.create(['color', 'transform', 'max-width'], {
    duration: theme.transitions.duration.shorter,
    easing: theme.transitions.easing.easeOut
  })
}, ownerState.variant === 'filled' && (0,esm_extends/* default */.A)({
  // Chrome's autofill feature gives the input field a yellow background.
  // Since the input field is behind the label in the HTML tree,
  // the input field is drawn last and hides the label with an opaque background color.
  // zIndex: 1 will raise the label above opaque background-colors of input.
  zIndex: 1,
  pointerEvents: 'none',
  transform: 'translate(12px, 16px) scale(1)',
  maxWidth: 'calc(100% - 24px)'
}, ownerState.size === 'small' && {
  transform: 'translate(12px, 13px) scale(1)'
}, ownerState.shrink && (0,esm_extends/* default */.A)({
  userSelect: 'none',
  pointerEvents: 'auto',
  transform: 'translate(12px, 7px) scale(0.75)',
  maxWidth: 'calc(133% - 24px)'
}, ownerState.size === 'small' && {
  transform: 'translate(12px, 4px) scale(0.75)'
})), ownerState.variant === 'outlined' && (0,esm_extends/* default */.A)({
  // see comment above on filled.zIndex
  zIndex: 1,
  pointerEvents: 'none',
  transform: 'translate(14px, 16px) scale(1)',
  maxWidth: 'calc(100% - 24px)'
}, ownerState.size === 'small' && {
  transform: 'translate(14px, 9px) scale(1)'
}, ownerState.shrink && {
  userSelect: 'none',
  pointerEvents: 'auto',
  // Theoretically, we should have (8+5)*2/0.75 = 34px
  // but it feels a better when it bleeds a bit on the left, so 32px.
  maxWidth: 'calc(133% - 32px)',
  transform: 'translate(14px, -9px) scale(0.75)'
})));
const InputLabel = /*#__PURE__*/react.forwardRef(function InputLabel(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    name: 'MuiInputLabel',
    props: inProps
  });
  const {
      disableAnimation = false,
      shrink: shrinkProp,
      className
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, InputLabel_excluded);
  const muiFormControl = (0,useFormControl/* default */.A)();
  let shrink = shrinkProp;
  if (typeof shrink === 'undefined' && muiFormControl) {
    shrink = muiFormControl.filled || muiFormControl.focused || muiFormControl.adornedStart;
  }
  const fcs = (0,formControlState/* default */.A)({
    props,
    muiFormControl,
    states: ['size', 'variant', 'required', 'focused']
  });
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    disableAnimation,
    formControl: muiFormControl,
    shrink,
    size: fcs.size,
    variant: fcs.variant,
    required: fcs.required,
    focused: fcs.focused
  });
  const classes = InputLabel_useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(InputLabelRoot, (0,esm_extends/* default */.A)({
    "data-shrink": shrink,
    ownerState: ownerState,
    ref: ref,
    className: (0,clsx/* default */.A)(classes.root, className)
  }, other, {
    classes: classes
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const InputLabel_InputLabel = (InputLabel);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/FormControl/formControlClasses.js


function getFormControlUtilityClasses(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiFormControl', slot);
}
const formControlClasses = (0,generateUtilityClasses/* default */.A)('MuiFormControl', ['root', 'marginNone', 'marginNormal', 'marginDense', 'fullWidth', 'disabled']);
/* harmony default export */ const FormControl_formControlClasses = ((/* unused pure expression or super */ null && (formControlClasses)));
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/FormControl/FormControl.js
'use client';



const FormControl_excluded = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"];












const FormControl_useUtilityClasses = ownerState => {
  const {
    classes,
    margin,
    fullWidth
  } = ownerState;
  const slots = {
    root: ['root', margin !== 'none' && `margin${(0,capitalize/* default */.A)(margin)}`, fullWidth && 'fullWidth']
  };
  return (0,composeClasses/* default */.A)(slots, getFormControlUtilityClasses, classes);
};
const FormControlRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiFormControl',
  slot: 'Root',
  overridesResolver: ({
    ownerState
  }, styles) => {
    return (0,esm_extends/* default */.A)({}, styles.root, styles[`margin${(0,capitalize/* default */.A)(ownerState.margin)}`], ownerState.fullWidth && styles.fullWidth);
  }
})(({
  ownerState
}) => (0,esm_extends/* default */.A)({
  display: 'inline-flex',
  flexDirection: 'column',
  position: 'relative',
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: 'top'
}, ownerState.margin === 'normal' && {
  marginTop: 16,
  marginBottom: 8
}, ownerState.margin === 'dense' && {
  marginTop: 8,
  marginBottom: 4
}, ownerState.fullWidth && {
  width: '100%'
}));

/**
 * Provides context such as filled/focused/error/required for form inputs.
 * Relying on the context provides high flexibility and ensures that the state always stays
 * consistent across the children of the `FormControl`.
 * This context is used by the following components:
 *
 *  - FormLabel
 *  - FormHelperText
 *  - Input
 *  - InputLabel
 *
 * You can find one composition example below and more going to [the demos](/material-ui/react-text-field/#components).
 *
 * ```jsx
 * <FormControl>
 *   <InputLabel htmlFor="my-input">Email address</InputLabel>
 *   <Input id="my-input" aria-describedby="my-helper-text" />
 *   <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
 * </FormControl>
 * ```
 *
 * ⚠️ Only one `InputBase` can be used within a FormControl because it creates visual inconsistencies.
 * For instance, only one input can be focused at the same time, the state shouldn't be shared.
 */
const FormControl = /*#__PURE__*/react.forwardRef(function FormControl(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiFormControl'
  });
  const {
      children,
      className,
      color = 'primary',
      component = 'div',
      disabled = false,
      error = false,
      focused: visuallyFocused,
      fullWidth = false,
      hiddenLabel = false,
      margin = 'none',
      required = false,
      size = 'medium',
      variant = 'outlined'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, FormControl_excluded);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    color,
    component,
    disabled,
    error,
    fullWidth,
    hiddenLabel,
    margin,
    required,
    size,
    variant
  });
  const classes = FormControl_useUtilityClasses(ownerState);
  const [adornedStart, setAdornedStart] = react.useState(() => {
    // We need to iterate through the children and find the Input in order
    // to fully support server-side rendering.
    let initialAdornedStart = false;
    if (children) {
      react.Children.forEach(children, child => {
        if (!utils_isMuiElement(child, ['Input', 'Select'])) {
          return;
        }
        const input = utils_isMuiElement(child, ['Select']) ? child.props.input : child;
        if (input && isAdornedStart(input.props)) {
          initialAdornedStart = true;
        }
      });
    }
    return initialAdornedStart;
  });
  const [filled, setFilled] = react.useState(() => {
    // We need to iterate through the children and find the Input in order
    // to fully support server-side rendering.
    let initialFilled = false;
    if (children) {
      react.Children.forEach(children, child => {
        if (!utils_isMuiElement(child, ['Input', 'Select'])) {
          return;
        }
        if (isFilled(child.props, true) || isFilled(child.props.inputProps, true)) {
          initialFilled = true;
        }
      });
    }
    return initialFilled;
  });
  const [focusedState, setFocused] = react.useState(false);
  if (disabled && focusedState) {
    setFocused(false);
  }
  const focused = visuallyFocused !== undefined && !disabled ? visuallyFocused : focusedState;
  let registerEffect;
  if (false) {}
  const childContext = react.useMemo(() => {
    return {
      adornedStart,
      setAdornedStart,
      color,
      disabled,
      error,
      filled,
      focused,
      fullWidth,
      hiddenLabel,
      size,
      onBlur: () => {
        setFocused(false);
      },
      onEmpty: () => {
        setFilled(false);
      },
      onFilled: () => {
        setFilled(true);
      },
      onFocus: () => {
        setFocused(true);
      },
      registerEffect,
      required,
      variant
    };
  }, [adornedStart, color, disabled, error, filled, focused, fullWidth, hiddenLabel, registerEffect, required, size, variant]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(FormControlContext/* default */.A.Provider, {
    value: childContext,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(FormControlRoot, (0,esm_extends/* default */.A)({
      as: component,
      ownerState: ownerState,
      className: (0,clsx/* default */.A)(classes.root, className),
      ref: ref
    }, other, {
      children: children
    }))
  });
});
 false ? 0 : void 0;
/* harmony default export */ const FormControl_FormControl = (FormControl);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/FormHelperText/FormHelperText.js + 1 modules
var FormHelperText = __webpack_require__(14904);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/utils/ownerDocument.js

/* harmony default export */ const utils_ownerDocument = (ownerDocument);
;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/getScrollbarSize/getScrollbarSize.js
// A change of the browser zoom change the scrollbar size.
// Credit https://github.com/twbs/bootstrap/blob/488fd8afc535ca3a6ad4dc581f5e89217b6a36ac/js/src/util/scrollbar.js#L14-L18
function getScrollbarSize(doc) {
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth#usage_notes
  const documentWidth = doc.documentElement.clientWidth;
  return Math.abs(window.innerWidth - documentWidth);
}
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/utils/getScrollbarSize.js

/* harmony default export */ const utils_getScrollbarSize = (getScrollbarSize);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/MenuList/MenuList.js
'use client';



const MenuList_excluded = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];









function nextItem(list, item, disableListWrap) {
  if (list === item) {
    return list.firstChild;
  }
  if (item && item.nextElementSibling) {
    return item.nextElementSibling;
  }
  return disableListWrap ? null : list.firstChild;
}
function previousItem(list, item, disableListWrap) {
  if (list === item) {
    return disableListWrap ? list.firstChild : list.lastChild;
  }
  if (item && item.previousElementSibling) {
    return item.previousElementSibling;
  }
  return disableListWrap ? null : list.lastChild;
}
function textCriteriaMatches(nextFocus, textCriteria) {
  if (textCriteria === undefined) {
    return true;
  }
  let text = nextFocus.innerText;
  if (text === undefined) {
    // jsdom doesn't support innerText
    text = nextFocus.textContent;
  }
  text = text.trim().toLowerCase();
  if (text.length === 0) {
    return false;
  }
  if (textCriteria.repeating) {
    return text[0] === textCriteria.keys[0];
  }
  return text.indexOf(textCriteria.keys.join('')) === 0;
}
function moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, traversalFunction, textCriteria) {
  let wrappedOnce = false;
  let nextFocus = traversalFunction(list, currentFocus, currentFocus ? disableListWrap : false);
  while (nextFocus) {
    // Prevent infinite loop.
    if (nextFocus === list.firstChild) {
      if (wrappedOnce) {
        return false;
      }
      wrappedOnce = true;
    }

    // Same logic as useAutocomplete.js
    const nextFocusDisabled = disabledItemsFocusable ? false : nextFocus.disabled || nextFocus.getAttribute('aria-disabled') === 'true';
    if (!nextFocus.hasAttribute('tabindex') || !textCriteriaMatches(nextFocus, textCriteria) || nextFocusDisabled) {
      // Move to the next element.
      nextFocus = traversalFunction(list, nextFocus, disableListWrap);
    } else {
      nextFocus.focus();
      return true;
    }
  }
  return false;
}

/**
 * A permanently displayed menu following https://www.w3.org/WAI/ARIA/apg/patterns/menu-button/.
 * It's exposed to help customization of the [`Menu`](/material-ui/api/menu/) component if you
 * use it separately you need to move focus into the component manually. Once
 * the focus is placed inside the component it is fully keyboard accessible.
 */
const MenuList = /*#__PURE__*/react.forwardRef(function MenuList(props, ref) {
  const {
      // private
      // eslint-disable-next-line react/prop-types
      actions,
      autoFocus = false,
      autoFocusItem = false,
      children,
      className,
      disabledItemsFocusable = false,
      disableListWrap = false,
      onKeyDown,
      variant = 'selectedMenu'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, MenuList_excluded);
  const listRef = react.useRef(null);
  const textCriteriaRef = react.useRef({
    keys: [],
    repeating: true,
    previousKeyMatched: true,
    lastTime: null
  });
  utils_useEnhancedEffect(() => {
    if (autoFocus) {
      listRef.current.focus();
    }
  }, [autoFocus]);
  react.useImperativeHandle(actions, () => ({
    adjustStyleForScrollbar: (containerElement, {
      direction
    }) => {
      // Let's ignore that piece of logic if users are already overriding the width
      // of the menu.
      const noExplicitWidth = !listRef.current.style.width;
      if (containerElement.clientHeight < listRef.current.clientHeight && noExplicitWidth) {
        const scrollbarSize = `${utils_getScrollbarSize(utils_ownerDocument(containerElement))}px`;
        listRef.current.style[direction === 'rtl' ? 'paddingLeft' : 'paddingRight'] = scrollbarSize;
        listRef.current.style.width = `calc(100% + ${scrollbarSize})`;
      }
      return listRef.current;
    }
  }), []);
  const handleKeyDown = event => {
    const list = listRef.current;
    const key = event.key;
    /**
     * @type {Element} - will always be defined since we are in a keydown handler
     * attached to an element. A keydown event is either dispatched to the activeElement
     * or document.body or document.documentElement. Only the first case will
     * trigger this specific handler.
     */
    const currentFocus = utils_ownerDocument(list).activeElement;
    if (key === 'ArrowDown') {
      // Prevent scroll of the page
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === 'ArrowUp') {
      event.preventDefault();
      moveFocus(list, currentFocus, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key === 'Home') {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, nextItem);
    } else if (key === 'End') {
      event.preventDefault();
      moveFocus(list, null, disableListWrap, disabledItemsFocusable, previousItem);
    } else if (key.length === 1) {
      const criteria = textCriteriaRef.current;
      const lowerKey = key.toLowerCase();
      const currTime = performance.now();
      if (criteria.keys.length > 0) {
        // Reset
        if (currTime - criteria.lastTime > 500) {
          criteria.keys = [];
          criteria.repeating = true;
          criteria.previousKeyMatched = true;
        } else if (criteria.repeating && lowerKey !== criteria.keys[0]) {
          criteria.repeating = false;
        }
      }
      criteria.lastTime = currTime;
      criteria.keys.push(lowerKey);
      const keepFocusOnCurrent = currentFocus && !criteria.repeating && textCriteriaMatches(currentFocus, criteria);
      if (criteria.previousKeyMatched && (keepFocusOnCurrent || moveFocus(list, currentFocus, false, disabledItemsFocusable, nextItem, criteria))) {
        event.preventDefault();
      } else {
        criteria.previousKeyMatched = false;
      }
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };
  const handleRef = utils_useForkRef(listRef, ref);

  /**
   * the index of the item should receive focus
   * in a `variant="selectedMenu"` it's the first `selected` item
   * otherwise it's the very first item.
   */
  let activeItemIndex = -1;
  // since we inject focus related props into children we have to do a lookahead
  // to check if there is a `selected` item. We're looking for the last `selected`
  // item and use the first valid item as a fallback
  react.Children.forEach(children, (child, index) => {
    if (! /*#__PURE__*/react.isValidElement(child)) {
      if (activeItemIndex === index) {
        activeItemIndex += 1;
        if (activeItemIndex >= children.length) {
          // there are no focusable items within the list.
          activeItemIndex = -1;
        }
      }
      return;
    }
    if (false) {}
    if (!child.props.disabled) {
      if (variant === 'selectedMenu' && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
    if (activeItemIndex === index && (child.props.disabled || child.props.muiSkipListHighlight || child.type.muiSkipListHighlight)) {
      activeItemIndex += 1;
      if (activeItemIndex >= children.length) {
        // there are no focusable items within the list.
        activeItemIndex = -1;
      }
    }
  });
  const items = react.Children.map(children, (child, index) => {
    if (index === activeItemIndex) {
      const newChildProps = {};
      if (autoFocusItem) {
        newChildProps.autoFocus = true;
      }
      if (child.props.tabIndex === undefined && variant === 'selectedMenu') {
        newChildProps.tabIndex = 0;
      }
      return /*#__PURE__*/react.cloneElement(child, newChildProps);
    }
    return child;
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(List_List, (0,esm_extends/* default */.A)({
    role: "menu",
    ref: handleRef,
    className: className,
    onKeyDown: handleKeyDown,
    tabIndex: autoFocus ? 0 : -1
  }, other, {
    children: items
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const MenuList_MenuList = (MenuList);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/utils/debounce.js

/* harmony default export */ const utils_debounce = (debounce);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/utils/ownerWindow.js

/* harmony default export */ const utils_ownerWindow = (ownerWindow);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Backdrop/backdropClasses.js


function getBackdropUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiBackdrop', slot);
}
const backdropClasses = (0,generateUtilityClasses/* default */.A)('MuiBackdrop', ['root', 'invisible']);
/* harmony default export */ const Backdrop_backdropClasses = ((/* unused pure expression or super */ null && (backdropClasses)));
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Backdrop/Backdrop.js
'use client';



const Backdrop_excluded = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"];









const Backdrop_useUtilityClasses = ownerState => {
  const {
    classes,
    invisible
  } = ownerState;
  const slots = {
    root: ['root', invisible && 'invisible']
  };
  return (0,composeClasses/* default */.A)(slots, getBackdropUtilityClass, classes);
};
const BackdropRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiBackdrop',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.invisible && styles.invisible];
  }
})(({
  ownerState
}) => (0,esm_extends/* default */.A)({
  position: 'fixed',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  WebkitTapHighlightColor: 'transparent'
}, ownerState.invisible && {
  backgroundColor: 'transparent'
}));
const Backdrop = /*#__PURE__*/react.forwardRef(function Backdrop(inProps, ref) {
  var _slotProps$root, _ref, _slots$root;
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiBackdrop'
  });
  const {
      children,
      className,
      component = 'div',
      components = {},
      componentsProps = {},
      invisible = false,
      open,
      slotProps = {},
      slots = {},
      TransitionComponent = Fade_Fade,
      transitionDuration
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, Backdrop_excluded);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    component,
    invisible
  });
  const classes = Backdrop_useUtilityClasses(ownerState);
  const rootSlotProps = (_slotProps$root = slotProps.root) != null ? _slotProps$root : componentsProps.root;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TransitionComponent, (0,esm_extends/* default */.A)({
    in: open,
    timeout: transitionDuration
  }, other, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(BackdropRoot, (0,esm_extends/* default */.A)({
      "aria-hidden": true
    }, rootSlotProps, {
      as: (_ref = (_slots$root = slots.root) != null ? _slots$root : components.Root) != null ? _ref : component,
      className: (0,clsx/* default */.A)(classes.root, className, rootSlotProps == null ? void 0 : rootSlotProps.className),
      ownerState: (0,esm_extends/* default */.A)({}, ownerState, rootSlotProps == null ? void 0 : rootSlotProps.ownerState),
      classes: classes,
      ref: ref,
      children: children
    }))
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const Backdrop_Backdrop = (Backdrop);
;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/createChainedFunction/createChainedFunction.js
/**
 * Safe chained function.
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 */
function createChainedFunction(...funcs) {
  return funcs.reduce((acc, func) => {
    if (func == null) {
      return acc;
    }
    return function chainedFunction(...args) {
      acc.apply(this, args);
      func.apply(this, args);
    };
  }, () => {});
}
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Modal/ModalManager.js

// Is a vertical scrollbar displayed?
function isOverflowing(container) {
  const doc = ownerDocument(container);
  if (doc.body === container) {
    return ownerWindow(container).innerWidth > doc.documentElement.clientWidth;
  }
  return container.scrollHeight > container.clientHeight;
}
function ariaHidden(element, show) {
  if (show) {
    element.setAttribute('aria-hidden', 'true');
  } else {
    element.removeAttribute('aria-hidden');
  }
}
function getPaddingRight(element) {
  return parseInt(ownerWindow(element).getComputedStyle(element).paddingRight, 10) || 0;
}
function isAriaHiddenForbiddenOnElement(element) {
  // The forbidden HTML tags are the ones from ARIA specification that
  // can be children of body and can't have aria-hidden attribute.
  // cf. https://www.w3.org/TR/html-aria/#docconformance
  const forbiddenTagNames = ['TEMPLATE', 'SCRIPT', 'STYLE', 'LINK', 'MAP', 'META', 'NOSCRIPT', 'PICTURE', 'COL', 'COLGROUP', 'PARAM', 'SLOT', 'SOURCE', 'TRACK'];
  const isForbiddenTagName = forbiddenTagNames.indexOf(element.tagName) !== -1;
  const isInputHidden = element.tagName === 'INPUT' && element.getAttribute('type') === 'hidden';
  return isForbiddenTagName || isInputHidden;
}
function ariaHiddenSiblings(container, mountElement, currentElement, elementsToExclude, show) {
  const blacklist = [mountElement, currentElement, ...elementsToExclude];
  [].forEach.call(container.children, element => {
    const isNotExcludedElement = blacklist.indexOf(element) === -1;
    const isNotForbiddenElement = !isAriaHiddenForbiddenOnElement(element);
    if (isNotExcludedElement && isNotForbiddenElement) {
      ariaHidden(element, show);
    }
  });
}
function findIndexOf(items, callback) {
  let idx = -1;
  items.some((item, index) => {
    if (callback(item)) {
      idx = index;
      return true;
    }
    return false;
  });
  return idx;
}
function handleContainer(containerInfo, props) {
  const restoreStyle = [];
  const container = containerInfo.container;
  if (!props.disableScrollLock) {
    if (isOverflowing(container)) {
      // Compute the size before applying overflow hidden to avoid any scroll jumps.
      const scrollbarSize = getScrollbarSize(ownerDocument(container));
      restoreStyle.push({
        value: container.style.paddingRight,
        property: 'padding-right',
        el: container
      });
      // Use computed style, here to get the real padding to add our scrollbar width.
      container.style.paddingRight = `${getPaddingRight(container) + scrollbarSize}px`;

      // .mui-fixed is a global helper.
      const fixedElements = ownerDocument(container).querySelectorAll('.mui-fixed');
      [].forEach.call(fixedElements, element => {
        restoreStyle.push({
          value: element.style.paddingRight,
          property: 'padding-right',
          el: element
        });
        element.style.paddingRight = `${getPaddingRight(element) + scrollbarSize}px`;
      });
    }
    let scrollContainer;
    if (container.parentNode instanceof DocumentFragment) {
      scrollContainer = ownerDocument(container).body;
    } else {
      // Support html overflow-y: auto for scroll stability between pages
      // https://css-tricks.com/snippets/css/force-vertical-scrollbar/
      const parent = container.parentElement;
      const containerWindow = ownerWindow(container);
      scrollContainer = (parent == null ? void 0 : parent.nodeName) === 'HTML' && containerWindow.getComputedStyle(parent).overflowY === 'scroll' ? parent : container;
    }

    // Block the scroll even if no scrollbar is visible to account for mobile keyboard
    // screensize shrink.
    restoreStyle.push({
      value: scrollContainer.style.overflow,
      property: 'overflow',
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowX,
      property: 'overflow-x',
      el: scrollContainer
    }, {
      value: scrollContainer.style.overflowY,
      property: 'overflow-y',
      el: scrollContainer
    });
    scrollContainer.style.overflow = 'hidden';
  }
  const restore = () => {
    restoreStyle.forEach(({
      value,
      el,
      property
    }) => {
      if (value) {
        el.style.setProperty(property, value);
      } else {
        el.style.removeProperty(property);
      }
    });
  };
  return restore;
}
function getHiddenSiblings(container) {
  const hiddenSiblings = [];
  [].forEach.call(container.children, element => {
    if (element.getAttribute('aria-hidden') === 'true') {
      hiddenSiblings.push(element);
    }
  });
  return hiddenSiblings;
}
/**
 * @ignore - do not document.
 *
 * Proper state management for containers and the modals in those containers.
 * Simplified, but inspired by react-overlay's ModalManager class.
 * Used by the Modal to ensure proper styling of containers.
 */
class ModalManager {
  constructor() {
    this.containers = void 0;
    this.modals = void 0;
    this.modals = [];
    this.containers = [];
  }
  add(modal, container) {
    let modalIndex = this.modals.indexOf(modal);
    if (modalIndex !== -1) {
      return modalIndex;
    }
    modalIndex = this.modals.length;
    this.modals.push(modal);

    // If the modal we are adding is already in the DOM.
    if (modal.modalRef) {
      ariaHidden(modal.modalRef, false);
    }
    const hiddenSiblings = getHiddenSiblings(container);
    ariaHiddenSiblings(container, modal.mount, modal.modalRef, hiddenSiblings, true);
    const containerIndex = findIndexOf(this.containers, item => item.container === container);
    if (containerIndex !== -1) {
      this.containers[containerIndex].modals.push(modal);
      return modalIndex;
    }
    this.containers.push({
      modals: [modal],
      container,
      restore: null,
      hiddenSiblings
    });
    return modalIndex;
  }
  mount(modal, props) {
    const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    if (!containerInfo.restore) {
      containerInfo.restore = handleContainer(containerInfo, props);
    }
  }
  remove(modal, ariaHiddenState = true) {
    const modalIndex = this.modals.indexOf(modal);
    if (modalIndex === -1) {
      return modalIndex;
    }
    const containerIndex = findIndexOf(this.containers, item => item.modals.indexOf(modal) !== -1);
    const containerInfo = this.containers[containerIndex];
    containerInfo.modals.splice(containerInfo.modals.indexOf(modal), 1);
    this.modals.splice(modalIndex, 1);

    // If that was the last modal in a container, clean up the container.
    if (containerInfo.modals.length === 0) {
      // The modal might be closed before it had the chance to be mounted in the DOM.
      if (containerInfo.restore) {
        containerInfo.restore();
      }
      if (modal.modalRef) {
        // In case the modal wasn't in the DOM yet.
        ariaHidden(modal.modalRef, ariaHiddenState);
      }
      ariaHiddenSiblings(containerInfo.container, modal.mount, modal.modalRef, containerInfo.hiddenSiblings, false);
      this.containers.splice(containerIndex, 1);
    } else {
      // Otherwise make sure the next top modal is visible to a screen reader.
      const nextTop = containerInfo.modals[containerInfo.modals.length - 1];
      // as soon as a modal is adding its modalRef is undefined. it can't set
      // aria-hidden because the dom element doesn't exist either
      // when modal was unmounted before modalRef gets null
      if (nextTop.modalRef) {
        ariaHidden(nextTop.modalRef, false);
      }
    }
    return modalIndex;
  }
  isTopModal(modal) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === modal;
  }
}
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Modal/useModal.js
'use client';






function useModal_getContainer(container) {
  return typeof container === 'function' ? container() : container;
}
function getHasTransition(children) {
  return children ? children.props.hasOwnProperty('in') : false;
}

// A modal manager used to track and manage the state of open Modals.
// Modals don't open on the server so this won't conflict with concurrent requests.
const defaultManager = new ModalManager();
/**
 *
 * Demos:
 *
 * - [Modal](https://mui.com/base-ui/react-modal/#hook)
 *
 * API:
 *
 * - [useModal API](https://mui.com/base-ui/react-modal/hooks-api/#use-modal)
 */
function useModal(parameters) {
  const {
    container,
    disableEscapeKeyDown = false,
    disableScrollLock = false,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager = defaultManager,
    closeAfterTransition = false,
    onTransitionEnter,
    onTransitionExited,
    children,
    onClose,
    open,
    rootRef
  } = parameters;

  // @ts-ignore internal logic
  const modal = react.useRef({});
  const mountNodeRef = react.useRef(null);
  const modalRef = react.useRef(null);
  const handleRef = useForkRef(modalRef, rootRef);
  const [exited, setExited] = react.useState(!open);
  const hasTransition = getHasTransition(children);
  let ariaHiddenProp = true;
  if (parameters['aria-hidden'] === 'false' || parameters['aria-hidden'] === false) {
    ariaHiddenProp = false;
  }
  const getDoc = () => ownerDocument(mountNodeRef.current);
  const getModal = () => {
    modal.current.modalRef = modalRef.current;
    modal.current.mount = mountNodeRef.current;
    return modal.current;
  };
  const handleMounted = () => {
    manager.mount(getModal(), {
      disableScrollLock
    });

    // Fix a bug on Chrome where the scroll isn't initially 0.
    if (modalRef.current) {
      modalRef.current.scrollTop = 0;
    }
  };
  const handleOpen = useEventCallback_useEventCallback(() => {
    const resolvedContainer = useModal_getContainer(container) || getDoc().body;
    manager.add(getModal(), resolvedContainer);

    // The element was already mounted.
    if (modalRef.current) {
      handleMounted();
    }
  });
  const isTopModal = react.useCallback(() => manager.isTopModal(getModal()), [manager]);
  const handlePortalRef = useEventCallback_useEventCallback(node => {
    mountNodeRef.current = node;
    if (!node) {
      return;
    }
    if (open && isTopModal()) {
      handleMounted();
    } else if (modalRef.current) {
      ariaHidden(modalRef.current, ariaHiddenProp);
    }
  });
  const handleClose = react.useCallback(() => {
    manager.remove(getModal(), ariaHiddenProp);
  }, [ariaHiddenProp, manager]);
  react.useEffect(() => {
    return () => {
      handleClose();
    };
  }, [handleClose]);
  react.useEffect(() => {
    if (open) {
      handleOpen();
    } else if (!hasTransition || !closeAfterTransition) {
      handleClose();
    }
  }, [open, handleClose, hasTransition, closeAfterTransition, handleOpen]);
  const createHandleKeyDown = otherHandlers => event => {
    var _otherHandlers$onKeyD;
    (_otherHandlers$onKeyD = otherHandlers.onKeyDown) == null || _otherHandlers$onKeyD.call(otherHandlers, event);

    // The handler doesn't take event.defaultPrevented into account:
    //
    // event.preventDefault() is meant to stop default behaviors like
    // clicking a checkbox to check it, hitting a button to submit a form,
    // and hitting left arrow to move the cursor in a text input etc.
    // Only special HTML elements have these default behaviors.
    if (event.key !== 'Escape' || event.which === 229 ||
    // Wait until IME is settled.
    !isTopModal()) {
      return;
    }
    if (!disableEscapeKeyDown) {
      // Swallow the event, in case someone is listening for the escape key on the body.
      event.stopPropagation();
      if (onClose) {
        onClose(event, 'escapeKeyDown');
      }
    }
  };
  const createHandleBackdropClick = otherHandlers => event => {
    var _otherHandlers$onClic;
    (_otherHandlers$onClic = otherHandlers.onClick) == null || _otherHandlers$onClic.call(otherHandlers, event);
    if (event.target !== event.currentTarget) {
      return;
    }
    if (onClose) {
      onClose(event, 'backdropClick');
    }
  };
  const getRootProps = (otherHandlers = {}) => {
    const propsEventHandlers = extractEventHandlers_extractEventHandlers(parameters);

    // The custom event handlers shouldn't be spread on the root element
    delete propsEventHandlers.onTransitionEnter;
    delete propsEventHandlers.onTransitionExited;
    const externalEventHandlers = (0,esm_extends/* default */.A)({}, propsEventHandlers, otherHandlers);
    return (0,esm_extends/* default */.A)({
      role: 'presentation'
    }, externalEventHandlers, {
      onKeyDown: createHandleKeyDown(externalEventHandlers),
      ref: handleRef
    });
  };
  const getBackdropProps = (otherHandlers = {}) => {
    const externalEventHandlers = otherHandlers;
    return (0,esm_extends/* default */.A)({
      'aria-hidden': true
    }, externalEventHandlers, {
      onClick: createHandleBackdropClick(externalEventHandlers),
      open
    });
  };
  const getTransitionProps = () => {
    const handleEnter = () => {
      setExited(false);
      if (onTransitionEnter) {
        onTransitionEnter();
      }
    };
    const handleExited = () => {
      setExited(true);
      if (onTransitionExited) {
        onTransitionExited();
      }
      if (closeAfterTransition) {
        handleClose();
      }
    };
    return {
      onEnter: createChainedFunction(handleEnter, children == null ? void 0 : children.props.onEnter),
      onExited: createChainedFunction(handleExited, children == null ? void 0 : children.props.onExited)
    };
  };
  return {
    getRootProps,
    getBackdropProps,
    getTransitionProps,
    rootRef: handleRef,
    portalRef: handlePortalRef,
    isTopModal,
    exited,
    hasTransition
  };
}
/* harmony default export */ const Modal_useModal = (useModal);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Modal/modalClasses.js


function getModalUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiModal', slot);
}
const modalClasses = (0,generateUtilityClasses/* default */.A)('MuiModal', ['root', 'hidden', 'backdrop']);
/* harmony default export */ const Modal_modalClasses = ((/* unused pure expression or super */ null && (modalClasses)));
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Modal/Modal.js
'use client';



const Modal_excluded = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"];
















const Modal_useUtilityClasses = ownerState => {
  const {
    open,
    exited,
    classes
  } = ownerState;
  const slots = {
    root: ['root', !open && exited && 'hidden'],
    backdrop: ['backdrop']
  };
  return (0,composeClasses/* default */.A)(slots, getModalUtilityClass, classes);
};
const ModalRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiModal',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, !ownerState.open && ownerState.exited && styles.hidden];
  }
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.A)({
  position: 'fixed',
  zIndex: (theme.vars || theme).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !ownerState.open && ownerState.exited && {
  visibility: 'hidden'
}));
const ModalBackdrop = (0,styled/* default */.Ay)(Backdrop_Backdrop, {
  name: 'MuiModal',
  slot: 'Backdrop',
  overridesResolver: (props, styles) => {
    return styles.backdrop;
  }
})({
  zIndex: -1
});

/**
 * Modal is a lower-level construct that is leveraged by the following components:
 *
 * - [Dialog](/material-ui/api/dialog/)
 * - [Drawer](/material-ui/api/drawer/)
 * - [Menu](/material-ui/api/menu/)
 * - [Popover](/material-ui/api/popover/)
 *
 * If you are creating a modal dialog, you probably want to use the [Dialog](/material-ui/api/dialog/) component
 * rather than directly using Modal.
 *
 * This component shares many concepts with [react-overlays](https://react-bootstrap.github.io/react-overlays/#modals).
 */
const Modal = /*#__PURE__*/react.forwardRef(function Modal(inProps, ref) {
  var _ref, _slots$root, _ref2, _slots$backdrop, _slotProps$root, _slotProps$backdrop;
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    name: 'MuiModal',
    props: inProps
  });
  const {
      BackdropComponent = ModalBackdrop,
      BackdropProps,
      className,
      closeAfterTransition = false,
      children,
      container,
      component,
      components = {},
      componentsProps = {},
      disableAutoFocus = false,
      disableEnforceFocus = false,
      disableEscapeKeyDown = false,
      disablePortal = false,
      disableRestoreFocus = false,
      disableScrollLock = false,
      hideBackdrop = false,
      keepMounted = false,
      onBackdropClick,
      open,
      slotProps,
      slots
      // eslint-disable-next-line react/prop-types
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, Modal_excluded);
  const propsWithDefaults = (0,esm_extends/* default */.A)({}, props, {
    closeAfterTransition,
    disableAutoFocus,
    disableEnforceFocus,
    disableEscapeKeyDown,
    disablePortal,
    disableRestoreFocus,
    disableScrollLock,
    hideBackdrop,
    keepMounted
  });
  const {
    getRootProps,
    getBackdropProps,
    getTransitionProps,
    portalRef,
    isTopModal,
    exited,
    hasTransition
  } = Modal_useModal((0,esm_extends/* default */.A)({}, propsWithDefaults, {
    rootRef: ref
  }));
  const ownerState = (0,esm_extends/* default */.A)({}, propsWithDefaults, {
    exited
  });
  const classes = Modal_useUtilityClasses(ownerState);
  const childProps = {};
  if (children.props.tabIndex === undefined) {
    childProps.tabIndex = '-1';
  }

  // It's a Transition like component
  if (hasTransition) {
    const {
      onEnter,
      onExited
    } = getTransitionProps();
    childProps.onEnter = onEnter;
    childProps.onExited = onExited;
  }
  const RootSlot = (_ref = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : components.Root) != null ? _ref : ModalRoot;
  const BackdropSlot = (_ref2 = (_slots$backdrop = slots == null ? void 0 : slots.backdrop) != null ? _slots$backdrop : components.Backdrop) != null ? _ref2 : BackdropComponent;
  const rootSlotProps = (_slotProps$root = slotProps == null ? void 0 : slotProps.root) != null ? _slotProps$root : componentsProps.root;
  const backdropSlotProps = (_slotProps$backdrop = slotProps == null ? void 0 : slotProps.backdrop) != null ? _slotProps$backdrop : componentsProps.backdrop;
  const rootProps = useSlotProps_useSlotProps({
    elementType: RootSlot,
    externalSlotProps: rootSlotProps,
    externalForwardedProps: other,
    getSlotProps: getRootProps,
    additionalProps: {
      ref,
      as: component
    },
    ownerState,
    className: (0,clsx/* default */.A)(className, rootSlotProps == null ? void 0 : rootSlotProps.className, classes == null ? void 0 : classes.root, !ownerState.open && ownerState.exited && (classes == null ? void 0 : classes.hidden))
  });
  const backdropProps = useSlotProps_useSlotProps({
    elementType: BackdropSlot,
    externalSlotProps: backdropSlotProps,
    additionalProps: BackdropProps,
    getSlotProps: otherHandlers => {
      return getBackdropProps((0,esm_extends/* default */.A)({}, otherHandlers, {
        onClick: e => {
          if (onBackdropClick) {
            onBackdropClick(e);
          }
          if (otherHandlers != null && otherHandlers.onClick) {
            otherHandlers.onClick(e);
          }
        }
      }));
    },
    className: (0,clsx/* default */.A)(backdropSlotProps == null ? void 0 : backdropSlotProps.className, BackdropProps == null ? void 0 : BackdropProps.className, classes == null ? void 0 : classes.backdrop),
    ownerState
  });
  if (!keepMounted && !open && (!hasTransition || exited)) {
    return null;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Portal_Portal, {
    ref: portalRef,
    container: container,
    disablePortal: disablePortal,
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(RootSlot, (0,esm_extends/* default */.A)({}, rootProps, {
      children: [!hideBackdrop && BackdropComponent ? /*#__PURE__*/(0,jsx_runtime.jsx)(BackdropSlot, (0,esm_extends/* default */.A)({}, backdropProps)) : null, /*#__PURE__*/(0,jsx_runtime.jsx)(Unstable_TrapFocus_FocusTrap, {
        disableEnforceFocus: disableEnforceFocus,
        disableAutoFocus: disableAutoFocus,
        disableRestoreFocus: disableRestoreFocus,
        isEnabled: isTopModal,
        open: open,
        children: /*#__PURE__*/react.cloneElement(children, childProps)
      })]
    }))
  });
});
 false ? 0 : void 0;
/* harmony default export */ const Modal_Modal = (Modal);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Popover/popoverClasses.js


function getPopoverUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiPopover', slot);
}
const popoverClasses = (0,generateUtilityClasses/* default */.A)('MuiPopover', ['root', 'paper']);
/* harmony default export */ const Popover_popoverClasses = ((/* unused pure expression or super */ null && (popoverClasses)));
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Popover/Popover.js
'use client';



const Popover_excluded = ["onEntering"],
  Popover_excluded2 = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"],
  Popover_excluded3 = ["slotProps"];






















function getOffsetTop(rect, vertical) {
  let offset = 0;
  if (typeof vertical === 'number') {
    offset = vertical;
  } else if (vertical === 'center') {
    offset = rect.height / 2;
  } else if (vertical === 'bottom') {
    offset = rect.height;
  }
  return offset;
}
function getOffsetLeft(rect, horizontal) {
  let offset = 0;
  if (typeof horizontal === 'number') {
    offset = horizontal;
  } else if (horizontal === 'center') {
    offset = rect.width / 2;
  } else if (horizontal === 'right') {
    offset = rect.width;
  }
  return offset;
}
function getTransformOriginValue(transformOrigin) {
  return [transformOrigin.horizontal, transformOrigin.vertical].map(n => typeof n === 'number' ? `${n}px` : n).join(' ');
}
function Popover_resolveAnchorEl(anchorEl) {
  return typeof anchorEl === 'function' ? anchorEl() : anchorEl;
}
const Popover_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    paper: ['paper']
  };
  return (0,composeClasses/* default */.A)(slots, getPopoverUtilityClass, classes);
};
const PopoverRoot = (0,styled/* default */.Ay)(Modal_Modal, {
  name: 'MuiPopover',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});
const PopoverPaper = (0,styled/* default */.Ay)(Paper_Paper, {
  name: 'MuiPopover',
  slot: 'Paper',
  overridesResolver: (props, styles) => styles.paper
})({
  position: 'absolute',
  overflowY: 'auto',
  overflowX: 'hidden',
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: 'calc(100% - 32px)',
  maxHeight: 'calc(100% - 32px)',
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
});
const Popover = /*#__PURE__*/react.forwardRef(function Popover(inProps, ref) {
  var _slotProps$paper, _slots$root, _slots$paper;
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiPopover'
  });
  const {
      action,
      anchorEl,
      anchorOrigin = {
        vertical: 'top',
        horizontal: 'left'
      },
      anchorPosition,
      anchorReference = 'anchorEl',
      children,
      className,
      container: containerProp,
      elevation = 8,
      marginThreshold = 16,
      open,
      PaperProps: PaperPropsProp = {},
      slots,
      slotProps,
      transformOrigin = {
        vertical: 'top',
        horizontal: 'left'
      },
      TransitionComponent = Grow_Grow,
      transitionDuration: transitionDurationProp = 'auto',
      TransitionProps: {
        onEntering
      } = {},
      disableScrollLock = false
    } = props,
    TransitionProps = (0,objectWithoutPropertiesLoose/* default */.A)(props.TransitionProps, Popover_excluded),
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, Popover_excluded2);
  const externalPaperSlotProps = (_slotProps$paper = slotProps == null ? void 0 : slotProps.paper) != null ? _slotProps$paper : PaperPropsProp;
  const paperRef = react.useRef();
  const handlePaperRef = utils_useForkRef(paperRef, externalPaperSlotProps.ref);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    anchorOrigin,
    anchorReference,
    elevation,
    marginThreshold,
    externalPaperSlotProps,
    transformOrigin,
    TransitionComponent,
    transitionDuration: transitionDurationProp,
    TransitionProps
  });
  const classes = Popover_useUtilityClasses(ownerState);

  // Returns the top/left offset of the position
  // to attach to on the anchor element (or body if none is provided)
  const getAnchorOffset = react.useCallback(() => {
    if (anchorReference === 'anchorPosition') {
      if (false) {}
      return anchorPosition;
    }
    const resolvedAnchorEl = Popover_resolveAnchorEl(anchorEl);

    // If an anchor element wasn't provided, just use the parent body element of this Popover
    const anchorElement = resolvedAnchorEl && resolvedAnchorEl.nodeType === 1 ? resolvedAnchorEl : utils_ownerDocument(paperRef.current).body;
    const anchorRect = anchorElement.getBoundingClientRect();
    if (false) {}
    return {
      top: anchorRect.top + getOffsetTop(anchorRect, anchorOrigin.vertical),
      left: anchorRect.left + getOffsetLeft(anchorRect, anchorOrigin.horizontal)
    };
  }, [anchorEl, anchorOrigin.horizontal, anchorOrigin.vertical, anchorPosition, anchorReference]);

  // Returns the base transform origin using the element
  const getTransformOrigin = react.useCallback(elemRect => {
    return {
      vertical: getOffsetTop(elemRect, transformOrigin.vertical),
      horizontal: getOffsetLeft(elemRect, transformOrigin.horizontal)
    };
  }, [transformOrigin.horizontal, transformOrigin.vertical]);
  const getPositioningStyle = react.useCallback(element => {
    const elemRect = {
      width: element.offsetWidth,
      height: element.offsetHeight
    };

    // Get the transform origin point on the element itself
    const elemTransformOrigin = getTransformOrigin(elemRect);
    if (anchorReference === 'none') {
      return {
        top: null,
        left: null,
        transformOrigin: getTransformOriginValue(elemTransformOrigin)
      };
    }

    // Get the offset of the anchoring element
    const anchorOffset = getAnchorOffset();

    // Calculate element positioning
    let top = anchorOffset.top - elemTransformOrigin.vertical;
    let left = anchorOffset.left - elemTransformOrigin.horizontal;
    const bottom = top + elemRect.height;
    const right = left + elemRect.width;

    // Use the parent window of the anchorEl if provided
    const containerWindow = utils_ownerWindow(Popover_resolveAnchorEl(anchorEl));

    // Window thresholds taking required margin into account
    const heightThreshold = containerWindow.innerHeight - marginThreshold;
    const widthThreshold = containerWindow.innerWidth - marginThreshold;

    // Check if the vertical axis needs shifting
    if (marginThreshold !== null && top < marginThreshold) {
      const diff = top - marginThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    } else if (marginThreshold !== null && bottom > heightThreshold) {
      const diff = bottom - heightThreshold;
      top -= diff;
      elemTransformOrigin.vertical += diff;
    }
    if (false) {}

    // Check if the horizontal axis needs shifting
    if (marginThreshold !== null && left < marginThreshold) {
      const diff = left - marginThreshold;
      left -= diff;
      elemTransformOrigin.horizontal += diff;
    } else if (right > widthThreshold) {
      const diff = right - widthThreshold;
      left -= diff;
      elemTransformOrigin.horizontal += diff;
    }
    return {
      top: `${Math.round(top)}px`,
      left: `${Math.round(left)}px`,
      transformOrigin: getTransformOriginValue(elemTransformOrigin)
    };
  }, [anchorEl, anchorReference, getAnchorOffset, getTransformOrigin, marginThreshold]);
  const [isPositioned, setIsPositioned] = react.useState(open);
  const setPositioningStyles = react.useCallback(() => {
    const element = paperRef.current;
    if (!element) {
      return;
    }
    const positioning = getPositioningStyle(element);
    if (positioning.top !== null) {
      element.style.top = positioning.top;
    }
    if (positioning.left !== null) {
      element.style.left = positioning.left;
    }
    element.style.transformOrigin = positioning.transformOrigin;
    setIsPositioned(true);
  }, [getPositioningStyle]);
  react.useEffect(() => {
    if (disableScrollLock) {
      window.addEventListener('scroll', setPositioningStyles);
    }
    return () => window.removeEventListener('scroll', setPositioningStyles);
  }, [anchorEl, disableScrollLock, setPositioningStyles]);
  const handleEntering = (element, isAppearing) => {
    if (onEntering) {
      onEntering(element, isAppearing);
    }
    setPositioningStyles();
  };
  const handleExited = () => {
    setIsPositioned(false);
  };
  react.useEffect(() => {
    if (open) {
      setPositioningStyles();
    }
  });
  react.useImperativeHandle(action, () => open ? {
    updatePosition: () => {
      setPositioningStyles();
    }
  } : null, [open, setPositioningStyles]);
  react.useEffect(() => {
    if (!open) {
      return undefined;
    }
    const handleResize = utils_debounce(() => {
      setPositioningStyles();
    });
    const containerWindow = utils_ownerWindow(anchorEl);
    containerWindow.addEventListener('resize', handleResize);
    return () => {
      handleResize.clear();
      containerWindow.removeEventListener('resize', handleResize);
    };
  }, [anchorEl, open, setPositioningStyles]);
  let transitionDuration = transitionDurationProp;
  if (transitionDurationProp === 'auto' && !TransitionComponent.muiSupportAuto) {
    transitionDuration = undefined;
  }

  // If the container prop is provided, use that
  // If the anchorEl prop is provided, use its parent body element as the container
  // If neither are provided let the Modal take care of choosing the container
  const container = containerProp || (anchorEl ? utils_ownerDocument(Popover_resolveAnchorEl(anchorEl)).body : undefined);
  const RootSlot = (_slots$root = slots == null ? void 0 : slots.root) != null ? _slots$root : PopoverRoot;
  const PaperSlot = (_slots$paper = slots == null ? void 0 : slots.paper) != null ? _slots$paper : PopoverPaper;
  const paperProps = useSlotProps_useSlotProps({
    elementType: PaperSlot,
    externalSlotProps: (0,esm_extends/* default */.A)({}, externalPaperSlotProps, {
      style: isPositioned ? externalPaperSlotProps.style : (0,esm_extends/* default */.A)({}, externalPaperSlotProps.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation,
      ref: handlePaperRef
    },
    ownerState,
    className: (0,clsx/* default */.A)(classes.paper, externalPaperSlotProps == null ? void 0 : externalPaperSlotProps.className)
  });
  const _useSlotProps = useSlotProps_useSlotProps({
      elementType: RootSlot,
      externalSlotProps: (slotProps == null ? void 0 : slotProps.root) || {},
      externalForwardedProps: other,
      additionalProps: {
        ref,
        slotProps: {
          backdrop: {
            invisible: true
          }
        },
        container,
        open
      },
      ownerState,
      className: (0,clsx/* default */.A)(classes.root, className)
    }),
    {
      slotProps: rootSlotPropsProp
    } = _useSlotProps,
    rootProps = (0,objectWithoutPropertiesLoose/* default */.A)(_useSlotProps, Popover_excluded3);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(RootSlot, (0,esm_extends/* default */.A)({}, rootProps, !isHostComponent_isHostComponent(RootSlot) && {
    slotProps: rootSlotPropsProp,
    disableScrollLock
  }, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(TransitionComponent, (0,esm_extends/* default */.A)({
      appear: true,
      in: open,
      onEntering: handleEntering,
      onExited: handleExited,
      timeout: transitionDuration
    }, TransitionProps, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(PaperSlot, (0,esm_extends/* default */.A)({}, paperProps, {
        children: children
      }))
    }))
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const Popover_Popover = (Popover);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Menu/menuClasses.js


function getMenuUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiMenu', slot);
}
const menuClasses = (0,generateUtilityClasses/* default */.A)('MuiMenu', ['root', 'paper', 'list']);
/* harmony default export */ const Menu_menuClasses = ((/* unused pure expression or super */ null && (menuClasses)));
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Menu/Menu.js
'use client';



const Menu_excluded = ["onEntering"],
  Menu_excluded2 = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"];














const RTL_ORIGIN = {
  vertical: 'top',
  horizontal: 'right'
};
const LTR_ORIGIN = {
  vertical: 'top',
  horizontal: 'left'
};
const Menu_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    paper: ['paper'],
    list: ['list']
  };
  return (0,composeClasses/* default */.A)(slots, getMenuUtilityClass, classes);
};
const MenuRoot = (0,styled/* default */.Ay)(Popover_Popover, {
  shouldForwardProp: prop => (0,rootShouldForwardProp/* default */.A)(prop) || prop === 'classes',
  name: 'MuiMenu',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});
const MenuPaper = (0,styled/* default */.Ay)(PopoverPaper, {
  name: 'MuiMenu',
  slot: 'Paper',
  overridesResolver: (props, styles) => styles.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: 'calc(100% - 96px)',
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: 'touch'
});
const MenuMenuList = (0,styled/* default */.Ay)(MenuList_MenuList, {
  name: 'MuiMenu',
  slot: 'List',
  overridesResolver: (props, styles) => styles.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
});
const Menu = /*#__PURE__*/react.forwardRef(function Menu(inProps, ref) {
  var _slots$paper, _slotProps$paper;
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiMenu'
  });
  const {
      autoFocus = true,
      children,
      className,
      disableAutoFocusItem = false,
      MenuListProps = {},
      onClose,
      open,
      PaperProps = {},
      PopoverClasses,
      transitionDuration = 'auto',
      TransitionProps: {
        onEntering
      } = {},
      variant = 'selectedMenu',
      slots = {},
      slotProps = {}
    } = props,
    TransitionProps = (0,objectWithoutPropertiesLoose/* default */.A)(props.TransitionProps, Menu_excluded),
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, Menu_excluded2);
  const isRtl = (0,RtlProvider/* useRtl */.I)();
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    autoFocus,
    disableAutoFocusItem,
    MenuListProps,
    onEntering,
    PaperProps,
    transitionDuration,
    TransitionProps,
    variant
  });
  const classes = Menu_useUtilityClasses(ownerState);
  const autoFocusItem = autoFocus && !disableAutoFocusItem && open;
  const menuListActionsRef = react.useRef(null);
  const handleEntering = (element, isAppearing) => {
    if (menuListActionsRef.current) {
      menuListActionsRef.current.adjustStyleForScrollbar(element, {
        direction: isRtl ? 'rtl' : 'ltr'
      });
    }
    if (onEntering) {
      onEntering(element, isAppearing);
    }
  };
  const handleListKeyDown = event => {
    if (event.key === 'Tab') {
      event.preventDefault();
      if (onClose) {
        onClose(event, 'tabKeyDown');
      }
    }
  };

  /**
   * the index of the item should receive focus
   * in a `variant="selectedMenu"` it's the first `selected` item
   * otherwise it's the very first item.
   */
  let activeItemIndex = -1;
  // since we inject focus related props into children we have to do a lookahead
  // to check if there is a `selected` item. We're looking for the last `selected`
  // item and use the first valid item as a fallback
  react.Children.map(children, (child, index) => {
    if (! /*#__PURE__*/react.isValidElement(child)) {
      return;
    }
    if (false) {}
    if (!child.props.disabled) {
      if (variant === 'selectedMenu' && child.props.selected) {
        activeItemIndex = index;
      } else if (activeItemIndex === -1) {
        activeItemIndex = index;
      }
    }
  });
  const PaperSlot = (_slots$paper = slots.paper) != null ? _slots$paper : MenuPaper;
  const paperExternalSlotProps = (_slotProps$paper = slotProps.paper) != null ? _slotProps$paper : PaperProps;
  const rootSlotProps = useSlotProps_useSlotProps({
    elementType: slots.root,
    externalSlotProps: slotProps.root,
    ownerState,
    className: [classes.root, className]
  });
  const paperSlotProps = useSlotProps_useSlotProps({
    elementType: PaperSlot,
    externalSlotProps: paperExternalSlotProps,
    ownerState,
    className: classes.paper
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(MenuRoot, (0,esm_extends/* default */.A)({
    onClose: onClose,
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: isRtl ? 'right' : 'left'
    },
    transformOrigin: isRtl ? RTL_ORIGIN : LTR_ORIGIN,
    slots: {
      paper: PaperSlot,
      root: slots.root
    },
    slotProps: {
      root: rootSlotProps,
      paper: paperSlotProps
    },
    open: open,
    ref: ref,
    transitionDuration: transitionDuration,
    TransitionProps: (0,esm_extends/* default */.A)({
      onEntering: handleEntering
    }, TransitionProps),
    ownerState: ownerState
  }, other, {
    classes: PopoverClasses,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(MenuMenuList, (0,esm_extends/* default */.A)({
      onKeyDown: handleListKeyDown,
      actions: menuListActionsRef,
      autoFocus: autoFocus && (activeItemIndex === -1 || disableAutoFocusItem),
      autoFocusItem: autoFocusItem,
      variant: variant
    }, MenuListProps, {
      className: (0,clsx/* default */.A)(classes.list, MenuListProps.className),
      children: children
    }))
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const Menu_Menu = (Menu);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/NativeSelect/nativeSelectClasses.js


function getNativeSelectUtilityClasses(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiNativeSelect', slot);
}
const nativeSelectClasses = (0,generateUtilityClasses/* default */.A)('MuiNativeSelect', ['root', 'select', 'multiple', 'filled', 'outlined', 'standard', 'disabled', 'icon', 'iconOpen', 'iconFilled', 'iconOutlined', 'iconStandard', 'nativeInput', 'error']);
/* harmony default export */ const NativeSelect_nativeSelectClasses = (nativeSelectClasses);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/NativeSelect/NativeSelectInput.js
'use client';



const NativeSelectInput_excluded = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"];










const NativeSelectInput_useUtilityClasses = ownerState => {
  const {
    classes,
    variant,
    disabled,
    multiple,
    open,
    error
  } = ownerState;
  const slots = {
    select: ['select', variant, disabled && 'disabled', multiple && 'multiple', error && 'error'],
    icon: ['icon', `icon${(0,capitalize/* default */.A)(variant)}`, open && 'iconOpen', disabled && 'disabled']
  };
  return (0,composeClasses/* default */.A)(slots, getNativeSelectUtilityClasses, classes);
};
const nativeSelectSelectStyles = ({
  ownerState,
  theme
}) => (0,esm_extends/* default */.A)({
  MozAppearance: 'none',
  // Reset
  WebkitAppearance: 'none',
  // Reset
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: 'none',
  borderRadius: 0,
  // Reset
  cursor: 'pointer',
  '&:focus': (0,esm_extends/* default */.A)({}, theme.vars ? {
    backgroundColor: `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.05)`
  } : {
    backgroundColor: theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 0.05)'
  }, {
    borderRadius: 0 // Reset Chrome style
  }),
  // Remove IE11 arrow
  '&::-ms-expand': {
    display: 'none'
  },
  [`&.${NativeSelect_nativeSelectClasses.disabled}`]: {
    cursor: 'default'
  },
  '&[multiple]': {
    height: 'auto'
  },
  '&:not([multiple]) option, &:not([multiple]) optgroup': {
    backgroundColor: (theme.vars || theme).palette.background.paper
  },
  // Bump specificity to allow extending custom inputs
  '&&&': {
    paddingRight: 24,
    minWidth: 16 // So it doesn't collapse.
  }
}, ownerState.variant === 'filled' && {
  '&&&': {
    paddingRight: 32
  }
}, ownerState.variant === 'outlined' && {
  borderRadius: (theme.vars || theme).shape.borderRadius,
  '&:focus': {
    borderRadius: (theme.vars || theme).shape.borderRadius // Reset the reset for Chrome style
  },
  '&&&': {
    paddingRight: 32
  }
});
const NativeSelectSelect = (0,styled/* default */.Ay)('select', {
  name: 'MuiNativeSelect',
  slot: 'Select',
  shouldForwardProp: rootShouldForwardProp/* default */.A,
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.select, styles[ownerState.variant], ownerState.error && styles.error, {
      [`&.${NativeSelect_nativeSelectClasses.multiple}`]: styles.multiple
    }];
  }
})(nativeSelectSelectStyles);
const nativeSelectIconStyles = ({
  ownerState,
  theme
}) => (0,esm_extends/* default */.A)({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: 'absolute',
  right: 0,
  top: 'calc(50% - .5em)',
  // Center vertically, height is 1em
  pointerEvents: 'none',
  // Don't block pointer events on the select under the icon.
  color: (theme.vars || theme).palette.action.active,
  [`&.${NativeSelect_nativeSelectClasses.disabled}`]: {
    color: (theme.vars || theme).palette.action.disabled
  }
}, ownerState.open && {
  transform: 'rotate(180deg)'
}, ownerState.variant === 'filled' && {
  right: 7
}, ownerState.variant === 'outlined' && {
  right: 7
});
const NativeSelectIcon = (0,styled/* default */.Ay)('svg', {
  name: 'MuiNativeSelect',
  slot: 'Icon',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.icon, ownerState.variant && styles[`icon${(0,capitalize/* default */.A)(ownerState.variant)}`], ownerState.open && styles.iconOpen];
  }
})(nativeSelectIconStyles);

/**
 * @ignore - internal component.
 */
const NativeSelectInput = /*#__PURE__*/react.forwardRef(function NativeSelectInput(props, ref) {
  const {
      className,
      disabled,
      error,
      IconComponent,
      inputRef,
      variant = 'standard'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, NativeSelectInput_excluded);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    disabled,
    variant,
    error
  });
  const classes = NativeSelectInput_useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(NativeSelectSelect, (0,esm_extends/* default */.A)({
      ownerState: ownerState,
      className: (0,clsx/* default */.A)(classes.select, className),
      disabled: disabled,
      ref: inputRef || ref
    }, other)), props.multiple ? null : /*#__PURE__*/(0,jsx_runtime.jsx)(NativeSelectIcon, {
      as: IconComponent,
      ownerState: ownerState,
      className: classes.icon
    })]
  });
});
 false ? 0 : void 0;
/* harmony default export */ const NativeSelect_NativeSelectInput = (NativeSelectInput);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/styles/slotShouldForwardProp.js
var slotShouldForwardProp = __webpack_require__(75833);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/utils/useControlled.js
'use client';


/* harmony default export */ const utils_useControlled = (useControlled);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Select/selectClasses.js


function getSelectUtilityClasses(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiSelect', slot);
}
const selectClasses = (0,generateUtilityClasses/* default */.A)('MuiSelect', ['root', 'select', 'multiple', 'filled', 'outlined', 'standard', 'disabled', 'focused', 'icon', 'iconOpen', 'iconFilled', 'iconOutlined', 'iconStandard', 'nativeInput', 'error']);
/* harmony default export */ const Select_selectClasses = (selectClasses);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Select/SelectInput.js
'use client';




var SelectInput_span;
const SelectInput_excluded = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"];


















const SelectSelect = (0,styled/* default */.Ay)('div', {
  name: 'MuiSelect',
  slot: 'Select',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [
    // Win specificity over the input base
    {
      [`&.${Select_selectClasses.select}`]: styles.select
    }, {
      [`&.${Select_selectClasses.select}`]: styles[ownerState.variant]
    }, {
      [`&.${Select_selectClasses.error}`]: styles.error
    }, {
      [`&.${Select_selectClasses.multiple}`]: styles.multiple
    }];
  }
})(nativeSelectSelectStyles, {
  // Win specificity over the input base
  [`&.${Select_selectClasses.select}`]: {
    height: 'auto',
    // Resets for multiple select with chips
    minHeight: '1.4375em',
    // Required for select\text-field height consistency
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    overflow: 'hidden'
  }
});
const SelectIcon = (0,styled/* default */.Ay)('svg', {
  name: 'MuiSelect',
  slot: 'Icon',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.icon, ownerState.variant && styles[`icon${(0,capitalize/* default */.A)(ownerState.variant)}`], ownerState.open && styles.iconOpen];
  }
})(nativeSelectIconStyles);
const SelectNativeInput = (0,styled/* default */.Ay)('input', {
  shouldForwardProp: prop => (0,slotShouldForwardProp/* default */.A)(prop) && prop !== 'classes',
  name: 'MuiSelect',
  slot: 'NativeInput',
  overridesResolver: (props, styles) => styles.nativeInput
})({
  bottom: 0,
  left: 0,
  position: 'absolute',
  opacity: 0,
  pointerEvents: 'none',
  width: '100%',
  boxSizing: 'border-box'
});
function areEqualValues(a, b) {
  if (typeof b === 'object' && b !== null) {
    return a === b;
  }

  // The value could be a number, the DOM will stringify it anyway.
  return String(a) === String(b);
}
function SelectInput_isEmpty(display) {
  return display == null || typeof display === 'string' && !display.trim();
}
const SelectInput_useUtilityClasses = ownerState => {
  const {
    classes,
    variant,
    disabled,
    multiple,
    open,
    error
  } = ownerState;
  const slots = {
    select: ['select', variant, disabled && 'disabled', multiple && 'multiple', error && 'error'],
    icon: ['icon', `icon${(0,capitalize/* default */.A)(variant)}`, open && 'iconOpen', disabled && 'disabled'],
    nativeInput: ['nativeInput']
  };
  return (0,composeClasses/* default */.A)(slots, getSelectUtilityClasses, classes);
};

/**
 * @ignore - internal component.
 */
const SelectInput = /*#__PURE__*/react.forwardRef(function SelectInput(props, ref) {
  var _MenuProps$slotProps;
  const {
      'aria-describedby': ariaDescribedby,
      'aria-label': ariaLabel,
      autoFocus,
      autoWidth,
      children,
      className,
      defaultOpen,
      defaultValue,
      disabled,
      displayEmpty,
      error = false,
      IconComponent,
      inputRef: inputRefProp,
      labelId,
      MenuProps = {},
      multiple,
      name,
      onBlur,
      onChange,
      onClose,
      onFocus,
      onOpen,
      open: openProp,
      readOnly,
      renderValue,
      SelectDisplayProps = {},
      tabIndex: tabIndexProp
      // catching `type` from Input which makes no sense for SelectInput
      ,

      value: valueProp,
      variant = 'standard'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, SelectInput_excluded);
  const [value, setValueState] = utils_useControlled({
    controlled: valueProp,
    default: defaultValue,
    name: 'Select'
  });
  const [openState, setOpenState] = utils_useControlled({
    controlled: openProp,
    default: defaultOpen,
    name: 'Select'
  });
  const inputRef = react.useRef(null);
  const displayRef = react.useRef(null);
  const [displayNode, setDisplayNode] = react.useState(null);
  const {
    current: isOpenControlled
  } = react.useRef(openProp != null);
  const [menuMinWidthState, setMenuMinWidthState] = react.useState();
  const handleRef = utils_useForkRef(ref, inputRefProp);
  const handleDisplayRef = react.useCallback(node => {
    displayRef.current = node;
    if (node) {
      setDisplayNode(node);
    }
  }, []);
  const anchorElement = displayNode == null ? void 0 : displayNode.parentNode;
  react.useImperativeHandle(handleRef, () => ({
    focus: () => {
      displayRef.current.focus();
    },
    node: inputRef.current,
    value
  }), [value]);

  // Resize menu on `defaultOpen` automatic toggle.
  react.useEffect(() => {
    if (defaultOpen && openState && displayNode && !isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth);
      displayRef.current.focus();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [displayNode, autoWidth]);
  // `isOpenControlled` is ignored because the component should never switch between controlled and uncontrolled modes.
  // `defaultOpen` and `openState` are ignored to avoid unnecessary callbacks.
  react.useEffect(() => {
    if (autoFocus) {
      displayRef.current.focus();
    }
  }, [autoFocus]);
  react.useEffect(() => {
    if (!labelId) {
      return undefined;
    }
    const label = utils_ownerDocument(displayRef.current).getElementById(labelId);
    if (label) {
      const handler = () => {
        if (getSelection().isCollapsed) {
          displayRef.current.focus();
        }
      };
      label.addEventListener('click', handler);
      return () => {
        label.removeEventListener('click', handler);
      };
    }
    return undefined;
  }, [labelId]);
  const update = (open, event) => {
    if (open) {
      if (onOpen) {
        onOpen(event);
      }
    } else if (onClose) {
      onClose(event);
    }
    if (!isOpenControlled) {
      setMenuMinWidthState(autoWidth ? null : anchorElement.clientWidth);
      setOpenState(open);
    }
  };
  const handleMouseDown = event => {
    // Ignore everything but left-click
    if (event.button !== 0) {
      return;
    }
    // Hijack the default focus behavior.
    event.preventDefault();
    displayRef.current.focus();
    update(true, event);
  };
  const handleClose = event => {
    update(false, event);
  };
  const childrenArray = react.Children.toArray(children);

  // Support autofill.
  const handleChange = event => {
    const child = childrenArray.find(childItem => childItem.props.value === event.target.value);
    if (child === undefined) {
      return;
    }
    setValueState(child.props.value);
    if (onChange) {
      onChange(event, child);
    }
  };
  const handleItemClick = child => event => {
    let newValue;

    // We use the tabindex attribute to signal the available options.
    if (!event.currentTarget.hasAttribute('tabindex')) {
      return;
    }
    if (multiple) {
      newValue = Array.isArray(value) ? value.slice() : [];
      const itemIndex = value.indexOf(child.props.value);
      if (itemIndex === -1) {
        newValue.push(child.props.value);
      } else {
        newValue.splice(itemIndex, 1);
      }
    } else {
      newValue = child.props.value;
    }
    if (child.props.onClick) {
      child.props.onClick(event);
    }
    if (value !== newValue) {
      setValueState(newValue);
      if (onChange) {
        // Redefine target to allow name and value to be read.
        // This allows seamless integration with the most popular form libraries.
        // https://github.com/mui/material-ui/issues/13485#issuecomment-676048492
        // Clone the event to not override `target` of the original event.
        const nativeEvent = event.nativeEvent || event;
        const clonedEvent = new nativeEvent.constructor(nativeEvent.type, nativeEvent);
        Object.defineProperty(clonedEvent, 'target', {
          writable: true,
          value: {
            value: newValue,
            name
          }
        });
        onChange(clonedEvent, child);
      }
    }
    if (!multiple) {
      update(false, event);
    }
  };
  const handleKeyDown = event => {
    if (!readOnly) {
      const validKeys = [' ', 'ArrowUp', 'ArrowDown',
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      'Enter'];
      if (validKeys.indexOf(event.key) !== -1) {
        event.preventDefault();
        update(true, event);
      }
    }
  };
  const open = displayNode !== null && openState;
  const handleBlur = event => {
    // if open event.stopImmediatePropagation
    if (!open && onBlur) {
      // Preact support, target is read only property on a native event.
      Object.defineProperty(event, 'target', {
        writable: true,
        value: {
          value,
          name
        }
      });
      onBlur(event);
    }
  };
  delete other['aria-invalid'];
  let display;
  let displaySingle;
  const displayMultiple = [];
  let computeDisplay = false;
  let foundMatch = false;

  // No need to display any value if the field is empty.
  if (isFilled({
    value
  }) || displayEmpty) {
    if (renderValue) {
      display = renderValue(value);
    } else {
      computeDisplay = true;
    }
  }
  const items = childrenArray.map(child => {
    if (! /*#__PURE__*/react.isValidElement(child)) {
      return null;
    }
    if (false) {}
    let selected;
    if (multiple) {
      if (!Array.isArray(value)) {
        throw new Error( false ? 0 : (0,formatMuiErrorMessage/* default */.A)(2));
      }
      selected = value.some(v => areEqualValues(v, child.props.value));
      if (selected && computeDisplay) {
        displayMultiple.push(child.props.children);
      }
    } else {
      selected = areEqualValues(value, child.props.value);
      if (selected && computeDisplay) {
        displaySingle = child.props.children;
      }
    }
    if (selected) {
      foundMatch = true;
    }
    return /*#__PURE__*/react.cloneElement(child, {
      'aria-selected': selected ? 'true' : 'false',
      onClick: handleItemClick(child),
      onKeyUp: event => {
        if (event.key === ' ') {
          // otherwise our MenuItems dispatches a click event
          // it's not behavior of the native <option> and causes
          // the select to close immediately since we open on space keydown
          event.preventDefault();
        }
        if (child.props.onKeyUp) {
          child.props.onKeyUp(event);
        }
      },
      role: 'option',
      selected,
      value: undefined,
      // The value is most likely not a valid HTML attribute.
      'data-value': child.props.value // Instead, we provide it as a data attribute.
    });
  });
  if (false) {}
  if (computeDisplay) {
    if (multiple) {
      if (displayMultiple.length === 0) {
        display = null;
      } else {
        display = displayMultiple.reduce((output, child, index) => {
          output.push(child);
          if (index < displayMultiple.length - 1) {
            output.push(', ');
          }
          return output;
        }, []);
      }
    } else {
      display = displaySingle;
    }
  }

  // Avoid performing a layout computation in the render method.
  let menuMinWidth = menuMinWidthState;
  if (!autoWidth && isOpenControlled && displayNode) {
    menuMinWidth = anchorElement.clientWidth;
  }
  let tabIndex;
  if (typeof tabIndexProp !== 'undefined') {
    tabIndex = tabIndexProp;
  } else {
    tabIndex = disabled ? null : 0;
  }
  const buttonId = SelectDisplayProps.id || (name ? `mui-component-select-${name}` : undefined);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    variant,
    value,
    open,
    error
  });
  const classes = SelectInput_useUtilityClasses(ownerState);
  const paperProps = (0,esm_extends/* default */.A)({}, MenuProps.PaperProps, (_MenuProps$slotProps = MenuProps.slotProps) == null ? void 0 : _MenuProps$slotProps.paper);
  const listboxId = useId();
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SelectSelect, (0,esm_extends/* default */.A)({
      ref: handleDisplayRef,
      tabIndex: tabIndex,
      role: "combobox",
      "aria-controls": listboxId,
      "aria-disabled": disabled ? 'true' : undefined,
      "aria-expanded": open ? 'true' : 'false',
      "aria-haspopup": "listbox",
      "aria-label": ariaLabel,
      "aria-labelledby": [labelId, buttonId].filter(Boolean).join(' ') || undefined,
      "aria-describedby": ariaDescribedby,
      onKeyDown: handleKeyDown,
      onMouseDown: disabled || readOnly ? null : handleMouseDown,
      onBlur: handleBlur,
      onFocus: onFocus
    }, SelectDisplayProps, {
      ownerState: ownerState,
      className: (0,clsx/* default */.A)(SelectDisplayProps.className, classes.select, className)
      // The id is required for proper a11y
      ,
      id: buttonId,
      children: SelectInput_isEmpty(display) ? // notranslate needed while Google Translate will not fix zero-width space issue
      SelectInput_span || (SelectInput_span = /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "notranslate",
        children: "\u200B"
      })) : display
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(SelectNativeInput, (0,esm_extends/* default */.A)({
      "aria-invalid": error,
      value: Array.isArray(value) ? value.join(',') : value,
      name: name,
      ref: inputRef,
      "aria-hidden": true,
      onChange: handleChange,
      tabIndex: -1,
      disabled: disabled,
      className: classes.nativeInput,
      autoFocus: autoFocus,
      ownerState: ownerState
    }, other)), /*#__PURE__*/(0,jsx_runtime.jsx)(SelectIcon, {
      as: IconComponent,
      className: classes.icon,
      ownerState: ownerState
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Menu_Menu, (0,esm_extends/* default */.A)({
      id: `menu-${name || ''}`,
      anchorEl: anchorElement,
      open: open,
      onClose: handleClose,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center'
      },
      transformOrigin: {
        vertical: 'top',
        horizontal: 'center'
      }
    }, MenuProps, {
      MenuListProps: (0,esm_extends/* default */.A)({
        'aria-labelledby': labelId,
        role: 'listbox',
        'aria-multiselectable': multiple ? 'true' : undefined,
        disableListWrap: true,
        id: listboxId
      }, MenuProps.MenuListProps),
      slotProps: (0,esm_extends/* default */.A)({}, MenuProps.slotProps, {
        paper: (0,esm_extends/* default */.A)({}, paperProps, {
          style: (0,esm_extends/* default */.A)({
            minWidth: menuMinWidth
          }, paperProps != null ? paperProps.style : null)
        })
      }),
      children: items
    }))]
  });
});
 false ? 0 : void 0;
/* harmony default export */ const Select_SelectInput = (SelectInput);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/internal/svg-icons/ArrowDropDown.js
'use client';




/**
 * @ignore - internal component.
 */

/* harmony default export */ const ArrowDropDown = (createSvgIcon( /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
  d: "M7 10l5 5 5-5z"
}), 'ArrowDropDown'));
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Select/Select.js
'use client';



const Select_excluded = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"],
  Select_excluded2 = ["root"];

















const Select_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  return classes;
};
const styledRootConfig = {
  name: 'MuiSelect',
  overridesResolver: (props, styles) => styles.root,
  shouldForwardProp: prop => (0,rootShouldForwardProp/* default */.A)(prop) && prop !== 'variant',
  slot: 'Root'
};
const StyledInput = (0,styled/* default */.Ay)(Input_Input, styledRootConfig)('');
const StyledOutlinedInput = (0,styled/* default */.Ay)(OutlinedInput_OutlinedInput, styledRootConfig)('');
const StyledFilledInput = (0,styled/* default */.Ay)(FilledInput_FilledInput, styledRootConfig)('');
const Select = /*#__PURE__*/react.forwardRef(function Select(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    name: 'MuiSelect',
    props: inProps
  });
  const {
      autoWidth = false,
      children,
      classes: classesProp = {},
      className,
      defaultOpen = false,
      displayEmpty = false,
      IconComponent = ArrowDropDown,
      id,
      input,
      inputProps,
      label,
      labelId,
      MenuProps,
      multiple = false,
      native = false,
      onClose,
      onOpen,
      open,
      renderValue,
      SelectDisplayProps,
      variant: variantProp = 'outlined'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, Select_excluded);
  const inputComponent = native ? NativeSelect_NativeSelectInput : Select_SelectInput;
  const muiFormControl = (0,useFormControl/* default */.A)();
  const fcs = (0,formControlState/* default */.A)({
    props,
    muiFormControl,
    states: ['variant', 'error']
  });
  const variant = fcs.variant || variantProp;
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    variant,
    classes: classesProp
  });
  const classes = Select_useUtilityClasses(ownerState);
  const restOfClasses = (0,objectWithoutPropertiesLoose/* default */.A)(classes, Select_excluded2);
  const InputComponent = input || {
    standard: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledInput, {
      ownerState: ownerState
    }),
    outlined: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledOutlinedInput, {
      label: label,
      ownerState: ownerState
    }),
    filled: /*#__PURE__*/(0,jsx_runtime.jsx)(StyledFilledInput, {
      ownerState: ownerState
    })
  }[variant];
  const inputComponentRef = utils_useForkRef(ref, getReactElementRef(InputComponent));
  return /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
    children: /*#__PURE__*/react.cloneElement(InputComponent, (0,esm_extends/* default */.A)({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent,
      inputProps: (0,esm_extends/* default */.A)({
        children,
        error: fcs.error,
        IconComponent,
        variant,
        type: undefined,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple
      }, native ? {
        id
      } : {
        autoWidth,
        defaultOpen,
        displayEmpty,
        labelId,
        MenuProps,
        onClose,
        onOpen,
        open,
        renderValue,
        SelectDisplayProps: (0,esm_extends/* default */.A)({
          id
        }, SelectDisplayProps)
      }, inputProps, {
        classes: inputProps ? (0,deepmerge/* default */.A)(restOfClasses, inputProps.classes) : restOfClasses
      }, input ? input.props.inputProps : {})
    }, (multiple && native || displayEmpty) && variant === 'outlined' ? {
      notched: true
    } : {}, {
      ref: inputComponentRef,
      className: (0,clsx/* default */.A)(InputComponent.props.className, className, classes.root)
    }, !input && {
      variant
    }, other))
  });
});
 false ? 0 : void 0;
Select.muiName = 'Select';
/* harmony default export */ const Select_Select = (Select);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/TextField/textFieldClasses.js


function getTextFieldUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiTextField', slot);
}
const textFieldClasses = (0,generateUtilityClasses/* default */.A)('MuiTextField', ['root']);
/* harmony default export */ const TextField_textFieldClasses = ((/* unused pure expression or super */ null && (textFieldClasses)));
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/TextField/TextField.js
'use client';



const TextField_excluded = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"];


















const variantComponent = {
  standard: Input_Input,
  filled: FilledInput_FilledInput,
  outlined: OutlinedInput_OutlinedInput
};
const TextField_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.A)(slots, getTextFieldUtilityClass, classes);
};
const TextFieldRoot = (0,styled/* default */.Ay)(FormControl_FormControl, {
  name: 'MuiTextField',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});

/**
 * The `TextField` is a convenience wrapper for the most common cases (80%).
 * It cannot be all things to all people, otherwise the API would grow out of control.
 *
 * ## Advanced Configuration
 *
 * It's important to understand that the text field is a simple abstraction
 * on top of the following components:
 *
 * - [FormControl](/material-ui/api/form-control/)
 * - [InputLabel](/material-ui/api/input-label/)
 * - [FilledInput](/material-ui/api/filled-input/)
 * - [OutlinedInput](/material-ui/api/outlined-input/)
 * - [Input](/material-ui/api/input/)
 * - [FormHelperText](/material-ui/api/form-helper-text/)
 *
 * If you wish to alter the props applied to the `input` element, you can do so as follows:
 *
 * ```jsx
 * const inputProps = {
 *   step: 300,
 * };
 *
 * return <TextField id="time" type="time" inputProps={inputProps} />;
 * ```
 *
 * For advanced cases, please look at the source of TextField by clicking on the
 * "Edit this page" button above. Consider either:
 *
 * - using the upper case props for passing values directly to the components
 * - using the underlying components directly as shown in the demos
 */
const TextField = /*#__PURE__*/react.forwardRef(function TextField(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiTextField'
  });
  const {
      autoComplete,
      autoFocus = false,
      children,
      className,
      color = 'primary',
      defaultValue,
      disabled = false,
      error = false,
      FormHelperTextProps,
      fullWidth = false,
      helperText,
      id: idOverride,
      InputLabelProps,
      inputProps,
      InputProps,
      inputRef,
      label,
      maxRows,
      minRows,
      multiline = false,
      name,
      onBlur,
      onChange,
      onFocus,
      placeholder,
      required = false,
      rows,
      select = false,
      SelectProps,
      type,
      value,
      variant = 'outlined'
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, TextField_excluded);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    autoFocus,
    color,
    disabled,
    error,
    fullWidth,
    multiline,
    required,
    select,
    variant
  });
  const classes = TextField_useUtilityClasses(ownerState);
  if (false) {}
  const InputMore = {};
  if (variant === 'outlined') {
    if (InputLabelProps && typeof InputLabelProps.shrink !== 'undefined') {
      InputMore.notched = InputLabelProps.shrink;
    }
    InputMore.label = label;
  }
  if (select) {
    // unset defaults from textbox inputs
    if (!SelectProps || !SelectProps.native) {
      InputMore.id = undefined;
    }
    InputMore['aria-describedby'] = undefined;
  }
  const id = useId(idOverride);
  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
  const inputLabelId = label && id ? `${id}-label` : undefined;
  const InputComponent = variantComponent[variant];
  const InputElement = /*#__PURE__*/(0,jsx_runtime.jsx)(InputComponent, (0,esm_extends/* default */.A)({
    "aria-describedby": helperTextId,
    autoComplete: autoComplete,
    autoFocus: autoFocus,
    defaultValue: defaultValue,
    fullWidth: fullWidth,
    multiline: multiline,
    name: name,
    rows: rows,
    maxRows: maxRows,
    minRows: minRows,
    type: type,
    value: value,
    id: id,
    inputRef: inputRef,
    onBlur: onBlur,
    onChange: onChange,
    onFocus: onFocus,
    placeholder: placeholder,
    inputProps: inputProps
  }, InputMore, InputProps));
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(TextFieldRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    disabled: disabled,
    error: error,
    fullWidth: fullWidth,
    ref: ref,
    required: required,
    color: color,
    variant: variant,
    ownerState: ownerState
  }, other, {
    children: [label != null && label !== '' && /*#__PURE__*/(0,jsx_runtime.jsx)(InputLabel_InputLabel, (0,esm_extends/* default */.A)({
      htmlFor: id,
      id: inputLabelId
    }, InputLabelProps, {
      children: label
    })), select ? /*#__PURE__*/(0,jsx_runtime.jsx)(Select_Select, (0,esm_extends/* default */.A)({
      "aria-describedby": helperTextId,
      id: id,
      labelId: inputLabelId,
      value: value,
      input: InputElement
    }, SelectProps, {
      children: children
    })) : InputElement, helperText && /*#__PURE__*/(0,jsx_runtime.jsx)(FormHelperText/* default */.A, (0,esm_extends/* default */.A)({
      id: helperTextId
    }, FormHelperTextProps, {
      children: helperText
    }))]
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const TextField_TextField = (TextField);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/hooks/useField/buildSectionsFromFormat.js


const expandFormat = ({
  utils,
  format
}) => {
  // Expand the provided format
  let formatExpansionOverflow = 10;
  let prevFormat = format;
  let nextFormat = utils.expandFormat(format);
  while (nextFormat !== prevFormat) {
    prevFormat = nextFormat;
    nextFormat = utils.expandFormat(prevFormat);
    formatExpansionOverflow -= 1;
    if (formatExpansionOverflow < 0) {
      throw new Error('MUI X: The format expansion seems to be in an infinite loop. Please open an issue with the format passed to the picker component.');
    }
  }
  return nextFormat;
};
const getEscapedPartsFromFormat = ({
  utils,
  expandedFormat
}) => {
  const escapedParts = [];
  const {
    start: startChar,
    end: endChar
  } = utils.escapedCharacters;
  const regExp = new RegExp(`(\\${startChar}[^\\${endChar}]*\\${endChar})+`, 'g');
  let match = null;
  // eslint-disable-next-line no-cond-assign
  while (match = regExp.exec(expandedFormat)) {
    escapedParts.push({
      start: match.index,
      end: regExp.lastIndex - 1
    });
  }
  return escapedParts;
};
const getSectionPlaceholder = (utils, localeText, sectionConfig, sectionFormat) => {
  switch (sectionConfig.type) {
    case 'year':
      {
        return localeText.fieldYearPlaceholder({
          digitAmount: utils.formatByString(utils.date(undefined, 'default'), sectionFormat).length,
          format: sectionFormat
        });
      }
    case 'month':
      {
        return localeText.fieldMonthPlaceholder({
          contentType: sectionConfig.contentType,
          format: sectionFormat
        });
      }
    case 'day':
      {
        return localeText.fieldDayPlaceholder({
          format: sectionFormat
        });
      }
    case 'weekDay':
      {
        return localeText.fieldWeekDayPlaceholder({
          contentType: sectionConfig.contentType,
          format: sectionFormat
        });
      }
    case 'hours':
      {
        return localeText.fieldHoursPlaceholder({
          format: sectionFormat
        });
      }
    case 'minutes':
      {
        return localeText.fieldMinutesPlaceholder({
          format: sectionFormat
        });
      }
    case 'seconds':
      {
        return localeText.fieldSecondsPlaceholder({
          format: sectionFormat
        });
      }
    case 'meridiem':
      {
        return localeText.fieldMeridiemPlaceholder({
          format: sectionFormat
        });
      }
    default:
      {
        return sectionFormat;
      }
  }
};
const createSection = ({
  utils,
  date,
  shouldRespectLeadingZeros,
  localeText,
  localizedDigits,
  now,
  token,
  startSeparator
}) => {
  if (token === '') {
    throw new Error('MUI X: Should not call `commitToken` with an empty token');
  }
  const sectionConfig = getDateSectionConfigFromFormatToken(utils, token);
  const hasLeadingZerosInFormat = doesSectionFormatHaveLeadingZeros(utils, sectionConfig.contentType, sectionConfig.type, token);
  const hasLeadingZerosInInput = shouldRespectLeadingZeros ? hasLeadingZerosInFormat : sectionConfig.contentType === 'digit';
  const isValidDate = date != null && utils.isValid(date);
  let sectionValue = isValidDate ? utils.formatByString(date, token) : '';
  let maxLength = null;
  if (hasLeadingZerosInInput) {
    if (hasLeadingZerosInFormat) {
      maxLength = sectionValue === '' ? utils.formatByString(now, token).length : sectionValue.length;
    } else {
      if (sectionConfig.maxLength == null) {
        throw new Error(`MUI X: The token ${token} should have a 'maxDigitNumber' property on it's adapter`);
      }
      maxLength = sectionConfig.maxLength;
      if (isValidDate) {
        sectionValue = applyLocalizedDigits(cleanLeadingZeros(removeLocalizedDigits(sectionValue, localizedDigits), maxLength), localizedDigits);
      }
    }
  }
  return (0,esm_extends/* default */.A)({}, sectionConfig, {
    format: token,
    maxLength,
    value: sectionValue,
    placeholder: getSectionPlaceholder(utils, localeText, sectionConfig, token),
    hasLeadingZerosInFormat,
    hasLeadingZerosInInput,
    startSeparator,
    endSeparator: '',
    modified: false
  });
};
const buildSections = params => {
  const {
    utils,
    expandedFormat,
    escapedParts
  } = params;
  const now = utils.date(undefined);
  const sections = [];
  let startSeparator = '';

  // This RegExp tests if the beginning of a string corresponds to a supported token
  const validTokens = Object.keys(utils.formatTokenMap).sort((a, b) => b.length - a.length); // Sort to put longest word first

  const regExpFirstWordInFormat = /^([a-zA-Z]+)/;
  const regExpWordOnlyComposedOfTokens = new RegExp(`^(${validTokens.join('|')})*$`);
  const regExpFirstTokenInWord = new RegExp(`^(${validTokens.join('|')})`);
  const getEscapedPartOfCurrentChar = i => escapedParts.find(escapeIndex => escapeIndex.start <= i && escapeIndex.end >= i);
  let i = 0;
  while (i < expandedFormat.length) {
    const escapedPartOfCurrentChar = getEscapedPartOfCurrentChar(i);
    const isEscapedChar = escapedPartOfCurrentChar != null;
    const firstWordInFormat = regExpFirstWordInFormat.exec(expandedFormat.slice(i))?.[1];

    // The first word in the format is only composed of tokens.
    // We extract those tokens to create a new sections.
    if (!isEscapedChar && firstWordInFormat != null && regExpWordOnlyComposedOfTokens.test(firstWordInFormat)) {
      let word = firstWordInFormat;
      while (word.length > 0) {
        const firstWord = regExpFirstTokenInWord.exec(word)[1];
        word = word.slice(firstWord.length);
        sections.push(createSection((0,esm_extends/* default */.A)({}, params, {
          now,
          token: firstWord,
          startSeparator
        })));
        startSeparator = '';
      }
      i += firstWordInFormat.length;
    }
    // The remaining format does not start with a token,
    // We take the first character and add it to the current section's end separator.
    else {
      const char = expandedFormat[i];

      // If we are on the opening or closing character of an escaped part of the format,
      // Then we ignore this character.
      const isEscapeBoundary = isEscapedChar && escapedPartOfCurrentChar?.start === i || escapedPartOfCurrentChar?.end === i;
      if (!isEscapeBoundary) {
        if (sections.length === 0) {
          startSeparator += char;
        } else {
          sections[sections.length - 1].endSeparator += char;
        }
      }
      i += 1;
    }
  }
  if (sections.length === 0 && startSeparator.length > 0) {
    sections.push({
      type: 'empty',
      contentType: 'letter',
      maxLength: null,
      format: '',
      value: '',
      placeholder: '',
      hasLeadingZerosInFormat: false,
      hasLeadingZerosInInput: false,
      startSeparator,
      endSeparator: '',
      modified: false
    });
  }
  return sections;
};
const postProcessSections = ({
  isRtl,
  formatDensity,
  sections
}) => {
  return sections.map(section => {
    const cleanSeparator = separator => {
      let cleanedSeparator = separator;
      if (isRtl && cleanedSeparator !== null && cleanedSeparator.includes(' ')) {
        cleanedSeparator = `\u2069${cleanedSeparator}\u2066`;
      }
      if (formatDensity === 'spacious' && ['/', '.', '-'].includes(cleanedSeparator)) {
        cleanedSeparator = ` ${cleanedSeparator} `;
      }
      return cleanedSeparator;
    };
    section.startSeparator = cleanSeparator(section.startSeparator);
    section.endSeparator = cleanSeparator(section.endSeparator);
    return section;
  });
};
const buildSectionsFromFormat = params => {
  let expandedFormat = expandFormat(params);
  if (params.isRtl && params.enableAccessibleFieldDOMStructure) {
    expandedFormat = expandedFormat.split(' ').reverse().join(' ');
  }
  const escapedParts = getEscapedPartsFromFormat((0,esm_extends/* default */.A)({}, params, {
    expandedFormat
  }));
  const sections = buildSections((0,esm_extends/* default */.A)({}, params, {
    expandedFormat,
    escapedParts
  }));
  return postProcessSections((0,esm_extends/* default */.A)({}, params, {
    sections
  }));
};
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/hooks/useField/useFieldState.js










const useFieldState = params => {
  const utils = useUtils_useUtils();
  const translations = usePickersTranslations();
  const adapter = useLocalizationContext();
  const isRtl = (0,RtlProvider/* useRtl */.I)();
  const {
    valueManager,
    fieldValueManager,
    valueType,
    validator,
    internalProps,
    internalProps: {
      value: valueProp,
      defaultValue,
      referenceDate: referenceDateProp,
      onChange,
      format,
      formatDensity = 'dense',
      selectedSections: selectedSectionsProp,
      onSelectedSectionsChange,
      shouldRespectLeadingZeros = false,
      timezone: timezoneProp,
      enableAccessibleFieldDOMStructure = false
    }
  } = params;
  const {
    timezone,
    value: valueFromTheOutside,
    handleValueChange
  } = useValueWithTimezone({
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    onChange,
    valueManager
  });
  const localizedDigits = react.useMemo(() => getLocalizedDigits(utils), [utils]);
  const sectionsValueBoundaries = react.useMemo(() => getSectionsBoundaries(utils, localizedDigits, timezone), [utils, localizedDigits, timezone]);
  const getSectionsFromValue = react.useCallback((value, fallbackSections = null) => fieldValueManager.getSectionsFromValue(utils, value, fallbackSections, date => buildSectionsFromFormat({
    utils,
    localeText: translations,
    localizedDigits,
    format,
    date,
    formatDensity,
    shouldRespectLeadingZeros,
    enableAccessibleFieldDOMStructure,
    isRtl
  })), [fieldValueManager, format, translations, localizedDigits, isRtl, shouldRespectLeadingZeros, utils, formatDensity, enableAccessibleFieldDOMStructure]);
  const [state, setState] = react.useState(() => {
    const sections = getSectionsFromValue(valueFromTheOutside);
    validateSections(sections, valueType);
    const stateWithoutReferenceDate = {
      sections,
      value: valueFromTheOutside,
      referenceValue: valueManager.emptyValue,
      tempValueStrAndroid: null
    };
    const granularity = getSectionTypeGranularity(sections);
    const referenceValue = valueManager.getInitialReferenceValue({
      referenceDate: referenceDateProp,
      value: valueFromTheOutside,
      utils,
      props: internalProps,
      granularity,
      timezone
    });
    return (0,esm_extends/* default */.A)({}, stateWithoutReferenceDate, {
      referenceValue
    });
  });
  const [selectedSections, innerSetSelectedSections] = useControlled({
    controlled: selectedSectionsProp,
    default: null,
    name: 'useField',
    state: 'selectedSections'
  });
  const setSelectedSections = newSelectedSections => {
    innerSetSelectedSections(newSelectedSections);
    onSelectedSectionsChange?.(newSelectedSections);
  };
  const parsedSelectedSections = react.useMemo(() => parseSelectedSections(selectedSections, state.sections), [selectedSections, state.sections]);
  const activeSectionIndex = parsedSelectedSections === 'all' ? 0 : parsedSelectedSections;
  const publishValue = ({
    value,
    referenceValue,
    sections
  }) => {
    setState(prevState => (0,esm_extends/* default */.A)({}, prevState, {
      sections,
      value,
      referenceValue,
      tempValueStrAndroid: null
    }));
    if (valueManager.areValuesEqual(utils, state.value, value)) {
      return;
    }
    const context = {
      validationError: validator({
        adapter,
        value,
        timezone,
        props: internalProps
      })
    };
    handleValueChange(value, context);
  };
  const setSectionValue = (sectionIndex, newSectionValue) => {
    const newSections = [...state.sections];
    newSections[sectionIndex] = (0,esm_extends/* default */.A)({}, newSections[sectionIndex], {
      value: newSectionValue,
      modified: true
    });
    return newSections;
  };
  const clearValue = () => {
    publishValue({
      value: valueManager.emptyValue,
      referenceValue: state.referenceValue,
      sections: getSectionsFromValue(valueManager.emptyValue)
    });
  };
  const clearActiveSection = () => {
    if (activeSectionIndex == null) {
      return;
    }
    const activeSection = state.sections[activeSectionIndex];
    const activeDateManager = fieldValueManager.getActiveDateManager(utils, state, activeSection);
    const nonEmptySectionCountBefore = activeDateManager.getSections(state.sections).filter(section => section.value !== '').length;
    const hasNoOtherNonEmptySections = nonEmptySectionCountBefore === (activeSection.value === '' ? 0 : 1);
    const newSections = setSectionValue(activeSectionIndex, '');
    const newActiveDate = hasNoOtherNonEmptySections ? null : utils.getInvalidDate();
    const newValues = activeDateManager.getNewValuesFromNewActiveDate(newActiveDate);
    publishValue((0,esm_extends/* default */.A)({}, newValues, {
      sections: newSections
    }));
  };
  const updateValueFromValueStr = valueStr => {
    const parseDateStr = (dateStr, referenceDate) => {
      const date = utils.parse(dateStr, format);
      if (date == null || !utils.isValid(date)) {
        return null;
      }
      const sections = buildSectionsFromFormat({
        utils,
        localeText: translations,
        localizedDigits,
        format,
        date,
        formatDensity,
        shouldRespectLeadingZeros,
        enableAccessibleFieldDOMStructure,
        isRtl
      });
      return mergeDateIntoReferenceDate(utils, date, sections, referenceDate, false);
    };
    const newValue = fieldValueManager.parseValueStr(valueStr, state.referenceValue, parseDateStr);
    const newReferenceValue = fieldValueManager.updateReferenceValue(utils, newValue, state.referenceValue);
    publishValue({
      value: newValue,
      referenceValue: newReferenceValue,
      sections: getSectionsFromValue(newValue, state.sections)
    });
  };
  const updateSectionValue = ({
    activeSection,
    newSectionValue,
    shouldGoToNextSection
  }) => {
    /**
     * 1. Decide which section should be focused
     */
    if (shouldGoToNextSection && activeSectionIndex < state.sections.length - 1) {
      setSelectedSections(activeSectionIndex + 1);
    }

    /**
     * 2. Try to build a valid date from the new section value
     */
    const activeDateManager = fieldValueManager.getActiveDateManager(utils, state, activeSection);
    const newSections = setSectionValue(activeSectionIndex, newSectionValue);
    const newActiveDateSections = activeDateManager.getSections(newSections);
    const newActiveDate = getDateFromDateSections(utils, newActiveDateSections, localizedDigits);
    let values;
    let shouldPublish;

    /**
     * If the new date is valid,
     * Then we merge the value of the modified sections into the reference date.
     * This makes sure that we don't lose some information of the initial date (like the time on a date field).
     */
    if (newActiveDate != null && utils.isValid(newActiveDate)) {
      const mergedDate = mergeDateIntoReferenceDate(utils, newActiveDate, newActiveDateSections, activeDateManager.referenceDate, true);
      values = activeDateManager.getNewValuesFromNewActiveDate(mergedDate);
      shouldPublish = true;
    } else {
      values = activeDateManager.getNewValuesFromNewActiveDate(newActiveDate);
      shouldPublish = (newActiveDate != null && !utils.isValid(newActiveDate)) !== (activeDateManager.date != null && !utils.isValid(activeDateManager.date));
    }

    /**
     * Publish or update the internal state with the new value and sections.
     */
    if (shouldPublish) {
      return publishValue((0,esm_extends/* default */.A)({}, values, {
        sections: newSections
      }));
    }
    return setState(prevState => (0,esm_extends/* default */.A)({}, prevState, values, {
      sections: newSections,
      tempValueStrAndroid: null
    }));
  };
  const setTempAndroidValueStr = tempValueStrAndroid => setState(prev => (0,esm_extends/* default */.A)({}, prev, {
    tempValueStrAndroid
  }));
  react.useEffect(() => {
    const sections = getSectionsFromValue(state.value);
    validateSections(sections, valueType);
    setState(prevState => (0,esm_extends/* default */.A)({}, prevState, {
      sections
    }));
  }, [format, utils.locale, isRtl]); // eslint-disable-line react-hooks/exhaustive-deps

  react.useEffect(() => {
    let shouldUpdate;
    if (!valueManager.areValuesEqual(utils, state.value, valueFromTheOutside)) {
      shouldUpdate = true;
    } else {
      shouldUpdate = valueManager.getTimezone(utils, state.value) !== valueManager.getTimezone(utils, valueFromTheOutside);
    }
    if (shouldUpdate) {
      setState(prevState => (0,esm_extends/* default */.A)({}, prevState, {
        value: valueFromTheOutside,
        referenceValue: fieldValueManager.updateReferenceValue(utils, valueFromTheOutside, prevState.referenceValue),
        sections: getSectionsFromValue(valueFromTheOutside)
      }));
    }
  }, [valueFromTheOutside]); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    state,
    activeSectionIndex,
    parsedSelectedSections,
    setSelectedSections,
    clearValue,
    clearActiveSection,
    updateSectionValue,
    updateValueFromValueStr,
    setTempAndroidValueStr,
    getSectionsFromValue,
    sectionsValueBoundaries,
    localizedDigits,
    timezone
  };
};
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/hooks/useField/useFieldCharacterEditing.js






/**
 * The letter editing and the numeric editing each define a `CharacterEditingApplier`.
 * This function decides what the new section value should be and if the focus should switch to the next section.
 *
 * If it returns `null`, then the section value is not updated and the focus does not move.
 */

/**
 * Function called by `applyQuery` which decides:
 * - what is the new section value ?
 * - should the query used to get this value be stored for the next key press ?
 *
 * If it returns `{ sectionValue: string; shouldGoToNextSection: boolean }`,
 * Then we store the query and update the section with the new value.
 *
 * If it returns `{ saveQuery: true` },
 * Then we store the query and don't update the section.
 *
 * If it returns `{ saveQuery: false },
 * Then we do nothing.
 */

const QUERY_LIFE_DURATION_MS = 5000;
const isQueryResponseWithoutValue = response => response.saveQuery != null;

/**
 * Update the active section value when the user pressed a key that is not a navigation key (arrow key for example).
 * This hook has two main editing behaviors
 *
 * 1. The numeric editing when the user presses a digit
 * 2. The letter editing when the user presses another key
 */
const useFieldCharacterEditing = ({
  sections,
  updateSectionValue,
  sectionsValueBoundaries,
  localizedDigits,
  setTempAndroidValueStr,
  timezone
}) => {
  const utils = useUtils_useUtils();
  const [query, setQuery] = react.useState(null);
  const resetQuery = useEventCallback_useEventCallback(() => setQuery(null));
  react.useEffect(() => {
    if (query != null && sections[query.sectionIndex]?.type !== query.sectionType) {
      resetQuery();
    }
  }, [sections, query, resetQuery]);
  react.useEffect(() => {
    if (query != null) {
      const timeout = setTimeout(() => resetQuery(), QUERY_LIFE_DURATION_MS);
      return () => {
        clearTimeout(timeout);
      };
    }
    return () => {};
  }, [query, resetQuery]);
  const applyQuery = ({
    keyPressed,
    sectionIndex
  }, getFirstSectionValueMatchingWithQuery, isValidQueryValue) => {
    const cleanKeyPressed = keyPressed.toLowerCase();
    const activeSection = sections[sectionIndex];

    // The current query targets the section being editing
    // We can try to concatenate the value
    if (query != null && (!isValidQueryValue || isValidQueryValue(query.value)) && query.sectionIndex === sectionIndex) {
      const concatenatedQueryValue = `${query.value}${cleanKeyPressed}`;
      const queryResponse = getFirstSectionValueMatchingWithQuery(concatenatedQueryValue, activeSection);
      if (!isQueryResponseWithoutValue(queryResponse)) {
        setQuery({
          sectionIndex,
          value: concatenatedQueryValue,
          sectionType: activeSection.type
        });
        return queryResponse;
      }
    }
    const queryResponse = getFirstSectionValueMatchingWithQuery(cleanKeyPressed, activeSection);
    if (isQueryResponseWithoutValue(queryResponse) && !queryResponse.saveQuery) {
      resetQuery();
      return null;
    }
    setQuery({
      sectionIndex,
      value: cleanKeyPressed,
      sectionType: activeSection.type
    });
    if (isQueryResponseWithoutValue(queryResponse)) {
      return null;
    }
    return queryResponse;
  };
  const applyLetterEditing = params => {
    const findMatchingOptions = (format, options, queryValue) => {
      const matchingValues = options.filter(option => option.toLowerCase().startsWith(queryValue));
      if (matchingValues.length === 0) {
        return {
          saveQuery: false
        };
      }
      return {
        sectionValue: matchingValues[0],
        shouldGoToNextSection: matchingValues.length === 1
      };
    };
    const testQueryOnFormatAndFallbackFormat = (queryValue, activeSection, fallbackFormat, formatFallbackValue) => {
      const getOptions = format => getLetterEditingOptions(utils, timezone, activeSection.type, format);
      if (activeSection.contentType === 'letter') {
        return findMatchingOptions(activeSection.format, getOptions(activeSection.format), queryValue);
      }

      // When editing a digit-format month / weekDay and the user presses a letter,
      // We can support the letter editing by using the letter-format month / weekDay and re-formatting the result.
      // We just have to make sure that the default month / weekDay format is a letter format,
      if (fallbackFormat && formatFallbackValue != null && getDateSectionConfigFromFormatToken(utils, fallbackFormat).contentType === 'letter') {
        const fallbackOptions = getOptions(fallbackFormat);
        const response = findMatchingOptions(fallbackFormat, fallbackOptions, queryValue);
        if (isQueryResponseWithoutValue(response)) {
          return {
            saveQuery: false
          };
        }
        return (0,esm_extends/* default */.A)({}, response, {
          sectionValue: formatFallbackValue(response.sectionValue, fallbackOptions)
        });
      }
      return {
        saveQuery: false
      };
    };
    const getFirstSectionValueMatchingWithQuery = (queryValue, activeSection) => {
      switch (activeSection.type) {
        case 'month':
          {
            const formatFallbackValue = fallbackValue => changeSectionValueFormat(utils, fallbackValue, utils.formats.month, activeSection.format);
            return testQueryOnFormatAndFallbackFormat(queryValue, activeSection, utils.formats.month, formatFallbackValue);
          }
        case 'weekDay':
          {
            const formatFallbackValue = (fallbackValue, fallbackOptions) => fallbackOptions.indexOf(fallbackValue).toString();
            return testQueryOnFormatAndFallbackFormat(queryValue, activeSection, utils.formats.weekday, formatFallbackValue);
          }
        case 'meridiem':
          {
            return testQueryOnFormatAndFallbackFormat(queryValue, activeSection);
          }
        default:
          {
            return {
              saveQuery: false
            };
          }
      }
    };
    return applyQuery(params, getFirstSectionValueMatchingWithQuery);
  };
  const applyNumericEditing = params => {
    const getNewSectionValue = (queryValue, section) => {
      const cleanQueryValue = removeLocalizedDigits(queryValue, localizedDigits);
      const queryValueNumber = Number(cleanQueryValue);
      const sectionBoundaries = sectionsValueBoundaries[section.type]({
        currentDate: null,
        format: section.format,
        contentType: section.contentType
      });
      if (queryValueNumber > sectionBoundaries.maximum) {
        return {
          saveQuery: false
        };
      }

      // If the user types `0` on a month section,
      // It is below the minimum, but we want to store the `0` in the query,
      // So that when he pressed `1`, it will store `01` and move to the next section.
      if (queryValueNumber < sectionBoundaries.minimum) {
        return {
          saveQuery: true
        };
      }
      const shouldGoToNextSection = queryValueNumber * 10 > sectionBoundaries.maximum || cleanQueryValue.length === sectionBoundaries.maximum.toString().length;
      const newSectionValue = cleanDigitSectionValue(utils, queryValueNumber, sectionBoundaries, localizedDigits, section);
      return {
        sectionValue: newSectionValue,
        shouldGoToNextSection
      };
    };
    const getFirstSectionValueMatchingWithQuery = (queryValue, activeSection) => {
      if (activeSection.contentType === 'digit' || activeSection.contentType === 'digit-with-letter') {
        return getNewSectionValue(queryValue, activeSection);
      }

      // When editing a letter-format month and the user presses a digit,
      // We can support the numeric editing by using the digit-format month and re-formatting the result.
      if (activeSection.type === 'month') {
        const hasLeadingZerosInFormat = doesSectionFormatHaveLeadingZeros(utils, 'digit', 'month', 'MM');
        const response = getNewSectionValue(queryValue, {
          type: activeSection.type,
          format: 'MM',
          hasLeadingZerosInFormat,
          hasLeadingZerosInInput: true,
          contentType: 'digit',
          maxLength: 2
        });
        if (isQueryResponseWithoutValue(response)) {
          return response;
        }
        const formattedValue = changeSectionValueFormat(utils, response.sectionValue, 'MM', activeSection.format);
        return (0,esm_extends/* default */.A)({}, response, {
          sectionValue: formattedValue
        });
      }

      // When editing a letter-format weekDay and the user presses a digit,
      // We can support the numeric editing by returning the nth day in the week day array.
      if (activeSection.type === 'weekDay') {
        const response = getNewSectionValue(queryValue, activeSection);
        if (isQueryResponseWithoutValue(response)) {
          return response;
        }
        const formattedValue = getDaysInWeekStr(utils, activeSection.format)[Number(response.sectionValue) - 1];
        return (0,esm_extends/* default */.A)({}, response, {
          sectionValue: formattedValue
        });
      }
      return {
        saveQuery: false
      };
    };
    return applyQuery(params, getFirstSectionValueMatchingWithQuery, queryValue => isStringNumber(queryValue, localizedDigits));
  };
  const applyCharacterEditing = useEventCallback_useEventCallback(params => {
    const activeSection = sections[params.sectionIndex];
    const isNumericEditing = isStringNumber(params.keyPressed, localizedDigits);
    const response = isNumericEditing ? applyNumericEditing((0,esm_extends/* default */.A)({}, params, {
      keyPressed: applyLocalizedDigits(params.keyPressed, localizedDigits)
    })) : applyLetterEditing(params);
    if (response == null) {
      setTempAndroidValueStr(null);
      return;
    }
    updateSectionValue({
      activeSection,
      newSectionValue: response.sectionValue,
      shouldGoToNextSection: response.shouldGoToNextSection
    });
  });
  return {
    applyCharacterEditing,
    resetCharacterQuery: resetQuery
  };
};
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/hooks/useField/useFieldV7TextField.js









const useFieldV7TextField = params => {
  const {
    internalProps: {
      disabled,
      readOnly = false
    },
    forwardedProps: {
      sectionListRef: inSectionListRef,
      onBlur,
      onClick,
      onFocus,
      onInput,
      onPaste,
      focused: focusedProp,
      autoFocus = false
    },
    fieldValueManager,
    applyCharacterEditing,
    resetCharacterQuery,
    setSelectedSections,
    parsedSelectedSections,
    state,
    clearActiveSection,
    clearValue,
    updateSectionValue,
    updateValueFromValueStr,
    sectionOrder,
    areAllSectionsEmpty,
    sectionsValueBoundaries
  } = params;
  const sectionListRef = react.useRef(null);
  const handleSectionListRef = useForkRef(inSectionListRef, sectionListRef);
  const translations = usePickersTranslations();
  const utils = useUtils_useUtils();
  const id = useId();
  const [focused, setFocused] = react.useState(false);
  const interactions = react.useMemo(() => ({
    syncSelectionToDOM: () => {
      if (!sectionListRef.current) {
        return;
      }
      const selection = document.getSelection();
      if (!selection) {
        return;
      }
      if (parsedSelectedSections == null) {
        // If the selection contains an element inside the field, we reset it.
        if (selection.rangeCount > 0 && sectionListRef.current.getRoot().contains(selection.getRangeAt(0).startContainer)) {
          selection.removeAllRanges();
        }
        if (focused) {
          sectionListRef.current.getRoot().blur();
        }
        return;
      }

      // On multi input range pickers we want to update selection range only for the active input
      if (!sectionListRef.current.getRoot().contains(getActiveElement(document))) {
        return;
      }
      const range = new window.Range();
      let target;
      if (parsedSelectedSections === 'all') {
        target = sectionListRef.current.getRoot();
      } else {
        const section = state.sections[parsedSelectedSections];
        if (section.type === 'empty') {
          target = sectionListRef.current.getSectionContainer(parsedSelectedSections);
        } else {
          target = sectionListRef.current.getSectionContent(parsedSelectedSections);
        }
      }
      range.selectNodeContents(target);
      target.focus();
      selection.removeAllRanges();
      selection.addRange(range);
    },
    getActiveSectionIndexFromDOM: () => {
      const activeElement = getActiveElement(document);
      if (!activeElement || !sectionListRef.current || !sectionListRef.current.getRoot().contains(activeElement)) {
        return null;
      }
      return sectionListRef.current.getSectionIndexFromDOMElement(activeElement);
    },
    focusField: (newSelectedSections = 0) => {
      if (!sectionListRef.current ||
      // if the field is already focused, we don't need to focus it again
      interactions.getActiveSectionIndexFromDOM() != null) {
        return;
      }
      const newParsedSelectedSections = parseSelectedSections(newSelectedSections, state.sections);
      setFocused(true);
      sectionListRef.current.getSectionContent(newParsedSelectedSections).focus();
    },
    setSelectedSections: newSelectedSections => {
      if (!sectionListRef.current) {
        return;
      }
      const newParsedSelectedSections = parseSelectedSections(newSelectedSections, state.sections);
      const newActiveSectionIndex = newParsedSelectedSections === 'all' ? 0 : newParsedSelectedSections;
      setFocused(newActiveSectionIndex !== null);
      setSelectedSections(newSelectedSections);
    },
    isFieldFocused: () => {
      const activeElement = getActiveElement(document);
      return !!sectionListRef.current && sectionListRef.current.getRoot().contains(activeElement);
    }
  }), [parsedSelectedSections, setSelectedSections, state.sections, focused]);

  /**
   * If a section content has been updated with a value we don't want to keep,
   * Then we need to imperatively revert it (we can't let React do it because the value did not change in his internal representation).
   */
  const revertDOMSectionChange = useEventCallback_useEventCallback(sectionIndex => {
    if (!sectionListRef.current) {
      return;
    }
    const section = state.sections[sectionIndex];
    sectionListRef.current.getSectionContent(sectionIndex).innerHTML = section.value || section.placeholder;
    interactions.syncSelectionToDOM();
  });
  const handleContainerClick = useEventCallback_useEventCallback((event, ...args) => {
    // The click event on the clear button would propagate to the input, trigger this handler and result in a wrong section selection.
    // We avoid this by checking if the call of `handleContainerClick` is actually intended, or a side effect.
    if (event.isDefaultPrevented() || !sectionListRef.current) {
      return;
    }
    setFocused(true);
    onClick?.(event, ...args);
    if (parsedSelectedSections === 'all') {
      setTimeout(() => {
        const cursorPosition = document.getSelection().getRangeAt(0).startOffset;
        if (cursorPosition === 0) {
          setSelectedSections(sectionOrder.startIndex);
          return;
        }
        let sectionIndex = 0;
        let cursorOnStartOfSection = 0;
        while (cursorOnStartOfSection < cursorPosition && sectionIndex < state.sections.length) {
          const section = state.sections[sectionIndex];
          sectionIndex += 1;
          cursorOnStartOfSection += `${section.startSeparator}${section.value || section.placeholder}${section.endSeparator}`.length;
        }
        setSelectedSections(sectionIndex - 1);
      });
    } else if (!focused) {
      setFocused(true);
      setSelectedSections(sectionOrder.startIndex);
    } else {
      const hasClickedOnASection = sectionListRef.current.getRoot().contains(event.target);
      if (!hasClickedOnASection) {
        setSelectedSections(sectionOrder.startIndex);
      }
    }
  });
  const handleContainerInput = useEventCallback_useEventCallback(event => {
    onInput?.(event);
    if (!sectionListRef.current || parsedSelectedSections !== 'all') {
      return;
    }
    const target = event.target;
    const keyPressed = target.textContent ?? '';
    sectionListRef.current.getRoot().innerHTML = state.sections.map(section => `${section.startSeparator}${section.value || section.placeholder}${section.endSeparator}`).join('');
    interactions.syncSelectionToDOM();
    if (keyPressed.length === 0 || keyPressed.charCodeAt(0) === 10) {
      resetCharacterQuery();
      clearValue();
      setSelectedSections('all');
    } else if (keyPressed.length > 1) {
      updateValueFromValueStr(keyPressed);
    } else {
      if (parsedSelectedSections === 'all') {
        setSelectedSections(0);
      }
      applyCharacterEditing({
        keyPressed,
        sectionIndex: 0
      });
    }
  });
  const handleContainerPaste = useEventCallback_useEventCallback(event => {
    onPaste?.(event);
    if (readOnly || parsedSelectedSections !== 'all') {
      event.preventDefault();
      return;
    }
    const pastedValue = event.clipboardData.getData('text');
    event.preventDefault();
    resetCharacterQuery();
    updateValueFromValueStr(pastedValue);
  });
  const handleContainerFocus = useEventCallback_useEventCallback((...args) => {
    onFocus?.(...args);
    if (focused || !sectionListRef.current) {
      return;
    }
    setFocused(true);
    const isFocusInsideASection = sectionListRef.current.getSectionIndexFromDOMElement(getActiveElement(document)) != null;
    if (!isFocusInsideASection) {
      setSelectedSections(sectionOrder.startIndex);
    }
  });
  const handleContainerBlur = useEventCallback_useEventCallback((...args) => {
    onBlur?.(...args);
    setTimeout(() => {
      if (!sectionListRef.current) {
        return;
      }
      const activeElement = getActiveElement(document);
      const shouldBlur = !sectionListRef.current.getRoot().contains(activeElement);
      if (shouldBlur) {
        setFocused(false);
        setSelectedSections(null);
      }
    });
  });
  const getInputContainerClickHandler = useEventCallback_useEventCallback(sectionIndex => event => {
    // The click event on the clear button would propagate to the input, trigger this handler and result in a wrong section selection.
    // We avoid this by checking if the call to this function is actually intended, or a side effect.
    if (event.isDefaultPrevented()) {
      return;
    }
    setSelectedSections(sectionIndex);
  });
  const handleInputContentMouseUp = useEventCallback_useEventCallback(event => {
    // Without this, the browser will remove the selected when clicking inside an already-selected section.
    event.preventDefault();
  });
  const getInputContentFocusHandler = useEventCallback_useEventCallback(sectionIndex => () => {
    setSelectedSections(sectionIndex);
  });
  const handleInputContentPaste = useEventCallback_useEventCallback(event => {
    // prevent default to avoid the input `onInput` handler being called
    event.preventDefault();
    if (readOnly || disabled || typeof parsedSelectedSections !== 'number') {
      return;
    }
    const activeSection = state.sections[parsedSelectedSections];
    const pastedValue = event.clipboardData.getData('text');
    const lettersOnly = /^[a-zA-Z]+$/.test(pastedValue);
    const digitsOnly = /^[0-9]+$/.test(pastedValue);
    const digitsAndLetterOnly = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(pastedValue);
    const isValidPastedValue = activeSection.contentType === 'letter' && lettersOnly || activeSection.contentType === 'digit' && digitsOnly || activeSection.contentType === 'digit-with-letter' && digitsAndLetterOnly;
    if (isValidPastedValue) {
      resetCharacterQuery();
      updateSectionValue({
        activeSection,
        newSectionValue: pastedValue,
        shouldGoToNextSection: true
      });
    }
    // If the pasted value corresponds to a single section, but not the expected type, we skip the modification
    else if (!lettersOnly && !digitsOnly) {
      resetCharacterQuery();
      updateValueFromValueStr(pastedValue);
    }
  });
  const handleInputContentDragOver = useEventCallback_useEventCallback(event => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'none';
  });
  const handleInputContentInput = useEventCallback_useEventCallback(event => {
    if (!sectionListRef.current) {
      return;
    }
    const target = event.target;
    const keyPressed = target.textContent ?? '';
    const sectionIndex = sectionListRef.current.getSectionIndexFromDOMElement(target);
    const section = state.sections[sectionIndex];
    if (readOnly || !sectionListRef.current) {
      revertDOMSectionChange(sectionIndex);
      return;
    }
    if (keyPressed.length === 0) {
      if (section.value === '') {
        revertDOMSectionChange(sectionIndex);
        return;
      }
      const inputType = event.nativeEvent.inputType;
      if (inputType === 'insertParagraph' || inputType === 'insertLineBreak') {
        revertDOMSectionChange(sectionIndex);
        return;
      }
      resetCharacterQuery();
      clearActiveSection();
      return;
    }
    applyCharacterEditing({
      keyPressed,
      sectionIndex
    });

    // The DOM value needs to remain the one React is expecting.
    revertDOMSectionChange(sectionIndex);
  });
  useEnhancedEffect_useEnhancedEffect(() => {
    if (!focused || !sectionListRef.current) {
      return;
    }
    if (parsedSelectedSections === 'all') {
      sectionListRef.current.getRoot().focus();
    } else if (typeof parsedSelectedSections === 'number') {
      const domElement = sectionListRef.current.getSectionContent(parsedSelectedSections);
      if (domElement) {
        domElement.focus();
      }
    }
  }, [parsedSelectedSections, focused]);
  const sectionBoundaries = react.useMemo(() => {
    return state.sections.reduce((acc, next) => {
      acc[next.type] = sectionsValueBoundaries[next.type]({
        currentDate: null,
        contentType: next.contentType,
        format: next.format
      });
      return acc;
    }, {});
  }, [sectionsValueBoundaries, state.sections]);
  const isContainerEditable = parsedSelectedSections === 'all';
  const elements = react.useMemo(() => {
    return state.sections.map((section, index) => {
      const isEditable = !isContainerEditable && !disabled && !readOnly;
      return {
        container: {
          'data-sectionindex': index,
          onClick: getInputContainerClickHandler(index)
        },
        content: {
          tabIndex: isContainerEditable || index > 0 ? -1 : 0,
          contentEditable: !isContainerEditable && !disabled && !readOnly,
          role: 'spinbutton',
          id: `${id}-${section.type}`,
          'aria-labelledby': `${id}-${section.type}`,
          'aria-readonly': readOnly,
          'aria-valuenow': getSectionValueNow(section, utils),
          'aria-valuemin': sectionBoundaries[section.type].minimum,
          'aria-valuemax': sectionBoundaries[section.type].maximum,
          'aria-valuetext': section.value ? getSectionValueText(section, utils) : translations.empty,
          'aria-label': translations[section.type],
          'aria-disabled': disabled,
          spellCheck: isEditable ? false : undefined,
          autoCapitalize: isEditable ? 'off' : undefined,
          autoCorrect: isEditable ? 'off' : undefined,
          [parseInt(react.version, 10) >= 17 ? 'enterKeyHint' : 'enterkeyhint']: isEditable ? 'next' : undefined,
          children: section.value || section.placeholder,
          onInput: handleInputContentInput,
          onPaste: handleInputContentPaste,
          onFocus: getInputContentFocusHandler(index),
          onDragOver: handleInputContentDragOver,
          onMouseUp: handleInputContentMouseUp,
          inputMode: section.contentType === 'letter' ? 'text' : 'numeric'
        },
        before: {
          children: section.startSeparator
        },
        after: {
          children: section.endSeparator
        }
      };
    });
  }, [state.sections, getInputContentFocusHandler, handleInputContentPaste, handleInputContentDragOver, handleInputContentInput, getInputContainerClickHandler, handleInputContentMouseUp, disabled, readOnly, isContainerEditable, translations, utils, sectionBoundaries, id]);
  const handleValueStrChange = useEventCallback_useEventCallback(event => {
    updateValueFromValueStr(event.target.value);
  });
  const valueStr = react.useMemo(() => areAllSectionsEmpty ? '' : fieldValueManager.getV7HiddenInputValueFromSections(state.sections), [areAllSectionsEmpty, state.sections, fieldValueManager]);
  react.useEffect(() => {
    if (sectionListRef.current == null) {
      throw new Error(['MUI X: The `sectionListRef` prop has not been initialized by `PickersSectionList`', 'You probably tried to pass a component to the `textField` slot that contains an `<input />` element instead of a `PickersSectionList`.', '', 'If you want to keep using an `<input />` HTML element for the editing, please remove the `enableAccessibleFieldDOMStructure` prop from your picker or field component:', '', '<DatePicker slots={{ textField: MyCustomTextField }} />', '', 'Learn more about the field accessible DOM structure on the MUI documentation: https://mui.com/x/react-date-pickers/fields/#fields-to-edit-a-single-element'].join('\n'));
    }
    if (autoFocus && sectionListRef.current) {
      sectionListRef.current.getSectionContent(sectionOrder.startIndex).focus();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return {
    interactions,
    returnedValue: {
      // Forwarded
      autoFocus,
      readOnly,
      focused: focusedProp ?? focused,
      sectionListRef: handleSectionListRef,
      onBlur: handleContainerBlur,
      onClick: handleContainerClick,
      onFocus: handleContainerFocus,
      onInput: handleContainerInput,
      onPaste: handleContainerPaste,
      // Additional
      enableAccessibleFieldDOMStructure: true,
      elements,
      // TODO v7: Try to set to undefined when there is a section selected.
      tabIndex: parsedSelectedSections === 0 ? -1 : 0,
      contentEditable: isContainerEditable,
      value: valueStr,
      onChange: handleValueStrChange,
      areAllSectionsEmpty
    }
  };
};
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/hooks/useField/useFieldV6TextField.js







const cleanString = dirtyString => dirtyString.replace(/[\u2066\u2067\u2068\u2069]/g, '');
const addPositionPropertiesToSections = (sections, localizedDigits, isRtl) => {
  let position = 0;
  let positionInInput = isRtl ? 1 : 0;
  const newSections = [];
  for (let i = 0; i < sections.length; i += 1) {
    const section = sections[i];
    const renderedValue = getSectionVisibleValue(section, isRtl ? 'input-rtl' : 'input-ltr', localizedDigits);
    const sectionStr = `${section.startSeparator}${renderedValue}${section.endSeparator}`;
    const sectionLength = cleanString(sectionStr).length;
    const sectionLengthInInput = sectionStr.length;

    // The ...InInput values consider the unicode characters but do include them in their indexes
    const cleanedValue = cleanString(renderedValue);
    const startInInput = positionInInput + (cleanedValue === '' ? 0 : renderedValue.indexOf(cleanedValue[0])) + section.startSeparator.length;
    const endInInput = startInInput + cleanedValue.length;
    newSections.push((0,esm_extends/* default */.A)({}, section, {
      start: position,
      end: position + sectionLength,
      startInInput,
      endInInput
    }));
    position += sectionLength;
    // Move position to the end of string associated to the current section
    positionInInput += sectionLengthInInput;
  }
  return newSections;
};
const useFieldV6TextField = params => {
  const isRtl = (0,RtlProvider/* useRtl */.I)();
  const focusTimeoutRef = react.useRef(undefined);
  const selectionSyncTimeoutRef = react.useRef(undefined);
  const {
    forwardedProps: {
      onFocus,
      onClick,
      onPaste,
      onBlur,
      inputRef: inputRefProp,
      placeholder: inPlaceholder
    },
    internalProps: {
      readOnly = false,
      disabled = false
    },
    parsedSelectedSections,
    activeSectionIndex,
    state,
    fieldValueManager,
    valueManager,
    applyCharacterEditing,
    resetCharacterQuery,
    updateSectionValue,
    updateValueFromValueStr,
    clearActiveSection,
    clearValue,
    setTempAndroidValueStr,
    setSelectedSections,
    getSectionsFromValue,
    areAllSectionsEmpty,
    localizedDigits
  } = params;
  const inputRef = react.useRef(null);
  const handleRef = useForkRef(inputRefProp, inputRef);
  const sections = react.useMemo(() => addPositionPropertiesToSections(state.sections, localizedDigits, isRtl), [state.sections, localizedDigits, isRtl]);
  const interactions = react.useMemo(() => ({
    syncSelectionToDOM: () => {
      if (!inputRef.current) {
        return;
      }
      if (parsedSelectedSections == null) {
        if (inputRef.current.scrollLeft) {
          // Ensure that input content is not marked as selected.
          // setting selection range to 0 causes issues in Safari.
          // https://bugs.webkit.org/show_bug.cgi?id=224425
          inputRef.current.scrollLeft = 0;
        }
        return;
      }

      // On multi input range pickers we want to update selection range only for the active input
      // This helps to avoid the focus jumping on Safari https://github.com/mui/mui-x/issues/9003
      // because WebKit implements the `setSelectionRange` based on the spec: https://bugs.webkit.org/show_bug.cgi?id=224425
      if (inputRef.current !== getActiveElement(document)) {
        return;
      }

      // Fix scroll jumping on iOS browser: https://github.com/mui/mui-x/issues/8321
      const currentScrollTop = inputRef.current.scrollTop;
      if (parsedSelectedSections === 'all') {
        inputRef.current.select();
      } else {
        const selectedSection = sections[parsedSelectedSections];
        const selectionStart = selectedSection.type === 'empty' ? selectedSection.startInInput - selectedSection.startSeparator.length : selectedSection.startInInput;
        const selectionEnd = selectedSection.type === 'empty' ? selectedSection.endInInput + selectedSection.endSeparator.length : selectedSection.endInInput;
        if (selectionStart !== inputRef.current.selectionStart || selectionEnd !== inputRef.current.selectionEnd) {
          if (inputRef.current === getActiveElement(document)) {
            inputRef.current.setSelectionRange(selectionStart, selectionEnd);
          }
        }
        clearTimeout(selectionSyncTimeoutRef.current);
        selectionSyncTimeoutRef.current = setTimeout(() => {
          // handle case when the selection is not updated correctly
          // could happen on Android
          if (inputRef.current && inputRef.current === getActiveElement(document) &&
          // The section might loose all selection, where `selectionStart === selectionEnd`
          // https://github.com/mui/mui-x/pull/13652
          inputRef.current.selectionStart === inputRef.current.selectionEnd && (inputRef.current.selectionStart !== selectionStart || inputRef.current.selectionEnd !== selectionEnd)) {
            interactions.syncSelectionToDOM();
          }
        });
      }

      // Even reading this variable seems to do the trick, but also setting it just to make use of it
      inputRef.current.scrollTop = currentScrollTop;
    },
    getActiveSectionIndexFromDOM: () => {
      const browserStartIndex = inputRef.current.selectionStart ?? 0;
      const browserEndIndex = inputRef.current.selectionEnd ?? 0;
      if (browserStartIndex === 0 && browserEndIndex === 0) {
        return null;
      }
      const nextSectionIndex = browserStartIndex <= sections[0].startInInput ? 1 // Special case if browser index is in invisible characters at the beginning.
      : sections.findIndex(section => section.startInInput - section.startSeparator.length > browserStartIndex);
      return nextSectionIndex === -1 ? sections.length - 1 : nextSectionIndex - 1;
    },
    focusField: (newSelectedSection = 0) => {
      if (getActiveElement(document) === inputRef.current) {
        return;
      }
      inputRef.current?.focus();
      setSelectedSections(newSelectedSection);
    },
    setSelectedSections: newSelectedSections => setSelectedSections(newSelectedSections),
    isFieldFocused: () => inputRef.current === getActiveElement(document)
  }), [inputRef, parsedSelectedSections, sections, setSelectedSections]);
  const syncSelectionFromDOM = () => {
    const browserStartIndex = inputRef.current.selectionStart ?? 0;
    let nextSectionIndex;
    if (browserStartIndex <= sections[0].startInInput) {
      // Special case if browser index is in invisible characters at the beginning
      nextSectionIndex = 1;
    } else if (browserStartIndex >= sections[sections.length - 1].endInInput) {
      // If the click is after the last character of the input, then we want to select the 1st section.
      nextSectionIndex = 1;
    } else {
      nextSectionIndex = sections.findIndex(section => section.startInInput - section.startSeparator.length > browserStartIndex);
    }
    const sectionIndex = nextSectionIndex === -1 ? sections.length - 1 : nextSectionIndex - 1;
    setSelectedSections(sectionIndex);
  };
  const handleInputFocus = useEventCallback_useEventCallback((...args) => {
    onFocus?.(...args);
    // The ref is guaranteed to be resolved at this point.
    const input = inputRef.current;
    clearTimeout(focusTimeoutRef.current);
    focusTimeoutRef.current = setTimeout(() => {
      // The ref changed, the component got remounted, the focus event is no longer relevant.
      if (!input || input !== inputRef.current) {
        return;
      }
      if (activeSectionIndex != null) {
        return;
      }
      if (
      // avoid selecting all sections when focusing empty field without value
      input.value.length && Number(input.selectionEnd) - Number(input.selectionStart) === input.value.length) {
        setSelectedSections('all');
      } else {
        syncSelectionFromDOM();
      }
    });
  });
  const handleInputClick = useEventCallback_useEventCallback((event, ...args) => {
    // The click event on the clear button would propagate to the input, trigger this handler and result in a wrong section selection.
    // We avoid this by checking if the call of `handleInputClick` is actually intended, or a side effect.
    if (event.isDefaultPrevented()) {
      return;
    }
    onClick?.(event, ...args);
    syncSelectionFromDOM();
  });
  const handleInputPaste = useEventCallback_useEventCallback(event => {
    onPaste?.(event);

    // prevent default to avoid the input `onChange` handler being called
    event.preventDefault();
    if (readOnly || disabled) {
      return;
    }
    const pastedValue = event.clipboardData.getData('text');
    if (typeof parsedSelectedSections === 'number') {
      const activeSection = state.sections[parsedSelectedSections];
      const lettersOnly = /^[a-zA-Z]+$/.test(pastedValue);
      const digitsOnly = /^[0-9]+$/.test(pastedValue);
      const digitsAndLetterOnly = /^(([a-zA-Z]+)|)([0-9]+)(([a-zA-Z]+)|)$/.test(pastedValue);
      const isValidPastedValue = activeSection.contentType === 'letter' && lettersOnly || activeSection.contentType === 'digit' && digitsOnly || activeSection.contentType === 'digit-with-letter' && digitsAndLetterOnly;
      if (isValidPastedValue) {
        resetCharacterQuery();
        updateSectionValue({
          activeSection,
          newSectionValue: pastedValue,
          shouldGoToNextSection: true
        });
        return;
      }
      if (lettersOnly || digitsOnly) {
        // The pasted value corresponds to a single section, but not the expected type,
        // skip the modification
        return;
      }
    }
    resetCharacterQuery();
    updateValueFromValueStr(pastedValue);
  });
  const handleContainerBlur = useEventCallback_useEventCallback((...args) => {
    onBlur?.(...args);
    setSelectedSections(null);
  });
  const handleInputChange = useEventCallback_useEventCallback(event => {
    if (readOnly) {
      return;
    }
    const targetValue = event.target.value;
    if (targetValue === '') {
      resetCharacterQuery();
      clearValue();
      return;
    }
    const eventData = event.nativeEvent.data;
    // Calling `.fill(04/11/2022)` in playwright will trigger a change event with the requested content to insert in `event.nativeEvent.data`
    // usual changes have only the currently typed character in the `event.nativeEvent.data`
    const shouldUseEventData = eventData && eventData.length > 1;
    const valueStr = shouldUseEventData ? eventData : targetValue;
    const cleanValueStr = cleanString(valueStr);
    if (parsedSelectedSections === 'all') {
      setSelectedSections(activeSectionIndex);
    }

    // If no section is selected or eventData should be used, we just try to parse the new value
    // This line is mostly triggered by imperative code / application tests.
    if (activeSectionIndex == null || shouldUseEventData) {
      updateValueFromValueStr(shouldUseEventData ? eventData : cleanValueStr);
      return;
    }
    let keyPressed;
    if (parsedSelectedSections === 'all' && cleanValueStr.length === 1) {
      keyPressed = cleanValueStr;
    } else {
      const prevValueStr = cleanString(fieldValueManager.getV6InputValueFromSections(sections, localizedDigits, isRtl));
      let startOfDiffIndex = -1;
      let endOfDiffIndex = -1;
      for (let i = 0; i < prevValueStr.length; i += 1) {
        if (startOfDiffIndex === -1 && prevValueStr[i] !== cleanValueStr[i]) {
          startOfDiffIndex = i;
        }
        if (endOfDiffIndex === -1 && prevValueStr[prevValueStr.length - i - 1] !== cleanValueStr[cleanValueStr.length - i - 1]) {
          endOfDiffIndex = i;
        }
      }
      const activeSection = sections[activeSectionIndex];
      const hasDiffOutsideOfActiveSection = startOfDiffIndex < activeSection.start || prevValueStr.length - endOfDiffIndex - 1 > activeSection.end;
      if (hasDiffOutsideOfActiveSection) {
        // TODO: Support if the new date is valid
        return;
      }

      // The active section being selected, the browser has replaced its value with the key pressed by the user.
      const activeSectionEndRelativeToNewValue = cleanValueStr.length - prevValueStr.length + activeSection.end - cleanString(activeSection.endSeparator || '').length;
      keyPressed = cleanValueStr.slice(activeSection.start + cleanString(activeSection.startSeparator || '').length, activeSectionEndRelativeToNewValue);
    }
    if (keyPressed.length === 0) {
      if (isAndroid()) {
        setTempAndroidValueStr(valueStr);
      }
      resetCharacterQuery();
      clearActiveSection();
      return;
    }
    applyCharacterEditing({
      keyPressed,
      sectionIndex: activeSectionIndex
    });
  });
  const placeholder = react.useMemo(() => {
    if (inPlaceholder !== undefined) {
      return inPlaceholder;
    }
    return fieldValueManager.getV6InputValueFromSections(getSectionsFromValue(valueManager.emptyValue), localizedDigits, isRtl);
  }, [inPlaceholder, fieldValueManager, getSectionsFromValue, valueManager.emptyValue, localizedDigits, isRtl]);
  const valueStr = react.useMemo(() => state.tempValueStrAndroid ?? fieldValueManager.getV6InputValueFromSections(state.sections, localizedDigits, isRtl), [state.sections, fieldValueManager, state.tempValueStrAndroid, localizedDigits, isRtl]);
  react.useEffect(() => {
    // Select all the sections when focused on mount (`autoFocus = true` on the input)
    if (inputRef.current && inputRef.current === getActiveElement(document)) {
      setSelectedSections('all');
    }
    return () => {
      clearTimeout(focusTimeoutRef.current);
      clearTimeout(selectionSyncTimeoutRef.current);
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const inputMode = react.useMemo(() => {
    if (activeSectionIndex == null) {
      return 'text';
    }
    if (state.sections[activeSectionIndex].contentType === 'letter') {
      return 'text';
    }
    return 'numeric';
  }, [activeSectionIndex, state.sections]);
  const inputHasFocus = inputRef.current && inputRef.current === getActiveElement(document);
  const shouldShowPlaceholder = !inputHasFocus && areAllSectionsEmpty;
  return {
    interactions,
    returnedValue: {
      // Forwarded
      readOnly,
      onBlur: handleContainerBlur,
      onClick: handleInputClick,
      onFocus: handleInputFocus,
      onPaste: handleInputPaste,
      inputRef: handleRef,
      // Additional
      enableAccessibleFieldDOMStructure: false,
      placeholder,
      inputMode,
      autoComplete: 'off',
      value: shouldShowPlaceholder ? '' : valueStr,
      onChange: handleInputChange
    }
  };
};
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/hooks/useField/useField.js












const useField = params => {
  const utils = useUtils_useUtils();
  const {
    internalProps,
    internalProps: {
      unstableFieldRef,
      minutesStep,
      enableAccessibleFieldDOMStructure = false,
      disabled = false,
      readOnly = false
    },
    forwardedProps: {
      onKeyDown,
      error,
      clearable,
      onClear
    },
    fieldValueManager,
    valueManager,
    validator
  } = params;
  const isRtl = (0,RtlProvider/* useRtl */.I)();
  const stateResponse = useFieldState(params);
  const {
    state,
    activeSectionIndex,
    parsedSelectedSections,
    setSelectedSections,
    clearValue,
    clearActiveSection,
    updateSectionValue,
    setTempAndroidValueStr,
    sectionsValueBoundaries,
    localizedDigits,
    timezone
  } = stateResponse;
  const characterEditingResponse = useFieldCharacterEditing({
    sections: state.sections,
    updateSectionValue,
    sectionsValueBoundaries,
    localizedDigits,
    setTempAndroidValueStr,
    timezone
  });
  const {
    resetCharacterQuery
  } = characterEditingResponse;
  const areAllSectionsEmpty = valueManager.areValuesEqual(utils, state.value, valueManager.emptyValue);
  const useFieldTextField = enableAccessibleFieldDOMStructure ? useFieldV7TextField : useFieldV6TextField;
  const sectionOrder = react.useMemo(() => getSectionOrder(state.sections, isRtl && !enableAccessibleFieldDOMStructure), [state.sections, isRtl, enableAccessibleFieldDOMStructure]);
  const {
    returnedValue,
    interactions
  } = useFieldTextField((0,esm_extends/* default */.A)({}, params, stateResponse, characterEditingResponse, {
    areAllSectionsEmpty,
    sectionOrder
  }));
  const handleContainerKeyDown = useEventCallback_useEventCallback(event => {
    onKeyDown?.(event);
    if (disabled) {
      return;
    }
    // eslint-disable-next-line default-case
    switch (true) {
      // Select all
      case (event.ctrlKey || event.metaKey) && String.fromCharCode(event.keyCode) === 'A' && !event.shiftKey && !event.altKey:
        {
          // prevent default to make sure that the next line "select all" while updating
          // the internal state at the same time.
          event.preventDefault();
          setSelectedSections('all');
          break;
        }

      // Move selection to next section
      case event.key === 'ArrowRight':
        {
          event.preventDefault();
          if (parsedSelectedSections == null) {
            setSelectedSections(sectionOrder.startIndex);
          } else if (parsedSelectedSections === 'all') {
            setSelectedSections(sectionOrder.endIndex);
          } else {
            const nextSectionIndex = sectionOrder.neighbors[parsedSelectedSections].rightIndex;
            if (nextSectionIndex !== null) {
              setSelectedSections(nextSectionIndex);
            }
          }
          break;
        }

      // Move selection to previous section
      case event.key === 'ArrowLeft':
        {
          event.preventDefault();
          if (parsedSelectedSections == null) {
            setSelectedSections(sectionOrder.endIndex);
          } else if (parsedSelectedSections === 'all') {
            setSelectedSections(sectionOrder.startIndex);
          } else {
            const nextSectionIndex = sectionOrder.neighbors[parsedSelectedSections].leftIndex;
            if (nextSectionIndex !== null) {
              setSelectedSections(nextSectionIndex);
            }
          }
          break;
        }

      // Reset the value of the selected section
      case event.key === 'Delete':
        {
          event.preventDefault();
          if (readOnly) {
            break;
          }
          if (parsedSelectedSections == null || parsedSelectedSections === 'all') {
            clearValue();
          } else {
            clearActiveSection();
          }
          resetCharacterQuery();
          break;
        }

      // Increment / decrement the selected section value
      case ['ArrowUp', 'ArrowDown', 'Home', 'End', 'PageUp', 'PageDown'].includes(event.key):
        {
          event.preventDefault();
          if (readOnly || activeSectionIndex == null) {
            break;
          }

          // if all sections are selected, mark the currently editing one as selected
          if (parsedSelectedSections === 'all') {
            setSelectedSections(activeSectionIndex);
          }
          const activeSection = state.sections[activeSectionIndex];
          const activeDateManager = fieldValueManager.getActiveDateManager(utils, state, activeSection);
          const newSectionValue = adjustSectionValue(utils, timezone, activeSection, event.key, sectionsValueBoundaries, localizedDigits, activeDateManager.date, {
            minutesStep
          });
          updateSectionValue({
            activeSection,
            newSectionValue,
            shouldGoToNextSection: false
          });
          break;
        }
    }
  });
  useEnhancedEffect_useEnhancedEffect(() => {
    interactions.syncSelectionToDOM();
  });
  const {
    hasValidationError
  } = useValidation({
    props: internalProps,
    validator,
    timezone,
    value: state.value,
    onError: internalProps.onError
  });
  const inputError = react.useMemo(() => {
    // only override when `error` is undefined.
    // in case of multi input fields, the `error` value is provided externally and will always be defined.
    if (error !== undefined) {
      return error;
    }
    return hasValidationError;
  }, [hasValidationError, error]);
  react.useEffect(() => {
    if (!inputError && activeSectionIndex == null) {
      resetCharacterQuery();
    }
  }, [state.referenceValue, activeSectionIndex, inputError]); // eslint-disable-line react-hooks/exhaustive-deps

  // If `tempValueStrAndroid` is still defined for some section when running `useEffect`,
  // Then `onChange` has only been called once, which means the user pressed `Backspace` to reset the section.
  // This causes a small flickering on Android,
  // But we can't use `useEnhancedEffect` which is always called before the second `onChange` call and then would cause false positives.
  react.useEffect(() => {
    if (state.tempValueStrAndroid != null && activeSectionIndex != null) {
      resetCharacterQuery();
      clearActiveSection();
    }
  }, [state.sections]); // eslint-disable-line react-hooks/exhaustive-deps

  react.useImperativeHandle(unstableFieldRef, () => ({
    getSections: () => state.sections,
    getActiveSectionIndex: interactions.getActiveSectionIndexFromDOM,
    setSelectedSections: interactions.setSelectedSections,
    focusField: interactions.focusField,
    isFieldFocused: interactions.isFieldFocused
  }));
  const handleClearValue = useEventCallback_useEventCallback((event, ...args) => {
    event.preventDefault();
    onClear?.(event, ...args);
    clearValue();
    if (!interactions.isFieldFocused()) {
      // setSelectedSections is called internally
      interactions.focusField(0);
    } else {
      setSelectedSections(sectionOrder.startIndex);
    }
  });
  const commonForwardedProps = {
    onKeyDown: handleContainerKeyDown,
    onClear: handleClearValue,
    error: inputError,
    clearable: Boolean(clearable && !areAllSectionsEmpty && !readOnly && !disabled)
  };
  const commonAdditionalProps = {
    disabled,
    readOnly
  };
  return (0,esm_extends/* default */.A)({}, params.forwardedProps, commonForwardedProps, commonAdditionalProps, returnedValue);
};
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/hooks/useSplitFieldProps.js
'use client';




const SHARED_FIELD_INTERNAL_PROP_NAMES = ['value', 'defaultValue', 'referenceDate', 'format', 'formatDensity', 'onChange', 'timezone', 'onError', 'shouldRespectLeadingZeros', 'selectedSections', 'onSelectedSectionsChange', 'unstableFieldRef', 'enableAccessibleFieldDOMStructure', 'disabled', 'readOnly', 'dateSeparator'];
/**
 * Split the props received by the field component into:
 * - `internalProps` which are used by the various hooks called by the field component.
 * - `forwardedProps` which are passed to the underlying component.
 * Note that some forwarded props might be used by the hooks as well.
 * For instance, hooks like `useDateField` need props like `autoFocus` to know how to behave.
 * @template TProps, TValueType
 * @param {TProps} props The props received by the field component.
 * @param {TValueType} valueType The type of the field value ('date', 'time', or 'date-time').
 */
const useSplitFieldProps = (props, valueType) => {
  return react.useMemo(() => {
    const forwardedProps = (0,esm_extends/* default */.A)({}, props);
    const internalProps = {};
    const extractProp = propName => {
      if (forwardedProps.hasOwnProperty(propName)) {
        // @ts-ignore
        internalProps[propName] = forwardedProps[propName];
        delete forwardedProps[propName];
      }
    };
    SHARED_FIELD_INTERNAL_PROP_NAMES.forEach(extractProp);
    if (valueType === 'date') {
      DATE_VALIDATION_PROP_NAMES.forEach(extractProp);
    } else if (valueType === 'time') {
      TIME_VALIDATION_PROP_NAMES.forEach(extractProp);
    } else if (valueType === 'date-time') {
      DATE_VALIDATION_PROP_NAMES.forEach(extractProp);
      TIME_VALIDATION_PROP_NAMES.forEach(extractProp);
      DATE_TIME_VALIDATION_PROP_NAMES.forEach(extractProp);
    }
    return {
      forwardedProps,
      internalProps
    };
  }, [props, valueType]);
};
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/hooks/defaultizedFieldProps.js



const useDefaultizedDateField = props => {
  const utils = useUtils_useUtils();
  const defaultDates = useUtils_useDefaultDates();
  return (0,esm_extends/* default */.A)({}, props, {
    disablePast: props.disablePast ?? false,
    disableFuture: props.disableFuture ?? false,
    format: props.format ?? utils.formats.keyboardDate,
    minDate: date_utils_applyDefaultDate(utils, props.minDate, defaultDates.minDate),
    maxDate: date_utils_applyDefaultDate(utils, props.maxDate, defaultDates.maxDate)
  });
};
const useDefaultizedTimeField = props => {
  const utils = useUtils();
  const ampm = props.ampm ?? utils.is12HourCycleInCurrentLocale();
  const defaultFormat = ampm ? utils.formats.fullTime12h : utils.formats.fullTime24h;
  return _extends({}, props, {
    disablePast: props.disablePast ?? false,
    disableFuture: props.disableFuture ?? false,
    format: props.format ?? defaultFormat
  });
};
const useDefaultizedDateTimeField = props => {
  const utils = useUtils();
  const defaultDates = useDefaultDates();
  const ampm = props.ampm ?? utils.is12HourCycleInCurrentLocale();
  const defaultFormat = ampm ? utils.formats.keyboardDateTime12h : utils.formats.keyboardDateTime24h;
  return _extends({}, props, {
    disablePast: props.disablePast ?? false,
    disableFuture: props.disableFuture ?? false,
    format: props.format ?? defaultFormat,
    disableIgnoringDatePartForTimeValidation: Boolean(props.minDateTime || props.maxDateTime),
    minDate: applyDefaultDate(utils, props.minDateTime ?? props.minDate, defaultDates.minDate),
    maxDate: applyDefaultDate(utils, props.maxDateTime ?? props.maxDate, defaultDates.maxDate),
    minTime: props.minDateTime ?? props.minTime,
    maxTime: props.maxDateTime ?? props.maxTime
  });
};
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/DateField/useDateField.js
'use client';






const useDateField = inProps => {
  const props = useDefaultizedDateField(inProps);
  const {
    forwardedProps,
    internalProps
  } = useSplitFieldProps(props, 'date');
  return useField({
    forwardedProps,
    internalProps,
    valueManager: singleItemValueManager,
    fieldValueManager: singleItemFieldValueManager,
    validator: validateDate,
    valueType: 'date'
  });
};
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/hooks/useClearableField.js
'use client';



const useClearableField_excluded = ["clearable", "onClear", "InputProps", "sx", "slots", "slotProps"],
  useClearableField_excluded2 = ["ownerState"];







const useClearableField = props => {
  const translations = usePickersTranslations();
  const {
      clearable,
      onClear,
      InputProps,
      sx,
      slots,
      slotProps
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, useClearableField_excluded);
  const IconButton = slots?.clearButton ?? IconButton_IconButton;
  // The spread is here to avoid this bug mui/material-ui#34056
  const _useSlotProps = useSlotProps_useSlotProps({
      elementType: IconButton,
      externalSlotProps: slotProps?.clearButton,
      ownerState: {},
      className: 'clearButton',
      additionalProps: {
        title: translations.fieldClearLabel
      }
    }),
    iconButtonProps = (0,objectWithoutPropertiesLoose/* default */.A)(_useSlotProps, useClearableField_excluded2);
  const EndClearIcon = slots?.clearIcon ?? ClearIcon;
  const endClearIconProps = useSlotProps_useSlotProps({
    elementType: EndClearIcon,
    externalSlotProps: slotProps?.clearIcon,
    ownerState: {}
  });
  return (0,esm_extends/* default */.A)({}, other, {
    InputProps: (0,esm_extends/* default */.A)({}, InputProps, {
      endAdornment: /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [clearable && /*#__PURE__*/(0,jsx_runtime.jsx)(InputAdornment_InputAdornment, {
          position: "end",
          sx: {
            marginRight: InputProps?.endAdornment ? -1 : -1.5
          },
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(IconButton, (0,esm_extends/* default */.A)({}, iconButtonProps, {
            onClick: onClear,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(EndClearIcon, (0,esm_extends/* default */.A)({
              fontSize: "small"
            }, endClearIconProps))
          }))
        }), InputProps?.endAdornment]
      })
    }),
    sx: [{
      '& .clearButton': {
        opacity: 1
      },
      '@media (pointer: fine)': {
        '& .clearButton': {
          opacity: 0
        },
        '&:hover, &:focus-within': {
          '.clearButton': {
            opacity: 1
          }
        }
      }
    }, ...(Array.isArray(sx) ? sx : [sx])]
  });
};
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/PickersTextField/pickersTextFieldClasses.js


function getPickersTextFieldUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiPickersTextField', slot);
}
const pickersTextFieldClasses = (0,generateUtilityClasses/* default */.A)('MuiPickersTextField', ['root', 'focused', 'disabled', 'error', 'required']);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/PickersTextField/PickersInputBase/pickersInputBaseClasses.js


function getPickersInputBaseUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiPickersInputBase', slot);
}
const pickersInputBaseClasses = (0,generateUtilityClasses/* default */.A)('MuiPickersInputBase', ['root', 'focused', 'disabled', 'error', 'notchedOutline', 'sectionContent', 'sectionBefore', 'sectionAfter', 'adornedStart', 'adornedEnd', 'input']);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/PickersTextField/PickersOutlinedInput/pickersOutlinedInputClasses.js




function getPickersOutlinedInputUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiPickersOutlinedInput', slot);
}
const pickersOutlinedInputClasses = (0,esm_extends/* default */.A)({}, pickersInputBaseClasses, (0,generateUtilityClasses/* default */.A)('MuiPickersOutlinedInput', ['root', 'notchedOutline', 'input']));
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/PickersTextField/PickersOutlinedInput/Outline.js


const Outline_excluded = ["children", "className", "label", "notched", "shrink"];



const OutlineRoot = (0,styled/* default */.Ay)('fieldset', {
  name: 'MuiPickersOutlinedInput',
  slot: 'NotchedOutline',
  overridesResolver: (props, styles) => styles.notchedOutline
})(({
  theme
}) => {
  const borderColor = theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
  return {
    textAlign: 'left',
    position: 'absolute',
    bottom: 0,
    right: 0,
    top: -5,
    left: 0,
    margin: 0,
    padding: '0 8px',
    pointerEvents: 'none',
    borderRadius: 'inherit',
    borderStyle: 'solid',
    borderWidth: 1,
    overflow: 'hidden',
    minWidth: '0%',
    borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
  };
});
const OutlineLabel = (0,styled/* default */.Ay)('span')(({
  theme
}) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: 'inherit'
}));
const OutlineLegend = (0,styled/* default */.Ay)('legend')(({
  theme
}) => ({
  float: 'unset',
  // Fix conflict with bootstrap
  width: 'auto',
  // Fix conflict with bootstrap
  overflow: 'hidden',
  // Fix Horizontal scroll when label too long
  variants: [{
    props: {
      withLabel: false
    },
    style: {
      padding: 0,
      lineHeight: '11px',
      // sync with `height` in `legend` styles
      transition: theme.transitions.create('width', {
        duration: 150,
        easing: theme.transitions.easing.easeOut
      })
    }
  }, {
    props: {
      withLabel: true
    },
    style: {
      display: 'block',
      // Fix conflict with normalize.css and sanitize.css
      padding: 0,
      height: 11,
      // sync with `lineHeight` in `legend` styles
      fontSize: '0.75em',
      visibility: 'hidden',
      maxWidth: 0.01,
      transition: theme.transitions.create('max-width', {
        duration: 50,
        easing: theme.transitions.easing.easeOut
      }),
      whiteSpace: 'nowrap',
      '& > span': {
        paddingLeft: 5,
        paddingRight: 5,
        display: 'inline-block',
        opacity: 0,
        visibility: 'visible'
      }
    }
  }, {
    props: {
      withLabel: true,
      notched: true
    },
    style: {
      maxWidth: '100%',
      transition: theme.transitions.create('max-width', {
        duration: 100,
        easing: theme.transitions.easing.easeOut,
        delay: 50
      })
    }
  }]
}));

/**
 * @ignore - internal component.
 */
function Outline(props) {
  const {
      className,
      label
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, Outline_excluded);
  const withLabel = label != null && label !== '';
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    withLabel
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(OutlineRoot, (0,esm_extends/* default */.A)({
    "aria-hidden": true,
    className: className
  }, other, {
    ownerState: ownerState,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(OutlineLegend, {
      ownerState: ownerState,
      children: withLabel ? /*#__PURE__*/(0,jsx_runtime.jsx)(OutlineLabel, {
        children: label
      }) :
      /*#__PURE__*/
      // notranslate needed while Google Translate will not fix zero-width space issue
      (0,jsx_runtime.jsx)(OutlineLabel, {
        className: "notranslate",
        children: "\u200B"
      })
    })
  }));
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/capitalize/capitalize.js
var capitalize_capitalize = __webpack_require__(39875);
;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/visuallyHidden/visuallyHidden.js
const visuallyHidden = {
  border: 0,
  clip: 'rect(0 0 0 0)',
  height: '1px',
  margin: '-1px',
  overflow: 'hidden',
  padding: 0,
  position: 'absolute',
  whiteSpace: 'nowrap',
  width: '1px'
};
/* harmony default export */ const visuallyHidden_visuallyHidden = (visuallyHidden);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/PickersSectionList/pickersSectionListClasses.js


function getPickersSectionListUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiPickersSectionList', slot);
}
const pickersSectionListClasses = (0,generateUtilityClasses/* default */.A)('MuiPickersSectionList', ['root', 'section', 'sectionContent']);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/PickersSectionList/PickersSectionList.js
'use client';



const PickersSectionList_excluded = ["slots", "slotProps", "elements", "sectionListRef"];








const PickersSectionListRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiPickersSectionList',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  direction: 'ltr /*! @noflip */',
  outline: 'none'
});
const PickersSectionListSection = (0,styled/* default */.Ay)('span', {
  name: 'MuiPickersSectionList',
  slot: 'Section',
  overridesResolver: (props, styles) => styles.section
})({});
const PickersSectionListSectionSeparator = (0,styled/* default */.Ay)('span', {
  name: 'MuiPickersSectionList',
  slot: 'SectionSeparator',
  overridesResolver: (props, styles) => styles.sectionSeparator
})({
  whiteSpace: 'pre'
});
const PickersSectionListSectionContent = (0,styled/* default */.Ay)('span', {
  name: 'MuiPickersSectionList',
  slot: 'SectionContent',
  overridesResolver: (props, styles) => styles.sectionContent
})({
  outline: 'none'
});
const PickersSectionList_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    section: ['section'],
    sectionContent: ['sectionContent']
  };
  return (0,composeClasses/* default */.A)(slots, getPickersSectionListUtilityClass, classes);
};
function PickersSection(props) {
  const {
    slots,
    slotProps,
    element,
    classes
  } = props;
  const Section = slots?.section ?? PickersSectionListSection;
  const sectionProps = useSlotProps_useSlotProps({
    elementType: Section,
    externalSlotProps: slotProps?.section,
    externalForwardedProps: element.container,
    className: classes.section,
    ownerState: {}
  });
  const SectionContent = slots?.sectionContent ?? PickersSectionListSectionContent;
  const sectionContentProps = useSlotProps_useSlotProps({
    elementType: SectionContent,
    externalSlotProps: slotProps?.sectionContent,
    externalForwardedProps: element.content,
    additionalProps: {
      suppressContentEditableWarning: true
    },
    className: classes.sectionContent,
    ownerState: {}
  });
  const SectionSeparator = slots?.sectionSeparator ?? PickersSectionListSectionSeparator;
  const sectionSeparatorBeforeProps = useSlotProps_useSlotProps({
    elementType: SectionSeparator,
    externalSlotProps: slotProps?.sectionSeparator,
    externalForwardedProps: element.before,
    ownerState: {
      position: 'before'
    }
  });
  const sectionSeparatorAfterProps = useSlotProps_useSlotProps({
    elementType: SectionSeparator,
    externalSlotProps: slotProps?.sectionSeparator,
    externalForwardedProps: element.after,
    ownerState: {
      position: 'after'
    }
  });
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Section, (0,esm_extends/* default */.A)({}, sectionProps, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(SectionSeparator, (0,esm_extends/* default */.A)({}, sectionSeparatorBeforeProps)), /*#__PURE__*/(0,jsx_runtime.jsx)(SectionContent, (0,esm_extends/* default */.A)({}, sectionContentProps)), /*#__PURE__*/(0,jsx_runtime.jsx)(SectionSeparator, (0,esm_extends/* default */.A)({}, sectionSeparatorAfterProps))]
  }));
}
 false ? 0 : void 0;
/**
 * Demos:
 *
 * - [Custom field](https://mui.com/x/react-date-pickers/custom-field/)
 *
 * API:
 *
 * - [PickersSectionList API](https://mui.com/x/api/date-pickers/pickers-section-list/)
 */
const PickersSectionList = /*#__PURE__*/react.forwardRef(function PickersSectionList(inProps, ref) {
  const props = (0,useThemeProps/* default */.A)({
    props: inProps,
    name: 'MuiPickersSectionList'
  });
  const {
      slots,
      slotProps,
      elements,
      sectionListRef
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, PickersSectionList_excluded);
  const classes = PickersSectionList_useUtilityClasses(props);
  const rootRef = react.useRef(null);
  const handleRootRef = useForkRef(ref, rootRef);
  const getRoot = methodName => {
    if (!rootRef.current) {
      throw new Error(`MUI X: Cannot call sectionListRef.${methodName} before the mount of the component.`);
    }
    return rootRef.current;
  };
  react.useImperativeHandle(sectionListRef, () => ({
    getRoot() {
      return getRoot('getRoot');
    },
    getSectionContainer(index) {
      const root = getRoot('getSectionContainer');
      return root.querySelector(`.${pickersSectionListClasses.section}[data-sectionindex="${index}"]`);
    },
    getSectionContent(index) {
      const root = getRoot('getSectionContent');
      return root.querySelector(`.${pickersSectionListClasses.section}[data-sectionindex="${index}"] .${pickersSectionListClasses.sectionContent}`);
    },
    getSectionIndexFromDOMElement(element) {
      const root = getRoot('getSectionIndexFromDOMElement');
      if (element == null || !root.contains(element)) {
        return null;
      }
      let sectionContainer = null;
      if (element.classList.contains(pickersSectionListClasses.section)) {
        sectionContainer = element;
      } else if (element.classList.contains(pickersSectionListClasses.sectionContent)) {
        sectionContainer = element.parentElement;
      }
      if (sectionContainer == null) {
        return null;
      }
      return Number(sectionContainer.dataset.sectionindex);
    }
  }));
  const Root = slots?.root ?? PickersSectionListRoot;
  const rootProps = useSlotProps_useSlotProps({
    elementType: Root,
    externalSlotProps: slotProps?.root,
    externalForwardedProps: other,
    additionalProps: {
      ref: handleRootRef,
      suppressContentEditableWarning: true
    },
    className: classes.root,
    ownerState: {}
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Root, (0,esm_extends/* default */.A)({}, rootProps, {
    children: rootProps.contentEditable ? elements.map(({
      content,
      before,
      after
    }) => `${before.children}${content.children}${after.children}`).join('') : /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
      children: elements.map((element, elementIndex) => /*#__PURE__*/(0,jsx_runtime.jsx)(PickersSection, {
        slots: slots,
        slotProps: slotProps,
        element: element,
        classes: classes
      }, elementIndex))
    })
  }));
});
 false ? 0 : void 0;

;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/PickersTextField/PickersInputBase/PickersInputBase.js


const PickersInputBase_excluded = ["elements", "areAllSectionsEmpty", "defaultValue", "label", "value", "onChange", "id", "autoFocus", "endAdornment", "startAdornment", "renderSuffix", "slots", "slotProps", "contentEditable", "tabIndex", "onInput", "onPaste", "onKeyDown", "fullWidth", "name", "readOnly", "inputProps", "inputRef", "sectionListRef"];














const round = value => Math.round(value * 1e5) / 1e5;
const PickersInputBaseRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiPickersInputBase',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => (0,esm_extends/* default */.A)({}, theme.typography.body1, {
  color: (theme.vars || theme).palette.text.primary,
  cursor: 'text',
  padding: 0,
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  position: 'relative',
  boxSizing: 'border-box',
  // Prevent padding issue with fullWidth.
  letterSpacing: `${round(0.15 / 16)}em`,
  variants: [{
    props: {
      fullWidth: true
    },
    style: {
      width: '100%'
    }
  }]
}));
const PickersInputBaseSectionsContainer = (0,styled/* default */.Ay)(PickersSectionListRoot, {
  name: 'MuiPickersInputBase',
  slot: 'SectionsContainer',
  overridesResolver: (props, styles) => styles.sectionsContainer
})(({
  theme
}) => ({
  padding: '4px 0 5px',
  fontFamily: theme.typography.fontFamily,
  fontSize: 'inherit',
  lineHeight: '1.4375em',
  // 23px
  flexGrow: 1,
  outline: 'none',
  display: 'flex',
  flexWrap: 'nowrap',
  overflow: 'hidden',
  letterSpacing: 'inherit',
  // Baseline behavior
  width: '182px',
  variants: [{
    props: {
      isRtl: true
    },
    style: {
      textAlign: 'right /*! @noflip */'
    }
  }, {
    props: {
      size: 'small'
    },
    style: {
      paddingTop: 1
    }
  }, {
    props: {
      adornedStart: false,
      focused: false,
      filled: false
    },
    style: {
      color: 'currentColor',
      opacity: 0
    }
  }, {
    // Can't use the object notation because label can be null or undefined
    props: ({
      adornedStart,
      focused,
      filled,
      label
    }) => !adornedStart && !focused && !filled && label == null,
    style: theme.vars ? {
      opacity: theme.vars.opacity.inputPlaceholder
    } : {
      opacity: theme.palette.mode === 'light' ? 0.42 : 0.5
    }
  }]
}));
const PickersInputBaseSection = (0,styled/* default */.Ay)(PickersSectionListSection, {
  name: 'MuiPickersInputBase',
  slot: 'Section',
  overridesResolver: (props, styles) => styles.section
})(({
  theme
}) => ({
  fontFamily: theme.typography.fontFamily,
  fontSize: 'inherit',
  letterSpacing: 'inherit',
  lineHeight: '1.4375em',
  // 23px
  display: 'inline-block',
  whiteSpace: 'nowrap'
}));
const PickersInputBaseSectionContent = (0,styled/* default */.Ay)(PickersSectionListSectionContent, {
  name: 'MuiPickersInputBase',
  slot: 'SectionContent',
  overridesResolver: (props, styles) => styles.content
})(({
  theme
}) => ({
  fontFamily: theme.typography.fontFamily,
  lineHeight: '1.4375em',
  // 23px
  letterSpacing: 'inherit',
  width: 'fit-content',
  outline: 'none'
}));
const PickersInputBaseSectionSeparator = (0,styled/* default */.Ay)(PickersSectionListSectionSeparator, {
  name: 'MuiPickersInputBase',
  slot: 'Separator',
  overridesResolver: (props, styles) => styles.separator
})(() => ({
  whiteSpace: 'pre',
  letterSpacing: 'inherit'
}));
const PickersInputBaseInput = (0,styled/* default */.Ay)('input', {
  name: 'MuiPickersInputBase',
  slot: 'Input',
  overridesResolver: (props, styles) => styles.hiddenInput
})((0,esm_extends/* default */.A)({}, visuallyHidden_visuallyHidden));
const PickersInputBase_useUtilityClasses = ownerState => {
  const {
    focused,
    disabled,
    error,
    classes,
    fullWidth,
    readOnly,
    color,
    size,
    endAdornment,
    startAdornment
  } = ownerState;
  const slots = {
    root: ['root', focused && !disabled && 'focused', disabled && 'disabled', readOnly && 'readOnly', error && 'error', fullWidth && 'fullWidth', `color${(0,capitalize_capitalize/* default */.A)(color)}`, size === 'small' && 'inputSizeSmall', Boolean(startAdornment) && 'adornedStart', Boolean(endAdornment) && 'adornedEnd'],
    notchedOutline: ['notchedOutline'],
    input: ['input'],
    sectionsContainer: ['sectionsContainer'],
    sectionContent: ['sectionContent'],
    sectionBefore: ['sectionBefore'],
    sectionAfter: ['sectionAfter']
  };
  return (0,composeClasses/* default */.A)(slots, getPickersInputBaseUtilityClass, classes);
};
/**
 * @ignore - internal component.
 */
const PickersInputBase = /*#__PURE__*/react.forwardRef(function PickersInputBase(inProps, ref) {
  const props = (0,useThemeProps/* default */.A)({
    props: inProps,
    name: 'MuiPickersInputBase'
  });
  const {
      elements,
      areAllSectionsEmpty,
      value,
      onChange,
      id,
      endAdornment,
      startAdornment,
      renderSuffix,
      slots,
      slotProps,
      contentEditable,
      tabIndex,
      onInput,
      onPaste,
      onKeyDown,
      name,
      readOnly,
      inputProps,
      inputRef,
      sectionListRef
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, PickersInputBase_excluded);
  const rootRef = react.useRef(null);
  const handleRootRef = useForkRef(ref, rootRef);
  const handleInputRef = useForkRef(inputProps?.ref, inputRef);
  const isRtl = (0,RtlProvider/* useRtl */.I)();
  const muiFormControl = (0,useFormControl/* default */.A)();
  if (!muiFormControl) {
    throw new Error('MUI X: PickersInputBase should always be used inside a PickersTextField component');
  }
  const handleInputFocus = event => {
    // Fix a bug with IE11 where the focus/blur events are triggered
    // while the component is disabled.
    if (muiFormControl.disabled) {
      event.stopPropagation();
      return;
    }
    muiFormControl.onFocus?.(event);
  };
  react.useEffect(() => {
    if (muiFormControl) {
      muiFormControl.setAdornedStart(Boolean(startAdornment));
    }
  }, [muiFormControl, startAdornment]);
  react.useEffect(() => {
    if (!muiFormControl) {
      return;
    }
    if (areAllSectionsEmpty) {
      muiFormControl.onEmpty();
    } else {
      muiFormControl.onFilled();
    }
  }, [muiFormControl, areAllSectionsEmpty]);
  const ownerState = (0,esm_extends/* default */.A)({}, props, muiFormControl, {
    isRtl
  });
  const classes = PickersInputBase_useUtilityClasses(ownerState);
  const InputRoot = slots?.root || PickersInputBaseRoot;
  const inputRootProps = useSlotProps_useSlotProps({
    elementType: InputRoot,
    externalSlotProps: slotProps?.root,
    externalForwardedProps: other,
    additionalProps: {
      'aria-invalid': muiFormControl.error,
      ref: handleRootRef
    },
    className: classes.root,
    ownerState
  });
  const InputSectionsContainer = slots?.input || PickersInputBaseSectionsContainer;
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(InputRoot, (0,esm_extends/* default */.A)({}, inputRootProps, {
    children: [startAdornment, /*#__PURE__*/(0,jsx_runtime.jsx)(PickersSectionList, {
      sectionListRef: sectionListRef,
      elements: elements,
      contentEditable: contentEditable,
      tabIndex: tabIndex,
      className: classes.sectionsContainer,
      onFocus: handleInputFocus,
      onBlur: muiFormControl.onBlur,
      onInput: onInput,
      onPaste: onPaste,
      onKeyDown: onKeyDown,
      slots: {
        root: InputSectionsContainer,
        section: PickersInputBaseSection,
        sectionContent: PickersInputBaseSectionContent,
        sectionSeparator: PickersInputBaseSectionSeparator
      },
      slotProps: {
        root: {
          ownerState
        },
        sectionContent: {
          className: pickersInputBaseClasses.sectionContent
        },
        sectionSeparator: ({
          position
        }) => ({
          className: position === 'before' ? pickersInputBaseClasses.sectionBefore : pickersInputBaseClasses.sectionAfter
        })
      }
    }), endAdornment, renderSuffix ? renderSuffix((0,esm_extends/* default */.A)({}, muiFormControl)) : null, /*#__PURE__*/(0,jsx_runtime.jsx)(PickersInputBaseInput, (0,esm_extends/* default */.A)({
      name: name,
      className: classes.input,
      value: value,
      onChange: onChange,
      id: id,
      "aria-hidden": "true",
      tabIndex: -1,
      readOnly: readOnly,
      required: muiFormControl.required,
      disabled: muiFormControl.disabled
    }, inputProps, {
      ref: handleInputRef
    }))]
  }));
});
 false ? 0 : void 0;

;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/PickersTextField/PickersOutlinedInput/PickersOutlinedInput.js


const PickersOutlinedInput_excluded = ["label", "autoFocus", "ownerState", "notched"];











const PickersOutlinedInputRoot = (0,styled/* default */.Ay)(PickersInputBaseRoot, {
  name: 'MuiPickersOutlinedInput',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => {
  const borderColor = theme.palette.mode === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)';
  return {
    padding: '0 14px',
    borderRadius: (theme.vars || theme).shape.borderRadius,
    [`&:hover .${pickersOutlinedInputClasses.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    '@media (hover: none)': {
      [`&:hover .${pickersOutlinedInputClasses.notchedOutline}`]: {
        borderColor: theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / 0.23)` : borderColor
      }
    },
    [`&.${pickersOutlinedInputClasses.focused} .${pickersOutlinedInputClasses.notchedOutline}`]: {
      borderStyle: 'solid',
      borderWidth: 2
    },
    [`&.${pickersOutlinedInputClasses.disabled}`]: {
      [`& .${pickersOutlinedInputClasses.notchedOutline}`]: {
        borderColor: (theme.vars || theme).palette.action.disabled
      },
      '*': {
        color: (theme.vars || theme).palette.action.disabled
      }
    },
    [`&.${pickersOutlinedInputClasses.error} .${pickersOutlinedInputClasses.notchedOutline}`]: {
      borderColor: (theme.vars || theme).palette.error.main
    },
    variants: Object.keys((theme.vars ?? theme).palette)
    // @ts-ignore
    .filter(key => (theme.vars ?? theme).palette[key]?.main ?? false).map(color => ({
      props: {
        color
      },
      style: {
        [`&.${pickersOutlinedInputClasses.focused}:not(.${pickersOutlinedInputClasses.error}) .${pickersOutlinedInputClasses.notchedOutline}`]: {
          // @ts-ignore
          borderColor: (theme.vars || theme).palette[color].main
        }
      }
    }))
  };
});
const PickersOutlinedInputSectionsContainer = (0,styled/* default */.Ay)(PickersInputBaseSectionsContainer, {
  name: 'MuiPickersOutlinedInput',
  slot: 'SectionsContainer',
  overridesResolver: (props, styles) => styles.sectionsContainer
})({
  padding: '16.5px 0',
  variants: [{
    props: {
      size: 'small'
    },
    style: {
      padding: '8.5px 0'
    }
  }]
});
const PickersOutlinedInput_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    notchedOutline: ['notchedOutline'],
    input: ['input']
  };
  const composedClasses = (0,composeClasses/* default */.A)(slots, getPickersOutlinedInputUtilityClass, classes);
  return (0,esm_extends/* default */.A)({}, classes, composedClasses);
};
/**
 * @ignore - internal component.
 */
const PickersOutlinedInput = /*#__PURE__*/react.forwardRef(function PickersOutlinedInput(inProps, ref) {
  const props = (0,useThemeProps/* default */.A)({
    props: inProps,
    name: 'MuiPickersOutlinedInput'
  });
  const {
      label,
      ownerState: ownerStateProp,
      notched
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, PickersOutlinedInput_excluded);
  const muiFormControl = (0,useFormControl/* default */.A)();
  const ownerState = (0,esm_extends/* default */.A)({}, props, ownerStateProp, muiFormControl, {
    color: muiFormControl?.color || 'primary'
  });
  const classes = PickersOutlinedInput_useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(PickersInputBase, (0,esm_extends/* default */.A)({
    slots: {
      root: PickersOutlinedInputRoot,
      input: PickersOutlinedInputSectionsContainer
    },
    renderSuffix: state => /*#__PURE__*/(0,jsx_runtime.jsx)(Outline, {
      shrink: Boolean(notched || state.adornedStart || state.focused || state.filled),
      notched: Boolean(notched || state.adornedStart || state.focused || state.filled),
      className: classes.notchedOutline,
      label: label != null && label !== '' && muiFormControl?.required ? /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [label, "\u2009", '*']
      }) : label,
      ownerState: ownerState
    })
  }, other, {
    label: label,
    classes: classes,
    ref: ref
  }));
});
 false ? 0 : void 0;

PickersOutlinedInput.muiName = 'Input';
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/createTheme/createTheme.js + 2 modules
var createTheme = __webpack_require__(82001);
;// ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/createStyled.js


const createStyled_excluded = (/* unused pure expression or super */ null && (["ownerState"])),
  createStyled_excluded2 = (/* unused pure expression or super */ null && (["variants"])),
  createStyled_excluded3 = (/* unused pure expression or super */ null && (["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"]));
/* eslint-disable no-underscore-dangle */






function createStyled_isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

// https://github.com/emotion-js/emotion/blob/26ded6109fcd8ca9875cc2ce4564fee678a3f3c5/packages/styled/src/utils.js#L40
function isStringTag(tag) {
  return typeof tag === 'string' &&
  // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96;
}

// Update /system/styled/#api in case if this changes
function shouldForwardProp(prop) {
  return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
const systemDefaultTheme = (0,createTheme/* default */.A)();
const lowercaseFirstLetter = string => {
  if (!string) {
    return string;
  }
  return string.charAt(0).toLowerCase() + string.slice(1);
};
function resolveTheme({
  defaultTheme,
  theme,
  themeId
}) {
  return createStyled_isEmpty(theme) ? defaultTheme : theme[themeId] || theme;
}
function defaultOverridesResolver(slot) {
  if (!slot) {
    return null;
  }
  return (props, styles) => styles[slot];
}
function processStyleArg(callableStyle, _ref) {
  let {
      ownerState
    } = _ref,
    props = _objectWithoutPropertiesLoose(_ref, createStyled_excluded);
  const resolvedStylesArg = typeof callableStyle === 'function' ? callableStyle(_extends({
    ownerState
  }, props)) : callableStyle;
  if (Array.isArray(resolvedStylesArg)) {
    return resolvedStylesArg.flatMap(resolvedStyle => processStyleArg(resolvedStyle, _extends({
      ownerState
    }, props)));
  }
  if (!!resolvedStylesArg && typeof resolvedStylesArg === 'object' && Array.isArray(resolvedStylesArg.variants)) {
    const {
        variants = []
      } = resolvedStylesArg,
      otherStyles = _objectWithoutPropertiesLoose(resolvedStylesArg, createStyled_excluded2);
    let result = otherStyles;
    variants.forEach(variant => {
      let isMatch = true;
      if (typeof variant.props === 'function') {
        isMatch = variant.props(_extends({
          ownerState
        }, props, ownerState));
      } else {
        Object.keys(variant.props).forEach(key => {
          if ((ownerState == null ? void 0 : ownerState[key]) !== variant.props[key] && props[key] !== variant.props[key]) {
            isMatch = false;
          }
        });
      }
      if (isMatch) {
        if (!Array.isArray(result)) {
          result = [result];
        }
        result.push(typeof variant.style === 'function' ? variant.style(_extends({
          ownerState
        }, props, ownerState)) : variant.style);
      }
    });
    return result;
  }
  return resolvedStylesArg;
}
function createStyled(input = {}) {
  const {
    themeId,
    defaultTheme = systemDefaultTheme,
    rootShouldForwardProp = shouldForwardProp,
    slotShouldForwardProp = shouldForwardProp
  } = input;
  const systemSx = props => {
    return styleFunctionSx(_extends({}, props, {
      theme: resolveTheme(_extends({}, props, {
        defaultTheme,
        themeId
      }))
    }));
  };
  systemSx.__mui_systemSx = true;
  return (tag, inputOptions = {}) => {
    // Filter out the `sx` style function from the previous styled component to prevent unnecessary styles generated by the composite components.
    processStyles(tag, styles => styles.filter(style => !(style != null && style.__mui_systemSx)));
    const {
        name: componentName,
        slot: componentSlot,
        skipVariantsResolver: inputSkipVariantsResolver,
        skipSx: inputSkipSx,
        // TODO v6: remove `lowercaseFirstLetter()` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot))
      } = inputOptions,
      options = _objectWithoutPropertiesLoose(inputOptions, createStyled_excluded3);

    // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.
    const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver :
    // TODO v6: remove `Root` in the next major release
    // For more details: https://github.com/mui/material-ui/pull/37908
    componentSlot && componentSlot !== 'Root' && componentSlot !== 'root' || false;
    const skipSx = inputSkipSx || false;
    let label;
    if (false) {}
    let shouldForwardPropOption = shouldForwardProp;

    // TODO v6: remove `Root` in the next major release
    // For more details: https://github.com/mui/material-ui/pull/37908
    if (componentSlot === 'Root' || componentSlot === 'root') {
      shouldForwardPropOption = rootShouldForwardProp;
    } else if (componentSlot) {
      // any other slot specified
      shouldForwardPropOption = slotShouldForwardProp;
    } else if (isStringTag(tag)) {
      // for string (html) tag, preserve the behavior in emotion & styled-components.
      shouldForwardPropOption = undefined;
    }
    const defaultStyledResolver = styledEngineStyled(tag, _extends({
      shouldForwardProp: shouldForwardPropOption,
      label
    }, options));
    const transformStyleArg = stylesArg => {
      // On the server Emotion doesn't use React.forwardRef for creating components, so the created
      // component stays as a function. This condition makes sure that we do not interpolate functions
      // which are basically components used as a selectors.
      if (typeof stylesArg === 'function' && stylesArg.__emotion_real !== stylesArg || isPlainObject(stylesArg)) {
        return props => processStyleArg(stylesArg, _extends({}, props, {
          theme: resolveTheme({
            theme: props.theme,
            defaultTheme,
            themeId
          })
        }));
      }
      return stylesArg;
    };
    const muiStyledResolver = (styleArg, ...expressions) => {
      let transformedStyleArg = transformStyleArg(styleArg);
      const expressionsWithDefaultTheme = expressions ? expressions.map(transformStyleArg) : [];
      if (componentName && overridesResolver) {
        expressionsWithDefaultTheme.push(props => {
          const theme = resolveTheme(_extends({}, props, {
            defaultTheme,
            themeId
          }));
          if (!theme.components || !theme.components[componentName] || !theme.components[componentName].styleOverrides) {
            return null;
          }
          const styleOverrides = theme.components[componentName].styleOverrides;
          const resolvedStyleOverrides = {};
          // TODO: v7 remove iteration and use `resolveStyleArg(styleOverrides[slot])` directly
          Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
            resolvedStyleOverrides[slotKey] = processStyleArg(slotStyle, _extends({}, props, {
              theme
            }));
          });
          return overridesResolver(props, resolvedStyleOverrides);
        });
      }
      if (componentName && !skipVariantsResolver) {
        expressionsWithDefaultTheme.push(props => {
          var _theme$components;
          const theme = resolveTheme(_extends({}, props, {
            defaultTheme,
            themeId
          }));
          const themeVariants = theme == null || (_theme$components = theme.components) == null || (_theme$components = _theme$components[componentName]) == null ? void 0 : _theme$components.variants;
          return processStyleArg({
            variants: themeVariants
          }, _extends({}, props, {
            theme
          }));
        });
      }
      if (!skipSx) {
        expressionsWithDefaultTheme.push(systemSx);
      }
      const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
        const placeholders = new Array(numOfCustomFnsApplied).fill('');
        // If the type is array, than we need to add placeholders in the template for the overrides, variants and the sx styles.
        transformedStyleArg = [...styleArg, ...placeholders];
        transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
      }
      const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
      if (false) {}
      if (tag.muiName) {
        Component.muiName = tag.muiName;
      }
      return Component;
    };
    if (defaultStyledResolver.withConfig) {
      muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
    }
    return muiStyledResolver;
  };
}
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/PickersTextField/PickersFilledInput/pickersFilledInputClasses.js




function getPickersFilledInputUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiPickersFilledInput', slot);
}
const pickersFilledInputClasses = (0,esm_extends/* default */.A)({}, pickersInputBaseClasses, (0,generateUtilityClasses/* default */.A)('MuiPickersFilledInput', ['root', 'underline', 'input']));
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/PickersTextField/PickersFilledInput/PickersFilledInput.js


const PickersFilledInput_excluded = ["label", "autoFocus", "disableUnderline", "ownerState"];











const PickersFilledInputRoot = (0,styled/* default */.Ay)(PickersInputBaseRoot, {
  name: 'MuiPickersFilledInput',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root,
  shouldForwardProp: prop => shouldForwardProp(prop) && prop !== 'disableUnderline'
})(({
  theme
}) => {
  const light = theme.palette.mode === 'light';
  const bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  const backgroundColor = light ? 'rgba(0, 0, 0, 0.06)' : 'rgba(255, 255, 255, 0.09)';
  const hoverBackground = light ? 'rgba(0, 0, 0, 0.09)' : 'rgba(255, 255, 255, 0.13)';
  const disabledBackground = light ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)';
  return {
    backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor,
    borderTopLeftRadius: (theme.vars || theme).shape.borderRadius,
    borderTopRightRadius: (theme.vars || theme).shape.borderRadius,
    transition: theme.transitions.create('background-color', {
      duration: theme.transitions.duration.shorter,
      easing: theme.transitions.easing.easeOut
    }),
    '&:hover': {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.hoverBg : hoverBackground,
      // Reset on touch devices, it doesn't add specificity
      '@media (hover: none)': {
        backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
      }
    },
    [`&.${pickersFilledInputClasses.focused}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.bg : backgroundColor
    },
    [`&.${pickersFilledInputClasses.disabled}`]: {
      backgroundColor: theme.vars ? theme.vars.palette.FilledInput.disabledBg : disabledBackground
    },
    variants: [...Object.keys((theme.vars ?? theme).palette)
    // @ts-ignore
    .filter(key => (theme.vars ?? theme).palette[key].main).map(color => ({
      props: {
        color,
        disableUnderline: false
      },
      style: {
        '&::after': {
          // @ts-ignore
          borderBottom: `2px solid ${(theme.vars || theme).palette[color]?.main}`
        }
      }
    })), {
      props: {
        disableUnderline: false
      },
      style: {
        '&::after': {
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '""',
          position: 'absolute',
          right: 0,
          transform: 'scaleX(0)',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          }),
          pointerEvents: 'none' // Transparent to the hover style.
        },
        [`&.${pickersFilledInputClasses.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: 'scaleX(1) translateX(0)'
        },
        [`&.${pickersFilledInputClasses.error}`]: {
          '&:before, &:after': {
            borderBottomColor: (theme.vars || theme).palette.error.main
          }
        },
        '&::before': {
          borderBottom: `1px solid ${theme.vars ? `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})` : bottomLineColor}`,
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '"\\00a0"',
          position: 'absolute',
          right: 0,
          transition: theme.transitions.create('border-bottom-color', {
            duration: theme.transitions.duration.shorter
          }),
          pointerEvents: 'none' // Transparent to the hover style.
        },
        [`&:hover:not(.${pickersFilledInputClasses.disabled}, .${pickersFilledInputClasses.error}):before`]: {
          borderBottom: `1px solid ${(theme.vars || theme).palette.text.primary}`
        },
        [`&.${pickersFilledInputClasses.disabled}:before`]: {
          borderBottomStyle: 'dotted'
        }
      }
    }, {
      props: ({
        startAdornment
      }) => !!startAdornment,
      style: {
        paddingLeft: 12
      }
    }, {
      props: ({
        endAdornment
      }) => !!endAdornment,
      style: {
        paddingRight: 12
      }
    }]
  };
});
const PickersFilledSectionsContainer = (0,styled/* default */.Ay)(PickersInputBaseSectionsContainer, {
  name: 'MuiPickersFilledInput',
  slot: 'sectionsContainer',
  overridesResolver: (props, styles) => styles.sectionsContainer
})({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12,
  variants: [{
    props: {
      size: 'small'
    },
    style: {
      paddingTop: 21,
      paddingBottom: 4
    }
  }, {
    props: ({
      startAdornment
    }) => !!startAdornment,
    style: {
      paddingLeft: 0
    }
  }, {
    props: ({
      endAdornment
    }) => !!endAdornment,
    style: {
      paddingRight: 0
    }
  }, {
    props: {
      hiddenLabel: true
    },
    style: {
      paddingTop: 16,
      paddingBottom: 17
    }
  }, {
    props: {
      hiddenLabel: true,
      size: 'small'
    },
    style: {
      paddingTop: 8,
      paddingBottom: 9
    }
  }]
});
const PickersFilledInput_useUtilityClasses = ownerState => {
  const {
    classes,
    disableUnderline
  } = ownerState;
  const slots = {
    root: ['root', !disableUnderline && 'underline'],
    input: ['input']
  };
  const composedClasses = (0,composeClasses/* default */.A)(slots, getPickersFilledInputUtilityClass, classes);
  return (0,esm_extends/* default */.A)({}, classes, composedClasses);
};
/**
 * @ignore - internal component.
 */
const PickersFilledInput = /*#__PURE__*/react.forwardRef(function PickersFilledInput(inProps, ref) {
  const props = (0,useThemeProps/* default */.A)({
    props: inProps,
    name: 'MuiPickersFilledInput'
  });
  const {
      label,
      disableUnderline = false,
      ownerState: ownerStateProp
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, PickersFilledInput_excluded);
  const muiFormControl = (0,useFormControl/* default */.A)();
  const ownerState = (0,esm_extends/* default */.A)({}, props, ownerStateProp, muiFormControl, {
    color: muiFormControl?.color || 'primary'
  });
  const classes = PickersFilledInput_useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(PickersInputBase, (0,esm_extends/* default */.A)({
    slots: {
      root: PickersFilledInputRoot,
      input: PickersFilledSectionsContainer
    },
    slotProps: {
      root: {
        disableUnderline
      }
    }
  }, other, {
    label: label,
    classes: classes,
    ref: ref
  }));
});
 false ? 0 : void 0;

PickersFilledInput.muiName = 'Input';
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/PickersTextField/PickersInput/pickersInputClasses.js




function getPickersInputUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiPickersFilledInput', slot);
}
const pickersInputClasses = (0,esm_extends/* default */.A)({}, pickersInputBaseClasses, (0,generateUtilityClasses/* default */.A)('MuiPickersInput', ['root', 'input']));
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/PickersTextField/PickersInput/PickersInput.js


const PickersInput_excluded = ["label", "autoFocus", "disableUnderline", "ownerState"];










const PickersInputRoot = (0,styled/* default */.Ay)(PickersInputBaseRoot, {
  name: 'MuiPickersInput',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})(({
  theme
}) => {
  const light = theme.palette.mode === 'light';
  let bottomLineColor = light ? 'rgba(0, 0, 0, 0.42)' : 'rgba(255, 255, 255, 0.7)';
  if (theme.vars) {
    bottomLineColor = `rgba(${theme.vars.palette.common.onBackgroundChannel} / ${theme.vars.opacity.inputUnderline})`;
  }
  return {
    'label + &': {
      marginTop: 16
    },
    variants: [...Object.keys((theme.vars ?? theme).palette)
    // @ts-ignore
    .filter(key => (theme.vars ?? theme).palette[key].main).map(color => ({
      props: {
        color
      },
      style: {
        '&::after': {
          // @ts-ignore
          borderBottom: `2px solid ${(theme.vars || theme).palette[color].main}`
        }
      }
    })), {
      props: {
        disableUnderline: false
      },
      style: {
        '&::after': {
          background: 'red',
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '""',
          position: 'absolute',
          right: 0,
          transform: 'scaleX(0)',
          transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shorter,
            easing: theme.transitions.easing.easeOut
          }),
          pointerEvents: 'none' // Transparent to the hover style.
        },
        [`&.${pickersInputClasses.focused}:after`]: {
          // translateX(0) is a workaround for Safari transform scale bug
          // See https://github.com/mui/material-ui/issues/31766
          transform: 'scaleX(1) translateX(0)'
        },
        [`&.${pickersInputClasses.error}`]: {
          '&:before, &:after': {
            borderBottomColor: (theme.vars || theme).palette.error.main
          }
        },
        '&::before': {
          borderBottom: `1px solid ${bottomLineColor}`,
          left: 0,
          bottom: 0,
          // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
          content: '"\\00a0"',
          position: 'absolute',
          right: 0,
          transition: theme.transitions.create('border-bottom-color', {
            duration: theme.transitions.duration.shorter
          }),
          pointerEvents: 'none' // Transparent to the hover style.
        },
        [`&:hover:not(.${pickersInputClasses.disabled}, .${pickersInputClasses.error}):before`]: {
          borderBottom: `2px solid ${(theme.vars || theme).palette.text.primary}`,
          // Reset on touch devices, it doesn't add specificity
          '@media (hover: none)': {
            borderBottom: `1px solid ${bottomLineColor}`
          }
        },
        [`&.${pickersInputClasses.disabled}:before`]: {
          borderBottomStyle: 'dotted'
        }
      }
    }]
  };
});
const PickersInput_useUtilityClasses = ownerState => {
  const {
    classes,
    disableUnderline
  } = ownerState;
  const slots = {
    root: ['root', !disableUnderline && 'underline'],
    input: ['input']
  };
  const composedClasses = (0,composeClasses/* default */.A)(slots, getPickersInputUtilityClass, classes);
  return (0,esm_extends/* default */.A)({}, classes, composedClasses);
};
/**
 * @ignore - internal component.
 */
const PickersInput = /*#__PURE__*/react.forwardRef(function PickersInput(inProps, ref) {
  const props = (0,useThemeProps/* default */.A)({
    props: inProps,
    name: 'MuiPickersInput'
  });
  const {
      label,
      disableUnderline = false,
      ownerState: ownerStateProp
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, PickersInput_excluded);
  const muiFormControl = (0,useFormControl/* default */.A)();
  const ownerState = (0,esm_extends/* default */.A)({}, props, ownerStateProp, muiFormControl, {
    disableUnderline,
    color: muiFormControl?.color || 'primary'
  });
  const classes = PickersInput_useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(PickersInputBase, (0,esm_extends/* default */.A)({
    slots: {
      root: PickersInputRoot
    }
  }, other, {
    label: label,
    classes: classes,
    ref: ref
  }));
});
 false ? 0 : void 0;

PickersInput.muiName = 'Input';
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/PickersTextField/PickersTextField.js
'use client';



const PickersTextField_excluded = ["onFocus", "onBlur", "className", "color", "disabled", "error", "variant", "required", "InputProps", "inputProps", "inputRef", "sectionListRef", "elements", "areAllSectionsEmpty", "onClick", "onKeyDown", "onKeyUp", "onPaste", "onInput", "endAdornment", "startAdornment", "tabIndex", "contentEditable", "focused", "value", "onChange", "fullWidth", "id", "name", "helperText", "FormHelperTextProps", "label", "InputLabelProps"];
















const VARIANT_COMPONENT = {
  standard: PickersInput,
  filled: PickersFilledInput,
  outlined: PickersOutlinedInput
};
const PickersTextFieldRoot = (0,styled/* default */.Ay)(FormControl_FormControl, {
  name: 'MuiPickersTextField',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({});
const PickersTextField_useUtilityClasses = ownerState => {
  const {
    focused,
    disabled,
    classes,
    required
  } = ownerState;
  const slots = {
    root: ['root', focused && !disabled && 'focused', disabled && 'disabled', required && 'required']
  };
  return (0,composeClasses/* default */.A)(slots, getPickersTextFieldUtilityClass, classes);
};
const PickersTextField = /*#__PURE__*/react.forwardRef(function PickersTextField(inProps, ref) {
  const props = (0,useThemeProps/* default */.A)({
    props: inProps,
    name: 'MuiPickersTextField'
  });
  const {
      // Props used by FormControl
      onFocus,
      onBlur,
      className,
      color = 'primary',
      disabled = false,
      error = false,
      variant = 'outlined',
      required = false,
      // Props used by PickersInput
      InputProps,
      inputProps,
      inputRef,
      sectionListRef,
      elements,
      areAllSectionsEmpty,
      onClick,
      onKeyDown,
      onKeyUp,
      onPaste,
      onInput,
      endAdornment,
      startAdornment,
      tabIndex,
      contentEditable,
      focused,
      value,
      onChange,
      fullWidth,
      id: idProp,
      name,
      // Props used by FormHelperText
      helperText,
      FormHelperTextProps,
      // Props used by InputLabel
      label,
      InputLabelProps
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, PickersTextField_excluded);
  const rootRef = react.useRef(null);
  const handleRootRef = useForkRef(ref, rootRef);
  const id = useId(idProp);
  const helperTextId = helperText && id ? `${id}-helper-text` : undefined;
  const inputLabelId = label && id ? `${id}-label` : undefined;
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    color,
    disabled,
    error,
    focused,
    required,
    variant
  });
  const classes = PickersTextField_useUtilityClasses(ownerState);
  const PickersInputComponent = VARIANT_COMPONENT[variant];
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(PickersTextFieldRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    ref: handleRootRef,
    focused: focused,
    onFocus: onFocus,
    onBlur: onBlur,
    disabled: disabled,
    variant: variant,
    error: error,
    color: color,
    fullWidth: fullWidth,
    required: required,
    ownerState: ownerState
  }, other, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(InputLabel_InputLabel, (0,esm_extends/* default */.A)({
      htmlFor: id,
      id: inputLabelId
    }, InputLabelProps, {
      children: label
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(PickersInputComponent, (0,esm_extends/* default */.A)({
      elements: elements,
      areAllSectionsEmpty: areAllSectionsEmpty,
      onClick: onClick,
      onKeyDown: onKeyDown,
      onKeyUp: onKeyUp,
      onInput: onInput,
      onPaste: onPaste,
      endAdornment: endAdornment,
      startAdornment: startAdornment,
      tabIndex: tabIndex,
      contentEditable: contentEditable,
      value: value,
      onChange: onChange,
      id: id,
      fullWidth: fullWidth,
      inputProps: inputProps,
      inputRef: inputRef,
      sectionListRef: sectionListRef,
      label: label,
      name: name,
      role: "group",
      "aria-labelledby": inputLabelId,
      "aria-describedby": helperTextId,
      "aria-live": helperTextId ? 'polite' : undefined
    }, InputProps)), helperText && /*#__PURE__*/(0,jsx_runtime.jsx)(FormHelperText/* default */.A, (0,esm_extends/* default */.A)({
      id: helperTextId
    }, FormHelperTextProps, {
      children: helperText
    }))]
  }));
});
 false ? 0 : void 0;

;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/utils/convertFieldResponseIntoMuiTextFieldProps.js


const convertFieldResponseIntoMuiTextFieldProps_excluded = ["enableAccessibleFieldDOMStructure"],
  convertFieldResponseIntoMuiTextFieldProps_excluded2 = ["InputProps", "readOnly"],
  convertFieldResponseIntoMuiTextFieldProps_excluded3 = ["onPaste", "onKeyDown", "inputMode", "readOnly", "InputProps", "inputProps", "inputRef"];
const convertFieldResponseIntoMuiTextFieldProps = _ref => {
  let {
      enableAccessibleFieldDOMStructure
    } = _ref,
    fieldResponse = (0,objectWithoutPropertiesLoose/* default */.A)(_ref, convertFieldResponseIntoMuiTextFieldProps_excluded);
  if (enableAccessibleFieldDOMStructure) {
    const {
        InputProps,
        readOnly
      } = fieldResponse,
      other = (0,objectWithoutPropertiesLoose/* default */.A)(fieldResponse, convertFieldResponseIntoMuiTextFieldProps_excluded2);
    return (0,esm_extends/* default */.A)({}, other, {
      InputProps: (0,esm_extends/* default */.A)({}, InputProps ?? {}, {
        readOnly
      })
    });
  }
  const {
      onPaste,
      onKeyDown,
      inputMode,
      readOnly,
      InputProps,
      inputProps,
      inputRef
    } = fieldResponse,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(fieldResponse, convertFieldResponseIntoMuiTextFieldProps_excluded3);
  return (0,esm_extends/* default */.A)({}, other, {
    InputProps: (0,esm_extends/* default */.A)({}, InputProps ?? {}, {
      readOnly
    }),
    inputProps: (0,esm_extends/* default */.A)({}, inputProps ?? {}, {
      inputMode,
      onPaste,
      onKeyDown,
      ref: inputRef
    })
  });
};
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/DateField/DateField.js
'use client';



const DateField_excluded = ["slots", "slotProps", "InputProps", "inputProps"];











/**
 * Demos:
 *
 * - [DateField](http://mui.com/x/react-date-pickers/date-field/)
 * - [Fields](https://mui.com/x/react-date-pickers/fields/)
 *
 * API:
 *
 * - [DateField API](https://mui.com/x/api/date-pickers/date-field/)
 */
const DateField = /*#__PURE__*/react.forwardRef(function DateField(inProps, inRef) {
  const themeProps = (0,useThemeProps/* default */.A)({
    props: inProps,
    name: 'MuiDateField'
  });
  const {
      slots,
      slotProps,
      InputProps,
      inputProps
    } = themeProps,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(themeProps, DateField_excluded);
  const ownerState = themeProps;
  const TextField = slots?.textField ?? (inProps.enableAccessibleFieldDOMStructure ? PickersTextField : TextField_TextField);
  const textFieldProps = useSlotProps_useSlotProps({
    elementType: TextField,
    externalSlotProps: slotProps?.textField,
    externalForwardedProps: other,
    additionalProps: {
      ref: inRef
    },
    ownerState
  });

  // TODO: Remove when mui/material-ui#35088 will be merged
  textFieldProps.inputProps = (0,esm_extends/* default */.A)({}, inputProps, textFieldProps.inputProps);
  textFieldProps.InputProps = (0,esm_extends/* default */.A)({}, InputProps, textFieldProps.InputProps);
  const fieldResponse = useDateField(textFieldProps);
  const convertedFieldResponse = convertFieldResponseIntoMuiTextFieldProps(fieldResponse);
  const processedFieldProps = useClearableField((0,esm_extends/* default */.A)({}, convertedFieldResponse, {
    slots,
    slotProps
  }));
  return /*#__PURE__*/(0,jsx_runtime.jsx)(TextField, (0,esm_extends/* default */.A)({}, processedFieldProps));
});
 false ? 0 : void 0;

;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/DateCalendar/useIsDateDisabled.js
'use client';




const useIsDateDisabled = ({
  shouldDisableDate,
  shouldDisableMonth,
  shouldDisableYear,
  minDate,
  maxDate,
  disableFuture,
  disablePast,
  timezone
}) => {
  const adapter = useLocalizationContext();
  return react.useCallback(day => validateDate({
    adapter,
    value: day,
    timezone,
    props: {
      shouldDisableDate,
      shouldDisableMonth,
      shouldDisableYear,
      minDate,
      maxDate,
      disableFuture,
      disablePast
    }
  }) !== null, [adapter, shouldDisableDate, shouldDisableMonth, shouldDisableYear, minDate, maxDate, disableFuture, disablePast, timezone]);
};
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/DateCalendar/useCalendarState.js
'use client';








const createCalendarStateReducer = (reduceAnimations, disableSwitchToMonthOnDayFocus, utils) => (state, action) => {
  switch (action.type) {
    case 'changeMonth':
      return (0,esm_extends/* default */.A)({}, state, {
        slideDirection: action.direction,
        currentMonth: action.newMonth,
        isMonthSwitchingAnimating: !reduceAnimations
      });
    case 'changeMonthTimezone':
      {
        const newTimezone = action.newTimezone;
        if (utils.getTimezone(state.currentMonth) === newTimezone) {
          return state;
        }
        let newCurrentMonth = utils.setTimezone(state.currentMonth, newTimezone);
        if (utils.getMonth(newCurrentMonth) !== utils.getMonth(state.currentMonth)) {
          newCurrentMonth = utils.setMonth(newCurrentMonth, utils.getMonth(state.currentMonth));
        }
        return (0,esm_extends/* default */.A)({}, state, {
          currentMonth: newCurrentMonth
        });
      }
    case 'finishMonthSwitchingAnimation':
      return (0,esm_extends/* default */.A)({}, state, {
        isMonthSwitchingAnimating: false
      });
    case 'changeFocusedDay':
      {
        if (state.focusedDay != null && action.focusedDay != null && utils.isSameDay(action.focusedDay, state.focusedDay)) {
          return state;
        }
        const needMonthSwitch = action.focusedDay != null && !disableSwitchToMonthOnDayFocus && !utils.isSameMonth(state.currentMonth, action.focusedDay);
        return (0,esm_extends/* default */.A)({}, state, {
          focusedDay: action.focusedDay,
          isMonthSwitchingAnimating: needMonthSwitch && !reduceAnimations && !action.withoutMonthSwitchingAnimation,
          currentMonth: needMonthSwitch ? utils.startOfMonth(action.focusedDay) : state.currentMonth,
          slideDirection: action.focusedDay != null && utils.isAfterDay(action.focusedDay, state.currentMonth) ? 'left' : 'right'
        });
      }
    default:
      throw new Error('missing support');
  }
};
const useCalendarState = params => {
  const {
    value,
    referenceDate: referenceDateProp,
    disableFuture,
    disablePast,
    disableSwitchToMonthOnDayFocus = false,
    maxDate,
    minDate,
    onMonthChange,
    reduceAnimations,
    shouldDisableDate,
    timezone
  } = params;
  const utils = useUtils_useUtils();
  const reducerFn = react.useRef(createCalendarStateReducer(Boolean(reduceAnimations), disableSwitchToMonthOnDayFocus, utils)).current;
  const referenceDate = react.useMemo(() => {
    return singleItemValueManager.getInitialReferenceValue({
      value,
      utils,
      timezone,
      props: params,
      referenceDate: referenceDateProp,
      granularity: SECTION_TYPE_GRANULARITY.day
    });
  },
  // We want the `referenceDate` to update on prop and `timezone` change (https://github.com/mui/mui-x/issues/10804)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  [referenceDateProp, timezone]);
  const [calendarState, dispatch] = react.useReducer(reducerFn, {
    isMonthSwitchingAnimating: false,
    focusedDay: referenceDate,
    currentMonth: utils.startOfMonth(referenceDate),
    slideDirection: 'left'
  });

  // Ensure that `calendarState.currentMonth` timezone is updated when `referenceDate` (or timezone changes)
  // https://github.com/mui/mui-x/issues/10804
  react.useEffect(() => {
    dispatch({
      type: 'changeMonthTimezone',
      newTimezone: utils.getTimezone(referenceDate)
    });
  }, [referenceDate, utils]);
  const handleChangeMonth = react.useCallback(payload => {
    dispatch((0,esm_extends/* default */.A)({
      type: 'changeMonth'
    }, payload));
    if (onMonthChange) {
      onMonthChange(payload.newMonth);
    }
  }, [onMonthChange]);
  const changeMonth = react.useCallback(newDate => {
    const newDateRequested = newDate;
    if (utils.isSameMonth(newDateRequested, calendarState.currentMonth)) {
      return;
    }
    handleChangeMonth({
      newMonth: utils.startOfMonth(newDateRequested),
      direction: utils.isAfterDay(newDateRequested, calendarState.currentMonth) ? 'left' : 'right'
    });
  }, [calendarState.currentMonth, handleChangeMonth, utils]);
  const isDateDisabled = useIsDateDisabled({
    shouldDisableDate,
    minDate,
    maxDate,
    disableFuture,
    disablePast,
    timezone
  });
  const onMonthSwitchingAnimationEnd = react.useCallback(() => {
    dispatch({
      type: 'finishMonthSwitchingAnimation'
    });
  }, []);
  const changeFocusedDay = useEventCallback_useEventCallback((newFocusedDate, withoutMonthSwitchingAnimation) => {
    if (!isDateDisabled(newFocusedDate)) {
      dispatch({
        type: 'changeFocusedDay',
        focusedDay: newFocusedDate,
        withoutMonthSwitchingAnimation
      });
    }
  });
  return {
    referenceDate,
    calendarState,
    changeMonth,
    changeFocusedDay,
    isDateDisabled,
    onMonthSwitchingAnimationEnd,
    handleChangeMonth
  };
};
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/DateCalendar/pickersFadeTransitionGroupClasses.js

const getPickersFadeTransitionGroupUtilityClass = slot => (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiPickersFadeTransitionGroup', slot);
const pickersFadeTransitionGroupClasses = (0,generateUtilityClasses/* default */.A)('MuiPickersFadeTransitionGroup', ['root']);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/DateCalendar/PickersFadeTransitionGroup.js








const PickersFadeTransitionGroup_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.A)(slots, getPickersFadeTransitionGroupUtilityClass, classes);
};
const PickersFadeTransitionGroupRoot = (0,styled/* default */.Ay)(TransitionGroup/* default */.A, {
  name: 'MuiPickersFadeTransitionGroup',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})({
  display: 'block',
  position: 'relative'
});

/**
 * @ignore - do not document.
 */
function PickersFadeTransitionGroup(inProps) {
  const props = (0,useThemeProps/* default */.A)({
    props: inProps,
    name: 'MuiPickersFadeTransitionGroup'
  });
  const {
    children,
    className,
    reduceAnimations,
    transKey
  } = props;
  const classes = PickersFadeTransitionGroup_useUtilityClasses(props);
  const theme = useTheme_useTheme();
  if (reduceAnimations) {
    return children;
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(PickersFadeTransitionGroupRoot, {
    className: (0,clsx/* default */.A)(classes.root, className),
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(Fade_Fade, {
      appear: false,
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: {
        appear: theme.transitions.duration.enteringScreen,
        enter: theme.transitions.duration.enteringScreen,
        exit: 0
      },
      children: children
    }, transKey)
  });
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/clamp/clamp.js
var clamp = __webpack_require__(52937);
;// ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/colorManipulator.js

/* eslint-disable @typescript-eslint/naming-convention */

/**
 * Returns a number whose value is limited to the given range.
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clampWrapper(value, min = 0, max = 1) {
  if (false) {}
  return (0,clamp/* default */.A)(value, min, max);
}

/**
 * Converts a color from CSS hex format to CSS rgb format.
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */
function hexToRgb(color) {
  color = color.slice(1);
  const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
  let colors = color.match(re);
  if (colors && colors[0].length === 1) {
    colors = colors.map(n => n + n);
  }
  return colors ? `rgb${colors.length === 4 ? 'a' : ''}(${colors.map((n, index) => {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', ')})` : '';
}
function intToHex(int) {
  const hex = int.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */
function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }
  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }
  const marker = color.indexOf('(');
  const type = color.substring(0, marker);
  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(type) === -1) {
    throw new Error( false ? 0 : (0,formatMuiErrorMessage/* default */.A)(9, color));
  }
  let values = color.substring(marker + 1, color.length - 1);
  let colorSpace;
  if (type === 'color') {
    values = values.split(' ');
    colorSpace = values.shift();
    if (values.length === 4 && values[3].charAt(0) === '/') {
      values[3] = values[3].slice(1);
    }
    if (['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(colorSpace) === -1) {
      throw new Error( false ? 0 : (0,formatMuiErrorMessage/* default */.A)(10, colorSpace));
    }
  } else {
    values = values.split(',');
  }
  values = values.map(value => parseFloat(value));
  return {
    type,
    values,
    colorSpace
  };
}

/**
 * Returns a channel created from the input color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {string} - The channel for the color, that can be used in rgba or hsla colors
 */
const colorChannel = color => {
  const decomposedColor = decomposeColor(color);
  return decomposedColor.values.slice(0, 3).map((val, idx) => decomposedColor.type.indexOf('hsl') !== -1 && idx !== 0 ? `${val}%` : val).join(' ');
};
const private_safeColorChannel = (color, warning) => {
  try {
    return colorChannel(color);
  } catch (error) {
    if (warning && "production" !== 'production') {}
    return color;
  }
};

/**
 * Converts a color object with type and values to a string.
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla', 'color'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */
function recomposeColor(color) {
  const {
    type,
    colorSpace
  } = color;
  let {
    values
  } = color;
  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map((n, i) => i < 3 ? parseInt(n, 10) : n);
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = `${values[1]}%`;
    values[2] = `${values[2]}%`;
  }
  if (type.indexOf('color') !== -1) {
    values = `${colorSpace} ${values.join(' ')}`;
  } else {
    values = `${values.join(', ')}`;
  }
  return `${type}(${values})`;
}

/**
 * Converts a color from CSS rgb format to CSS hex format.
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */
function rgbToHex(color) {
  // Idempotent
  if (color.indexOf('#') === 0) {
    return color;
  }
  const {
    values
  } = decomposeColor(color);
  return `#${values.map((n, i) => intToHex(i === 3 ? Math.round(255 * n) : n)).join('')}`;
}

/**
 * Converts a color from hsl format to rgb format.
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */
function hslToRgb(color) {
  color = decomposeColor(color);
  const {
    values
  } = color;
  const h = values[0];
  const s = values[1] / 100;
  const l = values[2] / 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  let type = 'rgb';
  const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }
  return recomposeColor({
    type,
    values: rgb
  });
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */
function getLuminance(color) {
  color = decomposeColor(color);
  let rgb = color.type === 'hsl' || color.type === 'hsla' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(val => {
    if (color.type !== 'color') {
      val /= 255; // normalized
    }
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });

  // Truncate at 3 digits
  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}

/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */
function getContrastRatio(foreground, background) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}

/**
 * Sets the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} value - value to set the alpha channel to in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function alpha(color, value) {
  color = decomposeColor(color);
  value = clampWrapper(value);
  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }
  if (color.type === 'color') {
    color.values[3] = `/${value}`;
  } else {
    color.values[3] = value;
  }
  return recomposeColor(color);
}
function private_safeAlpha(color, value, warning) {
  try {
    return alpha(color, value);
  } catch (error) {
    if (warning && "production" !== 'production') {}
    return color;
  }
}

/**
 * Darkens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clampWrapper(coefficient);
  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1 || color.type.indexOf('color') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }
  return recomposeColor(color);
}
function private_safeDarken(color, coefficient, warning) {
  try {
    return darken(color, coefficient);
  } catch (error) {
    if (warning && "production" !== 'production') {}
    return color;
  }
}

/**
 * Lightens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clampWrapper(coefficient);
  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  } else if (color.type.indexOf('color') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (1 - color.values[i]) * coefficient;
    }
  }
  return recomposeColor(color);
}
function private_safeLighten(color, coefficient, warning) {
  try {
    return lighten(color, coefficient);
  } catch (error) {
    if (warning && "production" !== 'production') {}
    return color;
  }
}

/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function emphasize(color, coefficient = 0.15) {
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
function private_safeEmphasize(color, coefficient, warning) {
  try {
    return emphasize(color, coefficient);
  } catch (error) {
    if (warning && "production" !== 'production') {}
    return color;
  }
}

/**
 * Blend a transparent overlay color with a background color, resulting in a single
 * RGB color.
 * @param {string} background - CSS color
 * @param {string} overlay - CSS color
 * @param {number} opacity - Opacity multiplier in the range 0 - 1
 * @param {number} [gamma=1.0] - Gamma correction factor. For gamma-correct blending, 2.2 is usual.
 */
function blend(background, overlay, opacity, gamma = 1.0) {
  const blendChannel = (b, o) => Math.round((b ** (1 / gamma) * (1 - opacity) + o ** (1 / gamma) * opacity) ** gamma);
  const backgroundColor = decomposeColor(background);
  const overlayColor = decomposeColor(overlay);
  const rgb = [blendChannel(backgroundColor.values[0], overlayColor.values[0]), blendChannel(backgroundColor.values[1], overlayColor.values[1]), blendChannel(backgroundColor.values[2], overlayColor.values[2])];
  return recomposeColor({
    type: 'rgb',
    values: rgb
  });
}
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/PickersDay/pickersDayClasses.js

function getPickersDayUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiPickersDay', slot);
}
const pickersDayClasses = (0,generateUtilityClasses/* default */.A)('MuiPickersDay', ['root', 'dayWithMargin', 'dayOutsideMonth', 'hiddenDaySpacingFiller', 'today', 'selected', 'disabled']);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/PickersDay/PickersDay.js
'use client';



const PickersDay_excluded = ["autoFocus", "className", "day", "disabled", "disableHighlightToday", "disableMargin", "hidden", "isAnimating", "onClick", "onDaySelect", "onFocus", "onBlur", "onKeyDown", "onMouseDown", "onMouseEnter", "outsideCurrentMonth", "selected", "showDaysOutsideCurrentMonth", "children", "today", "isFirstVisibleCell", "isLastVisibleCell"];










const PickersDay_useUtilityClasses = ownerState => {
  const {
    selected,
    disableMargin,
    disableHighlightToday,
    today,
    disabled,
    outsideCurrentMonth,
    showDaysOutsideCurrentMonth,
    classes
  } = ownerState;
  const isHiddenDaySpacingFiller = outsideCurrentMonth && !showDaysOutsideCurrentMonth;
  const slots = {
    root: ['root', selected && !isHiddenDaySpacingFiller && 'selected', disabled && 'disabled', !disableMargin && 'dayWithMargin', !disableHighlightToday && today && 'today', outsideCurrentMonth && showDaysOutsideCurrentMonth && 'dayOutsideMonth', isHiddenDaySpacingFiller && 'hiddenDaySpacingFiller'],
    hiddenDaySpacingFiller: ['hiddenDaySpacingFiller']
  };
  return (0,composeClasses/* default */.A)(slots, getPickersDayUtilityClass, classes);
};
const styleArg = ({
  theme
}) => (0,esm_extends/* default */.A)({}, theme.typography.caption, {
  width: DAY_SIZE,
  height: DAY_SIZE,
  borderRadius: '50%',
  padding: 0,
  // explicitly setting to `transparent` to avoid potentially getting impacted by change from the overridden component
  backgroundColor: 'transparent',
  transition: theme.transitions.create('background-color', {
    duration: theme.transitions.duration.short
  }),
  color: (theme.vars || theme).palette.text.primary,
  '@media (pointer: fine)': {
    '&:hover': {
      backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.hoverOpacity)
    }
  },
  '&:focus': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.primary.mainChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.primary.main, theme.palette.action.focusOpacity),
    [`&.${pickersDayClasses.selected}`]: {
      willChange: 'background-color',
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  [`&.${pickersDayClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText,
    backgroundColor: (theme.vars || theme).palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
    '&:hover': {
      willChange: 'background-color',
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  },
  [`&.${pickersDayClasses.disabled}:not(.${pickersDayClasses.selected})`]: {
    color: (theme.vars || theme).palette.text.disabled
  },
  [`&.${pickersDayClasses.disabled}&.${pickersDayClasses.selected}`]: {
    opacity: 0.6
  },
  variants: [{
    props: {
      disableMargin: false
    },
    style: {
      margin: `0 ${DAY_MARGIN}px`
    }
  }, {
    props: {
      outsideCurrentMonth: true,
      showDaysOutsideCurrentMonth: true
    },
    style: {
      color: (theme.vars || theme).palette.text.secondary
    }
  }, {
    props: {
      disableHighlightToday: false,
      today: true
    },
    style: {
      [`&:not(.${pickersDayClasses.selected})`]: {
        border: `1px solid ${(theme.vars || theme).palette.text.secondary}`
      }
    }
  }]
});
const PickersDay_overridesResolver = (props, styles) => {
  const {
    ownerState
  } = props;
  return [styles.root, !ownerState.disableMargin && styles.dayWithMargin, !ownerState.disableHighlightToday && ownerState.today && styles.today, !ownerState.outsideCurrentMonth && ownerState.showDaysOutsideCurrentMonth && styles.dayOutsideMonth, ownerState.outsideCurrentMonth && !ownerState.showDaysOutsideCurrentMonth && styles.hiddenDaySpacingFiller];
};
const PickersDayRoot = (0,styled/* default */.Ay)(ButtonBase_ButtonBase, {
  name: 'MuiPickersDay',
  slot: 'Root',
  overridesResolver: PickersDay_overridesResolver
})(styleArg);
const PickersDayFiller = (0,styled/* default */.Ay)('div', {
  name: 'MuiPickersDay',
  slot: 'Root',
  overridesResolver: PickersDay_overridesResolver
})(({
  theme
}) => (0,esm_extends/* default */.A)({}, styleArg({
  theme
}), {
  // visibility: 'hidden' does not work here as it hides the element from screen readers as well
  opacity: 0,
  pointerEvents: 'none'
}));
const noop = () => {};
const PickersDayRaw = /*#__PURE__*/react.forwardRef(function PickersDay(inProps, forwardedRef) {
  const props = (0,useThemeProps/* default */.A)({
    props: inProps,
    name: 'MuiPickersDay'
  });
  const {
      autoFocus = false,
      className,
      day,
      disabled = false,
      disableHighlightToday = false,
      disableMargin = false,
      isAnimating,
      onClick,
      onDaySelect,
      onFocus = noop,
      onBlur = noop,
      onKeyDown = noop,
      onMouseDown = noop,
      onMouseEnter = noop,
      outsideCurrentMonth,
      selected = false,
      showDaysOutsideCurrentMonth = false,
      children,
      today: isToday = false
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, PickersDay_excluded);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    autoFocus,
    disabled,
    disableHighlightToday,
    disableMargin,
    selected,
    showDaysOutsideCurrentMonth,
    today: isToday
  });
  const classes = PickersDay_useUtilityClasses(ownerState);
  const utils = useUtils_useUtils();
  const ref = react.useRef(null);
  const handleRef = useForkRef(ref, forwardedRef);

  // Since this is rendered when a Popper is opened we can't use passive effects.
  // Focusing in passive effects in Popper causes scroll jump.
  useEnhancedEffect_useEnhancedEffect(() => {
    if (autoFocus && !disabled && !isAnimating && !outsideCurrentMonth) {
      // ref.current being null would be a bug in MUI
      ref.current.focus();
    }
  }, [autoFocus, disabled, isAnimating, outsideCurrentMonth]);

  // For a day outside the current month, move the focus from mouseDown to mouseUp
  // Goal: have the onClick ends before sliding to the new month
  const handleMouseDown = event => {
    onMouseDown(event);
    if (outsideCurrentMonth) {
      event.preventDefault();
    }
  };
  const handleClick = event => {
    if (!disabled) {
      onDaySelect(day);
    }
    if (outsideCurrentMonth) {
      event.currentTarget.focus();
    }
    if (onClick) {
      onClick(event);
    }
  };
  if (outsideCurrentMonth && !showDaysOutsideCurrentMonth) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(PickersDayFiller, {
      className: (0,clsx/* default */.A)(classes.root, classes.hiddenDaySpacingFiller, className),
      ownerState: ownerState,
      role: other.role
    });
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(PickersDayRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    ref: handleRef,
    centerRipple: true,
    disabled: disabled,
    tabIndex: selected ? 0 : -1,
    onKeyDown: event => onKeyDown(event, day),
    onFocus: event => onFocus(event, day),
    onBlur: event => onBlur(event, day),
    onMouseEnter: event => onMouseEnter(event, day),
    onClick: handleClick,
    onMouseDown: handleMouseDown
  }, other, {
    ownerState: ownerState,
    children: !children ? utils.format(day, 'dayOfMonth') : children
  }));
});
 false ? 0 : void 0;

/**
 * Demos:
 *
 * - [DateCalendar](https://mui.com/x/react-date-pickers/date-calendar/)
 * API:
 *
 * - [PickersDay API](https://mui.com/x/api/date-pickers/pickers-day/)
 */
const PickersDay = /*#__PURE__*/react.memo(PickersDayRaw);
// EXTERNAL MODULE: ./node_modules/.pnpm/react-transition-group@4.4.5_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/react-transition-group/esm/CSSTransition.js
var CSSTransition = __webpack_require__(49469);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/DateCalendar/pickersSlideTransitionClasses.js

const getPickersSlideTransitionUtilityClass = slot => (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiPickersSlideTransition', slot);
const pickersSlideTransitionClasses = (0,generateUtilityClasses/* default */.A)('MuiPickersSlideTransition', ['root', 'slideEnter-left', 'slideEnter-right', 'slideEnterActive', 'slideExit', 'slideExitActiveLeft-left', 'slideExitActiveLeft-right']);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/DateCalendar/PickersSlideTransition.js


const PickersSlideTransition_excluded = ["children", "className", "reduceAnimations", "slideDirection", "transKey", "classes"];







const PickersSlideTransition_useUtilityClasses = ownerState => {
  const {
    classes,
    slideDirection
  } = ownerState;
  const slots = {
    root: ['root'],
    exit: ['slideExit'],
    enterActive: ['slideEnterActive'],
    enter: [`slideEnter-${slideDirection}`],
    exitActive: [`slideExitActiveLeft-${slideDirection}`]
  };
  return (0,composeClasses/* default */.A)(slots, getPickersSlideTransitionUtilityClass, classes);
};
const PickersSlideTransitionRoot = (0,styled/* default */.Ay)(TransitionGroup/* default */.A, {
  name: 'MuiPickersSlideTransition',
  slot: 'Root',
  overridesResolver: (_, styles) => [styles.root, {
    [`.${pickersSlideTransitionClasses['slideEnter-left']}`]: styles['slideEnter-left']
  }, {
    [`.${pickersSlideTransitionClasses['slideEnter-right']}`]: styles['slideEnter-right']
  }, {
    [`.${pickersSlideTransitionClasses.slideEnterActive}`]: styles.slideEnterActive
  }, {
    [`.${pickersSlideTransitionClasses.slideExit}`]: styles.slideExit
  }, {
    [`.${pickersSlideTransitionClasses['slideExitActiveLeft-left']}`]: styles['slideExitActiveLeft-left']
  }, {
    [`.${pickersSlideTransitionClasses['slideExitActiveLeft-right']}`]: styles['slideExitActiveLeft-right']
  }]
})(({
  theme
}) => {
  const slideTransition = theme.transitions.create('transform', {
    duration: theme.transitions.duration.complex,
    easing: 'cubic-bezier(0.35, 0.8, 0.4, 1)'
  });
  return {
    display: 'block',
    position: 'relative',
    overflowX: 'hidden',
    '& > *': {
      position: 'absolute',
      top: 0,
      right: 0,
      left: 0
    },
    [`& .${pickersSlideTransitionClasses['slideEnter-left']}`]: {
      willChange: 'transform',
      transform: 'translate(100%)',
      zIndex: 1
    },
    [`& .${pickersSlideTransitionClasses['slideEnter-right']}`]: {
      willChange: 'transform',
      transform: 'translate(-100%)',
      zIndex: 1
    },
    [`& .${pickersSlideTransitionClasses.slideEnterActive}`]: {
      transform: 'translate(0%)',
      transition: slideTransition
    },
    [`& .${pickersSlideTransitionClasses.slideExit}`]: {
      transform: 'translate(0%)'
    },
    [`& .${pickersSlideTransitionClasses['slideExitActiveLeft-left']}`]: {
      willChange: 'transform',
      transform: 'translate(-100%)',
      transition: slideTransition,
      zIndex: 0
    },
    [`& .${pickersSlideTransitionClasses['slideExitActiveLeft-right']}`]: {
      willChange: 'transform',
      transform: 'translate(100%)',
      transition: slideTransition,
      zIndex: 0
    }
  };
});

/**
 * @ignore - do not document.
 */
function PickersSlideTransition(inProps) {
  const props = (0,useThemeProps/* default */.A)({
    props: inProps,
    name: 'MuiPickersSlideTransition'
  });
  const {
      children,
      className,
      reduceAnimations,
      transKey
      // extracting `classes` from `other`
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, PickersSlideTransition_excluded);
  const classes = PickersSlideTransition_useUtilityClasses(props);
  const theme = useTheme_useTheme();
  if (reduceAnimations) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)("div", {
      className: (0,clsx/* default */.A)(classes.root, className),
      children: children
    });
  }
  const transitionClasses = {
    exit: classes.exit,
    enterActive: classes.enterActive,
    enter: classes.enter,
    exitActive: classes.exitActive
  };
  return /*#__PURE__*/(0,jsx_runtime.jsx)(PickersSlideTransitionRoot, {
    className: (0,clsx/* default */.A)(classes.root, className),
    childFactory: element => /*#__PURE__*/react.cloneElement(element, {
      classNames: transitionClasses
    }),
    role: "presentation",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(CSSTransition/* default */.A, (0,esm_extends/* default */.A)({
      mountOnEnter: true,
      unmountOnExit: true,
      timeout: theme.transitions.duration.complex,
      classNames: transitionClasses
    }, other, {
      children: children
    }), transKey)
  });
}
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/DateCalendar/dayCalendarClasses.js

const getDayCalendarUtilityClass = slot => (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiDayCalendar', slot);
const dayCalendarClasses = (0,generateUtilityClasses/* default */.A)('MuiDayCalendar', ['root', 'header', 'weekDayLabel', 'loadingContainer', 'slideTransition', 'monthContainer', 'weekContainer', 'weekNumberLabel', 'weekNumber']);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/DateCalendar/DayCalendar.js


const DayCalendar_excluded = ["parentProps", "day", "focusableDay", "selectedDays", "isDateDisabled", "currentMonthNumber", "isViewFocused"],
  DayCalendar_excluded2 = ["ownerState"];

















const DayCalendar_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    header: ['header'],
    weekDayLabel: ['weekDayLabel'],
    loadingContainer: ['loadingContainer'],
    slideTransition: ['slideTransition'],
    monthContainer: ['monthContainer'],
    weekContainer: ['weekContainer'],
    weekNumberLabel: ['weekNumberLabel'],
    weekNumber: ['weekNumber']
  };
  return (0,composeClasses/* default */.A)(slots, getDayCalendarUtilityClass, classes);
};
const weeksContainerHeight = (DAY_SIZE + DAY_MARGIN * 2) * 6;
const PickersCalendarDayRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiDayCalendar',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})({});
const PickersCalendarDayHeader = (0,styled/* default */.Ay)('div', {
  name: 'MuiDayCalendar',
  slot: 'Header',
  overridesResolver: (_, styles) => styles.header
})({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});
const PickersCalendarWeekDayLabel = (0,styled/* default */.Ay)(Typography_Typography, {
  name: 'MuiDayCalendar',
  slot: 'WeekDayLabel',
  overridesResolver: (_, styles) => styles.weekDayLabel
})(({
  theme
}) => ({
  width: 36,
  height: 40,
  margin: '0 2px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: (theme.vars || theme).palette.text.secondary
}));
const PickersCalendarWeekNumberLabel = (0,styled/* default */.Ay)(Typography_Typography, {
  name: 'MuiDayCalendar',
  slot: 'WeekNumberLabel',
  overridesResolver: (_, styles) => styles.weekNumberLabel
})(({
  theme
}) => ({
  width: 36,
  height: 40,
  margin: '0 2px',
  textAlign: 'center',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: theme.palette.text.disabled
}));
const PickersCalendarWeekNumber = (0,styled/* default */.Ay)(Typography_Typography, {
  name: 'MuiDayCalendar',
  slot: 'WeekNumber',
  overridesResolver: (_, styles) => styles.weekNumber
})(({
  theme
}) => (0,esm_extends/* default */.A)({}, theme.typography.caption, {
  width: DAY_SIZE,
  height: DAY_SIZE,
  padding: 0,
  margin: `0 ${DAY_MARGIN}px`,
  color: theme.palette.text.disabled,
  fontSize: '0.75rem',
  alignItems: 'center',
  justifyContent: 'center',
  display: 'inline-flex'
}));
const PickersCalendarLoadingContainer = (0,styled/* default */.Ay)('div', {
  name: 'MuiDayCalendar',
  slot: 'LoadingContainer',
  overridesResolver: (_, styles) => styles.loadingContainer
})({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: weeksContainerHeight
});
const PickersCalendarSlideTransition = (0,styled/* default */.Ay)(PickersSlideTransition, {
  name: 'MuiDayCalendar',
  slot: 'SlideTransition',
  overridesResolver: (_, styles) => styles.slideTransition
})({
  minHeight: weeksContainerHeight
});
const PickersCalendarWeekContainer = (0,styled/* default */.Ay)('div', {
  name: 'MuiDayCalendar',
  slot: 'MonthContainer',
  overridesResolver: (_, styles) => styles.monthContainer
})({
  overflow: 'hidden'
});
const PickersCalendarWeek = (0,styled/* default */.Ay)('div', {
  name: 'MuiDayCalendar',
  slot: 'WeekContainer',
  overridesResolver: (_, styles) => styles.weekContainer
})({
  margin: `${DAY_MARGIN}px 0`,
  display: 'flex',
  justifyContent: 'center'
});
function WrappedDay(_ref) {
  let {
      parentProps,
      day,
      focusableDay,
      selectedDays,
      isDateDisabled,
      currentMonthNumber,
      isViewFocused
    } = _ref,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(_ref, DayCalendar_excluded);
  const {
    disabled,
    disableHighlightToday,
    isMonthSwitchingAnimating,
    showDaysOutsideCurrentMonth,
    slots,
    slotProps,
    timezone
  } = parentProps;
  const utils = useUtils_useUtils();
  const now = useNow(timezone);
  const isFocusableDay = focusableDay !== null && utils.isSameDay(day, focusableDay);
  const isSelected = selectedDays.some(selectedDay => utils.isSameDay(selectedDay, day));
  const isToday = utils.isSameDay(day, now);
  const Day = slots?.day ?? PickersDay;
  // We don't want to pass to ownerState down, to avoid re-rendering all the day whenever a prop changes.
  const _useSlotProps = useSlotProps_useSlotProps({
      elementType: Day,
      externalSlotProps: slotProps?.day,
      additionalProps: (0,esm_extends/* default */.A)({
        disableHighlightToday,
        showDaysOutsideCurrentMonth,
        role: 'gridcell',
        isAnimating: isMonthSwitchingAnimating,
        // it is used in date range dragging logic by accessing `dataset.timestamp`
        'data-timestamp': utils.toJsDate(day).valueOf()
      }, other),
      ownerState: (0,esm_extends/* default */.A)({}, parentProps, {
        day,
        selected: isSelected
      })
    }),
    dayProps = (0,objectWithoutPropertiesLoose/* default */.A)(_useSlotProps, DayCalendar_excluded2);
  const isDisabled = react.useMemo(() => disabled || isDateDisabled(day), [disabled, isDateDisabled, day]);
  const outsideCurrentMonth = react.useMemo(() => utils.getMonth(day) !== currentMonthNumber, [utils, day, currentMonthNumber]);
  const isFirstVisibleCell = react.useMemo(() => {
    const startOfMonth = utils.startOfMonth(utils.setMonth(day, currentMonthNumber));
    if (!showDaysOutsideCurrentMonth) {
      return utils.isSameDay(day, startOfMonth);
    }
    return utils.isSameDay(day, utils.startOfWeek(startOfMonth));
  }, [currentMonthNumber, day, showDaysOutsideCurrentMonth, utils]);
  const isLastVisibleCell = react.useMemo(() => {
    const endOfMonth = utils.endOfMonth(utils.setMonth(day, currentMonthNumber));
    if (!showDaysOutsideCurrentMonth) {
      return utils.isSameDay(day, endOfMonth);
    }
    return utils.isSameDay(day, utils.endOfWeek(endOfMonth));
  }, [currentMonthNumber, day, showDaysOutsideCurrentMonth, utils]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Day, (0,esm_extends/* default */.A)({}, dayProps, {
    day: day,
    disabled: isDisabled,
    autoFocus: isViewFocused && isFocusableDay,
    today: isToday,
    outsideCurrentMonth: outsideCurrentMonth,
    isFirstVisibleCell: isFirstVisibleCell,
    isLastVisibleCell: isLastVisibleCell,
    selected: isSelected,
    tabIndex: isFocusableDay ? 0 : -1,
    "aria-selected": isSelected,
    "aria-current": isToday ? 'date' : undefined
  }));
}

/**
 * @ignore - do not document.
 */
function DayCalendar(inProps) {
  const props = (0,useThemeProps/* default */.A)({
    props: inProps,
    name: 'MuiDayCalendar'
  });
  const utils = useUtils_useUtils();
  const {
    onFocusedDayChange,
    className,
    currentMonth,
    selectedDays,
    focusedDay,
    loading,
    onSelectedDaysChange,
    onMonthSwitchingAnimationEnd,
    readOnly,
    reduceAnimations,
    renderLoading = () => /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      children: "..."
    }),
    slideDirection,
    TransitionProps,
    disablePast,
    disableFuture,
    minDate,
    maxDate,
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    dayOfWeekFormatter = date => utils.format(date, 'weekdayShort').charAt(0).toUpperCase(),
    hasFocus,
    onFocusedViewChange,
    gridLabelId,
    displayWeekNumber,
    fixedWeekNumber,
    autoFocus,
    timezone
  } = props;
  const now = useNow(timezone);
  const classes = DayCalendar_useUtilityClasses(props);
  const isRtl = (0,RtlProvider/* useRtl */.I)();
  const isDateDisabled = useIsDateDisabled({
    shouldDisableDate,
    shouldDisableMonth,
    shouldDisableYear,
    minDate,
    maxDate,
    disablePast,
    disableFuture,
    timezone
  });
  const translations = usePickersTranslations();
  const [internalHasFocus, setInternalHasFocus] = useControlled({
    name: 'DayCalendar',
    state: 'hasFocus',
    controlled: hasFocus,
    default: autoFocus ?? false
  });
  const [internalFocusedDay, setInternalFocusedDay] = react.useState(() => focusedDay || now);
  const handleDaySelect = useEventCallback_useEventCallback(day => {
    if (readOnly) {
      return;
    }
    onSelectedDaysChange(day);
  });
  const focusDay = day => {
    if (!isDateDisabled(day)) {
      onFocusedDayChange(day);
      setInternalFocusedDay(day);
      onFocusedViewChange?.(true);
      setInternalHasFocus(true);
    }
  };
  const handleKeyDown = useEventCallback_useEventCallback((event, day) => {
    switch (event.key) {
      case 'ArrowUp':
        focusDay(utils.addDays(day, -7));
        event.preventDefault();
        break;
      case 'ArrowDown':
        focusDay(utils.addDays(day, 7));
        event.preventDefault();
        break;
      case 'ArrowLeft':
        {
          const newFocusedDayDefault = utils.addDays(day, isRtl ? 1 : -1);
          const nextAvailableMonth = utils.addMonths(day, isRtl ? 1 : -1);
          const closestDayToFocus = findClosestEnabledDate({
            utils,
            date: newFocusedDayDefault,
            minDate: isRtl ? newFocusedDayDefault : utils.startOfMonth(nextAvailableMonth),
            maxDate: isRtl ? utils.endOfMonth(nextAvailableMonth) : newFocusedDayDefault,
            isDateDisabled,
            timezone
          });
          focusDay(closestDayToFocus || newFocusedDayDefault);
          event.preventDefault();
          break;
        }
      case 'ArrowRight':
        {
          const newFocusedDayDefault = utils.addDays(day, isRtl ? -1 : 1);
          const nextAvailableMonth = utils.addMonths(day, isRtl ? -1 : 1);
          const closestDayToFocus = findClosestEnabledDate({
            utils,
            date: newFocusedDayDefault,
            minDate: isRtl ? utils.startOfMonth(nextAvailableMonth) : newFocusedDayDefault,
            maxDate: isRtl ? newFocusedDayDefault : utils.endOfMonth(nextAvailableMonth),
            isDateDisabled,
            timezone
          });
          focusDay(closestDayToFocus || newFocusedDayDefault);
          event.preventDefault();
          break;
        }
      case 'Home':
        focusDay(utils.startOfWeek(day));
        event.preventDefault();
        break;
      case 'End':
        focusDay(utils.endOfWeek(day));
        event.preventDefault();
        break;
      case 'PageUp':
        focusDay(utils.addMonths(day, 1));
        event.preventDefault();
        break;
      case 'PageDown':
        focusDay(utils.addMonths(day, -1));
        event.preventDefault();
        break;
      default:
        break;
    }
  });
  const handleFocus = useEventCallback_useEventCallback((event, day) => focusDay(day));
  const handleBlur = useEventCallback_useEventCallback((event, day) => {
    if (internalHasFocus && utils.isSameDay(internalFocusedDay, day)) {
      onFocusedViewChange?.(false);
    }
  });
  const currentMonthNumber = utils.getMonth(currentMonth);
  const currentYearNumber = utils.getYear(currentMonth);
  const validSelectedDays = react.useMemo(() => selectedDays.filter(day => !!day).map(day => utils.startOfDay(day)), [utils, selectedDays]);

  // need a new ref whenever the `key` of the transition changes: https://reactcommunity.org/react-transition-group/transition/#Transition-prop-nodeRef.
  const transitionKey = `${currentYearNumber}-${currentMonthNumber}`;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const slideNodeRef = react.useMemo(() => /*#__PURE__*/react.createRef(), [transitionKey]);
  const focusableDay = react.useMemo(() => {
    const startOfMonth = utils.startOfMonth(currentMonth);
    const endOfMonth = utils.endOfMonth(currentMonth);
    if (isDateDisabled(internalFocusedDay) || utils.isAfterDay(internalFocusedDay, endOfMonth) || utils.isBeforeDay(internalFocusedDay, startOfMonth)) {
      return findClosestEnabledDate({
        utils,
        date: internalFocusedDay,
        minDate: startOfMonth,
        maxDate: endOfMonth,
        disablePast,
        disableFuture,
        isDateDisabled,
        timezone
      });
    }
    return internalFocusedDay;
  }, [currentMonth, disableFuture, disablePast, internalFocusedDay, isDateDisabled, utils, timezone]);
  const weeksToDisplay = react.useMemo(() => {
    const toDisplay = utils.getWeekArray(currentMonth);
    let nextMonth = utils.addMonths(currentMonth, 1);
    while (fixedWeekNumber && toDisplay.length < fixedWeekNumber) {
      const additionalWeeks = utils.getWeekArray(nextMonth);
      const hasCommonWeek = utils.isSameDay(toDisplay[toDisplay.length - 1][0], additionalWeeks[0][0]);
      additionalWeeks.slice(hasCommonWeek ? 1 : 0).forEach(week => {
        if (toDisplay.length < fixedWeekNumber) {
          toDisplay.push(week);
        }
      });
      nextMonth = utils.addMonths(nextMonth, 1);
    }
    return toDisplay;
  }, [currentMonth, fixedWeekNumber, utils]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(PickersCalendarDayRoot, {
    role: "grid",
    "aria-labelledby": gridLabelId,
    className: classes.root,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(PickersCalendarDayHeader, {
      role: "row",
      className: classes.header,
      children: [displayWeekNumber && /*#__PURE__*/(0,jsx_runtime.jsx)(PickersCalendarWeekNumberLabel, {
        variant: "caption",
        role: "columnheader",
        "aria-label": translations.calendarWeekNumberHeaderLabel,
        className: classes.weekNumberLabel,
        children: translations.calendarWeekNumberHeaderText
      }), getWeekdays(utils, now).map((weekday, i) => /*#__PURE__*/(0,jsx_runtime.jsx)(PickersCalendarWeekDayLabel, {
        variant: "caption",
        role: "columnheader",
        "aria-label": utils.format(weekday, 'weekday'),
        className: classes.weekDayLabel,
        children: dayOfWeekFormatter(weekday)
      }, i.toString()))]
    }), loading ? /*#__PURE__*/(0,jsx_runtime.jsx)(PickersCalendarLoadingContainer, {
      className: classes.loadingContainer,
      children: renderLoading()
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(PickersCalendarSlideTransition, (0,esm_extends/* default */.A)({
      transKey: transitionKey,
      onExited: onMonthSwitchingAnimationEnd,
      reduceAnimations: reduceAnimations,
      slideDirection: slideDirection,
      className: (0,clsx/* default */.A)(className, classes.slideTransition)
    }, TransitionProps, {
      nodeRef: slideNodeRef,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(PickersCalendarWeekContainer, {
        ref: slideNodeRef,
        role: "rowgroup",
        className: classes.monthContainer,
        children: weeksToDisplay.map((week, index) => /*#__PURE__*/(0,jsx_runtime.jsxs)(PickersCalendarWeek, {
          role: "row",
          className: classes.weekContainer
          // fix issue of announcing row 1 as row 2
          // caused by week day labels row
          ,
          "aria-rowindex": index + 1,
          children: [displayWeekNumber && /*#__PURE__*/(0,jsx_runtime.jsx)(PickersCalendarWeekNumber, {
            className: classes.weekNumber,
            role: "rowheader",
            "aria-label": translations.calendarWeekNumberAriaLabelText(utils.getWeekNumber(week[0])),
            children: translations.calendarWeekNumberText(utils.getWeekNumber(week[0]))
          }), week.map((day, dayIndex) => /*#__PURE__*/(0,jsx_runtime.jsx)(WrappedDay, {
            parentProps: props,
            day: day,
            selectedDays: validSelectedDays,
            focusableDay: focusableDay,
            onKeyDown: handleKeyDown,
            onFocus: handleFocus,
            onBlur: handleBlur,
            onDaySelect: handleDaySelect,
            isDateDisabled: isDateDisabled,
            currentMonthNumber: currentMonthNumber,
            isViewFocused: internalHasFocus
            // fix issue of announcing column 1 as column 2 when `displayWeekNumber` is enabled
            ,
            "aria-colindex": dayIndex + 1
          }, day.toString()))]
        }, `week-${week[0]}`))
      })
    }))]
  });
}
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/MonthCalendar/pickersMonthClasses.js

function getPickersMonthUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiPickersMonth', slot);
}
const pickersMonthClasses = (0,generateUtilityClasses/* default */.A)('MuiPickersMonth', ['root', 'monthButton', 'disabled', 'selected']);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/MonthCalendar/PickersMonth.js


const PickersMonth_excluded = ["autoFocus", "className", "children", "disabled", "selected", "value", "tabIndex", "onClick", "onKeyDown", "onFocus", "onBlur", "aria-current", "aria-label", "monthsPerRow", "slots", "slotProps"];








const PickersMonth_useUtilityClasses = ownerState => {
  const {
    disabled,
    selected,
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    monthButton: ['monthButton', disabled && 'disabled', selected && 'selected']
  };
  return (0,composeClasses/* default */.A)(slots, getPickersMonthUtilityClass, classes);
};
const PickersMonthRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiPickersMonth',
  slot: 'Root',
  overridesResolver: (_, styles) => [styles.root]
})({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexBasis: '33.3%',
  variants: [{
    props: {
      monthsPerRow: 4
    },
    style: {
      flexBasis: '25%'
    }
  }]
});
const MonthCalendarButton = (0,styled/* default */.Ay)('button', {
  name: 'MuiPickersMonth',
  slot: 'MonthButton',
  overridesResolver: (_, styles) => [styles.monthButton, {
    [`&.${pickersMonthClasses.disabled}`]: styles.disabled
  }, {
    [`&.${pickersMonthClasses.selected}`]: styles.selected
  }]
})(({
  theme
}) => (0,esm_extends/* default */.A)({
  color: 'unset',
  backgroundColor: 'transparent',
  border: 0,
  outline: 0
}, theme.typography.subtitle1, {
  margin: '8px 0',
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: 'pointer',
  '&:focus': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  '&:hover': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  '&:disabled': {
    cursor: 'auto',
    pointerEvents: 'none'
  },
  [`&.${pickersMonthClasses.disabled}`]: {
    color: (theme.vars || theme).palette.text.secondary
  },
  [`&.${pickersMonthClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText,
    backgroundColor: (theme.vars || theme).palette.primary.main,
    '&:focus, &:hover': {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  }
}));

/**
 * @ignore - do not document.
 */
const PickersMonth = /*#__PURE__*/react.memo(function PickersMonth(inProps) {
  const props = (0,useThemeProps/* default */.A)({
    props: inProps,
    name: 'MuiPickersMonth'
  });
  const {
      autoFocus,
      className,
      children,
      disabled,
      selected,
      value,
      tabIndex,
      onClick,
      onKeyDown,
      onFocus,
      onBlur,
      'aria-current': ariaCurrent,
      'aria-label': ariaLabel
      // We don't want to forward this prop to the root element
      ,

      slots,
      slotProps
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, PickersMonth_excluded);
  const ref = react.useRef(null);
  const classes = PickersMonth_useUtilityClasses(props);

  // We can't forward the `autoFocus` to the button because it is a native button, not a MUI Button
  useEnhancedEffect_useEnhancedEffect(() => {
    if (autoFocus) {
      // `ref.current` being `null` would be a bug in MUI.
      ref.current?.focus();
    }
  }, [autoFocus]);
  const MonthButton = slots?.monthButton ?? MonthCalendarButton;
  const monthButtonProps = useSlotProps_useSlotProps({
    elementType: MonthButton,
    externalSlotProps: slotProps?.monthButton,
    additionalProps: {
      children,
      disabled,
      tabIndex,
      ref,
      type: 'button',
      role: 'radio',
      'aria-current': ariaCurrent,
      'aria-checked': selected,
      'aria-label': ariaLabel,
      onClick: event => onClick(event, value),
      onKeyDown: event => onKeyDown(event, value),
      onFocus: event => onFocus(event, value),
      onBlur: event => onBlur(event, value)
    },
    ownerState: props,
    className: classes.monthButton
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(PickersMonthRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: props
  }, other, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(MonthButton, (0,esm_extends/* default */.A)({}, monthButtonProps))
  }));
});
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/MonthCalendar/monthCalendarClasses.js

function getMonthCalendarUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiMonthCalendar', slot);
}
const monthCalendarClasses = (0,generateUtilityClasses/* default */.A)('MuiMonthCalendar', ['root']);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/MonthCalendar/MonthCalendar.js
'use client';



const MonthCalendar_excluded = ["className", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "shouldDisableMonth", "readOnly", "disableHighlightToday", "autoFocus", "onMonthFocus", "hasFocus", "onFocusedViewChange", "monthsPerRow", "timezone", "gridLabelId", "slots", "slotProps"];















const MonthCalendar_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.A)(slots, getMonthCalendarUtilityClass, classes);
};
function useMonthCalendarDefaultizedProps(props, name) {
  const utils = useUtils_useUtils();
  const defaultDates = useUtils_useDefaultDates();
  const themeProps = (0,useThemeProps/* default */.A)({
    props,
    name
  });
  return (0,esm_extends/* default */.A)({
    disableFuture: false,
    disablePast: false
  }, themeProps, {
    minDate: date_utils_applyDefaultDate(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: date_utils_applyDefaultDate(utils, themeProps.maxDate, defaultDates.maxDate)
  });
}
const MonthCalendarRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiMonthCalendar',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  display: 'flex',
  flexWrap: 'wrap',
  alignContent: 'stretch',
  padding: '0 4px',
  width: DIALOG_WIDTH,
  // avoid padding increasing width over defined
  boxSizing: 'border-box'
});
/**
 * Demos:
 *
 * - [DateCalendar](https://mui.com/x/react-date-pickers/date-calendar/)
 *
 * API:
 *
 * - [MonthCalendar API](https://mui.com/x/api/date-pickers/month-calendar/)
 */
const MonthCalendar = /*#__PURE__*/react.forwardRef(function MonthCalendar(inProps, ref) {
  const props = useMonthCalendarDefaultizedProps(inProps, 'MuiMonthCalendar');
  const {
      className,
      value: valueProp,
      defaultValue,
      referenceDate: referenceDateProp,
      disabled,
      disableFuture,
      disablePast,
      maxDate,
      minDate,
      onChange,
      shouldDisableMonth,
      readOnly,
      autoFocus = false,
      onMonthFocus,
      hasFocus,
      onFocusedViewChange,
      monthsPerRow = 3,
      timezone: timezoneProp,
      gridLabelId,
      slots,
      slotProps
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, MonthCalendar_excluded);
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValueWithTimezone({
    name: 'MonthCalendar',
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    onChange,
    valueManager: singleItemValueManager
  });
  const now = useNow(timezone);
  const isRtl = (0,RtlProvider/* useRtl */.I)();
  const utils = useUtils_useUtils();
  const referenceDate = react.useMemo(() => singleItemValueManager.getInitialReferenceValue({
    value,
    utils,
    props,
    timezone,
    referenceDate: referenceDateProp,
    granularity: SECTION_TYPE_GRANULARITY.month
  }), [] // eslint-disable-line react-hooks/exhaustive-deps
  );
  const ownerState = props;
  const classes = MonthCalendar_useUtilityClasses(ownerState);
  const todayMonth = react.useMemo(() => utils.getMonth(now), [utils, now]);
  const selectedMonth = react.useMemo(() => {
    if (value != null) {
      return utils.getMonth(value);
    }
    return null;
  }, [value, utils]);
  const [focusedMonth, setFocusedMonth] = react.useState(() => selectedMonth || utils.getMonth(referenceDate));
  const [internalHasFocus, setInternalHasFocus] = useControlled({
    name: 'MonthCalendar',
    state: 'hasFocus',
    controlled: hasFocus,
    default: autoFocus ?? false
  });
  const changeHasFocus = useEventCallback_useEventCallback(newHasFocus => {
    setInternalHasFocus(newHasFocus);
    if (onFocusedViewChange) {
      onFocusedViewChange(newHasFocus);
    }
  });
  const isMonthDisabled = react.useCallback(dateToValidate => {
    const firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, minDate) ? now : minDate);
    const lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, maxDate) ? now : maxDate);
    const monthToValidate = utils.startOfMonth(dateToValidate);
    if (utils.isBefore(monthToValidate, firstEnabledMonth)) {
      return true;
    }
    if (utils.isAfter(monthToValidate, lastEnabledMonth)) {
      return true;
    }
    if (!shouldDisableMonth) {
      return false;
    }
    return shouldDisableMonth(monthToValidate);
  }, [disableFuture, disablePast, maxDate, minDate, now, shouldDisableMonth, utils]);
  const handleMonthSelection = useEventCallback_useEventCallback((event, month) => {
    if (readOnly) {
      return;
    }
    const newDate = utils.setMonth(value ?? referenceDate, month);
    handleValueChange(newDate);
  });
  const focusMonth = useEventCallback_useEventCallback(month => {
    if (!isMonthDisabled(utils.setMonth(value ?? referenceDate, month))) {
      setFocusedMonth(month);
      changeHasFocus(true);
      if (onMonthFocus) {
        onMonthFocus(month);
      }
    }
  });
  react.useEffect(() => {
    setFocusedMonth(prevFocusedMonth => selectedMonth !== null && prevFocusedMonth !== selectedMonth ? selectedMonth : prevFocusedMonth);
  }, [selectedMonth]);
  const handleKeyDown = useEventCallback_useEventCallback((event, month) => {
    const monthsInYear = 12;
    const monthsInRow = 3;
    switch (event.key) {
      case 'ArrowUp':
        focusMonth((monthsInYear + month - monthsInRow) % monthsInYear);
        event.preventDefault();
        break;
      case 'ArrowDown':
        focusMonth((monthsInYear + month + monthsInRow) % monthsInYear);
        event.preventDefault();
        break;
      case 'ArrowLeft':
        focusMonth((monthsInYear + month + (isRtl ? 1 : -1)) % monthsInYear);
        event.preventDefault();
        break;
      case 'ArrowRight':
        focusMonth((monthsInYear + month + (isRtl ? -1 : 1)) % monthsInYear);
        event.preventDefault();
        break;
      default:
        break;
    }
  });
  const handleMonthFocus = useEventCallback_useEventCallback((event, month) => {
    focusMonth(month);
  });
  const handleMonthBlur = useEventCallback_useEventCallback((event, month) => {
    if (focusedMonth === month) {
      changeHasFocus(false);
    }
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(MonthCalendarRoot, (0,esm_extends/* default */.A)({
    ref: ref,
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: ownerState,
    role: "radiogroup",
    "aria-labelledby": gridLabelId
  }, other, {
    children: getMonthsInYear(utils, value ?? referenceDate).map(month => {
      const monthNumber = utils.getMonth(month);
      const monthText = utils.format(month, 'monthShort');
      const monthLabel = utils.format(month, 'month');
      const isSelected = monthNumber === selectedMonth;
      const isDisabled = disabled || isMonthDisabled(month);
      return /*#__PURE__*/(0,jsx_runtime.jsx)(PickersMonth, {
        selected: isSelected,
        value: monthNumber,
        onClick: handleMonthSelection,
        onKeyDown: handleKeyDown,
        autoFocus: internalHasFocus && monthNumber === focusedMonth,
        disabled: isDisabled,
        tabIndex: monthNumber === focusedMonth && !isDisabled ? 0 : -1,
        onFocus: handleMonthFocus,
        onBlur: handleMonthBlur,
        "aria-current": todayMonth === monthNumber ? 'date' : undefined,
        "aria-label": monthLabel,
        monthsPerRow: monthsPerRow,
        slots: slots,
        slotProps: slotProps,
        children: monthText
      }, monthText);
    })
  }));
});
 false ? 0 : void 0;
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/YearCalendar/pickersYearClasses.js

function getPickersYearUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiPickersYear', slot);
}
const pickersYearClasses = (0,generateUtilityClasses/* default */.A)('MuiPickersYear', ['root', 'yearButton', 'selected', 'disabled']);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/YearCalendar/PickersYear.js


const PickersYear_excluded = ["autoFocus", "className", "children", "disabled", "selected", "value", "tabIndex", "onClick", "onKeyDown", "onFocus", "onBlur", "aria-current", "yearsPerRow", "slots", "slotProps"];








const PickersYear_useUtilityClasses = ownerState => {
  const {
    disabled,
    selected,
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    yearButton: ['yearButton', disabled && 'disabled', selected && 'selected']
  };
  return (0,composeClasses/* default */.A)(slots, getPickersYearUtilityClass, classes);
};
const PickersYearRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiPickersYear',
  slot: 'Root',
  overridesResolver: (_, styles) => [styles.root]
})({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexBasis: '33.3%',
  variants: [{
    props: {
      yearsPerRow: 4
    },
    style: {
      flexBasis: '25%'
    }
  }]
});
const YearCalendarButton = (0,styled/* default */.Ay)('button', {
  name: 'MuiPickersYear',
  slot: 'YearButton',
  overridesResolver: (_, styles) => [styles.yearButton, {
    [`&.${pickersYearClasses.disabled}`]: styles.disabled
  }, {
    [`&.${pickersYearClasses.selected}`]: styles.selected
  }]
})(({
  theme
}) => (0,esm_extends/* default */.A)({
  color: 'unset',
  backgroundColor: 'transparent',
  border: 0,
  outline: 0
}, theme.typography.subtitle1, {
  margin: '6px 0',
  height: 36,
  width: 72,
  borderRadius: 18,
  cursor: 'pointer',
  '&:focus': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.focusOpacity})` : alpha(theme.palette.action.active, theme.palette.action.focusOpacity)
  },
  '&:hover': {
    backgroundColor: theme.vars ? `rgba(${theme.vars.palette.action.activeChannel} / ${theme.vars.palette.action.hoverOpacity})` : alpha(theme.palette.action.active, theme.palette.action.hoverOpacity)
  },
  '&:disabled': {
    cursor: 'auto',
    pointerEvents: 'none'
  },
  [`&.${pickersYearClasses.disabled}`]: {
    color: (theme.vars || theme).palette.text.secondary
  },
  [`&.${pickersYearClasses.selected}`]: {
    color: (theme.vars || theme).palette.primary.contrastText,
    backgroundColor: (theme.vars || theme).palette.primary.main,
    '&:focus, &:hover': {
      backgroundColor: (theme.vars || theme).palette.primary.dark
    }
  }
}));

/**
 * @ignore - internal component.
 */
const PickersYear = /*#__PURE__*/react.memo(function PickersYear(inProps) {
  const props = (0,useThemeProps/* default */.A)({
    props: inProps,
    name: 'MuiPickersYear'
  });
  const {
      autoFocus,
      className,
      children,
      disabled,
      selected,
      value,
      tabIndex,
      onClick,
      onKeyDown,
      onFocus,
      onBlur,
      'aria-current': ariaCurrent
      // We don't want to forward this prop to the root element
      ,

      slots,
      slotProps
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, PickersYear_excluded);
  const ref = react.useRef(null);
  const classes = PickersYear_useUtilityClasses(props);

  // We can't forward the `autoFocus` to the button because it is a native button, not a MUI Button
  useEnhancedEffect_useEnhancedEffect(() => {
    if (autoFocus) {
      // `ref.current` being `null` would be a bug in MUI.
      ref.current?.focus();
    }
  }, [autoFocus]);
  const YearButton = slots?.yearButton ?? YearCalendarButton;
  const yearButtonProps = useSlotProps_useSlotProps({
    elementType: YearButton,
    externalSlotProps: slotProps?.yearButton,
    additionalProps: {
      children,
      disabled,
      tabIndex,
      ref,
      type: 'button',
      role: 'radio',
      'aria-current': ariaCurrent,
      'aria-checked': selected,
      onClick: event => onClick(event, value),
      onKeyDown: event => onKeyDown(event, value),
      onFocus: event => onFocus(event, value),
      onBlur: event => onBlur(event, value)
    },
    ownerState: props,
    className: classes.yearButton
  });
  return /*#__PURE__*/(0,jsx_runtime.jsx)(PickersYearRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: props
  }, other, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(YearButton, (0,esm_extends/* default */.A)({}, yearButtonProps))
  }));
});
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/YearCalendar/yearCalendarClasses.js

function getYearCalendarUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiYearCalendar', slot);
}
const yearCalendarClasses = (0,generateUtilityClasses/* default */.A)('MuiYearCalendar', ['root']);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/YearCalendar/YearCalendar.js
'use client';



const YearCalendar_excluded = ["autoFocus", "className", "value", "defaultValue", "referenceDate", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onChange", "readOnly", "shouldDisableYear", "disableHighlightToday", "onYearFocus", "hasFocus", "onFocusedViewChange", "yearsOrder", "yearsPerRow", "timezone", "gridLabelId", "slots", "slotProps"];















const YearCalendar_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root']
  };
  return (0,composeClasses/* default */.A)(slots, getYearCalendarUtilityClass, classes);
};
function useYearCalendarDefaultizedProps(props, name) {
  const utils = useUtils_useUtils();
  const defaultDates = useUtils_useDefaultDates();
  const themeProps = (0,useThemeProps/* default */.A)({
    props,
    name
  });
  return (0,esm_extends/* default */.A)({
    disablePast: false,
    disableFuture: false
  }, themeProps, {
    yearsPerRow: themeProps.yearsPerRow ?? 3,
    minDate: date_utils_applyDefaultDate(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: date_utils_applyDefaultDate(utils, themeProps.maxDate, defaultDates.maxDate)
  });
}
const YearCalendarRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiYearCalendar',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  overflowY: 'auto',
  height: '100%',
  padding: '0 4px',
  width: DIALOG_WIDTH,
  maxHeight: MAX_CALENDAR_HEIGHT,
  // avoid padding increasing width over defined
  boxSizing: 'border-box',
  position: 'relative'
});
/**
 * Demos:
 *
 * - [DateCalendar](https://mui.com/x/react-date-pickers/date-calendar/)
 *
 * API:
 *
 * - [YearCalendar API](https://mui.com/x/api/date-pickers/year-calendar/)
 */
const YearCalendar = /*#__PURE__*/react.forwardRef(function YearCalendar(inProps, ref) {
  const props = useYearCalendarDefaultizedProps(inProps, 'MuiYearCalendar');
  const {
      autoFocus,
      className,
      value: valueProp,
      defaultValue,
      referenceDate: referenceDateProp,
      disabled,
      disableFuture,
      disablePast,
      maxDate,
      minDate,
      onChange,
      readOnly,
      shouldDisableYear,
      onYearFocus,
      hasFocus,
      onFocusedViewChange,
      yearsOrder = 'asc',
      yearsPerRow,
      timezone: timezoneProp,
      gridLabelId,
      slots,
      slotProps
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, YearCalendar_excluded);
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValueWithTimezone({
    name: 'YearCalendar',
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    onChange,
    valueManager: singleItemValueManager
  });
  const now = useNow(timezone);
  const isRtl = (0,RtlProvider/* useRtl */.I)();
  const utils = useUtils_useUtils();
  const referenceDate = react.useMemo(() => singleItemValueManager.getInitialReferenceValue({
    value,
    utils,
    props,
    timezone,
    referenceDate: referenceDateProp,
    granularity: SECTION_TYPE_GRANULARITY.year
  }), [] // eslint-disable-line react-hooks/exhaustive-deps
  );
  const ownerState = props;
  const classes = YearCalendar_useUtilityClasses(ownerState);
  const todayYear = react.useMemo(() => utils.getYear(now), [utils, now]);
  const selectedYear = react.useMemo(() => {
    if (value != null) {
      return utils.getYear(value);
    }
    return null;
  }, [value, utils]);
  const [focusedYear, setFocusedYear] = react.useState(() => selectedYear || utils.getYear(referenceDate));
  const [internalHasFocus, setInternalHasFocus] = useControlled({
    name: 'YearCalendar',
    state: 'hasFocus',
    controlled: hasFocus,
    default: autoFocus ?? false
  });
  const changeHasFocus = useEventCallback_useEventCallback(newHasFocus => {
    setInternalHasFocus(newHasFocus);
    if (onFocusedViewChange) {
      onFocusedViewChange(newHasFocus);
    }
  });
  const isYearDisabled = react.useCallback(dateToValidate => {
    if (disablePast && utils.isBeforeYear(dateToValidate, now)) {
      return true;
    }
    if (disableFuture && utils.isAfterYear(dateToValidate, now)) {
      return true;
    }
    if (minDate && utils.isBeforeYear(dateToValidate, minDate)) {
      return true;
    }
    if (maxDate && utils.isAfterYear(dateToValidate, maxDate)) {
      return true;
    }
    if (!shouldDisableYear) {
      return false;
    }
    const yearToValidate = utils.startOfYear(dateToValidate);
    return shouldDisableYear(yearToValidate);
  }, [disableFuture, disablePast, maxDate, minDate, now, shouldDisableYear, utils]);
  const handleYearSelection = useEventCallback_useEventCallback((event, year) => {
    if (readOnly) {
      return;
    }
    const newDate = utils.setYear(value ?? referenceDate, year);
    handleValueChange(newDate);
  });
  const focusYear = useEventCallback_useEventCallback(year => {
    if (!isYearDisabled(utils.setYear(value ?? referenceDate, year))) {
      setFocusedYear(year);
      changeHasFocus(true);
      onYearFocus?.(year);
    }
  });
  react.useEffect(() => {
    setFocusedYear(prevFocusedYear => selectedYear !== null && prevFocusedYear !== selectedYear ? selectedYear : prevFocusedYear);
  }, [selectedYear]);
  const verticalDirection = yearsOrder !== 'desc' ? yearsPerRow * 1 : yearsPerRow * -1;
  const horizontalDirection = isRtl && yearsOrder === 'asc' || !isRtl && yearsOrder === 'desc' ? -1 : 1;
  const handleKeyDown = useEventCallback_useEventCallback((event, year) => {
    switch (event.key) {
      case 'ArrowUp':
        focusYear(year - verticalDirection);
        event.preventDefault();
        break;
      case 'ArrowDown':
        focusYear(year + verticalDirection);
        event.preventDefault();
        break;
      case 'ArrowLeft':
        focusYear(year - horizontalDirection);
        event.preventDefault();
        break;
      case 'ArrowRight':
        focusYear(year + horizontalDirection);
        event.preventDefault();
        break;
      default:
        break;
    }
  });
  const handleYearFocus = useEventCallback_useEventCallback((event, year) => {
    focusYear(year);
  });
  const handleYearBlur = useEventCallback_useEventCallback((event, year) => {
    if (focusedYear === year) {
      changeHasFocus(false);
    }
  });
  const scrollerRef = react.useRef(null);
  const handleRef = useForkRef(ref, scrollerRef);
  react.useEffect(() => {
    if (autoFocus || scrollerRef.current === null) {
      return;
    }
    const tabbableButton = scrollerRef.current.querySelector('[tabindex="0"]');
    if (!tabbableButton) {
      return;
    }

    // Taken from useScroll in x-data-grid, but vertically centered
    const offsetHeight = tabbableButton.offsetHeight;
    const offsetTop = tabbableButton.offsetTop;
    const clientHeight = scrollerRef.current.clientHeight;
    const scrollTop = scrollerRef.current.scrollTop;
    const elementBottom = offsetTop + offsetHeight;
    if (offsetHeight > clientHeight || offsetTop < scrollTop) {
      // Button already visible
      return;
    }
    scrollerRef.current.scrollTop = elementBottom - clientHeight / 2 - offsetHeight / 2;
  }, [autoFocus]);
  const yearRange = utils.getYearRange([minDate, maxDate]);
  if (yearsOrder === 'desc') {
    yearRange.reverse();
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(YearCalendarRoot, (0,esm_extends/* default */.A)({
    ref: handleRef,
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: ownerState,
    role: "radiogroup",
    "aria-labelledby": gridLabelId
  }, other, {
    children: yearRange.map(year => {
      const yearNumber = utils.getYear(year);
      const isSelected = yearNumber === selectedYear;
      const isDisabled = disabled || isYearDisabled(year);
      return /*#__PURE__*/(0,jsx_runtime.jsx)(PickersYear, {
        selected: isSelected,
        value: yearNumber,
        onClick: handleYearSelection,
        onKeyDown: handleKeyDown,
        autoFocus: internalHasFocus && yearNumber === focusedYear,
        disabled: isDisabled,
        tabIndex: yearNumber === focusedYear && !isDisabled ? 0 : -1,
        onFocus: handleYearFocus,
        onBlur: handleYearBlur,
        "aria-current": todayYear === yearNumber ? 'date' : undefined,
        yearsPerRow: yearsPerRow,
        slots: slots,
        slotProps: slotProps,
        children: utils.format(year, 'year')
      }, utils.format(year, 'year'));
    })
  }));
});
 false ? 0 : void 0;
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/components/PickersArrowSwitcher/pickersArrowSwitcherClasses.js

function getPickersArrowSwitcherUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiPickersArrowSwitcher', slot);
}
const pickersArrowSwitcherClasses = (0,generateUtilityClasses/* default */.A)('MuiPickersArrowSwitcher', ['root', 'spacer', 'button', 'previousIconButton', 'nextIconButton', 'leftArrowIcon', 'rightArrowIcon']);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/components/PickersArrowSwitcher/PickersArrowSwitcher.js


const PickersArrowSwitcher_excluded = ["children", "className", "slots", "slotProps", "isNextDisabled", "isNextHidden", "onGoToNext", "nextLabel", "isPreviousDisabled", "isPreviousHidden", "onGoToPrevious", "previousLabel", "labelId"],
  PickersArrowSwitcher_excluded2 = ["ownerState"],
  PickersArrowSwitcher_excluded3 = ["ownerState"];











const PickersArrowSwitcherRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiPickersArrowSwitcher',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  display: 'flex'
});
const PickersArrowSwitcherSpacer = (0,styled/* default */.Ay)('div', {
  name: 'MuiPickersArrowSwitcher',
  slot: 'Spacer',
  overridesResolver: (props, styles) => styles.spacer
})(({
  theme
}) => ({
  width: theme.spacing(3)
}));
const PickersArrowSwitcherButton = (0,styled/* default */.Ay)(IconButton_IconButton, {
  name: 'MuiPickersArrowSwitcher',
  slot: 'Button',
  overridesResolver: (props, styles) => styles.button
})({
  variants: [{
    props: {
      hidden: true
    },
    style: {
      visibility: 'hidden'
    }
  }]
});
const PickersArrowSwitcher_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    spacer: ['spacer'],
    button: ['button'],
    previousIconButton: ['previousIconButton'],
    nextIconButton: ['nextIconButton'],
    leftArrowIcon: ['leftArrowIcon'],
    rightArrowIcon: ['rightArrowIcon']
  };
  return (0,composeClasses/* default */.A)(slots, getPickersArrowSwitcherUtilityClass, classes);
};
const PickersArrowSwitcher = /*#__PURE__*/react.forwardRef(function PickersArrowSwitcher(inProps, ref) {
  const isRtl = (0,RtlProvider/* useRtl */.I)();
  const props = (0,useThemeProps/* default */.A)({
    props: inProps,
    name: 'MuiPickersArrowSwitcher'
  });
  const {
      children,
      className,
      slots,
      slotProps,
      isNextDisabled,
      isNextHidden,
      onGoToNext,
      nextLabel,
      isPreviousDisabled,
      isPreviousHidden,
      onGoToPrevious,
      previousLabel,
      labelId
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, PickersArrowSwitcher_excluded);
  const ownerState = props;
  const classes = PickersArrowSwitcher_useUtilityClasses(ownerState);
  const nextProps = {
    isDisabled: isNextDisabled,
    isHidden: isNextHidden,
    goTo: onGoToNext,
    label: nextLabel
  };
  const previousProps = {
    isDisabled: isPreviousDisabled,
    isHidden: isPreviousHidden,
    goTo: onGoToPrevious,
    label: previousLabel
  };
  const PreviousIconButton = slots?.previousIconButton ?? PickersArrowSwitcherButton;
  const previousIconButtonProps = useSlotProps_useSlotProps({
    elementType: PreviousIconButton,
    externalSlotProps: slotProps?.previousIconButton,
    additionalProps: {
      size: 'medium',
      title: previousProps.label,
      'aria-label': previousProps.label,
      disabled: previousProps.isDisabled,
      edge: 'end',
      onClick: previousProps.goTo
    },
    ownerState: (0,esm_extends/* default */.A)({}, ownerState, {
      hidden: previousProps.isHidden
    }),
    className: (0,clsx/* default */.A)(classes.button, classes.previousIconButton)
  });
  const NextIconButton = slots?.nextIconButton ?? PickersArrowSwitcherButton;
  const nextIconButtonProps = useSlotProps_useSlotProps({
    elementType: NextIconButton,
    externalSlotProps: slotProps?.nextIconButton,
    additionalProps: {
      size: 'medium',
      title: nextProps.label,
      'aria-label': nextProps.label,
      disabled: nextProps.isDisabled,
      edge: 'start',
      onClick: nextProps.goTo
    },
    ownerState: (0,esm_extends/* default */.A)({}, ownerState, {
      hidden: nextProps.isHidden
    }),
    className: (0,clsx/* default */.A)(classes.button, classes.nextIconButton)
  });
  const LeftArrowIcon = slots?.leftArrowIcon ?? ArrowLeftIcon;
  // The spread is here to avoid this bug mui/material-ui#34056
  const _useSlotProps = useSlotProps_useSlotProps({
      elementType: LeftArrowIcon,
      externalSlotProps: slotProps?.leftArrowIcon,
      additionalProps: {
        fontSize: 'inherit'
      },
      ownerState,
      className: classes.leftArrowIcon
    }),
    leftArrowIconProps = (0,objectWithoutPropertiesLoose/* default */.A)(_useSlotProps, PickersArrowSwitcher_excluded2);
  const RightArrowIcon = slots?.rightArrowIcon ?? ArrowRightIcon;
  // The spread is here to avoid this bug mui/material-ui#34056
  const _useSlotProps2 = useSlotProps_useSlotProps({
      elementType: RightArrowIcon,
      externalSlotProps: slotProps?.rightArrowIcon,
      additionalProps: {
        fontSize: 'inherit'
      },
      ownerState,
      className: classes.rightArrowIcon
    }),
    rightArrowIconProps = (0,objectWithoutPropertiesLoose/* default */.A)(_useSlotProps2, PickersArrowSwitcher_excluded3);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(PickersArrowSwitcherRoot, (0,esm_extends/* default */.A)({
    ref: ref,
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: ownerState
  }, other, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PreviousIconButton, (0,esm_extends/* default */.A)({}, previousIconButtonProps, {
      children: isRtl ? /*#__PURE__*/(0,jsx_runtime.jsx)(RightArrowIcon, (0,esm_extends/* default */.A)({}, rightArrowIconProps)) : /*#__PURE__*/(0,jsx_runtime.jsx)(LeftArrowIcon, (0,esm_extends/* default */.A)({}, leftArrowIconProps))
    })), children ? /*#__PURE__*/(0,jsx_runtime.jsx)(Typography_Typography, {
      variant: "subtitle1",
      component: "span",
      id: labelId,
      children: children
    }) : /*#__PURE__*/(0,jsx_runtime.jsx)(PickersArrowSwitcherSpacer, {
      className: classes.spacer,
      ownerState: ownerState
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(NextIconButton, (0,esm_extends/* default */.A)({}, nextIconButtonProps, {
      children: isRtl ? /*#__PURE__*/(0,jsx_runtime.jsx)(LeftArrowIcon, (0,esm_extends/* default */.A)({}, leftArrowIconProps)) : /*#__PURE__*/(0,jsx_runtime.jsx)(RightArrowIcon, (0,esm_extends/* default */.A)({}, rightArrowIconProps))
    }))]
  }));
});
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/hooks/date-helpers-hooks.js



function useNextMonthDisabled(month, {
  disableFuture,
  maxDate,
  timezone
}) {
  const utils = useUtils_useUtils();
  return react.useMemo(() => {
    const now = utils.date(undefined, timezone);
    const lastEnabledMonth = utils.startOfMonth(disableFuture && utils.isBefore(now, maxDate) ? now : maxDate);
    return !utils.isAfter(lastEnabledMonth, month);
  }, [disableFuture, maxDate, month, utils, timezone]);
}
function usePreviousMonthDisabled(month, {
  disablePast,
  minDate,
  timezone
}) {
  const utils = useUtils_useUtils();
  return react.useMemo(() => {
    const now = utils.date(undefined, timezone);
    const firstEnabledMonth = utils.startOfMonth(disablePast && utils.isAfter(now, minDate) ? now : minDate);
    return !utils.isBefore(firstEnabledMonth, month);
  }, [disablePast, minDate, month, utils, timezone]);
}
function useMeridiemMode(date, ampm, onChange, selectionState) {
  const utils = useUtils();
  const meridiemMode = getMeridiem(date, utils);
  const handleMeridiemChange = React.useCallback(mode => {
    const timeWithMeridiem = date == null ? null : convertToMeridiem(date, mode, Boolean(ampm), utils);
    onChange(timeWithMeridiem, selectionState ?? 'partial');
  }, [ampm, date, onChange, selectionState, utils]);
  return {
    meridiemMode,
    handleMeridiemChange
  };
}
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/PickersCalendarHeader/pickersCalendarHeaderClasses.js

const getPickersCalendarHeaderUtilityClass = slot => (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiPickersCalendarHeader', slot);
const pickersCalendarHeaderClasses = (0,generateUtilityClasses/* default */.A)('MuiPickersCalendarHeader', ['root', 'labelContainer', 'label', 'switchViewButton', 'switchViewIcon']);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/PickersCalendarHeader/PickersCalendarHeader.js
'use client';



const PickersCalendarHeader_excluded = ["slots", "slotProps", "currentMonth", "disabled", "disableFuture", "disablePast", "maxDate", "minDate", "onMonthChange", "onViewChange", "view", "reduceAnimations", "views", "labelId", "className", "timezone", "format"],
  PickersCalendarHeader_excluded2 = ["ownerState"];
















const PickersCalendarHeader_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    labelContainer: ['labelContainer'],
    label: ['label'],
    switchViewButton: ['switchViewButton'],
    switchViewIcon: ['switchViewIcon']
  };
  return (0,composeClasses/* default */.A)(slots, getPickersCalendarHeaderUtilityClass, classes);
};
const PickersCalendarHeaderRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiPickersCalendarHeader',
  slot: 'Root',
  overridesResolver: (_, styles) => styles.root
})({
  display: 'flex',
  alignItems: 'center',
  marginTop: 12,
  marginBottom: 4,
  paddingLeft: 24,
  paddingRight: 12,
  // prevent jumping in safari
  maxHeight: 40,
  minHeight: 40
});
const PickersCalendarHeaderLabelContainer = (0,styled/* default */.Ay)('div', {
  name: 'MuiPickersCalendarHeader',
  slot: 'LabelContainer',
  overridesResolver: (_, styles) => styles.labelContainer
})(({
  theme
}) => (0,esm_extends/* default */.A)({
  display: 'flex',
  overflow: 'hidden',
  alignItems: 'center',
  cursor: 'pointer',
  marginRight: 'auto'
}, theme.typography.body1, {
  fontWeight: theme.typography.fontWeightMedium
}));
const PickersCalendarHeaderLabel = (0,styled/* default */.Ay)('div', {
  name: 'MuiPickersCalendarHeader',
  slot: 'Label',
  overridesResolver: (_, styles) => styles.label
})({
  marginRight: 6
});
const PickersCalendarHeaderSwitchViewButton = (0,styled/* default */.Ay)(IconButton_IconButton, {
  name: 'MuiPickersCalendarHeader',
  slot: 'SwitchViewButton',
  overridesResolver: (_, styles) => styles.switchViewButton
})({
  marginRight: 'auto',
  variants: [{
    props: {
      view: 'year'
    },
    style: {
      [`.${pickersCalendarHeaderClasses.switchViewIcon}`]: {
        transform: 'rotate(180deg)'
      }
    }
  }]
});
const PickersCalendarHeaderSwitchViewIcon = (0,styled/* default */.Ay)(ArrowDropDownIcon, {
  name: 'MuiPickersCalendarHeader',
  slot: 'SwitchViewIcon',
  overridesResolver: (_, styles) => styles.switchViewIcon
})(({
  theme
}) => ({
  willChange: 'transform',
  transition: theme.transitions.create('transform'),
  transform: 'rotate(0deg)'
}));
/**
 * Demos:
 *
 * - [DateCalendar](https://mui.com/x/react-date-pickers/date-calendar/)
 * - [DateRangeCalendar](https://mui.com/x/react-date-pickers/date-range-calendar/)
 * - [Custom slots and subcomponents](https://mui.com/x/react-date-pickers/custom-components/)
 *
 * API:
 *
 * - [PickersCalendarHeader API](https://mui.com/x/api/date-pickers/pickers-calendar-header/)
 */
const PickersCalendarHeader = /*#__PURE__*/react.forwardRef(function PickersCalendarHeader(inProps, ref) {
  const translations = usePickersTranslations();
  const utils = useUtils_useUtils();
  const props = (0,useThemeProps/* default */.A)({
    props: inProps,
    name: 'MuiPickersCalendarHeader'
  });
  const {
      slots,
      slotProps,
      currentMonth: month,
      disabled,
      disableFuture,
      disablePast,
      maxDate,
      minDate,
      onMonthChange,
      onViewChange,
      view,
      reduceAnimations,
      views,
      labelId,
      className,
      timezone,
      format = `${utils.formats.month} ${utils.formats.year}`
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, PickersCalendarHeader_excluded);
  const ownerState = props;
  const classes = PickersCalendarHeader_useUtilityClasses(props);
  const SwitchViewButton = slots?.switchViewButton ?? PickersCalendarHeaderSwitchViewButton;
  const switchViewButtonProps = useSlotProps_useSlotProps({
    elementType: SwitchViewButton,
    externalSlotProps: slotProps?.switchViewButton,
    additionalProps: {
      size: 'small',
      'aria-label': translations.calendarViewSwitchingButtonAriaLabel(view)
    },
    ownerState,
    className: classes.switchViewButton
  });
  const SwitchViewIcon = slots?.switchViewIcon ?? PickersCalendarHeaderSwitchViewIcon;
  // The spread is here to avoid this bug mui/material-ui#34056
  const _useSlotProps = useSlotProps_useSlotProps({
      elementType: SwitchViewIcon,
      externalSlotProps: slotProps?.switchViewIcon,
      ownerState,
      className: classes.switchViewIcon
    }),
    switchViewIconProps = (0,objectWithoutPropertiesLoose/* default */.A)(_useSlotProps, PickersCalendarHeader_excluded2);
  const selectNextMonth = () => onMonthChange(utils.addMonths(month, 1), 'left');
  const selectPreviousMonth = () => onMonthChange(utils.addMonths(month, -1), 'right');
  const isNextMonthDisabled = useNextMonthDisabled(month, {
    disableFuture,
    maxDate,
    timezone
  });
  const isPreviousMonthDisabled = usePreviousMonthDisabled(month, {
    disablePast,
    minDate,
    timezone
  });
  const handleToggleView = () => {
    if (views.length === 1 || !onViewChange || disabled) {
      return;
    }
    if (views.length === 2) {
      onViewChange(views.find(el => el !== view) || views[0]);
    } else {
      // switching only between first 2
      const nextIndexToOpen = views.indexOf(view) !== 0 ? 0 : 1;
      onViewChange(views[nextIndexToOpen]);
    }
  };

  // No need to display more information
  if (views.length === 1 && views[0] === 'year') {
    return null;
  }
  const label = utils.formatByString(month, format);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(PickersCalendarHeaderRoot, (0,esm_extends/* default */.A)({}, other, {
    ownerState: ownerState,
    className: (0,clsx/* default */.A)(classes.root, className),
    ref: ref,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(PickersCalendarHeaderLabelContainer, {
      role: "presentation",
      onClick: handleToggleView,
      ownerState: ownerState
      // putting this on the label item element below breaks when using transition
      ,
      "aria-live": "polite",
      className: classes.labelContainer,
      children: [/*#__PURE__*/(0,jsx_runtime.jsx)(PickersFadeTransitionGroup, {
        reduceAnimations: reduceAnimations,
        transKey: label,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(PickersCalendarHeaderLabel, {
          id: labelId,
          ownerState: ownerState,
          className: classes.label,
          children: label
        })
      }), views.length > 1 && !disabled && /*#__PURE__*/(0,jsx_runtime.jsx)(SwitchViewButton, (0,esm_extends/* default */.A)({}, switchViewButtonProps, {
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(SwitchViewIcon, (0,esm_extends/* default */.A)({}, switchViewIconProps))
      }))]
    }), /*#__PURE__*/(0,jsx_runtime.jsx)(Fade_Fade, {
      in: view === 'day',
      appear: !reduceAnimations,
      enter: !reduceAnimations,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(PickersArrowSwitcher, {
        slots: slots,
        slotProps: slotProps,
        onGoToPrevious: selectPreviousMonth,
        isPreviousDisabled: isPreviousMonthDisabled,
        previousLabel: translations.previousMonth,
        onGoToNext: selectNextMonth,
        isNextDisabled: isNextMonthDisabled,
        nextLabel: translations.nextMonth
      })
    })]
  }));
});
 false ? 0 : void 0;

;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/components/PickerViewRoot/PickerViewRoot.js


const PickerViewRoot = (0,styled/* default */.Ay)('div')({
  overflow: 'hidden',
  width: DIALOG_WIDTH,
  maxHeight: VIEW_HEIGHT,
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto'
});
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/DateCalendar/dateCalendarClasses.js

const getDateCalendarUtilityClass = slot => (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiDateCalendar', slot);
const dateCalendarClasses = (0,generateUtilityClasses/* default */.A)('MuiDateCalendar', ['root', 'viewTransitionContainer']);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/DateCalendar/DateCalendar.js
'use client';



const DateCalendar_excluded = ["autoFocus", "onViewChange", "value", "defaultValue", "referenceDate", "disableFuture", "disablePast", "onChange", "onYearChange", "onMonthChange", "reduceAnimations", "shouldDisableDate", "shouldDisableMonth", "shouldDisableYear", "view", "views", "openTo", "className", "disabled", "readOnly", "minDate", "maxDate", "disableHighlightToday", "focusedView", "onFocusedViewChange", "showDaysOutsideCurrentMonth", "fixedWeekNumber", "dayOfWeekFormatter", "slots", "slotProps", "loading", "renderLoading", "displayWeekNumber", "yearsOrder", "yearsPerRow", "monthsPerRow", "timezone"];






















const DateCalendar_useUtilityClasses = ownerState => {
  const {
    classes
  } = ownerState;
  const slots = {
    root: ['root'],
    viewTransitionContainer: ['viewTransitionContainer']
  };
  return (0,composeClasses/* default */.A)(slots, getDateCalendarUtilityClass, classes);
};
function useDateCalendarDefaultizedProps(props, name) {
  const utils = useUtils_useUtils();
  const defaultDates = useUtils_useDefaultDates();
  const defaultReduceAnimations = useDefaultReduceAnimations();
  const themeProps = (0,useThemeProps/* default */.A)({
    props,
    name
  });
  return (0,esm_extends/* default */.A)({}, themeProps, {
    loading: themeProps.loading ?? false,
    disablePast: themeProps.disablePast ?? false,
    disableFuture: themeProps.disableFuture ?? false,
    openTo: themeProps.openTo ?? 'day',
    views: themeProps.views ?? ['year', 'day'],
    reduceAnimations: themeProps.reduceAnimations ?? defaultReduceAnimations,
    renderLoading: themeProps.renderLoading ?? (() => /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
      children: "..."
    })),
    minDate: date_utils_applyDefaultDate(utils, themeProps.minDate, defaultDates.minDate),
    maxDate: date_utils_applyDefaultDate(utils, themeProps.maxDate, defaultDates.maxDate)
  });
}
const DateCalendarRoot = (0,styled/* default */.Ay)(PickerViewRoot, {
  name: 'MuiDateCalendar',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  display: 'flex',
  flexDirection: 'column',
  height: VIEW_HEIGHT
});
const DateCalendarViewTransitionContainer = (0,styled/* default */.Ay)(PickersFadeTransitionGroup, {
  name: 'MuiDateCalendar',
  slot: 'ViewTransitionContainer',
  overridesResolver: (props, styles) => styles.viewTransitionContainer
})({});
/**
 * Demos:
 *
 * - [DatePicker](https://mui.com/x/react-date-pickers/date-picker/)
 * - [DateCalendar](https://mui.com/x/react-date-pickers/date-calendar/)
 * - [Validation](https://mui.com/x/react-date-pickers/validation/)
 *
 * API:
 *
 * - [DateCalendar API](https://mui.com/x/api/date-pickers/date-calendar/)
 */
const DateCalendar = /*#__PURE__*/react.forwardRef(function DateCalendar(inProps, ref) {
  const utils = useUtils_useUtils();
  const id = useId();
  const props = useDateCalendarDefaultizedProps(inProps, 'MuiDateCalendar');
  const {
      autoFocus,
      onViewChange,
      value: valueProp,
      defaultValue,
      referenceDate: referenceDateProp,
      disableFuture,
      disablePast,
      onChange,
      onYearChange,
      onMonthChange,
      reduceAnimations,
      shouldDisableDate,
      shouldDisableMonth,
      shouldDisableYear,
      view: inView,
      views,
      openTo,
      className,
      disabled,
      readOnly,
      minDate,
      maxDate,
      disableHighlightToday,
      focusedView: inFocusedView,
      onFocusedViewChange,
      showDaysOutsideCurrentMonth,
      fixedWeekNumber,
      dayOfWeekFormatter,
      slots,
      slotProps,
      loading,
      renderLoading,
      displayWeekNumber,
      yearsOrder,
      yearsPerRow,
      monthsPerRow,
      timezone: timezoneProp
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, DateCalendar_excluded);
  const {
    value,
    handleValueChange,
    timezone
  } = useControlledValueWithTimezone({
    name: 'DateCalendar',
    timezone: timezoneProp,
    value: valueProp,
    defaultValue,
    referenceDate: referenceDateProp,
    onChange,
    valueManager: singleItemValueManager
  });
  const {
    view,
    setView,
    focusedView,
    setFocusedView,
    goToNextView,
    setValueAndGoToNextView
  } = useViews({
    view: inView,
    views,
    openTo,
    onChange: handleValueChange,
    onViewChange,
    autoFocus,
    focusedView: inFocusedView,
    onFocusedViewChange
  });
  const {
    referenceDate,
    calendarState,
    changeFocusedDay,
    changeMonth,
    handleChangeMonth,
    isDateDisabled,
    onMonthSwitchingAnimationEnd
  } = useCalendarState({
    value,
    referenceDate: referenceDateProp,
    reduceAnimations,
    onMonthChange,
    minDate,
    maxDate,
    shouldDisableDate,
    disablePast,
    disableFuture,
    timezone
  });

  // When disabled, limit the view to the selected date
  const minDateWithDisabled = disabled && value || minDate;
  const maxDateWithDisabled = disabled && value || maxDate;
  const gridLabelId = `${id}-grid-label`;
  const hasFocus = focusedView !== null;
  const CalendarHeader = slots?.calendarHeader ?? PickersCalendarHeader;
  const calendarHeaderProps = useSlotProps_useSlotProps({
    elementType: CalendarHeader,
    externalSlotProps: slotProps?.calendarHeader,
    additionalProps: {
      views,
      view,
      currentMonth: calendarState.currentMonth,
      onViewChange: setView,
      onMonthChange: (newMonth, direction) => handleChangeMonth({
        newMonth,
        direction
      }),
      minDate: minDateWithDisabled,
      maxDate: maxDateWithDisabled,
      disabled,
      disablePast,
      disableFuture,
      reduceAnimations,
      timezone,
      labelId: gridLabelId
    },
    ownerState: props
  });
  const handleDateMonthChange = useEventCallback_useEventCallback(newDate => {
    const startOfMonth = utils.startOfMonth(newDate);
    const endOfMonth = utils.endOfMonth(newDate);
    const closestEnabledDate = isDateDisabled(newDate) ? findClosestEnabledDate({
      utils,
      date: newDate,
      minDate: utils.isBefore(minDate, startOfMonth) ? startOfMonth : minDate,
      maxDate: utils.isAfter(maxDate, endOfMonth) ? endOfMonth : maxDate,
      disablePast,
      disableFuture,
      isDateDisabled,
      timezone
    }) : newDate;
    if (closestEnabledDate) {
      setValueAndGoToNextView(closestEnabledDate, 'finish');
      onMonthChange?.(startOfMonth);
    } else {
      goToNextView();
      changeMonth(startOfMonth);
    }
    changeFocusedDay(closestEnabledDate, true);
  });
  const handleDateYearChange = useEventCallback_useEventCallback(newDate => {
    const startOfYear = utils.startOfYear(newDate);
    const endOfYear = utils.endOfYear(newDate);
    const closestEnabledDate = isDateDisabled(newDate) ? findClosestEnabledDate({
      utils,
      date: newDate,
      minDate: utils.isBefore(minDate, startOfYear) ? startOfYear : minDate,
      maxDate: utils.isAfter(maxDate, endOfYear) ? endOfYear : maxDate,
      disablePast,
      disableFuture,
      isDateDisabled,
      timezone
    }) : newDate;
    if (closestEnabledDate) {
      setValueAndGoToNextView(closestEnabledDate, 'finish');
      onYearChange?.(closestEnabledDate);
    } else {
      goToNextView();
      changeMonth(startOfYear);
    }
    changeFocusedDay(closestEnabledDate, true);
  });
  const handleSelectedDayChange = useEventCallback_useEventCallback(day => {
    if (day) {
      // If there is a date already selected, then we want to keep its time
      return handleValueChange(mergeDateAndTime(utils, day, value ?? referenceDate), 'finish', view);
    }
    return handleValueChange(day, 'finish', view);
  });
  react.useEffect(() => {
    if (value != null && utils.isValid(value)) {
      changeMonth(value);
    }
  }, [value]); // eslint-disable-line

  const ownerState = props;
  const classes = DateCalendar_useUtilityClasses(ownerState);
  const baseDateValidationProps = {
    disablePast,
    disableFuture,
    maxDate,
    minDate
  };
  const commonViewProps = {
    disableHighlightToday,
    readOnly,
    disabled,
    timezone,
    gridLabelId,
    slots,
    slotProps
  };
  const prevOpenViewRef = react.useRef(view);
  react.useEffect(() => {
    // If the view change and the focus was on the previous view
    // Then we update the focus.
    if (prevOpenViewRef.current === view) {
      return;
    }
    if (focusedView === prevOpenViewRef.current) {
      setFocusedView(view, true);
    }
    prevOpenViewRef.current = view;
  }, [focusedView, setFocusedView, view]);
  const selectedDays = react.useMemo(() => [value], [value]);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(DateCalendarRoot, (0,esm_extends/* default */.A)({
    ref: ref,
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: ownerState
  }, other, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(CalendarHeader, (0,esm_extends/* default */.A)({}, calendarHeaderProps, {
      slots: slots,
      slotProps: slotProps
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(DateCalendarViewTransitionContainer, {
      reduceAnimations: reduceAnimations,
      className: classes.viewTransitionContainer,
      transKey: view,
      ownerState: ownerState,
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        children: [view === 'year' && /*#__PURE__*/(0,jsx_runtime.jsx)(YearCalendar, (0,esm_extends/* default */.A)({}, baseDateValidationProps, commonViewProps, {
          value: value,
          onChange: handleDateYearChange,
          shouldDisableYear: shouldDisableYear,
          hasFocus: hasFocus,
          onFocusedViewChange: isViewFocused => setFocusedView('year', isViewFocused),
          yearsOrder: yearsOrder,
          yearsPerRow: yearsPerRow,
          referenceDate: referenceDate
        })), view === 'month' && /*#__PURE__*/(0,jsx_runtime.jsx)(MonthCalendar, (0,esm_extends/* default */.A)({}, baseDateValidationProps, commonViewProps, {
          hasFocus: hasFocus,
          className: className,
          value: value,
          onChange: handleDateMonthChange,
          shouldDisableMonth: shouldDisableMonth,
          onFocusedViewChange: isViewFocused => setFocusedView('month', isViewFocused),
          monthsPerRow: monthsPerRow,
          referenceDate: referenceDate
        })), view === 'day' && /*#__PURE__*/(0,jsx_runtime.jsx)(DayCalendar, (0,esm_extends/* default */.A)({}, calendarState, baseDateValidationProps, commonViewProps, {
          onMonthSwitchingAnimationEnd: onMonthSwitchingAnimationEnd,
          onFocusedDayChange: changeFocusedDay,
          reduceAnimations: reduceAnimations,
          selectedDays: selectedDays,
          onSelectedDaysChange: handleSelectedDayChange,
          shouldDisableDate: shouldDisableDate,
          shouldDisableMonth: shouldDisableMonth,
          shouldDisableYear: shouldDisableYear,
          hasFocus: hasFocus,
          onFocusedViewChange: isViewFocused => setFocusedView('day', isViewFocused),
          showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth,
          fixedWeekNumber: fixedWeekNumber,
          dayOfWeekFormatter: dayOfWeekFormatter,
          displayWeekNumber: displayWeekNumber,
          loading: loading,
          renderLoading: renderLoading
        }))]
      })
    })]
  }));
});
 false ? 0 : void 0;
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/dateViewRenderers/dateViewRenderers.js




const renderDateViewCalendar = ({
  view,
  onViewChange,
  views,
  focusedView,
  onFocusedViewChange,
  value,
  defaultValue,
  referenceDate,
  onChange,
  className,
  classes,
  disableFuture,
  disablePast,
  minDate,
  maxDate,
  shouldDisableDate,
  shouldDisableMonth,
  shouldDisableYear,
  reduceAnimations,
  onMonthChange,
  monthsPerRow,
  onYearChange,
  yearsOrder,
  yearsPerRow,
  slots,
  slotProps,
  loading,
  renderLoading,
  disableHighlightToday,
  readOnly,
  disabled,
  showDaysOutsideCurrentMonth,
  dayOfWeekFormatter,
  sx,
  autoFocus,
  fixedWeekNumber,
  displayWeekNumber,
  timezone
}) => /*#__PURE__*/(0,jsx_runtime.jsx)(DateCalendar, {
  view: view,
  onViewChange: onViewChange,
  views: views.filter(isDatePickerView),
  focusedView: focusedView && isDatePickerView(focusedView) ? focusedView : null,
  onFocusedViewChange: onFocusedViewChange,
  value: value,
  defaultValue: defaultValue,
  referenceDate: referenceDate,
  onChange: onChange,
  className: className,
  classes: classes,
  disableFuture: disableFuture,
  disablePast: disablePast,
  minDate: minDate,
  maxDate: maxDate,
  shouldDisableDate: shouldDisableDate,
  shouldDisableMonth: shouldDisableMonth,
  shouldDisableYear: shouldDisableYear,
  reduceAnimations: reduceAnimations,
  onMonthChange: onMonthChange,
  monthsPerRow: monthsPerRow,
  onYearChange: onYearChange,
  yearsOrder: yearsOrder,
  yearsPerRow: yearsPerRow,
  slots: slots,
  slotProps: slotProps,
  loading: loading,
  renderLoading: renderLoading,
  disableHighlightToday: disableHighlightToday,
  readOnly: readOnly,
  disabled: disabled,
  showDaysOutsideCurrentMonth: showDaysOutsideCurrentMonth,
  dayOfWeekFormatter: dayOfWeekFormatter,
  sx: sx,
  autoFocus: autoFocus,
  fixedWeekNumber: fixedWeekNumber,
  displayWeekNumber: displayWeekNumber,
  timezone: timezone
});
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/DesktopDatePicker/DesktopDatePicker.js
'use client';

















/**
 * Demos:
 *
 * - [DatePicker](https://mui.com/x/react-date-pickers/date-picker/)
 * - [Validation](https://mui.com/x/react-date-pickers/validation/)
 *
 * API:
 *
 * - [DesktopDatePicker API](https://mui.com/x/api/date-pickers/desktop-date-picker/)
 */
const DesktopDatePicker = /*#__PURE__*/react.forwardRef(function DesktopDatePicker(inProps, ref) {
  const translations = usePickersTranslations();
  const utils = useUtils_useUtils();

  // Props with the default values common to all date pickers
  const defaultizedProps = useDatePickerDefaultizedProps(inProps, 'MuiDesktopDatePicker');
  const viewRenderers = (0,esm_extends/* default */.A)({
    day: renderDateViewCalendar,
    month: renderDateViewCalendar,
    year: renderDateViewCalendar
  }, defaultizedProps.viewRenderers);

  // Props with the default values specific to the desktop variant
  const props = (0,esm_extends/* default */.A)({}, defaultizedProps, {
    viewRenderers,
    format: resolveDateFormat(utils, defaultizedProps, false),
    yearsPerRow: defaultizedProps.yearsPerRow ?? 4,
    slots: (0,esm_extends/* default */.A)({
      openPickerIcon: CalendarIcon,
      field: DateField
    }, defaultizedProps.slots),
    slotProps: (0,esm_extends/* default */.A)({}, defaultizedProps.slotProps, {
      field: ownerState => (0,esm_extends/* default */.A)({}, resolveComponentProps_resolveComponentProps(defaultizedProps.slotProps?.field, ownerState), extractValidationProps(defaultizedProps), {
        ref
      }),
      toolbar: (0,esm_extends/* default */.A)({
        hidden: true
      }, defaultizedProps.slotProps?.toolbar)
    })
  });
  const {
    renderPicker
  } = useDesktopPicker({
    props,
    valueManager: singleItemValueManager,
    valueType: 'date',
    getOpenDialogAriaText: buildGetOpenDialogAriaText({
      utils,
      formatKey: 'fullDate',
      contextTranslation: translations.openDatePickerDialogue,
      propsTranslation: props.localeText?.openDatePickerDialogue
    }),
    validator: validateDate
  });
  return renderPicker();
});
DesktopDatePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: (prop_types_default()).bool,
  className: (prop_types_default()).string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: (prop_types_default()).bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: (prop_types_default()).func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: (prop_types_default()).object,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: (prop_types_default()).bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: (prop_types_default()).bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: (prop_types_default()).bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: (prop_types_default()).bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: (prop_types_default()).bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: (prop_types_default()).bool,
  /**
   * @default false
   */
  enableAccessibleFieldDOMStructure: (prop_types_default()).any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: (prop_types_default()).number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: (prop_types_default()).string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: prop_types_default().oneOf(['dense', 'spacious']),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_refType,
  /**
   * The label content.
   */
  label: (prop_types_default()).node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: (prop_types_default()).bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: (prop_types_default()).object,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: (prop_types_default()).object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: (prop_types_default()).object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: prop_types_default().oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: (prop_types_default()).string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onAccept: (prop_types_default()).func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: (prop_types_default()).func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: (prop_types_default()).func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: (prop_types_default()).func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: (prop_types_default()).func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: (prop_types_default()).func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: (prop_types_default()).func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: (prop_types_default()).func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: (prop_types_default()).func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: (prop_types_default()).bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: prop_types_default().oneOf(['day', 'month', 'year']),
  /**
   * Force rendering in particular orientation.
   */
  orientation: prop_types_default().oneOf(['landscape', 'portrait']),
  readOnly: (prop_types_default()).bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: (prop_types_default()).bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: (prop_types_default()).object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span>...</span>
   */
  renderLoading: (prop_types_default()).func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: prop_types_default().oneOfType([prop_types_default().oneOf(['all', 'day', 'empty', 'hours', 'meridiem', 'minutes', 'month', 'seconds', 'weekDay', 'year']), (prop_types_default()).number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: (prop_types_default()).func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: (prop_types_default()).func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: (prop_types_default()).func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: (prop_types_default()).bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: (prop_types_default()).object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: (prop_types_default()).object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types_default().oneOfType([prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).object, (prop_types_default()).bool])), (prop_types_default()).func, (prop_types_default()).object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: (prop_types_default()).string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: (prop_types_default()).object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: prop_types_default().oneOf(['day', 'month', 'year']),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be used.
   */
  viewRenderers: prop_types_default().shape({
    day: (prop_types_default()).func,
    month: (prop_types_default()).func,
    year: (prop_types_default()).func
  }),
  /**
   * Available views.
   */
  views: prop_types_default().arrayOf(prop_types_default().oneOf(['day', 'month', 'year']).isRequired),
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: prop_types_default().oneOf(['asc', 'desc']),
  /**
   * Years rendered per row.
   * @default 4
   */
  yearsPerRow: prop_types_default().oneOf([3, 4])
};

;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/DialogContent/dialogContentClasses.js


function getDialogContentUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiDialogContent', slot);
}
const dialogContentClasses = (0,generateUtilityClasses/* default */.A)('MuiDialogContent', ['root', 'dividers']);
/* harmony default export */ const DialogContent_dialogContentClasses = ((/* unused pure expression or super */ null && (dialogContentClasses)));
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/DialogTitle/dialogTitleClasses.js


function getDialogTitleUtilityClass(slot) {
  return generateUtilityClass('MuiDialogTitle', slot);
}
const dialogTitleClasses = (0,generateUtilityClasses/* default */.A)('MuiDialogTitle', ['root']);
/* harmony default export */ const DialogTitle_dialogTitleClasses = (dialogTitleClasses);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/DialogContent/DialogContent.js
'use client';



const DialogContent_excluded = ["className", "dividers"];









const DialogContent_useUtilityClasses = ownerState => {
  const {
    classes,
    dividers
  } = ownerState;
  const slots = {
    root: ['root', dividers && 'dividers']
  };
  return (0,composeClasses/* default */.A)(slots, getDialogContentUtilityClass, classes);
};
const DialogContentRoot = (0,styled/* default */.Ay)('div', {
  name: 'MuiDialogContent',
  slot: 'Root',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.root, ownerState.dividers && styles.dividers];
  }
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.A)({
  flex: '1 1 auto',
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: 'touch',
  overflowY: 'auto',
  padding: '20px 24px'
}, ownerState.dividers ? {
  padding: '16px 24px',
  borderTop: `1px solid ${(theme.vars || theme).palette.divider}`,
  borderBottom: `1px solid ${(theme.vars || theme).palette.divider}`
} : {
  [`.${DialogTitle_dialogTitleClasses.root} + &`]: {
    paddingTop: 0
  }
}));
const DialogContent = /*#__PURE__*/react.forwardRef(function DialogContent(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiDialogContent'
  });
  const {
      className,
      dividers = false
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, DialogContent_excluded);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    dividers
  });
  const classes = DialogContent_useUtilityClasses(ownerState);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(DialogContentRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    ownerState: ownerState,
    ref: ref
  }, other));
});
 false ? 0 : void 0;
/* harmony default export */ const DialogContent_DialogContent = (DialogContent);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Dialog/dialogClasses.js


function getDialogUtilityClass(slot) {
  return (0,generateUtilityClass_generateUtilityClass/* default */.Ay)('MuiDialog', slot);
}
const dialogClasses = (0,generateUtilityClasses/* default */.A)('MuiDialog', ['root', 'scrollPaper', 'scrollBody', 'container', 'paper', 'paperScrollPaper', 'paperScrollBody', 'paperWidthFalse', 'paperWidthXs', 'paperWidthSm', 'paperWidthMd', 'paperWidthLg', 'paperWidthXl', 'paperFullWidth', 'paperFullScreen']);
/* harmony default export */ const Dialog_dialogClasses = (dialogClasses);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Dialog/DialogContext.js

const DialogContext = /*#__PURE__*/react.createContext({});
if (false) {}
/* harmony default export */ const Dialog_DialogContext = (DialogContext);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/Dialog/Dialog.js
'use client';



const Dialog_excluded = ["aria-describedby", "aria-labelledby", "BackdropComponent", "BackdropProps", "children", "className", "disableEscapeKeyDown", "fullScreen", "fullWidth", "maxWidth", "onBackdropClick", "onClick", "onClose", "open", "PaperComponent", "PaperProps", "scroll", "TransitionComponent", "transitionDuration", "TransitionProps"];
















const DialogBackdrop = (0,styled/* default */.Ay)(Backdrop_Backdrop, {
  name: 'MuiDialog',
  slot: 'Backdrop',
  overrides: (props, styles) => styles.backdrop
})({
  // Improve scrollable dialog support.
  zIndex: -1
});
const Dialog_useUtilityClasses = ownerState => {
  const {
    classes,
    scroll,
    maxWidth,
    fullWidth,
    fullScreen
  } = ownerState;
  const slots = {
    root: ['root'],
    container: ['container', `scroll${(0,capitalize/* default */.A)(scroll)}`],
    paper: ['paper', `paperScroll${(0,capitalize/* default */.A)(scroll)}`, `paperWidth${(0,capitalize/* default */.A)(String(maxWidth))}`, fullWidth && 'paperFullWidth', fullScreen && 'paperFullScreen']
  };
  return (0,composeClasses/* default */.A)(slots, getDialogUtilityClass, classes);
};
const DialogRoot = (0,styled/* default */.Ay)(Modal_Modal, {
  name: 'MuiDialog',
  slot: 'Root',
  overridesResolver: (props, styles) => styles.root
})({
  '@media print': {
    // Use !important to override the Modal inline-style.
    position: 'absolute !important'
  }
});
const DialogContainer = (0,styled/* default */.Ay)('div', {
  name: 'MuiDialog',
  slot: 'Container',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.container, styles[`scroll${(0,capitalize/* default */.A)(ownerState.scroll)}`]];
  }
})(({
  ownerState
}) => (0,esm_extends/* default */.A)({
  height: '100%',
  '@media print': {
    height: 'auto'
  },
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}, ownerState.scroll === 'paper' && {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}, ownerState.scroll === 'body' && {
  overflowY: 'auto',
  overflowX: 'hidden',
  textAlign: 'center',
  '&::after': {
    content: '""',
    display: 'inline-block',
    verticalAlign: 'middle',
    height: '100%',
    width: '0'
  }
}));
const DialogPaper = (0,styled/* default */.Ay)(Paper_Paper, {
  name: 'MuiDialog',
  slot: 'Paper',
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [styles.paper, styles[`scrollPaper${(0,capitalize/* default */.A)(ownerState.scroll)}`], styles[`paperWidth${(0,capitalize/* default */.A)(String(ownerState.maxWidth))}`], ownerState.fullWidth && styles.paperFullWidth, ownerState.fullScreen && styles.paperFullScreen];
  }
})(({
  theme,
  ownerState
}) => (0,esm_extends/* default */.A)({
  margin: 32,
  position: 'relative',
  overflowY: 'auto',
  // Fix IE11 issue, to remove at some point.
  '@media print': {
    overflowY: 'visible',
    boxShadow: 'none'
  }
}, ownerState.scroll === 'paper' && {
  display: 'flex',
  flexDirection: 'column',
  maxHeight: 'calc(100% - 64px)'
}, ownerState.scroll === 'body' && {
  display: 'inline-block',
  verticalAlign: 'middle',
  textAlign: 'left' // 'initial' doesn't work on IE11
}, !ownerState.maxWidth && {
  maxWidth: 'calc(100% - 64px)'
}, ownerState.maxWidth === 'xs' && {
  maxWidth: theme.breakpoints.unit === 'px' ? Math.max(theme.breakpoints.values.xs, 444) : `max(${theme.breakpoints.values.xs}${theme.breakpoints.unit}, 444px)`,
  [`&.${Dialog_dialogClasses.paperScrollBody}`]: {
    [theme.breakpoints.down(Math.max(theme.breakpoints.values.xs, 444) + 32 * 2)]: {
      maxWidth: 'calc(100% - 64px)'
    }
  }
}, ownerState.maxWidth && ownerState.maxWidth !== 'xs' && {
  maxWidth: `${theme.breakpoints.values[ownerState.maxWidth]}${theme.breakpoints.unit}`,
  [`&.${Dialog_dialogClasses.paperScrollBody}`]: {
    [theme.breakpoints.down(theme.breakpoints.values[ownerState.maxWidth] + 32 * 2)]: {
      maxWidth: 'calc(100% - 64px)'
    }
  }
}, ownerState.fullWidth && {
  width: 'calc(100% - 64px)'
}, ownerState.fullScreen && {
  margin: 0,
  width: '100%',
  maxWidth: '100%',
  height: '100%',
  maxHeight: 'none',
  borderRadius: 0,
  [`&.${Dialog_dialogClasses.paperScrollBody}`]: {
    margin: 0,
    maxWidth: '100%'
  }
}));

/**
 * Dialogs are overlaid modal paper based components with a backdrop.
 */
const Dialog = /*#__PURE__*/react.forwardRef(function Dialog(inProps, ref) {
  const props = (0,DefaultPropsProvider/* useDefaultProps */.b)({
    props: inProps,
    name: 'MuiDialog'
  });
  const theme = useTheme_useTheme();
  const defaultTransitionDuration = {
    enter: theme.transitions.duration.enteringScreen,
    exit: theme.transitions.duration.leavingScreen
  };
  const {
      'aria-describedby': ariaDescribedby,
      'aria-labelledby': ariaLabelledbyProp,
      BackdropComponent,
      BackdropProps,
      children,
      className,
      disableEscapeKeyDown = false,
      fullScreen = false,
      fullWidth = false,
      maxWidth = 'sm',
      onBackdropClick,
      onClick,
      onClose,
      open,
      PaperComponent = Paper_Paper,
      PaperProps = {},
      scroll = 'paper',
      TransitionComponent = Fade_Fade,
      transitionDuration = defaultTransitionDuration,
      TransitionProps
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, Dialog_excluded);
  const ownerState = (0,esm_extends/* default */.A)({}, props, {
    disableEscapeKeyDown,
    fullScreen,
    fullWidth,
    maxWidth,
    scroll
  });
  const classes = Dialog_useUtilityClasses(ownerState);
  const backdropClick = react.useRef();
  const handleMouseDown = event => {
    // We don't want to close the dialog when clicking the dialog content.
    // Make sure the event starts and ends on the same DOM element.
    backdropClick.current = event.target === event.currentTarget;
  };
  const handleBackdropClick = event => {
    if (onClick) {
      onClick(event);
    }

    // Ignore the events not coming from the "backdrop".
    if (!backdropClick.current) {
      return;
    }
    backdropClick.current = null;
    if (onBackdropClick) {
      onBackdropClick(event);
    }
    if (onClose) {
      onClose(event, 'backdropClick');
    }
  };
  const ariaLabelledby = useId(ariaLabelledbyProp);
  const dialogContextValue = react.useMemo(() => {
    return {
      titleId: ariaLabelledby
    };
  }, [ariaLabelledby]);
  return /*#__PURE__*/(0,jsx_runtime.jsx)(DialogRoot, (0,esm_extends/* default */.A)({
    className: (0,clsx/* default */.A)(classes.root, className),
    closeAfterTransition: true,
    components: {
      Backdrop: DialogBackdrop
    },
    componentsProps: {
      backdrop: (0,esm_extends/* default */.A)({
        transitionDuration,
        as: BackdropComponent
      }, BackdropProps)
    },
    disableEscapeKeyDown: disableEscapeKeyDown,
    onClose: onClose,
    open: open,
    ref: ref,
    onClick: handleBackdropClick,
    ownerState: ownerState
  }, other, {
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(TransitionComponent, (0,esm_extends/* default */.A)({
      appear: true,
      in: open,
      timeout: transitionDuration,
      role: "presentation"
    }, TransitionProps, {
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(DialogContainer, {
        className: (0,clsx/* default */.A)(classes.container),
        onMouseDown: handleMouseDown,
        ownerState: ownerState,
        children: /*#__PURE__*/(0,jsx_runtime.jsx)(DialogPaper, (0,esm_extends/* default */.A)({
          as: PaperComponent,
          elevation: 24,
          role: "dialog",
          "aria-describedby": ariaDescribedby,
          "aria-labelledby": ariaLabelledby
        }, PaperProps, {
          className: (0,clsx/* default */.A)(classes.paper, PaperProps.className),
          ownerState: ownerState,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(Dialog_DialogContext.Provider, {
            value: dialogContextValue,
            children: children
          })
        }))
      })
    }))
  }));
});
 false ? 0 : void 0;
/* harmony default export */ const Dialog_Dialog = (Dialog);
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/components/PickersModalDialog.js








const PickersModalDialogRoot = (0,styled/* default */.Ay)(Dialog_Dialog)({
  [`& .${Dialog_dialogClasses.container}`]: {
    outline: 0
  },
  [`& .${Dialog_dialogClasses.paper}`]: {
    outline: 0,
    minWidth: DIALOG_WIDTH
  }
});
const PickersModalDialogContent = (0,styled/* default */.Ay)(DialogContent_DialogContent)({
  '&:first-of-type': {
    padding: 0
  }
});
function PickersModalDialog(props) {
  const {
    children,
    onDismiss,
    open,
    slots,
    slotProps
  } = props;
  const Dialog = slots?.dialog ?? PickersModalDialogRoot;
  const Transition = slots?.mobileTransition ?? Fade_Fade;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(Dialog, (0,esm_extends/* default */.A)({
    open: open,
    onClose: onDismiss
  }, slotProps?.dialog, {
    TransitionComponent: Transition,
    TransitionProps: slotProps?.mobileTransition,
    PaperComponent: slots?.mobilePaper,
    PaperProps: slotProps?.mobilePaper,
    children: /*#__PURE__*/(0,jsx_runtime.jsx)(PickersModalDialogContent, {
      children: children
    })
  }));
}
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/internals/hooks/useMobilePicker/useMobilePicker.js


const useMobilePicker_excluded = ["props", "getOpenDialogAriaText"];










/**
 * Hook managing all the single-date mobile pickers:
 * - MobileDatePicker
 * - MobileDateTimePicker
 * - MobileTimePicker
 */

const useMobilePicker = _ref => {
  let {
      props,
      getOpenDialogAriaText
    } = _ref,
    pickerParams = (0,objectWithoutPropertiesLoose/* default */.A)(_ref, useMobilePicker_excluded);
  const {
    slots,
    slotProps: innerSlotProps,
    className,
    sx,
    format,
    formatDensity,
    enableAccessibleFieldDOMStructure,
    selectedSections,
    onSelectedSectionsChange,
    timezone,
    name,
    label,
    inputRef,
    readOnly,
    disabled,
    localeText
  } = props;
  const fieldRef = react.useRef(null);
  const labelId = useId();
  const isToolbarHidden = innerSlotProps?.toolbar?.hidden ?? false;
  const {
    open,
    actions,
    layoutProps,
    renderCurrentView,
    fieldProps: pickerFieldProps,
    contextValue
  } = usePicker((0,esm_extends/* default */.A)({}, pickerParams, {
    props,
    fieldRef,
    autoFocusView: true,
    additionalViewProps: {},
    wrapperVariant: 'mobile'
  }));
  const Field = slots.field;
  const fieldProps = useSlotProps_useSlotProps({
    elementType: Field,
    externalSlotProps: innerSlotProps?.field,
    additionalProps: (0,esm_extends/* default */.A)({}, pickerFieldProps, isToolbarHidden && {
      id: labelId
    }, !(disabled || readOnly) && {
      onClick: actions.onOpen,
      onKeyDown: onSpaceOrEnter(actions.onOpen)
    }, {
      readOnly: readOnly ?? true,
      disabled,
      className,
      sx,
      format,
      formatDensity,
      enableAccessibleFieldDOMStructure,
      selectedSections,
      onSelectedSectionsChange,
      timezone,
      label,
      name
    }, inputRef ? {
      inputRef
    } : {}),
    ownerState: props
  });

  // TODO: Move to `useSlotProps` when https://github.com/mui/material-ui/pull/35088 will be merged
  fieldProps.inputProps = (0,esm_extends/* default */.A)({}, fieldProps.inputProps, {
    'aria-label': getOpenDialogAriaText(pickerFieldProps.value)
  });
  const slotsForField = (0,esm_extends/* default */.A)({
    textField: slots.textField
  }, fieldProps.slots);
  const Layout = slots.layout ?? PickersLayout;
  let labelledById = labelId;
  if (isToolbarHidden) {
    if (label) {
      labelledById = `${labelId}-label`;
    } else {
      labelledById = undefined;
    }
  }
  const slotProps = (0,esm_extends/* default */.A)({}, innerSlotProps, {
    toolbar: (0,esm_extends/* default */.A)({}, innerSlotProps?.toolbar, {
      titleId: labelId
    }),
    mobilePaper: (0,esm_extends/* default */.A)({
      'aria-labelledby': labelledById
    }, innerSlotProps?.mobilePaper)
  });
  const handleFieldRef = useForkRef(fieldRef, fieldProps.unstableFieldRef);
  const renderPicker = () => /*#__PURE__*/(0,jsx_runtime.jsxs)(PickersProvider, {
    contextValue: contextValue,
    localeText: localeText,
    children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Field, (0,esm_extends/* default */.A)({}, fieldProps, {
      slots: slotsForField,
      slotProps: slotProps,
      unstableFieldRef: handleFieldRef
    })), /*#__PURE__*/(0,jsx_runtime.jsx)(PickersModalDialog, (0,esm_extends/* default */.A)({}, actions, {
      open: open,
      slots: slots,
      slotProps: slotProps,
      children: /*#__PURE__*/(0,jsx_runtime.jsx)(Layout, (0,esm_extends/* default */.A)({}, layoutProps, slotProps?.layout, {
        slots: slots,
        slotProps: slotProps,
        children: renderCurrentView()
      }))
    }))]
  });
  return {
    renderPicker
  };
};
;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/MobileDatePicker/MobileDatePicker.js
'use client';
















/**
 * Demos:
 *
 * - [DatePicker](https://mui.com/x/react-date-pickers/date-picker/)
 * - [Validation](https://mui.com/x/react-date-pickers/validation/)
 *
 * API:
 *
 * - [MobileDatePicker API](https://mui.com/x/api/date-pickers/mobile-date-picker/)
 */
const MobileDatePicker = /*#__PURE__*/react.forwardRef(function MobileDatePicker(inProps, ref) {
  const translations = usePickersTranslations();
  const utils = useUtils_useUtils();

  // Props with the default values common to all date pickers
  const defaultizedProps = useDatePickerDefaultizedProps(inProps, 'MuiMobileDatePicker');
  const viewRenderers = (0,esm_extends/* default */.A)({
    day: renderDateViewCalendar,
    month: renderDateViewCalendar,
    year: renderDateViewCalendar
  }, defaultizedProps.viewRenderers);

  // Props with the default values specific to the mobile variant
  const props = (0,esm_extends/* default */.A)({}, defaultizedProps, {
    viewRenderers,
    format: resolveDateFormat(utils, defaultizedProps, false),
    slots: (0,esm_extends/* default */.A)({
      field: DateField
    }, defaultizedProps.slots),
    slotProps: (0,esm_extends/* default */.A)({}, defaultizedProps.slotProps, {
      field: ownerState => (0,esm_extends/* default */.A)({}, resolveComponentProps_resolveComponentProps(defaultizedProps.slotProps?.field, ownerState), extractValidationProps(defaultizedProps), {
        ref
      }),
      toolbar: (0,esm_extends/* default */.A)({
        hidden: false
      }, defaultizedProps.slotProps?.toolbar)
    })
  });
  const {
    renderPicker
  } = useMobilePicker({
    props,
    valueManager: singleItemValueManager,
    valueType: 'date',
    getOpenDialogAriaText: buildGetOpenDialogAriaText({
      utils,
      formatKey: 'fullDate',
      contextTranslation: translations.openDatePickerDialogue,
      propsTranslation: props.localeText?.openDatePickerDialogue
    }),
    validator: validateDate
  });
  return renderPicker();
});
MobileDatePicker.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // | To update them edit the TypeScript types and run "pnpm proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the main element is focused during the first mount.
   * This main element is:
   * - the element chosen by the visible view if any (i.e: the selected day on the `day` view).
   * - the `input` element if there is a field rendered.
   */
  autoFocus: (prop_types_default()).bool,
  className: (prop_types_default()).string,
  /**
   * If `true`, the popover or modal will close after submitting the full date.
   * @default `true` for desktop, `false` for mobile (based on the chosen wrapper and `desktopModeMediaQuery` prop).
   */
  closeOnSelect: (prop_types_default()).bool,
  /**
   * Formats the day of week displayed in the calendar header.
   * @param {TDate} date The date of the day of week provided by the adapter.
   * @returns {string} The name to display.
   * @default (date: TDate) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()
   */
  dayOfWeekFormatter: (prop_types_default()).func,
  /**
   * The default value.
   * Used when the component is not controlled.
   */
  defaultValue: (prop_types_default()).object,
  /**
   * If `true`, the picker and text field are disabled.
   * @default false
   */
  disabled: (prop_types_default()).bool,
  /**
   * If `true`, disable values after the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disableFuture: (prop_types_default()).bool,
  /**
   * If `true`, today's date is rendering without highlighting with circle.
   * @default false
   */
  disableHighlightToday: (prop_types_default()).bool,
  /**
   * If `true`, the open picker button will not be rendered (renders only the field).
   * @default false
   */
  disableOpenPicker: (prop_types_default()).bool,
  /**
   * If `true`, disable values before the current date for date components, time for time components and both for date time components.
   * @default false
   */
  disablePast: (prop_types_default()).bool,
  /**
   * If `true`, the week number will be display in the calendar.
   */
  displayWeekNumber: (prop_types_default()).bool,
  /**
   * @default false
   */
  enableAccessibleFieldDOMStructure: (prop_types_default()).any,
  /**
   * The day view will show as many weeks as needed after the end of the current month to match this value.
   * Put it to 6 to have a fixed number of weeks in Gregorian calendars
   */
  fixedWeekNumber: (prop_types_default()).number,
  /**
   * Format of the date when rendered in the input(s).
   * Defaults to localized format based on the used `views`.
   */
  format: (prop_types_default()).string,
  /**
   * Density of the format when rendered in the input.
   * Setting `formatDensity` to `"spacious"` will add a space before and after each `/`, `-` and `.` character.
   * @default "dense"
   */
  formatDensity: prop_types_default().oneOf(['dense', 'spacious']),
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: refType_refType,
  /**
   * The label content.
   */
  label: (prop_types_default()).node,
  /**
   * If `true`, calls `renderLoading` instead of rendering the day calendar.
   * Can be used to preload information and show it in calendar.
   * @default false
   */
  loading: (prop_types_default()).bool,
  /**
   * Locale for components texts.
   * Allows overriding texts coming from `LocalizationProvider` and `theme`.
   */
  localeText: (prop_types_default()).object,
  /**
   * Maximal selectable date.
   * @default 2099-12-31
   */
  maxDate: (prop_types_default()).object,
  /**
   * Minimal selectable date.
   * @default 1900-01-01
   */
  minDate: (prop_types_default()).object,
  /**
   * Months rendered per row.
   * @default 3
   */
  monthsPerRow: prop_types_default().oneOf([3, 4]),
  /**
   * Name attribute used by the `input` element in the Field.
   */
  name: (prop_types_default()).string,
  /**
   * Callback fired when the value is accepted.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The value that was just accepted.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onAccept: (prop_types_default()).func,
  /**
   * Callback fired when the value changes.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @param {TValue} value The new value.
   * @param {FieldChangeHandlerContext<TError>} context The context containing the validation result of the current value.
   */
  onChange: (prop_types_default()).func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see `open`).
   */
  onClose: (prop_types_default()).func,
  /**
   * Callback fired when the error associated with the current value changes.
   * When a validation error is detected, the `error` parameter contains a non-null value.
   * This can be used to render an appropriate form error.
   * @template TError The validation error type. It will be either `string` or a `null`. It can be in `[start, end]` format in case of range value.
   * @template TValue The value type. It will be the same type as `value` or `null`. It can be in `[start, end]` format in case of range value.
   * @param {TError} error The reason why the current value is not valid.
   * @param {TValue} value The value associated with the error.
   */
  onError: (prop_types_default()).func,
  /**
   * Callback fired on month change.
   * @template TDate
   * @param {TDate} month The new month.
   */
  onMonthChange: (prop_types_default()).func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see `open`).
   */
  onOpen: (prop_types_default()).func,
  /**
   * Callback fired when the selected sections change.
   * @param {FieldSelectedSections} newValue The new selected sections.
   */
  onSelectedSectionsChange: (prop_types_default()).func,
  /**
   * Callback fired on view change.
   * @template TView
   * @param {TView} view The new view.
   */
  onViewChange: (prop_types_default()).func,
  /**
   * Callback fired on year change.
   * @template TDate
   * @param {TDate} year The new year.
   */
  onYearChange: (prop_types_default()).func,
  /**
   * Control the popup or dialog open state.
   * @default false
   */
  open: (prop_types_default()).bool,
  /**
   * The default visible view.
   * Used when the component view is not controlled.
   * Must be a valid option from `views` list.
   */
  openTo: prop_types_default().oneOf(['day', 'month', 'year']),
  /**
   * Force rendering in particular orientation.
   */
  orientation: prop_types_default().oneOf(['landscape', 'portrait']),
  readOnly: (prop_types_default()).bool,
  /**
   * If `true`, disable heavy animations.
   * @default `@media(prefers-reduced-motion: reduce)` || `navigator.userAgent` matches Android <10 or iOS <13
   */
  reduceAnimations: (prop_types_default()).bool,
  /**
   * The date used to generate the new value when both `value` and `defaultValue` are empty.
   * @default The closest valid date-time using the validation props, except callbacks like `shouldDisable<...>`.
   */
  referenceDate: (prop_types_default()).object,
  /**
   * Component displaying when passed `loading` true.
   * @returns {React.ReactNode} The node to render when loading.
   * @default () => <span>...</span>
   */
  renderLoading: (prop_types_default()).func,
  /**
   * The currently selected sections.
   * This prop accepts four formats:
   * 1. If a number is provided, the section at this index will be selected.
   * 2. If a string of type `FieldSectionType` is provided, the first section with that name will be selected.
   * 3. If `"all"` is provided, all the sections will be selected.
   * 4. If `null` is provided, no section will be selected.
   * If not provided, the selected sections will be handled internally.
   */
  selectedSections: prop_types_default().oneOfType([prop_types_default().oneOf(['all', 'day', 'empty', 'hours', 'meridiem', 'minutes', 'month', 'seconds', 'weekDay', 'year']), (prop_types_default()).number]),
  /**
   * Disable specific date.
   *
   * Warning: This function can be called multiple times (for example when rendering date calendar, checking if focus can be moved to a certain date, etc.). Expensive computations can impact performance.
   *
   * @template TDate
   * @param {TDate} day The date to test.
   * @returns {boolean} If `true` the date will be disabled.
   */
  shouldDisableDate: (prop_types_default()).func,
  /**
   * Disable specific month.
   * @template TDate
   * @param {TDate} month The month to test.
   * @returns {boolean} If `true`, the month will be disabled.
   */
  shouldDisableMonth: (prop_types_default()).func,
  /**
   * Disable specific year.
   * @template TDate
   * @param {TDate} year The year to test.
   * @returns {boolean} If `true`, the year will be disabled.
   */
  shouldDisableYear: (prop_types_default()).func,
  /**
   * If `true`, days outside the current month are rendered:
   *
   * - if `fixedWeekNumber` is defined, renders days to have the weeks requested.
   *
   * - if `fixedWeekNumber` is not defined, renders day to fill the first and last week of the current month.
   *
   * - ignored if `calendars` equals more than `1` on range pickers.
   * @default false
   */
  showDaysOutsideCurrentMonth: (prop_types_default()).bool,
  /**
   * The props used for each component slot.
   * @default {}
   */
  slotProps: (prop_types_default()).object,
  /**
   * Overridable component slots.
   * @default {}
   */
  slots: (prop_types_default()).object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: prop_types_default().oneOfType([prop_types_default().arrayOf(prop_types_default().oneOfType([(prop_types_default()).func, (prop_types_default()).object, (prop_types_default()).bool])), (prop_types_default()).func, (prop_types_default()).object]),
  /**
   * Choose which timezone to use for the value.
   * Example: "default", "system", "UTC", "America/New_York".
   * If you pass values from other timezones to some props, they will be converted to this timezone before being used.
   * @see See the {@link https://mui.com/x/react-date-pickers/timezone/ timezones documentation} for more details.
   * @default The timezone of the `value` or `defaultValue` prop is defined, 'default' otherwise.
   */
  timezone: (prop_types_default()).string,
  /**
   * The selected value.
   * Used when the component is controlled.
   */
  value: (prop_types_default()).object,
  /**
   * The visible view.
   * Used when the component view is controlled.
   * Must be a valid option from `views` list.
   */
  view: prop_types_default().oneOf(['day', 'month', 'year']),
  /**
   * Define custom view renderers for each section.
   * If `null`, the section will only have field editing.
   * If `undefined`, internally defined view will be used.
   */
  viewRenderers: prop_types_default().shape({
    day: (prop_types_default()).func,
    month: (prop_types_default()).func,
    year: (prop_types_default()).func
  }),
  /**
   * Available views.
   */
  views: prop_types_default().arrayOf(prop_types_default().oneOf(['day', 'month', 'year']).isRequired),
  /**
   * Years are displayed in ascending (chronological) order by default.
   * If `desc`, years are displayed in descending order.
   * @default 'asc'
   */
  yearsOrder: prop_types_default().oneOf(['asc', 'desc']),
  /**
   * Years rendered per row.
   * @default 3
   */
  yearsPerRow: prop_types_default().oneOf([3, 4])
};

;// ./node_modules/.pnpm/@mui+x-date-pickers@7.28.2_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_54tpea6dzactfw223ioazliv5m/node_modules/@mui/x-date-pickers/DatePicker/DatePicker.js
'use client';



const DatePicker_excluded = ["desktopModeMediaQuery"];









/**
 * Demos:
 *
 * - [DatePicker](https://mui.com/x/react-date-pickers/date-picker/)
 * - [Validation](https://mui.com/x/react-date-pickers/validation/)
 *
 * API:
 *
 * - [DatePicker API](https://mui.com/x/api/date-pickers/date-picker/)
 */
const DatePicker = /*#__PURE__*/react.forwardRef(function DatePicker(inProps, ref) {
  const props = (0,useThemeProps/* default */.A)({
    props: inProps,
    name: 'MuiDatePicker'
  });
  const {
      desktopModeMediaQuery = DEFAULT_DESKTOP_MODE_MEDIA_QUERY
    } = props,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(props, DatePicker_excluded);

  // defaults to `true` in environments where `window.matchMedia` would not be available (i.e. test/jsdom)
  const isDesktop = useMediaQuery(desktopModeMediaQuery, {
    defaultMatches: true
  });
  if (isDesktop) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(DesktopDatePicker, (0,esm_extends/* default */.A)({
      ref: ref
    }, other));
  }
  return /*#__PURE__*/(0,jsx_runtime.jsx)(MobileDatePicker, (0,esm_extends/* default */.A)({
    ref: ref
  }, other));
});
 false ? 0 : void 0;


/***/ }),

/***/ 32777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _capitalize__WEBPACK_IMPORTED_MODULE_0__.A)
/* harmony export */ });
/* harmony import */ var _capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39875);


/***/ }),

/***/ 34772:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Ay: () => (/* binding */ generateUtilityClass)
});

// UNUSED EXPORTS: globalStateClasses, isGlobalState

;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/ClassNameGenerator/ClassNameGenerator.js
const defaultGenerator = componentName => componentName;
const createClassNameGenerator = () => {
  let generate = defaultGenerator;
  return {
    configure(generator) {
      generate = generator;
    },
    generate(componentName) {
      return generate(componentName);
    },
    reset() {
      generate = defaultGenerator;
    }
  };
};
const ClassNameGenerator = createClassNameGenerator();
/* harmony default export */ const ClassNameGenerator_ClassNameGenerator = (ClassNameGenerator);
;// ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js

const globalStateClasses = {
  active: 'active',
  checked: 'checked',
  completed: 'completed',
  disabled: 'disabled',
  error: 'error',
  expanded: 'expanded',
  focused: 'focused',
  focusVisible: 'focusVisible',
  open: 'open',
  readOnly: 'readOnly',
  required: 'required',
  selected: 'selected'
};
function generateUtilityClass(componentName, slot, globalStatePrefix = 'Mui') {
  const globalStateClass = globalStateClasses[slot];
  return globalStateClass ? `${globalStatePrefix}-${globalStateClass}` : `${ClassNameGenerator_ClassNameGenerator.generate(componentName)}-${slot}`;
}
function isGlobalState(slot) {
  return globalStateClasses[slot] !== undefined;
}

/***/ }),

/***/ 38209:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_system_createStyled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(58945);
/* harmony import */ var _defaultTheme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(76612);
/* harmony import */ var _identifier__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(54073);
/* harmony import */ var _rootShouldForwardProp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(86757);
'use client';







const styled = (0,_mui_system_createStyled__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)({
  themeId: _identifier__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,
  defaultTheme: _defaultTheme__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,
  rootShouldForwardProp: _rootShouldForwardProp__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styled);

/***/ }),

/***/ 38536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $: () => (/* binding */ LocalizationProvider),
/* harmony export */   F: () => (/* binding */ MuiPickersAdapterContext)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7883);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16338);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30758);
/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(60469);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
'use client';



const _excluded = ["localeText"];




const MuiPickersAdapterContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);
if (false) {}
/**
 * Demos:
 *
 * - [Date format and localization](https://mui.com/x/react-date-pickers/adapters-locale/)
 * - [Calendar systems](https://mui.com/x/react-date-pickers/calendar-systems/)
 * - [Translated components](https://mui.com/x/react-date-pickers/localization/)
 * - [UTC and timezones](https://mui.com/x/react-date-pickers/timezone/)
 *
 * API:
 *
 * - [LocalizationProvider API](https://mui.com/x/api/date-pickers/localization-provider/)
 */
const LocalizationProvider = function LocalizationProvider(inProps) {
  const {
      localeText: inLocaleText
    } = inProps,
    otherInProps = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(inProps, _excluded);
  const {
    utils: parentUtils,
    localeText: parentLocaleText
  } = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MuiPickersAdapterContext) ?? {
    utils: undefined,
    localeText: undefined
  };
  const props = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)({
    // We don't want to pass the `localeText` prop to the theme, that way it will always return the theme value,
    // We will then merge this theme value with our value manually
    props: otherInProps,
    name: 'MuiLocalizationProvider'
  });
  const {
    children,
    dateAdapter: DateAdapter,
    dateFormats,
    dateLibInstance,
    adapterLocale,
    localeText: themeLocaleText
  } = props;
  const localeText = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)({}, themeLocaleText, parentLocaleText, inLocaleText), [themeLocaleText, parentLocaleText, inLocaleText]);
  const utils = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (!DateAdapter) {
      if (parentUtils) {
        return parentUtils;
      }
      return null;
    }
    const adapter = new DateAdapter({
      locale: adapterLocale,
      formats: dateFormats,
      instance: dateLibInstance
    });
    if (!adapter.isMUIAdapter) {
      throw new Error(['MUI X: The date adapter should be imported from `@mui/x-date-pickers` or `@mui/x-date-pickers-pro`, not from `@date-io`', "For example, `import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'` instead of `import AdapterDayjs from '@date-io/dayjs'`", 'More information on the installation documentation: https://mui.com/x/react-date-pickers/getting-started/#installation'].join(`\n`));
    }
    return adapter;
  }, [DateAdapter, adapterLocale, dateFormats, dateLibInstance, parentUtils]);
  const defaultDates = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    if (!utils) {
      return null;
    }
    return {
      minDate: utils.date('1900-01-01T00:00:00.000'),
      maxDate: utils.date('2099-12-31T00:00:00.000')
    };
  }, [utils]);
  const contextValue = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(() => {
    return {
      utils,
      defaultDates,
      localeText
    };
  }, [defaultDates, utils, localeText]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MuiPickersAdapterContext.Provider, {
    value: contextValue,
    children: children
  });
};
 false ? 0 : void 0;

/***/ }),

/***/ 39382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _clamp__WEBPACK_IMPORTED_MODULE_0__.A)
/* harmony export */ });
/* harmony import */ var _clamp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(52937);


/***/ }),

/***/ 39875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ capitalize)
/* harmony export */ });
/* harmony import */ var _mui_utils_formatMuiErrorMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7857);

// It should to be noted that this function isn't equivalent to `text-transform: capitalize`.
//
// A strict capitalization should uppercase the first letter of each word in the sentence.
// We only handle the first word.
function capitalize(string) {
  if (typeof string !== 'string') {
    throw new Error( false ? 0 : (0,_mui_utils_formatMuiErrorMessage__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(7));
  }
  return string.charAt(0).toUpperCase() + string.slice(1);
}

/***/ }),

/***/ 43347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ extendSxProp)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7883);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16338);
/* harmony import */ var _mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(44486);
/* harmony import */ var _defaultSxConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14152);


const _excluded = ["sx"];


const splitProps = props => {
  var _props$theme$unstable, _props$theme;
  const result = {
    systemProps: {},
    otherProps: {}
  };
  const config = (_props$theme$unstable = props == null || (_props$theme = props.theme) == null ? void 0 : _props$theme.unstable_sxConfig) != null ? _props$theme$unstable : _defaultSxConfig__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A;
  Object.keys(props).forEach(prop => {
    if (config[prop]) {
      result.systemProps[prop] = props[prop];
    } else {
      result.otherProps[prop] = props[prop];
    }
  });
  return result;
};
function extendSxProp(props) {
  const {
      sx: inSx
    } = props,
    other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(props, _excluded);
  const {
    systemProps,
    otherProps
  } = splitProps(other);
  let finalSx;
  if (Array.isArray(inSx)) {
    finalSx = [systemProps, ...inSx];
  } else if (typeof inSx === 'function') {
    finalSx = (...args) => {
      const result = inSx(...args);
      if (!(0,_mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_2__/* .isPlainObject */ .Q)(result)) {
        return systemProps;
      }
      return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)({}, systemProps, result);
    };
  } else {
    finalSx = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)({}, systemProps, inSx);
  }
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)({}, otherProps, {
    sx: finalSx
  });
}

/***/ }),

/***/ 44486:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ deepmerge),
/* harmony export */   Q: () => (/* binding */ isPlainObject)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7883);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30758);



// https://github.com/sindresorhus/is-plain-obj/blob/main/index.js
function isPlainObject(item) {
  if (typeof item !== 'object' || item === null) {
    return false;
  }
  const prototype = Object.getPrototypeOf(item);
  return (prototype === null || prototype === Object.prototype || Object.getPrototypeOf(prototype) === null) && !(Symbol.toStringTag in item) && !(Symbol.iterator in item);
}
function deepClone(source) {
  if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(source) || !isPlainObject(source)) {
    return source;
  }
  const output = {};
  Object.keys(source).forEach(key => {
    output[key] = deepClone(source[key]);
  });
  return output;
}
function deepmerge(target, source, options = {
  clone: true
}) {
  const output = options.clone ? (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({}, target) : target;
  if (isPlainObject(target) && isPlainObject(source)) {
    Object.keys(source).forEach(key => {
      if ( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(source[key])) {
        output[key] = source[key];
      } else if (isPlainObject(source[key]) &&
      // Avoid prototype pollution
      Object.prototype.hasOwnProperty.call(target, key) && isPlainObject(target[key])) {
        // Since `output` is a clone of `target` and we have narrowed `target` in this block we can cast to the same type.
        output[key] = deepmerge(target[key], source[key], options);
      } else if (options.clone) {
        output[key] = isPlainObject(source[key]) ? deepClone(source[key]) : source[key];
      } else {
        output[key] = source[key];
      }
    });
  }
  return output;
}

/***/ }),

/***/ 44853:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _styleFunctionSx__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   extendSxProp: () => (/* reexport safe */ _extendSxProp__WEBPACK_IMPORTED_MODULE_1__.A),
/* harmony export */   unstable_createStyleFunctionSx: () => (/* reexport safe */ _styleFunctionSx__WEBPACK_IMPORTED_MODULE_0__.k),
/* harmony export */   unstable_defaultSxConfig: () => (/* reexport safe */ _defaultSxConfig__WEBPACK_IMPORTED_MODULE_2__.A)
/* harmony export */ });
/* harmony import */ var _styleFunctionSx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92231);
/* harmony import */ var _extendSxProp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(43347);
/* harmony import */ var _defaultSxConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14152);





/***/ }),

/***/ 46648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44486);

function merge(acc, item) {
  if (!item) {
    return acc;
  }
  return (0,_mui_utils_deepmerge__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(acc, item, {
    clone: false // No need to clone deep, it's way faster.
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (merge);

/***/ }),

/***/ 49505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ generateUtilityClasses)
/* harmony export */ });
/* harmony import */ var _generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34772);

function generateUtilityClasses(componentName, slots, globalStatePrefix = 'Mui') {
  const result = {};
  slots.forEach(slot => {
    result[slot] = (0,_generateUtilityClass__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Ay)(componentName, slot, globalStatePrefix);
  });
  return result;
}

/***/ }),

/***/ 50635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ useFormControl)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30758);
/* harmony import */ var _FormControlContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5043);
'use client';



function useFormControl() {
  return react__WEBPACK_IMPORTED_MODULE_0__.useContext(_FormControlContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A);
}

/***/ }),

/***/ 50648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   I: () => (/* binding */ useRtl)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7883);
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(16338);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30758);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);


const _excluded = ["value"];



const RtlContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext();
function RtlProvider(_ref) {
  let {
      value
    } = _ref,
    props = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(_ref, _excluded);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(RtlContext.Provider, (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A)({
    value: value != null ? value : true
  }, props));
}
 false ? 0 : void 0;
const useRtl = () => {
  const value = react__WEBPACK_IMPORTED_MODULE_0__.useContext(RtlContext);
  return value != null ? value : false;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RtlProvider);

/***/ }),

/***/ 50991:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;

'use client';

__webpack_unused_export__ = ({
  value: true
});
exports.A = void 0;
var React = _interopRequireWildcard(__webpack_require__(30758));
var _styledEngine = __webpack_require__(30882);
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme(defaultTheme = null) {
  const contextTheme = React.useContext(_styledEngine.ThemeContext);
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
}
var _default = exports.A = useTheme;

/***/ }),

/***/ 51610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ material_GlobalStyles_GlobalStyles)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7883);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/index.js
var react = __webpack_require__(30758);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+styled-engine@5.16.14_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion_k3b6ef5xmbrmz5y7lhinh5jaka/node_modules/@mui/styled-engine/GlobalStyles/GlobalStyles.js
var GlobalStyles = __webpack_require__(68105);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/useTheme.js
var useTheme = __webpack_require__(96334);
// EXTERNAL MODULE: ./node_modules/.pnpm/react@18.3.1/node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(86070);
;// ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/GlobalStyles/GlobalStyles.js
'use client';






function GlobalStyles_GlobalStyles({
  styles,
  themeId,
  defaultTheme = {}
}) {
  const upperTheme = (0,useTheme/* default */.A)(defaultTheme);
  const globalStyles = typeof styles === 'function' ? styles(themeId ? upperTheme[themeId] || upperTheme : upperTheme) : styles;
  return /*#__PURE__*/(0,jsx_runtime.jsx)(GlobalStyles/* default */.A, {
    styles: globalStyles
  });
}
 false ? 0 : void 0;
/* harmony default export */ const esm_GlobalStyles_GlobalStyles = (GlobalStyles_GlobalStyles);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/styles/defaultTheme.js
var defaultTheme = __webpack_require__(76612);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/styles/identifier.js
var identifier = __webpack_require__(54073);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/GlobalStyles/GlobalStyles.js
'use client';








function GlobalStyles_GlobalStyles_GlobalStyles(props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)(esm_GlobalStyles_GlobalStyles, (0,esm_extends/* default */.A)({}, props, {
    defaultTheme: defaultTheme/* default */.A,
    themeId: identifier/* default */.A
  }));
}
 false ? 0 : void 0;
/* harmony default export */ const material_GlobalStyles_GlobalStyles = (GlobalStyles_GlobalStyles_GlobalStyles);

/***/ }),

/***/ 52689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ formControlState)
/* harmony export */ });
function formControlState({
  props,
  states,
  muiFormControl
}) {
  return states.reduce((acc, state) => {
    acc[state] = props[state];
    if (muiFormControl) {
      if (typeof props[state] === 'undefined') {
        acc[state] = muiFormControl[state];
      }
    }
    return acc;
  }, {});
}

/***/ }),

/***/ 52937:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function clamp(val, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
  return Math.max(min, Math.min(val, max));
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clamp);

/***/ }),

/***/ 54073:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ('$$material');

/***/ }),

/***/ 55153:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   b: () => (/* binding */ useDefaultProps)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30758);
/* harmony import */ var _mui_utils_resolveProps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(20711);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
'use client';





const PropsContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(undefined);
function DefaultPropsProvider({
  value,
  children
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(PropsContext.Provider, {
    value: value,
    children: children
  });
}
 false ? 0 : void 0;
function getThemeProps(params) {
  const {
    theme,
    name,
    props
  } = params;
  if (!theme || !theme.components || !theme.components[name]) {
    return props;
  }
  const config = theme.components[name];
  if (config.defaultProps) {
    // compatible with v5 signature
    return (0,_mui_utils_resolveProps__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(config.defaultProps, props);
  }
  if (!config.styleOverrides && !config.variants) {
    // v6 signature, no property 'defaultProps'
    return (0,_mui_utils_resolveProps__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(config, props);
  }
  return props;
}
function useDefaultProps({
  props,
  name
}) {
  const ctx = react__WEBPACK_IMPORTED_MODULE_0__.useContext(PropsContext);
  return getThemeProps({
    props,
    name,
    theme: {
      components: ctx
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultPropsProvider);

/***/ }),

/***/ 58945:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(54249);
__webpack_unused_export__ = ({
  value: true
});
exports.Ay = createStyled;
__webpack_unused_export__ = shouldForwardProp;
__webpack_unused_export__ = void 0;
var _extends2 = _interopRequireDefault(__webpack_require__(13581));
var _objectWithoutPropertiesLoose2 = _interopRequireDefault(__webpack_require__(71756));
var _styledEngine = _interopRequireWildcard(__webpack_require__(30882));
var _deepmerge = __webpack_require__(66787);
var _capitalize = _interopRequireDefault(__webpack_require__(32777));
var _getDisplayName = _interopRequireDefault(__webpack_require__(5316));
var _createTheme = _interopRequireDefault(__webpack_require__(65466));
var _styleFunctionSx = _interopRequireDefault(__webpack_require__(44853));
const _excluded = ["ownerState"],
  _excluded2 = ["variants"],
  _excluded3 = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
/* eslint-disable no-underscore-dangle */
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

// https://github.com/emotion-js/emotion/blob/26ded6109fcd8ca9875cc2ce4564fee678a3f3c5/packages/styled/src/utils.js#L40
function isStringTag(tag) {
  return typeof tag === 'string' &&
  // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  tag.charCodeAt(0) > 96;
}

// Update /system/styled/#api in case if this changes
function shouldForwardProp(prop) {
  return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
const systemDefaultTheme = __webpack_unused_export__ = (0, _createTheme.default)();
const lowercaseFirstLetter = string => {
  if (!string) {
    return string;
  }
  return string.charAt(0).toLowerCase() + string.slice(1);
};
function resolveTheme({
  defaultTheme,
  theme,
  themeId
}) {
  return isEmpty(theme) ? defaultTheme : theme[themeId] || theme;
}
function defaultOverridesResolver(slot) {
  if (!slot) {
    return null;
  }
  return (props, styles) => styles[slot];
}
function processStyleArg(callableStyle, _ref) {
  let {
      ownerState
    } = _ref,
    props = (0, _objectWithoutPropertiesLoose2.default)(_ref, _excluded);
  const resolvedStylesArg = typeof callableStyle === 'function' ? callableStyle((0, _extends2.default)({
    ownerState
  }, props)) : callableStyle;
  if (Array.isArray(resolvedStylesArg)) {
    return resolvedStylesArg.flatMap(resolvedStyle => processStyleArg(resolvedStyle, (0, _extends2.default)({
      ownerState
    }, props)));
  }
  if (!!resolvedStylesArg && typeof resolvedStylesArg === 'object' && Array.isArray(resolvedStylesArg.variants)) {
    const {
        variants = []
      } = resolvedStylesArg,
      otherStyles = (0, _objectWithoutPropertiesLoose2.default)(resolvedStylesArg, _excluded2);
    let result = otherStyles;
    variants.forEach(variant => {
      let isMatch = true;
      if (typeof variant.props === 'function') {
        isMatch = variant.props((0, _extends2.default)({
          ownerState
        }, props, ownerState));
      } else {
        Object.keys(variant.props).forEach(key => {
          if ((ownerState == null ? void 0 : ownerState[key]) !== variant.props[key] && props[key] !== variant.props[key]) {
            isMatch = false;
          }
        });
      }
      if (isMatch) {
        if (!Array.isArray(result)) {
          result = [result];
        }
        result.push(typeof variant.style === 'function' ? variant.style((0, _extends2.default)({
          ownerState
        }, props, ownerState)) : variant.style);
      }
    });
    return result;
  }
  return resolvedStylesArg;
}
function createStyled(input = {}) {
  const {
    themeId,
    defaultTheme = systemDefaultTheme,
    rootShouldForwardProp = shouldForwardProp,
    slotShouldForwardProp = shouldForwardProp
  } = input;
  const systemSx = props => {
    return (0, _styleFunctionSx.default)((0, _extends2.default)({}, props, {
      theme: resolveTheme((0, _extends2.default)({}, props, {
        defaultTheme,
        themeId
      }))
    }));
  };
  systemSx.__mui_systemSx = true;
  return (tag, inputOptions = {}) => {
    // Filter out the `sx` style function from the previous styled component to prevent unnecessary styles generated by the composite components.
    (0, _styledEngine.internal_processStyles)(tag, styles => styles.filter(style => !(style != null && style.__mui_systemSx)));
    const {
        name: componentName,
        slot: componentSlot,
        skipVariantsResolver: inputSkipVariantsResolver,
        skipSx: inputSkipSx,
        // TODO v6: remove `lowercaseFirstLetter()` in the next major release
        // For more details: https://github.com/mui/material-ui/pull/37908
        overridesResolver = defaultOverridesResolver(lowercaseFirstLetter(componentSlot))
      } = inputOptions,
      options = (0, _objectWithoutPropertiesLoose2.default)(inputOptions, _excluded3);

    // if skipVariantsResolver option is defined, take the value, otherwise, true for root and false for other slots.
    const skipVariantsResolver = inputSkipVariantsResolver !== undefined ? inputSkipVariantsResolver :
    // TODO v6: remove `Root` in the next major release
    // For more details: https://github.com/mui/material-ui/pull/37908
    componentSlot && componentSlot !== 'Root' && componentSlot !== 'root' || false;
    const skipSx = inputSkipSx || false;
    let label;
    if (false) {}
    let shouldForwardPropOption = shouldForwardProp;

    // TODO v6: remove `Root` in the next major release
    // For more details: https://github.com/mui/material-ui/pull/37908
    if (componentSlot === 'Root' || componentSlot === 'root') {
      shouldForwardPropOption = rootShouldForwardProp;
    } else if (componentSlot) {
      // any other slot specified
      shouldForwardPropOption = slotShouldForwardProp;
    } else if (isStringTag(tag)) {
      // for string (html) tag, preserve the behavior in emotion & styled-components.
      shouldForwardPropOption = undefined;
    }
    const defaultStyledResolver = (0, _styledEngine.default)(tag, (0, _extends2.default)({
      shouldForwardProp: shouldForwardPropOption,
      label
    }, options));
    const transformStyleArg = stylesArg => {
      // On the server Emotion doesn't use React.forwardRef for creating components, so the created
      // component stays as a function. This condition makes sure that we do not interpolate functions
      // which are basically components used as a selectors.
      if (typeof stylesArg === 'function' && stylesArg.__emotion_real !== stylesArg || (0, _deepmerge.isPlainObject)(stylesArg)) {
        return props => processStyleArg(stylesArg, (0, _extends2.default)({}, props, {
          theme: resolveTheme({
            theme: props.theme,
            defaultTheme,
            themeId
          })
        }));
      }
      return stylesArg;
    };
    const muiStyledResolver = (styleArg, ...expressions) => {
      let transformedStyleArg = transformStyleArg(styleArg);
      const expressionsWithDefaultTheme = expressions ? expressions.map(transformStyleArg) : [];
      if (componentName && overridesResolver) {
        expressionsWithDefaultTheme.push(props => {
          const theme = resolveTheme((0, _extends2.default)({}, props, {
            defaultTheme,
            themeId
          }));
          if (!theme.components || !theme.components[componentName] || !theme.components[componentName].styleOverrides) {
            return null;
          }
          const styleOverrides = theme.components[componentName].styleOverrides;
          const resolvedStyleOverrides = {};
          // TODO: v7 remove iteration and use `resolveStyleArg(styleOverrides[slot])` directly
          Object.entries(styleOverrides).forEach(([slotKey, slotStyle]) => {
            resolvedStyleOverrides[slotKey] = processStyleArg(slotStyle, (0, _extends2.default)({}, props, {
              theme
            }));
          });
          return overridesResolver(props, resolvedStyleOverrides);
        });
      }
      if (componentName && !skipVariantsResolver) {
        expressionsWithDefaultTheme.push(props => {
          var _theme$components;
          const theme = resolveTheme((0, _extends2.default)({}, props, {
            defaultTheme,
            themeId
          }));
          const themeVariants = theme == null || (_theme$components = theme.components) == null || (_theme$components = _theme$components[componentName]) == null ? void 0 : _theme$components.variants;
          return processStyleArg({
            variants: themeVariants
          }, (0, _extends2.default)({}, props, {
            theme
          }));
        });
      }
      if (!skipSx) {
        expressionsWithDefaultTheme.push(systemSx);
      }
      const numOfCustomFnsApplied = expressionsWithDefaultTheme.length - expressions.length;
      if (Array.isArray(styleArg) && numOfCustomFnsApplied > 0) {
        const placeholders = new Array(numOfCustomFnsApplied).fill('');
        // If the type is array, than we need to add placeholders in the template for the overrides, variants and the sx styles.
        transformedStyleArg = [...styleArg, ...placeholders];
        transformedStyleArg.raw = [...styleArg.raw, ...placeholders];
      }
      const Component = defaultStyledResolver(transformedStyleArg, ...expressionsWithDefaultTheme);
      if (false) {}
      if (tag.muiName) {
        Component.muiName = tag.muiName;
      }
      return Component;
    };
    if (defaultStyledResolver.withConfig) {
      muiStyledResolver.withConfig = defaultStyledResolver.withConfig;
    }
    return muiStyledResolver;
  };
}

/***/ }),

/***/ 60469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ useThemeProps_useThemeProps)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/useThemeProps/getThemeProps.js
var getThemeProps = __webpack_require__(13528);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/useTheme.js
var useTheme = __webpack_require__(96334);
;// ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/useThemeProps/useThemeProps.js
'use client';



function useThemeProps({
  props,
  name,
  defaultTheme,
  themeId
}) {
  let theme = (0,useTheme/* default */.A)(defaultTheme);
  if (themeId) {
    theme = theme[themeId] || theme;
  }
  const mergedProps = (0,getThemeProps/* default */.A)({
    theme,
    name,
    props
  });
  return mergedProps;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/styles/defaultTheme.js
var defaultTheme = __webpack_require__(76612);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/styles/identifier.js
var identifier = __webpack_require__(54073);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/styles/useThemeProps.js
'use client';




function useThemeProps_useThemeProps({
  props,
  name
}) {
  return useThemeProps({
    props,
    name,
    defaultTheme: defaultTheme/* default */.A,
    themeId: identifier/* default */.A
  });
}

/***/ }),

/***/ 62597:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   BO: () => (/* binding */ getStyleValue),
/* harmony export */   Yn: () => (/* binding */ getPath)
/* harmony export */ });
/* harmony import */ var _mui_utils_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39875);
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(65192);



function getPath(obj, path, checkVars = true) {
  if (!path || typeof path !== 'string') {
    return null;
  }

  // Check if CSS variables are used
  if (obj && obj.vars && checkVars) {
    const val = `vars.${path}`.split('.').reduce((acc, item) => acc && acc[item] ? acc[item] : null, obj);
    if (val != null) {
      return val;
    }
  }
  return path.split('.').reduce((acc, item) => {
    if (acc && acc[item] != null) {
      return acc[item];
    }
    return null;
  }, obj);
}
function getStyleValue(themeMapping, transform, propValueFinal, userValue = propValueFinal) {
  let value;
  if (typeof themeMapping === 'function') {
    value = themeMapping(propValueFinal);
  } else if (Array.isArray(themeMapping)) {
    value = themeMapping[propValueFinal] || userValue;
  } else {
    value = getPath(themeMapping, propValueFinal) || userValue;
  }
  if (transform) {
    value = transform(value, userValue, themeMapping);
  }
  return value;
}
function style(options) {
  const {
    prop,
    cssProperty = options.prop,
    themeKey,
    transform
  } = options;

  // false positive
  // eslint-disable-next-line react/function-component-definition
  const fn = props => {
    if (props[prop] == null) {
      return null;
    }
    const propValue = props[prop];
    const theme = props.theme;
    const themeMapping = getPath(theme, themeKey) || {};
    const styleFromPropValue = propValueFinal => {
      let value = getStyleValue(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === 'string') {
        // Haven't found value
        value = getStyleValue(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : (0,_mui_utils_capitalize__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return (0,_breakpoints__WEBPACK_IMPORTED_MODULE_1__/* .handleBreakpoints */ .NI)(props, propValue, styleFromPropValue);
  };
  fn.propTypes =  false ? 0 : {};
  fn.filterProps = [prop];
  return fn;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (style);

/***/ }),

/***/ 65192:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EU: () => (/* binding */ createEmptyBreakpointObject),
/* harmony export */   NI: () => (/* binding */ handleBreakpoints),
/* harmony export */   vf: () => (/* binding */ removeUnusedBreakpoints),
/* harmony export */   zu: () => (/* binding */ values)
/* harmony export */ });
/* unused harmony exports mergeBreakpointsInOrder, computeBreakpointsBase, resolveBreakpointValues */





// The breakpoint **start** at this value.
// For instance with the first breakpoint xs: [xs, sm[.
const values = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536 // large screen
};
const defaultBreakpoints = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ['xs', 'sm', 'md', 'lg', 'xl'],
  up: key => `@media (min-width:${values[key]}px)`
};
function handleBreakpoints(props, propValue, styleFromPropValue) {
  const theme = props.theme || {};
  if (Array.isArray(propValue)) {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return propValue.reduce((acc, item, index) => {
      acc[themeBreakpoints.up(themeBreakpoints.keys[index])] = styleFromPropValue(propValue[index]);
      return acc;
    }, {});
  }
  if (typeof propValue === 'object') {
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    return Object.keys(propValue).reduce((acc, breakpoint) => {
      // key is breakpoint
      if (Object.keys(themeBreakpoints.values || values).indexOf(breakpoint) !== -1) {
        const mediaKey = themeBreakpoints.up(breakpoint);
        acc[mediaKey] = styleFromPropValue(propValue[breakpoint], breakpoint);
      } else {
        const cssKey = breakpoint;
        acc[cssKey] = propValue[cssKey];
      }
      return acc;
    }, {});
  }
  const output = styleFromPropValue(propValue);
  return output;
}
function breakpoints(styleFunction) {
  // false positive
  // eslint-disable-next-line react/function-component-definition
  const newStyleFunction = props => {
    const theme = props.theme || {};
    const base = styleFunction(props);
    const themeBreakpoints = theme.breakpoints || defaultBreakpoints;
    const extended = themeBreakpoints.keys.reduce((acc, key) => {
      if (props[key]) {
        acc = acc || {};
        acc[themeBreakpoints.up(key)] = styleFunction(_extends({
          theme
        }, props[key]));
      }
      return acc;
    }, null);
    return merge(base, extended);
  };
  newStyleFunction.propTypes =  false ? 0 : {};
  newStyleFunction.filterProps = ['xs', 'sm', 'md', 'lg', 'xl', ...styleFunction.filterProps];
  return newStyleFunction;
}
function createEmptyBreakpointObject(breakpointsInput = {}) {
  var _breakpointsInput$key;
  const breakpointsInOrder = (_breakpointsInput$key = breakpointsInput.keys) == null ? void 0 : _breakpointsInput$key.reduce((acc, key) => {
    const breakpointStyleKey = breakpointsInput.up(key);
    acc[breakpointStyleKey] = {};
    return acc;
  }, {});
  return breakpointsInOrder || {};
}
function removeUnusedBreakpoints(breakpointKeys, style) {
  return breakpointKeys.reduce((acc, key) => {
    const breakpointOutput = acc[key];
    const isBreakpointUnused = !breakpointOutput || Object.keys(breakpointOutput).length === 0;
    if (isBreakpointUnused) {
      delete acc[key];
    }
    return acc;
  }, style);
}
function mergeBreakpointsInOrder(breakpointsInput, ...styles) {
  const emptyBreakpoints = createEmptyBreakpointObject(breakpointsInput);
  const mergedOutput = [emptyBreakpoints, ...styles].reduce((prev, next) => deepmerge(prev, next), {});
  return removeUnusedBreakpoints(Object.keys(emptyBreakpoints), mergedOutput);
}

// compute base for responsive values; e.g.,
// [1,2,3] => {xs: true, sm: true, md: true}
// {xs: 1, sm: 2, md: 3} => {xs: true, sm: true, md: true}
function computeBreakpointsBase(breakpointValues, themeBreakpoints) {
  // fixed value
  if (typeof breakpointValues !== 'object') {
    return {};
  }
  const base = {};
  const breakpointsKeys = Object.keys(themeBreakpoints);
  if (Array.isArray(breakpointValues)) {
    breakpointsKeys.forEach((breakpoint, i) => {
      if (i < breakpointValues.length) {
        base[breakpoint] = true;
      }
    });
  } else {
    breakpointsKeys.forEach(breakpoint => {
      if (breakpointValues[breakpoint] != null) {
        base[breakpoint] = true;
      }
    });
  }
  return base;
}
function resolveBreakpointValues({
  values: breakpointValues,
  breakpoints: themeBreakpoints,
  base: customBase
}) {
  const base = customBase || computeBreakpointsBase(breakpointValues, themeBreakpoints);
  const keys = Object.keys(base);
  if (keys.length === 0) {
    return breakpointValues;
  }
  let previous;
  return keys.reduce((acc, breakpoint, i) => {
    if (Array.isArray(breakpointValues)) {
      acc[breakpoint] = breakpointValues[i] != null ? breakpointValues[i] : breakpointValues[previous];
      previous = i;
    } else if (typeof breakpointValues === 'object') {
      acc[breakpoint] = breakpointValues[breakpoint] != null ? breakpointValues[breakpoint] : breakpointValues[previous];
      previous = breakpoint;
    } else {
      acc[breakpoint] = breakpointValues;
    }
    return acc;
  }, {});
}
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (breakpoints)));

/***/ }),

/***/ 65466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _createTheme__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   private_createBreakpoints: () => (/* reexport safe */ _createBreakpoints__WEBPACK_IMPORTED_MODULE_1__.A),
/* harmony export */   unstable_applyStyles: () => (/* reexport safe */ _applyStyles__WEBPACK_IMPORTED_MODULE_2__.A)
/* harmony export */ });
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82001);
/* harmony import */ var _createBreakpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66546);
/* harmony import */ var _applyStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(80588);




/***/ }),

/***/ 66546:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ createBreakpoints)
/* harmony export */ });
/* unused harmony export breakpointKeys */
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(16338);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7883);


const _excluded = ["values", "unit", "step"];
// Sorted ASC by size. That's important.
// It can't be configured as it's used statically for propTypes.
const breakpointKeys = (/* unused pure expression or super */ null && (['xs', 'sm', 'md', 'lg', 'xl']));
const sortBreakpointsValues = values => {
  const breakpointsAsArray = Object.keys(values).map(key => ({
    key,
    val: values[key]
  })) || [];
  // Sort in ascending order
  breakpointsAsArray.sort((breakpoint1, breakpoint2) => breakpoint1.val - breakpoint2.val);
  return breakpointsAsArray.reduce((acc, obj) => {
    return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({}, acc, {
      [obj.key]: obj.val
    });
  }, {});
};

// Keep in mind that @media is inclusive by the CSS specification.
function createBreakpoints(breakpoints) {
  const {
      // The breakpoint **start** at this value.
      // For instance with the first breakpoint xs: [xs, sm).
      values = {
        xs: 0,
        // phone
        sm: 600,
        // tablet
        md: 900,
        // small laptop
        lg: 1200,
        // desktop
        xl: 1536 // large screen
      },
      unit = 'px',
      step = 5
    } = breakpoints,
    other = (0,_babel_runtime_helpers_esm_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(breakpoints, _excluded);
  const sortedValues = sortBreakpointsValues(values);
  const keys = Object.keys(sortedValues);
  function up(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (min-width:${value}${unit})`;
  }
  function down(key) {
    const value = typeof values[key] === 'number' ? values[key] : key;
    return `@media (max-width:${value - step / 100}${unit})`;
  }
  function between(start, end) {
    const endIndex = keys.indexOf(end);
    return `@media (min-width:${typeof values[start] === 'number' ? values[start] : start}${unit}) and ` + `(max-width:${(endIndex !== -1 && typeof values[keys[endIndex]] === 'number' ? values[keys[endIndex]] : end) - step / 100}${unit})`;
  }
  function only(key) {
    if (keys.indexOf(key) + 1 < keys.length) {
      return between(key, keys[keys.indexOf(key) + 1]);
    }
    return up(key);
  }
  function not(key) {
    // handle first and last key separately, for better readability
    const keyIndex = keys.indexOf(key);
    if (keyIndex === 0) {
      return up(keys[1]);
    }
    if (keyIndex === keys.length - 1) {
      return down(keys[keyIndex]);
    }
    return between(key, keys[keys.indexOf(key) + 1]).replace('@media', '@media not all and');
  }
  return (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)({
    keys,
    values: sortedValues,
    up,
    down,
    between,
    only,
    not,
    unit
  }, other);
}

/***/ }),

/***/ 66787:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _deepmerge__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   isPlainObject: () => (/* reexport safe */ _deepmerge__WEBPACK_IMPORTED_MODULE_0__.Q)
/* harmony export */ });
/* harmony import */ var _deepmerge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(44486);



/***/ }),

/***/ 68105:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ GlobalStyles)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30758);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19936);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
'use client';





function isEmpty(obj) {
  return obj === undefined || obj === null || Object.keys(obj).length === 0;
}
function GlobalStyles(props) {
  const {
    styles,
    defaultTheme = {}
  } = props;
  const globalStyles = typeof styles === 'function' ? themeInput => styles(isEmpty(themeInput) ? defaultTheme : themeInput) : styles;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_2__/* .Global */ .mL, {
    styles: globalStyles
  });
}
 false ? 0 : void 0;

/***/ }),

/***/ 70927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ composeClasses)
/* harmony export */ });
function composeClasses(slots, getUtilityClass, classes = undefined) {
  const output = {};
  Object.keys(slots).forEach(
  // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
  // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
  slot => {
    output[slot] = slots[slot].reduce((acc, key) => {
      if (key) {
        const utilityClass = getUtilityClass(key);
        if (utilityClass !== '') {
          acc.push(utilityClass);
        }
        if (classes && classes[key]) {
          acc.push(classes[key]);
        }
      }
      return acc;
    }, []).join(' ');
  });
  return output;
}

/***/ }),

/***/ 71943:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(54249);
__webpack_unused_export__ = ({
  value: true
});
exports.X4 = alpha;
__webpack_unused_export__ = blend;
__webpack_unused_export__ = void 0;
exports.e$ = darken;
__webpack_unused_export__ = decomposeColor;
__webpack_unused_export__ = emphasize;
exports.eM = getContrastRatio;
__webpack_unused_export__ = getLuminance;
__webpack_unused_export__ = hexToRgb;
__webpack_unused_export__ = hslToRgb;
exports.a = lighten;
__webpack_unused_export__ = private_safeAlpha;
__webpack_unused_export__ = void 0;
__webpack_unused_export__ = private_safeDarken;
__webpack_unused_export__ = private_safeEmphasize;
__webpack_unused_export__ = private_safeLighten;
__webpack_unused_export__ = recomposeColor;
__webpack_unused_export__ = rgbToHex;
var _formatMuiErrorMessage2 = _interopRequireDefault(__webpack_require__(74796));
var _clamp = _interopRequireDefault(__webpack_require__(39382));
/* eslint-disable @typescript-eslint/naming-convention */

/**
 * Returns a number whose value is limited to the given range.
 * @param {number} value The value to be clamped
 * @param {number} min The lower boundary of the output range
 * @param {number} max The upper boundary of the output range
 * @returns {number} A number in the range [min, max]
 */
function clampWrapper(value, min = 0, max = 1) {
  if (false) {}
  return (0, _clamp.default)(value, min, max);
}

/**
 * Converts a color from CSS hex format to CSS rgb format.
 * @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 * @returns {string} A CSS rgb color string
 */
function hexToRgb(color) {
  color = color.slice(1);
  const re = new RegExp(`.{1,${color.length >= 6 ? 2 : 1}}`, 'g');
  let colors = color.match(re);
  if (colors && colors[0].length === 1) {
    colors = colors.map(n => n + n);
  }
  return colors ? `rgb${colors.length === 4 ? 'a' : ''}(${colors.map((n, index) => {
    return index < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1000) / 1000;
  }).join(', ')})` : '';
}
function intToHex(int) {
  const hex = int.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {object} - A MUI color object: {type: string, values: number[]}
 */
function decomposeColor(color) {
  // Idempotent
  if (color.type) {
    return color;
  }
  if (color.charAt(0) === '#') {
    return decomposeColor(hexToRgb(color));
  }
  const marker = color.indexOf('(');
  const type = color.substring(0, marker);
  if (['rgb', 'rgba', 'hsl', 'hsla', 'color'].indexOf(type) === -1) {
    throw new Error( false ? 0 : (0, _formatMuiErrorMessage2.default)(9, color));
  }
  let values = color.substring(marker + 1, color.length - 1);
  let colorSpace;
  if (type === 'color') {
    values = values.split(' ');
    colorSpace = values.shift();
    if (values.length === 4 && values[3].charAt(0) === '/') {
      values[3] = values[3].slice(1);
    }
    if (['srgb', 'display-p3', 'a98-rgb', 'prophoto-rgb', 'rec-2020'].indexOf(colorSpace) === -1) {
      throw new Error( false ? 0 : (0, _formatMuiErrorMessage2.default)(10, colorSpace));
    }
  } else {
    values = values.split(',');
  }
  values = values.map(value => parseFloat(value));
  return {
    type,
    values,
    colorSpace
  };
}

/**
 * Returns a channel created from the input color.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {string} - The channel for the color, that can be used in rgba or hsla colors
 */
const colorChannel = color => {
  const decomposedColor = decomposeColor(color);
  return decomposedColor.values.slice(0, 3).map((val, idx) => decomposedColor.type.indexOf('hsl') !== -1 && idx !== 0 ? `${val}%` : val).join(' ');
};
__webpack_unused_export__ = colorChannel;
const private_safeColorChannel = (color, warning) => {
  try {
    return colorChannel(color);
  } catch (error) {
    if (warning && "production" !== 'production') {}
    return color;
  }
};

/**
 * Converts a color object with type and values to a string.
 * @param {object} color - Decomposed color
 * @param {string} color.type - One of: 'rgb', 'rgba', 'hsl', 'hsla', 'color'
 * @param {array} color.values - [n,n,n] or [n,n,n,n]
 * @returns {string} A CSS color string
 */
__webpack_unused_export__ = private_safeColorChannel;
function recomposeColor(color) {
  const {
    type,
    colorSpace
  } = color;
  let {
    values
  } = color;
  if (type.indexOf('rgb') !== -1) {
    // Only convert the first 3 values to int (i.e. not alpha)
    values = values.map((n, i) => i < 3 ? parseInt(n, 10) : n);
  } else if (type.indexOf('hsl') !== -1) {
    values[1] = `${values[1]}%`;
    values[2] = `${values[2]}%`;
  }
  if (type.indexOf('color') !== -1) {
    values = `${colorSpace} ${values.join(' ')}`;
  } else {
    values = `${values.join(', ')}`;
  }
  return `${type}(${values})`;
}

/**
 * Converts a color from CSS rgb format to CSS hex format.
 * @param {string} color - RGB color, i.e. rgb(n, n, n)
 * @returns {string} A CSS rgb color string, i.e. #nnnnnn
 */
function rgbToHex(color) {
  // Idempotent
  if (color.indexOf('#') === 0) {
    return color;
  }
  const {
    values
  } = decomposeColor(color);
  return `#${values.map((n, i) => intToHex(i === 3 ? Math.round(255 * n) : n)).join('')}`;
}

/**
 * Converts a color from hsl format to rgb format.
 * @param {string} color - HSL color values
 * @returns {string} rgb color values
 */
function hslToRgb(color) {
  color = decomposeColor(color);
  const {
    values
  } = color;
  const h = values[0];
  const s = values[1] / 100;
  const l = values[2] / 100;
  const a = s * Math.min(l, 1 - l);
  const f = (n, k = (n + h / 30) % 12) => l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  let type = 'rgb';
  const rgb = [Math.round(f(0) * 255), Math.round(f(8) * 255), Math.round(f(4) * 255)];
  if (color.type === 'hsla') {
    type += 'a';
    rgb.push(values[3]);
  }
  return recomposeColor({
    type,
    values: rgb
  });
}
/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */
function getLuminance(color) {
  color = decomposeColor(color);
  let rgb = color.type === 'hsl' || color.type === 'hsla' ? decomposeColor(hslToRgb(color)).values : color.values;
  rgb = rgb.map(val => {
    if (color.type !== 'color') {
      val /= 255; // normalized
    }
    return val <= 0.03928 ? val / 12.92 : ((val + 0.055) / 1.055) ** 2.4;
  });

  // Truncate at 3 digits
  return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3));
}

/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21.
 */
function getContrastRatio(foreground, background) {
  const lumA = getLuminance(foreground);
  const lumB = getLuminance(background);
  return (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05);
}

/**
 * Sets the absolute transparency of a color.
 * Any existing alpha values are overwritten.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} value - value to set the alpha channel to in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function alpha(color, value) {
  color = decomposeColor(color);
  value = clampWrapper(value);
  if (color.type === 'rgb' || color.type === 'hsl') {
    color.type += 'a';
  }
  if (color.type === 'color') {
    color.values[3] = `/${value}`;
  } else {
    color.values[3] = value;
  }
  return recomposeColor(color);
}
function private_safeAlpha(color, value, warning) {
  try {
    return alpha(color, value);
  } catch (error) {
    if (warning && "production" !== 'production') {}
    return color;
  }
}

/**
 * Darkens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function darken(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clampWrapper(coefficient);
  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] *= 1 - coefficient;
  } else if (color.type.indexOf('rgb') !== -1 || color.type.indexOf('color') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] *= 1 - coefficient;
    }
  }
  return recomposeColor(color);
}
function private_safeDarken(color, coefficient, warning) {
  try {
    return darken(color, coefficient);
  } catch (error) {
    if (warning && "production" !== 'production') {}
    return color;
  }
}

/**
 * Lightens a color.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function lighten(color, coefficient) {
  color = decomposeColor(color);
  coefficient = clampWrapper(coefficient);
  if (color.type.indexOf('hsl') !== -1) {
    color.values[2] += (100 - color.values[2]) * coefficient;
  } else if (color.type.indexOf('rgb') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (255 - color.values[i]) * coefficient;
    }
  } else if (color.type.indexOf('color') !== -1) {
    for (let i = 0; i < 3; i += 1) {
      color.values[i] += (1 - color.values[i]) * coefficient;
    }
  }
  return recomposeColor(color);
}
function private_safeLighten(color, coefficient, warning) {
  try {
    return lighten(color, coefficient);
  } catch (error) {
    if (warning && "production" !== 'production') {}
    return color;
  }
}

/**
 * Darken or lighten a color, depending on its luminance.
 * Light colors are darkened, dark colors are lightened.
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color()
 * @param {number} coefficient=0.15 - multiplier in the range 0 - 1
 * @returns {string} A CSS color string. Hex input values are returned as rgb
 */
function emphasize(color, coefficient = 0.15) {
  return getLuminance(color) > 0.5 ? darken(color, coefficient) : lighten(color, coefficient);
}
function private_safeEmphasize(color, coefficient, warning) {
  try {
    return emphasize(color, coefficient);
  } catch (error) {
    if (warning && "production" !== 'production') {}
    return color;
  }
}

/**
 * Blend a transparent overlay color with a background color, resulting in a single
 * RGB color.
 * @param {string} background - CSS color
 * @param {string} overlay - CSS color
 * @param {number} opacity - Opacity multiplier in the range 0 - 1
 * @param {number} [gamma=1.0] - Gamma correction factor. For gamma-correct blending, 2.2 is usual.
 */
function blend(background, overlay, opacity, gamma = 1.0) {
  const blendChannel = (b, o) => Math.round((b ** (1 / gamma) * (1 - opacity) + o ** (1 / gamma) * opacity) ** gamma);
  const backgroundColor = decomposeColor(background);
  const overlayColor = decomposeColor(overlay);
  const rgb = [blendChannel(backgroundColor.values[0], overlayColor.values[0]), blendChannel(backgroundColor.values[1], overlayColor.values[1]), blendChannel(backgroundColor.values[2], overlayColor.values[2])];
  return recomposeColor({
    type: 'rgb',
    values: rgb
  });
}

/***/ }),

/***/ 74796:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _formatMuiErrorMessage__WEBPACK_IMPORTED_MODULE_0__.A)
/* harmony export */ });
/* harmony import */ var _formatMuiErrorMessage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7857);


/***/ }),

/***/ 75833:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// copied from @mui/system/createStyled
function slotShouldForwardProp(prop) {
  return prop !== 'ownerState' && prop !== 'theme' && prop !== 'sx' && prop !== 'as';
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slotShouldForwardProp);

/***/ }),

/***/ 76479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ styles_createTheme)
});

// UNUSED EXPORTS: createMuiTheme

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7883);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(16338);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/formatMuiErrorMessage/formatMuiErrorMessage.js
var formatMuiErrorMessage = __webpack_require__(7857);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/deepmerge/deepmerge.js
var deepmerge = __webpack_require__(44486);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js + 5 modules
var defaultSxConfig = __webpack_require__(14152);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js
var styleFunctionSx = __webpack_require__(92231);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/createTheme/createTheme.js + 2 modules
var createTheme = __webpack_require__(82001);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/styles/createMixins.js

function createMixins(breakpoints, mixins) {
  return (0,esm_extends/* default */.A)({
    toolbar: {
      minHeight: 56,
      [breakpoints.up('xs')]: {
        '@media (orientation: landscape)': {
          minHeight: 48
        }
      },
      [breakpoints.up('sm')]: {
        minHeight: 64
      }
    }
  }, mixins);
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/colorManipulator.js
var colorManipulator = __webpack_require__(71943);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/colors/common.js
const common = {
  black: '#000',
  white: '#fff'
};
/* harmony default export */ const colors_common = (common);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/colors/grey.js
const grey = {
  50: '#fafafa',
  100: '#f5f5f5',
  200: '#eeeeee',
  300: '#e0e0e0',
  400: '#bdbdbd',
  500: '#9e9e9e',
  600: '#757575',
  700: '#616161',
  800: '#424242',
  900: '#212121',
  A100: '#f5f5f5',
  A200: '#eeeeee',
  A400: '#bdbdbd',
  A700: '#616161'
};
/* harmony default export */ const colors_grey = (grey);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/colors/purple.js
const purple = {
  50: '#f3e5f5',
  100: '#e1bee7',
  200: '#ce93d8',
  300: '#ba68c8',
  400: '#ab47bc',
  500: '#9c27b0',
  600: '#8e24aa',
  700: '#7b1fa2',
  800: '#6a1b9a',
  900: '#4a148c',
  A100: '#ea80fc',
  A200: '#e040fb',
  A400: '#d500f9',
  A700: '#aa00ff'
};
/* harmony default export */ const colors_purple = (purple);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/colors/red.js
const red = {
  50: '#ffebee',
  100: '#ffcdd2',
  200: '#ef9a9a',
  300: '#e57373',
  400: '#ef5350',
  500: '#f44336',
  600: '#e53935',
  700: '#d32f2f',
  800: '#c62828',
  900: '#b71c1c',
  A100: '#ff8a80',
  A200: '#ff5252',
  A400: '#ff1744',
  A700: '#d50000'
};
/* harmony default export */ const colors_red = (red);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/colors/orange.js
const orange = {
  50: '#fff3e0',
  100: '#ffe0b2',
  200: '#ffcc80',
  300: '#ffb74d',
  400: '#ffa726',
  500: '#ff9800',
  600: '#fb8c00',
  700: '#f57c00',
  800: '#ef6c00',
  900: '#e65100',
  A100: '#ffd180',
  A200: '#ffab40',
  A400: '#ff9100',
  A700: '#ff6d00'
};
/* harmony default export */ const colors_orange = (orange);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/colors/blue.js
const blue = {
  50: '#e3f2fd',
  100: '#bbdefb',
  200: '#90caf9',
  300: '#64b5f6',
  400: '#42a5f5',
  500: '#2196f3',
  600: '#1e88e5',
  700: '#1976d2',
  800: '#1565c0',
  900: '#0d47a1',
  A100: '#82b1ff',
  A200: '#448aff',
  A400: '#2979ff',
  A700: '#2962ff'
};
/* harmony default export */ const colors_blue = (blue);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/colors/lightBlue.js
const lightBlue = {
  50: '#e1f5fe',
  100: '#b3e5fc',
  200: '#81d4fa',
  300: '#4fc3f7',
  400: '#29b6f6',
  500: '#03a9f4',
  600: '#039be5',
  700: '#0288d1',
  800: '#0277bd',
  900: '#01579b',
  A100: '#80d8ff',
  A200: '#40c4ff',
  A400: '#00b0ff',
  A700: '#0091ea'
};
/* harmony default export */ const colors_lightBlue = (lightBlue);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/colors/green.js
const green = {
  50: '#e8f5e9',
  100: '#c8e6c9',
  200: '#a5d6a7',
  300: '#81c784',
  400: '#66bb6a',
  500: '#4caf50',
  600: '#43a047',
  700: '#388e3c',
  800: '#2e7d32',
  900: '#1b5e20',
  A100: '#b9f6ca',
  A200: '#69f0ae',
  A400: '#00e676',
  A700: '#00c853'
};
/* harmony default export */ const colors_green = (green);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/styles/createPalette.js



const _excluded = ["mode", "contrastThreshold", "tonalOffset"];










const light = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: 'rgba(0, 0, 0, 0.87)',
    // Secondary text.
    secondary: 'rgba(0, 0, 0, 0.6)',
    // Disabled text have even lower visual prominence.
    disabled: 'rgba(0, 0, 0, 0.38)'
  },
  // The color used to divide different elements.
  divider: 'rgba(0, 0, 0, 0.12)',
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: colors_common.white,
    default: colors_common.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: 'rgba(0, 0, 0, 0.54)',
    // The color of an hovered action.
    hover: 'rgba(0, 0, 0, 0.04)',
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: 'rgba(0, 0, 0, 0.08)',
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: 'rgba(0, 0, 0, 0.26)',
    // The background color of a disabled action.
    disabledBackground: 'rgba(0, 0, 0, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(0, 0, 0, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
};
const dark = {
  text: {
    primary: colors_common.white,
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    icon: 'rgba(255, 255, 255, 0.5)'
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  background: {
    paper: '#121212',
    default: '#121212'
  },
  action: {
    active: colors_common.white,
    hover: 'rgba(255, 255, 255, 0.08)',
    hoverOpacity: 0.08,
    selected: 'rgba(255, 255, 255, 0.16)',
    selectedOpacity: 0.16,
    disabled: 'rgba(255, 255, 255, 0.3)',
    disabledBackground: 'rgba(255, 255, 255, 0.12)',
    disabledOpacity: 0.38,
    focus: 'rgba(255, 255, 255, 0.12)',
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function addLightOrDark(intent, direction, shade, tonalOffset) {
  const tonalOffsetLight = tonalOffset.light || tonalOffset;
  const tonalOffsetDark = tonalOffset.dark || tonalOffset * 1.5;
  if (!intent[direction]) {
    if (intent.hasOwnProperty(shade)) {
      intent[direction] = intent[shade];
    } else if (direction === 'light') {
      intent.light = (0,colorManipulator/* lighten */.a)(intent.main, tonalOffsetLight);
    } else if (direction === 'dark') {
      intent.dark = (0,colorManipulator/* darken */.e$)(intent.main, tonalOffsetDark);
    }
  }
}
function getDefaultPrimary(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: colors_blue[200],
      light: colors_blue[50],
      dark: colors_blue[400]
    };
  }
  return {
    main: colors_blue[700],
    light: colors_blue[400],
    dark: colors_blue[800]
  };
}
function getDefaultSecondary(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: colors_purple[200],
      light: colors_purple[50],
      dark: colors_purple[400]
    };
  }
  return {
    main: colors_purple[500],
    light: colors_purple[300],
    dark: colors_purple[700]
  };
}
function getDefaultError(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: colors_red[500],
      light: colors_red[300],
      dark: colors_red[700]
    };
  }
  return {
    main: colors_red[700],
    light: colors_red[400],
    dark: colors_red[800]
  };
}
function getDefaultInfo(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: colors_lightBlue[400],
      light: colors_lightBlue[300],
      dark: colors_lightBlue[700]
    };
  }
  return {
    main: colors_lightBlue[700],
    light: colors_lightBlue[500],
    dark: colors_lightBlue[900]
  };
}
function getDefaultSuccess(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: colors_green[400],
      light: colors_green[300],
      dark: colors_green[700]
    };
  }
  return {
    main: colors_green[800],
    light: colors_green[500],
    dark: colors_green[900]
  };
}
function getDefaultWarning(mode = 'light') {
  if (mode === 'dark') {
    return {
      main: colors_orange[400],
      light: colors_orange[300],
      dark: colors_orange[700]
    };
  }
  return {
    main: '#ed6c02',
    // closest to orange[800] that pass 3:1.
    light: colors_orange[500],
    dark: colors_orange[900]
  };
}
function createPalette(palette) {
  const {
      mode = 'light',
      contrastThreshold = 3,
      tonalOffset = 0.2
    } = palette,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(palette, _excluded);
  const primary = palette.primary || getDefaultPrimary(mode);
  const secondary = palette.secondary || getDefaultSecondary(mode);
  const error = palette.error || getDefaultError(mode);
  const info = palette.info || getDefaultInfo(mode);
  const success = palette.success || getDefaultSuccess(mode);
  const warning = palette.warning || getDefaultWarning(mode);

  // Use the same logic as
  // Bootstrap: https://github.com/twbs/bootstrap/blob/1d6e3710dd447de1a200f29e8fa521f8a0908f70/scss/_functions.scss#L59
  // and material-components-web https://github.com/material-components/material-components-web/blob/ac46b8863c4dab9fc22c4c662dc6bd1b65dd652f/packages/mdc-theme/_functions.scss#L54
  function getContrastText(background) {
    const contrastText = (0,colorManipulator/* getContrastRatio */.eM)(background, dark.text.primary) >= contrastThreshold ? dark.text.primary : light.text.primary;
    if (false) {}
    return contrastText;
  }
  const augmentColor = ({
    color,
    name,
    mainShade = 500,
    lightShade = 300,
    darkShade = 700
  }) => {
    color = (0,esm_extends/* default */.A)({}, color);
    if (!color.main && color[mainShade]) {
      color.main = color[mainShade];
    }
    if (!color.hasOwnProperty('main')) {
      throw new Error( false ? 0 : (0,formatMuiErrorMessage/* default */.A)(11, name ? ` (${name})` : '', mainShade));
    }
    if (typeof color.main !== 'string') {
      throw new Error( false ? 0 : (0,formatMuiErrorMessage/* default */.A)(12, name ? ` (${name})` : '', JSON.stringify(color.main)));
    }
    addLightOrDark(color, 'light', lightShade, tonalOffset);
    addLightOrDark(color, 'dark', darkShade, tonalOffset);
    if (!color.contrastText) {
      color.contrastText = getContrastText(color.main);
    }
    return color;
  };
  const modes = {
    dark,
    light
  };
  if (false) {}
  const paletteOutput = (0,deepmerge/* default */.A)((0,esm_extends/* default */.A)({
    // A collection of common colors.
    common: (0,esm_extends/* default */.A)({}, colors_common),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode,
    // The colors used to represent primary interface elements for a user.
    primary: augmentColor({
      color: primary,
      name: 'primary'
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: augmentColor({
      color: secondary,
      name: 'secondary',
      mainShade: 'A400',
      lightShade: 'A200',
      darkShade: 'A700'
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: augmentColor({
      color: error,
      name: 'error'
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: augmentColor({
      color: warning,
      name: 'warning'
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: augmentColor({
      color: info,
      name: 'info'
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: augmentColor({
      color: success,
      name: 'success'
    }),
    // The grey colors.
    grey: colors_grey,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText,
    // Generate a rich color object.
    augmentColor,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset
  }, modes[mode]), other);
  return paletteOutput;
}
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/styles/createTypography.js


const createTypography_excluded = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];

function round(value) {
  return Math.round(value * 1e5) / 1e5;
}
const caseAllCaps = {
  textTransform: 'uppercase'
};
const defaultFontFamily = '"Roboto", "Helvetica", "Arial", sans-serif';

/**
 * @see @link{https://m2.material.io/design/typography/the-type-system.html}
 * @see @link{https://m2.material.io/design/typography/understanding-typography.html}
 */
function createTypography(palette, typography) {
  const _ref = typeof typography === 'function' ? typography(palette) : typography,
    {
      fontFamily = defaultFontFamily,
      // The default font size of the Material Specification.
      fontSize = 14,
      // px
      fontWeightLight = 300,
      fontWeightRegular = 400,
      fontWeightMedium = 500,
      fontWeightBold = 700,
      // Tell MUI what's the font-size on the html element.
      // 16px is the default font-size used by browsers.
      htmlFontSize = 16,
      // Apply the CSS properties to all the variants.
      allVariants,
      pxToRem: pxToRem2
    } = _ref,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(_ref, createTypography_excluded);
  if (false) {}
  const coef = fontSize / 14;
  const pxToRem = pxToRem2 || (size => `${size / htmlFontSize * coef}rem`);
  const buildVariant = (fontWeight, size, lineHeight, letterSpacing, casing) => (0,esm_extends/* default */.A)({
    fontFamily,
    fontWeight,
    fontSize: pxToRem(size),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight
  }, fontFamily === defaultFontFamily ? {
    letterSpacing: `${round(letterSpacing / size)}em`
  } : {}, casing, allVariants);
  const variants = {
    h1: buildVariant(fontWeightLight, 96, 1.167, -1.5),
    h2: buildVariant(fontWeightLight, 60, 1.2, -0.5),
    h3: buildVariant(fontWeightRegular, 48, 1.167, 0),
    h4: buildVariant(fontWeightRegular, 34, 1.235, 0.25),
    h5: buildVariant(fontWeightRegular, 24, 1.334, 0),
    h6: buildVariant(fontWeightMedium, 20, 1.6, 0.15),
    subtitle1: buildVariant(fontWeightRegular, 16, 1.75, 0.15),
    subtitle2: buildVariant(fontWeightMedium, 14, 1.57, 0.1),
    body1: buildVariant(fontWeightRegular, 16, 1.5, 0.15),
    body2: buildVariant(fontWeightRegular, 14, 1.43, 0.15),
    button: buildVariant(fontWeightMedium, 14, 1.75, 0.4, caseAllCaps),
    caption: buildVariant(fontWeightRegular, 12, 1.66, 0.4),
    overline: buildVariant(fontWeightRegular, 12, 2.66, 1, caseAllCaps),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: 'inherit',
      fontWeight: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      letterSpacing: 'inherit'
    }
  };
  return (0,deepmerge/* default */.A)((0,esm_extends/* default */.A)({
    htmlFontSize,
    pxToRem,
    fontFamily,
    fontSize,
    fontWeightLight,
    fontWeightRegular,
    fontWeightMedium,
    fontWeightBold
  }, variants), other, {
    clone: false // No need to clone deep
  });
}
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/styles/shadows.js
const shadowKeyUmbraOpacity = 0.2;
const shadowKeyPenumbraOpacity = 0.14;
const shadowAmbientShadowOpacity = 0.12;
function createShadow(...px) {
  return [`${px[0]}px ${px[1]}px ${px[2]}px ${px[3]}px rgba(0,0,0,${shadowKeyUmbraOpacity})`, `${px[4]}px ${px[5]}px ${px[6]}px ${px[7]}px rgba(0,0,0,${shadowKeyPenumbraOpacity})`, `${px[8]}px ${px[9]}px ${px[10]}px ${px[11]}px rgba(0,0,0,${shadowAmbientShadowOpacity})`].join(',');
}

// Values from https://github.com/material-components/material-components-web/blob/be8747f94574669cb5e7add1a7c54fa41a89cec7/packages/mdc-elevation/_variables.scss
const shadows = ['none', createShadow(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), createShadow(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), createShadow(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), createShadow(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), createShadow(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), createShadow(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), createShadow(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), createShadow(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), createShadow(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), createShadow(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), createShadow(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), createShadow(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), createShadow(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), createShadow(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), createShadow(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), createShadow(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), createShadow(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), createShadow(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), createShadow(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), createShadow(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), createShadow(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), createShadow(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), createShadow(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), createShadow(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)];
/* harmony default export */ const styles_shadows = (shadows);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/styles/createTransitions.js


const createTransitions_excluded = ["duration", "easing", "delay"];
// Follow https://material.google.com/motion/duration-easing.html#duration-easing-natural-easing-curves
// to learn the context in which each easing should be used.
const easing = {
  // This is the most common easing curve.
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)'
};

// Follow https://m2.material.io/guidelines/motion/duration-easing.html#duration-easing-common-durations
// to learn when use what timing
const duration = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function formatMs(milliseconds) {
  return `${Math.round(milliseconds)}ms`;
}
function getAutoHeightDuration(height) {
  if (!height) {
    return 0;
  }
  const constant = height / 36;

  // https://www.wolframalpha.com/input/?i=(4+%2B+15+*+(x+%2F+36+)+**+0.25+%2B+(x+%2F+36)+%2F+5)+*+10
  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}
function createTransitions(inputTransitions) {
  const mergedEasing = (0,esm_extends/* default */.A)({}, easing, inputTransitions.easing);
  const mergedDuration = (0,esm_extends/* default */.A)({}, duration, inputTransitions.duration);
  const create = (props = ['all'], options = {}) => {
    const {
        duration: durationOption = mergedDuration.standard,
        easing: easingOption = mergedEasing.easeInOut,
        delay = 0
      } = options,
      other = (0,objectWithoutPropertiesLoose/* default */.A)(options, createTransitions_excluded);
    if (false) {}
    return (Array.isArray(props) ? props : [props]).map(animatedProp => `${animatedProp} ${typeof durationOption === 'string' ? durationOption : formatMs(durationOption)} ${easingOption} ${typeof delay === 'string' ? delay : formatMs(delay)}`).join(',');
  };
  return (0,esm_extends/* default */.A)({
    getAutoHeightDuration,
    create
  }, inputTransitions, {
    easing: mergedEasing,
    duration: mergedDuration
  });
}
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/styles/zIndex.js
// We need to centralize the zIndex definitions as they work
// like global values in the browser.
const zIndex = {
  mobileStepper: 1000,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
};
/* harmony default export */ const styles_zIndex = (zIndex);
;// ./node_modules/.pnpm/@mui+material@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+style_sw3o6p5ovg6pukyeihkaticzum/node_modules/@mui/material/styles/createTheme.js



const createTheme_excluded = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];










function createTheme_createTheme(options = {}, ...args) {
  const {
      mixins: mixinsInput = {},
      palette: paletteInput = {},
      transitions: transitionsInput = {},
      typography: typographyInput = {}
    } = options,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(options, createTheme_excluded);
  if (options.vars &&
  // The error should throw only for the root theme creation because user is not allowed to use a custom node `vars`.
  // `generateCssVars` is the closest identifier for checking that the `options` is a result of `extendTheme` with CSS variables so that user can create new theme for nested ThemeProvider.
  options.generateCssVars === undefined) {
    throw new Error( false ? 0 : (0,formatMuiErrorMessage/* default */.A)(18));
  }
  const palette = createPalette(paletteInput);
  const systemTheme = (0,createTheme/* default */.A)(options);
  let muiTheme = (0,deepmerge/* default */.A)(systemTheme, {
    mixins: createMixins(systemTheme.breakpoints, mixinsInput),
    palette,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: styles_shadows.slice(),
    typography: createTypography(palette, typographyInput),
    transitions: createTransitions(transitionsInput),
    zIndex: (0,esm_extends/* default */.A)({}, styles_zIndex)
  });
  muiTheme = (0,deepmerge/* default */.A)(muiTheme, other);
  muiTheme = args.reduce((acc, argument) => (0,deepmerge/* default */.A)(acc, argument), muiTheme);
  if (false) {}
  muiTheme.unstable_sxConfig = (0,esm_extends/* default */.A)({}, defaultSxConfig/* default */.A, other == null ? void 0 : other.unstable_sxConfig);
  muiTheme.unstable_sx = function sx(props) {
    return (0,styleFunctionSx/* default */.A)({
      sx: props,
      theme: this
    });
  };
  return muiTheme;
}
let warnedOnce = false;
function createMuiTheme(...args) {
  if (false) {}
  return createTheme_createTheme(...args);
}
/* harmony default export */ const styles_createTheme = (createTheme_createTheme);

/***/ }),

/***/ 76612:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76479);
'use client';


const defaultTheme = (0,_createTheme__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (defaultTheme);

/***/ }),

/***/ 77534:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Ay: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports html, body, styles */
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7883);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30758);
/* harmony import */ var _DefaultPropsProvider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10684);
/* harmony import */ var _GlobalStyles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51610);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(86070);
'use client';








const html = (theme, enableColorScheme) => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({
  WebkitFontSmoothing: 'antialiased',
  // Antialiasing.
  MozOsxFontSmoothing: 'grayscale',
  // Antialiasing.
  // Change from `box-sizing: content-box` so that `width`
  // is not affected by `padding` or `border`.
  boxSizing: 'border-box',
  // Fix font resize problem in iOS
  WebkitTextSizeAdjust: '100%'
}, enableColorScheme && !theme.vars && {
  colorScheme: theme.palette.mode
});
const body = theme => (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({
  color: (theme.vars || theme).palette.text.primary
}, theme.typography.body1, {
  backgroundColor: (theme.vars || theme).palette.background.default,
  '@media print': {
    // Save printer ink.
    backgroundColor: (theme.vars || theme).palette.common.white
  }
});
const styles = (theme, enableColorScheme = false) => {
  var _theme$components;
  const colorSchemeStyles = {};
  if (enableColorScheme && theme.colorSchemes) {
    Object.entries(theme.colorSchemes).forEach(([key, scheme]) => {
      var _scheme$palette;
      colorSchemeStyles[theme.getColorSchemeSelector(key).replace(/\s*&/, '')] = {
        colorScheme: (_scheme$palette = scheme.palette) == null ? void 0 : _scheme$palette.mode
      };
    });
  }
  let defaultStyles = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({
    html: html(theme, enableColorScheme),
    '*, *::before, *::after': {
      boxSizing: 'inherit'
    },
    'strong, b': {
      fontWeight: theme.typography.fontWeightBold
    },
    body: (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({
      margin: 0
    }, body(theme), {
      // Add support for document.body.requestFullScreen().
      // Other elements, if background transparent, are not supported.
      '&::backdrop': {
        backgroundColor: (theme.vars || theme).palette.background.default
      }
    })
  }, colorSchemeStyles);
  const themeOverrides = (_theme$components = theme.components) == null || (_theme$components = _theme$components.MuiCssBaseline) == null ? void 0 : _theme$components.styleOverrides;
  if (themeOverrides) {
    defaultStyles = [defaultStyles, themeOverrides];
  }
  return defaultStyles;
};

/**
 * Kickstart an elegant, consistent, and simple baseline to build upon.
 */
function CssBaseline(inProps) {
  const props = (0,_DefaultPropsProvider__WEBPACK_IMPORTED_MODULE_3__/* .useDefaultProps */ .b)({
    props: inProps,
    name: 'MuiCssBaseline'
  });
  const {
    children,
    enableColorScheme = false
  } = props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_GlobalStyles__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A, {
      styles: theme => styles(theme, enableColorScheme)
    }), children]
  });
}
 false ? 0 : void 0;
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CssBaseline);

/***/ }),

/***/ 80588:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ applyStyles)
/* harmony export */ });
/**
 * A universal utility to style components with multiple color modes. Always use it from the theme object.
 * It works with:
 *  - [Basic theme](https://mui.com/material-ui/customization/dark-mode/)
 *  - [CSS theme variables](https://mui.com/material-ui/experimental-api/css-theme-variables/overview/)
 *  - Zero-runtime engine
 *
 * Tips: Use an array over object spread and place `theme.applyStyles()` last.
 *
 * ✅ [{ background: '#e5e5e5' }, theme.applyStyles('dark', { background: '#1c1c1c' })]
 *
 * 🚫 { background: '#e5e5e5', ...theme.applyStyles('dark', { background: '#1c1c1c' })}
 *
 * @example
 * 1. using with `styled`:
 * ```jsx
 *   const Component = styled('div')(({ theme }) => [
 *     { background: '#e5e5e5' },
 *     theme.applyStyles('dark', {
 *       background: '#1c1c1c',
 *       color: '#fff',
 *     }),
 *   ]);
 * ```
 *
 * @example
 * 2. using with `sx` prop:
 * ```jsx
 *   <Box sx={theme => [
 *     { background: '#e5e5e5' },
 *     theme.applyStyles('dark', {
 *        background: '#1c1c1c',
 *        color: '#fff',
 *      }),
 *     ]}
 *   />
 * ```
 *
 * @example
 * 3. theming a component:
 * ```jsx
 *   extendTheme({
 *     components: {
 *       MuiButton: {
 *         styleOverrides: {
 *           root: ({ theme }) => [
 *             { background: '#e5e5e5' },
 *             theme.applyStyles('dark', {
 *               background: '#1c1c1c',
 *               color: '#fff',
 *             }),
 *           ],
 *         },
 *       }
 *     }
 *   })
 *```
 */
function applyStyles(key, styles) {
  // @ts-expect-error this is 'any' type
  const theme = this;
  if (theme.vars && typeof theme.getColorSchemeSelector === 'function') {
    // If CssVarsProvider is used as a provider,
    // returns '* :where([data-mui-color-scheme="light|dark"]) &'
    const selector = theme.getColorSchemeSelector(key).replace(/(\[[^\]]+\])/, '*:where($1)');
    return {
      [selector]: styles
    };
  }
  if (theme.palette.mode === key) {
    return styles;
  }
  return {};
}

/***/ }),

/***/ 82001:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ createTheme_createTheme)
});

// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(7883);
// EXTERNAL MODULE: ./node_modules/.pnpm/@babel+runtime@7.26.10/node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
var objectWithoutPropertiesLoose = __webpack_require__(16338);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+utils@5.17.1_@types+react@18.3.19_react@18.3.1/node_modules/@mui/utils/esm/deepmerge/deepmerge.js
var deepmerge = __webpack_require__(44486);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/createTheme/createBreakpoints.js
var createBreakpoints = __webpack_require__(66546);
;// ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/createTheme/shape.js
const shape = {
  borderRadius: 4
};
/* harmony default export */ const createTheme_shape = (shape);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/spacing.js + 1 modules
var esm_spacing = __webpack_require__(96300);
;// ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/createTheme/createSpacing.js


// The different signatures imply different meaning for their arguments that can't be expressed structurally.
// We express the difference with variable names.

function createSpacing(spacingInput = 8) {
  // Already transformed.
  if (spacingInput.mui) {
    return spacingInput;
  }

  // Material Design layouts are visually balanced. Most measurements align to an 8dp grid, which aligns both spacing and the overall layout.
  // Smaller components, such as icons, can align to a 4dp grid.
  // https://m2.material.io/design/layout/understanding-layout.html
  const transform = (0,esm_spacing/* createUnarySpacing */.LX)({
    spacing: spacingInput
  });
  const spacing = (...argsInput) => {
    if (false) {}
    const args = argsInput.length === 0 ? [1] : argsInput;
    return args.map(argument => {
      const output = transform(argument);
      return typeof output === 'number' ? `${output}px` : output;
    }).join(' ');
  };
  spacing.mui = true;
  return spacing;
}
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/styleFunctionSx/styleFunctionSx.js
var styleFunctionSx = __webpack_require__(92231);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/styleFunctionSx/defaultSxConfig.js + 5 modules
var defaultSxConfig = __webpack_require__(14152);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/createTheme/applyStyles.js
var applyStyles = __webpack_require__(80588);
;// ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/createTheme/createTheme.js


const _excluded = ["breakpoints", "palette", "spacing", "shape"];







function createTheme(options = {}, ...args) {
  const {
      breakpoints: breakpointsInput = {},
      palette: paletteInput = {},
      spacing: spacingInput,
      shape: shapeInput = {}
    } = options,
    other = (0,objectWithoutPropertiesLoose/* default */.A)(options, _excluded);
  const breakpoints = (0,createBreakpoints/* default */.A)(breakpointsInput);
  const spacing = createSpacing(spacingInput);
  let muiTheme = (0,deepmerge/* default */.A)({
    breakpoints,
    direction: 'ltr',
    components: {},
    // Inject component definitions.
    palette: (0,esm_extends/* default */.A)({
      mode: 'light'
    }, paletteInput),
    spacing,
    shape: (0,esm_extends/* default */.A)({}, createTheme_shape, shapeInput)
  }, other);
  muiTheme.applyStyles = applyStyles/* default */.A;
  muiTheme = args.reduce((acc, argument) => (0,deepmerge/* default */.A)(acc, argument), muiTheme);
  muiTheme.unstable_sxConfig = (0,esm_extends/* default */.A)({}, defaultSxConfig/* default */.A, other == null ? void 0 : other.unstable_sxConfig);
  muiTheme.unstable_sx = function sx(props) {
    return (0,styleFunctionSx/* default */.A)({
      sx: props,
      theme: this
    });
  };
  return muiTheme;
}
/* harmony default export */ const createTheme_createTheme = (createTheme);

/***/ }),

/***/ 83488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   R: () => (/* binding */ AdapterDayjs)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7883);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56287);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var dayjs_plugin_weekOfYear__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13652);
/* harmony import */ var dayjs_plugin_weekOfYear__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_weekOfYear__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21707);
/* harmony import */ var dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13780);
/* harmony import */ var dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(80822);
/* harmony import */ var dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var dayjs_plugin_advancedFormat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(78353);
/* harmony import */ var dayjs_plugin_advancedFormat__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs_plugin_advancedFormat__WEBPACK_IMPORTED_MODULE_5__);

/* eslint-disable class-methods-use-this */







dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_localizedFormat__WEBPACK_IMPORTED_MODULE_3___default()));
dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_weekOfYear__WEBPACK_IMPORTED_MODULE_1___default()));
dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_isBetween__WEBPACK_IMPORTED_MODULE_4___default()));
dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_advancedFormat__WEBPACK_IMPORTED_MODULE_5___default()));
const formatTokenMap = {
  // Year
  YY: 'year',
  YYYY: {
    sectionType: 'year',
    contentType: 'digit',
    maxLength: 4
  },
  // Month
  M: {
    sectionType: 'month',
    contentType: 'digit',
    maxLength: 2
  },
  MM: 'month',
  MMM: {
    sectionType: 'month',
    contentType: 'letter'
  },
  MMMM: {
    sectionType: 'month',
    contentType: 'letter'
  },
  // Day of the month
  D: {
    sectionType: 'day',
    contentType: 'digit',
    maxLength: 2
  },
  DD: 'day',
  Do: {
    sectionType: 'day',
    contentType: 'digit-with-letter'
  },
  // Day of the week
  d: {
    sectionType: 'weekDay',
    contentType: 'digit',
    maxLength: 2
  },
  dd: {
    sectionType: 'weekDay',
    contentType: 'letter'
  },
  ddd: {
    sectionType: 'weekDay',
    contentType: 'letter'
  },
  dddd: {
    sectionType: 'weekDay',
    contentType: 'letter'
  },
  // Meridiem
  A: 'meridiem',
  a: 'meridiem',
  // Hours
  H: {
    sectionType: 'hours',
    contentType: 'digit',
    maxLength: 2
  },
  HH: 'hours',
  h: {
    sectionType: 'hours',
    contentType: 'digit',
    maxLength: 2
  },
  hh: 'hours',
  // Minutes
  m: {
    sectionType: 'minutes',
    contentType: 'digit',
    maxLength: 2
  },
  mm: 'minutes',
  // Seconds
  s: {
    sectionType: 'seconds',
    contentType: 'digit',
    maxLength: 2
  },
  ss: 'seconds'
};
const defaultFormats = {
  year: 'YYYY',
  month: 'MMMM',
  monthShort: 'MMM',
  dayOfMonth: 'D',
  dayOfMonthFull: 'Do',
  weekday: 'dddd',
  weekdayShort: 'dd',
  hours24h: 'HH',
  hours12h: 'hh',
  meridiem: 'A',
  minutes: 'mm',
  seconds: 'ss',
  fullDate: 'll',
  keyboardDate: 'L',
  shortDate: 'MMM D',
  normalDate: 'D MMMM',
  normalDateWithWeekday: 'ddd, MMM D',
  fullTime: 'LT',
  fullTime12h: 'hh:mm A',
  fullTime24h: 'HH:mm',
  keyboardDateTime: 'L LT',
  keyboardDateTime12h: 'L hh:mm A',
  keyboardDateTime24h: 'L HH:mm'
};
const MISSING_UTC_PLUGIN = ['Missing UTC plugin', 'To be able to use UTC or timezones, you have to enable the `utc` plugin', 'Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-utc'].join('\n');
const MISSING_TIMEZONE_PLUGIN = ['Missing timezone plugin', 'To be able to use timezones, you have to enable both the `utc` and the `timezone` plugin', 'Find more information on https://mui.com/x/react-date-pickers/timezone/#day-js-and-timezone'].join('\n');
const withLocale = (dayjs, locale) => !locale ? dayjs : (...args) => dayjs(...args).locale(locale);
/**
 * Based on `@date-io/dayjs`
 *
 * MIT License
 *
 * Copyright (c) 2017 Dmitriy Kovalenko
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
class AdapterDayjs {
  constructor({
    locale: _locale,
    formats
  } = {}) {
    this.isMUIAdapter = true;
    this.isTimezoneCompatible = true;
    this.lib = 'dayjs';
    this.dayjs = void 0;
    this.locale = void 0;
    this.formats = void 0;
    this.escapedCharacters = {
      start: '[',
      end: ']'
    };
    this.formatTokenMap = formatTokenMap;
    this.setLocaleToValue = value => {
      const expectedLocale = this.getCurrentLocaleCode();
      if (expectedLocale === value.locale()) {
        return value;
      }
      return value.locale(expectedLocale);
    };
    this.hasUTCPlugin = () => typeof (dayjs__WEBPACK_IMPORTED_MODULE_0___default().utc) !== 'undefined';
    this.hasTimezonePlugin = () => typeof (dayjs__WEBPACK_IMPORTED_MODULE_0___default().tz) !== 'undefined';
    this.isSame = (value, comparing, comparisonTemplate) => {
      const comparingInValueTimezone = this.setTimezone(comparing, this.getTimezone(value));
      return value.format(comparisonTemplate) === comparingInValueTimezone.format(comparisonTemplate);
    };
    /**
     * Replaces "default" by undefined and "system" by the system timezone before passing it to `dayjs`.
     */
    this.cleanTimezone = timezone => {
      switch (timezone) {
        case 'default':
          {
            return undefined;
          }
        case 'system':
          {
            return dayjs__WEBPACK_IMPORTED_MODULE_0___default().tz.guess();
          }
        default:
          {
            return timezone;
          }
      }
    };
    this.createSystemDate = value => {
      if (this.hasUTCPlugin() && this.hasTimezonePlugin()) {
        const timezone = dayjs__WEBPACK_IMPORTED_MODULE_0___default().tz.guess();

        // We can't change the system timezone in the tests
        /* istanbul ignore next */
        if (timezone !== 'UTC') {
          return dayjs__WEBPACK_IMPORTED_MODULE_0___default().tz(value, timezone);
        }
        return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(value);
      }
      return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(value);
    };
    this.createUTCDate = value => {
      /* istanbul ignore next */
      if (!this.hasUTCPlugin()) {
        throw new Error(MISSING_UTC_PLUGIN);
      }
      return dayjs__WEBPACK_IMPORTED_MODULE_0___default().utc(value);
    };
    this.createTZDate = (value, timezone) => {
      /* istanbul ignore next */
      if (!this.hasUTCPlugin()) {
        throw new Error(MISSING_UTC_PLUGIN);
      }

      /* istanbul ignore next */
      if (!this.hasTimezonePlugin()) {
        throw new Error(MISSING_TIMEZONE_PLUGIN);
      }
      const keepLocalTime = value !== undefined && !value.endsWith('Z');
      return dayjs__WEBPACK_IMPORTED_MODULE_0___default()(value).tz(this.cleanTimezone(timezone), keepLocalTime);
    };
    this.getLocaleFormats = () => {
      const locales = (dayjs__WEBPACK_IMPORTED_MODULE_0___default().Ls);
      const locale = this.locale || 'en';
      let localeObject = locales[locale];
      if (localeObject === undefined) {
        /* istanbul ignore next */
        if (false) {}
        localeObject = locales.en;
      }
      return localeObject.formats;
    };
    /**
     * If the new day does not have the same offset as the old one (when switching to summer day time for example),
     * Then dayjs will not automatically adjust the offset (moment does).
     * We have to parse again the value to make sure the `fixOffset` method is applied.
     * See https://github.com/iamkun/dayjs/blob/b3624de619d6e734cd0ffdbbd3502185041c1b60/src/plugin/timezone/index.js#L72
     */
    this.adjustOffset = value => {
      if (!this.hasTimezonePlugin()) {
        return value;
      }
      const timezone = this.getTimezone(value);
      if (timezone !== 'UTC') {
        const fixedValue = value.tz(this.cleanTimezone(timezone), true);
        // TODO: Simplify the case when we raise the `dayjs` peer dep to 1.11.12 (https://github.com/iamkun/dayjs/releases/tag/v1.11.12)
        /* istanbul ignore next */
        // @ts-ignore
        if (fixedValue.$offset === (value.$offset ?? 0)) {
          return value;
        }
        // Change only what is needed to avoid creating a new object with unwanted data
        // Especially important when used in an environment where utc or timezone dates are used only in some places
        // Reference: https://github.com/mui/mui-x/issues/13290
        // @ts-ignore
        value.$offset = fixedValue.$offset;
      }
      return value;
    };
    this.date = (value, timezone = 'default') => {
      if (value === null) {
        return null;
      }
      let parsedValue;
      if (timezone === 'UTC') {
        parsedValue = this.createUTCDate(value);
      } else if (timezone === 'system' || timezone === 'default' && !this.hasTimezonePlugin()) {
        parsedValue = this.createSystemDate(value);
      } else {
        parsedValue = this.createTZDate(value, timezone);
      }
      if (this.locale === undefined) {
        return parsedValue;
      }
      return parsedValue.locale(this.locale);
    };
    this.getInvalidDate = () => dayjs__WEBPACK_IMPORTED_MODULE_0___default()(new Date('Invalid date'));
    this.getTimezone = value => {
      if (this.hasTimezonePlugin()) {
        // @ts-ignore
        const zone = value.$x?.$timezone;
        if (zone) {
          return zone;
        }
      }
      if (this.hasUTCPlugin() && value.isUTC()) {
        return 'UTC';
      }
      return 'system';
    };
    this.setTimezone = (value, timezone) => {
      if (this.getTimezone(value) === timezone) {
        return value;
      }
      if (timezone === 'UTC') {
        /* istanbul ignore next */
        if (!this.hasUTCPlugin()) {
          throw new Error(MISSING_UTC_PLUGIN);
        }
        return value.utc();
      }

      // We know that we have the UTC plugin.
      // Otherwise, the value timezone would always equal "system".
      // And it would be caught by the first "if" of this method.
      if (timezone === 'system') {
        return value.local();
      }
      if (!this.hasTimezonePlugin()) {
        if (timezone === 'default') {
          return value;
        }

        /* istanbul ignore next */
        throw new Error(MISSING_TIMEZONE_PLUGIN);
      }
      return dayjs__WEBPACK_IMPORTED_MODULE_0___default().tz(value, this.cleanTimezone(timezone));
    };
    this.toJsDate = value => {
      return value.toDate();
    };
    this.parse = (value, format) => {
      if (value === '') {
        return null;
      }
      return this.dayjs(value, format, this.locale, true);
    };
    this.getCurrentLocaleCode = () => {
      return this.locale || 'en';
    };
    this.is12HourCycleInCurrentLocale = () => {
      /* istanbul ignore next */
      return /A|a/.test(this.getLocaleFormats().LT || '');
    };
    this.expandFormat = format => {
      const localeFormats = this.getLocaleFormats();

      // @see https://github.com/iamkun/dayjs/blob/dev/src/plugin/localizedFormat/index.js
      const t = formatBis => formatBis.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (_, a, b) => a || b.slice(1));
      return format.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (_, a, b) => {
        const B = b && b.toUpperCase();
        return a || localeFormats[b] || t(localeFormats[B]);
      });
    };
    this.isValid = value => {
      if (value == null) {
        return false;
      }
      return value.isValid();
    };
    this.format = (value, formatKey) => {
      return this.formatByString(value, this.formats[formatKey]);
    };
    this.formatByString = (value, formatString) => {
      return this.dayjs(value).format(formatString);
    };
    this.formatNumber = numberToFormat => {
      return numberToFormat;
    };
    this.isEqual = (value, comparing) => {
      if (value === null && comparing === null) {
        return true;
      }
      if (value === null || comparing === null) {
        return false;
      }
      return value.toDate().getTime() === comparing.toDate().getTime();
    };
    this.isSameYear = (value, comparing) => {
      return this.isSame(value, comparing, 'YYYY');
    };
    this.isSameMonth = (value, comparing) => {
      return this.isSame(value, comparing, 'YYYY-MM');
    };
    this.isSameDay = (value, comparing) => {
      return this.isSame(value, comparing, 'YYYY-MM-DD');
    };
    this.isSameHour = (value, comparing) => {
      return value.isSame(comparing, 'hour');
    };
    this.isAfter = (value, comparing) => {
      return value > comparing;
    };
    this.isAfterYear = (value, comparing) => {
      if (!this.hasUTCPlugin()) {
        return value.isAfter(comparing, 'year');
      }
      return !this.isSameYear(value, comparing) && value.utc() > comparing.utc();
    };
    this.isAfterDay = (value, comparing) => {
      if (!this.hasUTCPlugin()) {
        return value.isAfter(comparing, 'day');
      }
      return !this.isSameDay(value, comparing) && value.utc() > comparing.utc();
    };
    this.isBefore = (value, comparing) => {
      return value < comparing;
    };
    this.isBeforeYear = (value, comparing) => {
      if (!this.hasUTCPlugin()) {
        return value.isBefore(comparing, 'year');
      }
      return !this.isSameYear(value, comparing) && value.utc() < comparing.utc();
    };
    this.isBeforeDay = (value, comparing) => {
      if (!this.hasUTCPlugin()) {
        return value.isBefore(comparing, 'day');
      }
      return !this.isSameDay(value, comparing) && value.utc() < comparing.utc();
    };
    this.isWithinRange = (value, [start, end]) => {
      return value >= start && value <= end;
    };
    this.startOfYear = value => {
      return this.adjustOffset(value.startOf('year'));
    };
    this.startOfMonth = value => {
      return this.adjustOffset(value.startOf('month'));
    };
    this.startOfWeek = value => {
      return this.adjustOffset(this.setLocaleToValue(value).startOf('week'));
    };
    this.startOfDay = value => {
      return this.adjustOffset(value.startOf('day'));
    };
    this.endOfYear = value => {
      return this.adjustOffset(value.endOf('year'));
    };
    this.endOfMonth = value => {
      return this.adjustOffset(value.endOf('month'));
    };
    this.endOfWeek = value => {
      return this.adjustOffset(this.setLocaleToValue(value).endOf('week'));
    };
    this.endOfDay = value => {
      return this.adjustOffset(value.endOf('day'));
    };
    this.addYears = (value, amount) => {
      return this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), 'year') : value.add(amount, 'year'));
    };
    this.addMonths = (value, amount) => {
      return this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), 'month') : value.add(amount, 'month'));
    };
    this.addWeeks = (value, amount) => {
      return this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), 'week') : value.add(amount, 'week'));
    };
    this.addDays = (value, amount) => {
      return this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), 'day') : value.add(amount, 'day'));
    };
    this.addHours = (value, amount) => {
      return this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), 'hour') : value.add(amount, 'hour'));
    };
    this.addMinutes = (value, amount) => {
      return this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), 'minute') : value.add(amount, 'minute'));
    };
    this.addSeconds = (value, amount) => {
      return this.adjustOffset(amount < 0 ? value.subtract(Math.abs(amount), 'second') : value.add(amount, 'second'));
    };
    this.getYear = value => {
      return value.year();
    };
    this.getMonth = value => {
      return value.month();
    };
    this.getDate = value => {
      return value.date();
    };
    this.getHours = value => {
      return value.hour();
    };
    this.getMinutes = value => {
      return value.minute();
    };
    this.getSeconds = value => {
      return value.second();
    };
    this.getMilliseconds = value => {
      return value.millisecond();
    };
    this.setYear = (value, year) => {
      return this.adjustOffset(value.set('year', year));
    };
    this.setMonth = (value, month) => {
      return this.adjustOffset(value.set('month', month));
    };
    this.setDate = (value, date) => {
      return this.adjustOffset(value.set('date', date));
    };
    this.setHours = (value, hours) => {
      return this.adjustOffset(value.set('hour', hours));
    };
    this.setMinutes = (value, minutes) => {
      return this.adjustOffset(value.set('minute', minutes));
    };
    this.setSeconds = (value, seconds) => {
      return this.adjustOffset(value.set('second', seconds));
    };
    this.setMilliseconds = (value, milliseconds) => {
      return this.adjustOffset(value.set('millisecond', milliseconds));
    };
    this.getDaysInMonth = value => {
      return value.daysInMonth();
    };
    this.getWeekArray = value => {
      const start = this.startOfWeek(this.startOfMonth(value));
      const end = this.endOfWeek(this.endOfMonth(value));
      let count = 0;
      let current = start;
      const nestedWeeks = [];
      while (current < end) {
        const weekNumber = Math.floor(count / 7);
        nestedWeeks[weekNumber] = nestedWeeks[weekNumber] || [];
        nestedWeeks[weekNumber].push(current);
        current = this.addDays(current, 1);
        count += 1;
      }
      return nestedWeeks;
    };
    this.getWeekNumber = value => {
      return value.week();
    };
    this.getYearRange = ([start, end]) => {
      const startDate = this.startOfYear(start);
      const endDate = this.endOfYear(end);
      const years = [];
      let current = startDate;
      while (this.isBefore(current, endDate)) {
        years.push(current);
        current = this.addYears(current, 1);
      }
      return years;
    };
    this.dayjs = withLocale((dayjs__WEBPACK_IMPORTED_MODULE_0___default()), _locale);
    this.locale = _locale;
    this.formats = (0,_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A)({}, defaultFormats, formats);

    // Moved plugins to the constructor to allow for users to use options on the library
    // for reference: https://github.com/mui/mui-x/pull/11151
    dayjs__WEBPACK_IMPORTED_MODULE_0___default().extend((dayjs_plugin_customParseFormat__WEBPACK_IMPORTED_MODULE_2___default()));
  }
  getDayOfWeek(value) {
    return value.day() + 1;
  }
}

/***/ }),

/***/ 86757:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _slotShouldForwardProp__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75833);

const rootShouldForwardProp = prop => (0,_slotShouldForwardProp__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(prop) && prop !== 'classes';
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (rootShouldForwardProp);

/***/ }),

/***/ 87771:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30758);
/* harmony import */ var _mui_styled_engine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50487);
'use client';



function isObjectEmpty(obj) {
  return Object.keys(obj).length === 0;
}
function useTheme(defaultTheme = null) {
  const contextTheme = react__WEBPACK_IMPORTED_MODULE_0__.useContext(_mui_styled_engine__WEBPACK_IMPORTED_MODULE_1__.T);
  return !contextTheme || isObjectEmpty(contextTheme) ? defaultTheme : contextTheme;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTheme);

/***/ }),

/***/ 92231:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   k: () => (/* binding */ unstable_createStyleFunctionSx)
/* harmony export */ });
/* harmony import */ var _mui_utils_capitalize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39875);
/* harmony import */ var _merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(46648);
/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62597);
/* harmony import */ var _breakpoints__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(65192);
/* harmony import */ var _defaultSxConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(14152);





function objectsHaveSameKeys(...objects) {
  const allKeys = objects.reduce((keys, object) => keys.concat(Object.keys(object)), []);
  const union = new Set(allKeys);
  return objects.every(object => union.size === Object.keys(object).length);
}
function callIfFn(maybeFn, arg) {
  return typeof maybeFn === 'function' ? maybeFn(arg) : maybeFn;
}

// eslint-disable-next-line @typescript-eslint/naming-convention
function unstable_createStyleFunctionSx() {
  function getThemeValue(prop, val, theme, config) {
    const props = {
      [prop]: val,
      theme
    };
    const options = config[prop];
    if (!options) {
      return {
        [prop]: val
      };
    }
    const {
      cssProperty = prop,
      themeKey,
      transform,
      style
    } = options;
    if (val == null) {
      return null;
    }

    // TODO v6: remove, see https://github.com/mui/material-ui/pull/38123
    if (themeKey === 'typography' && val === 'inherit') {
      return {
        [prop]: val
      };
    }
    const themeMapping = (0,_style__WEBPACK_IMPORTED_MODULE_0__/* .getPath */ .Yn)(theme, themeKey) || {};
    if (style) {
      return style(props);
    }
    const styleFromPropValue = propValueFinal => {
      let value = (0,_style__WEBPACK_IMPORTED_MODULE_0__/* .getStyleValue */ .BO)(themeMapping, transform, propValueFinal);
      if (propValueFinal === value && typeof propValueFinal === 'string') {
        // Haven't found value
        value = (0,_style__WEBPACK_IMPORTED_MODULE_0__/* .getStyleValue */ .BO)(themeMapping, transform, `${prop}${propValueFinal === 'default' ? '' : (0,_mui_utils_capitalize__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(propValueFinal)}`, propValueFinal);
      }
      if (cssProperty === false) {
        return value;
      }
      return {
        [cssProperty]: value
      };
    };
    return (0,_breakpoints__WEBPACK_IMPORTED_MODULE_2__/* .handleBreakpoints */ .NI)(props, val, styleFromPropValue);
  }
  function styleFunctionSx(props) {
    var _theme$unstable_sxCon;
    const {
      sx,
      theme = {}
    } = props || {};
    if (!sx) {
      return null; // Emotion & styled-components will neglect null
    }
    const config = (_theme$unstable_sxCon = theme.unstable_sxConfig) != null ? _theme$unstable_sxCon : _defaultSxConfig__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A;

    /*
     * Receive `sxInput` as object or callback
     * and then recursively check keys & values to create media query object styles.
     * (the result will be used in `styled`)
     */
    function traverse(sxInput) {
      let sxObject = sxInput;
      if (typeof sxInput === 'function') {
        sxObject = sxInput(theme);
      } else if (typeof sxInput !== 'object') {
        // value
        return sxInput;
      }
      if (!sxObject) {
        return null;
      }
      const emptyBreakpoints = (0,_breakpoints__WEBPACK_IMPORTED_MODULE_2__/* .createEmptyBreakpointObject */ .EU)(theme.breakpoints);
      const breakpointsKeys = Object.keys(emptyBreakpoints);
      let css = emptyBreakpoints;
      Object.keys(sxObject).forEach(styleKey => {
        const value = callIfFn(sxObject[styleKey], theme);
        if (value !== null && value !== undefined) {
          if (typeof value === 'object') {
            if (config[styleKey]) {
              css = (0,_merge__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(css, getThemeValue(styleKey, value, theme, config));
            } else {
              const breakpointsValues = (0,_breakpoints__WEBPACK_IMPORTED_MODULE_2__/* .handleBreakpoints */ .NI)({
                theme
              }, value, x => ({
                [styleKey]: x
              }));
              if (objectsHaveSameKeys(breakpointsValues, value)) {
                css[styleKey] = styleFunctionSx({
                  sx: value,
                  theme
                });
              } else {
                css = (0,_merge__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(css, breakpointsValues);
              }
            }
          } else {
            css = (0,_merge__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A)(css, getThemeValue(styleKey, value, theme, config));
          }
        }
      });
      return (0,_breakpoints__WEBPACK_IMPORTED_MODULE_2__/* .removeUnusedBreakpoints */ .vf)(breakpointsKeys, css);
    }
    return Array.isArray(sx) ? sx.map(traverse) : traverse(sx);
  }
  return styleFunctionSx;
}
const styleFunctionSx = unstable_createStyleFunctionSx();
styleFunctionSx.filterProps = ['sx'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styleFunctionSx);

/***/ }),

/***/ 93435:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ StyledEngineProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30758);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(50487);
/* harmony import */ var _emotion_cache__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(82096);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(86070);
'use client';






// prepend: true moves MUI styles to the top of the <head> so they're loaded first.
// It allows developers to easily override MUI styles with other styling solutions, like CSS modules.

let cache;
if (typeof document === 'object') {
  cache = (0,_emotion_cache__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)({
    key: 'css',
    prepend: true
  });
}
function StyledEngineProvider(props) {
  const {
    injectFirst,
    children
  } = props;
  return injectFirst && cache ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_emotion_react__WEBPACK_IMPORTED_MODULE_3__.C, {
    value: cache,
    children: children
  }) : children;
}
 false ? 0 : void 0;

/***/ }),

/***/ 96300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  LX: () => (/* binding */ createUnarySpacing),
  MA: () => (/* binding */ createUnaryUnit),
  _W: () => (/* binding */ getValue),
  Lc: () => (/* binding */ margin),
  Ms: () => (/* binding */ padding)
});

// UNUSED EXPORTS: default, getStyleFromPropValue, marginKeys, paddingKeys

// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/breakpoints.js
var breakpoints = __webpack_require__(65192);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/style.js
var style = __webpack_require__(62597);
// EXTERNAL MODULE: ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/merge.js
var merge = __webpack_require__(46648);
;// ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/memoize.js
function memoize(fn) {
  const cache = {};
  return arg => {
    if (cache[arg] === undefined) {
      cache[arg] = fn(arg);
    }
    return cache[arg];
  };
}
;// ./node_modules/.pnpm/@mui+system@5.17.1_@emotion+react@11.14.0_@types+react@18.3.19_react@18.3.1__@emotion+styled@_2bams5maxe333jzdc26ypd3foe/node_modules/@mui/system/esm/spacing.js





const properties = {
  m: 'margin',
  p: 'padding'
};
const directions = {
  t: 'Top',
  r: 'Right',
  b: 'Bottom',
  l: 'Left',
  x: ['Left', 'Right'],
  y: ['Top', 'Bottom']
};
const aliases = {
  marginX: 'mx',
  marginY: 'my',
  paddingX: 'px',
  paddingY: 'py'
};

// memoize() impact:
// From 300,000 ops/sec
// To 350,000 ops/sec
const getCssProperties = memoize(prop => {
  // It's not a shorthand notation.
  if (prop.length > 2) {
    if (aliases[prop]) {
      prop = aliases[prop];
    } else {
      return [prop];
    }
  }
  const [a, b] = prop.split('');
  const property = properties[a];
  const direction = directions[b] || '';
  return Array.isArray(direction) ? direction.map(dir => property + dir) : [property + direction];
});
const marginKeys = ['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'margin', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft', 'marginX', 'marginY', 'marginInline', 'marginInlineStart', 'marginInlineEnd', 'marginBlock', 'marginBlockStart', 'marginBlockEnd'];
const paddingKeys = ['p', 'pt', 'pr', 'pb', 'pl', 'px', 'py', 'padding', 'paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'paddingX', 'paddingY', 'paddingInline', 'paddingInlineStart', 'paddingInlineEnd', 'paddingBlock', 'paddingBlockStart', 'paddingBlockEnd'];
const spacingKeys = [...marginKeys, ...paddingKeys];
function createUnaryUnit(theme, themeKey, defaultValue, propName) {
  var _getPath;
  const themeSpacing = (_getPath = (0,style/* getPath */.Yn)(theme, themeKey, false)) != null ? _getPath : defaultValue;
  if (typeof themeSpacing === 'number') {
    return abs => {
      if (typeof abs === 'string') {
        return abs;
      }
      if (false) {}
      return themeSpacing * abs;
    };
  }
  if (Array.isArray(themeSpacing)) {
    return abs => {
      if (typeof abs === 'string') {
        return abs;
      }
      if (false) {}
      return themeSpacing[abs];
    };
  }
  if (typeof themeSpacing === 'function') {
    return themeSpacing;
  }
  if (false) {}
  return () => undefined;
}
function createUnarySpacing(theme) {
  return createUnaryUnit(theme, 'spacing', 8, 'spacing');
}
function getValue(transformer, propValue) {
  if (typeof propValue === 'string' || propValue == null) {
    return propValue;
  }
  const abs = Math.abs(propValue);
  const transformed = transformer(abs);
  if (propValue >= 0) {
    return transformed;
  }
  if (typeof transformed === 'number') {
    return -transformed;
  }
  return `-${transformed}`;
}
function getStyleFromPropValue(cssProperties, transformer) {
  return propValue => cssProperties.reduce((acc, cssProperty) => {
    acc[cssProperty] = getValue(transformer, propValue);
    return acc;
  }, {});
}
function resolveCssProperty(props, keys, prop, transformer) {
  // Using a hash computation over an array iteration could be faster, but with only 28 items,
  // it's doesn't worth the bundle size.
  if (keys.indexOf(prop) === -1) {
    return null;
  }
  const cssProperties = getCssProperties(prop);
  const styleFromPropValue = getStyleFromPropValue(cssProperties, transformer);
  const propValue = props[prop];
  return (0,breakpoints/* handleBreakpoints */.NI)(props, propValue, styleFromPropValue);
}
function spacing_style(props, keys) {
  const transformer = createUnarySpacing(props.theme);
  return Object.keys(props).map(prop => resolveCssProperty(props, keys, prop, transformer)).reduce(merge/* default */.A, {});
}
function margin(props) {
  return spacing_style(props, marginKeys);
}
margin.propTypes =  false ? 0 : {};
margin.filterProps = marginKeys;
function padding(props) {
  return spacing_style(props, paddingKeys);
}
padding.propTypes =  false ? 0 : {};
padding.filterProps = paddingKeys;
function spacing(props) {
  return spacing_style(props, spacingKeys);
}
spacing.propTypes =  false ? 0 : {};
spacing.filterProps = spacingKeys;
/* harmony default export */ const esm_spacing = ((/* unused pure expression or super */ null && (spacing)));

/***/ }),

/***/ 96334:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export systemDefaultTheme */
/* harmony import */ var _createTheme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82001);
/* harmony import */ var _useThemeWithoutDefault__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(87771);
'use client';



const systemDefaultTheme = (0,_createTheme__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)();
function useTheme(defaultTheme = systemDefaultTheme) {
  return (0,_useThemeWithoutDefault__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(defaultTheme);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useTheme);

/***/ })

}]);