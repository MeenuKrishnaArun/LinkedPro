import { RouterConfigurationFeature } from "@angular/router";

export interface User
{
   name: string;
   role: string; 
   avatarUrl: string;   
}

export interface PostModel
{
    user: User;
    createdDate: Date;
    content: string;
    imageUrl?: string;
    videoUrl?: string;
    comments?: string[];
    myReaction?: Reaction;
    reactions?: ReactionSummary[];
}

export interface ReactionSummary{
    reaction: Reaction;
    count: number;
}

export enum Reaction{
    Like,
    Celebrate,
    Support,
    Funny,
    Love,
    Insightful,
    Curios
}