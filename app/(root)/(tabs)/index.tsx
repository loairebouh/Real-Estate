import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Text className="font-bold text-lg mb-10">Welcome To Real State</Text>
			<Link href="/sign-in">Sign In</Link>
			<Link href="/explore">Explore</Link>
			<Link href="/profile">Profile</Link>
			<Link href="/propreties/1">Proprety</Link>
		</View>
	);
}
