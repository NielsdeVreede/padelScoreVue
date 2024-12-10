import {User} from "@/models/user";

export class Match {
  id: number;
  homeUser: User;
  awayUser: User;
  homeScore: number;
  awayScore: number;
  playedAt: Date;

  constructor(id: number, homeUser: User, awayUser: User, homeScore: number, awayScore: number, playedAt: Date) {
    this.id = id;
    this.homeUser = homeUser;
    this.awayUser = awayUser;
    this.homeScore = homeScore;
    this.awayScore = awayScore;
    this.playedAt = playedAt;
  }
}
