'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var styled = require('styled-components');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var styled__default = /*#__PURE__*/_interopDefaultLegacy(styled);

const StyledDiv = styled__default['default'].div`
  color: red;
`;

const Requirements = () => {
  return /*#__PURE__*/React__default['default'].createElement(StyledDiv, null, "Hello World");
};

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

const bgColor = '#201c2b';
const primaryColor = '#944fff';
const secondaryColor = '#392e5c';
const textColor = '#dad8de';
const shadowLightColor = '0 3px 21px rgb(117 117 117 / 8%)';

var main_colors = /*#__PURE__*/Object.freeze({
  __proto__: null,
  bgColor: bgColor,
  primaryColor: primaryColor,
  secondaryColor: secondaryColor,
  textColor: textColor,
  shadowLightColor: shadowLightColor
});

const SvgAttrs = styled__default['default'].svg.attrs({
  version: '1.1',
  xmlns: 'http://www.w3.org/2000/svg',
  xmlnsXlink: 'http://www.w3.org/1999/xlink'
})``;
const StyledSvg = styled__default['default'](SvgAttrs)`
  width: ${props => props.width ? props.width : '1rem'};
  height: ${props => props.height ? props.height : '1rem'};
  fill: ${props => props.fill ? props.fill : textColor};
`;

const LeftArrowIcon = ({ ...props
}) => /*#__PURE__*/React__default['default'].createElement(StyledSvg, _extends({}, props, {
  viewBox: "0 0 454.522 454.522"
}), /*#__PURE__*/React__default['default'].createElement("path", {
  d: "M248.299,399.167c12.354,12.354,12.354,32.391,0,44.744c-12.354,12.365-32.391,12.365-44.75,0L9.259,249.63 C3.085,243.453,0,235.355,0,227.258c0-8.095,3.091-16.192,9.259-22.366l194.29-194.284c12.359-12.359,32.396-12.359,44.75,0 c12.354,12.354,12.354,32.388,0,44.748L76.391,227.258L248.299,399.167z M273.349,227.258L445.258,55.355 c12.354-12.359,12.354-32.394,0-44.748c-12.354-12.359-32.392-12.359-44.751,0L206.218,204.892 c-6.174,6.18-9.26,14.271-9.26,22.366c0,8.098,3.092,16.195,9.26,22.372l194.289,194.281c12.359,12.365,32.397,12.365,44.751,0 c12.354-12.354,12.354-32.391,0-44.744L273.349,227.258z"
}));

const CancelIcon = ({ ...props
}) => /*#__PURE__*/React__default['default'].createElement(StyledSvg, _extends({}, props, {
  viewBox: "0 0 348.333 348.334"
}), /*#__PURE__*/React__default['default'].createElement("path", {
  d: "M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85 c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563 c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85 l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554 L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"
}));

const FullScreenIcon = ({ ...props
}) => /*#__PURE__*/React__default['default'].createElement(StyledSvg, _extends({}, props, {
  viewBox: "0 0 489.001 489.001"
}), /*#__PURE__*/React__default['default'].createElement("g", null, /*#__PURE__*/React__default['default'].createElement("path", {
  d: "M2.2,168.151l-2.1-151.3c-0.1-7.7,6.2-14,13.9-13.9l151.3,2.2c12.1,0.2,18.1,14.8,9.5,23.4l-42.1,42.1l70,70l-65,65 l-70-70l-42.1,42.1C17.1,186.251,2.4,180.251,2.2,168.151z"
}), /*#__PURE__*/React__default['default'].createElement("path", {
  d: "M421.3,136.551l42.1,42.1c8.6,8.6,23.2,2.6,23.4-9.5l2.2-151.3c0.1-7.7-6.2-14-13.9-13.9l-151.3,2.2 c-12.1,0.2-18.1,14.8-9.5,23.4l42,41.9l-70,70l65,65L421.3,136.551z"
}), /*#__PURE__*/React__default['default'].createElement("path", {
  d: "M314.2,460.451c-8.6,8.6-2.6,23.2,9.5,23.4l151.3,2.2c7.7,0.1,14-6.2,13.9-13.9l-2.2-151.3c-0.2-12.1-14.8-18.1-23.4-9.5 l-42.1,42.1l-70-70l-65,65l70,70L314.2,460.451z"
}), /*#__PURE__*/React__default['default'].createElement("path", {
  d: "M14,485.051l151.3-2.2c12.1-0.2,18.1-14.8,9.5-23.4l-42.1-42l70-70l-65-65l-70,70l-42.1-42.1c-8.6-8.6-23.2-2.6-23.4,9.5 L0,471.151C0,478.851,6.3,485.151,14,485.051z"
})));

