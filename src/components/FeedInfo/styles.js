import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 16,
    paddingLeft: 36,
    paddingRight: 36,
    paddingBottom: 16,
    alignItems: "flex-start"
  },
  user: {
    flexDirection: "row",
    alignItems: "center",
  },
  profileImage: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 16,
  },
  image: {
    width: "100%",
    height: 264,
    marginTop: 16,
    marginBottom: 16,
  },
  statsContainer: {
    marginTop: 16,
    flexDirection: "row",
    justifyContent: "space-between"
  },
  stats: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    marginRight: 8
  },
  caption: {
    borderWidth: 1,
    width: "100%",
    padding: 8
  }
});
