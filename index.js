const express = require ('express');
const cors = require ('cors');
const bunyan = require ('bunyan');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(cors());
app.use(express.json());

const logger = bunyan.createLogger({name: 'Proyecto Servidor'})


const triage =[

    {
        id:1,
        text: 'Everything you loved about the original Triage is back-only better. Download Triage 2 on the App Store today.'
    },
    {
        id:2,
        text:'Unread messages appear in a stack of cards, like this.'
    },
    {
        id:3,
        text:'Or create your own custom workflow.'
    },
    {
        id:4,
        text:'Open the message to view the whole thread'
    },
    {
        id:5,
        text:'Send a quick reply without leaving the app.'
    },{
        id:6,
        text: 'Works with Gmail, iCloud & IMAP', img: 'correo.png', color:'#007AFF'
    },{
        id:7,
        text: 'All processing happens on device', img:'card2.png', color: '#ffb800'
    },{
        id:8, 
        text:'Your data is yours to stay', img :'card3.png', color: '#ff2d55'
    },{
        id:9,
        text:'Supports dark mode', img:'card4.png', color:'#000000'
    },{
        id:10,
        text:'Free to use. Or pay for more features.', img:'card5.png', color:'#7000ff'
    }, {
        id:11,
        text:'Built & maintained by indie developers', img:'card6.png', color:'#ffffff'
    }
]

const praise = [
    { id: 1, 
      text: 'Since I’ve been using Triage, I’m more caught up on my email than I have been in years.', img:'brag1.png'

    },
    { id: 2,
     text: 'If you’re constantly battling to keep your email account at inbox zero, Triage for iOS could be worth a look.', img:'brag2.png'

     },
    { id: 3, 
      text: 'Triage makes it feel seamless, and even fun, to achieve if not Inbox Zero at least Inbox Zen.', img:'brag3.png'

     },
    { id: 4, 
      text: 'Triage provides the first aid necessary to get your inbox back in fighting shape.', img:'brag4.png'

    },
    { id: 5, 
      text: 'Triage is a boon to those who have struggled to keep their inboxes clean and organized.', img:'brag5.png'

     },
    { id: 6, 
      text: 'Triage is my new favorite email app for iPhone.', img:'brag6.png'

     }
  ];

  const footer = [

    {id:1,
      text : 'FAQ'
    },
    {
     id:2,
     text: 'Privacy'

    },{
     id:3,
     text:'Terms'
    },
    {
     id:4,
     text: 'Security'
    }
]



app.get('/triage', (req, res, next) => {
    try {
        res.json(triage);
    } catch (error) {
        next(error);
    }
});

app.get('/praise', (req, res, next) => {
    try {
        res.json(praise);
    } catch (error) {
        next(error);
    }
});

app.get('/footer', (req, res, next) => {
    try {
        res.json(footer);
    } catch (error) {
        next(error);
    }
});

//Midleware
app.use((err, req, res, next) => {
    logger.error(err); 
    res.status(500).json('Error en la API');
});




app.listen(PORT,()=>{
    logger.info('Servidor Levantado')
})