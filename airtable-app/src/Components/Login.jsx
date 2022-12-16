import {
    Button,
    Checkbox,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Link,
    Stack,
    Image,
  } from '@chakra-ui/react';
  
  export default function Login() {
    const store = JSON.parse(localStorage.getItem('form'));
    const {firstname,lastname,mail,password} = store;
    
    return (
      <Stack minH={'100vh'} bg={'gray.400'} direction={{ base: 'column', md: 'row' }}>
        <Flex p={8} flex={1} align={'center'} justify={'center'}>
          <Stack spacing={4} w={'full'} maxW={'md'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <FormControl fontSize={'xl'} id="email">
              <FormLabel>Email address</FormLabel>
              <Input value={mail} type="email" />
            </FormControl>
            <FormControl fontSize={'xl'} id="password">
              <FormLabel>Password</FormLabel>
              <Input value={password} type="password" />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link fontSize={'xl'} color={'blue.500'}>Forgot password?</Link>
              </Stack>
              <Button size="lg" as={'a'}
                    href={'/'} onClick={()=>alert("signup successfull")}
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }} fontSize={'2xl'} colorScheme={'blue'} variant={'solid'}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}>
          <Image
            alt={'Login Image'}
            objectFit={'cover'}
            src={
              'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
            }
          />
        </Flex>
      </Stack>
    );
  }