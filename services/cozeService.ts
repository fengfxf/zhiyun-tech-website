import axios from 'axios';

const COZE_API_URL = 'https://api.coze.cn/open/api/bot/completions';
const COZE_API_KEY = 'pat_L4PR47RvlOUep0DeuCkJegQXmNV7yCChp48JrAf4qoAcHbMakDVQ9x5jAtrRuITu';

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface CozeResponse {
  id: string;
  object: string;
  created: number;
  result: string;
  usage: {
    prompt_tokens: number;
    completion_tokens: number;
    total_tokens: number;
  };
}

export async function sendMessageToCoze(messages: Message[]): Promise<string> {
  try {
    const response = await axios.post<CozeResponse>(
      COZE_API_URL,
      {
        messages: messages,
        stream: false
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${COZE_API_KEY}`
        }
      }
    );

    return response.data.result;
  } catch (error) {
    console.error('Error sending message to Coze:', error);
    if (axios.isAxiosError(error) && error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
    }
    throw new Error('无法连接到智能客服，请稍后再试');
  }
} 