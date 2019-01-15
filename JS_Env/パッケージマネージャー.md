## 参考サイト
https://qiita.com/tonkotsuboy_com/items/5322d226b6783d25b5df

_______________________

n, nodebrew, 色々ある。

## バージョン切り替え

### anyenv
```
git clone https://github.com/riywo/anyenv ~/.anyenv
echo 'export PATH="$HOME/.anyenv/bin:$PATH"' >> ~/.bash_profile
echo 'eval "$(anyenv init -)"' >> ~/.bash_profile
exec $SHELL -l

anyenv install ndenv
exec $SHELL -l
```
ndenv と入力し、バージョン番号（と、その他諸々の情報）が出てきたらOK。

### node.js のインストール
```
ndenv install (バージョン)

（例）
ndenv install v10.15.0
```

## 使用するバージョンの指定
```
バージョンを指定したいディレクトリにて実行する。
ndenv local (バージョン)

（例）
ndenv local v10.15.0
```
.node-version というファイルが作成されます。

## バージョン確認
```
node -v
```

