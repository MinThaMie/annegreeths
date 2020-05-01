import Route from '@ember/routing/route';

export default class ApplicationRoute extends Route {
  model() {
    return {
      work:[
        {
          id: 0,
          title: "Kerstkaartje 2019",
          description: "Gemaakt met Procreate en geprint op 250gr papier.",
          imageURL: "/images/cards/kerstkaartje.jpeg",
          type: "special"
        },
        {
          id: 1,
          title: "Welkom op school",
          description: "In opdracht van een kleuterjuf voor beginnende leerlingen.",
          imageURL: "/images/cards/welkom_op_school.jpeg",
          type: "special"
        },{
          id: 2,
          title: "Verjaardagskaart",
          description: "Met waterverf en fineliner een grappig verjaardagskaartje gemaakt.",
          imageURL: "/images/cards/walvis-verjaardag.jpeg",
          type: "birthday"
        },{
          id: 3,
          title: "Geboortekaartje",
          description: "Met brushpens een geboortekaartje gemaakt",
          imageURL: "/images/cards/baby-rock.jpeg",
          type: "special"
        },{
          id: 4,
          title: "Afstuderen",
          description: "Met brushpens een kaartje gemaakt voor een Master-diploma uitreiking.",
          imageURL: "/images/cards/smart.jpeg",
          type: "special"
        },{
          id: 5,
          title: "Verjaardagskaart",
          description: "Op craft papier met pastel gell pen een toepasselijk kaartje gemaakt",
          imageURL: "/images/cards/whiskey-birthday.jpeg",
          type: "birthday"
        },{
          id: 6,
          title: "Zo maar",
          description: "Soms moet je zo maar eventjes een kaartje maken. Met waterverf.",
          imageURL: "/images/cards/plantenbak.jpeg",
          type: "special"
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
