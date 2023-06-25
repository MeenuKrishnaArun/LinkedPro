import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {
  longText = `Some beaches around the world glow at night. This natural phenomenon is caused by phytoplankton in the water that gives off light when agitated by the movement of waves and currents. These microorganisms can be seen at beaches in the Maldives, Puerto Rico, the Everglades, and many more around the world.`;
  longText1 = 'The northern lights are an atmospheric phenomenon thats regarded the Holy Grail of skywatching.';
  longText2 = 'Much like rainbows, these colorful nocturnal arches occur when light (from the moon, in this case) reflects and refracts off water droplets in the sky. But moonbows are much more rare than rainbows—the natural phenomenon happens only when the moon is very low, the sky is dark, and rain is falling opposite the moon. '
   constructor() { }

  ngOnInit(): void {
  }

}
