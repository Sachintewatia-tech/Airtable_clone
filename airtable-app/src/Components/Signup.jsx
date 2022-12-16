import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    HStack,
    InputRightElement,
    Stack,
    Button,
    Heading,
    Text,
    useColorModeValue,
    
  } from '@chakra-ui/react';
  import {Link} from 'react-router-dom'
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
  
  export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [password,setPassword] = useState(null);
    const [mail,setMail] = useState(null);
    const [firstname,setFirstName] = useState(null);
    const [lastname,setLastName] = useState(null);
    

    function handleMail  (e) {
        const formInput = {
            firstname,lastname,mail,password
        }
        console.log(firstname);
        if(firstname!==null&&mail!==null&&password!==null){
                  
            localStorage.setItem('form',JSON.stringify(formInput));
            window.location.href = '/login'
            alert('Signup sucessfull')
        }else if(firstname===null || mail===null || password===null){
            alert("fill details");
            window.location.reload();
        }else{
            window.location.reload();
        }

    }
    return (
      <Flex
        width={'auto'}
        minH={'100vh'} margin={'auto'}
        align={'center'}
        justify={'center'}
        bgImage={'https://images.unsplash.com/photo-1522252234503-e356532cafd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80'}
        // bg={'gray'}
        >
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading bg={'black'} color={'aqua'} fontSize={'5xl'} textAlign={'center'}>
              Sign up
            </Heading>
            <Text bg={'black'} fontSize={'xl'} color={'aqua'}>
              to enjoy all of our cool features ✌️
            </Text>
          </Stack>
          <Box
            rounded={'3xl'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'3xl'}  width={'550px'} fontSize={'2xl'}
            p={10}>
            <Stack spacing={10}>
              <HStack>
                <Box >
                  <FormControl id="firstName" isRequired>
                    <FormLabel  >First Name</FormLabel>
                    <Input type="text" width={'100%'} onChange={(e)=>setFirstName(e.target.value)} />
                  </FormControl>
                </Box>
                <Box>
                  <FormControl id="lastName">
                    <FormLabel>Last Name</FormLabel>
                    <Input width={'100%'} type="text" onChange={(e)=>setLastName(e.target.value)} />
                  </FormControl>
                </Box>
              </HStack>
              <FormControl id="email" isRequired>
                <FormLabel>Email address</FormLabel>
                <Input type="email" onChange={(e)=>setMail(e.target.value)} />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input type={showPassword ? 'text' : 'password'} onChange={(e)=>setPassword(e.target.value)} />
                  <InputRightElement h={'full'}>
                    <Button
                      variant={'ghost'}
                      onClick={() =>
                        setShowPassword((showPassword) => !showPassword)
                      }>
                      {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Stack spacing={10} pt={2}>
                <Button
                onClick={(e)=>handleMail(e)}
                  loadingText="Submitting"
                  size="lg"
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Sign up
                </Button>
              </Stack>
              <Stack pt={6}>
                <Text align={'center'}>
                  Already a user? <Link to={'/login'} color={'blue'}>Login</Link>
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    );
  }