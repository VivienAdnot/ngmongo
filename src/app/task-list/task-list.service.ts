import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class TaskListService {
    private TASKS_ENDPOINT = 'https://wt-731b6cc859f639106036fe797f5a6b13-0.run.webtask.io/tasks';

    constructor(private authHttp: AuthHttp) {}

    loadTasks$(): Observable<any> {
        return this.authHttp.get(this.TASKS_ENDPOINT);
    }

    addTask$(task): Observable<any> {
        return this.authHttp.post(this.TASKS_ENDPOINT, {
            description: task
        });
    }

    deleteTask$(task): Observable<any> {
        return this.authHttp.delete(this.TASKS_ENDPOINT + '?id=' + task._id);
    }
}