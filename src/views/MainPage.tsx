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
            new CardDetail(["ACdetailContent1"], "ACdetailTitle1"),
            new CardDetail(["ACdetailContent2"], "ACdetailTitle2"),
            new CardDetail(["ACdetailContent3"], "ACdetailTitle3")
        ], "December 2022 - Today"
    ),
    new CardContent("Proxiad Axe Seine", 
        [
            new CardDetail(["PASdetailContent1"], "PASdetailTitle1"),
            new CardDetail(["PASdetailContent2"], "PASdetailTitle2")
        ], "October 2017 - December 2022"
    )
]

//List of skills
const listOfSkills: CardContent[] = [
    new CardContent("Back-end",
        [
            new CardDetail(["C#","JavaScript","TypeScript","SQL","Razor"], "Languages"),
            new CardDetail([".NET Core/.NET Framework","React.JS","ASP.NET MVC","React.JS", "Blazor" ], "Frameworks"),
            new CardDetail(["SSMS", "VS/VS Code","Docker"], "Tools")
        ], 
    ),
    new CardContent("Front-end",
        [
            new CardDetail(["FEdetailContent1"], "FEdetailTitle1"),
            new CardDetail(["FEdetailContent2"], "FEdetailTitle2")
        ]
    )
]

//List of socials
const listOfSocials: CardContent[] = [
    new CardContent("GitHub",
        [
            new CardDetail(["https://github.fenot.dev"])
        ]
    ),
    new CardContent("LinkedIn",
        [
            new CardDetail(["https://linkedin.fenot.dev"])
        ]
    ),
    new CardContent("RemoteOk",
        [
            new CardDetail(["https://remoteok.fenot.dev"])
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
