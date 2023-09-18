import {
VStack,
HStack,
} from "@chakra-ui/react"

import { PresentationCard} from "../components/Cards/PresentationCard"
import { DisplayCard } from "../components/Cards/DisplayCard"
import { ProfessionalExpereience, ProfessionalExpereienceDetail } from "../classes/professionalExperience"

const listOfProfessionalExperience: ProfessionalExpereience[] = [
    new ProfessionalExpereience("Proxiad Axe Seine", "October 2017 - December 2022", 
        [
            new ProfessionalExpereienceDetail("detailTitle1", "detailContent1"),
            new ProfessionalExpereienceDetail("detailTitle2", "detailContent2")
        ]
    ),
    new ProfessionalExpereience("Abysse Corp", "October 2022 - Today", 
    [
        new ProfessionalExpereienceDetail("detailTitle1", "detailContent1"),
        new ProfessionalExpereienceDetail("detailTitle2", "detailContent2"),
        new ProfessionalExpereienceDetail("detailTitle3", "detailContent3"),

    ]
)
]
const listOfSkills: string[] = ['placeHolder1','placeHolder2','placeHolder3']
const listOfSocials: string[] = ['placeHolder1','placeHolder2','placeHolder3']

export const MainPage = () => (
    <VStack spacing={4}>
        <PresentationCard/>
        <HStack>
            <DisplayCard header="Professional experience" content={listOfProfessionalExperience}/>
            <DisplayCard header="Skills" content={listOfProfessionalExperience}/>
            <DisplayCard header="Socials" content={listOfProfessionalExperience}/>
        </HStack>
    </VStack>
)
