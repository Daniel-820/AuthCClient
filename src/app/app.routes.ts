import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { RegisterationComponent } from './user/registeration/registeration.component';
import { LoginComponent } from './user/login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { authGuard } from './shared/auth.guard';
import { AdminOnlyComponent } from './autherizeDemo/admin-only/admin-only.component';
import { AdminOrTeacherComponent } from './autherizeDemo/admin-or-teacher/admin-or-teacher.component';
import { ApplyForMaternityLeaveComponent } from './autherizeDemo/apply-for-maternity-leave/apply-for-maternity-leave.component';
import { LibraryMembersOnlyComponent } from './autherizeDemo/library-members-only/library-members-only.component';
import { Under10AndFemaleComponent } from './autherizeDemo/under10-and-female/under10-and-female.component';
import { MainLayoutsComponent } from './layouts/main-layouts/main-layouts.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { claimReq } from './utils/claim-req-utils';

export const routes: Routes = [
    { path: "", redirectTo: '/signin', pathMatch: "full" },
    {
        path: '', component: UserComponent,
        children: [
            { path: 'signup', component: RegisterationComponent },
            { path: 'signin', component: LoginComponent },

        ]

    },
    {
        path: "", component: MainLayoutsComponent,canActivate:[authGuard],
        canActivateChild:[authGuard],
        children: [

            {
                path: 'dashboard', component: DashboardComponent,
              
            },
            {
                path: 'admin-only', component: AdminOnlyComponent,
              data:{claimReq:claimReq.adminOnly}  
            },
            {
                path: 'admin-or-teacher', component: AdminOrTeacherComponent,
                data:{claimReq:claimReq.adminOrTeacher}
            },
            {
                path: 'apply-for-maternity-leave', component: ApplyForMaternityLeaveComponent,
                data:{claimReq:claimReq.femaleAndTeacher}
            },
            {
                path: 'library-members-only', component: LibraryMembersOnlyComponent,
                data:{claimReq:claimReq.hasLibraryId}
            },
            {
                path: 'under-10-and-female', component: Under10AndFemaleComponent,
                data:{claimReq:claimReq.femaleAndBelow10}
                
            },
            {
                path: 'forbidden', component: ForbiddenComponent,
                
            }
        ]
    }
];
