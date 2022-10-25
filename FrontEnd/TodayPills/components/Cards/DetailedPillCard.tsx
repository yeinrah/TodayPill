import { StyleSheet, View, Image, Text } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useState } from "react";
import { Ionicons } from '@expo/vector-icons';

const DetailedPillCard = () => {
    const [like, setLike] = useState(false);

    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/images/pills/sample1.png")}
                style={styles.image}
            />
            <View style={styles.textcontainer}>
                <Text style={styles.brandname}>
                    닥터스베스트
                </Text>
                <Text style={styles.pillname}>
                    킬레이트 마그네슘
                </Text>
                <Text style={styles.feature}>
                    몸에 좋음
                </Text>
                <Text style={styles.feature}>
                    맛도 좋음
                </Text>
                <View style={styles.alertcontainer}>
                    <Ionicons name="warning" size={10} color="#FFCE31" />
                    <Text style={styles.blackalert}>
                        주의&nbsp;
                    </Text>
                    <Text style={styles.greyalert}>
                        고용량 포함, 장기 복용시 전문가와 상의
                    </Text>
                </View>
            </View>
            <AntDesign
                name="hearto"
                size={24}
                color={like ? "#E2C3DC" : "#CCCCCC"}
                style={styles.likeicon}
                onPress={() => setLike(!like)}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        position: "relative",
        marginHorizontal: 10,
        height: 90,
        backgroundColor: "#F4FAF9",
        elevation: 10,
        borderRadius: 10,
    },
    image: {
        marginVertical: 5,
        marginHorizontal: 10,
        width: 80,
        height: 80,
        resizeMode: "contain",
    },
    textcontainer: {
        marginTop: 5,
    },
    brandname: {
        fontSize: 7,
        color: "#B7B7B7",
    },
    pillname: {
        fontSize: 10,
        fontWeight: "bold",
        marginBottom: 2,
    },
    feature: {
        alignSelf: "flex-start",
        height: 16,
        fontSize: 9,
        fontWeight: "bold",
        borderRadius: 20,
        backgroundColor: "#C4F1EA",
        marginBottom: 3,
        paddingHorizontal: 6,
        paddingTop: 1,
    },
    alertcontainer: {
        flexDirection: "row",
    },
    blackalert: {
        color: "black",
        fontSize: 8,
    },
    greyalert: {
        color: "#B7B7B7",
        fontSize: 8,
    },
    likeicon: {
        position: "absolute",
        top: 5,
        right: 5,
    },
});

export default DetailedPillCard;