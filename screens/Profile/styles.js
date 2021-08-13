import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: "50%",
  },
  logo: {
    flex: 1,
    justifyContent: "center",
    right: 30,
  },
  actions: {
    flex: 1,
    marginTop: "50%",
  },
  button: {
    paddingHorizontal: "20%",
    paddingVertical: "5%",
    shadowColor: "black",
    shadowOpacity: 0.4,
    shadowRadius: 5,
  },
  fb: {
    backgroundColor: "#2E3E96",
  },
  google: {
    backgroundColor: "#3A73E3",
    paddingHorizontal: "22.2%",
  },
  buttontext: {
    color: "white",
    fontWeight: "bold",
    fontSize: 14,
  },
  profilePic: {
    width: 50,
    height: 50,
  },
});
