import { NgClass, NgStyle } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Planet, PlanetMap } from '../models';

interface PlanetKey {
  key: Planet
}

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    NgStyle,
    NgClass
  ],
  selector: 'app-planet',
  standalone: true,
  styleUrl: './planet.component.css',
  templateUrl: './planet.component.html'
})
export class PlanetComponent implements OnInit {

  public imageUrl: string | undefined;
  public title: string | undefined;
  public text: string | undefined;
  public alias: string | undefined;
  public planetKey: string | undefined;

  constructor(
    private readonly route: ActivatedRoute,
  ) {}

  public ngOnInit(): void {
    const key: Planet = (this.route.snapshot.data as PlanetKey).key;
    this.planetKey = key.toLowerCase();
    this.imageUrl = PlanetMap.get(key)?.imageUrl;
    this.title = PlanetMap.get(key)?.title;
    this.text = PlanetMap.get(key)?.text;
    this.alias = PlanetMap.get(key)?.alias;
  }

}
