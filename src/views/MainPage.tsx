import {
VStack,
HStack,
} from "@chakra-ui/react"

import { PresentationCard} from "../components/Cards/PresentationCard"
import { DisplayCard } from "../components/Cards/DisplayCard"
import { ProfessionalExperience, ProfessionalExperienceDetail} from "../classes/professionalExperience"

const listOfProfessionalExperience: ProfessionalExperience[] = [
    new ProfessionalExperience("Proxiad Axe Seine", "October 2017 - December 2022", 
        [
            new ProfessionalExperienceDetail("detailTitle1", "detailContent1"),
            new ProfessionalExperienceDetail("detailTitle2", "detailContent2")
        ]
    ),
    new ProfessionalExperience("Abysse Corp", "October 2022 - Today", 
    [
        new ProfessionalExperienceDetail("detailTitle1", "detailContent1"),
        new ProfessionalExperienceDetail("detailTitle2", "detailContent2"),
        new ProfessionalExperienceDetail("detailTitle3", "detailContent3"),
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
