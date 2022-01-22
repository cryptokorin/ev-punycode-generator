import { Center } from '@chakra-ui/react';
import {
    FormControl,
    FormLabel,
    Input,
    Button,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'

const AssetForm = ({onSubmit, inputs, handleChange}) => {

    const {nmcAsset, registration} = inputs

    return (
    <Center width="100vw" height="100vh">
        <form onSubmit={onSubmit}>
            <FormControl mb={6}>
                <FormLabel htmlFor="nmcAsset">Asset</FormLabel>
                <Input id="nmcAsset" name="nmcAsset" type="text"
                    value={nmcAsset} onChange={e => handleChange(e)}/>
            </FormControl>
            <FormControl mb={4}>
             <FormLabel htmlFor="registration">Registered on</FormLabel>
                <Input id="registration" name="registration" type="text"
                    value={registration} onChange={e => handleChange(e)}/>
            </FormControl>
            <Button type="submit">Generate</Button>
        </form>
    </Center>   
     )
}

export default AssetForm;