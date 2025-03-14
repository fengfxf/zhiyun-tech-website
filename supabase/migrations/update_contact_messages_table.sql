-- 添加已处理字段
ALTER TABLE contact_messages ADD COLUMN IF NOT EXISTS processed BOOLEAN DEFAULT FALSE;

-- 创建索引以提高查询性能
CREATE INDEX IF NOT EXISTS idx_contact_messages_processed ON contact_messages(processed);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at); 