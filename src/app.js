var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var sprite = new cc.Sprite.create(res.CloseNormal_png);
        sprite.setAnchorPoint(cc.p(0.5, 0.5));
        sprite.setPosition(cc.p(size.width / 2, size.height / 2));
        sprite.setTag(1);
        this.addChild(sprite, 0);

        var sprite2 = new cc.Sprite.create(res.CloseNormal_png);
        sprite2.setAnchorPoint(cc.p(0.5, 0.5));
        sprite2.setPosition(cc.p(size.width / 4, size.height / 2));
        sprite2.setTag(67);
        this.addChild(sprite2, 0);

        this.scheduleOnce(this.remove, 2);

        return true;
    },

    remove: function()
    {
    	//this.removeAllChildren(true);
    	this.removeChildByTag(1, true);
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

