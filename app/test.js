'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  Image,
  View,
  ScrollView,
} = React;

var TextView = React.createClass({
  render: function() {
    return (
<ScrollView style={{paddingVertical: 20,height:580}}>
	
	<Image style={{width:300,height:150}} source={require('image!hiway')} />
	<Image style={{width:300,height:150}} source={require('image!hiway')} capInsets={{left:150,right:0,top:0,bottom:0}}/>
	
	<Image style={{width:300,height:31}} source={require('image!green_btn_347_hover')} capInsets={{left:100,right:100}}>
	</Image>

	<Image style={{width:350,height:150,marginBottom:20}} source={require('image!hiway')} resizeMode="stretch" />

	<Image style={{width:350,height:44}} source={{uri:'http://tv01.tgbusdata.cn/v2/thumb/jpg/MjBGRCwwLDI0MCw5LDMsMSwtMSwwLHJrNTAsNjEuMTUyLjI0Mi4x/u/3ds.tgbus.com/UploadFiles/201505/2015051315144594.jpg'}}>
		<Text style={{color:'#fff',fontSize:20,fontWeight:'bold',left:50,top:10,containerBackgroundColor:'rgba(0,0,0,0)'}}>屠龙宝刀，点击就送</Text>
	</Image>



	<Text style={{backgroundColor: '#ddd',writingDirection: 'ltr',marginTop:10}}>我的背景色使用backgroundColor</Text>
	<Text style={{containerBackgroundColor:'#ddd',writingDirection: 'rtl',marginBottom: 10}}>我的背景色使用containerBackgroundColor</Text>

	<Text style={{top:-30,backgroundColor:'yellow'}}>我要自由活动</Text>

	<View style={{color: 'red'}}><Text>你好，我的父层是View</Text></View>
	<Text style={{color: 'red'}}><Text>你好，我的父层是Text</Text></Text>

	<Text style={{marginBottom: 20}}>
		<Text >你的所言所行，全都闪烁着光芒，太过刺目，于是我闭上了眼睛，，，</Text>
		<Text style={{width:300,height:40,containerBackgroundColor:'#454545',color:'#ECD011'}}>但是内心还是无法停止对你的憧憬</Text>
	</Text>


	<View style={{marginBottom: 20}}>
	  <Text>你的所言所行，全都闪烁着光芒，太过刺目，于是我闭上了眼睛，，，</Text>
	  <Text style={{width: 300,height:40,containerBackgroundColor:'#454545',color:'#ECD011'}}>但是内心还是无法停止对你的憧憬</Text>
	</View>


	<View style={{padding: 0, marginBottom:20,backgroundColor: '#454545', flexDirection: 'row'}}>
	    <Text style={[ {backgroundColor: 'red', padding: 30, flex: 1}]}>
	      	设置padding和flex
	    </Text>
	    <Text style={[ {backgroundColor: 'red', margin: 30, flex: 1}]}>
	      	设置margin和flex
	    </Text>
	</View>


    <View style={{backgroundColor: '#454545',height:60,flexDirection:'row',justifyContent:'center'}}>
      	<Text style={{color: '#fff',alignSelf:'center',}} numberOfLines="2">我要这段文本水平垂直居中，我还要自动换行，</Text>
      	<Text style={{color: '#fff',alignSelf:'center',}} numberOfLines="2">我要这段文本自动换行</Text>
    </View>
    <View style={{backgroundColor: '#454545',height:60,marginTop:20}}>
      	<Text style={{color: '#fff',lineHeight:36}} numberOfLines="2">我要这段文本水平垂直居中，我还要自动换行，</Text>
    </View>


	<View style={{marginBottom:20}}>
		<Text style={css.red}>1,不是说好要做彼此的加班天使吗？</Text>
		<Text style={css.blue}>我45度角仰望星空，因为我的监控显示器放的比较高。</Text>
	</View>
	<Text style={{marginBottom:20}}>
		<Text style={css.red}>2,不是说好要做彼此的加班天使吗？</Text>
		<Text style={css.blue}>我45度角仰望星空，因为我的监控显示器放的比较高。</Text>
	</Text>

	<View style={{marginBottom:20,flexDirection:'row'}}>
		<Text style={css.red}>3,不是说好要做彼此的加班天使吗？</Text>
		<Text style={css.blue}>我45度角仰望星空，因为我的监控显示器放的比较高。</Text>
	</View>
	<Text style={{marginBottom:20,flexDirection:'row'}}>
		<Text style={css.red}>4,不是说好要做彼此的加班天使吗？</Text>
		<Text style={css.blue}>我45度角仰望星空，因为我的监控显示器放的比较高。</Text>
	</Text>

	<View style={{marginBottom:20,flexDirection:'row'}}>
		<Text style={[ css.red, {flex:1} ]}>5,不是说好要做彼此的加班天使吗？</Text>
		<Text style={[ css.blue, {flex:1} ]}>我45度角仰望星空，因为我的监控显示器放的比较高。</Text>
	</View>
	<View style={{marginBottom:20,flexDirection:'row'}}>
		<Text style={[ css.red, {width:100} ]}>6,不是说好要做彼此的加班天使吗？</Text>
		<Text style={[ css.blue,{width:200,marginLeft:20} ]}>我45度角仰望星空，因为我的监控显示器放的比较高。</Text>
	</View>


</ScrollView>
    );
  }
});

var css = StyleSheet.create({
	red: {
		backgroundColor:'#68B33D',
		color: '#fff'
	},
	blue: {
		backgroundColor: '#37B0D3',
		color: '#fff'
	}

});

module.exports = TextView;







