# n
https://github.com/tj/n?tab=readme-ov-file#installation

## install
sudo を付けない上手く行かないのでは？
```
sudo npm install -g n
```

## uninstall
```
sudo npm uninstall -g n
```


```
find . -maxdepth 2
```

```
＜標準＞
sudo rm -rf /usr/local/n
sudo rm -rf /usr/local/bin/n
sudo rm -rf /usr/bin/n

＜追加＞
sudo rm -rf /usr/local/bin/node
sudo rm -rf /usr/local/bin/npm
sudo rm -rf /usr/local/bin/npx
sudo rm -rf /usr/local/lib/node_modules
sudo rm -rf /usr/local/include/node
sudo rm -rf /usr/local/share/man/man1/node.1
sudo rm -rf /usr/local/share/systemtap/tapset/node.stp
```



## バージョン切り替え
```
sudo n 17.0.0
sudo n 19.0.0
```

