import { StatusBar } from 'expo-status-bar';
import { Text, View,ScrollView,SafeAreaView } from 'react-native';
import { Link ,Stack,useRouter } from 'expo-router';
import { useState } from 'react';
import { COLORS ,icons , images,SIZES } from '../constants';
import {Nearbyjobs , Popularjobs , ScreenHeaderBtn , Welcome, welcome} from '../components'
export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter()
  return (
 
    <SafeAreaView className=" bg-green-300" style={{flex:1,backgroundColor:COLORS.lightWhite}}>
    
    <Stack.Screen options={{headerStyle:{backgroundColor:COLORS
    .lightWhite},
    headerLeft:()=>(
      <ScreenHeaderBtn iconUrl={icons.menu} dimension="60%" />
    ),
    headerRight:()=>(
      <ScreenHeaderBtn iconUrl={images.profile} dimension="100%" />
    ),
    headerTitle:""
    }} />

    <ScrollView showsVerticalScrollIndicator={false} >
    <View  style={{
            flex: 1,
            padding: SIZES.medium,
          }}>
            
      <Welcome
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      handleClick={() => {
        if (searchTerm) {
          router.push(`/search/${searchTerm}`)
        }
      }}
      />
      <Popularjobs/>
      <Nearbyjobs/>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}
 