const HomeIcon = ({ ...props
}) => /*#__PURE__*/React__default['default'].createElement(StyledSvg, _extends({}, props, {
  viewBox: "0 0 495.398 495.398"
}), /*#__PURE__*/React__default['default'].createElement("g", null, /*#__PURE__*/React__default['default'].createElement("path", {
  d: "M487.083,225.514l-75.08-75.08V63.704c0-15.682-12.708-28.391-28.413-28.391c-15.669,0-28.377,12.709-28.377,28.391 v29.941L299.31,37.74c-27.639-27.624-75.694-27.575-103.27,0.05L8.312,225.514c-11.082,11.104-11.082,29.071,0,40.158 c11.087,11.101,29.089,11.101,40.172,0l187.71-187.729c6.115-6.083,16.893-6.083,22.976-0.018l187.742,187.747 c5.567,5.551,12.825,8.312,20.081,8.312c7.271,0,14.541-2.764,20.091-8.312C498.17,254.586,498.17,236.619,487.083,225.514z"
}), /*#__PURE__*/React__default['default'].createElement("path", {
  d: "M257.561,131.836c-5.454-5.451-14.285-5.451-19.723,0L72.712,296.913c-2.607,2.606-4.085,6.164-4.085,9.877v120.401 c0,28.253,22.908,51.16,51.16,51.16h81.754v-126.61h92.299v126.61h81.755c28.251,0,51.159-22.907,51.159-51.159V306.79 c0-3.713-1.465-7.271-4.085-9.877L257.561,131.836z"
})));

const LoadingIcon = ({ ...props
}) => /*#__PURE__*/React__default['default'].createElement(StyledSvg, _extends({}, props, {
  viewBox: "0 0 128 128"
}), /*#__PURE__*/React__default['default'].createElement("g", null, /*#__PURE__*/React__default['default'].createElement("path", {
  d: "M75.4 126.63a11.43 11.43 0 0 1-2.1-22.65 40.9 40.9 0 0 0 30.5-30.6 11.4 11.4 0 1 1 22.27 4.87h.02a63.77 63.77 0 0 1-47.8 48.05v-.02a11.38 11.38 0 0 1-2.93.37z"
}), /*#__PURE__*/React__default['default'].createElement("animateTransform", {
  attributeName: "transform",
  type: "rotate",
  from: "0 64 64",
  to: "360 64 64",
  dur: "400ms",
  repeatCount: "indefinite"
})));

const LoginIcon = ({ ...props
}) => /*#__PURE__*/React__default['default'].createElement(StyledSvg, _extends({}, props, {
  viewBox: "0 0 24 24"
}), /*#__PURE__*/React__default['default'].createElement("g", null, /*#__PURE__*/React__default['default'].createElement("path", {
  d: "m21.822.015c-.025-.002-.046-.015-.072-.015h-10.75c-1.654 0-3 1.346-3 3v1c0 .552.448 1 1 1s1-.448 1-1v-1c0-.551.449-1 1-1h4.659l-.305.102c-.81.28-1.354 1.043-1.354 1.898v15h-3c-.551 0-1-.449-1-1v-2c0-.552-.448-1-1-1s-1 .448-1 1v2c0 1.654 1.346 3 3 3h3v1c0 1.103.897 2 2 2 .214 0 .417-.031.637-.099l6.008-2.003c.811-.28 1.355-1.043 1.355-1.898v-18c0-1.166-1.005-2.08-2.178-1.985z"
}), /*#__PURE__*/React__default['default'].createElement("path", {
  d: "m10.707 9.293-4-4c-.286-.286-.716-.372-1.09-.217-.373.155-.617.52-.617.924v3h-4c-.552 0-1 .448-1 1s.448 1 1 1h4v3c0 .404.244.769.617.924.374.155.804.069 1.09-.217l4-4c.391-.391.391-1.023 0-1.414z"
})));

