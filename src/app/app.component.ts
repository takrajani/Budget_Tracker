import { Component } from '@angular/core';
import { ChartComponent } from "./components/chart/chart.component";
import { DetailsComponent } from "./components/details/details.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChartComponent, DetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'budget_tracker';
}
