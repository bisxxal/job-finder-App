import React, { useState } from 'react'
import { View, Text,TouchableOpacity,ActivityIndicator} from 'react-native'
import { useRouter } from 'expo-router'
import styles from './nearbyjobs.style'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import { COLORS, SIZES } from '../../../constants'
import useFeatch from '../../../hook/useFeatch'
const Nearbyjobs = () => {
  const router = useRouter()
  const  {data , isLoading , error   } = useFeatch('search',{query:'react devloper',num_pages:1});
  // console.log(job.job_id)
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <Text style={styles.headerTitle}>Nearbyjobs</Text>
      <TouchableOpacity> 
        <Text style={styles.headerBtn}>show all</Text>
        </TouchableOpacity>
    </View>

    <View style={styles.cardsContainer}>
      {isLoading ?
    (<ActivityIndicator size={"large"} color={COLORS.primary}/>  ): error?(<Text>something went wrong</Text>):(data ?.map((job)=>(
    
    <NearbyJobCard 
    job={job}
    key={`nearby-job-${job.job_id}`}
    handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
    />)) )
    }
    </View>
    </View>
  )
}

export default Nearbyjobs