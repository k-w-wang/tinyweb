import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { registerMicroApps, start } from 'qiankun'


function render ({ subAppContent, loading }) {
  return ReactDOM.render(
    <React.StrictMode>
      <App content={subAppContent} loading={loading} />
    </React.StrictMode>
    , document.getElementById('root')
  );
}

render({ loading: true })

function genActiveRule (routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}
registerMicroApps([
  // [import-html-entry]: error occurs while executing entry script http://localhost:8888/static/js/main.chunk.js
  // Uncaught Error: application 'react-sub-app' died in status LOADING_SOURCE_CODE: [qiankun] Wrapper element for react-sub-app with instance react-sub-app_1619692330885_362 is not existed!
  // render属性已经废弃，这种写法将报以上错误 { name: 'react-sub-app', entry: '//localhost:8888', render, activeRule: genActiveRule('/reactapp') },
  
  { name: 'react-sub-app', entry: '//localhost:3001', container: '#react-app', activeRule: genActiveRule('/reactapp') }
])

start()