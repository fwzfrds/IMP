import { Box, Spinner } from '@chakra-ui/react'

const Loading = () => {
    return (
        <Box
            height={'100vh'}
            width={'100vw'}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
        >
            <Spinner
                boxSize={50}
                color='blue.500'
            />
        </Box>
    )
}

export default Loading