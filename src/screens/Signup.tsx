import {View,Text,StyleSheet, Image,Dimensions,TextInput, Pressable} from 'react-native'
import Logo from '../assets/images/fpnews-logo.png'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useState } from 'react';
import { RootStackParamList } from '../../App';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height

type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;
const Index:React.FC<SignUpScreenProps> = ({navigation})=>{
    const [email, setEmail] = useState('');
    const[fullname, setFullname] = useState('');
    const [phonenumber, setPhonenumber] = useState('');
  
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            
            <View  style={styles.logoArea}>
                <Image source={Logo} resizeMode="contain"  style={{width:100,height:100}}  />
                <Text style={{fontSize:20,marginTop:10,fontWeight:'bold'}}>FPNews</Text>    
                <Text style={{fontSize:16,marginTop:10,fontFamily:'poppins'}}>Welcome!, lets create an account for you.</Text>
            </View>
            <View style={{width:width-50,marginTop:40}}>
            <TextInput
                style={styles.input}
                placeholder="Fullname"
                placeholderTextColor="#aaa"
                value={fullname}
                onChangeText={setFullname}
            />
            <TextInput
                style={styles.input}
                placeholder="Phonenumber"
                placeholderTextColor="#aaa"
                value={phonenumber}
                onChangeText={setPhonenumber}
            />
            
            <TextInput
                style={styles.input}
                placeholder="Email Address"
                placeholderTextColor="#aaa"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                placeholderTextColor="#aaa"
                value={password}
                onChangeText={setPassword}
            />

            <View style={[styles.googleButton2,styles.borderPrimary]}>
                
                <Text style={{fontSize:16,color:'#fff'}}>Sign Up</Text>
            </View>
            </View>
            <View style={{display:"flex",flexDirection:"row",width:'100%',justifyContent:"center",alignItems:"center",marginBottom:20}}>
                <View style={styles.line}></View>
                    <View><Text style={{fontSize:18}}>or</Text></View>
                <View style={styles.line}></View>
            </View>
            <View style={[styles.googleButton,styles.borderPrimary]}>
                <FontAwesome5 name="rocket" size={30} color="#900" />
                <Text style={{fontSize:16}}>Signup with Google</Text>
            </View>
            <Pressable onPress={()=>navigation.navigate('SignIn')} style={{width:'100%',display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:10}}>
                <Text style={{fontWeight:'bold',fontSize:16}}>Already have an account?</Text>
                <Text style={{fontWeight:'bold',fontSize:16,marginLeft:8,color:"#4d861f"}}>Signin</Text>
            </Pressable>
        </View>
    )
}

export default Index

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    logoArea:{
        display:"flex",
        justifyContent:'center',
        alignItems:"center",
        flex:0.5
    },
    googleButton2:{
        width:width-50,
        height:height/14,
        
        backgroundColor:'#4d861f',
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginBottom:20
       
    },
    googleButton:{
        width:width-50,
        height:height/14,
        backgroundColor:'#fff',
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
       
    },
    borderPrimary:{
        borderColor:"#ccc",
        borderWidth:2,
        borderRadius:40,
    },
    line: {
        width: '35%', // Adjust width as needed
        height: 2,    // Line thickness
        backgroundColor: '#ccc', // Line color
        marginVertical: 10,
        margin:20 // Spacing above and below the line
    },
    input: {
        width: '100%',
        height: 50,
        borderColor: '#007BFF', // Border color
        borderWidth: 2, // Border width
        borderRadius: 8, // Rounded corners
        paddingHorizontal: 10, // Horizontal padding
        marginBottom: 15, // Space between inputs
        backgroundColor: '#fff', // Input background color
        fontSize: 16, // Font size
    },

    
})