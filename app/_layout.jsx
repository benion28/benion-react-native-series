import { Stack } from "expo-router"
import { SafeAreaProvider } from "react-native-safe-area-context"
import { ThemeProvider } from "../context/ThemeContext"

const { Screen: StackScreen } = Stack

const Layout = () => {
    return (
        <ThemeProvider>
            <SafeAreaProvider>
                <Stack screenOptions={{ headerShown: false }}>
                    <StackScreen name="index" />
                    <StackScreen name="todos/[id]" />
                </Stack>
            </SafeAreaProvider>
        </ThemeProvider>
    )
}

export default Layout