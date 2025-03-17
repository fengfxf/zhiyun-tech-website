import { Message } from '../types/chat';

export interface AIResponse {
  content: string;
  error?: string;
}

interface CozeMessage {
  role: string;
  content: string;
}

interface CozeResponse {
  id: string;
  object: string;
  created: number;
  result: string;
  need_stream: boolean;
  conversation_id: string;
}

export async function sendMessage(message: string): Promise<AIResponse> {
  try {
    const response = await fetch('https://www.coze.cn/api/message/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.COZE_API_KEY}`
      },
      body: JSON.stringify({
        messages: [
          {
            role: 'system',
            content: `你是栉云科技的AI智能助手，你需要：
1. 以专业、友好的态度回答用户的问题
2. 主要关注栉云科技的产品、技术、服务等相关信息
3. 如果用户询问其他问题，引导他们回到公司相关的话题
4. 使用简洁、易懂的语言
5. 保持回答的连贯性和上下文相关性`
          },
          {
            role: 'user',
            content: message
          }
        ],
        bot_id: 'default', // 使用默认机器人ID
        stream: false // 不使用流式响应
      })
    });

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data: CozeResponse = await response.json();

    return {
      content: data.result
    };
  } catch (error) {
    console.error('AI API Error:', error);
    return {
      content: '抱歉，我遇到了一些问题。请稍后再试。',
      error: error instanceof Error ? error.message : '未知错误'
    };
  }
} 