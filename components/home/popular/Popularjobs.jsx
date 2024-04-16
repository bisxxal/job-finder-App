import React, { useState } from 'react'
import { View, Text,TouchableOpacity,FlatList,ActivityIndicator} from 'react-native'
import { useRouter } from 'expo-router'
import styles from './popularjobs.style'
import  PopularJobCard  from '../../common/cards/popular/PopularJobCard'
import { COLORS, SIZES } from '../../../constants'
import useFeatch from '../../../hook/useFeatch'
const Popularjobs = () => {
  const router = useRouter()
  const  {data , isLoading , error ,refetch } = useFeatch('search',{query:'react devloper',num_pages:1});
  // console.log(data)
  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerTitle}>Popularjobs</Text>
      <TouchableOpacity> 
        <Text style={styles.headerBtn}>show all</Text>
        </TouchableOpacity>
    </View>

    <View style={styles.cardsContainer}>
      {isLoading ?
    (<ActivityIndicator size={"large"} color={COLORS.primary}/>  ): error?(<Text>something went wrong</Text>):(<FlatList
    data={data}
    renderItem={({item})=>(
          <PopularJobCard item={item}
          
          selectedJob={selectedJob}
                handleCardPress={handleCardPress}
          />
    )}
    keyExtractor={item => item?.job_id}
    contentContainerStyle={{columnGap:SIZES.medium}}
    horizontal 
    />)
    }
    </View>
    </View>
  )
}

export default Popularjobs