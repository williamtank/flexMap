'use strict';

var React = require('react-native');
var {
  StyleSheet,
  Text,
  View,
  ScrollView
} = React;


var TextView = React.createClass({
	render: function(){
		return(
			<Text style={css.itemtext} >{this.props.children }</Text>
		)
	}
});

var ItemView = React.createClass({
	render: function(){
		return (
			<View style={[css.item, this.props.style]}>
				<TextView >{this.props.children }</TextView>
			</View>
		)
	}
});

var MoreTextItemView = React.createClass({
	render: function(){
		return(
			<View style={[css.item, this.props.style]}>
				{this.props.children}
			</View>
		)
	}
});




var Demo1View = React.createClass({
  render: function() {
    return (
      <ScrollView style={css.contain} >

      	<View style={css.header}>
      		<Text style={css.h3}>[ flex ]</Text>
      	</View>
      	<View style={css.boxes}>
      		<View style={css.box}>
      		     <View style={css.boxstyle}>
      				<Text style={css.p}> flexDirection: row</Text>
      			</View>
      			<View style={css.demo}>
      				<ItemView style={[ css.item1, {width:100}]}>width:100;</ItemView>
      				<ItemView style={[ css.item2, {flex:1}]}>flex:1;</ItemView>
      				<ItemView style={[ css.item3, {flex:2}]}>flex:2;</ItemView>
      			</View>
      		</View>

      		<View style={css.box}>
      		    <View style={css.boxstyle}>
      				<Text style={css.p}> flexDirection: row</Text>
      			</View>
      			<View style={css.demo}>
      				<MoreTextItemView style={[ css.item1, {width:120,marginRight:10} ]}>
      					<TextView >width:120</TextView>
      					<TextView >marginRight:10</TextView>
      				</MoreTextItemView>

      				<ItemView style={[ css.item2, {flex:1} ]}>flex:1;</ItemView>

      				<MoreTextItemView style={[ css.item3, {width:120,marginLeft:10} ]}>
      					<TextView>width:120</TextView>
      					<TextView>marginLeft:10</TextView>
      				</MoreTextItemView>

      			</View>
      		</View>
      	</View>


      	<View style={css.header}>
      		<Text style={css.h3}>[ flexDirection ]</Text>
      	</View>
      	<View style={css.boxes}>
      		<View style={css.box}>
      			<View style={css.boxstyle}>
      				<Text style={css.p}> flexDirection: row</Text>
      			</View>
      			<View style={css.demo}>
      				<ItemView style={[ css.item1, {flex:1}]}>flex:1;</ItemView>
      				<ItemView style={[ css.item2, {flex:2}]}>flex:2;</ItemView>
      				<ItemView style={[ css.item3, {flex:3}]}>flex:3;</ItemView>

      			</View>
      		</View>

      		<View style={css.box}>
      			<View style={css.boxstyle}>
      				<Text style={css.p}> flexDirection: column</Text>
                    <Text style={css.p}> height: 150</Text>
      			</View>
      			<View style={{flexDirection:'column',height:150}}>
      				<ItemView style={[ css.item1, {flex:1}]}>flex:1;</ItemView>
      				<ItemView style={[ css.item2, {flex:2}]}>flex:2;</ItemView>
      				<ItemView style={[ css.item3, {flex:3}]}>flex:3;</ItemView>
      			</View>
      		</View>
      	</View>


        <View style={css.header}>
            <Text style={css.h3}>[ flexWrap ]</Text>
        </View>
        <View style={css.boxes}>
            <View style={css.box}>
                <View style={css.boxstyle}>
                    <Text style={css.p}> flexWrap: nowrap</Text>
                    <Text style={css.p}> flexDirection: 'row'</Text>
                    <Text style={css.p}> width: 400</Text>
                </View>
                <View style={[css.demo_border,{width:400,flexWrap:'nowrap'}]}>
                    <ItemView style={[ css.item1, {width:100}]}>width:100</ItemView>
                    <ItemView style={[ css.item2, {width:200}]}>width:200</ItemView>
                    <ItemView style={[ css.item3, {width:300}]}>width:300</ItemView>
                </View>
            </View>

            <View style={css.box}>
                <View style={css.boxstyle}>
                    <Text style={css.p}> flexWrap: wrap</Text>
                    <Text style={css.p}> flexDirection: rowwrap</Text>
                    <Text style={css.p}> width: 400</Text>
                </View>
                <View style={[css.demo_border,{width:400,flexWrap:'wrap'}]}>
                    <ItemView style={[ css.item1, {width:100}]}>width:100</ItemView>
                    <ItemView style={[ css.item2, {width:200}]}>width:200</ItemView>
                    <ItemView style={[ css.item3, {width:300}]}>width:300</ItemView>
                </View>
            </View>
        </View>


        <View style={css.header}>
            <Text style={css.h3}>[ justifyContent ]</Text>
        </View>
        <View style={css.boxes}>
            <View style={css.box}>
                <View style={css.boxstyle}>
                    <Text style={css.p}> justifyContent: 'flex-start'</Text>
                    <Text style={css.p}> flexDirection: 'row'</Text>
                </View>
                <View style={[css.demo_border,{justifyContent:'flex-start'}]}>
                    <ItemView style={[ css.item1, {width:100}]}>width:100</ItemView>
                    <ItemView style={[ css.item2, {width:100}]}>width:100</ItemView>
                </View>
            </View>

            <View style={css.box}>
                <View style={css.boxstyle}>
                    <Text style={css.p}> justifyContent: 'flex-end'</Text>
                    <Text style={css.p}> flexDirection: 'row'</Text>
                </View>
                <View style={[css.demo_border,{justifyContent:'flex-end'}]}>
                    <ItemView style={[ css.item1, {width:100}]}>width:100</ItemView>
                    <ItemView style={[ css.item2, {width:100}]}>width:100</ItemView>
                </View>
            </View>

            <View style={css.box}>
                <View style={css.boxstyle}>
                    <Text style={css.p}> justifyContent: 'center'</Text>
                    <Text style={css.p}> flexDirection: 'row'</Text>
                </View>
                <View style={[css.demo_border,{justifyContent:'center'}]}>
                    <ItemView style={[ css.item1, {width:100}]}>width:100</ItemView>
                    <ItemView style={[ css.item2, {width:100}]}>width:100</ItemView>
                </View>
            </View>

            <View style={css.box}>
                <View style={css.boxstyle}>
                    <Text style={css.p}> justifyContent: 'space-between'</Text>
                    <Text style={css.p}> flexDirection: 'row'</Text>
                </View>
                <View style={[css.demo_border,{justifyContent:'space-between'}]}>
                    <ItemView style={[ css.item1, {width:100}]}>width:100</ItemView>
                    <ItemView style={[ css.item2, {width:100}]}>width:100</ItemView>
                </View>
            </View>

            <View style={css.box}>
                <View style={css.boxstyle}>
                    <Text style={css.p}> justifyContent: 'space-around'</Text>
                    <Text style={css.p}> flexDirection: 'row'</Text>
                </View>
                <View style={[css.demo_border,{justifyContent:'space-around'}]}>
                    <ItemView style={[ css.item1, {width:100}]}>width:100</ItemView>
                    <ItemView style={[ css.item2, {width:100}]}>width:100</ItemView>
                </View>
            </View>
        </View>

        <View style={css.header}>
            <Text style={css.h3}>[ alignSelf ]</Text>
        </View>
        <View style={css.boxes}>
            <View style={css.box}>
                <View style={css.boxstyle}>
                    <Text style={css.p}> flexDirection: 'row'</Text>
                    <Text style={css.p}> height: 200 </Text>
                </View>
                <View style={[css.demo_border,{height:100}]}>
                    <ItemView style={[ css.item1, {width: 60,alignSelf:'flex-start'}]}>flex-start</ItemView>
                    <ItemView style={[ css.item2, {width: 60,alignSelf:'flex-end'}]}>flex-end</ItemView>
                    <ItemView style={[ css.item3, {width: 60,alignSelf:'center'}]}>center</ItemView>
                    <ItemView style={[ css.item4, {width: 60,alignSelf:'auto'}]}>auto</ItemView>
                    <ItemView style={[ css.item5, {width: 60,alignSelf:'stretch'}]}>stretch</ItemView>

                </View>
            </View>
        </View>

        <View style={css.header}>
            <Text style={css.h3}>[ alignItems ]</Text>
        </View>
        <View style={css.boxes}>
            <View style={css.box}>
                <View style={css.boxstyle}>
                    <Text style={css.p}> alignItems: flex-start </Text>
                    <Text style={css.p}> flexDirection: 'row'</Text>
                    <Text style={css.p}> height: 120</Text>
                </View>
                <View style={[css.demo_border,{alignItems:'flex-start',height: 120}]}>
                    <ItemView style={[ css.item1, {width:100}]}>width:100</ItemView>
                    <ItemView style={[ css.item2, {width:100}]}>width:100</ItemView>
                </View>
            </View>

            <View style={css.box}>
                <View style={css.boxstyle}>
                    <Text style={css.p}> alignItems: flex-end </Text>
                    <Text style={css.p}> flexDirection: 'row'</Text>
                    <Text style={css.p}> height: 120</Text>
                </View>
                <View style={[css.demo_border,{alignItems:'flex-end',height: 120}]}>
                    <ItemView style={[ css.item1, {width:100}]}>width:100</ItemView>
                    <ItemView style={[ css.item2, {width:100}]}>width:100</ItemView>
                </View>
            </View>

                        <View style={css.box}>
                <View style={css.boxstyle}>
                    <Text style={css.p}> alignItems: center </Text>
                    <Text style={css.p}> flexDirection: 'row'</Text>
                    <Text style={css.p}> height: 120</Text>
                </View>
                <View style={[css.demo_border,{alignItems:'center',height: 120}]}>
                    <ItemView style={[ css.item1, {width:100}]}>width:100</ItemView>
                    <ItemView style={[ css.item2, {width:100}]}>width:100</ItemView>
                </View>
            </View>

                        <View style={css.box}>
                <View style={css.boxstyle}>
                    <Text style={css.p}> alignItems: stretch </Text>
                    <Text style={css.p}> flexDirection: 'row'</Text>
                    <Text style={css.p}> height: 120</Text>
                </View>
                <View style={[css.demo_border,{alignItems:'stretch',height: 120}]}>
                    <ItemView style={[ css.item1, {width:100,height:100}]}>height:100</ItemView>
                    <ItemView style={[ css.item2, {width:100,minHeight:20}]}>minHeight:20</ItemView>
                    <ItemView style={[ css.item3, {width:100,maxHeight:60}]}>maxHeight:60</ItemView>
                </View>
            </View>

        </View>


      </ScrollView>
    );
  }
});

