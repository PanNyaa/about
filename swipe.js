// スワイプ検出
const SwipeTracker = function(elem, direction="") {

    let x = 0;
    let y = 0;
    let target = null;
    let startX = 0;
    let startY = 0;
    let moveX = 0;
    let moveY = 0;
    let thresholdX;
    let thresholdY;
    let eventList = {};

    // 指定されたエレメントを検出対象にする
    target = elem;
    
    // ----- 諸々関数
    
    // スワイプと見なす閾値の設定、数値は用途で調整
    const setThreshold = function(){
        // 画面幅1/4または300の小さい方、割としっかり動かさないとスワイプにならない
        thresholdX = Math.min(window.innerWidth/4, 300);
        // 画面高さ1/6または50の小さい方、縦は敏感
        thresholdY = Math.min(window.innerHeight/6, 50);
    };

    // イベント発行。同じ名前のイベントを繰り返し作るのが気にならないなら不要
    const kickEvent = function(eventName) {
        if (eventList[eventName]==undefined) {
            eventList[eventName] = new Event(eventName);
        }
        target.dispatchEvent(eventList[eventName]);
    };

    // 検出のリセット
    const resetSwipe = function() {
        x = 0;
        y = 0;   
        startX = 0;
        startY = 0;
        moveX = 0;
        moveY = 0;
    }

    // スワイプのキャンセル
    const cencelSwipe = function() {
        resetSwipe();
        kickEvent("swipe.cancel");
    }

    // 外部に移動量を教えるメソッド
    this.posx = function(){ return x; };
    this.posy = function(){ return y; };

    // ---- タッチイベントを監視

    // 開始
    target.addEventListener("touchstart", (ev) => {
        // 開始座標記録
        startX = ev.touches[0].pageX;
        startY = ev.touches[0].pageY;
        moveX = startX;
        moveY = startY;
        kickEvent('swipe.start');
    }, {passive:true});
    // キャンセル
    target.addEventListener("touchcancel", cencelSwipe, {passive:true});
    // 移動
    target.addEventListener('touchmove', (ev) => {
        moveX = ev.touches[0].pageX;
        moveY = ev.touches[0].pageY;
        // タッチ開始時からの差分
        x = moveX - startX;
        y = moveY - startY;
        kickEvent('swipe.move');
    }, {passive:true});
    // 終了
    target.addEventListener("touchend", (ev) => {
        // 横方向の移動が閾値を超えてる＝＞左右スワイプ
        if (Math.abs(x) >= thresholdX) {
            if (x < 0) {
                kickEvent('swipe.left');
            } else {
                kickEvent('swipe.right');
            }
        // 左右の検出をしたかったけど閾値超えず＝＞キャンセル
        } else if (direction == "lr") {
            kickEvent("swipe.cancel");
        }
        // 縦方向の移動が閾値を超えてる＝＞上下スワイプ
        if (Math.abs(y) >= thresholdY) {
            if (y < 0) {
                kickEvent('swipe.up');
            } else {
                kickEvent('swipe.down');
            }
        }
        // 上下の検出をしたかったけど閾値超えず＝＞キャンセル
        else if (direction == "ud") {
            kickEvent("swipe.cancel");
        }
        // 何にせよ値リセット
        resetSwipe();
    }, {passive:true});
    
    // 呼ばれた時に、閾値設定を実行
    setThreshold();
    // 画面リサイズ時にも再実行
    window.addEventListener("resize", setThreshold);
};

