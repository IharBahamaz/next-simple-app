import Script from 'next/script';
import React from 'react';

const GoogleAnalyticsScript = () => {
  return (
    <>
      <Script src="" />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', '');`}
      </Script>
    </>
  );
};

export default GoogleAnalyticsScript;
