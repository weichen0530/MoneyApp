import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { AuthGuard } from './_guards/auth.guard';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    {
        path: '',
        runGuardsAndResolvers: 'always',
        canActivate: [AuthGuard],
        children: [
            { path: 'members', component: MemberListComponent },
            { path: 'message', component: MessagesComponent },
            { path: 'lists', component: ListsComponent },
            { path: 'customer', component: CustomerListComponent },
            { path: 'inventory', component: InventoryListComponent }
        ]
    },
    { path: 'home', component: HomeComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];
