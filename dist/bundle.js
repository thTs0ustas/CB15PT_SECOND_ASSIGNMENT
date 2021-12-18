(()=>{"use strict";var t={656:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Assignment=void 0;const i=s(229);class a extends i.Assignments{constructor(t,e,s,i,a,r,n){super(t,e,s,i,a,r,n)}}e.Assignment=a},229:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Assignments=void 0,e.Assignments=class{constructor(t,e,s,i,a,r,n){this.id=t,this.title=e,this.partOfCourse=s,this.description=i,this.subDateTime=a,this.oralMark=r,this.totalMark=n}get getTitle(){return`Assignment's title: ${this.title}`}set setTitle(t){this.title=t}get getDescription(){return`Assignment's description: ${this.description}`}set setDescription(t){this.description=t}get getSubDate(){return`Assignment's submission date: ${this.subDateTime}`}set setSubDate(t){this.subDateTime=t}get getOralMark(){return this.oralMark}set setOralMark(t){this.oralMark=t}get getTotalMark(){return this.totalMark}set setTotalMark(t){this.totalMark=t}}},404:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Assignment=void 0;var i=s(656);Object.defineProperty(e,"Assignment",{enumerable:!0,get:function(){return i.Assignment}})},117:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Course=void 0;const i=s(966);class a extends i.Courses{constructor(t,e,s,i,a,r,n=[],o=[]){super(t,e,s,i,a,r),this.trainers=n,this.students=o}}e.Course=a},966:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Courses=void 0,e.Courses=class{constructor(t,e,s,i,a,r){this.id=t,this.title=e,this.stream=s,this.type=i,this.startDate=a,this.endDate=r}get getId(){return this.id}get getTitle(){return this.title}get getStream(){return this.stream}get getType(){return this.type}get getStartDate(){return this.startDate}get getEndDate(){return this.endDate}}},834:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Course=void 0;var i=s(117);Object.defineProperty(e,"Course",{enumerable:!0,get:function(){return i.Course}})},801:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Course=e.Trainer=e.Student=e.Assignment=void 0;var i=s(404);Object.defineProperty(e,"Assignment",{enumerable:!0,get:function(){return i.Assignment}});var a=s(77);Object.defineProperty(e,"Student",{enumerable:!0,get:function(){return a.Student}});var r=s(424);Object.defineProperty(e,"Trainer",{enumerable:!0,get:function(){return r.Trainer}});var n=s(834);Object.defineProperty(e,"Course",{enumerable:!0,get:function(){return n.Course}})},77:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Student=void 0;var i=s(412);Object.defineProperty(e,"Student",{enumerable:!0,get:function(){return i.Student}})},412:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Student=void 0;const i=s(630);class a extends i.Students{constructor(t,e,s,i,a,r){super(t,e,s,i,a,r)}}e.Student=a},630:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Students=void 0,e.Students=class{constructor(t,e,s,i,a,r){this.id=t,this.firstName=e,this.lastName=s,this.dateOfBirth=i,this.tuitionFees=a,this.assignments=r}get getFirstName(){return this.firstName}set getFirstName(t){this.firstName=t}get getLastName(){return this.lastName}set getLastName(t){this.lastName=t}get getDateOfBirth(){return this.dateOfBirth}set getDateOfBirth(t){this.dateOfBirth=t}get getFees(){return this.tuitionFees}set getFees(t){this.tuitionFees=t}get howManyAssignments(){return this.assignments.length}getOralMark(t){var e;return null===(e=this.assignments.find((e=>e.title!==t)))||void 0===e?void 0:e.oralMark}setOralMark(t,e){this.assignments.forEach((s=>{s.title===t&&(s.oralMark=e)}))}getTotalMark(t){var e;return null===(e=this.assignments.find((e=>e.title!==t)))||void 0===e?void 0:e.totalMark}setTotalMark(t,e){this.assignments.forEach((s=>{s.title===t&&(s.totalMark=e)}))}}},424:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Trainer=void 0;var i=s(588);Object.defineProperty(e,"Trainer",{enumerable:!0,get:function(){return i.Trainer}})},588:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Trainer=void 0;const i=s(921);class a extends i.Trainers{constructor(t,e,s,i){super(t,e,s,i)}}e.Trainer=a},921:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Trainers=void 0,e.Trainers=class{constructor(t,e,s,i){this.id=t,this.firstName=e,this.lastName=s,this.subject=i}get getFirstName(){return this.firstName}set getFirstName(t){this.firstName=t}get getLastName(){return this.lastName}set getLastName(t){this.lastName=t}}},603:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.randomId=e.getDate=void 0,e.getDate=t=>new Date(t).toISOString().split("T")[0],e.randomId=()=>{const t=[],e="abcdefghijklmnABCDEFGHIJKLMNOPQRSTUVWXYZopqrstuvwxyz1234567890".split("");for(;t.length<=5;)t.push(e[Math.floor(Math.random()*e.length)]);return t.join("")}},177:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.assignMockup=void 0,e.assignMockup=[{id:"z2m6i",title:"Tiertza",partOfCourse:"Javascript",description:"ut at dolor quis odio consequat varius integer ac leo pellentesque ultrices mattis odio donec vitae nisi nam",subDateTime:"7/14/2022",oralMark:11,totalMark:74},{id:"HtZw3",title:"Jeromy",partOfCourse:"Javascript",description:"suscipit ligula in lacus curabitur at ipsum ac tellus semper interdum mauris ullamcorper purus sit",subDateTime:"11/16/2022",oralMark:48,totalMark:69},{id:"oSfHt",title:"Kristen",partOfCourse:"Java",description:"lacus purus aliquet at feugiat non pretium quis lectus suspendisse potenti",subDateTime:"4/19/2022",oralMark:2,totalMark:74},{id:"AkbCs",title:"Prince",partOfCourse:"Python",description:"pede morbi porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed",subDateTime:"11/3/2022",oralMark:7,totalMark:80},{id:"HKcCW",title:"Archaimbaud",partOfCourse:"Python",description:"volutpat convallis morbi odio odio elementum eu interdum eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit",subDateTime:"8/11/2022",oralMark:35,totalMark:80},{id:"t4cQQ",title:"Lonnie",partOfCourse:"Python",description:"morbi non lectus aliquam sit amet diam in magna bibendum imperdiet nullam orci pede venenatis non",subDateTime:"7/13/2022",oralMark:20,totalMark:65},{id:"kbhUm",title:"Kristoforo",partOfCourse:"Java",description:"id turpis integer aliquet massa id lobortis convallis tortor risus dapibus augue vel accumsan tellus nisi eu orci mauris",subDateTime:"9/7/2022",oralMark:26,totalMark:73},{id:"AhDgQ",title:"Joycelin",partOfCourse:"C++",description:"rhoncus aliquet pulvinar sed nisl nunc rhoncus dui vel sem sed sagittis nam congue",subDateTime:"8/16/2022",oralMark:6,totalMark:70},{id:"A21jw",title:"Sullivan",partOfCourse:"Java",description:"eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi odio odio elementum eu",subDateTime:"4/18/2022",oralMark:33,totalMark:89},{id:"W035a",title:"Hilliard",partOfCourse:"C++",description:"bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt",subDateTime:"5/8/2022",oralMark:25,totalMark:70}]},843:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.courseMockup=void 0,e.courseMockup=[{id:"pTOUU",title:"Vivyan",stream:"vestibulum",type:"montes",startDate:"12/22/2021",endDate:"6/21/2022",trainers:[],students:[]},{id:"YhJnQ",title:"Bryn",stream:"sit",type:"morbi",startDate:"12/8/2022",endDate:"4/15/2022",trainers:[],students:[]},{id:"58W09",title:"Hoyt",stream:"tellus",type:"pulvinar",startDate:"7/1/2022",endDate:"9/17/2022",trainers:[],students:[]},{id:"5q9vR",title:"Darb",stream:"erat",type:"vitae",startDate:"8/30/2022",endDate:"6/12/2022",trainers:[],students:[]},{id:"Y6j9K",title:"Jephthah",stream:"amet",type:"at",startDate:"3/28/2022",endDate:"7/21/2022",trainers:[],students:[]},{id:"T4Hcf",title:"David",stream:"nisl",type:"turpis",startDate:"3/30/2022",endDate:"10/28/2022",trainers:[],students:[]},{id:"y3OQ9",title:"Cammy",stream:"hac",type:"fusce",startDate:"8/9/2022",endDate:"6/27/2022",trainers:[],students:[]},{id:"q2nDO",title:"Bendite",stream:"tellus",type:"dictumst",startDate:"1/11/2022",endDate:"9/4/2022",trainers:[],students:[]},{id:"fsz5k",title:"Jehu",stream:"augue",type:"in",startDate:"3/9/2022",endDate:"3/26/2022",trainers:[],students:[]},{id:"w8Cb2",title:"Allie",stream:"neque",type:"convallis",startDate:"12/5/2022",endDate:"4/13/2022",trainers:[],students:[]}]},726:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.studentMockup=void 0,e.studentMockup=[{id:"ZFg15",firstName:"Tillie",lastName:"McCafferky",dateOfBirth:"7/11/1997",tuitionFees:2067,assignments:[]},{id:"NtlUe",firstName:"Drusi",lastName:"Rewbottom",dateOfBirth:"6/23/1998",tuitionFees:1294,assignments:[]},{id:"Km2L6",firstName:"Warden",lastName:"Huison",dateOfBirth:"6/30/1998",tuitionFees:2282,assignments:[]},{id:"oICSG",firstName:"Crin",lastName:"Mackro",dateOfBirth:"12/19/2008",tuitionFees:2275,assignments:[]},{id:"sLIRb",firstName:"Briney",lastName:"Cicco",dateOfBirth:"7/13/2011",tuitionFees:1738,assignments:[]},{id:"VpWEp",firstName:"Eda",lastName:"Reinhardt",dateOfBirth:"6/9/1998",tuitionFees:766,assignments:[]},{id:"fl42d",firstName:"Atalanta",lastName:"Sinnie",dateOfBirth:"12/6/1994",tuitionFees:1693,assignments:[]},{id:"7gYGv",firstName:"Antonina",lastName:"Devitt",dateOfBirth:"8/27/2004",tuitionFees:789,assignments:[]},{id:"ApDJx",firstName:"Jaynell",lastName:"Goodlet",dateOfBirth:"3/1/2018",tuitionFees:2271,assignments:[]},{id:"SJc5z",firstName:"Gabriella",lastName:"Steen",dateOfBirth:"5/28/2013",tuitionFees:1264,assignments:[]}]},21:(t,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.trainerMockup=void 0,e.trainerMockup=[{id:"UxhnU",firstName:"Roberta",lastName:"Laxston",subject:"odio"},{id:"ur4zl",firstName:"Dulcy",lastName:"Pieroni",subject:"augue"},{id:"UKJwA",firstName:"Dniren",lastName:"Blowin",subject:"placerat"},{id:"ra3Mm",firstName:"Estelle",lastName:"Cowcha",subject:"porttitor"},{id:"D1LLI",firstName:"Kynthia",lastName:"Stockey",subject:"et"},{id:"1k1Xe",firstName:"Randene",lastName:"Le Moucheux",subject:"primis"},{id:"kStgK",firstName:"Ralf",lastName:"Pellamonuten",subject:"at"},{id:"UyRW2",firstName:"Shara",lastName:"Symondson",subject:"nibh"},{id:"SxHyr",firstName:"Thatcher",lastName:"Penberthy",subject:"ligula"},{id:"nweDx",firstName:"Ertha",lastName:"Snarr",subject:"eros"}]},219:(t,e,s)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.StateManagement=void 0;const i=s(603),a=s(801),r=s(726),n=s(177),o=s(843),u=s(21);e.StateManagement=class{constructor(){this.studentState=[],this.trainerState=[],this.courseState=[],this.assignmentState=[],r.studentMockup.forEach((t=>this.addNewStudent(0,"is",t))),n.assignMockup.forEach((t=>this.addNewAssignment(0,"is",t))),o.courseMockup.forEach((t=>this.addNewCourse(0,"is",t))),u.trainerMockup.forEach((t=>this.addNewTrainer(0,"is",t))),document.getElementById("studentWithAssign").addEventListener("click",(()=>this.showStudentsWithAssign())),document.getElementById("studentAssign").addEventListener("click",(()=>this.addAssignmentToStudent())),document.getElementById("courseTrainers").addEventListener("click",(()=>this.addTrainerInCourse()))}addNewTrainer(t,e,s){if(t){let s,r,n;if("isNot"===e)for(;t>0;)s=prompt("Input first name"),r=prompt("Input last name"),n=prompt("Input type of subject"),this.trainerState.push(new a.Trainer((0,i.randomId)(),s,r,n)),t--}"is"===e&&this.trainerState.push(new a.Trainer(s.id,s.firstName,s.lastName,s.subject))}assignPerCourse(t){return this.assignmentState.filter((e=>e.partOfCourse=t))}takePartOnCourseTr(){const t=prompt("In which course do you want to take part"),e=prompt("In which course do you want to take part"),s=this.courseState.find((e=>e.title===t)),i=this.trainerState.find((t=>t.firstName===e));s&&i?s.trainers.push(i):alert("Not such course or trainer")}takePartOnCourseSt(){const t=prompt("In which course do you want to take part"),e=prompt("In which course do you want to take part"),s=this.courseState.find((e=>e.title===t)),i=this.studentState.find((t=>t.firstName===e));s&&i?s.students.push(i):alert("Not such course or student")}addNewCourse(t,e,s){if(t){let s,r,n,o,u;if("isNot"===e)for(;t>0;)s=prompt("Input courses title"),r=prompt("Input steam"),n=prompt("Input type of course"),o=prompt("Input start date of course in mm/dd/yyyy"),u=prompt("Input end date of course in mm/dd/yyyy"),this.courseState.push(new a.Course((0,i.randomId)(),s,r,n,(0,i.getDate)(o),(0,i.getDate)(u),[])),t--}"is"===e&&this.courseState.push(new a.Course(s.id,s.title,s.stream,s.type,s.startDate,s.endDate))}addNewAssignment(t,e,s){if(t){let s,r,n,o;if("isNot"===e)for(;t>0;)s=prompt("Input assignment title"),r=prompt("Input assignment description"),o=prompt("Input assignment to course relation"),n=prompt("Input submission date in mm/dd/yyyy"),this.assignmentState.push(new a.Assignment((0,i.randomId)(),s,o,r,(0,i.getDate)(n),0,0)),t--}"is"===e&&this.assignmentState.push(new a.Assignment(s.id,s.title,s.partOfCourse,s.description,s.subDateTime,s.oralMark,s.totalMark))}addNewStudent(t,e,s){if(t){let s,r,n;if("isNot"===e)for(;t>0;)s=prompt("Input first name"),r=prompt("Input last name"),n=prompt("Input birth date in mm/dd/yyyy form"),this.studentState.push(new a.Student((0,i.randomId)(),s,r,(0,i.getDate)(n),0,[])),t--}"is"===e&&this.studentState.push(new a.Student(s.id,s.firstName,s.lastName,s.dateOfBirth,s.tuitionFees,[]))}addAssignmentToStudent(){const t=prompt("Give the title of the assignment"),e=prompt("Give the name of the student"),s=this.assignmentState.find((e=>e.title!==t)),i=this.studentState.find((t=>t.firstName!==e));s&&i?i.assignments.push(s):alert("No such student exists")}addTrainerInCourse(){const t=prompt("Give the title of the course"),e=prompt("Give the name of the trainer"),s=this.courseState.filter((e=>e.title===t))[0],i=this.trainerState.filter((t=>t.firstName===e))[0];s&&i?this.courseState.forEach((t=>{t.title===s.title&&(t.trainers.push({firstName:i.firstName,lastName:i.lastName}),console.log(Object.assign({},t)))})):alert("No such trainer or course exists")}showStudentsWithAssign(){console.log(this.studentState.filter((t=>t.assignments.length>0)))}}}},e={};function s(i){var a=e[i];if(void 0!==a)return a.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,s),r.exports}(()=>{const t=s(219);let e,i,a,r;class n extends t.StateManagement{constructor(){var t,s,n,o;super(),null===(t=document.getElementById("howManyTrainers"))||void 0===t||t.addEventListener("click",(()=>{r=+prompt("How many trainers do you want to add?")})),document.getElementById("add-trainers").addEventListener("click",(()=>{this.addNewTrainer(r,"isNot"),r=0})),null===(s=document.getElementById("howManyCourses"))||void 0===s||s.addEventListener("click",(()=>{a=+prompt("How many courses do you want to add?")})),document.getElementById("add-courses").addEventListener("click",(()=>{this.addNewCourse(a,"isNot"),a=0})),null===(n=document.getElementById("howManyAssignments"))||void 0===n||n.addEventListener("click",(()=>{i=+prompt("How many assignments do you want to add?")})),document.getElementById("add-assignment").addEventListener("click",(()=>{this.addNewAssignment(i,"isNot"),i=0})),null===(o=document.getElementById("howManyStudents"))||void 0===o||o.addEventListener("click",(()=>{e=+prompt("How many students do you want to add?")})),document.getElementById("add-students").addEventListener("click",(()=>{this.addNewStudent(e,"isNot"),e=0})),document.getElementById("studentState").addEventListener("click",(()=>console.log("Students",this.studentState))),document.getElementById("trainerState").addEventListener("click",(()=>console.log("Trainer",this.trainerState))),document.getElementById("courseState").addEventListener("click",(()=>console.log("Courses",this.courseState))),document.getElementById("assignmentState").addEventListener("click",(()=>console.log("Assignments",this.assignmentState)))}static getInstance(){return this.instance||(this.instance=new n),this.instance}}n.getInstance()})()})();