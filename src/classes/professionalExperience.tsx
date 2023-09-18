class ProfessionalExpereience {
compagnieName: string;
date: string;
details: ProfessionalExpereienceDetail[]

    constructor(compagnieName: string, date: string, details: ProfessionalExpereienceDetail[]) {
        this.compagnieName = compagnieName;
        this.date = date;
        this.details = details;
    }
}

class ProfessionalExpereienceDetail {
    detailTitle: string;
    detailText: string;

  
    constructor(detailTitle: string, detailText: string) {
      this.detailTitle = detailTitle;
      this.detailText = detailText;
    }
  }
  
  export{ProfessionalExpereience, ProfessionalExpereienceDetail}