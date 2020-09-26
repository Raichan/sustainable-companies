import { DocumentsService } from './../documents/documents.service';
import { Injectable } from '@angular/core';

let testCompanies = [
    {id: 1, name: "Fortum", documents: []},
    {id: 2, name: "Amazon", documents: []},
    {id: 3, name: "Oatly", documents: []},
    {id: 4, name: "Ikea", documents: []},
    {id: 5, name: "Globe Hope", documents: []}
];

@Injectable()
export class CompaniesService {

    constructor(private service: DocumentsService){}

    getCompanies(){
        let companies = testCompanies;
        companies.forEach((company) => {
            console.log(company);
            company.documents = this.service.getDocumentsByCompany(company.id);
        });
        console.log(companies);
        return companies;
    }
}