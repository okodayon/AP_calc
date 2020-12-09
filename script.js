//結果の欄を取得しておく
let result = document.getElementById("result");
//÷ と × 処理するためにコピーをとる
//だけのつもりだったけどこれを実装することによってキーボードの入力を受け付けなくなった!!

let res = '';


function num(elem) {
    //文字列を直接new Functionするため÷ と ×を演算子に変える必要がある。
    if ('÷' == elem.value) {
        res = res + '/';
    } else if ('×' == elem.value) {
        res = res + '*';
    } else {
        res = res + elem.value;
    }
    //上の欄に追加していく
    result.value = result.value + elem.value;
}

function ans() {
    //空だった場合のエラー(buttonによって入力されていない場合)
    if (!res) {
        result.value = "error";
        return;
    } 
    //ここでresを使うことによってボタンを押して入力されたものだけ計算される
    result.value = new Function("return " + res)();
}

function allclear() {
    //空にする
    res = result.value = '';
}
