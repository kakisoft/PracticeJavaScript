# インストール

## ubuntu にインストール
sudo で実行する必要があるかも。
```
curl -sL https://deb.nodesource.com/setup_18.x -o nodesource_setup.sh
bash nodesource_setup.sh
apt install -y nodejs
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

______________________________________________________
# アンインストール
https://www.digitalocean.com/community/tutorials/install-uninstall-nodejs-ubuntu#uninstall-nodejs-from-ubuntu

## Ubuntu
＜ パッケージを残してアンインストール ＞
```
sudo apt remove nodejs npm
```

＜ 完全削除 ＞
```
sudo apt purge nodejs npm
sudo apt autoremove
```


