import { useLocale } from "@react-navigation/native";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Id = () => {
	const { id } = useLocalSearchParams();
	return (
		<View>
			<Text>Proprety {id}</Text>
		</View>
	);
};

const styles = StyleSheet.create({});

export default Id;