const LogoutIcon = ({ ...props
}) => /*#__PURE__*/React__default['default'].createElement(StyledSvg, _extends({}, props, {
  viewBox: "0 0 24 24"
}), /*#__PURE__*/React__default['default'].createElement("g", null, /*#__PURE__*/React__default['default'].createElement("path", {
  d: "m15 13c-.553 0-1 .448-1 1v4c0 .551-.448 1-1 1h-3v-15c0-.854-.544-1.617-1.362-1.901l-.296-.099h4.658c.552 0 1 .449 1 1v3c0 .552.447 1 1 1s1-.448 1-1v-3c0-1.654-1.346-3-3-3h-10.75c-.038 0-.07.017-.107.022-.048-.004-.094-.022-.143-.022-1.103 0-2 .897-2 2v18c0 .854.544 1.617 1.362 1.901l6.018 2.006c.204.063.407.093.62.093 1.103 0 2-.897 2-2v-1h3c1.654 0 3-1.346 3-3v-4c0-.552-.447-1-1-1z"
}), /*#__PURE__*/React__default['default'].createElement("path", {
  d: "m23.707 9.293-4-4c-.286-.286-.716-.372-1.09-.217-.373.155-.617.52-.617.924v3h-4c-.552 0-1 .448-1 1s.448 1 1 1h4v3c0 .404.244.769.617.924.374.155.804.069 1.09-.217l4-4c.391-.391.391-1.023 0-1.414z"
})));

const MuteIcon = ({ ...props
}) => /*#__PURE__*/React__default['default'].createElement(StyledSvg, _extends({}, props, {
  viewBox: "0 0 448.075 448.075"
}), /*#__PURE__*/React__default['default'].createElement("g", null, /*#__PURE__*/React__default['default'].createElement("path", {
  d: "M352.021,16.075c0-6.08-3.52-11.84-8.96-14.4c-5.76-2.88-12.16-1.92-16.96,1.92l-141.76,112.96l167.68,167.68V16.075z"
}), /*#__PURE__*/React__default['default'].createElement("path", {
  d: "M443.349,420.747l-416-416c-6.24-6.24-16.384-6.24-22.624,0s-6.24,16.384,0,22.624l100.672,100.704h-9.376 c-9.92,0-18.56,4.48-24.32,11.52c-4.8,5.44-7.68,12.8-7.68,20.48v128c0,17.6,14.4,32,32,32h74.24l155.84,124.48 c2.88,2.24,6.4,3.52,9.92,3.52c2.24,0,4.8-0.64,7.04-1.6c5.44-2.56,8.96-8.32,8.96-14.4v-57.376l68.672,68.672 c3.136,3.136,7.232,4.704,11.328,4.704s8.192-1.568,11.328-4.672C449.589,437.131,449.589,427.019,443.349,420.747z"
})));

const RightArrowIcon = ({ ...props
}) => /*#__PURE__*/React__default['default'].createElement(StyledSvg, _extends({}, props, {
  viewBox: "0 0 454.52 454.52"
}), /*#__PURE__*/React__default['default'].createElement("path", {
  d: "M378.135,227.256L206.224,55.354c-12.354-12.359-12.354-32.394,0-44.748c12.354-12.359,32.388-12.359,44.747,0 L445.258,204.89c6.177,6.18,9.262,14.271,9.262,22.366c0,8.098-3.091,16.195-9.262,22.372L250.971,443.91 c-12.359,12.365-32.394,12.365-44.747,0c-12.354-12.354-12.354-32.391,0-44.744L378.135,227.256z M9.265,399.166 c-12.354,12.354-12.354,32.391,0,44.744c12.354,12.365,32.382,12.365,44.748,0l194.287-194.281 c6.177-6.177,9.257-14.274,9.257-22.372c0-8.095-3.086-16.192-9.257-22.366L54.013,10.606c-12.365-12.359-32.394-12.359-44.748,0 c-12.354,12.354-12.354,32.388,0,44.748L181.18,227.256L9.265,399.166z"
}));

const SearchIcon = ({ ...props
}) => /*#__PURE__*/React__default['default'].createElement(StyledSvg, _extends({}, props, {
  viewBox: "0 0 118.783 118.783"
}), /*#__PURE__*/React__default['default'].createElement("path", {
  d: "M115.97,101.597L88.661,74.286c4.64-7.387,7.333-16.118,7.333-25.488c0-26.509-21.49-47.996-47.998-47.996 S0,22.289,0,48.798c0,26.51,21.487,47.995,47.996,47.995c10.197,0,19.642-3.188,27.414-8.605l26.984,26.986 c1.875,1.873,4.333,2.806,6.788,2.806c2.458,0,4.913-0.933,6.791-2.806C119.72,111.423,119.72,105.347,115.97,101.597z M47.996,81.243c-17.917,0-32.443-14.525-32.443-32.443s14.526-32.444,32.443-32.444c17.918,0,32.443,14.526,32.443,32.444 S65.914,81.243,47.996,81.243z"
}));

