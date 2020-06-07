## nodebrew
Node.js がインストール済みの場合、アンインストールしないと上手くいかないかも。
```
npm uninstall -g npm
brew uninstall node
```

https://github.com/hokaccha/nodebrew  
以下のコマンドが現在も正しいかは、公式サイトを参照。
```
curl -L git.io/nodebrew | perl - setup

# コンフィグに追記
vi source ~/.bashrc        # ↓の内容を書く。(.bashrc または .zshrc)
export PATH=$HOME/.nodebrew/current/bin:$PATH

# リロード
source ~/.bashrc


nodebrew install 6.9.1
nodebrew use 6.9.1

node -v
（ターミナル再起動）



which node
ls -la /Users/kaki/.nodebrew/current/bin/node
/Users/kaki/.nodebrew/current/bin/node -v
```

```
nodebrew ls-remote

nodebrew uninstall <version>
```
