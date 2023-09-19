import {
VStack,
HStack,
} from "@chakra-ui/react"

import { PresentationCard} from "../components/Cards/PresentationCard"
import { DisplayCard } from "../components/Cards/DisplayCard"
import { CardContent, CardDetail} from "../classes/cardContent"

//Professional Exp : Maybe i can set this somewhere else ? 
const listOfProfessionalExperience: CardContent[] = [
    new CardContent("Abysse Corp",
        [
            new CardDetail("detailContent1", "detailTitle1"),
            new CardDetail("detailContent2", "detailTitle2"),
            new CardDetail("detailContent3", "detailTitle3")
        ], "December 2022 - Today"
    ),
    new CardContent("Proxiad Axe Seine", 
        [
            new CardDetail("detailContent1", "detailTitle1"),
            new CardDetail("detailContent2", "detailTitle2")
        ], "October 2017 - December 2022"
    )
]

//List of skills : Maybe i can set this somewhere else ? 
const listOfSkills: CardContent[] = [
    new CardContent("Back-end",
        [
            new CardDetail("detailContent1", "detailTitle1"),
            new CardDetail("detailContent2", "detailTitle2"),
            new CardDetail("detailContent3", "detailTitle3")
        ], 
    ),
    new CardContent("Front-end",
        [
            new CardDetail("detailContent1", "detailTitle1"),
            new CardDetail("detailContent2", "detailTitle2")
        ]
    )
]

//List of socials : Maybe i can set this somewhere else ? 
const listOfSocials: CardContent[] = [
    new CardContent("GitHub",
        [
            new CardDetail("https://github.fenot.dev")
        ]
    ),
    new CardContent("LinkedIn",
        [
            new CardDetail("https://linkedin.fenot.dev")
        ]
    ),
    new CardContent("RemoteOk",
    [
        new CardDetail("https://remoteok.fenot.dev")
    ]
)
]

export const MainPage = () => (
    <VStack spacing={4}>
        <PresentationCard/>
        <HStack>
            <DisplayCard header="Professional experience" content={listOfProfessionalExperience}/>
            <DisplayCard header="Skills" content={listOfSkills}/>
            <DisplayCard header="Socials" content={listOfSocials}/>
        </HStack>
    </VStack>
)
