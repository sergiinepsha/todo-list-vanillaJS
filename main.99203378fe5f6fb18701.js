(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"0HMw":function(t,e,i){},QfWi:function(t,e,i){"use strict";i.r(e);var n={addButtonTop:document.getElementById("add-task-top"),addButton:document.getElementById("add-task"),statement:document.querySelector(".statement"),todoList:document.querySelector(".todo-list"),scopeCounter:document.getElementById("scope"),activeCounter:document.getElementById("active"),successfulCounter:document.getElementById("successful")},s=(i("lYjL"),i("lmye"),i("hi3g"),function(t){return t.length?t[t.length-1].id+1:1}),o=function(t){var e=new Date;return{id:s(t),date:e.toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}),describtion:"Click edit and describe your task, please.",isChecked:!1}},a=(i("iPZ8"),i("kypl"),i("wCa+"),function(t){for(var e=t;e.tagName;){if("LI"===e.tagName)return e;e=e.parentNode}}),d={toDo:null,buttonEdit:null,iconEdit:null,iconSave:null,description:null},g={id:null,refs:Object.assign({},d),setIdAndRefs:function(t){var e=a(t);e?(this.id=parseInt(e.id),this.refs.toDo=e,this.refs.buttonEdit=e.querySelector(".task__edit"),this.refs.iconEdit=e.querySelector('svg[data-action="edit"]'),this.refs.iconSave=e.querySelector('svg[data-action="save"]'),this.refs.description=e.querySelector(".task__description")):(this.id=null,this.refs=Object.assign({},d))},getId:function(){return this.id},getRefs:function(){return this.refs},getToDo:function(){return this.refs.toDo},getDescription:function(){return this.refs.description},isEmpty:function(){return!Boolean(this.id)}},c=function(t,e){t.classList.add("hidden"),e.classList.remove("hidden")},u=function(t){var e=t.tagName;return"use"===e?t.parentNode.parentNode.dataset.action:"svg"===e?t.parentNode.dataset.action:void 0},I=function(t,e){return'<div>\n            <label class="task__container-checkbox">\n                <input class="task__checkbox" type="checkbox" '+(e?"checked":"")+'>\n                <span class="task__custom-checkbox"></span>\n            </label>\n            <span class="task__date">'+t+"</span>\n        </div>"},M='<svg data-action="edit" width="18" height="18">\n              <use xlink:href="data:image/svg+xml;base64,PHN2ZyBkaXNwbGF5PSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICAgIDxzeW1ib2wgaWQ9Imljb24tcGx1cyIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgICAgICAgPHBhdGggZD0iTTExIDExdi0xMWgzdjExaDExdjNoLTExdjExaC0zdi0xMWgtMTF2LTNoMTF6Ii8+DQogICAgPC9zeW1ib2w+DQogICAgPHN5bWJvbCBpZD0iaWNvbi1vayIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgICAgICAgPHBhdGggZD0iTTkgMjEuMDM1bC05LTguNjM4IDIuNzkxLTIuODcgNi4xNTYgNS44NzQgMTIuMjEtMTIu NDM2IDIuODQzIDIuODE3eiIvPg0KICAgIDwvc3ltYm9sPg0KICAgIDxzeW1ib2wgaWQ9Imljb24tZWRpdCIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgICAgICAgPHBhdGggZD0iTTE4IDE0LjQ1djYuNTVoLTE2di0xMmg2Ljc0M2wxLjk3OC0yaC0xMC43MjF2MTZoMjB2LTEwLjU3M2wtMiAyLjAyM3ptMS40NzMtMTAuNjE1bDEuNzA3IDEuNzA3LTkuMjgxIDkuMzc4LTIuMjMuNDcyLjUxMi0yLjE2OSA5LjI5Mi05LjM4OHptLS4wMDgtMi44MzVsLTExLjEwNCAxMS4yMTYtMS4zNjEgNS43ODQgNS44OTgtMS4yNDggMTEuMTAzLTExLjIxOC00LjUzNi00LjUzNHoiLz4NCiAgICA8L3N5bWJvbD4NCiAgICA8c3ltYm9sIGlkPSJpY29uLXRyYXNoX2NhbiIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgICAgICAgPHBhdGggZD0iTTE5IDI0aC0xNGMtMS4xMDQgMC0yLS44OTYtMi0ydi0xN2gtMXYtMmg2di0xLjVjMC0uODI3LjY3My0xLjUgMS41LTEuNWg1Yy44MjUgMCAxLjUuNjcxIDEuNSAxLjV2MS41aDZ2MmgtMXYxN2MwIDEuMTA0LS44OTYgMi0yIDJ6bTAtMTloLTE0djE2LjVjMCAuMjc2LjIyNC41LjUuNWgxM2MuMjc2IDAgLjUtLjIyNC41LS41di0xNi41em0tOSA0YzAtLjU1Mi0uNDQ4LTEtMS0xcy0xIC40NDgtMSAxdjljMCAuNTUyLjQ0OCAxIDEgMXMxLS40NDggMS0xdi05em02IDBjMC0uNTUyLS40NDgtMS0xLTFzLTEgLjQ0OC0xIDF2OWMwIC41NTIuNDQ4IDEgMSAxczEtLjQ0OCAxLTF2LTl6bS0yLTdoLTR2MWg0di0xeiIvPg0KICAgIDwvc3ltYm9sPg0KPC9zdmc+#icon-edit"></use>\n          </svg>',r='<svg class="hidden" data-action="save" width="18" height="18">\n              <use xlink:href="data:image/svg+xml;base64,PHN2ZyBkaXNwbGF5PSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICAgIDxzeW1ib2wgaWQ9Imljb24tcGx1cyIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgICAgICAgPHBhdGggZD0iTTExIDExdi0xMWgzdjExaDExdjNoLTExdjExaC0zdi0xMWgtMTF2LTNoMTF6Ii8+DQogICAgPC9zeW1ib2w+DQogICAgPHN5bWJvbCBpZD0iaWNvbi1vayIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgICAgICAgPHBhdGggZD0iTTkgMjEuMDM1bC05LTguNjM4IDIuNzkxLTIuODcgNi4xNTYgNS44NzQgMTIuMjEtMTIuNDM2IDIuODQzIDIuODE3eiIvPg0KICAgIDwvc3ltYm9sPg0KICAgIDxzeW1ib2wgaWQ9Imljb24tZWRpdCIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgICAgICAgPHBhdGggZD0iTTE4IDE0LjQ1djYuNTVoLTE2di0xMmg2Ljc0M2wxLjk3OC0yaC0xMC43MjF2MTZoMjB2LTEwLjU3M2wtMiAyLjAyM3ptMS40NzMtMTAuNjE1bDEuNzA3IDEuNzA3LTkuMjgxIDkuMzc4LTIuMjMuNDcyLjUxMi0yLjE2OSA5LjI5Mi05LjM4OHptLS4wMDgtMi44MzVsLTExLjEwNCAxMS4yMTYtMS4zNjEgNS43ODQgNS44OTgtMS4yNDggMTEuMTAzLTExLjIxOC00LjUzNi00LjUzNHoiLz4NCiAgICA8L3N5bWJvbD4NCiAgICA8c3ltYm9sIGlkPSJpY29uLXRyYXNoX2NhbiIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgICAgICAgPHBhdGggZD0iTTE5IDI0aC0xNGMtMS4xMDQgMC0yLS44OTYtMi0ydi0xN2gtMXYtMmg2di0xLjVjMC0uODI3LjY3My0xLjUgMS41LTEuNWg1Yy44MjUgMCAxLjUuNjcxIDEuNSAxLjV2MS41aDZ2MmgtMXYxN2MwIDEuMTA0LS44OTYgMi0yIDJ6bTAtMTloLTE0djE2LjVjMCAuMjc2LjIyNC41LjUuNWgxM2MuMjc2IDAgLjUtLjIyNC41LS41di0xNi41em0tOSA0YzAtLjU1Mi0uNDQ4LTEtMS0xcy0xIC40NDgtMSAxdjljMCAuNTUyLjQ0OCAxIDEgMXMxLS40NDggMS0xdi05em02IDBjMC0uNTUyLS40NDgtMS0xLTFzLTEgLjQ0OC0xIDF2OWMwIC41NTIuNDQ4IDEgMSAxczEtLjQ0OCAxLTF2LTl6bS0yLTdoLTR2MWg0di0xeiIvPg0KICAgIDwvc3ltYm9sPg0KPC9zdmc+#icon-ok"</use>\n          </svg>',D='<svg  width="18" height="18">\n              <use xlink:href="data:image/svg+xml;base64,PHN2ZyBkaXNwbGF5PSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPg0KICAgIDxzeW1ib2wgaWQ9Imljb24tcGx1cyIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgICAgICAgPHBhdGggZD0iTTExIDExdi0xMWgzdjExaDExdjNoLTExdjExaC0zdi0xMWgtMTF2LTNoMTF6Ii8+DQogICAgPC9zeW1ib2w+DQogICAgPHN5bWJvbCBpZD0iaWNvbi1vayIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgICAgICAgPHBhdGggZD0iTTkgMjEuMDM1bC05LTguNjM4IDIuNzkxLTIuODcgNi4xNTYgNS44NzQgMTIuMjEtMTIuNDM2IDIuODQzIDIuODE3eiIvPg0KICAgIDwvc3ltYm9sPg0KICAgIDxzeW1ib2wgaWQ9Imljb24tZWRpdCIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgICAgICAgPHBhdGggZD0iTTE4IDE0LjQ1djYuNTVoLTE2di0xMmg2Ljc0M2wxLjk3OC0yaC0xMC43MjF2MTZoMjB2LTEwLjU3M2wtMiAyLjAyM3ptMS40NzMtMTAuNjE1bDEuNzA3IDEuNzA3LTkuMjgxIDkuMzc4LTIuMjMuNDcyLjUxMi0yLjE2OSA5LjI5Mi05LjM4OHptLS4wMDgtMi44MzVsLTExLjEwNCAxMS4yMTYtMS4zNjEgNS43ODQgNS44OTgtMS4yNDggMTEuMTAzLTExLjIxOC00LjUzNi00LjUzNHoiLz4NCiAgICA8L3N5bWJvbD4NCiAgICA8c3ltYm9sIGlkPSJpY29uLXRyYXNoX2NhbiIgdmlld0JveD0iMCAwIDI0IDI0Ij4NCiAgICAgICAgPHBhdGggZD0iTTE5IDI0aC0xNGMtMS4xMDQgMC0yLS44OTYtMi0ydi0xN2gtMXYtMmg2di0xLjVjMC0uODI3LjY3My0xLjUgMS41LTEuNWg1Yy44MjUgMCAxLjUuNjcxIDEuNSAxLjV2MS41aDZ2MmgtMXYxN2MwIDEuMTA0LS44OTYgMi0yIDJ6bTAtMTloLTE0djE2LjVjMCAuMjc2LjIyNC41LjUuNWgxM2MuMjc2IDAgLjUtLjIyNC41LS41di0xNi41em0tOSA0YzAtLjU1Mi0uNDQ4LTEtMS0xcy0xIC40NDgtMSAxdjljMCAuNTUyLjQ0OCAxIDEgMXMxLS40NDggMS0xdi05em02IDBjMC0uNTUyLS40NDgtMS0xLTFzLTEgLjQ0OC0xIDF2OWMwIC41NTIuNDQ4IDEgMSAxczEtLjQ0OCAxLTF2LTl6bS0yLTdoLTR2MWg0di0xeiIvPg0KICAgIDwvc3ltYm9sPg0KPC9zdmc+#icon-trash_can"</use>\n          </svg>',L=function(){return'<div>\n            <button class="task__edit" type="button" data-action="edit">\n                '+M+"\n                "+r+'\n            </button>\n            <button class="task__remove" type="button" data-action="remove">\n                '+D+"\n            </button>\n        </div>"},C=function(t){var e=t.id,i=t.date,n=t.describtion,s=t.isChecked;return'<li class="todo-list__item" id='+e+'>\n            <div class="task__control">\n                '+I(i,s)+"\n                "+L()+'\n            </div>\n            <p class="task__description '+(s?"task__description--checked":"")+'">'+n+"</p>\n        </li>"},T={renderStatement:function(t){t?n.statement.classList.add("hidden"):n.statement.classList.remove("hidden")},renderToDoList:function(t){n.todoList.innerHTML=t.textContent},renderCounters:function(){var t=n.scopeCounter,e=n.activeCounter,i=n.successfulCounter,s=S.calcCounters(),o=s.scope,a=s.successful,d=s.active;t.textContent=o,i.textContent=a,e.textContent=d},renderTask:function(t){n.todoList.insertAdjacentHTML("afterbegin",C(t))},removeToDo:function(t){t.remove()},onChecked:function(t){t.classList.toggle("task__description--checked")},editToDo:function(){var t=g.getRefs(),e=t.buttonEdit,i=t.iconEdit,n=t.iconSave,s=t.description;s.setAttribute("contenteditable","true"),"Click edit and describe your task, please."===s.textContent&&(s.textContent=""),s.focus(),s.onfocus=function(){return!0},c(i,n),e.dataset.action="save"},saveToDo:function(){var t=g.getRefs(),e=t.buttonEdit,i=t.iconEdit,n=t.iconSave,s=t.description;s.setAttribute("contenteditable","false"),s.onfocus=null,c(n,i),e.dataset.action="edit"}},j=(i("Muwe"),i("aZFp"),function(t){return t.length<3||t.length>450?(alert("The description must be between 3 and 450 symbols"),!1):!t.split(" ").some((function(t){return t.length>25}))||(alert("The maximum word length must be no more than 25 symbols"),!1)}),N={removeTask:function(){var t=g.getId(),e=g.getToDo();v.removeTask(t),T.removeToDo(e),T.renderCounters(),S.renderStatement()},editTaskDescription:function(){T.editToDo()},saveTaskDescription:function(){var t=g.getId(),e=g.getDescription().textContent;j(e)&&(v.updateDescription(t,e),T.saveToDo())}},l=function(t){var e=N.removeTask,i=N.editTaskDescription,n=N.saveTaskDescription;switch(t){case"remove":e();break;case"edit":i();break;case"save":n()}},x=function(t){var e=g.getDescription();if(!g.isEmpty()&&e.onfocus){if("INPUT"===t.tagName&&(t.checked=!t.checked),function(t){var e=g.getId(),i=a(t);if(i)return parseInt(i.id)===e||void 0}(t)){var i=function(t){var e=u(t);if(e)return"save"===e?e:void 0}(t);if(i)return l(i),!0;if(e===t)return!0}return alert("You have an unsaved task. Click save, please."),!0}},A={getTasks:function(){try{return JSON.parse(window.localStorage.getItem("tasks"))}catch(t){alert("Your browser don't support Local Storage!")}},saveTasks:function(t){window.localStorage.setItem("tasks",JSON.stringify(t))}},v={tasks:A.getTasks()||[],getTasks:function(){return this.tasks},addTask:function(t){this.tasks=[].concat(this.tasks,[t]),A.saveTasks(this.tasks)},removeTask:function(t){this.tasks=this.tasks.filter((function(e){return e.id!==t})),A.saveTasks(this.tasks)},updateChecked:function(t){this.tasks=this.tasks.map((function(e){return e.id===t&&(e.isChecked=!e.isChecked),e})),A.saveTasks(this.tasks)},updateDescription:function(t,e){this.tasks=this.tasks.map((function(i){return i.id===t&&(i.describtion=e),i})),A.saveTasks(this.tasks)}},m=function(t){if("INPUT"===t.tagName){var e=g.getId(),i=g.getDescription();v.updateChecked(e),T.onChecked(i),T.renderCounters()}},E=function(t){var e=u(t);l(e)},k={renderStatement:function(){var t=v.getTasks();if(t.length<=1){var e=Boolean(t.length);T.renderStatement(e)}},renderToDoList:function(){var t=v.getTasks(),e=new DocumentFragment;t.map((function(t){e.prepend(C(t))})),T.renderToDoList(e),T.renderCounters()},addTask:function(){var t=v.getTasks(),e=o(t);v.addTask(e),T.renderTask(e),T.renderCounters(),k.renderStatement()},onClickToDoList:function(t){x(t)||(g.setIdAndRefs(t),g.isEmpty()||(m(t),E(t)))},calcCounters:function(){var t=v.getTasks(),e=t.length,i=t.filter((function(t){return t.isChecked})).length;return{scope:e,successful:i,active:e-i}}},S=k,y=(i("0HMw"),n.addButtonTop),f=n.addButton,h=n.todoList,b=S.renderStatement,p=S.renderToDoList,w=S.addTask,z=S.onClickToDoList;b(),p(),y.addEventListener("click",w),f.addEventListener("click",w),h.addEventListener("click",(function(t){var e=t.target;return z(e)}))}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.99203378fe5f6fb18701.js.map