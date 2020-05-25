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
        },{
          id: 7,
          title: "Disneyland",
          description: "Ook voor persoonlijke gelegenheden kan ik een kaartje maken. Zoals een leuk tripje!",
          imageURL: "/images/cards/disneyland.jpeg",
          type: "special"
        },{
          id: 8,
          title: "Geboortekaartje",
          description: "Een zoon, dat moet gevierd worden! Met brushpens en een waterverf-look",
          imageURL: "/images/cards/hoera-zoon.jpeg",
          type: "special"
        },{
          id: 9,
          title: "Beverschap",
          description: "Een beetje humor helpt een hoop als je je niet zo goed voelt!",
          imageURL: "/images/cards/beverschap.jpeg",
          type: "special"
        },{
          id: 10,
          title: "Beterschap",
          description: "Ook in het Engels kun je iemand een glimlach bezorgen!",
          imageURL: "/images/cards/get-whale.jpeg",
          type: "special"
        },

      ],
      hobby:[
        {
          id: 1,
          title: "Christmas Blessings",
          description: "Karin markers met geblend effect, in faux-calligraphy effect.",
          imageURL: "/images/handlettering/christmas_blessings.jpeg",
          type: 'brushlettering'
        },
        {
          id: 2,
          title: "Paddenstoel",
          description: "Simpel handletteren met een tekening met Karin markers.",
          imageURL: "/images/handlettering/mushroom.jpeg",
          type: 'fineliners'
        },{
          id: 3,
          title: "Thanksgiving",
          description: "Simpele krans met faux-calligraphy effect.",
          imageURL: "/images/handlettering/thanksgiving.jpeg",
          type: 'fineliners'
        },{
          id: 4,
          title: "Courage",
          description: "Zwarte achtergrond met simpele gouden en witte letters.",
          imageURL: "/images/handlettering/courage.jpeg",
          type: ''
        },{
          id: 5,
          title: "Keep smiling",
          description: "Een negatief effect door een mal te maken en met brushpens over te trekken.",
          imageURL: "/images/handlettering/keep-smiling.jpeg",
          type: 'brushlettering'
        },{
          id: 6,
          title: "I am enough",
          description: "Handletteren gecombineerd met Zentangle.",
          imageURL: "/images/handlettering/zentangle.jpeg",
          type: 'fineliners'
        },{
          id: 7,
          title: "Live in hope",
          description: "Brushlettering met een fade.",
          imageURL: "/images/handlettering/live-in-hope.jpeg",
          type: 'brushlettering'
        },{
          id: 8,
          title: "Set your path",
          description: "Zwart met goud is altijd een goede combinatie.",
          imageURL: "/images/handlettering/set-your-path.jpeg",
          type: 'fineliners'
        }
      ]};
  }
}
