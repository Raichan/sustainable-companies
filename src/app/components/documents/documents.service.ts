import { Injectable } from '@angular/core';

let testDocuments = [
    {id: 1, title: "Uniperin kiistelty hiilivoimala käynnistyi mielenosoitusten keskellä – \"Fortum on vastuussa\", sanoo tunnettu saksalainen aktivisti", author: "Yle", 
    date: "2020-05-30", url: "https://yle.fi/uutiset/3-11377272", 
    companies: [1], rating: 0, description: "Suuresta vastustuksesta huolimatta Fortumin tytäryhtiö Uniper avasi uuden Datteln 4 -hiilivoimalan Saksassa."},
    {id: 2, title: "‘I'm not a robot’: Amazon workers condemn unsafe, grueling conditions at warehouse", author: "The Guardian", 
    date: "2020-02-05", url: "https://www.theguardian.com/technology/2020/feb/05/amazon-workers-protest-unsafe-grueling-conditions-warehouse", 
    companies: [2], rating: 0, description: "Amazonin varastotyöntekijät työskentelevät epäinhimillisissä ja jopa vaarallisissa oloissa."},
    {id: 3, title: "We Asked Oatly About The Blackstone Deal & Here’s What They Said", author: "Green Queen", 
    date: "2020-09-07", url: "https://www.greenqueen.com.hk/we-asked-oatly-about-the-blackstone-deal-heres-what-they-said-controversy/", 
    companies: [3], rating: 1, description: "Oatlyn osakkeista osan osti Blackstone Group, sijoitusjätti jolla on yhteyksiä muun muassa öljy- ja kaasuteollisuuteen ja Amazonin metsänhakkuisiin. Oatly kuitenkin uskoo hyväksi merkiksi sen, että rahoittajat näkevät kasvimaidot kannattavana investointina, ja vakuuttaa ettei Blackstonella ole vaikutusta yrityksen arvoihin tai toimintaan."},
    {id: 4, title: "Oulujoki oli turistirysä ja kuuluisa lohijoki ennen voimalaitoksia – 80 vuotta sitten sovittiin myös kalateistä, mutta niitä odotellaan yhä", author: "Yle", 
    date: "2020-07-15", url: "https://yle.fi/uutiset/3-11448602", 
    companies: [1], rating: 0, description: "Fortum on vuosikymmeniä väistellyt velvollisuuttaan rakentaa kalatie Oulujokeen."},
    {id: 5, title: "Moni suomalainen vaateyritys petrasi Ränkkää brändi vastuullisuusvertailussa", author: "Eetti", 
    date: "2020-09-22", url: "https://eetti.fi/2020/09/22/11626/", 
    companies: [5], rating: 2, description: "Ränkkää brändi -raportissa arvioitiin 35 suomalaisen vaatebrändin ilmasto, ympäristö- ja ihmisoikeustyötä ja läpinäkyvyyttä. Globe Hope pääsi korkeimpaan A-kategoriaan."}
];

@Injectable()
export class DocumentsService {
    getDocuments(){
        return testDocuments;
    }

    getDocumentsByCompany(id:number){
        let result = testDocuments.filter(
            doc => doc.companies.indexOf(id) !== -1);
        return result;
    }
}