export interface Message {
  role: 'user' | 'ai';
  content: string;
  isTyping?: boolean;
}

export interface ChatState {
  messages: Message[];
  isLoading: boolean;
  error?: string;
} 