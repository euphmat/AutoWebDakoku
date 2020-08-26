# Web打刻自動入力システム

> https://ghr.unify.persol-group.co.jp/cws/srwtimerec

上記ページにて使用可能な、勤怠入力作業を半自動化するシステムです。

## ドキュメント

+ [研修報告書](https://github.com/euphmat/PPHRWebDakoku/blob/master/doc/00.%E7%A0%94%E4%BF%AE%E5%A0%B1%E5%91%8A%E6%9B%B8.md)
+ [基本設計書](https://github.com/euphmat/PPHRWebDakoku/blob/master/doc/01.%E5%9F%BA%E6%9C%AC%E8%A8%AD%E8%A8%88%E6%9B%B8.md)

## インストール方法

### 1.GoogleChromeのインストール
```bash
$ brew cask install google-chrome
```

### 2.git clone
```
$ git clone https://github.com/euphmat/PPHRWebDakoku
```
もしくは、[ここからDownload](https://github.com/euphmat/PPHRWebDakoku/archive/master.zip)

### 3.GoogleChromeに非公式の拡張機能をインストールする

1. 右上にあるパズルのピースのアイコンをクリック  
![image](https://i.imgur.com/gUtMFXU.png)

2. 拡張機能の管理 を クリック  
![image](https://i.imgur.com/DUn4qqd.png)

3. 画面右上の「デベロッパーモード」をON  
![image](https://i.imgur.com/0vPHQLY.png)

4. 画面左側にある「パッケージ化されていない拡張機能を読み込む」をクリック  
![image](https://i.imgur.com/NaSkZMh.png)

5. 「PPHRWebDakoku」の中にある「dist」フォルダをクリックし、右下の「選択」をクリック
![image](https://i.imgur.com/npNfR8h.png)

6. 成功すれこのように読み込まれる  
![image](https://i.imgur.com/FFbJ8PO.png)

7. 画面右上のパズルピースからインストールした拡張機能を選択し、「オプション」をクリック  
![image](https://i.imgur.com/MC1m9FF.png)

8. すると、このような画面が表示される
![image](https://i.imgur.com/wR9bdV5.png)

開発中のため、いくつか問題を抱えている。
+ ダサい
+ チェックボックスの挙動が怪しい
+ バリデーションチェックを行っていないため、本来入力できない値が入力できる

9. 自動で入力させたい値を入力する。 自動で入力してほしくないところは空で良い。  
![image](https://i.imgur.com/u4aBupr.png)

10. 保存ボタンを押下する。   
押しても特に何も反応がないが、後ろでデータベースが更新されている。
リリース版では何かしらのフィードバックをつけるつもり。

11. Web打刻ページにアクセスし、「詳細」ボタンを押す  
https://ghr.unify.persol-group.co.jp/cws/srwtimerec

12. 「たぶん」設定したとおりにフォームに入力される
![image](https://i.imgur.com/Djxk4PH.png)

## 上手く動かない！！！バグを見つけた！  
ここに報告してくれると嬉しいです。。。。。。。。。。  
[new issue](https://github.com/euphmat/PPHRWebDakoku/issues/new/choose)