const SettingsIcon = ({ ...props
}) => /*#__PURE__*/React__default['default'].createElement(StyledSvg, _extends({}, props, {
  viewBox: "0 0 512 512"
}), /*#__PURE__*/React__default['default'].createElement("path", {
  d: "m464.866 192.8h-10.87c-3.531-11.05-7.986-21.784-13.323-32.097l7.698-7.698c18.665-18.645 18.165-48.525.006-66.665l-22.711-22.71c-18.129-18.153-48.015-18.679-66.665-.007l-7.704 7.704c-10.313-5.336-21.048-9.792-32.097-13.323v-10.871c0-25.989-21.144-47.133-47.134-47.133h-32.133c-25.989 0-47.133 21.144-47.133 47.133v10.871c-11.049 3.53-21.784 7.986-32.097 13.323l-7.697-7.697c-18.613-18.635-48.498-18.198-66.664-.006l-22.713 22.711c-18.152 18.132-18.677 48.014-.006 66.665l7.704 7.704c-5.337 10.313-9.792 21.046-13.323 32.097h-10.87c-25.989-.001-47.134 21.143-47.134 47.132v32.134c0 25.989 21.145 47.133 47.134 47.133h10.87c3.531 11.05 7.986 21.784 13.323 32.097l-7.698 7.698c-18.665 18.645-18.165 48.525-.006 66.665l22.711 22.71c18.129 18.153 48.015 18.679 66.665.007l7.704-7.704c10.313 5.336 21.048 9.792 32.097 13.323v10.871c0 25.989 21.145 47.133 47.134 47.133h32.133c25.989 0 47.134-21.144 47.134-47.133v-10.871c11.049-3.53 21.784-7.986 32.097-13.323l7.697 7.697c18.613 18.635 48.497 18.198 66.664.006l22.713-22.712c18.152-18.132 18.677-48.014.006-66.665l-7.704-7.704c5.337-10.313 9.792-21.046 13.323-32.097h10.87c25.989 0 47.134-21.144 47.134-47.133v-32.134c-.001-25.987-21.146-47.131-47.135-47.131zm-208.866 174.6c-61.427 0-111.4-49.974-111.4-111.4s49.973-111.4 111.4-111.4 111.4 49.974 111.4 111.4-49.973 111.4-111.4 111.4z"
}));

const SmileIcon = ({ ...props
}) => /*#__PURE__*/React__default['default'].createElement(StyledSvg, _extends({}, props, {
  viewBox: "0 0 512 512"
}), /*#__PURE__*/React__default['default'].createElement("path", {
  d: "m375 220c-11.046 0-20-8.954-20-20 0-5.514-4.486-10-10-10s-10 4.486-10 10c0 11.046-8.954 20-20 20s-20-8.954-20-20c0-27.57 22.43-50 50-50s50 22.43 50 50c0 11.046-8.954 20-20 20zm-157-20c0-27.57-22.43-50-50-50s-50 22.43-50 50c0 11.046 8.954 20 20 20s20-8.954 20-20c0-5.514 4.486-10 10-10s10 4.486 10 10c0 11.046 8.954 20 20 20s20-8.954 20-20zm170.461 275.107c9.448-5.723 12.467-18.021 6.745-27.468-5.723-9.448-18.022-12.468-27.468-6.745-33.595 20.35-72.233 31.106-111.738 31.106-119.103 0-216-96.897-216-216s96.897-216 216-216 216 96.897 216 216c0 42.589-12.665 84.044-36.626 119.885-6.139 9.183-3.672 21.603 5.511 27.742 9.183 6.14 21.604 3.671 27.742-5.511 28.374-42.442 43.373-91.585 43.373-142.116 0-68.38-26.629-132.667-74.98-181.02-48.353-48.351-112.64-74.98-181.02-74.98s-132.667 26.629-181.02 74.98c-48.351 48.353-74.98 112.64-74.98 181.02s26.629 132.667 74.98 181.02c48.353 48.351 112.64 74.98 181.02 74.98 46.813 0 92.617-12.757 132.461-36.893zm-46.461-184.107c-6.512 0-12.28 3.127-15.932 7.945 0 0-26.018 28.055-70.068 28.055s-70.068-28.055-70.068-28.055c-3.652-4.818-9.42-7.945-15.932-7.945-11.046 0-20 8.954-20 20 0 5.691 2.388 10.814 6.204 14.456 3.617 4.012 39.099 41.544 99.796 41.544s96.179-37.532 99.796-41.544c3.816-3.642 6.204-8.765 6.204-14.456 0-11.046-8.954-20-20-20z"
}));

