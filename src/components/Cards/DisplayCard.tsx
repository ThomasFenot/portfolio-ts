import * as React from "react"
import {
  Card,
  Text,
  Heading,
  CardBody,
  CardHeader, 
} from "@chakra-ui/react"

type DisplayCardProps = {
  header: string,
  bodyHeader?: string,
  bodyContent: string[]
}


// Easiest way to declare a Function Component; return type is inferred.
export const DisplayCard = ({ header,bodyHeader,bodyContent}: DisplayCardProps) => 
    <Card variant={"displayCard"}>
        <CardHeader>
            <Heading size='md'>
                {header}  
            </Heading>
        </CardHeader>
        <CardBody>
            <Heading size='xs' textTransform='uppercase'>
              {bodyHeader}
            </Heading>
            {/* Maybe there is a better wayto do this... */}
            {bodyContent.map((element, index) => (
              <> 
                <Text key={index} pt='2' fontSize='sm'>
                  {element}
                </Text>
                <br />
               </>
             ))}
        </CardBody>
    </Card>
    ;
