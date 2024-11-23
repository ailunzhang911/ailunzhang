import React, { useEffect, useState } from 'react';

function User() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // 创建 WebSocket 连接
    const ws = new WebSocket('ws://localhost:2346');
    // 处理连接打开事件
    
    // 接收数据时更新状态
    ws.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);
      setData(receivedData);
    };
    
    // 处理连接关闭
    ws.onclose = () => {
      console.log("连接已关闭");
    };    
    // 清除 WebSocket 连接
    return () => {
      ws.close();
    };    
  }, []);
  return (
    <div>
      <h1>实时数据</h1>
      {data ? (
        <div>
          <p>时间: {data.time}</p>
          <p>消息: {data.message}</p>
        </div>
      ) : (
        <p>等待数据...</p>
      )}
    </div>
  );
}

export default User;