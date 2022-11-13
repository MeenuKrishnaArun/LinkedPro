import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
  longText = `The most favorite doll around the world isn't a surprise. Barbie, which is one of the most beloved toys in the world, was searched more than any other doll in 68 countries`;
   longText1=`A teddy bear is a stuffed toy in the form of a bear. Developed apparently simultaneously by toymakers Morris Michtom in the U.S. and Richard Steiff under his aunt Margarete Steiff's company in Germany in the early 20th century, the teddy bear, named after President Theodore Roosevelt, became a popular children's toy and has been celebrated in story.`;
  longText2=`Mickey Mouse is an animated cartoon character co-created in 1928 by Walt Disney and Ub Iwerks. The longtime mascot of The Walt Disney Company, Mickey is an anthropomorphic mouse who typically wears red shorts, large yellow shoes, and white gloves. Taking inspiration from such silent film personalities as Charlie Chaplin’s the Tramp, Mickey is traditionally characterized as a sympathetic underdog who gets by on pluck and ingenuity.`;
   constructor() { }

  ngOnInit(): void {
  }

}
