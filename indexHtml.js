import React from 'react';

export default function(html, initialState, head) {
  return `<!docype html>
<html>
<head>
  ${head.title.toString()}

  ${head.meta.toString()}
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
  <meta charset="utf-8" />
  <meta property="og:url"                content="http://edr.data-gov-ua.org/" />
  <meta property="og:title"              content="ЄДР API" />
  <meta property="og:description"        content="Юридичні особи України" />
  <meta property="og:image"              content="/static/images/logo1.png" />

  <link rel="stylesheet" type="text/css"
        href="/static/css/fonts.css">
  <link rel="stylesheet" type="text/css" href="/static/css/sk-theme.css">


  <style>
  html,body{text-align:left;font-size:1em}html,body,img,form,textarea,input,fieldset,div,p,div,ul,li,ol,dl,dt,dd,h1,h2,h3,h4,h5,h6,pre,code{margin:0;padding:0}ul,li{list-style:none}img{display:block}a img{border:0}a{text-decoration:none;font-weight:normal;font-family:inherit}*:active,*:focus{outline:0;-moz-outline-style:none}h1,h2,h3,h4,h5,h6{font-weight:normal}div.clear{clear:both}.clearfix:after{clear:both;content:".";display:block;font-size:0;height:0;line-height:0;visibility:hidden}body{font-family: Roboto, sans-serif;font-weight:300;}.top-bar {width: 100%; background-color: #e4f0f1; padding: 15px 0;}.top-bar .container img {float: left;}.top-bar .container ul {float: right; padding-top: 25px;}.top-bar .container li {float: left; width: 125px; text-align: center; font-size: 15px; color:#000; font-weight: 600;}.top-bar .container a li:hover {color: #118798; -webkit-transition:color 200ms; -moz-transition:color 200ms; -o-transition:color 200ms;transition:color 200ms;}.container{width: 80%; max-width: 1200px; margin: auto;}div.header {-webkit-transition: 6s; -moz-transition: 6s; -o-transition: 6s;transition: 6s; background: rgb(17, 135, 152) no-repeat 42% bottom; padding: 100px 0 65px;}.header h1#main-title{color: #fff; font-weight: 300; font-size: 2.5em;}.header h3{color: #b1eef7; font-style: italic; font-weight: 300;}.header h3 code{font-style: normal!important; background-color: rgba(255,255,255,0.5); font-weight: 300; color:#0e6471; margin: 0px 5px;}div.main.container{padding: 50px 0;}h1 {color: #118798; font-weight: 300;}code {font-size: inherit; font-family: 'Consolas', 'Monaco', monospace; padding:4px 5px 1px; background-color: #f3f5f7}a{color: #118798; font-weight: 300; text-decoration: underline;}a:hover {color: #0e6471; -webkit-transition:color 200ms; -moz-transition:color 200ms; -o-transition:color 200ms;transition:color 200ms;}p{line-height: 1.5em;}blockquote{background-color: #e4f0f1; padding: 25px; line-height: 1.5em; margin: 15px 0;}blockquote span{font-weight: 600; padding-right: 5px;}
  div.steps{
    padding: 25px 75px 25px 0; width: 70%; float: left; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box;
  }
  /*div.steps ul li{padding: 25px 0;}*/
  h3 {padding-bottom: 10px; font-size: 25px; font-weight: 300;}
  div.section {position: relative; padding: 25px 0;}
  div.links {float: left; width: 30%; max-width: 325px; -moz-box-sizing: border-box; -webkit-box-sizing: border-box; box-sizing: border-box; background-color: #f3f5f7; border: 1px solid #ebebeb; padding: 25px 45px 35px;}
  div.links h3 {color: #727272; text-align: center; font-size: 28px; font-weight: 300;}
  div.links h4 {color: #727272; font-size: 17px; font-weight: 600; padding: 15px 0 10px;}
  div.links .link-list a {text-decoration: none; font-weight: 400;}
  div.links .link-list a li {padding: 0px 0px 5px 10px;}
  div.default-page{min-width: 1200px;}
  .pocket{display:none;}
  </style>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-69842617-2', 'auto');
  ga('send', 'pageview');

</script>
</head>
<body>
  <div id="container">${html}</div>
  <script>
    window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
  </script>
  <script src="/jspm_packages/system.js"></script>
  <script src="/jspm.browser.js"></script>
  <script src="/jspm.config.js"></script>
  <script src="/build.js"></script>
  <script>
    SystemJS.import('browser.js');
  </script>


  <!-- Piwik -->
  <script type="text/javascript">
    var _paq = _paq || [];
    /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
    _paq.push(['trackPageView']);
    _paq.push(['enableLinkTracking']);
    (function() {
      var u="/piwik/";
      _paq.push(['setTrackerUrl', u+'piwik.php']);
      _paq.push(['setSiteId', '1']);
      var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
      g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
    })();
  </script>
  <!-- End Piwik Code -->

</body>
</html>`;
}
