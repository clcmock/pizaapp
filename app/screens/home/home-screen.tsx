import React, { FC, useEffect, useState } from "react"
import { View, ViewStyle, TouchableOpacity } from "react-native"
import { StackScreenProps } from "@react-navigation/stack"
import { observer } from "mobx-react-lite"
import {
  Screen,
  Text,
  GradientBackground,
  AutoImage as Image,
} from "../../components"
import { color } from "../../theme"
import { NavigatorParamList } from "../../navigators"
import * as styles from './styles'
import { TextInput } from "react-native-gesture-handler"
import PopupAPI from "../../services/popup"


const vtimes = require('./img/vtimes.png')
const vtimes2 = require('./img/vtimes2.png')
const cirleIcon = require('./img/check-cirle.png')
const errorIcon = require('./img/check-error.png')


const FULL: ViewStyle = { flex: 1 }
const CONTAINER: ViewStyle = {
  backgroundColor: color.transparent,
}


export const HomeScreen: FC<StackScreenProps<NavigatorParamList, "home">> = observer(
  ({ navigation }) => {

    const [ password, setPassword ] = useState('')
    const [ repeatPassword, setRepeatPassword ] = useState('')
    const [ valid, setValid ] = useState(false)

    useEffect(() => {
      if (password.trim().length > 4 && repeatPassword.trim().length > 4 && (password.trim() === repeatPassword.trim())) {
        setValid(true)
      }
    }, [password, repeatPassword])

    return (
      <View testID="HomeScreen" style={FULL}>
        <GradientBackground colors={["#ffffff", "#ffffff"]} />
        <Screen style={CONTAINER} preset="scroll" backgroundColor={color.transparent}>
          <View style={styles.HEADERN}>
            <View style={styles.LANGUAGEBOX}>
              <Text style={styles.LANGUAGE}>English</Text>
            </View>
          </View>
          <View style={styles.MAINBOX}>
            <Image source={vtimes} style={styles.vtimes} />
            <Image source={vtimes2} style={styles.vtimes2} />
            <View style={styles.inputWrap}>
              <TextInput
                textContentType="password"
                secureTextEntry={true}
                placeholder="Password"
                defaultValue={password}
                onChangeText={password => setPassword(password)}
              />
            </View>
            {
              password.length > 0 && <View style={styles.warningBox}>
              <View style={styles.warningItem}>
                <Image source={password.length < 8 ? errorIcon : cirleIcon} style={{width: 12, height: 12, marginRight: 4}} />
                <Text style={ password.length < 8 ? styles.warningText : styles.warningText2}>Contains at least eight characters</Text>
              </View>
            </View>
            }
            
            <View style={styles.inputWrap2}>
              <TextInput
                textContentType="password"
                secureTextEntry={true}
                placeholder="Repeat password"
                defaultValue={repeatPassword}
                onChangeText={password => setRepeatPassword(password)}
              />
            </View>
            {
              repeatPassword.length > 0 && <View style={styles.warningBox}>
              <View style={styles.warningItem}>
                <Image source={!valid ? errorIcon : cirleIcon} style={{width: 12, height: 12, marginRight: 4}} />
                <Text style={!valid ? styles.warningText : styles.warningText2}>The two passwords you entered did not match</Text>
              </View>
            </View>
            }
            
            <TouchableOpacity
              style={ valid ? styles.button : styles.buttonIvalid}
              activeOpacity={0.6}
              onPress={() => {
                PopupAPI.setPassword(1111)
              }}
            >
              <Text style={{color: valid ? '#ffffff' : '#1b1c2c'}}>Continue</Text>
            </TouchableOpacity>
            <View style={{marginTop: 28}}>
              <Text style={{color: '#aaaaaa', fontSize: 14, textAlign: 'center'}}>Remember the password, you can't retrieve it if you forget it.</Text>
            </View>
          </View>
        </Screen>

      </View>
    )
  },
)
