import { View ,Text,StyleSheet,Dimensions,StatusBar, Image, Pressable, ActivityIndicator,FlatList} from "react-native"
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
import Logo from '../../assets/images/fpnews-logo.png'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { ScrollView } from "react-native";
import { useFocusEffect } from '@react-navigation/native';
import { useSelector,useDispatch } from "react-redux";
import { useEffect, useState,useCallback } from "react";
import SkeletonLoader from '../../../utils/Skeletonloader'
import axios from "axios";
import { RootState } from "../../app/types";
import { setNewsData } from "../../app/news";
import moment from "moment";
import ReadNews from './ReadNews'
const Index = ()=>{
    const [active,setActive] = useState('All')
    const[open,setOpen] = useState(false)
    const[title,setTitle] = useState('')
    const[loading,isLoading] = useState(false)
    const {news}  = useSelector((state:RootState)=>state.news)
    const dispatch = useDispatch();
    // console.log(news)
    useFocusEffect(
        useCallback(() => {
            StatusBar.setBarStyle('dark-content');
            //getData();
           
            // console.log('Firedddd')

            // Optional: return a cleanup function if needed
            return () => {
                // Any cleanup actions if necessary
            };
        }, [])
    );

    const getData = ()=>{
        isLoading(true)
        axios.get('https://newsapi.org/v2/everything?q=keyword&apiKey=e0922de291d54e6dab35df0c06851551')
        .then(response => {
          console.log(response.data?.articles);
          dispatch(setNewsData(response.data?.articles))
          isLoading(false)
          // Access data here
        })
        .catch(error => {
            isLoading(false)
          console.error('Error fetching data:', error);
        });
    }

    const daysCalculator = (targetDate:any)=>{
        let date = moment(targetDate);
        let now = moment();
        const differenceInDays = now.diff(date, 'days');
        return differenceInDays;
    }
    const handleOpen = (title:any)=>{
        setTitle(title)
        setOpen(true)
    }
    return (
        <View style={styles.container}>
            {open && <ReadNews open={open} setOpen={setOpen} title={title}/>}
            <StatusBar backgroundColor="#fff" barStyle="dark-content" />
            <View style={{backgroundColor:"#fff",padding:12,width:'100%',display:"flex",justifyContent:"center",flexDirection:"row",alignItems:"center"}}>
                <View style={{flex:1,display:"flex",flexDirection:"row",alignItems:"center"}}>
                    <Image source={Logo} resizeMode="contain"  style={{width:20,height:20}}/>
                    <Text style={{fontFamily:'poppins',fontWeight:"bold",fontSize:18,marginLeft:3}}>FPNews</Text>
                </View>
                <View>
                    <FontAwesome5 name="bell" size={25}/>
                </View>
            </View>
            <View style={{padding:10,backgroundColor:"#dedede"}}>
                <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center", width:'100%'}}>
                    <View>
                        <Text style={{fontFamily:"poppins",fontSize:18,fontWeight:"bold"}}>Trending News</Text>
                    </View>
                    <View>
                        <Text style={{fontFamily:"poppins",fontSize:16,fontWeight:"semibold"}}>View All</Text>
                    </View>
                   
                </View>
                <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={{ marginTop: 5 }}
                contentContainerStyle={{ paddingHorizontal: 0, alignItems: 'center',height:height/12,width:width}}
                >
                    
                    <Pressable onPress={()=>setActive('All')} style={[styles.default,styles.borderPrimary,active == 'All'&& styles.active]}>
                    <Text style={{color:active == "All"? '#fff' :'#000'}}>All</Text>
                    </Pressable>

                    <Pressable onPress={()=>setActive('Politics')} style={[styles.default,styles.borderPrimary,active == 'Politics'&& styles.active]}>
                    <Text style={{color:active == "Politics"? '#fff' :'#000'}}>Politics</Text>
                    </Pressable>
                    <Pressable onPress={()=>setActive('Technology')} style={[styles.default,styles.borderPrimary,active == 'Technology'&& styles.active]}>
                        <Text style={{color:active == "Technology"? '#fff' :'#000'}}>Technology</Text>
                    </Pressable>
                    <Pressable onPress={()=>setActive('Business')} style={[styles.default,styles.borderPrimary,active == 'Business'&& styles.active]}>
                    <Text style={{color:active == "Business"? '#fff' :'#000'}}>Business</Text>
                    </Pressable>
                    
                    
                   
                </ScrollView>
            </View>

            <ScrollView contentContainerStyle={{backgroundColor:"#dedede", paddingHorizontal: 0}}>

                <ScrollView
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    style={{ marginTop: 0 }}
                    contentContainerStyle={{backgroundColor:"#e5e5e5", paddingHorizontal: 10}}
                    >
                    {loading && !news && <ActivityIndicator size={"large"} color={"#4d861f"}/>}
            

                        {news?.length > 0 && news.map((d,index)=>{
                            if(index <= 3){
                                return <Pressable onPress={()=>handleOpen(d.title)} key={index} style={{margin:7,backgroundColor:"#fff",width:width-50, height:height/2,padding:0,borderRadius:20}}>
                                {/* <Image source={{ uri: `${d.urlToImage}` }}/> */}
                                {d.urlToImage ? 
                                <Image 
                                source={{ uri: `${d.urlToImage}` }} 
                                resizeMode="contain"
                                style={{width:'100%',height:height/3,borderRadius:0}}
                                // Adjusted for proper usage
                                />
                                
                                :
                                <Image 
                                source={{ uri: `https://www.searchenginejournal.com/wp-content/uploads/2024/10/shutterstock_2430356195-924.png` }} 
                                resizeMode="contain"
                                style={{width:'100%',height:height/3,borderRadius:20}}
                                // Adjusted for proper usage
                                />
                                
                                }
                                <View style={{padding:10}}>
                                    <Text style={{fontSize:18,fontWeight:"bold",fontFamily:"poppins"}}>{d.title}</Text>
                                </View>

                                <View style={{padding:10,display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                                    <View><Text style={{color:"#ccc"}}>{daysCalculator(d.publishedAt)} days ago</Text></View>
                                    <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}><FontAwesome5 name="eye" style={{color:"#ccc"}}/><Text style={{color:"#ccc"}} >123.k</Text></View>
                                    <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}><FontAwesome5 name="comment" color={"#ccc"}/><Text style={{color:"#ccc",marginLeft:2}}>607</Text></View>
                                </View>
                                
                                
                            </Pressable>
                            }
                            
                        })}

                </ScrollView>
                    <View style={{marginLeft:20,marginTop:20,marginBottom:10}}>
                        <Text style={{fontSize:22,fontWeight:"bold",color:"#222"}}>Global Stories</Text>
                    </View>
                <FlatList
                    data={news}
                    style={{padding:0}}
                    renderItem={({ item,index }) => (
                    <Pressable onPress={()=>handleOpen(item.title)} key={index} style={{margin:10,paddingLeft:0,paddingRight:5,paddingBottom:0,borderRadius:20,display:'flex',justifyContent:"flex-start",flexDirection:"row",alignItems:"center",marginBottom:10,backgroundColor:"#fff"}}>
                        {item?.urlToImage ? <Image source={{uri:`${item?.urlToImage}`}} style={{width:50,height:"100%",borderRadius:10}}/> :
                        <Image source={{uri:`https://www.searchenginejournal.com/wp-content/uploads/2024/10/shutterstock_2430356195-924.png`}} style={{width:50,height:50,borderRadius:10}}/>
                        }
                        <View style={{width:'85%',paddingBottom:5,paddingTop:5}}>
                            <Text style={{fontSize:14,marginLeft:10,fontWeight:"bold"}}>{item?.title}</Text>
                        </View>
                        
                    </Pressable>
                    )}
                    
                    nestedScrollEnabled // This enables nested scrolling
                />
            </ScrollView>
           

        </View>
    )
}
export default Index
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:0,
        backgroundColor:"#fff"
    },
    default:{
        flex:1,
        width:"auto",
        height:"auto",
        borderRadius:15,
        justifyContent:"center",
        alignItems:"center",
        display:"flex",
        padding:10,
        margin:2
    },
    borderPrimary:{
        borderColor:"#4d861f",
        borderWidth:1,
        borderRadius:15,
        backgroundColor:"#fff"
    },
    active:{
        backgroundColor:"#4d861f",
    }
})