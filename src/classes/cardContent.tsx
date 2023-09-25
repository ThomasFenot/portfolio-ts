class CardContent {
  cardContentName: string;
  details: CardDetail[];
  date?: string;
  constructor(cardContentName: string, details: CardDetail[], date?: string) {
      this.cardContentName = cardContentName;
      this.date = date;
      this.details = details;
  }
}

class CardDetail {
  detailText: string[];
  detailTitle?: string;
  constructor(detailText:  string[], detailTitle?: string) {
    this.detailTitle = detailTitle;
    this.detailText = detailText;
  }
}
  
export{CardContent, CardDetail}