# Note Stacker

サービスURL：[Note Stacker](https://note-stacker.vercel.app/)
## ■サービス概要

その日に読んだニュースや技術記事などのURLをメモ付きでストックしておけるアプリです。

## ■ 開発の目的

- 記事に簡単にコメントを残せる機能により、「積読」記事を整理しやすくすること
- React、TypeScript、Next.js、Rails(APIモード)の理解を深めること

## ■ 機能一覧(⭐︎はログインが必要な機能)

|トップ画面|APIから取得した記事一覧|
|:--:|:--:|
|<a href="https://gyazo.com/219f7744cb5d7b9044d69445f73401bf"><img src="https://i.gyazo.com/219f7744cb5d7b9044d69445f73401bf.png" alt="Image from Gyazo" width="280"/></a>|<a href="https://gyazo.com/2a9166ef89b4678f8abff5cab88a7d28"><img src="https://i.gyazo.com/2a9166ef89b4678f8abff5cab88a7d28.png" alt="Image from Gyazo" width="280"/></a>|
|ログイン後に使える機能を紹介しています|NewsAPIとQiitaAPIから取得した記事一覧です|

|マイページ⭐︎|記事のURLとコメントを投稿しストック⭐︎|
|:--:|:--:|
|<a href="https://gyazo.com/5d53fdb4a11dc4ca6aa603deecf5ea82"><img src="https://i.gyazo.com/5d53fdb4a11dc4ca6aa603deecf5ea82.png" alt="Image from Gyazo" width="280"/></a>|<a href="https://gyazo.com/2558858adcf001e4705915b3b7b8b8e7"><img src="https://i.gyazo.com/2558858adcf001e4705915b3b7b8b8e7.png" alt="Image from Gyazo" width="280"/></a>|
|自分の投稿一覧が表示されます|新規投稿はモーダル上で行います|

|トップページの記事一覧から投稿⭐︎|カテゴリ別の記事一覧表示⭐︎|
|:--:|:--:|
|<a href="https://gyazo.com/62bead3eae597f10e148a5b73b25e2ac"><img src="https://i.gyazo.com/62bead3eae597f10e148a5b73b25e2ac.gif" alt="Image from Gyazo" width="280"/></a>|<a href="https://gyazo.com/41afe71522cd0faf9e61eab5fd7da450"><img src="https://i.gyazo.com/41afe71522cd0faf9e61eab5fd7da450.gif" alt="Image from Gyazo" width="280"/></a>|
|トップページの記事をそのまま投稿も可能です|カテゴリごとの一覧表示ができます|


## **■ 使用技術**

| カテゴリ | 技術 |
| --- | --- |
| フロントエンド | TypeScript / React 19 / Next.js 15.1.6 / TailwindCSS |
| バックエンド | Ruby 3.2.2 / Ruby on Rails 7.2.2（API モード） |
| データベース | MySQL |
| 認証 | Auth.js v5 |
| 環境構築 | Docker |
| インフラ | Vercel / Heroku |
| Web API | NewsAPI / Qiita API |

## **■ ER図**
[![Image from Gyazo](https://i.gyazo.com/854fd40ec1026cf687f170f7d8015435.png)](https://gyazo.com/854fd40ec1026cf687f170f7d8015435)
