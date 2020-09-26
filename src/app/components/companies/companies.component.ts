import { CompaniesService } from './companies.service';
import { Company } from '../../models/Company';
import { Component } from '@angular/core';

@Component({
    selector: 'companies',
    template: `
        <h2>{{ title }}</h2>
        Yhteensä: {{ companies.length }}
        <ul>
            <li *ngFor="let company of companies">{{ company.name }}
                <ol *ngIf="company.documents.length > 0">
                    <li *ngFor="let doc of company.documents">
                        <a href="{{ doc.url }}">{{ doc.title }}</a>
                    </li>
                </ol>
            </li>
        </ul>
    `
})
export class CompaniesComponent {
    title = "Yritykset";
    companies:Company[];

    constructor(service: CompaniesService) {
        this.companies = service.getCompanies();
    }
}