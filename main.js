var enableDebugMode = function(game, enable) {
    if(!enable) {
        return
    }
    window.paused = false
    window.addEventListener('keydown', function(event){
        var k = event.key
        if (k == 'p') {
            // 暂停功能
            window.paused = !window.paused
        } else if ('1234567'.includes(k)) {
            // 为了 debug 临时加的载入关卡功能log
            log('k', k)
            blocks = loadLevel(game, Number(k))
            log('blocks', blocks)
        }
    })
}

var __main = function() {
    var images = {
        title: 'img/title.jpg',
        blast1: 'img/blast1.png',
        blast2: 'img/blast2.png',
        main: 'img/main.jpg',
        poker1: 'img/poker1.jpg',
        poker2: 'img/poker2.jpg',
        poker3: 'img/poker3.jpg',
        poker4: 'img/poker4.jpg',
        poker5: 'img/poker5.jpg',
        poker6: 'img/poker6.jpg',
        poker7: 'img/poker7.jpg',
        poker8: 'img/poker8.jpg',
        poker9: 'img/poker9.jpg',
        poker10: 'img/poker10.jpg',
        poker11: 'img/poker11.jpg',
        poker12: 'img/poker12.jpg',
        poker13: 'img/poker13.jpg',
    }
    var game = GuaGame.instance(30, images, function(g){
        var s = SceneTitle.new(g)
        g.runWithScene(s)
    })
    enableDebugMode(game, true)
}

__main()
