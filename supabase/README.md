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

## 表结构

联系表单数据表 (`contact_messages`) 包含以下字段：

- `id`: 主键，自动递增
- `name`: 联系人姓名（必填）
- `email`: 联系人电子邮件（必填）
- `company`: 联系人公司（可选）
- `message`: 联系人留言（必填）
- `created_at`: 记录创建时间，自动设置
- `updated_at`: 记录更新时间，自动更新

## 行级安全策略 (RLS)

该表启用了行级安全策略，具体如下：

- 允许匿名用户插入数据（提交表单）
- 只有经过身份验证的用户可以查看数据（管理员）

## 触发器

创建了一个触发器，用于在记录更新时自动更新 `updated_at` 字段。 