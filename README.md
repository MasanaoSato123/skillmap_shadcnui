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