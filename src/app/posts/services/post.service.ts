import { Injectable } from '@angular/core';
import { PostModel } from 'src/app/model/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  posts: PostModel[];

  constructor() { 
    this.posts = [{
        user: {
          name: "John doe",
          role: "Web Developer",
          avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbM0xYTIJDg188HtjJmpbfBI4iDWqXHPqQaw&usqp=CAU"
          
        },
        content: "For many families around the world and throughout history, it has traditionally been the mother who has the often thankless job of keeping the family and household running. Starting with lending their bodies to house babies before they are even born, mothers have a tendency to give up a lot for their families and are rarely given the accolades they deserve.",
        createdDate: new Date(),
        imageUrl: "https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=651%2Cmetadata=none%2Conerror=redirect%2Cq=70%2Csharpen=1%2Cwidth=1400/wp-content/uploads/happy-mother-s-day-2021-08-27-22-12-32-utc-scaled.jpg"
      },
      {
        user: {
          name: "Marry white",
          role: "Architect",
          avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDOa5pWMBgzGMnwm9w3WS8VtsTUTzQLHzj2g&usqp=CAU"
          
        },
        content: `It’s no secret that I love the autumn season. It feels like a time of new beginnings and fresh starts. The weather is mild and the smell of fresh fallen leaves is something I wish I could bottle up so I could experience it all year long. I’ve always loved autumn, but autumn in Sweden is really something special. 

        Last year I wrote about my favourite spots to experience autumn in southern Sweden (you can read that post here). So this year, I wanted to share a new version with all the best spots to experience autumn in Sweden in 2020. We’ve been spending a ton of time outside in nature. And I can’t wait to share my favourite spots and memories with you in a little photo diary..`,
        createdDate: new Date(),
        imageUrl: "https://tse1.mm.bing.net/th?id=OIP.KX4KwZr_7RhQUWi2KFBRfwHaEK&pid=Api&P=0"
      }
    ];
  }

  getPosts(): PostModel[]{
    return this.posts;
  }
}
