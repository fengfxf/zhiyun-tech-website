# Supabase 设置指南

本文档提供了如何在 Supabase 中设置数据库表和权限的说明。

## 联系表单数据表

要创建联系表单数据表，请按照以下步骤操作：

1. 登录到 [Supabase 控制台](https://app.supabase.io/)
2. 选择您的项目
3. 导航到 SQL 编辑器
4. 创建一个新的查询
5. 复制并粘贴 `migrations/create_contact_messages_table.sql` 文件中的内容
6. 运行查询

## 更新联系表单数据表

要更新联系表单数据表，添加"已处理"字段和索引，请按照以下步骤操作：

1. 登录到 [Supabase 控制台](https://app.supabase.io/)
2. 选择您的项目
3. 导航到 SQL 编辑器
4. 创建一个新的查询
5. 复制并粘贴 `migrations/update_contact_messages_table.sql` 文件中的内容
6. 运行查询

## 启用身份验证

要启用身份验证，请按照以下步骤操作：

1. 登录到 [Supabase 控制台](https://app.supabase.io/)
2. 选择您的项目
3. 导航到 Authentication > Providers
4. 确保 Email 提供商已启用
5. 导航到 Authentication > Settings
6. 在 "Site URL" 字段中输入您的网站 URL（例如 `http://localhost:3000`）
7. 保存更改

## 创建管理员用户

要创建管理员用户，请按照以下步骤操作：

1. 登录到 [Supabase 控制台](https://app.supabase.io/)
2. 选择您的项目
3. 导航到 Authentication > Users
4. 点击 "Invite user" 按钮
5. 输入管理员的电子邮件地址
6. 点击 "Invite" 按钮
7. 管理员将收到一封包含设置密码链接的电子邮件
8. 管理员点击链接并设置密码后，即可使用该电子邮件地址和密码登录后台管理系统

## 表结构

联系表单数据表 (`contact_messages`) 包含以下字段：

- `id`: 主键，自动递增
- `name`: 联系人姓名（必填）
- `email`: 联系人电子邮件（必填）
- `company`: 联系人公司（可选）
- `message`: 联系人留言（必填）
- `processed`: 是否已处理，布尔值，默认为 false
- `created_at`: 记录创建时间，自动设置
- `updated_at`: 记录更新时间，自动更新

## 行级安全策略 (RLS)

该表启用了行级安全策略，具体如下：

- 允许匿名用户插入数据（提交表单）
- 只有经过身份验证的用户可以查看数据（管理员）

## 触发器

创建了一个触发器，用于在记录更新时自动更新 `updated_at` 字段。

## 索引

为了提高查询性能，创建了以下索引：

- `idx_contact_messages_processed`: 在 `processed` 字段上的索引
- `idx_contact_messages_created_at`: 在 `created_at` 字段上的索引 