"use client";

import { useEffect } from 'react';

declare global {
  interface Window {
    CozeWebSDK: {
      WebChatClient: new (config: any) => any;
    };
  }
}

export default function CozeChat() {
  // 读取环境变量（仅限NEXT_PUBLIC_前缀的变量可用于前端）
  const cozeToken = process.env.NEXT_PUBLIC_COZE_TOKEN;
  
  useEffect(() => {
    // 加载 Coze SDK 脚本
    const script = document.createElement('script');
    script.src = 'https://lf-cdn.coze.cn/obj/unpkg/flow-platform/chat-app-sdk/1.2.0-beta.10/libs/cn/index.js';
    script.async = true;
    script.onload = () => {
      try {
        // 初始化 Coze Chat
        if (window.CozeWebSDK) {
          new window.CozeWebSDK.WebChatClient({
            config: {
              bot_id: '7482314053541920807',
            },
            componentProps: {
              title: '栉云科技智能助手',
              position: 'right', // 设置位置在右侧
              distance: {
                vertical: 20, // 距离底部20px
                horizontal: 20, // 距离右侧20px
              },
            },
            auth: {
              type: 'token',
              token: cozeToken,
              onRefreshToken: function () {
                return cozeToken;
              }
            }
          });
        }
      } catch (error) {
        console.error('Failed to initialize Coze Chat:', error);
      }
    };
    
    document.body.appendChild(script);

    return () => {
      // 清理脚本
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [cozeToken]);

  return null;
} 

