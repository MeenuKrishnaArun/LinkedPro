import { Injectable } from '@angular/core';
import { Observable, Subject, Subscriber, timer } from 'rxjs';
import { Comment, PostModel } from 'src/app/model/post';
import { NgxSpinnerService } from 'ngx-spinner';
import { PostModule } from '../post.module';

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
        content: "Take your time, read it slowly, Think Like a Monk reveals how to overcome negative thoughts and habits, and access the calm and purpose that lie within all of us. He transforms abstract lessons into advice and exercises we can all apply to reduce stress, improve relationships and you will definitely find the book interesting and enriching",
        createdDate: new Date(),
        //imageUrl: "https://www.daysoftheyear.com/cdn-cgi/image/dpr=1%2Cf=auto%2Cfit=cover%2Cheight=651%2Cmetadata=none%2Conerror=redirect%2Cq=70%2Csharpen=1%2Cwidth=1400/wp-content/uploads/happy-mother-s-day-2021-08-27-22-12-32-utc-scaled.jpg",
        videoUrl: "https://www.youtube.com/embed/c9F5kMUfFKk",
        comments: [{
          commentText: "I bought it and read it two years ago! I still think is one of my favorite books. Everything is very well explained. Jay is a great life coach",
          
          user: {
            name:'Neelima Suresh',
            userId:'neema.hima@mail.com',
            role: "Web Developer",
            avatarUrl: "https://funkylife.in/wp-content/uploads/2022/12/whatsapp-dp-funkylife-542-1-1024x1024.jpg"
                 }
        },
        {
          commentText: "Inspirational, motivational, and transformative. It made me look inward and I feel a new connection with myself!",
          user: {
            name:'Divya Raj',
            userId:'vidhya.purnima@mail.com',
            role: "Architect",
            avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToDsQ2oZovJgZ1tZvk_lZohB1yoJSMLqrOXQ&usqp=CAU"
                 }
        }] 
      },
      {
        postId: crypto.randomUUID(),
        user: {
          userId: 'marry.white@mail.com',
          name: "Veena Babu",
          role: "Architect",
          avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDOa5pWMBgzGMnwm9w3WS8VtsTUTzQLHzj2g&usqp=CAU"
          
        },
        content: `It’s no secret that I love the autumn season. It feels like a time of new beginnings and fresh starts. The weather is mild and the smell of fresh fallen leaves is something I wish I could bottle up so I could experience it all year long. I’ve always loved autumn, but autumn in Sweden is really something special. 

        Last year I wrote about my favourite spots to experience autumn in southern Sweden (you can read that post here). So this year, I wanted to share a new version with all the best spots to experience autumn in Sweden in 2020. We’ve been spending a ton of time outside in nature. And I can’t wait to share my favourite spots and memories with you in a little photo diary..`,
        createdDate: new Date(),
        imageUrl: "https://wallpaperaccess.com/full/475268.jpg",
        comments: [{
          commentText: "Autumn is a time for harvest. Farmers and gardeners collect apples, pumpkins, pears, corn and other different crops, because the first frost can come suddenly and all the efforts to growing them will be in vain.",
          user: {
            name:'Firozi',
            userId:'firozi.fin@mail.com',
            role: "Web Developer",
            avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzcwzI5mofEiPzHRVzvX1b6c7B-r6Awl4-2Q&usqp=CAU"
                 }
        },{
          commentText: "Everyone know that Autumn always brings rainy days, gray and heavy clouds in some days in the sky and winds. In this time of the year different types of mushrooms start to grow. They can have different colors and shapes, but be careful, some of them are dangerous even to touch",
          
          user: {
            name:'Swathy Babu',
            userId:'hima.123@mail.com',
            role: "Web Developer",
            avatarUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlbxZycyavsI38QwhqCQbUDnpYMd4MvaaR3w&usqp=CAU"
                 }
        }] 
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
       this.spinnerService.hide();
      });
  }

  deletePost(postId:string)
 {
  this.posts = this.posts.filter(item => item.postId !== postId);
  this.postSubject.next(true);
  }


  addComment(comment:Comment, postid:string)
  {    
    let post = this.posts.find((item: PostModel) => item.postId == postid);
    post?.comments?.push(comment)
  }


}
