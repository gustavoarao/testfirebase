import {
    Flex,
    Box,
    Center,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
  import { useEffect, useContext } from 'react';

import { FcGoogle } from 'react-icons/fc';
import {firebase, auth} from '../Firebase'
import { AuthContext } from '../../providers';
  
  export default function SignupCard() {

    const {user, setUser} = useContext(AuthContext)

    console.log(user)
     useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(user){
                const {uid, email, displayName, photoURL} = user
                setUser({
                name: displayName,
                password: uid,
                email: email,
                image: photoURL
            })
            }
        })
    }, []) 
   
    const handleClick = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const result = await auth.signInWithPopup(provider)
        console.log(result.user)

        if(result.user){
            const {uid, email, displayName, photoURL} = result.user
            setUser({
                name: displayName,
                password: uid,
                email: email,
                image: photoURL
            })
        }

    }
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={"#262528"}
            boxShadow={'lg'}
            p={8}>
            <Stack spacing={4}>
              <Stack spacing={10} pt={2}>
                <Button
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
                <Button w={'full'} variant={'outline'} leftIcon={<FcGoogle />} onClick={handleClick}>
                <Center>
                    <Text color={"white"}>Sign in with Google</Text>
                </Center>
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'} color={"white"}>
                  Already a user? <Link color={'blue.400'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }