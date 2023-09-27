import * as React from "react";
import {
  Card,
  Text,
  Heading,
  CardBody,
  CardHeader,
  Stack,
  StackDivider,
  Box,
  Link,
} from "@chakra-ui/react";

import { CardContent } from "../../classes/cardContent";

type DisplayCardProps = {
  header: string;
  content: CardContent[];
  isCardWithLink: boolean;
};

export const DisplayCard = ({ header, content, isCardWithLink =false }: DisplayCardProps) => (
  <Card variant={"displayCard"}>
    <CardHeader>
      <Heading size="md">{header}</Heading>
    </CardHeader>
    <CardBody>
      <Stack divider={<StackDivider />} spacing="4">
        {/* Maybe there is a better way to do this... */}
        {content.map((element) => (
          <Box>
            <Heading size="xs" textTransform="uppercase">
              {element.cardContentName}
            </Heading>
            <Text as='u' fontSize="sm">{element.date}</Text>
            {element.details.map((element, index) => (
              <>
                <Text as='u' key={index} pt="2" fontSize="md">
                  {element.detailTitle}
                </Text>
                {element.detailText.map((element) => (
                  isCardWithLink ? 
                  <Link href={element} key={index} pt="2" fontSize="sm">
                    {element}
                  </Link> : 
                   <Text key={index} pt="2" fontSize="sm">
                   {element}
                 </Text>
                ))}
                <br />
              </>
            ))}
          </Box>
        ))}
      </Stack>
    </CardBody>
  </Card>
);
