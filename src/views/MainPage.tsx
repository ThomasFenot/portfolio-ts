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
            new CardDetail(
                [
                    "Implementation of a new ERP (NetSuite)",
                    "Maintenance and overhaul of legacy applications",
                    "Creation of a PIM from scratch in React.js",
                    "Development of a complete .NET API with DDD",
                ]
           ),
        ], "December 2022 - Today"
    ),
    new CardContent("Proxiad Axe Seine", 
        [
             new CardDetail(
                [
                    "Completion of projects in .NET Framework/Core",
                    "Development of a VR Game with Unity 3D ",
                    "Implementation of a project in Vue.js",
                    "Migration of a Razor project to React.js",
                    "Creation of APIs in .NET Core"
                ]
           ),
        ], "October 2017 - December 2022"
    )
]

//List of skills
const listOfSkills: CardContent[] = [
    new CardContent("Back-end",
        [
            new CardDetail(["C#","JavaScript","TypeScript","SQL",""], "Languages"),
            new CardDetail([".NET Core/.NET Framework", "Entity Framework"], "Frameworks"),
        ]
    ),
    new CardContent("Front-end",
        [
            new CardDetail(["Razor"], "Languages"),
            new CardDetail(["ASP.NET MVC","React.JS","Blazor",], "Frameworks"),
        ]
    ),
    new CardContent("Tools",
        [
            new CardDetail(["SSMS", "VS/VS Code","Docker"]),
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
            <DisplayCard header="Professional experience" content={listOfProfessionalExperience} isCardWithLink={false}/>
            <DisplayCard header="Skills" content={listOfSkills} isCardWithLink={false}/>
            <DisplayCard header="Socials" content={listOfSocials} isCardWithLink={true}/>
        </HStack>
    </VStack>
)
