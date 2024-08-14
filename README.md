# スキルマップ

このプロジェクトは、従業員のスキルを管理するためのウェブアプリケーションです。

## 必要条件

- Node.js (バージョン14以上)
- MySQL (MAMPを使用する場合はMAMP)

## セットアップ手順

1. リポジトリをクローンします：

```bash
git clone https://github.com/MasanaoSato123/skillmap_shadcnui.git
cd skillmap_shadcnui
```

2. 依存関係をインストールします：

```bash
npm install
```

3. MySQLデータベースのセットアップ：

   - MAMPを使用する場合：
     - MAMPをインストールし、起動します。
     - MAMPの管理画面でデータベースを作成します。
     - `.env`ファイルにデータベースのURLを設定します：
       ```
       DATABASE_URL="mysql://root:root@localhost:3306/your_database_name"
       ```
   - 一般的なMySQLの場合：
     - MySQLをインストールし、起動します。
     - データベースを作成します。
     - `.env`ファイルにデータベースのURLを設定します：
       ```
       DATABASE_URL="mysql://username:password@localhost:3306/your_database_name"
       ```

4. データベースを初期化します：

```bash
npx prisma migrate dev
```

5. アプリケーションを実行します：

```bash
npm run dev
```

## 実行結果

実行すると、以下のような結果が表示されます：

```
  ▲ Next.js 14.2.5
  - Local:        http://localhost:3000
  - Environments: .env

 ✓ Starting...
 ✓ Ready in 2.3s
```

この結果は、Next.jsアプリケーションが正常に起動し、ローカルホストのポート3000でアクセス可能であることを示しています。

## プロジェクトアーキテクチャ

このプロジェクトは以下のようなアーキテクチャで構成されています：

1. フロントエンド（Next.js）：
   - `app/page.tsx`: メインページコンポーネント
   - `components/EmployeeForm.tsx`: 従業員情報入力フォーム
   - `components/SkillMap.tsx`: スキルマップ表示コンポーネント

2. バックエンド（Next.js API Routes）：
   - `app/api/employees/route.ts`: 従業員データのCRUD操作
   - `app/api/categories/route.ts`: カテゴリ（業種、サービス、言語）データの取得
   - `app/api/industries/route.ts`: 業種データの取得

3. データベース（MySQL）：
   - Prismaを使用してORMを実装
   - `prisma/schema.prisma`: データベーススキーマ定義

4. データモデル：
   - Employee（従業員）
   - Industry（業種）
   - Service（サービス）
   - Language（言語）

5. ユーティリティ：
   - `lib/prisma.ts`: Prismaクライアントのインスタンス管理
   - `lib/utils.ts`: ユーティリティ関数

6. スタイリング：
   - Tailwind CSSを使用

7. 設定ファイル：
   - `next.config.js`: Next.js設定
   - `tailwind.config.js`: Tailwind CSS設定
   - `tsconfig.json`: TypeScript設定

このアーキテクチャは、Next.jsのフルスタック機能を活用し、フロントエンドとバックエンドを統合しています。Prismaを使用してデータベース操作を簡素化し、Tailwind CSSでスタイリングを行っています。