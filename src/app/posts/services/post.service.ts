import { Injectable } from '@angular/core';
import { Observable, Subject,Subscriber, timer } from 'rxjs';
import { Comment, PostModel, Reaction, ReactionSummary, User } from 'src/app/model/post';
import { NgxSpinnerService } from 'ngx-spinner';
import { PostModule } from '../post.module';


@Injectable({
  providedIn: 'root'
})
export class PostService {
  hideflag:boolean=false;
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
        }],
        Likes:[{
          userId: 'priya@gmail.com',
          name: 'Riya S Raj',
          role: 'student',
          avatarUrl:"https://wallpaperset.com/w/full/1/0/0/191473.jpg"},
          {

          userId: 'tara@gmail.com',
          name: 'Renju Sruthy',
          role: 'teacher',
          avatarUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLmEAWNLfALv_mJ57CnBH4YhCWiNtWobUx5FB10mhEo5oCRgkeqcoqXkbdhfUlYIEun9k&usqp=CAU"},
          {
            
          userId: 'priya@gmail.com',
            name: 'Leena George',
            role: 'student',
            avatarUrl:"https://1.bp.blogspot.com/-k3XlNuOeN8U/YCj4bLikxKI/AAAAAAAAhcc/G2pOo6LKr384c0KYvu8Or1RmvZBzltCpgCLcBGAsYHQ/s720/50%2B%252B%2BWhatsapp%2BBeautiful%2BDP%2BCollection%2B2021%2B%252818%2529.jpg"}],

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
        }] ,
        Likes:[{
               userId: 'athi@gmail.com',
               name: 'Athul S Raj',
               role: "designer",
               avatarUrl:"https://149785820.v2.pressablecdn.com/wp-content/uploads/2020/11/the-inn-on-biltmore-estate-3.jpg"},
               {

            
               userId: 'athi@gmhail.com',
               name: 'Arya Tampi',
               role: "designer",
               avatarUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWG3rOZKJsm0rrrhRXZAZ9Xj1_Rzup0xFoIbPWRe-r2gyyrqMudy1f1dfVk0yX9VkPhog&usqp=CAU"},
               {
                userId: 'athi@gmail.com',
                name: 'Payal AS',
                role: 'designer',
                avatarUrl:"https://us.123rf.com/450wm/jickaro/jickaro2210/jickaro221000266/192835295-adorable-deer-on-a-bokeh-background-with-snow-christmas-background-concept-3d-render.jpg?ver=6"}],

       
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
    let post = this.posts.find((item) => item.postId == postid);
    post?.comments?.push(comment)
    
  }
  addLikes(like:User,postid:string)
  {
    let post = this.posts.find((item)=> item.postId== postid);
    post?.Likes?.push(like)
   
  }
  DeleteLikes(postid:string,userId:string)
  {
      let post  =  this.posts.find((item)=> item.postId == postid);
      if(post && post.Likes)
      {
        let index =   post.Likes.findIndex((item)=>item.userId ==  userId)
        post?.Likes?.splice(index,1)
      }  
    
   }
   
   HideShowCommentEmitter=new Subject<boolean>();
   eventraised(data:boolean)
   {
    this.HideShowCommentEmitter.next(data);
   }
}
