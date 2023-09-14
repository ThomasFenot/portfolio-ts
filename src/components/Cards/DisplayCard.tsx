import * as React from "react"
import {
  Card,
  Text,
  Heading,
  CardBody,
  CardHeader, 
} from "@chakra-ui/react"

type DisplayCardProps = {
  header?: string,
  bodyHeader?: string,
  bodyContent?: string
}

export const DisplayCard : React.FC<DisplayCardProps> = (props) => {
  return (
    <Card>
        <CardHeader>
            <Heading size='md'>{props.header}</Heading>
        </CardHeader>
        <CardBody>
            <Heading size='xs' textTransform='uppercase'>
            {props.bodyHeader}
            </Heading>
            <Text pt='2' fontSize='sm'>
            {props.bodyContent}
            </Text>
        </CardBody>
    </Card>
  )
}
