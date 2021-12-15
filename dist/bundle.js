(()=>{"use strict";var t,e,n,r,i,s={656:function(t,e,n){var r,i=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0}),e.Assignment=void 0;var s=n(229),o=n(657),a=function(t){function e(e,n,r,i,s,a){var u=t.call(this,e,n,r,i,s,a)||this;return null===o.projectState||void 0===o.projectState||o.projectState.addListenersToAssign((function(t){})),u}return i(e,t),e}(s.Assignments);e.Assignment=a},229:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Assignments=void 0;var n=function(){function t(t,e,n,r,i,s){this.id=t,this.title=e,this.description=n,this.subDateTime=r,this.oralMark=i,this.totalMark=s}return Object.defineProperty(t.prototype,"getTitle",{get:function(){return"Assignment's title: ".concat(this.title)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"setTitle",{set:function(t){this.title=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"getDescription",{get:function(){return"Assignment's description: ".concat(this.description)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"setDescription",{set:function(t){this.description=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"getSubDate",{get:function(){return"Assignment's submission date: ".concat(this.subDateTime)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"setSubDate",{set:function(t){this.subDateTime=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"getOralMark",{get:function(){return this.oralMark},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"setOralMark",{set:function(t){this.oralMark=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"getTotalMark",{get:function(){return this.totalMark},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"setTotalMark",{set:function(t){this.totalMark=t},enumerable:!1,configurable:!0}),t}();e.Assignments=n},404:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Assignment=void 0;var r=n(656);Object.defineProperty(e,"Assignment",{enumerable:!0,get:function(){return r.Assignment}})},117:function(t,e,n){var r,i=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0}),e.Course=void 0;var s=n(966),o=n(657),a=function(t){function e(e,n,r,i,s,a,u){void 0===u&&(u=[]);var c=t.call(this,e,n,r,i,s,a)||this;return c.trainers=u,null===o.projectState||void 0===o.projectState||o.projectState.addListenersToCourse((function(t){})),c}return i(e,t),e}(s.Courses);e.Course=a},966:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Courses=void 0;var n=function(){function t(t,e,n,r,i,s){this.id=t,this.title=e,this.stream=n,this.type=r,this.startDate=i,this.endDate=s}return Object.defineProperty(t.prototype,"getId",{get:function(){return this.id},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"getTitle",{get:function(){return this.title},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"getStream",{get:function(){return this.stream},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"getType",{get:function(){return this.type},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"getStartDate",{get:function(){return this.startDate},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"getEndDate",{get:function(){return this.endDate},enumerable:!1,configurable:!0}),t}();e.Courses=n},834:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Course=void 0;var r=n(117);Object.defineProperty(e,"Course",{enumerable:!0,get:function(){return r.Course}})},801:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Course=e.Trainer=e.Student=e.Assignment=void 0;var r=n(404);Object.defineProperty(e,"Assignment",{enumerable:!0,get:function(){return r.Assignment}});var i=n(77);Object.defineProperty(e,"Student",{enumerable:!0,get:function(){return i.Student}});var s=n(424);Object.defineProperty(e,"Trainer",{enumerable:!0,get:function(){return s.Trainer}});var o=n(834);Object.defineProperty(e,"Course",{enumerable:!0,get:function(){return o.Course}})},77:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Student=void 0;var r=n(412);Object.defineProperty(e,"Student",{enumerable:!0,get:function(){return r.Student}})},412:function(t,e,n){var r,i=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0}),e.Student=void 0;var s=n(630),o=n(657),a=function(t){function e(e,n,r,i,s,a){var u=t.call(this,e,n,r,i,s,a)||this,c=[];return null===o.projectState||void 0===o.projectState||o.projectState.addListenersToStudent((function(t){c=t,console.log(c)})),null===o.projectState||void 0===o.projectState||o.projectState.addListenersToAssign((function(t){console.log(t)})),u}return i(e,t),e}(s.Students);e.Student=a},630:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Students=void 0;var n=function(){function t(t,e,n,r,i,s){this.id=t,this.firstName=e,this.lastName=n,this.dateOfBirth=r,this.tuitionFees=i,this.assignments=s}return Object.defineProperty(t.prototype,"getFirstName",{get:function(){return this.firstName},set:function(t){this.firstName=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"getLastName",{get:function(){return this.lastName},set:function(t){this.lastName=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"getDateOfBirth",{get:function(){return this.dateOfBirth},set:function(t){this.dateOfBirth=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"getFees",{get:function(){return this.tuitionFees},set:function(t){this.tuitionFees=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"howManyAssignments",{get:function(){return this.assignments.length},enumerable:!1,configurable:!0}),t.prototype.getOralMark=function(t){var e;return null===(e=this.assignments.find((function(e){return e.title!==t})))||void 0===e?void 0:e.oralMark},t.prototype.setOralMark=function(t,e){this.assignments.forEach((function(n){n.title===t&&(n.oralMark=e)}))},t.prototype.getTotalMark=function(t){var e;return null===(e=this.assignments.find((function(e){return e.title!==t})))||void 0===e?void 0:e.totalMark},t.prototype.setTotalMark=function(t,e){this.assignments.forEach((function(n){n.title===t&&(n.totalMark=e)}))},t}();e.Students=n},424:(t,e,n)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Trainer=void 0;var r=n(588);Object.defineProperty(e,"Trainer",{enumerable:!0,get:function(){return r.Trainer}})},588:function(t,e,n){var r,i=this&&this.__extends||(r=function(t,e){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])},r(t,e)},function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)});Object.defineProperty(e,"__esModule",{value:!0}),e.Trainer=void 0;var s=n(921),o=n(657),a=function(t){function e(e,n,r,i){var s=t.call(this,e,n,r,i)||this;return null===o.projectState||void 0===o.projectState||o.projectState.addListenersToTrainer((function(t){})),s}return i(e,t),e.prototype.takePartOnCourse=function(){var t=this,e=prompt("In which course do you want to take part");o.projectState.courseState.some((function(t){return t.title===e}))?o.projectState.courseState.forEach((function(n){n.title!==e||n.trainers.push({firstName:t.firstName,lastName:t.lastName})})):alert("Not such course")},e}(s.Trainers);e.Trainer=a},921:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Trainers=void 0;var n=function(){function t(t,e,n,r){this.id=t,this.firstName=e,this.lastName=n,this.subject=r}return Object.defineProperty(t.prototype,"getFirstName",{get:function(){return this.firstName},set:function(t){this.firstName=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"getLastName",{get:function(){return this.lastName},set:function(t){this.lastName=t},enumerable:!1,configurable:!0}),t}();e.Trainers=n},603:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.randomId=e.getDate=void 0,e.getDate=function(t){return new Date(t).toISOString().split("T")[0]},e.randomId=function(){for(var t=[],e="abcdefghijklmnABCDEFGHIJKLMNOPQRSTUVWXYZopqrstuvwxyz1234567890".split("");t.length<=5;)t.push(e[Math.floor(Math.random()*e.length)]);return t.join("")}},177:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.assignMockup=void 0,e.assignMockup=[{id:"z2m6i",title:"Tiertza",description:"ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam",subDateTime:"7/14/2022",oralMark:11,totalMark:74},{id:"HtZw3",title:"Jeromy",description:"suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit",subDateTime:"11/16/2022",oralMark:48,totalMark:69},{id:"oSfHt",title:"Kristen",description:"lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti",subDateTime:"4/19/2022",oralMark:2,totalMark:74},{id:"AkbCs",title:"Prince",description:"pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed",subDateTime:"11/3/2022",oralMark:7,totalMark:80},{id:"HKcCW",title:"Archaimbaud",description:"volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit",subDateTime:"8/11/2022",oralMark:35,totalMark:80},{id:"t4cQQ",title:"Lonnie",description:"morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non",subDateTime:"7/13/2022",oralMark:20,totalMark:65},{id:"kbhUm",title:"Kristoforo",description:"id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris",subDateTime:"9/7/2022",oralMark:26,totalMark:73},{id:"AhDgQ",title:"Joycelin",description:"rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue",subDateTime:"8/16/2022",oralMark:6,totalMark:70},{id:"A21jw",title:"Sullivan",description:"eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu",subDateTime:"4/18/2022",oralMark:33,totalMark:89},{id:"W035a",title:"Hilliard",description:"bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt",subDateTime:"5/8/2022",oralMark:25,totalMark:70}]},843:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.courseMockup=void 0,e.courseMockup=[{id:"pTOUU",title:"Vivyan",stream:"vestibulum",type:"montes",startDate:"12/22/2021",endDate:"6/21/2022",trainers:[]},{id:"YhJnQ",title:"Bryn",stream:"sit",type:"morbi",startDate:"12/8/2022",endDate:"4/15/2022",trainers:[]},{id:"58W09",title:"Hoyt",stream:"tellus",type:"pulvinar",startDate:"7/1/2022",endDate:"9/17/2022",trainers:[]},{id:"5q9vR",title:"Darb",stream:"erat",type:"vitae",startDate:"8/30/2022",endDate:"6/12/2022",trainers:[]},{id:"Y6j9K",title:"Jephthah",stream:"amet",type:"at",startDate:"3/28/2022",endDate:"7/21/2022",trainers:[]},{id:"T4Hcf",title:"David",stream:"nisl",type:"turpis",startDate:"3/30/2022",endDate:"10/28/2022",trainers:[]},{id:"y3OQ9",title:"Cammy",stream:"hac",type:"fusce",startDate:"8/9/2022",endDate:"6/27/2022",trainers:[]},{id:"q2nDO",title:"Bendite",stream:"tellus",type:"dictumst",startDate:"1/11/2022",endDate:"9/4/2022",trainers:[]},{id:"fsz5k",title:"Jehu",stream:"augue",type:"in",startDate:"3/9/2022",endDate:"3/26/2022",trainers:[]},{id:"w8Cb2",title:"Allie",stream:"neque",type:"convallis",startDate:"12/5/2022",endDate:"4/13/2022",trainers:[]}]},726:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.studentMockup=void 0,e.studentMockup=[{id:"ZFg15",firstName:"Tillie",lastName:"McCafferky",dateOfBirth:"7/11/1997",tuitionFees:2067,assignments:[]},{id:"NtlUe",firstName:"Drusi",lastName:"Rewbottom",dateOfBirth:"6/23/1998",tuitionFees:1294,assignments:[]},{id:"Km2L6",firstName:"Warden",lastName:"Huison",dateOfBirth:"6/30/1998",tuitionFees:2282,assignments:[]},{id:"oICSG",firstName:"Crin",lastName:"Mackro",dateOfBirth:"12/19/2008",tuitionFees:2275,assignments:[]},{id:"sLIRb",firstName:"Briney",lastName:"Cicco",dateOfBirth:"7/13/2011",tuitionFees:1738,assignments:[]},{id:"VpWEp",firstName:"Eda",lastName:"Reinhardt",dateOfBirth:"6/9/1998",tuitionFees:766,assignments:[]},{id:"fl42d",firstName:"Atalanta",lastName:"Sinnie",dateOfBirth:"12/6/1994",tuitionFees:1693,assignments:[]},{id:"7gYGv",firstName:"Antonina",lastName:"Devitt",dateOfBirth:"8/27/2004",tuitionFees:789,assignments:[]},{id:"ApDJx",firstName:"Jaynell",lastName:"Goodlet",dateOfBirth:"3/1/2018",tuitionFees:2271,assignments:[]},{id:"SJc5z",firstName:"Gabriella",lastName:"Steen",dateOfBirth:"5/28/2013",tuitionFees:1264,assignments:[]}]},21:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.trainerMockup=void 0,e.trainerMockup=[{id:"UxhnU",firstName:"Roberta",lastName:"Laxston",subject:"odio"},{id:"ur4zl",firstName:"Dulcy",lastName:"Pieroni",subject:"augue"},{id:"UKJwA",firstName:"Dniren",lastName:"Blowin",subject:"placerat"},{id:"ra3Mm",firstName:"Estelle",lastName:"Cowcha",subject:"porttitor"},{id:"D1LLI",firstName:"Kynthia",lastName:"Stockey",subject:"et"},{id:"1k1Xe",firstName:"Randene",lastName:"Le Moucheux",subject:"primis"},{id:"kStgK",firstName:"Ralf",lastName:"Pellamonuten",subject:"at"},{id:"UyRW2",firstName:"Shara",lastName:"Symondson",subject:"nibh"},{id:"SxHyr",firstName:"Thatcher",lastName:"Penberthy",subject:"ligula"},{id:"nweDx",firstName:"Ertha",lastName:"Snarr",subject:"eros"}]},657:function(t,e,n){var r=this&&this.__assign||function(){return r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t},r.apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0}),e.projectState=void 0;var i=n(603),s=n(801),o=n(726),a=n(21),u=n(177),c=n(843),d=function(){function t(){var t=this;this.studentListeners=[],this.trainerListeners=[],this.assignmentListeners=[],this.courseListeners=[],this.studentState=[],this.trainerState=[],this.courseState=[],this.assignmentState=[],o.studentMockup.forEach((function(e){return t.addNewStudent(0,"is",e)})),a.trainerMockup.forEach((function(e){return t.addNewTrainer(0,"is",e)})),c.courseMockup.forEach((function(e){return t.addNewCourse(0,"is",e)})),u.assignMockup.forEach((function(e){return t.addNewAssignment(0,"is",e)})),document.getElementById("studentWithAssign").addEventListener("click",(function(){return t.showStudentsWithAssign()})),document.getElementById("studentAssign").addEventListener("click",(function(){return t.addAssignmentToStudent()})),document.getElementById("courseTrainers").addEventListener("click",(function(){return t.addTrainerInCourse()}))}return t.getInstance=function(){return this.instance||(this.instance=new t),this.instance},t.prototype.addListenersToStudent=function(t){this.studentListeners.push(t)},t.prototype.addListenersToTrainer=function(t){this.trainerListeners.push(t)},t.prototype.addListenersToCourse=function(t){this.courseListeners.push(t)},t.prototype.addListenersToAssign=function(t){this.assignmentListeners.push(t)},t.prototype.addNewStudent=function(t,e,n){var r=this;if(t){var o=void 0,a=void 0,u=void 0;if("isNot"===e){for(;t>0;)o=prompt("Input first name"),a=prompt("Input last name"),u=prompt("Input birth date in mm/dd/yyyy form"),this.studentState.push(new s.Student((0,i.randomId)(),o,a,(0,i.getDate)(u),0,[]));t--}}"is"===e&&this.studentState.push(new s.Student(n.id,n.firstName,n.lastName,n.dateOfBirth,n.tuitionFees,[])),this.studentListeners.forEach((function(t){return t(r.studentState.slice())})),this.assignmentListeners.forEach((function(t){return t(r.assignmentState.slice())}))},t.prototype.addNewTrainer=function(t,e,n){var r=this;if(t){var o=void 0,a=void 0,u=void 0;if("isNot"===e){for(;t>0;)o=prompt("Input first name"),a=prompt("Input last name"),u=prompt("Input type of subject"),this.trainerState.push(new s.Trainer((0,i.randomId)(),o,a,u));t--}}"is"===e&&this.trainerState.push(new s.Trainer(n.id,n.firstName,n.lastName,n.subject)),this.trainerListeners.forEach((function(t){return t(r.trainerState.slice())}))},t.prototype.addNewCourse=function(t,e,n){if(t){var r=void 0,o=void 0,a=void 0,u=void 0,c=void 0;if("isNot"===e){for(;t>0;)r=prompt("Input courses title"),o=prompt("Input steam"),a=prompt("Input type of course"),u=prompt("Input start date of course in mm/dd/yyyy"),c=prompt("Input end date of course in mm/dd/yyyy"),this.courseState.push(new s.Course((0,i.randomId)(),r,o,a,(0,i.getDate)(u),(0,i.getDate)(c),[]));t--}}"is"===e&&this.courseState.push(new s.Course(n.id,n.title,n.stream,n.type,n.startDate,n.endDate));for(var d=0,l=this.courseListeners;d<l.length;d++)(0,l[d])(this.courseState.slice())},t.prototype.addNewAssignment=function(t,e,n){if(t){var r=void 0,o=void 0,a=void 0;if("isNot"===e)for(;t>0;)r=prompt("Input assignment title"),o=prompt("Input assignment description"),a=prompt("Input submission date in mm/dd/yyyy"),this.assignmentState.push(new s.Assignment((0,i.randomId)(),r,o,(0,i.getDate)(a),0,0)),t--}"is"===e&&this.assignmentState.push(new s.Assignment(n.id,n.title,n.description,n.subDateTime,n.oralMark,n.totalMark));for(var u=0,c=this.assignmentListeners;u<c.length;u++)(0,c[u])(this.assignmentState.slice())},t.prototype.addAssignmentToStudent=function(){var t=prompt("Give the title of the assignment");if(this.assignmentState.some((function(e){return e.title===t}))){var e=this.assignmentState.find((function(e){return e.title!==t}));if(e){var n=prompt("Give the name of the student");if(this.studentState.some((function(t){return t.firstName===n}))){var r=this.studentState.find((function(t){return t.firstName!==n}));if(r)return this.studentState.forEach((function(t){t===r&&(t.assignments.push(e),console.log("Assignment ".concat(e.title," added to ").concat(t.firstName)))}))}else alert("No such student exists")}}else alert("No such assignment exists")},t.prototype.addTrainerInCourse=function(){var t=prompt("Give the title of the course"),e=prompt("Give the name of the trainer"),n=this.courseState.filter((function(e){return e.title===t}))[0],i=this.trainerState.filter((function(t){return t.firstName===e}))[0];n&&i?this.courseState.forEach((function(t){t.title===n.title&&(t.trainers.push({firstName:i.firstName,lastName:i.lastName}),console.log(r({},t)))})):alert("No such trainer or course exists")},t.prototype.showStudentsWithAssign=function(){console.log(this.studentState.filter((function(t){return t.assignments.length>0})))},t}();e.projectState=d.getInstance()}},o={};i=function t(e){var n=o[e];if(void 0!==n)return n.exports;var r=o[e]={exports:{}};return s[e].call(r.exports,r,r.exports,t),r.exports}(657),function(){function s(){var s,o,a,u;null===(s=document.getElementById("howManyStudents"))||void 0===s||s.addEventListener("click",(function(){t=+prompt("How many students do you want to add?")})),null===(o=document.getElementById("howManyTrainers"))||void 0===o||o.addEventListener("click",(function(){e=+prompt("How many trainers do you want to add?")})),null===(a=document.getElementById("howManyCourses"))||void 0===a||a.addEventListener("click",(function(){n=+prompt("How many courses do you want to add?")})),null===(u=document.getElementById("howManyAssignments"))||void 0===u||u.addEventListener("click",(function(){r=+prompt("How many assignments do you want to add?")})),document.getElementsByClassName("add-students")[0].addEventListener("click",(function(){i.projectState.addNewStudent(t,"isNot"),t=0})),document.getElementsByClassName("add-trainers")[0].addEventListener("click",(function(){i.projectState.addNewTrainer(e,"isNot"),e=0})),document.getElementsByClassName("add-courses")[0].addEventListener("click",(function(){i.projectState.addNewCourse(n,"isNot"),n=0})),document.getElementsByClassName("add-assignment")[0].addEventListener("click",(function(){i.projectState.addNewAssignment(r,"isNot"),r=0})),document.getElementById("studentState").addEventListener("click",(function(){return console.log("Students",i.projectState.studentState)})),document.getElementById("trainerState").addEventListener("click",(function(){return console.log("Trainer",i.projectState.trainerState)})),document.getElementById("courseState").addEventListener("click",(function(){return console.log("Courses",i.projectState.courseState)})),document.getElementById("assignmentState").addEventListener("click",(function(){return console.log("Assignments",i.projectState.assignmentState)}))}return s.getInstance=function(){return this.instance||(this.instance=new s),this.instance},s}().getInstance()})();