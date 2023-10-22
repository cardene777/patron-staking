# Tableland

## 📜 About

Tableland は SQLite エンジン上に構築された分散型データベースで、開発者にスタックに簡単に統合できる Web3 ネイティブのリレーショナル データベースを提供します。テーブルランドを使用すると、次のことが可能になります。

- SQL を利用して Web3 データを操作し、開発プロセスをよりシンプルかつ効率的にします。
- ウォレット アドレス、トークンの所有権、アカウント残高、および選択したロジックに基づく行レベルのアクセス ルールを構成します。
- Tableland のインフラストラクチャを活用して、DeFi、DeSci、ゲームなどの大量のデータをすべて分散型かつ自律的に処理および配布する堅牢なデータ パイプラインを構築します。

## 🛠️ Setup

```bash
$ cd src/tableland
$ npm install
$ cp .env.sample .env
```

- .envに秘密鍵とAlchemyのシークレットキーを書き込み。
- 秘密鍵から生成されたアドレスにMATIC（Testnet）を送る。

## 💻 Code

### DB

- `patron_staking_80001_8127`

### Connect DB

- [network.js](./src/network.js)

- https://docs.tableland.xyz/sdk/database/signers


```bash
$ node src/network.js
```

### Create database

- [createTable.js](./src/createTable.js)

```bash
$ node src/createTable.js
```

### Write database

- [writeTable.js](./src/readTable.js)
- https://docs.tableland.xyz/sdk/database/#writes

```bash
$ node src/writeTable.js
```

### Read database

- [readTable.js](./src/readTable.js)

```bash
$ node src/readTable.js
```

```bash
[ { id: 0, name: 'Cardene' } ]
```

### Update database

- [updateTable.js](./src/updateTable.js)

```bash
$ node src/updateTable.js
```

```bash
results: [{"id":0,"name":"Cardene V2"}]
```



## 🔗 Link

- https://docs.tableland.xyz/
