import { Injectable } from '@angular/core';
import { Observable, Subject, Subscriber, timer } from 'rxjs';
import { PostModel } from 'src/app/model/post';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  
  public posts: PostModel[];
  public postListUpdatedEvent: Observable<boolean>;
  private postSubject: Subject<boolean>;
  constructor(private spinnerService: NgxSpinnerService  ) { 

    this.postSubject = new Subject<boolean>();
    this.postListUpdatedEvent = this.postSubject as Observable<boolean>;

    this.posts = [{
      postId: crypto.randomUUID(),
        user: {
          userId: 'john.doe@mail.com',
          name: "John doe",
          role: "Web Developer",
          avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbM0xYTIJDg188HtjJmpbfBI4iDWqXHPqQaw&usqp=CAU"
          
        },
        content: "For many families around the world and throughout history, it has traditionally been the mother who has the often thankless job of keeping the family and household running. Starting with lending their bodies to house babies before they are even born, mothers have a tendency to give up a lot for their families and are rarely given the accolades they deserve.",
        createdDate: new Date(),
        //imageUrl: "https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=651%2Cmetadata=none%2Conerror=redirect%2Cq=70%2Csharpen=1%2Cwidth=1400/wp-content/uploads/happy-mother-s-day-2021-08-27-22-12-32-utc-scaled.jpg",
        videoUrl: "https://www.youtube.com/embed/c9F5kMUfFKk"
      },
      {
        postId: crypto.randomUUID(),
        user: {
          userId: 'marry.white@mail.com',
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
 
  // Get all posts for postfeed
  getPosts(): PostModel[]{
    return this.posts;
  }

  // Add 'post' to the main list of posts
  addPost(post: PostModel)
  {
    this.spinnerService.show();
    const source = timer(2000);
    const subscribe = source.subscribe(val => 
      {
        this.posts.unshift(post);
       // this.postSubject.next(true);
       this.spinnerService.hide();
      });
  }

  deletePost(postId:string)
 {
  //let index = this.posts.findIndex(item => item.postId === postId);
  //this.posts.splice(index,1);
  this.posts = this.posts.filter(item => item.postId !== postId);
  this.postSubject.next(true);
  }
   
}
