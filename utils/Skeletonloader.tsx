import Skeleton from './lazyloader'
import { View,Dimensions} from "react-native";
import { ScrollView } from 'react-native';
const height = Dimensions.get('window').height
const Index =()=>{
    return  <ScrollView  style={{width:'100%',height:height}} showsVerticalScrollIndicator={false}>

                <View style={{width:'100%',flex:1,marginTop:20,padding:5}}>
                                <View style={{width:'100%'}}>
                                    <View style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",width:'100%'}}>
                                        <Skeleton width={100} height={40} style={{borderRadius:20}}/>
                                        <Skeleton width={100} height={40} style={{borderRadius:20}}/>
                                        <Skeleton width={100} height={40} style={{borderRadius:20}}/>
                                    </View>
                                    <View style={{width:'100%',display:"flex",flexDirection:"row",marginTop:30}}>
                                        <Skeleton width={'30%'} height={250} style={{marginRight:10,marginLeft:5,borderRadius:5}} />
                                        <Skeleton width={'30%'} height={270} style={{marginRight:10,borderRadius:5}} />
                                        <Skeleton width={'30%'} height={250} style={{marginRight:10,borderRadius:5}} />
                                    </View>
                                    <View style={{width:'100%',display:"flex",flexDirection:"column",marginTop:30}}>
                                        <Skeleton width={'80%'} height={20} style={{marginRight:10,borderRadius:5,marginBottom:10}} />
                                        <Skeleton width={'70%'} height={20} style={{marginRight:10,borderRadius:5,marginBottom:10}} />
                                        <Skeleton width={'77%'} height={20} style={{marginRight:10,borderRadius:5,marginBottom:10}} />
                                    </View> 
                                    <View style={{width:'100%',marginTop:50}}>
                                        <Skeleton width={'100%'} height={50} style={{marginRight:10,borderRadius:20}} />
                            </View>
                                </View>
                                
                            </View>
                            
                    </ScrollView>
}

export default Index