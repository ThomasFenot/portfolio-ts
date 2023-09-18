class ProfessionalExperience {
compagnieName: string;
date: string;
details: ProfessionalExperienceDetail[]

    constructor(compagnieName: string, date: string, details: ProfessionalExperienceDetail[]) {
        this.compagnieName = compagnieName;
        this.date = date;
        this.details = details;
    }
}

class ProfessionalExperienceDetail {
    detailTitle: string;
    detailText: string;

  
    constructor(detailTitle: string, detailText: string) {
      this.detailTitle = detailTitle;
      this.detailText = detailText;
    }
  }
  
  export{ProfessionalExperience, ProfessionalExperienceDetail}