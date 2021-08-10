import React, {Component} from 'react'
import {Platform, ScrollView, Text, TouchableOpacity, View, PermissionsAndroid} from 'react-native'
// Import the RtcEngine class and view rendering components into your project.
import RtcEngine, {RtcLocalView, RtcRemoteView, VideoRenderMode} from 'react-native-agora'
// Import the UI styles.
import styles from './components/Style'


const requestCameraAndAudioPermission = async () =>{
  try {
      const granted = await PermissionsAndroid.requestMultiple([
          PermissionsAndroid.PERMISSIONS.CAMERA,
          PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
      ])
      if (
          granted['android.permission.RECORD_AUDIO'] === PermissionsAndroid.RESULTS.GRANTED
          && granted['android.permission.CAMERA'] === PermissionsAndroid.RESULTS.GRANTED
      ) {
          console.log('You can use the cameras & mic')
      } else {
          console.log('Permission denied')
      }
  } catch (err) {
      console.warn(err)
  }
}