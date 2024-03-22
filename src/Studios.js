import React from "react";

export default class Studios extends React.Component {
    constructor(props){
        super();
        this.state = {
            studioName: "",
        }
    }

    componentDidMount = () => {
        let studioId = window.location.href.split("/").pop() // get studio id
        let selectedStudio = studiosData.filter(s => s.id === studioId)[0] // get the studio object
        this.setState({studioName: selectedStudio.name})
    }


    render() {
        return (
            <div>
                <h1>
                    Studio: {this.state.studioName}
                </h1>
            </div>
        )
    }
}

let studiosData = [
    {
        id: "1",
        name: "Renato Pimentel (Producer) - Studio: The Magic Place",
        latitude: -27.601963198850914,  
        longitude: -48.528644369326116,
    },

    {
        id: "2",
        name: "Hd' Music Studio",
        latitude: -27.57907775412093, 
        longitude: -48.499526461184296,
    },

    {
        id: "3",
        name: "Estúdio Jardim Elétriko",
        latitude: -27.588080864549905, 
        longitude: -48.52265169859065 
    },

    {
        id: "4",
        name: "Saara Lab - Music Studio",
        latitude: -27.583730923870228, 
        longitude:  -48.525105639014036,
    },

    {
        id: "5",
        name: "Ozz Estúdio de Criação Musical",
        latitude: -27.574646667889947, 
        longitude: -48.52972482098744,
    },

    {
        id: "6",
        name: "Decibel Estúdio",
        latitude: -27.59370994367972, 
        longitude: -48.54372671630732,
    },

    {
        id: "7",
        name: "Zubi Estúdio",
        latitude: -27.595628881772644, 
        longitude: -48.548201548844055,
    },

    {
        id: "8",
        name: "MAU - Música e Arte Urgente",
        latitude: -27.591407173628927, 
        longitude: -48.54906764546407,
    },

    {
        id: "9",
        name: "Estúdio Núcleo",
        latitude: -27.5847544549416, 
        longitude: -48.58111322036286,
    },
    
    {
        id: "10",
        name: "Alécio Costa Estúdio",
        latitude: -27.603688054730725, 
        longitude: -48.58197931698288,
    },

    {
        id: "11",
        name: "Plugaê Estúdio",
        latitude: -27.604711399390588, 
        longitude: -48.59410466966308,
    },
    
    {
        id: "12",
        name: "Studio 74",
        latitude: -27.579764651205377, 
        longitude: -48.58962983712635,
    },

    {
        id: "13",
        name: "Frawn Estudio Musical",
        latitude: -27.572599407842574, 
        longitude: -48.602765635863236,
    },

    {
        id: "14",
        name: "SunsetStudios",
        latitude: -27.58250293266084, 
        longitude: -48.60889591472582,
    },

    {
        id: "15",
        name: "N4 Master Studio",
        latitude: -27.602585355134927, 
        longitude: -48.62481890730698,
    },

    {
        id: "16",
        name: "Undercave Studio",
        latitude: -27.59154952426586, 
        longitude: -48.63890463155002,
    },

    {
        id: "17",
        name: "Studio Flat Julio Silveira",
        latitude: -27.633137382918214,
        longitude:  -48.66634726126535,
    },

    {
        id: "18",
        name: "Mangue Mix Estúdio",
        latitude: -27.470901484141642, 
        longitude: -48.49381088235802,
    },

    {
        id: "19",
        name: "Estúdio Musical METRÓPOLIS",
        latitude: -27.43901873506621, 
        longitude: -48.39767560667754,
    },

    {
        id: "20",
        name: "Pedra Sonora Estudio",
        latitude: -27.46745514490117, 
        longitude: -48.39573347989612,
    },

    {
        id: "21",
        name: "Studio By Dalton",
        latitude: -27.564596550262593,  
        longitude: -48.617496788128705,
    },

    {
        id: "22",
        name: "Sound Case Produtora",
        latitude: -27.573012799997354,  
        longitude: -48.5326817546041,
    },

    {
        id: "23",
        name: "ValveState Studio",
        latitude: -27.6467745514276,  
        longitude: -48.472735453308395,
    },

    {
        id: "24",
        name: "Da Dulce Estúdio",
        latitude: -27.619068311471292,   
        longitude: -48.6756552919011,
    },

    {
        id: "25",
        name: "Accordion Studio",
        latitude: -27.55580992087887,   
        longitude: -48.63972594644476,
    },

    {
        id: "26",
        name: "Studio Casa Verde - Gravação e estúdio de musica",
        latitude: -27.579868038966456,   
        longitude: -48.619886324333315,
    },

    {
        id: "27",
        name: "Estúdio Euterpe",
        latitude: -27.608996095715856,   
        longitude: -48.5894693256056,
    },

    {
        id: "28",
        name: "Estudio Urbano - Soluções em Áudio",
        latitude: -27.594274543115045,   
        longitude: -48.54473564631302,
    },

    {
        id: "29",
        name: "Estúdio Baqueta Elétrica",
        latitude: -27.541375915576513,   
        longitude: -48.500124734238845,
    },

    {
        id: "30",
        name: "Clube da Resenha Estúdio",
        latitude: -27.59357256959349, 
        longitude: -48.55674451547088,

    },

    {
        id: "31",
        name: "ONDA SONORA",
        latitude: -27.590883129424068, 
        longitude: -48.554438239977365,

    },

    {
        id: "32",
        name: "Amanda de Andrade Voice Over Studio",
        latitude: -27.584912336452266, 
        longitude: -48.547337339115714,

    },

    {
        id: "33",
        name: "Estúdio BAKE @beatsbybake",
        latitude: -27.58921564338694, 
        longitude: -48.55868664220227,

    },

    {
        id: "34",
        name: "TumDumMC",
        latitude: -27.58077024404019,  
        longitude: -48.542178564985484,

    },

    {
        id: "35",
        name: "Estúdio Beretta",
        latitude: -27.595132414661066,  
        longitude: -48.55431685705665,

    },


]