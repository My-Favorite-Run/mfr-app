import React from 'react';
import {View, Text, Image} from 'react-native';
import {Input, Icon} from 'react-native-elements';

import styles from './styles';

function SignUp(props) {
    const [username, onChangeName] = React.useState(null);
    const [password, onChangePassword] = React.useState(null);
    const [errorText, setErrorText] = React.useState(null);

    const handleSubmitButton = () => {
        if (!username && !password) {
            setErrorText("Please enter username and password")
        }
        else if (!username) {
            setErrorText("Please enter username")
        }
        else if (!password) {
            setErrorText("Please enter password")
        }
        else {
            setErrorText(null)
            props.navigation.navigate('Map')
        }

    }
    return (
        <View style={styles.background}>
            <Image
                style={styles.logo}
                source={require('../../assets/logo-banner.png')}
            />
            <View style={styles.inputBackground}>
                <Input
                    containerStyle={styles.container}
                    placeholder="Username"
                    placeholderStyle={styles.inputStyle}
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.inputStyle}
                    onChangeText={onChangeName}
                    value={username}
                />
                <Input
                    containerStyle={styles.container}
                    placeholder="Password"
                    inputContainerStyle={styles.inputContainer}
                    inputStyle={styles.inputStyle}
                    onChangeText={onChangePassword}
                    value={password}
                />
                {errorText != null ? (
                    <Text style={styles.errorTextStyle}>
                        {errorText}
                    </Text>
                ) : null}
                <View style={styles.forgotContainer}>
                    <Text style={styles.forgotText}
                    onPress={()=> console.log("forgot password")}
                    >
                        Forgot password?
                    </Text>
                    <Icon
                        type="font-awesome-5"
                        name="arrow-circle-right"
                        color="#FF676F"
                        onPress={handleSubmitButton}
                    />
                </View>
                <View style={styles.signUpContainer}>
                    <Text style={styles.accountText}>
                        Don't have an account?{" "} 
                    </Text>
                    <Text style={styles.signUpText}
                    onPress={()=> console.log("sign up")}
                    >
                        Sign up
                    </Text>
                </View>
                    
            </View>
        </View>
    );
}

export default SignUp;
