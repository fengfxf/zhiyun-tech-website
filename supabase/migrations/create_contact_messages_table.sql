-- 创建联系表单数据表
CREATE TABLE IF NOT EXISTS contact_messages (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  company TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 创建RLS策略
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- 创建插入策略（允许匿名用户插入数据）
CREATE POLICY "Allow anonymous insert" ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- 创建查看策略（只有经过身份验证的用户可以查看数据）
CREATE POLICY "Allow authenticated select" ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);

-- 创建更新触发器，自动更新updated_at字段
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_contact_messages_updated_at
BEFORE UPDATE ON contact_messages
FOR EACH ROW
EXECUTE FUNCTION update_updated_at_column(); 