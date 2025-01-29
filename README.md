# Note Stacker

## ■サービス概要

その日に読んだニュースや技術記事などのURLをメモ付きでストックしておけるアプリです。

## ■ 開発の目的

- 記事に簡単にコメントを残せる機能により、「積読」記事を整理しやすくすること
- React、TypeScript、Next.js、Rails(APIモード)の理解を深めること

## ■ 機能候補

- ユーザー登録
- ログイン/ログアウト
- 投稿のCRUD
    - URL
    - コメント
    - カテゴリ
- マイページ
    - 自分の投稿一覧表示
    - カテゴリ別
- NewsAPI、QiitaAPIからの最新ニュース取得＆一覧表示（未ログインで使用可能）

## **■ 使用技術**

| カテゴリ | 技術 |
| --- | --- |
| フロントエンド | TypeScript / React 19 / Next.js 15.1.6 / TailwindCSS / HeroUI |
| バックエンド | Ruby 3.2.2 / Ruby on Rails 7.2.2（API モード） |
| データベース | MySQL |
| 認証 | Auth.js v5 |
| 環境構築 | Docker |
| インフラ | Vercel / Heroku |
| Web API | NewsAPI / Qiita API |

## **■ ER図**
[![Image from Gyazo](https://i.gyazo.com/791fb2b977f1d79f1ce53af05eac0574.png)](https://gyazo.com/791fb2b977f1d79f1ce53af05eac0574)
