import { Text,View,StyleSheet,Dimensions,Image, Pressable} from "react-native"
import { useRef } from "react"
import Data from './data'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import SwiperFlatList from "react-native-swiper-flatlist"

import { RootStackParamList } from "../../App";
import { RootState } from "../app/types";
import { useSelector } from "react-redux";
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height



type OnboardingScreenProps = NativeStackScreenProps<RootStackParamList, 'Onboarding'>;

  const OnboardingScreen:React.FC<OnboardingScreenProps> = ({navigation})=>{


    const swiper = useRef(null);

    interface ColoredTextProps {
        text: string;
        targetWord: string;
        color: string;
    }
    const {userdata}  = useSelector((state:RootState)=>state.userdata)

    const handleNavigation = ()=>{
        if(userdata){
            navigation.navigate('Dashboard')
        }
        else{
            navigation.navigate('SignIn')
        }
        
    }
    

    return (
        <View style={styles.container}>
         <View>
            <SwiperFlatList
                style={{marginBottom:10,backgroundColor:'#fff'}}
                autoplay={false}
                autoplayDelay={2}
                autoplayLoop
                index={0}
                ref={swiper}
                showPagination
                data={Data}
                paginationActiveColor="#4d861f"
                paginationStyle={{alignSelf:'center',marginBottom:height/7,marginLeft:0}}
                paginationStyleItemActive={{width:30,height:10,backgroundColor:'#4d861f'}}
            renderItem={({ item }) => (
                <View key={item.id} style={{flex:1,height:height,position:"relative"}}>
                    <Image source={item.img} alt="Image" style={{width:width,height:height/1.7}}/>
                   
                    <View style={{width:width,height:"auto",display:'flex',justifyContent:'center', alignItems:'center',padding:10}}>
                        
                        <View style={{width:'100%',display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                            <Text style={{fontSize:25,fontFamily:'poppins',fontWeight:"bold"}}>{item.textContent}</Text>
                            <Text style={{fontSize:25,fontFamily:'poppins',fontWeight:'bold'}}>{item.textContent2}</Text>
                        </View>
                        <View style={{marginBottom:0,marginTop:10,width:'90%',flexDirection:"row",display:'flex',justifyContent:"center",alignItems:'center',padding:4}}>
                            <Text style={{textAlign:"center",alignSelf:"center",fontSize:15,fontFamily:'poppins'}}>{item.textSubContent}</Text>
                        </View>
                    </View>
                    
                </View>
            )}
            />

            </View>

            <View style={styles.skipContainer}>
                <Pressable onPress={()=>handleNavigation()} style={[styles.btn,styles.secondaryBg]}><Text style={styles.textWhite}>Skip</Text></Pressable>
                <Pressable onPress={()=>handleNavigation()} style={[styles.btn,styles.bgWhite,styles.borderPrimary]}><Text style={[styles.textPrimary]}>Continue</Text></Pressable>

            </View>

        </View>
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    swiperDiv:{
        flex:1,
        marginBottom:100,
        backgroundColor:'#222'
    },
    skipContainer:{
        width:'100%',
        position:'absolute',
        padding:20,
        bottom:0,
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between'
    },
    textWhite:{
        color:'#fff',
        fontFamily:'poppins',
        fontSize:16
    },
    textPrimary:{
        color:'#4d861f',
        fontFamily:'poppins',
        fontSize:16
    },
    primaryText:{color:'#4d861f'},
    bgWhite:{backgroundColor:"#fff"},
    primaryBg:{
        backgroundColor:'#4d861f'
    },
    secondaryBg:{
         backgroundColor:'#003300'
    },
    btn:{
        width:width/2.4,
        height:height/13,
        borderRadius:40,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        
    },
    borderPrimary:{
        borderColor:"#4d861f",
        borderWidth:2,
        borderRadius:40,
    }
    

})