var css = StyleSheet.create({
	contain: {
		color : 'green', //不会被任何Text继承得到
        height: 590   //scrollView必须要加height才行
	},
	header:{
		backgroundColor: '#fff',
	},
	h3: {
		color: '#6D7273',
		fontSize: 18,
		paddingLeft: 10,   // no text-indent
		paddingVertical: 10,
	},
	p:{
		color: '#666',
		marginBottom: 5,
	},
	boxes:{
		paddingHorizontal: 10,
		paddingBottom:10,
		overflow: 'hidden',
	},
	box: {
		flex:1,
		paddingVertical: 5,
		shadowColor: '#E0E0E0',
		shadowOffset: {h:5,w:5},
	},
	boxstyle: {
		paddingVertical: 8,
	},
	demo: {
		flexDirection: 'row'
	},
    demo_border:{
        borderColor : '#ddd',
        borderWidth: .5,
        borderRadius: 5,
        flexDirection: 'row'
    },
	item:{
		height:40,
		justifyContent: 'center',
	},
	itemtext:{
		color: '#fff',
		alignSelf: 'center',
	},

	item1: {
		backgroundColor: '#E46C49'
	},
	item2: {
		backgroundColor: '#37B0D3'
	},
	item3: {
		backgroundColor: '#68B33D'
	},
    item4: {
        backgroundColor: '#CFC731'
    },
    item5: {
        backgroundColor: '#8370F4'
    }

});

module.exports = Demo1View;
