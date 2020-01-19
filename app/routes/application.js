import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    return [
      {
        id: 0,
        title: "Kerstkaartje 2019",
        description: "Gemaakt met Procreate en geprint op 250gr papier",
        imageURL: "/images/cards/kerstkaartje.jpeg"
      },
      {
        id: 1,
        title: "Welkom op school",
        description: "In opdracht van een kleuterjuf voor beginnende leerlingen",
        imageURL: "/images/cards/welkom_op_school.jpeg"
      },{
        id: 2,
        title: "Verjaardagskaart",
        description: "Met waterverf en fineliner een grappig verjaardagskaartje gemaakt.",
        imageURL: "/images/cards/walvis-verjaardag.jpeg"
      }
    ];
  }
}
