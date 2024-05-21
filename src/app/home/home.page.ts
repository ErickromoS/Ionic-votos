import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { GrafcaBarraComponent } from '../grafca-barra/grafca-barra.component';
import { Chart, ChartType } from 'chart.js/auto'
import { ServicioGraficasService } from '../servicio-graficas.service';
import { Subscription } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { Router, NavigationExtras } from '@angular/router';
import { routes } from '../app.routes';
import { Title } from 'chart.js/dist';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButton, IonHeader, IonToolbar, IonTitle, IonContent],
})
export class HomePage implements OnInit, OnDestroy {
  constructor(public servicioGrafica: ServicioGraficasService, private router: Router) { }
  public chart: Chart | undefined;
  private chartDataSubscription: Subscription | undefined;

  public votosMCSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  public votosMorenaSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  public votosPANSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  public votosOtroSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  public votosVerdeSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);
  public votosPTSubject: BehaviorSubject<number> = new BehaviorSubject<number>(1);


  //Actualizar candidato




  detalles(evento: MouseEvent): void {

    evento.preventDefault();
    const idDetalles = (evento.target as HTMLElement).id;
    console.log("entrando a detalles evento " + idDetalles)

    switch (idDetalles) {
      case "detallePAN":
        this.mostrarDetallePAN("Xochil",
          ["Impulsar políticas de desarrollo rural integral, que promuevan la agricultura sustentable y la diversificación de cultivos, para mejorar la productividad y la calidad de vida de las comunidades campesinas. ",
            "Garantizar el acceso universal a servicios de salud de calidad, especialmente en zonas rurales e indígenas, mediante la construcción y equipamiento de hospitales y clínicas, y el fortalecimiento de los programas de atención primaria. ",
            "Promover la participación política de las mujeres y su acceso a cargos de representación, mediante la implementación de cuotas de género y acciones afirmativas que garanticen su presencia en los espacios de toma de decisiones. "],
          "assets/imgs/xochitl.jpg",
          "Xóchitl Gálvez es una ingeniera agrónoma y activista social nacida en Hidalgo. Ha sido senadora y diputada federal, destacándose por su trabajo en defensa de los derechos de las mujeres y de las comunidades indígenas. ");
        break;
      case "detalleMorena":
        this.mostrarDetalleMorena("Claudia",
          ["Mejorar el transporte público en la Ciudad de México mediante la ampliación de la red de Metrobús y la modernización del sistema de Metro, para reducir los tiempos de traslado y disminuir la congestión vehicular. ",
            "Impulsar programas de movilidad sustentable, como el fomento del uso de bicicletas y la creación de más ciclovías seguras, para reducir la contaminación atmosférica y promover estilos de vida más saludables. ",
            "Implementar políticas de gestión integral de residuos sólidos, incluyendo la separación en origen y el reciclaje, para reducir la generación de basura y promover una cultura de consumo responsable. "],
          "assets/imgs/sheinbaum.jpeg",
          "Claudia Sheinbaum es una destacada científica e investigadora en el campo de la ingeniería ambiental, nacida en la Ciudad de México. Ha ocupado cargos en el gobierno local y federal, destacándose por su enfoque en políticas de sustentabilidad y movilidad urbana.  ");
        break;
      case "detalleMC":
        this.mostrarDetalleMC("Maynez",
          ["Fortalecer el estado de derecho y combatir la impunidad mediante la creación de una Fiscalía General autónoma e independiente, con capacidad para investigar y sancionar los delitos de corrupción y violaciones a los derechos humanos. ",
            "Promover la participación ciudadana en la toma de decisiones mediante consultas populares vinculantes y mecanismos de rendición de cuentas, para garantizar la transparencia y la legitimidad del gobierno. ",
            "Impulsar políticas de inclusión y reconocimiento de los derechos de los pueblos indígenas, respetando su autonomía y promoviendo el diálogo intercultural para resolver conflictos y construir una sociedad más justa y equitativa. "],
          "assets/imgs/maynez.jpg",
          ": Jorge Álvarez Máynez es un abogado y político con una larga trayectoria en la defensa de los derechos humanos y la lucha contra la corrupción. Ha sido diputado federal y ha trabajado en organizaciones de la sociedad civil en defensa de los derechos indígenas. ");
        break;
      case "detallePRD":
        this.mostrarDetallePRD("María Fernández",
          ["Implementar programas de educación sexual integral en todas las escuelas para promover la igualdad de género y prevenir la violencia machista. ",
            "Crear más refugios para mujeres víctimas de violencia doméstica y fortalecer las leyes para proteger sus derechos. "], "assets/imgs/xochitl.jpg",
          "María Fernández es una abogada y activista de derechos humanos nacida en Ciudad de México. Ha dedicado su vida a la defensa de los derechos de las mujeres y de las minorías marginadas.")
        //Actualizar candidato
        break;
      case "detalleVerde":
        this.mostrarDetalleVerde("Javier Morales",
          ["Promover la inversión en tecnologías limpias y sostenibles para combatir el cambio climático y crear empleos verdes. ",
          "Impulsar la digitalización de los servicios públicos para hacerlos más eficientes y accesibles para todos los ciudadanos. "],
          "assets/imgs/xochitl.jpg",
          "Javier Morales es un empresario exitoso en el sector tecnológico, fundador de una startup de renombre en Guadalajara. Ha sido reconocido por su labor filantrópica y su compromiso con la innovación. "
        )
        break;
      case "detallePT":
        this.mostrarDetallePT("Sofía Martínez ",
        ["Implementar políticas de desarrollo regional para reducir las desigualdades económicas entre estados y fomentar el crecimiento inclusivo. ",
        "Reformar el sistema de pensiones para garantizar una jubilación digna para todos los trabajadores, incluyendo a los trabajadores informales. "],
        "assets/imgs/xochitl.jpg",
        "Sofía Martínez es una economista con experiencia en el sector público y privado. Ha ocupado diversos cargos en el gobierno y en organizaciones internacionales, donde se ha destacado por su capacidad de gestión. ")
        
        
    }



  }

  mostrarDetallePAN(title: string, propuestas: string[], imagePath: string, descripcion: string) {
    console.log("mostrando detalles pan")
    const NavigationExtras: NavigationExtras = {
      queryParams: {
        title: title,
        propuestas: propuestas,
        imagePath: imagePath,
        descripcion: descripcion
      }
    }
    this.router.navigate(['/modal-info'], NavigationExtras)
  }

  mostrarDetalleMorena(title: string, propuestas: string[], imagePath: string, descripcion: string) {
    console.log("mostrando detalles morena")
    const NavigationExtras: NavigationExtras = {
      queryParams: {
        title: title,
        propuestas: propuestas,
        imagePath: imagePath,
        descripcion: descripcion
      }
    }
    this.router.navigate(['/modal-info'], NavigationExtras)
  }

  mostrarDetalleMC(title: string, propuestas: string[], imagePath: string, descripcion: string) {
    console.log("mostrando detalles mc")
    const NavigationExtras: NavigationExtras = {
      queryParams: {
        title: title,
        propuestas: propuestas,
        imagePath: imagePath,
        descripcion: descripcion
      }
    }
    this.router.navigate(['/modal-info'], NavigationExtras)
  }

  mostrarDetallePRD(title: string, propuestas: string[], imagePath: string, descripcion: string) {
    console.log("mostrando detalles prd")
    const NavigationExtras: NavigationExtras = {
      queryParams: {
        title: title,
        propuestas: propuestas,
        imagePath: imagePath,
        descripcion: descripcion
      }
    }
    this.router.navigate(['/modal-info'], NavigationExtras)

  }
  mostrarDetalleVerde(title: string, propuestas: string[], imagePath: string, descripcion: string) {
    console.log("mostrando detalles verde")
    const NavigationExtras: NavigationExtras = {
      queryParams: {
        title: title,
        propuestas: propuestas,
        imagePath: imagePath,
        descripcion: descripcion
      }
    }
    this.router.navigate(['/modal-info'], NavigationExtras)

  }
  mostrarDetallePT(title: string, propuestas: string[], imagePath: string, descripcion: string) {
    console.log("mostrando detalles PT")
    const NavigationExtras: NavigationExtras = {
      queryParams: {
        title: title,
        propuestas: propuestas,
        imagePath: imagePath,
        descripcion: descripcion
      }
    }
    this.router.navigate(['/modal-info'], NavigationExtras)

  }

  //Actualizar candidato



  votar(event: MouseEvent): void {
    event.preventDefault()
    const idDelElementoA = (event.target as HTMLElement).id;
    this.enviarVoto(idDelElementoA)
  }


  enviarVoto(idvoto: any): void {
    switch (idvoto) {
      case "btnVotarPan":
        this.servicioGrafica.votarPan();
        break;
      case "btnVotarMorena":
        this.servicioGrafica.votarMorena();
        break;
      case "btnVotarMC":
        this.servicioGrafica.votarMC()
        break;
      case "btnOtro":
        this.servicioGrafica.votarOtro()    //Actualizar candidato
        break;
      case "btnVerde":
        this.servicioGrafica.votarVerde()
        break;
      case "btnPT":
        this.servicioGrafica.votarPT()
        break;
      case "btnPrueba":
        console.log("recarga")

        break;
    }

  }





  votarPan() {
    this.votosPANSubject.next(this.votosPANSubject.value + 1)
    console.log("votos en el servicio " + this.votosPANSubject.value)
  }

  votarMorena() {
    this.votosMorenaSubject.next(this.votosMorenaSubject.value + 1)
    console.log("votos en el servicio " + this.votosMorenaSubject.value)
  }
  votarMC() {
    this.votosMCSubject.next(this.votosMCSubject.value + 1)
    console.log("votos en el servicio " + this.votosMCSubject.value)
  }
  votarOtro() {
    this.votosMCSubject.next(this.votosMCSubject.value + 1)
    console.log("votos en el servicio " + this.votosMCSubject.value)
  }
  votarVerde() {
    this.votosVerdeSubject.next(this.votosVerdeSubject.value + 1)
    console.log("votos en el servicio " + this.votosVerdeSubject.value)
  }
  votarPT(){
    this.votosPTSubject.next(this.votosPTSubject.value+1)
    console.log("votos servicio" + this.votosPTSubject.value)
  }
  //Actualizar candidato




  ngOnInit(): void {
    this.inicializarGrafico();
    this.actualizarGrafica();
    this.subscribeToChartData();
  }

  ngOnDestroy(): void {
    if (this.chartDataSubscription) {
      this.chartDataSubscription.unsubscribe();
    }
  }

  private inicializarGrafico(): void {
    const data = {
      labels: ["Maynez", "Sheiumbaum", "Xochitl", "Maria", "Javier","Sofía Martínez"],     //Actualizar candidato

      datasets: [{
        label: 'Elecciones 2024',
        data: [0, 0, 1, 1, 1,1],     //Actualizar candidato

        fill: false,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: [
          'rgba(255, 128, 0, 1.2)',
          'rgba(86, 7, 12, 1.2)',
          'rgba(0, 0, 255, 1.2)',
          'rgba(255, 255, 0, 1.2)',
          'rgba(0, 255, 0, 1.2)',
          'rgba(255, 0, 0, 1.2)',




          //Actualizar candidato


        ],
        tension: 0.1
      }]
    };

    this.chart = new Chart("chart", {
      type: 'bar' as ChartType,
      data
    });
  }


  private subscribeToChartData(): void {
    this.chartDataSubscription = this.servicioGrafica.votosMCSubject.subscribe(() => {
      this.actualizarGrafica();
    });
    this.chartDataSubscription.add(this.servicioGrafica.votosMorenaSubject.subscribe(() => {
      this.actualizarGrafica();
    }));
    this.chartDataSubscription.add(this.servicioGrafica.votosPanSubject.subscribe(() => {
      this.actualizarGrafica();
    }));
    this.chartDataSubscription.add(this.servicioGrafica.votosOtro.subscribe(() => {
      this.actualizarGrafica();
    }))
    this.chartDataSubscription.add(this.servicioGrafica.votosVerde.subscribe(() => {
      this.actualizarGrafica();
    }))
    this.chartDataSubscription.add(this.servicioGrafica.votosPT.subscribe(() => {
      this.actualizarGrafica();
    }))
    //Actualizar candidato
  }

  private actualizarGrafica(): void {
    if (!this.chart) {
      return;
    }

    const newData = [
      this.servicioGrafica.votosMCSubject.value,
      this.servicioGrafica.votosMorenaSubject.value,
      this.servicioGrafica.votosPanSubject.value,
      this.servicioGrafica.votosOtro.value,
      this.servicioGrafica.votosVerde.value,
      this.servicioGrafica.votosPT.value
      //Actualizar candidato 

    ];

    this.chart.data.datasets[0].data = newData;
    this.chart.update();
  }





}
