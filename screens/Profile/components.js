import React from "react";
import {
  View,
  Button,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  Linking,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import styles from "./styles";
import { loginWithFacebook, loginWithGoogle, logout } from "./utils";

export const RenderButtons = (props) => {
  //get logged in state from redux store
  const { loggedIn, user } = useSelector((state) => state.user);

  if (!loggedIn) {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.background}
          source={require("../../assets/background.png")}
        >
          <View style={styles.logo}>
            <Image source={require("../../assets/mfrlogo.png")} />
          </View>
          <View style={styles.actions}>
            <TouchableOpacity
              style={[styles.button, styles.fb]}
              onPress={loginWithFacebook}
            >
              <Text style={styles.buttontext}>Continue with Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.google, { marginTop: "5%" }]}
            >
              <Text style={styles.buttontext} onPress={loginWithGoogle}>
                Continue with Google
              </Text>
            </TouchableOpacity>
            <Text style={{ marginTop: "10%", textAlign: "center" }}>
              <Text>Don't have an account? </Text>
              <Text
                style={{ color: "#FF676F", fontWeight: "bold" }}
                onPress={() =>
                  Linking.openURL("http://google.com/search?q=test")
                }
              >
                Sign up
              </Text>
            </Text>
          </View>
        </ImageBackground>
      </View>
    );
  } else {
    return <Button title="Logout" onPress={logout} />;
  }
};

export const RenderUser = (props) => {
  // get user global state from redux
  const { user } = useSelector((state) => state.user);

  if (!user) {
    return (
      <View>
        <Text> Not logged in </Text>
      </View>
    );
  }

  return (
    <View>
      <Text>{user.displayName}</Text>
      <Text>{user.email}</Text>
      <Image style={styles.profilePic} source={{ uri: user.photoURL }} />
    </View>
  );
};
