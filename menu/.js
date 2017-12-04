var menu = {
	preload: function() {

		game.load.image('menu', 'assets/menu.png');
		game.load.image('level1', 'assets/level1.png');
		game.load.image('level2', 'assets/level2.png');
		
	},
	
	create: function() {
		
		game.scale.pageAlignHorizontally = true;
		game.scale.pageAlignVertically = true;
		game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		game.physics.startSystem(Phaser.Physics.ARCADE);

		var s = game.add.sprite(350, 80, 'menu');
		

		var btn1 = game.add.button(490 , 320, "lvl1", function(){
			game.state.start('S1');
		});
		btn1.anchor.set(0.5, 0.5);

		var btn2 = game.add.button(490, 370, "lvl2", function(){
			game.state.start('S2');
		});
		btn2.anchor.set(0.5, 0.5);

	}
}
