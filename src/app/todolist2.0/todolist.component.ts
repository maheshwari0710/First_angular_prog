import{ Component } from '@angular/core';

@Component({
        selector: 'app_todo_list',
        templateUrl: './todo-list.component.html',
        styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent{
    activities: { name: string; done: boolean }[]=[
        { name: 'Swimming', done: false},
        { name: 'Breakfast', done: false},
        { name: 'College', done: false},
        { name: 'Shopping', done: false},
        { name: 'Dinner', done: false},
    ];

    newActivity(){

        addActivity(){
            if(this.newActivity){
                this.activities.push({ name: this.newActivity, done: false });
                this.newActivity = '';
            }
        }
    }
}