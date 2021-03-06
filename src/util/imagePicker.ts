import * as ImagePicker from 'expo-image-picker';


async function pickImage() {
    let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
    });
    console.log(result);

    if (!result.cancelled) {
     return result;
    }
}
