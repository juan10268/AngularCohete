import { Component, OnInit } from '@angular/core';
import { ControlService } from '../service/control.service';

@Component({
  selector: 'app-cohete',
  templateUrl: './cohete.component.html',
  styleUrls: ['./cohete.component.scss']
})
export class CoheteComponent implements OnInit {
  segundosCuentaRegresiva: number;
  nombrePlaneta: string;
  coordenadasPlaneta: string;

  constructor(private controlService: ControlService) { }

  ngOnInit() {
  }

  getCuentaRegresiva() {
    const contador = this.segundosCuentaRegresiva;
    const intervaloSegundos = setInterval(() => {
      this.segundosCuentaRegresiva--;
      if (contador < 0 ) {
        clearInterval(intervaloSegundos);
      }
    }, 1000);
  }

  getNombrePlaneta(nombrePlaneta) {
    this.controlService.getIgnicion(nombrePlaneta).subscribe((data: any) => {
      data.forEach(element => element.selector = false);
      this.coordenadasPlaneta = data[2];
      this.nombrePlaneta = data[0] + this.coordenadasPlaneta;
      });
    }
  }

