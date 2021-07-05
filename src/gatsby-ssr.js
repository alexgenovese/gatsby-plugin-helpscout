import React from 'react';

exports.onRenderBody = ({ setPostBodyComponents }, pluginOptions) => {
  if (
    process.env.NODE_ENV === 'production' ||
    pluginOptions.includeInDevelopment
  ) {
    const { code } = pluginOptions;
    return setPostBodyComponents([
      <script
        key={`gatsby-plugin-helpscout`}
        dangerouslySetInnerHTML={{
          __html: `
              !function(e,t,n){
                t._settings={code:${code}};
                function a(){var e=t.getElementsByTagName("script")[0],n=t.createElement("script");n.type="text/javascript",n.async=!0,n.src="https://beacon-v2.helpscout.net",e.parentNode.insertBefore(n,e)}if(e.Beacon=n=function(t,n,a){e.Beacon.readyQueue.push({method:t,options:n,data:a})},n.readyQueue=[],"complete"===t.readyState)return a();e.attachEvent?e.attachEvent("onload",a):e.addEventListener("load",a,!1)
                window.Beacon('init', t._settings.code)
              }(window,document,window.Beacon||function(){});
          `,
        }}
      />,
    ]);
  }

  return null;
};
