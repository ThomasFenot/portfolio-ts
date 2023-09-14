import * as React from "react"
import {
  Card,
  Text,
  Heading,
  CardBody,
  CardHeader, 
} from "@chakra-ui/react"

export const DisplayCard  = () => {
  return (
    <Card>
        <CardHeader>
            <Heading size='md'>Place Holder</Heading>
        </CardHeader>
        <CardBody>
            <Heading size='xs' textTransform='uppercase'>
            Place Holder
            </Heading>
            <Text pt='2' fontSize='sm'>
            Place Holder
            </Text>
        </CardBody>
    </Card>
  )
}
