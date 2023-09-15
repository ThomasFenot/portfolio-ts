import * as React from "react"
import {
  Card,
  Stack,
  Text,
  Heading,
  CardBody,
  CardFooter, 
  Image
} from "@chakra-ui/react"

import { DownloadButton } from "../DownloadButton"

export const PresentationCard  = () => {
  return (
    <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='presentationCard'
    >
    <Image
        objectFit='cover'
        maxW={{ base: '100%', sm: '200px' }}
        src={process.env.PUBLIC_URL + '/images/me.png'}
        alt='Me'
    />
    <Stack>
      <CardBody className="backgroud">
        <Heading className="backgroud" size='md'>Thomas Fenot</Heading>
        <Text py='2'>
          Experienced software engineer with 6+ years in full-stack development,
          specializing in .NET and C#. 
          Passionate about sharing knowledge, 
          seeking continuous learning, and exploring React and TypeScript.
          Enthusiastic about clean architecture and collaborative, startup-like environments.
        </Text>
      </CardBody>
      <CardFooter>
        <DownloadButton/>
      </CardFooter>
    </Stack>
  </Card>
  )
}
