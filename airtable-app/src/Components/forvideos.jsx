import {Button} from '@chakra-ui/react';


function Withvideo(props){
const {h1,h3,btn} = props;

    return (
        <div>
                <h1>{h1}</h1>
                <h3>{h3}</h3>
                <Button
                    display={{ base: 'none', md: 'inline-flex' }}
                    fontSize={'20px'}
                    fontWeight={700}
                    color={'white'}
                    bg={'#0768f8'}
                    borderRadius={'8px'} padding={'7px'} width={"auto"}
                    href={'#'} margin={'30px 0 30px 0 '}
                    _hover={{
                        bg: 'pink.300',
                    }}> {btn}
                </Button>
            </div>
    )
}
export default Withvideo;