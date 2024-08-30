# インストール

## nvm
OS全体 のNode.jsのバージョンを変更するのではなく、現在のシェルセッション（ターミナルウィンドウやタブ）に対してのみ適用される。  
他のシェルセッションには影響を与えない。  

## Chocolatey によるインストール
```
choco install nodejs

choco upgrade nodejs
```

## ubuntu にインストール
```
curl -sL https://deb.nodesource.com/setup_13.x | sudo bash -

sudo apt-get install -y nodejs
```
14 をインストールするなら、「14.x」

## CentOS にインストール
```
https://yuji-ueda.hatenadiary.jp/entry/2017/03/14/104727

yum install nodejs-6.9.4
この方法で本当に上手く行くの？
```

## Amazon Linux にインストール
```
curl -fsSL https://rpm.nodesource.com/setup_16.x | sudo bash -
sudo yum install -y nodejs
```

## Mac にインストール
```
brew install node
```


# バージョン切り替え

## 一覧を表示
```
nvm ls-remote
nvm ls-remote --lts
```

## NVM for Windows によるバージョン切り替え
```
choco install nvm

nvm install v13.7.0
nvm use 13.7.0
nvm use v18.11.0

nvm install v10.12.0
nvm install v11.15.0
nvm install v18.11.0


nvm
nvm list
nvm list available
```
上手く行かない場合、公式サイトのインストーラを使用する。  
https://github.com/coreybutler/nvm-windows/releases/  
nvm-setup.exe  


# デフォルトのバージョンを設定

## インストール済みのバージョンを確認
```
nvm ls
```

## 現在のデフォルトを確認
```
nvm alias default
```

```
nvm alias default v18.20.4
nvm alias default v20.17.0
```

___________________________________________________________________

NVM for Windows でバージョン切り替えをしたけど Node.js のバージョンが切り替わらない！　そんな時は、環境変数を見てみよう。

NVM for Windows を使うと、Windows 上で Node.js のバージョン管理ができるのですが、バージョンが切り替わらない現象に遭遇しました。
以下、その対策です。

### nvm のインストール
Chocolatey（パッケージマネージャー）を使用しています。Chocolateyのインストール方法は、[こちら](entry/2017/03/21/230940)でも。
ちなみに[公式サイトはこちら](https://chocolatey.org/install)
```
choco install nvm
```

### 別バージョンの　Node.js をインストール
```
nvm install v13.7.0
```

### Node.js のバージョンを切り替え
```
nvm use 13.7.0
```

これで Node.js のバージョンが切り替わってるはずが
```
λ node -v
v14.4.0
```

こんな感じで、マシンにインストールされている Node.js のバージョンが表示されました。


## 対策
環境変数が正常に設定されていない可能性があるので、設定し直します。

まず、コマンドプロンプトで「where nvm」と入力し、nvm のパスを調べます。
（PowerShell には where コマンドは無いみたい）
```
C:\>where nvm
C:\ProgramData\nvm\nvm.exe
```

今回のケースの場合、「C:\ProgramData\nvm」を使用します。

システムの環境変数に、以下を追加します。
```
変数名 : NVM_HOME
変数値 : C:\ProgramData\nvm
```

続いて、コマンドプロンプトで「where node」と入力し、node.js のパスを調べます。
```
C:\>where node
C:\Program Files\nodejs\node.exe
```
今回のケースでは、「C:\Program Files\nodejs」を使用します。

システム環境変数に、以下を設定します。
```
変数名 : NVM_SYMLINK
変数値 : C:\Program Files\nodejs
```

こんな感じになります。



その後、環境変数の設定内容を反映させます。
（コンソールのウィンドウを開きなおす）


## それでもバージョンが切り替わらない場合
公式サイトから配布されているインストーラを使用してください。
https://github.com/coreybutler/nvm-windows/releases/

nvm-setup.zip を選択し、「nvm-setup.exe」を起動してインストール。


こんなメッセージが出た場合は「はい」を選択します。
多分、この時に Node.js と上手い事やってくれてるんじゃないかと思います。





