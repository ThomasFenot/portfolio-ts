import {
Box,
VStack,
HStack,
Grid,
} from "@chakra-ui/react"

import { PresentationCard} from "../components/Cards/PresentationCard"
import { DisplayCard } from "../components/Cards/DisplayCard"

export const MainPage = () => (
    <VStack spacing={4}>
        <PresentationCard/>
        <HStack>
            <DisplayCard/>
            <DisplayCard/>
            <DisplayCard/>
        </HStack>
    </VStack>
)
