class CardContent {
  compagnieName: string;
  details: CardDetail[];
  date?: string;
  constructor(compagnieName: string, details: CardDetail[], date?: string) {
      this.compagnieName = compagnieName;
      this.date = date;
      this.details = details;
  }
}

class CardDetail {
  detailText: string;
  detailTitle?: string;
  constructor( detailText: string, detailTitle?: string) {
    this.detailTitle = detailTitle;
    this.detailText = detailText;
  }
}
  
export{CardContent, CardDetail}