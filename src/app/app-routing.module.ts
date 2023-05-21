import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SourceComponent } from './source/source.component';
import { ServerComponent } from './server/server.component';
import { MembersComponent } from './members/members.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'source', component: SourceComponent },
  { path: 'server', component: ServerComponent },
  { path: 'members', component: MembersComponent },
  { path: 'projects', component: ProjectsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
