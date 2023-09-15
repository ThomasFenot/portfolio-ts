import {
VStack,
HStack,
} from "@chakra-ui/react"

import { PresentationCard} from "../components/Cards/PresentationCard"
import { DisplayCard } from "../components/Cards/DisplayCard"

const list: string[] = ['placeHolder1','placeHolder2','placeHolder3']



export const MainPage = () => (
    <VStack spacing={4}>
        <PresentationCard/>
        <HStack>
            <DisplayCard header="Professional experience" bodyContent={list}/>
            <DisplayCard header="Skills" bodyContent={list}/>
            <DisplayCard header="Socials" bodyContent={list}/>
        </HStack>
    </VStack>
)
