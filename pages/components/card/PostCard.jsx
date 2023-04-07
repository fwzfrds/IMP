import React from 'react'
import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, Button } from '@chakra-ui/react'
import NextLink from 'next/link'

const PostCard = ({ postDetails }) => {
    return (
        <Card maxW='sm' boxShadow={'base'} padding={3} borderRadius={3} justifyContent={'space-between'}>
            <CardBody>
                <Stack spacing='3'>
                    <Heading size='md'>{postDetails?.title}</Heading>
                    <Text>
                        {postDetails?.body}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <NextLink href={`/posts/${postDetails?.id}`}>
                    <Button variant='solid' colorScheme='blue' marginTop={2} position={'relative'} bottom={0}>
                        Read More
                    </Button>
                </NextLink>
            </CardFooter>
        </Card>
    )
}

export default PostCard