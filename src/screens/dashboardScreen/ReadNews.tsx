import { useEffect, useMemo, useState } from "react"
import { View,Text, Modal, Button,Dimensions,Image } from "react-native"
import { useSelector } from "react-redux";
import { RootState } from "../../app/types";
import { NewsDataData } from "../../app/types";
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
interface IndexProps {
    title: any; // You may want to replace 'any' with a more specific type if known
    setOpen: (open: boolean) => void; // Function to set the open state
    open: boolean; // Boolean state for open/close
  }
const Index:React.FC<IndexProps> = ({title,setOpen,open})=>{
    
    
  
    const {news}  = useSelector((state:RootState)=>state.news)

    const result = useMemo<NewsDataData[]>(() => {
        return news?.filter((d) => d.title === title) || []; // Return an empty array if news is undefined
    }, [news, title]);

    const closeModal = ()=>{
        console.log('closed')
        setOpen(false)
    }

    return (
        <Modal animationType="slide"
        transparent={false}
        visible={open}
        onRequestClose={closeModal} >
            <View style={{flex:1}}>{result.map((d,index)=>{
                return <View key={index} style={{flex:1,padding:10,position:'relative'}}>
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
                            <Text style={{fontWeight:'semibold',fontSize:16}}>{d.content}</Text>
                            <View style={{position:"absolute",bottom:10,width:'100%',display:"flex",alignItems:"center",justifyContent:"center"}}>
                                    <Button title="Close Modal" onPress={()=>setOpen(false)}/>
                            </View>
                       </View>
            })}</View>
        </Modal>
    )
}

export default Index