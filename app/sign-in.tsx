import icons from "@/constants/icons";
import images from "@/constants/images";
import React from "react";
import {
	StyleSheet,
	View,
	Text,
	SafeAreaView,
	ScrollView,
	Image,
	TouchableOpacity,
} from "react-native";

const SignIn = () => {
	const handleLogin = () => {};
	return (
		<SafeAreaView className="bg-gray-50 h-full">
			<ScrollView contentContainerClassName="h-full">
				<Image
					source={images.onboarding}
					className="w-full h-4/6"
					resizeMode="contain"
				/>
				<View className="px-10">
					<Text className="py- text-center text-base uppercase font-rubik text-black-200">
						Welcome To Restate
					</Text>
					<Text className="text-3xl font-rubik-bold text-black-300 text-center mt-2">
						Let's Get You Close to {"\n"}
						<Text className="text-center text-primary-300">
							Your Ideal Home
						</Text>
					</Text>
					<Text className="text-lg mt-12 text-center text-black-200">
						Login to ReState with Google
					</Text>
					<TouchableOpacity
						onPress={handleLogin}
						className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
					>
						<View className="flex flex-row items-center gap-2 justify-center">
							<Image
								source={icons.google}
								className="w-5 h-5"
								resizeMode="contain"
							/>
							<Text className="text-lg font-rubik-bold text-black-300 ml-2">
								Continue with Google
							</Text>
						</View>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({});

export default SignIn;
