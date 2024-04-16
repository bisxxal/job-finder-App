import React from 'react'
import {TouchableOpacity,Image, View, Text } from 'react-native'

import styles from './screenheader.style'

const ScreenHeaderBtn = ({iconUrl , dimension, handelPress}) => {
  return (
   <TouchableOpacity style={styles.btnContainer} onPress={handelPress}>
    
<Image source={iconUrl} resizeMode='cover' className="h-6" style={styles.btnImg(dimension)} /> 
   </TouchableOpacity>
  )
}

export default ScreenHeaderBtn