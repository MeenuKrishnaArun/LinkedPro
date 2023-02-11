import { RouterConfigurationFeature } from "@angular/router";

export interface User
{
    userId?: string;
   name: string;
   role: string; 
   avatarUrl: string;   
}

export interface PostModel
{
    postId: string,
    user: User;
    createdDate?: Date;
    content?: string;
    imageUrl?: string;
    videoUrl?: string;
    comments?: Comment[];
    myReaction?: Reaction;
    reactions?: ReactionSummary[];
    
}
export interface Comment
{
    user:User;
    commentText: String;
}

export interface ReactionSummary
{
    reaction: Reaction;
    count: number;
}

export enum Reaction{
    Like,
    Celebrate,
    Support,
    Funny,
    Love,
    angry,
    Curios
}
