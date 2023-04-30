import { injectGlobal } from 'styled-components';

injectGlobal`
@import url(‘https://fonts.googleapis.com/css?family=Montserrat|Roboto');
body {
    margin: 0;
    font-family: Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }  
`