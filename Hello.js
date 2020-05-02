import React from 'react';
import { Component, View, Button, Alert , TextInput, Text, Stylesheet ,WebView} from 'react-native';
import { connect } from 'react-redux';
import {mapStateToProps, mapDispatchToProps} from './action.js';

var DomParser = require('react-native-html-parser').DOMParser;

/*
var document = new DomParser().parseFromString(fetch("https://qiita.com/"),'text/html');
var content = document.getElementsByClassName("tl-UserInfo_screenname")[0];
*/

function componentDidMount(a) {
/*
        let html = `<html>
                      <head></head>
                      <body>
                        <div id="ba">
                          <a href="example.org"></a>
                          <div class="inA">
                            <br>bbbb
                          </div>
                        </div>
                        <div class="bba">
                          Sakita
                        </div>
                    </body>
                  </html>`
*/
        fetch("https://928306ea.ngrok.io/test.html").then((response)=>{
            console.log("1");
            const html = response.text();
            
            var result = "";
            
            html.then((data) => {
              result = data;
              console.log(result);
              
              var tmp = new DomParser().parseFromString(result,'text/html');
              var name = tmp.getElementsByClassName("bba")[0].firstChild.data;
              console.log(name);
              
              a.props.updateContent(name);
            });
            
//            var tmp = new DomParser().parseFromString(html,'text/html');
//            content = tmp.getElementsByClassName("bba");
//            content = "second";
            
          
          }
        )
/*
        var tmp = new DomParser().parseFromString(fetch("http://httpbin.org"),'text/html');
        content = tmp.getElementsByClassName("base-url");
*/
        console.log("-start----------------------------------");
//        console.log(content.getElementByClassName('bba').firstChild.data);
//        console.log(content);
        console.log("-end----------------------------------");
        


    }
    


class Hello extends React.Component {
  render() {
    componentDidMount(this);
    return (
      <View>
        <TextInput
          style={{height: 40, width:300, borderColor: 'gray', borderWidth: 1}}
          onChangeText={ (text) => this.props.updateHello(text) }
          value={ this.props.hello } />

          <Button title={ this.props.hello }
                onPress={ this._handlePress.bind(this) } />
                
        <TextInput
          style={{height: 40, width:300, borderColor: 'gray', borderWidth: 1}}
          onChangeText={ (text) => this.props.updateHello2(text) }
          value={ this.props.hello2 } />
                
          <Button title={ this.props.hello2 }
                onPress={ this._handlePress2.bind(this) } />
                
        <Text>{ this.props.content }</Text>


      </View>
    );
  }


  /* ボタンをクリックされたら現在の state.helloの内容をアラートする。 */
  _handlePress(e) {
    Alert.alert(this.props.hello);
  }
  
  _handlePress2(e) {
    Alert.alert(this.props.hello2);
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Hello);