import React, { useState } from 'react'
import { View, Text,TextInput,TouchableOpacity,Image,FlatList } from 'react-native'
 
import styles from './welcome.style'
import { icons,SIZES } from '../../../constants'
import { useRouter } from "expo-router";


const jobTypes = ["Full-time", "Part-time", "Contractor"];
const Welcome =  ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter()
  const [activeJobType, setactiveJobType] = useState('Full-time')
  // console.log(searchTerm);
  return (
    <View  >
       <View   className="w-full ">

      <Text style={styles.userName}> hello bishal</Text>
      <Text style={styles.welcomeMessage}> find your perfect job</Text>
    </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput}
          value={searchTerm}
          className=" text-base"
          onChangeText={(text)=>setSearchTerm(text)}
          placeholder='what are you looking for'
          />
        </View>

        <TouchableOpacity style={styles.searchBtn}  onPress={handleClick}>
          <Image source={icons.search}
          resizeMode='contain'
          style={styles.searchBtnImage}
          />
        </TouchableOpacity>
  </View>
        <View style={styles.tabsContainer}>
         <FlatList 
         data={jobTypes}
         renderItem={({item})=>(
          <TouchableOpacity style={styles.tab(activeJobType,item)}
          onPress={()=>{setactiveJobType(item);
          router.push(`/search/${item}`)
          }}
          >
          <Text style={styles.tabText(activeJobType,item)} >{item}</Text>
        </TouchableOpacity>
         )}
         keyExtractor={(item)=>item}
         contentContainerStyle = {{columnGap:SIZES.small}}
         horizontal
         /> 
         </View>
    
    </View>
  )
}

export default Welcome