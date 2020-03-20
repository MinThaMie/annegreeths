import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    return {
      work:[
        {
          id: 0,
          title: "Kerstkaartje 2019",
          description: "Gemaakt met Procreate en geprint op 250gr papier.",
          imageURL: "/images/cards/kerstkaartje.jpeg"
        },
        {
          id: 1,
          title: "Welkom op school",
          description: "In opdracht van een kleuterjuf voor beginnende leerlingen.",
          imageURL: "/images/cards/welkom_op_school.jpeg"
        },{
          id: 2,
          title: "Verjaardagskaart",
          description: "Met waterverf en fineliner een grappig verjaardagskaartje gemaakt.",
          imageURL: "/images/cards/walvis-verjaardag.jpeg"
        }
      ],
      hobby:[
        {
          id: 3,
          title: "Christmas Blessings",
          description: "Karin markers met geblend effect, in faux-calligraphy effect.",
          imageURL: "/images/handlettering/christmas_blessings.jpeg"
        },
        {
          id: 4,
          title: "Paddenstoel",
          description: "Simpel handletteren met een tekening met Karin markers.",
          imageURL: "/images/handlettering/mushroom.jpeg"
        },{
          id: 5,
          title: "Thanksgiving",
          description: "Simpele krans met faux-calligraphy effect.",
          imageURL: "/images/handlettering/thanksgiving.jpeg"
        }
      ]};
  }
}
