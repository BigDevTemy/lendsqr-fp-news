import {View,Text,StyleSheet, Image,Dimensions,TextInput, Pressable} from 'react-native'
import Logo from '../assets/images/fpnews-logo.png'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import auth from '@react-native-firebase/auth';
import { useSelector,useDispatch } from 'react-redux';
import { GoogleSignin,SignInSuccessResponse ,SignInResponse} from '@react-native-google-signin/google-signin';
import { RootState } from '../app/types';
import { setUserData } from '../app/userdata';
const width = Dimensions.get("window").width
const height = Dimensions.get("window").height
GoogleSignin.configure({
    scopes: ['email'], // Request user's email
  });
type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;
const Index:React.FC<SignInScreenProps> = ({navigation})=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {userdata}  = useSelector((state:RootState)=>state.userdata)
   console.log('userDtata',userdata)
    const dispatch = useDispatch()
    const signInWithGoogle = async (): Promise<void> => {
        try {
          // Ensure Google Play Services are available
          await GoogleSignin.hasPlayServices();
    
          // Start the Google sign-in process
          const userInfo: SignInResponse = await GoogleSignin.signIn();
    
          // Check if the sign-in was successful
          if (userInfo && userInfo.type === 'success') {
            const successResponse = userInfo as SignInSuccessResponse;
    
            // Ensure that successResponse contains idToken before proceeding
            

            if (!successResponse) {
              throw new Error("Failed to get ID token from Google sign-in.");
            }

            if(successResponse){
                dispatch(setUserData(successResponse?.data?.user))
            }
            console.log(successResponse?.data?.user)
    
            // Create Google credential with the user's ID token
            //const googleCredential = auth.GoogleAuthProvider.credential(successResponse.idToken);
    
            // Sign in the user with the Google credential
            //await auth().signInWithCredential(googleCredential);
    
            console.log('User signed in with Google');
          } else if (userInfo.type === 'cancelled') {
            console.log('User cancelled the sign-in process');
          } else {
            console.log('Sign-in failed with response:', userInfo);
          }
        } catch (error) {
          console.error('Google Sign-In error:', error);
        }
      };
    
    return (
        <View style={styles.container}>
            
            <View  style={styles.logoArea}>
                <Image source={Logo} resizeMode="contain"  style={{width:100,height:100}}  />
                <Text style={{fontSize:20,marginTop:10,fontWeight:'bold'}}>FPNews</Text>    
                <Text style={{fontSize:16,marginTop:10,fontFamily:'poppins'}}>Welcome!, lets dive into your account</Text>
            </View>
            <View style={{width:width-50,marginTop:20,}}>
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
                
                <Text style={{fontSize:16,color:'#fff'}}>Sign In</Text>
            </View>
            </View>
            <View style={{display:"flex",flexDirection:"row",width:'100%',justifyContent:"center",alignItems:"center",marginBottom:20}}>
                <View style={styles.line}></View>
                    <View><Text style={{fontSize:18}}>or</Text></View>
                <View style={styles.line}></View>
            </View>
            <Pressable onPress={()=>signInWithGoogle()}  style={[styles.googleButton,styles.borderPrimary]}>
                <FontAwesome5 name="google" size={30} color="#4285F4" />
                <Text style={{fontSize:16,marginLeft:10}}>Continue with Google</Text>
            </Pressable>
            <Pressable  onPress={()=>navigation.navigate('SignUp')} style={{width:'100%',display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginTop:10}}>
                <Text style={{fontWeight:'bold',fontSize:16}}>Do not have an account?</Text>
                <Text style={{fontWeight:'bold',fontSize:16,marginLeft:8,color:"#4d861f"}}>Signup</Text>
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