const UsersIcon = ({ ...props
}) => /*#__PURE__*/React__default['default'].createElement(StyledSvg, _extends({}, props, {
  viewBox: "0 0 512 512"
}), /*#__PURE__*/React__default['default'].createElement("g", null, /*#__PURE__*/React__default['default'].createElement("circle", {
  cx: "256",
  cy: "119.631",
  r: "87"
}), /*#__PURE__*/React__default['default'].createElement("circle", {
  cx: "432",
  cy: "151.63",
  r: "55"
}), /*#__PURE__*/React__default['default'].createElement("circle", {
  cx: "80",
  cy: "151.63",
  r: "55"
}), /*#__PURE__*/React__default['default'].createElement("path", {
  d: "m134.19 256.021c-21.65-17.738-41.257-15.39-66.29-15.39-37.44 0-67.9 30.28-67.9 67.49v109.21c0 16.16 13.19 29.3 29.41 29.3 70.026 0 61.59 1.267 61.59-3.02 0-77.386-9.166-134.137 43.19-187.59z"
}), /*#__PURE__*/React__default['default'].createElement("path", {
  d: "m279.81 241.03c-43.724-3.647-81.729.042-114.51 27.1-54.857 43.94-44.3 103.103-44.3 175.48 0 19.149 15.58 35.02 35.02 35.02 211.082 0 219.483 6.809 232-20.91 4.105-9.374 2.98-6.395 2.98-96.07 0-71.226-61.673-120.62-111.19-120.62z"
}), /*#__PURE__*/React__default['default'].createElement("path", {
  d: "m444.1 240.63c-25.17 0-44.669-2.324-66.29 15.39 51.965 53.056 43.19 105.935 43.19 187.59 0 4.314-7.003 3.02 60.54 3.02 16.8 0 30.46-13.61 30.46-30.34v-108.17c0-37.21-30.46-67.49-67.9-67.49z"
})));

const VolumeIcon = ({ ...props
}) => /*#__PURE__*/React__default['default'].createElement(StyledSvg, _extends({}, props, {
  viewBox: "0 0 448.019 448.019"
}), /*#__PURE__*/React__default['default'].createElement("g", null, /*#__PURE__*/React__default['default'].createElement("path", {
  d: "m294.953 1.587c-5.568-2.656-12.128-1.952-16.928 1.92l-155.648 124.512h-74.368c-17.632 0-32 14.368-32 32v128c0 17.664 14.368 32 32 32h74.368l155.616 124.512c2.912 2.304 6.464 3.488 10.016 3.488 2.368 0 4.736-.544 6.944-1.6 5.536-2.656 9.056-8.256 9.056-14.4v-416c0-6.144-3.52-11.744-9.056-14.432z"
}), /*#__PURE__*/React__default['default'].createElement("path", {
  d: "m385.001 110.867c-6.304-6.208-16.416-6.112-22.624.128-6.208 6.304-6.144 16.416.128 22.656 24.192 23.872 37.504 55.968 37.504 90.368s-13.312 66.496-37.504 90.368c-6.272 6.176-6.336 16.32-.128 22.624 3.136 3.168 7.264 4.736 11.36 4.736 4.064 0 8.128-1.536 11.264-4.64 30.336-29.856 47.008-70.048 47.008-113.088s-16.672-83.232-47.008-113.152z"
})));

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  LeftArrowIcon: LeftArrowIcon,
  CancelIcon: CancelIcon,
  FullScreenIcon: FullScreenIcon,
  HomeIcon: HomeIcon,
  LoadingIcon: LoadingIcon,
  LoginIcon: LoginIcon,
  LogoutIcon: LogoutIcon,
  MuteIcon: MuteIcon,
  RightArrowIcon: RightArrowIcon,
  SearchIcon: SearchIcon,
  SettingsIcon: SettingsIcon,
  SmileIcon: SmileIcon,
  UsersIcon: UsersIcon,
  VolumeIcon: VolumeIcon
});

const StyledButton = styled__default['default'].a`
  background: ${props => props.reverse ? primaryColor : 'none'};
  border: 1px solid ${primaryColor};
  padding: 0.75rem;
  border-radius: 4px;
  font-weight: 700;
  color: ${textColor};
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  :hover {
    background: ${props => props.reverse ? 'none' : primaryColor};
  }

  ${props => props.disabled && 'pointer-events: none;'}
`;

