import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    colors: {
        background: '#000',
        primary: '#333',
        secondary: '#444'
    },
    components: {
        Button: {
            baseStyle: {
                bg: 'background',
                color: 'white'
            }
        }
    }
})