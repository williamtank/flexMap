'use strict';

var React = require('react-native'),
    DemoView = require('./app/demo1'),
    TestView = require('./app/test');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ScrollView
} = React;

var flexStyle = React.createClass({
  render: function() {
    return (
      <View style={styles.body}>
        <Text style={styles.top_title}>
          React-Native的Flex弹性盒子模型</Text>
        <DemoView />
      </View>
    );
  }
});

var styles = StyleSheet.create({
  body:{
    backgroundColor: '#F9F9F9',
    fontSize: 16,
    fontFamily: 'Helvetica Neue',
  },
  top_title: {
    color: '#0BF',
    marginTop : 30,
    marginBottom: 20,
    paddingHorizontal: 20,
    fontFamily: 'Helvetica Bold',//'Helvetica',//'Helvetica Neue', //'Cochin',
    fontSize: 20
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('flexStyle', () => flexStyle);
