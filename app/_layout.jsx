import { Stack } from "expo-router"
import { SafeAreaProvider } from "react-native-safe-area-context"

const { Screen } = Stack

const Layout = () => {
    return (
        <SafeAreaProvider>
            <Stack>
                <Screen name="index" options={{ headerShown: false }} />
            </Stack>
        </SafeAreaProvider>
    )
}

export default Layout