const Button = ({
  children,
  reverse,
  isLoading,
  ...props
}) => {
  return /*#__PURE__*/React__default['default'].createElement(StyledButton, _extends({
    reverse: reverse
  }, props), isLoading ? /*#__PURE__*/React__default['default'].createElement(LoadingIcon, null) : children);
};

const StyledInput = styled__default['default'].input`
  width: 100%;
  padding: 0.4rem 0.5rem;
  background-color: ${bgColor};
  border: 1px solid ${secondaryColor};
  border-radius: 4px;
  color: ${textColor};

  :focus {
    border: 1px solid ${primaryColor};
  }
`;
const InputGroup = styled__default['default'].div`
  width: 100%;
`;
const StyledLabel = styled__default['default'].label`
  color: ${textColor};
  display: inline-block;
  margin: 0.4rem 0;
`;

const Input = ({
  label,
  ...otherProps
}) => {
  return /*#__PURE__*/React__default['default'].createElement(InputGroup, null, label && /*#__PURE__*/React__default['default'].createElement(StyledLabel, null, label), /*#__PURE__*/React__default['default'].createElement(StyledInput, otherProps));
};

const Container$1 = styled__default['default'].div`
  padding: 0.4rem 0.6rem;
  background-color: ${props => props.isActive ? primaryColor : secondaryColor};
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${textColor};

  :hover {
    background-color: ${props => props.isActive ? secondaryColor : primaryColor};
  }
`;

const Tag = ({
  children,
  isActive,
  ...otherProps
}) => {
  return /*#__PURE__*/React__default['default'].createElement(Container$1, _extends({
    isActive: isActive
  }, otherProps), children);
};

const ModalContainer = styled__default['default'].div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: black;
  background: rgba(0, 0, 0, 0.5);

  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;
const ModalBody = styled__default['default'].div`
  padding: 1.5rem;
  color: ${textColor};
  background-color: ${secondaryColor};
  border-radius: 4px;
  position: relative;
`;

const Modal = ({
  children,
  isVisible,
  setIsVisible,
  ...otherProps
}) => {
  if (!isVisible) return '';
  return /*#__PURE__*/React__default['default'].createElement(ModalContainer, otherProps, /*#__PURE__*/React__default['default'].createElement(ModalBody, null, /*#__PURE__*/React__default['default'].createElement(Tag, {
    onClick: () => setIsVisible(false),
    style: {
      position: 'absolute',
      top: 5,
      right: 5
    }
  }, /*#__PURE__*/React__default['default'].createElement(CancelIcon, null)), children));
};

const Container = styled__default['default'].div`
  display: flex;
  align-items: stretch;
  font-size: 1rem;
  justify-content: space-between;
  overflow: hidden;
  overflow-x: auto;
  white-space: nowrap;
`;
const StyledUl = styled__default['default'].ul`
  display: flex;
  align-items: center;
  border-bottom-color: #dbdbdb;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  flex-grow: 1;
  flex-shrink: 0;
  justify-content: flex-start;
`;
const StyledLi = styled__default['default'].li`
  display: block;
`;
const StyledA = styled__default['default'].a`
  align-items: center;
  border-bottom-color: ${props => props.isActive ? primaryColor : '#dbdbdb'};
  border-bottom-style: solid;
  border-bottom-width: 1px;
  color: ${props => props.isActive ? primaryColor : textColor};
  display: flex;
  justify-content: center;
  margin-bottom: -1px;
  padding: 0.5em 1em;
  vertical-align: top;
  cursor: pointer;
`;

const Tabs = ({
  tabs,
  activeTab,
  setActiveTab,
  ...props
}) => {
  return /*#__PURE__*/React__default['default'].createElement(Container, props, /*#__PURE__*/React__default['default'].createElement(StyledUl, null, tabs.map(tab => /*#__PURE__*/React__default['default'].createElement(StyledLi, {
    key: tab
  }, /*#__PURE__*/React__default['default'].createElement(StyledA, {
    onClick: () => setActiveTab(tab),
    isActive: tab === activeTab
  }, tab)))));
};

exports.Button = Button;
exports.Colors = main_colors;
exports.Icons = index;
exports.Input = Input;
exports.Modal = Modal;
exports.Requirements = Requirements;
exports.Tabs = Tabs;
exports.Tag = Tag;
//# sourceMappingURL=index.js.map
