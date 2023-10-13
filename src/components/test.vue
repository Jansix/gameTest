<template>
<div>

<el-button @click="res">重玩</el-button>
<el-card>男生分數 {{player[0].Scores}}</el-card>
<el-card>女生分數 {{player[1].Scores}}</el-card>
<br>
 <el-button @click="handleButtonClick">骰子</el-button>
<h3>骰子點數:{{number}}</h3>

<h3>要做的事:</h3>
<h5>{{something}}</h5>
</div>
</template>

<script>

export default {
data(){
	return{
		number:undefined,
		player:[
			{name:'Boys',id:1,Scores:0},
			{name:'Girls',id:1,Scores:0}
		],
		totalClicks:0,
		something:undefined, //要做的事
		currentPlayer: 1, //起始玩家
		list: [
			{ id: 1, text: '一起觀看星星' },
			{ id: 2, text: '寫情書給對方' },
			{ id: 3, text: '一起做美食晚餐' },
			{ id: 4, text: '一同度過一個浪漫周末' },
			{ id: 5, text: '制作甜品並一起分享' },
			{ id: 6, text: '在公園里散步' },
			{ id: 7, text: '送對方一份特別的禮物' },
			{ id: 8, text: '共同參加舞蹈課' },
			{ id: 9, text: '互相按摩' },
			{ id: 10, text: '觀看日落並分享美好時光' },
			{ id: 11, text: '一同探索新的城市' },
			{ id: 12, text: '在家舉行電影馬拉松' },
			{ id: 13, text: '共同準備早餐' },
			{ id: 14, text: '制定未來的旅行計劃' },
			{ id: 15, text: '一同去購物' },
			{ id: 16, text: '舉行浪漫的晚餐' },
			{ id: 17, text: '一同去戶外野餐' },
			{ id: 18, text: '為對方寫一首情詩' },
			{ id: 19, text: '互相表演喜歡的歌曲' },
			{ id: 20, text: '一起參觀美術館或博物館' },
			],
	}
},

methods:{
	handleButtonClick() {
    this.totalClicks++;
	if(this.player[0].Scores>=20 ||this.player[1].Scores>=20){
		alert('遊戲結束')
	}else{
		if (this.totalClicks % 2 === 1) {
		this.number=this.getRandomNumber();
		this.player[0].Scores = this.player[0].Scores + this.number;
		const result = this.list.find(item => item.id ===this.player[0].Scores);
		this.something=result.text
      	console.log('男生點擊');

    } else {
		this.number=this.getRandomNumber();
		this.player[1].Scores = this.player[1].Scores + this.number;
		const result = this.list.find(item => item.id ===this.player[1].Scores);
		this.something=result.text
      	console.log('女生點擊');
    }
	}
    },
	getRandomNumber() {
		const min = 1;
		const max = 6;
		const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
		return randomNumber;
	},
	res(){
		this.$data.number = this.$options.data().number;
		this.$data.player = this.$options.data().player;
		this.$data.totalClicks = this.$options.data().totalClicks;
		this.$data.something = this.$options.data().something;
		this.$data.currentPlayer = this.$options.data().currentPlayer;

	}

},



};
</script>

