import React, { useState } from 'react';
import { TabBar } from 'antd-mobile'
import { Outlet , useNavigate } from 'react-router-dom';
import './App.css';

function App() {
  const [selectedIcon, setSelectedIcon] = useState('/Home');
  const Navigate = useNavigate();
  const setRouteActive = (value) =>{
      console.log(value)
      Navigate(value)
      setSelectedIcon(value)
  };
  const tabss = [
    {
      key: '/Home',
      title: '首页',
      icon: <svg
      t="1728573251768" className="icon" viewBox="0 0 1025 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4734" width="20" height="20"><path d="M1016.43865 533.882435C988.501259 503.674435 586.447694 82.031304 561.359694 54.850783c-22.505739-24.375652-76.087652-24.798609-98.57113 0C428.573607 92.605217 28.568042 512.022261 8.733607 532.813913-15.998219 558.747826 15.47865 585.015652 57.774303 585.015652L122.21952 585.015652l0 329.416348c0 40.403478 32.834783 73.149217 73.327304 73.149217l219.024696 0L414.57152 719.36l195.072 0 0 268.221217 221.250783 0c40.492522 0 73.305043-32.745739 73.305043-73.149217L904.199346 585.015652l63.488 0C1014.279346 585.015652 1036.91865 556.009739 1016.43865 533.882435z" fill={ selectedIcon === '/Home' ? '#0014FF' : '#666666' } p-id="4735"></path></svg>
    },
    {
      key: '/Invitation',
      title: '代理',
      icon: <svg
      t="1728573367728" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5895" width="20" height="20"><path d="M544 544.34a366.28 366.28 0 0 1 180.42 47.2l2.41 1.38a40 40 0 0 0 40.25-69.16c-1.26-0.73-2.54-1.45-3.82-2.17a444.83 444.83 0 0 0-68.19-31.11A239.54 239.54 0 0 0 784 304c0-132.55-107.45-240-240-240S304 171.45 304 304a239.49 239.49 0 0 0 88.91 186.46C219.83 552.46 96 717.93 96 912.34v7.58c0 1.06 0 2.1 0.13 3.13a40 40 0 0 0 80-2.85v-0.28c0-0.71 0-1.41-0.06-2.11v-5.48C176 709.1 340.76 544.34 544 544.34zM544 144a160 160 0 1 1-160 160 160 160 0 0 1 160-160z" fill={ selectedIcon === '/Invitation' ? '#0014FF' : '#666666' } p-id="5896"></path><path d="M896 705.51a40 40 0 0 0-40-40H584.07L595 654.6a40 40 0 0 0-56.59-56.6l-79.19 79.2c-0.47 0.46-0.93 0.94-1.37 1.43-0.21 0.23-0.41 0.47-0.61 0.71s-0.45 0.51-0.66 0.77l-0.73 0.93-0.47 0.6c-0.25 0.34-0.5 0.69-0.74 1-0.13 0.18-0.26 0.36-0.38 0.55-0.24 0.36-0.47 0.72-0.7 1.09l-0.35 0.56c-0.21 0.36-0.42 0.72-0.62 1.08s-0.24 0.42-0.35 0.63-0.36 0.69-0.53 1-0.25 0.48-0.36 0.72-0.3 0.65-0.44 1l-0.37 0.85c-0.12 0.29-0.23 0.58-0.34 0.87s-0.26 0.65-0.37 1-0.18 0.51-0.26 0.76-0.25 0.74-0.36 1.12l-0.2 0.68-0.33 1.22c-0.05 0.21-0.09 0.42-0.14 0.63-0.1 0.43-0.2 0.85-0.28 1.27l-0.12 0.66c-0.07 0.42-0.15 0.83-0.21 1.26 0 0.25-0.06 0.5-0.1 0.76s-0.1 0.77-0.14 1.16-0.05 0.68-0.07 1-0.05 0.62-0.07 0.93c0 0.66-0.05 1.32-0.05 2 0 0.66 0 1.32 0.05 2 0 0.31 0 0.62 0.07 0.93s0 0.68 0.07 1 0.09 0.78 0.14 1.17 0.06 0.5 0.1 0.75c0.06 0.43 0.14 0.85 0.21 1.27l0.12 0.65c0.08 0.42 0.18 0.85 0.28 1.27 0 0.21 0.09 0.42 0.14 0.63l0.33 1.22c0.07 0.23 0.13 0.46 0.2 0.68 0.11 0.38 0.23 0.75 0.36 1.12s0.16 0.51 0.26 0.76 0.24 0.67 0.37 1 0.22 0.57 0.34 0.86 0.25 0.57 0.37 0.86 0.29 0.64 0.44 1 0.24 0.48 0.36 0.72 0.35 0.7 0.53 1l0.35 0.62 0.62 1.09c0.12 0.18 0.24 0.37 0.35 0.56 0.23 0.36 0.46 0.72 0.7 1.08 0.12 0.19 0.26 0.37 0.38 0.55 0.24 0.35 0.49 0.7 0.74 1s0.31 0.41 0.47 0.61 0.48 0.62 0.73 0.92 0.44 0.52 0.67 0.78 0.39 0.47 0.6 0.7c0.89 1 1.82 1.91 2.8 2.8 0.23 0.21 0.46 0.4 0.7 0.6s0.51 0.46 0.78 0.67 0.61 0.49 0.92 0.73 0.4 0.32 0.61 0.47l1 0.73c0.19 0.13 0.37 0.27 0.56 0.39l1.08 0.7 0.57 0.35 1.08 0.62 0.63 0.35c0.34 0.19 0.69 0.36 1 0.53l0.72 0.36 1 0.44 0.86 0.37 0.86 0.34 1 0.38 0.76 0.25c0.37 0.13 0.74 0.25 1.12 0.36l0.67 0.2 1.23 0.33 0.63 0.14c0.42 0.1 0.84 0.2 1.27 0.28l0.65 0.12c0.42 0.07 0.84 0.15 1.27 0.21l0.75 0.1 1.18 0.14 1 0.07c0.32 0 0.63 0.06 0.94 0.07H856a40 40 0 0 0 40-39.83zM959.45 838.83c0-0.32 0-0.62-0.07-0.93s0-0.68-0.07-1-0.09-0.78-0.14-1.17-0.06-0.51-0.1-0.76c-0.06-0.42-0.14-0.84-0.21-1.26l-0.12-0.65c-0.08-0.43-0.18-0.85-0.28-1.27-0.05-0.22-0.09-0.43-0.14-0.64l-0.33-1.22c-0.07-0.22-0.13-0.45-0.2-0.68s-0.23-0.74-0.36-1.12-0.17-0.51-0.26-0.76-0.24-0.66-0.37-1-0.22-0.58-0.34-0.86l-0.37-0.86c-0.12-0.28-0.29-0.64-0.44-1s-0.24-0.49-0.36-0.73-0.35-0.7-0.53-1-0.23-0.42-0.35-0.62c-0.2-0.37-0.41-0.73-0.62-1.09-0.12-0.19-0.24-0.37-0.35-0.56-0.23-0.37-0.46-0.73-0.7-1.09-0.12-0.18-0.26-0.36-0.38-0.55-0.24-0.35-0.49-0.69-0.74-1l-0.47-0.6-0.73-0.93c-0.21-0.26-0.44-0.52-0.66-0.77s-0.4-0.48-0.61-0.71c-0.89-1-1.82-1.91-2.8-2.79l-0.7-0.61c-0.26-0.22-0.51-0.45-0.78-0.67s-0.61-0.49-0.92-0.73l-0.61-0.46c-0.34-0.26-0.69-0.5-1-0.74l-0.55-0.39-1.08-0.69-0.57-0.35c-0.35-0.22-0.72-0.43-1.08-0.63l-0.62-0.35-1-0.53-0.72-0.36-1-0.43-0.85-0.38-0.87-0.34-1-0.37-0.76-0.26c-0.37-0.12-0.74-0.25-1.12-0.36l-0.68-0.19c-0.4-0.12-0.81-0.23-1.22-0.33l-0.63-0.15-1.27-0.28-0.66-0.11-1.26-0.22-0.75-0.09-1.17-0.14c-0.34 0-0.69 0-1-0.08l-0.92-0.07c-0.66 0-1.32-0.05-2-0.05H552a40 40 0 0 0-40 40 40 40 0 0 0 40 40h270.93L812 891.72a40 40 0 0 0 0 56.56 40 40 0 0 0 56.57 0l79.19-79.19c0.47-0.47 0.93-1 1.37-1.44 0.21-0.23 0.4-0.47 0.61-0.7s0.45-0.51 0.66-0.78 0.49-0.61 0.73-0.92l0.47-0.6 0.74-1 0.38-0.54c0.24-0.36 0.47-0.73 0.7-1.09 0.11-0.19 0.23-0.37 0.35-0.56 0.21-0.36 0.42-0.72 0.62-1.09 0.12-0.21 0.24-0.41 0.35-0.62s0.36-0.69 0.53-1 0.25-0.48 0.36-0.73 0.3-0.64 0.44-1 0.25-0.57 0.37-0.86 0.23-0.57 0.34-0.86 0.26-0.66 0.37-1 0.18-0.51 0.26-0.77 0.25-0.74 0.36-1.11 0.13-0.46 0.2-0.69l0.33-1.21c0-0.21 0.09-0.43 0.14-0.64 0.1-0.42 0.2-0.84 0.28-1.27l0.12-0.65c0.07-0.42 0.15-0.84 0.21-1.26 0-0.26 0.06-0.51 0.1-0.76s0.1-0.78 0.14-1.17 0.05-0.68 0.07-1 0-0.62 0.07-0.93v-2c0.07-0.7 0.05-1.36 0.02-2.01z" fill={ selectedIcon === '/Invitation' ? '#0014FF' : '#666666' } p-id="5897"></path></svg>
    },
    {
      key: '/Wallet',
      title: '钱包',
      icon: <svg t="1728662402914" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13475" width="20" height="20"><path d="M976.896 883.712q0 19.456-6.656 36.352t-18.944 29.696-28.672 19.968-35.84 7.168l-743.424 0q-19.456 0-36.864-7.168t-30.72-19.968-20.992-29.696-7.68-36.352l0-510.976q0-38.912 27.136-66.048t66.048-27.136l743.424 0q38.912 0 66.048 27.136t27.136 66.048l0 139.264-232.448 0q-38.912 0-66.048 26.624t-27.136 65.536q1.024 26.624 11.264 47.104 8.192 17.408 27.136 31.744t54.784 14.336l232.448 0 0 186.368zM837.632 232.448l-464.896 0q55.296-28.672 104.448-55.296 43.008-22.528 84.992-45.056t65.536-34.816q35.84-19.456 64-17.92t47.616 9.728q22.528 11.264 38.912 29.696zM698.368 604.16q0-19.456 13.312-32.768t32.768-13.312 32.768 13.312 13.312 32.768-13.312 33.28-32.768 13.824-32.768-13.824-13.312-33.28z" fill={ selectedIcon === '/Wallet' ? '#0014FF' : '#8A8A8A' } p-id="13476"></path></svg>
    },
    {
      key: '/CustomerService',
      title: '客服',
      icon: <svg
      t="1728573441701" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="13043" width="20" height="20"><path d="M894.1 355.6h-1.7C853 177.6 687.6 51.4 498.1 54.9S148.2 190.5 115.9 369.7c-35.2 5.6-61.1 36-61.1 71.7v143.4c0.9 40.4 34.3 72.5 74.7 71.7 21.7-0.3 42.2-10 56-26.7 33.6 84.5 99.9 152 183.8 187 1.1-2 2.3-3.9 3.7-5.7 0.9-1.5 2.4-2.6 4.1-3 1.3 0 2.5 0.5 3.6 1.2a318.46 318.46 0 0 1-105.3-187.1c-5.1-44.4 24.1-85.4 67.6-95.2 64.3-11.7 128.1-24.7 192.4-35.9 37.9-5.3 70.4-29.8 85.7-64.9 6.8-15.9 11-32.8 12.5-50 0.5-3.1 2.9-5.6 5.9-6.2 3.1-0.7 6.4 0.5 8.2 3l1.7-1.1c25.4 35.9 74.7 114.4 82.7 197.2 8.2 94.8 3.7 160-71.4 226.5-1.1 1.1-1.7 2.6-1.7 4.1 0.1 2 1.1 3.8 2.8 4.8h4.8l3.2-1.8c75.6-40.4 132.8-108.2 159.9-189.5 11.4 16.1 28.5 27.1 47.8 30.8C846 783.9 716.9 871.6 557.2 884.9c-12-28.6-42.5-44.8-72.9-38.6-33.6 5.4-56.6 37-51.2 70.6 4.4 27.6 26.8 48.8 54.5 51.6 30.6 4.6 60.3-13 70.8-42.2 184.9-14.5 333.2-120.8 364.2-286.9 27.8-10.8 46.3-37.4 46.6-67.2V428.7c-0.1-19.5-8.1-38.2-22.3-51.6-14.5-13.8-33.8-21.4-53.8-21.3l1-0.2zM825.9 397c-71.1-176.9-272.1-262.7-449-191.7-86.8 34.9-155.7 103.4-191 190-2.5-2.8-5.2-5.4-8-7.9 25.3-154.6 163.8-268.6 326.8-269.2s302.3 112.6 328.7 267c-2.9 3.8-5.4 7.7-7.5 11.8z" fill={ selectedIcon === '/CustomerService' ? '#0014FF' : '#666666' } p-id="13044"></path></svg>
    },
    {
      key: '/User',
      title: '我的',
      icon: <svg 
      t="1728573473057" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="14282" width="20" height="20"><path d="M666.944 606.72c-3.2-1.856-6.976-13.504-0.192-37.568 72.768-76.928 117.696-187.136 117.696-290.112C784.448 115.328 667.776 0 507.52 0 347.648 0 235.904 114.368 235.904 278.144c0 104.448 45.376 215.424 118.848 291.904 7.36 24.064-2.24 32.704-8.32 35.392C273.6 631.04 0 724.736 0 854.4L0 1024l1024 0 0-191.552C988.544 713.6 729.728 626.816 666.944 606.72L666.944 606.72" fill={ selectedIcon === '/User' ? '#0014FF' : '#666666' } p-id="14283"></path></svg>
    },
  ];  
  return (
    <div className="App">
       <div className="App-index">
          <Outlet/>
       </div>
       <TabBar className="App-TabBar" onChange={setRouteActive}>
          {tabss.map(item => (
            <TabBar.Item className="App-TabBar-Item" key={item.key} icon={item.icon} title={item.title} />
          ))}
       </TabBar>
    </div>
  );
}

export default App;

