
import { Animated } from 'react-native'
import {View,StatusBar,StyleSheet,ViewStyle} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

interface IndexProps {
    width: any;
    height: any;
    style?: ViewStyle; // Optional prop for additional styles
}
const Index:React.FC<IndexProps> =({width,height,style})=>{
    return <View style={StyleSheet.flatten([{width:width, height:height,backgroundColor:'rgba(0,0,0,0.12)'},style])}>
                    <Animated.View style={{width:'100%', height:'100%'}}>
                        <LinearGradient start={{x:1,y:1}} style={{width:'100%',height:'100%'}} colors={['transparent','rgba(0,0,0,0.05)','transparent']}/>

                    </Animated.View>
                    
                    
            </View>

}

export default Index