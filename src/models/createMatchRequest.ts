export class createMatchRequest {
  homeUserId: number;
  awayUserId: number;
  homeScore: number;
  awayScore: number;

  constructor(homeUserId: number, awayUserId: number, homeScore: number, awayScore: number) {
    this.homeUserId = homeUserId;
    this.awayUserId = awayUserId;
    this.homeScore = homeScore;
    this.awayScore = awayScore;
  }
}
