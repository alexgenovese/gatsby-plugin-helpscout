'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.onRenderBody = function (_ref, pluginOptions) {
  var setPostBodyComponents = _ref.setPostBodyComponents;

  if (process.env.NODE_ENV === 'production' || pluginOptions.includeInDevelopment) {
    var code = pluginOptions.code,
        sv = pluginOptions.sv;

    return setPostBodyComponents([_react2.default.createElement('script', {
      key: 'gatsby-plugin-helpscount',
      dangerouslySetInnerHTML: {
        __html: '\n              !function(e,t,n){function a(){var e=t.getElementsByTagName("script")[0],n=t.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://beacon-v2.helpscout.net",e.parentNode.insertBefore(n,e)}if(e.Beacon=n=function(t,n,a){e.Beacon.readyQueue.push({method:t,options:n,data:a})},n.readyQueue=[],"complete"===t.readyState)return a();e.attachEvent?e.attachEvent("onload",a):e.addEventListener("load",a,!1)}(window,document,window.Beacon||function(){});\n              window.Beacon(\'init\', ' + code + ')\n          '
      }
    })]);
  }

  return null;
};