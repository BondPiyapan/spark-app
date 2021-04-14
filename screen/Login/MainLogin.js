import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  AsyncStorage,
  TextInput,
  SafeAreaView,
} from 'react-native';

const { height, width } = Dimensions.get('window')
import Images from 'react-native-scalable-image';
import PhoneInput from "react-native-phone-number-input";
import Constants from 'expo-constants'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
let appjson = require('../../app.json');

export default class MainLogin extends React.Component {
  static navigationOptions = {
    headerShown: false,
  };

  constructor() {
    super()
    this.state = {
      hasName: null,
      loading: true,
      loader: true,
      device_token: '',
      isTablet: false,
      typeLogin: 'mobile',
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <View style={{ justifyContent: 'center', flex: 0.33, alignItems: 'center' }}>
          <Images
            width={width}
            source={require('../../assets/images/iconapp.jpg')}
          />
        </View>
        <View style={{ flex: 0.33, alignItems: 'center', marginTop: 30 }}>
          {this.state.typeLogin == 'username' ?
            <View>
              <View style={{ width: width * .8 }}>
                <TextInput
                  onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
                  placeholder={'Email'}
                  style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.4%') }}
                  underlineColorAndroid={'transparent'}
                  numberOfLines={1}
                  returnKeyType={"done"}
                  clearButtonMode="always" />
                <View style={{ height: 1, backgroundColor: '#CED7DE' }} />
              </View>
              <View style={{ width: width * .8, marginVertical: hp('2.4%') }}>
                <TextInput
                  secureTextEntry={true}
                  onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
                  placeholder={'Password'}
                  style={{ fontFamily: 'sukhumvit-set', fontSize: hp('2.4%') }}
                  underlineColorAndroid={'transparent'}
                  numberOfLines={1}
                  returnKeyType={"done"}
                  clearButtonMode="always" />
                <View style={{ height: 1, backgroundColor: '#CED7DE' }} />
              </View>
              <TouchableOpacity style={{ alignSelf: 'flex-end' }}>
                <Text style={styles.buttonText1}>ลืมรหัสผ่าน</Text>
              </TouchableOpacity>
            </View>
            :
            <View>
              <PhoneInput
                defaultValue={''}
                defaultCode="TH"
                withDarkTheme
                onChangeFormattedText={(code) => {
                  console.log(`Code is ${code}, you are good to go!`)
                }}
              />
            </View>
          }

        </View>
        <View style={{alignItems:'center', marginTop: -200}}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('VerifyOTP')}
            style={[styles.button, styles.buttonMobile]}>
            <Text style={styles.buttonText}>ต่อไป</Text>
          </TouchableOpacity>

          {/* {this.state.typeLogin == 'username' ?
          <View style={{flexDirection:'row'}}>
          <TouchableOpacity onPress={()=> this.props.navigation.navigate('RegisterScreen')}
              style={{ alignSelf: 'flex-start', marginHorizontal: 45, marginVertical: 20 }}>
              <Text style={styles.buttonText1}>สมัครสมาชิก</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.setState({
              typeLogin: 'mobile'
            })}
              style={{ alignSelf: 'flex-end', marginHorizontal: 45, marginVertical: 20 }}>
              <Text style={styles.buttonText1}>เข้าสู่ระบบผ่านเบอร์โทรศัพท์</Text>
            </TouchableOpacity>
            </View>
            :
            <TouchableOpacity onPress={() => this.setState({
              typeLogin: 'username'
            })}
              style={{ alignSelf: 'flex-end', marginHorizontal: 45, marginVertical: 20 }}>
              <Text style={styles.buttonText1}>เข้าสู่ระบบผ่าน Username / Password</Text>
            </TouchableOpacity>
          } */}
          </View>
        {/* <View style={{ justifyContent: 'center', flex: 0.33, alignItems: 'center' }}>
        <Text style={styles.buttonText1}>เข้าสู่ระบบผ่าน Username / Password</Text>
        </View> */}
        <View style={{ alignItems: 'center', position:'absolute', bottom: 40, right:0, left: 0}}>
            <Text style={{
              fontSize: hp('2%'),
              color: '#000',
              fontFamily: 'sukhumvit-set',
            }}>Version {appjson.expo.version}</Text>
          </View>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  wrapper: {
    flex: 0.33,
    alignItems: 'center',
  },
  button: {
    height: hp('6%'),
    width: width * .8,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonMobile: {
    backgroundColor: '#3d5afe',
  },
  message: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 20,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  buttonTextBlack: {
    fontSize: hp('2.6%'),
    color: '#000',
    fontFamily: 'sukhumvit-set-bold',
  },
  buttonTextBlack2: {
    fontSize: hp('2%'),
    color: '#000',
    fontFamily: 'sukhumvit-set',
  },
  buttonText: {
    fontSize: hp('2.5%'),
    color: '#fff',
    fontFamily: 'sukhumvit-set',
  },
  buttonText1: {
    fontSize: hp('1.8%'),
    color: '#999',
    fontFamily: 'sukhumvit-set',
  },
});
