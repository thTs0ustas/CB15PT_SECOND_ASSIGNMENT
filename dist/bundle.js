/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/classes/assingments.ts":
/*!************************************!*\
  !*** ./src/classes/assingments.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Assignment\": () => (/* binding */ Assignment)\n/* harmony export */ });\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar Assignments = /** @class */ (function () {\r\n    function Assignments(title, description, subDateTime, oralMark, totalMark) {\r\n        if (oralMark === void 0) { oralMark = 0; }\r\n        if (totalMark === void 0) { totalMark = 0; }\r\n        this.title = title;\r\n        this.description = description;\r\n        this.subDateTime = subDateTime;\r\n        this.oralMark = oralMark;\r\n        this.totalMark = totalMark;\r\n    }\r\n    // getters and setters\r\n    Assignments.prototype.getTitle = function () {\r\n        return \"Assignment's title: \".concat(this.title);\r\n    };\r\n    Assignments.prototype.setTitle = function (newTitle) {\r\n        this.title = newTitle;\r\n    };\r\n    Assignments.prototype.getDescription = function () {\r\n        return \"Assignment's description: \".concat(this.description);\r\n    };\r\n    Assignments.prototype.setDescription = function (newDesc) {\r\n        this.description = newDesc;\r\n    };\r\n    Assignments.prototype.getSubDate = function () {\r\n        return \"Assignment's submission date: \".concat(this.description);\r\n    };\r\n    Assignments.prototype.setSubDate = function (newSubDate) {\r\n        this.subDateTime = newSubDate;\r\n    };\r\n    Assignments.prototype.getOralMark = function () {\r\n        return this.oralMark;\r\n    };\r\n    Assignments.prototype.setOralMark = function (updatedOralMark) {\r\n        this.oralMark = updatedOralMark;\r\n    };\r\n    Assignments.prototype.getTotalMark = function () {\r\n        return this.totalMark;\r\n    };\r\n    Assignments.prototype.setTotalMark = function (updatedtotalMark) {\r\n        this.totalMark = updatedtotalMark;\r\n    };\r\n    return Assignments;\r\n}());\r\nvar Assignment = /** @class */ (function (_super) {\r\n    __extends(Assignment, _super);\r\n    function Assignment(title, description, subDateTime) {\r\n        return _super.call(this, title, description, subDateTime) || this;\r\n    }\r\n    return Assignment;\r\n}(Assignments));\r\n\r\n\n\n//# sourceURL=webpack://cb15pt_second_assignment/./src/classes/assingments.ts?");

/***/ }),

/***/ "./src/classes/courses.ts":
/*!********************************!*\
  !*** ./src/classes/courses.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Course\": () => (/* binding */ Course)\n/* harmony export */ });\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar Courses = /** @class */ (function () {\r\n    function Courses(title, stream, type, startDate, endDate) {\r\n        this.title = title;\r\n        this.stream = stream;\r\n        this.type = type;\r\n        this.startDate = startDate;\r\n        this.endDate = endDate;\r\n    }\r\n    return Courses;\r\n}());\r\nvar Course = /** @class */ (function (_super) {\r\n    __extends(Course, _super);\r\n    function Course(title, stream, type, startDate, endDate, trainers) {\r\n        var _this = _super.call(this, title, stream, type, startDate, endDate) || this;\r\n        _this.trainers = trainers;\r\n        return _this;\r\n    }\r\n    return Course;\r\n}(Courses));\r\n\r\n\n\n//# sourceURL=webpack://cb15pt_second_assignment/./src/classes/courses.ts?");

/***/ }),

/***/ "./src/classes/students.ts":
/*!*********************************!*\
  !*** ./src/classes/students.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Student\": () => (/* binding */ Student)\n/* harmony export */ });\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar Students = /** @class */ (function () {\r\n    function Students(firstName, lastName, dateOfBirth, tuitionFees) {\r\n        this.firstName = firstName;\r\n        this.lastName = lastName;\r\n        this.dateOfBirth = dateOfBirth;\r\n        this.tuitionFees = tuitionFees;\r\n    }\r\n    Object.defineProperty(Students.prototype, \"getFirstName\", {\r\n        get: function () {\r\n            return this.firstName;\r\n        },\r\n        set: function (value) {\r\n            this.firstName = value;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Students.prototype, \"getLastName\", {\r\n        get: function () {\r\n            return this.lastName;\r\n        },\r\n        set: function (value) {\r\n            this.lastName = value;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Students.prototype, \"getDateOfBirth\", {\r\n        get: function () {\r\n            return this.dateOfBirth;\r\n        },\r\n        set: function (value) {\r\n            this.dateOfBirth = value;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Students.prototype, \"getFees\", {\r\n        get: function () {\r\n            return this.tuitionFees;\r\n        },\r\n        set: function (value) {\r\n            this.tuitionFees = value;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    return Students;\r\n}());\r\nvar Student = /** @class */ (function (_super) {\r\n    __extends(Student, _super);\r\n    function Student(firstName, lastName, dateOfBirth, tuitionFees, assignments) {\r\n        var _this = _super.call(this, firstName, lastName, dateOfBirth, tuitionFees) || this;\r\n        _this.assignments = assignments;\r\n        return _this;\r\n    }\r\n    Student.prototype.addAssignment = function (assignmentsArray, title) {\r\n        var element = assignmentsArray.find(function (item) { return item.title !== title; });\r\n        return element\r\n            ? this.assignments.push(element)\r\n            : alert(\"No such assignment exists\");\r\n    };\r\n    Student.prototype.howManyAssignments = function () {\r\n        return this.assignments.length;\r\n    };\r\n    Student.prototype.getOralMark = function (title) {\r\n        var _a;\r\n        return (_a = this.assignments.find(function (assignment) { return assignment.title !== title; })) === null || _a === void 0 ? void 0 : _a.oralMark;\r\n    };\r\n    Student.prototype.setOralMark = function (title, value) {\r\n        this.assignments.forEach(function (assignment) {\r\n            if (assignment.title === title) {\r\n                assignment.oralMark = value;\r\n            }\r\n        });\r\n    };\r\n    Student.prototype.getTotalMark = function (title) {\r\n        var _a;\r\n        return (_a = this.assignments.find(function (assignment) { return assignment.title !== title; })) === null || _a === void 0 ? void 0 : _a.totalMark;\r\n    };\r\n    Student.prototype.setTotalMark = function (title, value) {\r\n        this.assignments.forEach(function (assignment) {\r\n            if (assignment.title === title) {\r\n                assignment.totalMark = value;\r\n            }\r\n        });\r\n    };\r\n    return Student;\r\n}(Students));\r\n\r\n\n\n//# sourceURL=webpack://cb15pt_second_assignment/./src/classes/students.ts?");

/***/ }),

/***/ "./src/classes/trainers.ts":
/*!*********************************!*\
  !*** ./src/classes/trainers.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Trainer\": () => (/* binding */ Trainer)\n/* harmony export */ });\n/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/state */ \"./src/state/state.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\n\r\nvar Trainers = /** @class */ (function () {\r\n    function Trainers(firstName, lastName, subject) {\r\n        this.firstName = firstName;\r\n        this.lastName = lastName;\r\n        this.subject = subject;\r\n    }\r\n    Object.defineProperty(Trainers.prototype, \"getFirstName\", {\r\n        get: function () {\r\n            return this.firstName;\r\n        },\r\n        set: function (newName) {\r\n            this.firstName = newName;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    Object.defineProperty(Trainers.prototype, \"getLastName\", {\r\n        get: function () {\r\n            return this.lastName;\r\n        },\r\n        set: function (newName) {\r\n            this.lastName = newName;\r\n        },\r\n        enumerable: false,\r\n        configurable: true\r\n    });\r\n    return Trainers;\r\n}());\r\nvar Trainer = /** @class */ (function (_super) {\r\n    __extends(Trainer, _super);\r\n    function Trainer(firstName, lastName, subject) {\r\n        return _super.call(this, firstName, lastName, subject) || this;\r\n    }\r\n    Trainer.prototype.takePartOnCourse = function (title) {\r\n        var _this = this;\r\n        _state_state__WEBPACK_IMPORTED_MODULE_0__.courseState.forEach(function (course) {\r\n            course.title !== title;\r\n            course.trainers.push({\r\n                firstName: _this.firstName,\r\n                lastName: _this.lastName,\r\n            });\r\n        });\r\n    };\r\n    return Trainer;\r\n}(Trainers));\r\n\r\n\n\n//# sourceURL=webpack://cb15pt_second_assignment/./src/classes/trainers.ts?");

/***/ }),

/***/ "./src/funtionsForState/startWithAssignments.ts":
/*!******************************************************!*\
  !*** ./src/funtionsForState/startWithAssignments.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startAddingAssignments\": () => (/* binding */ startAddingAssignments)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.ts\");\n/* harmony import */ var _classes_assingments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/assingments */ \"./src/classes/assingments.ts\");\n/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/state */ \"./src/state/state.ts\");\n\r\n\r\n\r\nvar startAddingAssignments = function (howManyTimes) {\r\n    alert(howManyTimes);\r\n    while (howManyTimes > 0) {\r\n        if (howManyTimes === 0)\r\n            return;\r\n        var title = prompt(\"Input assignment title\");\r\n        var description = prompt(\"Input assignment description\");\r\n        var submissionDate = prompt(\"Input tsubmission date in mm/dd/yyyy\");\r\n        var assignment = new _classes_assingments__WEBPACK_IMPORTED_MODULE_1__.Assignment(title, description, (0,___WEBPACK_IMPORTED_MODULE_0__.getDate)(submissionDate));\r\n        _state_state__WEBPACK_IMPORTED_MODULE_2__.assignmentState.push(assignment);\r\n        howManyTimes--;\r\n    }\r\n    document.getElementsByClassName(\"assignmentState\")[0].innerHTML =\r\n        _state_state__WEBPACK_IMPORTED_MODULE_2__.assignmentState.map(function (assignment) { /*HTML*/ return \"\\n      <div>\\n        <p>Title: \".concat(assignment.title, \"</p>\\n        <p>Decriptions: \").concat(assignment.description, \"</p>\\n        <p>Submission date: \").concat(assignment.subDateTime, \"</p>\\n      </div>\\n      <hr/> \\n      \"); })\r\n            .join(\"\");\r\n};\r\n\n\n//# sourceURL=webpack://cb15pt_second_assignment/./src/funtionsForState/startWithAssignments.ts?");

/***/ }),

/***/ "./src/funtionsForState/startWithCourses.ts":
/*!**************************************************!*\
  !*** ./src/funtionsForState/startWithCourses.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startAddingCourses\": () => (/* binding */ startAddingCourses)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.ts\");\n/* harmony import */ var _classes_courses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/courses */ \"./src/classes/courses.ts\");\n/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/state */ \"./src/state/state.ts\");\n\r\n\r\n\r\nvar startAddingCourses = function (howManyTimes) {\r\n    while (howManyTimes > 0) {\r\n        if (howManyTimes === 0)\r\n            return;\r\n        var title = prompt(\"Input courses title\");\r\n        var steam = prompt(\"Input steam\");\r\n        var type = prompt(\"Input type of course\");\r\n        var startDate = prompt(\"Input start date of course in mm/dd/yyyy\");\r\n        var endDate = prompt(\"Input end date of course in mm/dd/yyyy\");\r\n        var course = new _classes_courses__WEBPACK_IMPORTED_MODULE_1__.Course(title, steam, type, (0,___WEBPACK_IMPORTED_MODULE_0__.getDate)(startDate), (0,___WEBPACK_IMPORTED_MODULE_0__.getDate)(endDate), []);\r\n        _state_state__WEBPACK_IMPORTED_MODULE_2__.courseState.push(course);\r\n        howManyTimes--;\r\n    }\r\n    document.getElementsByClassName(\"courseState\")[0].innerHTML = _state_state__WEBPACK_IMPORTED_MODULE_2__.courseState.map(function (course) { /*HTML*/ return \"\\n      <div>\\n        <p>Title: \".concat(course.title, \"</p>\\n        <p>Stream: \").concat(course.stream, \"</p>\\n        <p>Type: \").concat(course.type, \"</p>\\n        <p>Start Date: \").concat(course.startDate, \"</p>\\n        <p>End Date: \").concat(course.endDate, \"</p>\\n        <ul>\\n        \").concat(course.trainers.map(function (trainer) {\r\n        return \"<li>Trainer:\".concat(trainer.firstName, \" \").concat(trainer.lastName, \"</li>\");\r\n    }), \"\\n        </ul>\\n      </div>\\n      <hr/> \\n      \"); })\r\n        .join(\"\");\r\n};\r\n\n\n//# sourceURL=webpack://cb15pt_second_assignment/./src/funtionsForState/startWithCourses.ts?");

/***/ }),

/***/ "./src/funtionsForState/startWithStudents.ts":
/*!***************************************************!*\
  !*** ./src/funtionsForState/startWithStudents.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startAddingStudents\": () => (/* binding */ startAddingStudents)\n/* harmony export */ });\n/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .. */ \"./src/index.ts\");\n/* harmony import */ var _classes_students__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../classes/students */ \"./src/classes/students.ts\");\n/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state/state */ \"./src/state/state.ts\");\n\r\n\r\n\r\nvar startAddingStudents = function (howManyTimes) {\r\n    alert(howManyTimes);\r\n    while (howManyTimes > 0) {\r\n        if (howManyTimes === 0)\r\n            return;\r\n        var fName = prompt(\"Input first name\");\r\n        var lName = prompt(\"Input last name\");\r\n        var date = prompt(\"Input birth date in mm/dd/yyyy form\");\r\n        var student = new _classes_students__WEBPACK_IMPORTED_MODULE_1__.Student(fName, lName, (0,___WEBPACK_IMPORTED_MODULE_0__.getDate)(date), 0, []);\r\n        _state_state__WEBPACK_IMPORTED_MODULE_2__.studentState.push(student);\r\n        howManyTimes--;\r\n    }\r\n    console.log(_state_state__WEBPACK_IMPORTED_MODULE_2__.studentState);\r\n    document.getElementsByClassName(\"studentState\")[0].innerHTML = _state_state__WEBPACK_IMPORTED_MODULE_2__.studentState.map(function (student) {\r\n        return /*HTML*/ \"\\n      <div>\\n      <p>First name: \".concat(student.firstName, \"</p>\\n      <p>Last name: \").concat(student.lastName, \"</p>\\n      <p>Date of birth: \").concat(student.dateOfBirth, \"</p>\\n      <p>Tuitio fees: \").concat(student.tuitionFees, \"</p>\\n      </div>\\n      <hr/>\\n      \");\r\n    })\r\n        .join(\"\");\r\n};\r\n\n\n//# sourceURL=webpack://cb15pt_second_assignment/./src/funtionsForState/startWithStudents.ts?");

/***/ }),

/***/ "./src/funtionsForState/startWithTrainers.ts":
/*!***************************************************!*\
  !*** ./src/funtionsForState/startWithTrainers.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"startAddingTrainers\": () => (/* binding */ startAddingTrainers)\n/* harmony export */ });\n/* harmony import */ var _classes_trainers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes/trainers */ \"./src/classes/trainers.ts\");\n/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/state */ \"./src/state/state.ts\");\n\r\n\r\nvar startAddingTrainers = function (howManyTimes) {\r\n    while (howManyTimes > 0) {\r\n        if (howManyTimes === 0)\r\n            return;\r\n        var fName = prompt(\"Input first name\");\r\n        var lName = prompt(\"Input last name\");\r\n        var subject = prompt(\"Input type of subject\");\r\n        var trainer = new _classes_trainers__WEBPACK_IMPORTED_MODULE_0__.Trainer(fName, lName, subject);\r\n        _state_state__WEBPACK_IMPORTED_MODULE_1__.trainerState.push(trainer);\r\n        howManyTimes--;\r\n    }\r\n    document.getElementsByClassName(\"trainerState\")[0].innerHTML = /*HTML*/ \"<div>\\n  \".concat(_state_state__WEBPACK_IMPORTED_MODULE_1__.trainerState.map(function (trainer) { /*HTML*/ return \"\\n      <div>\\n      <p>First name: \".concat(trainer.firstName, \"</p>\\n      <p>Last name: \").concat(trainer.lastName, \"</p>\\n      <p>Subject: \").concat(trainer.subject, \"</p>\\n      </div>\\n      \"); })\r\n        .join(\"\"), \"\\n      <hr/> \\n      </div>\");\r\n};\r\n\n\n//# sourceURL=webpack://cb15pt_second_assignment/./src/funtionsForState/startWithTrainers.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getDate\": () => (/* binding */ getDate)\n/* harmony export */ });\n/* harmony import */ var _funtionsForState_startWithAssignments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./funtionsForState/startWithAssignments */ \"./src/funtionsForState/startWithAssignments.ts\");\n/* harmony import */ var _funtionsForState_startWithCourses__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./funtionsForState/startWithCourses */ \"./src/funtionsForState/startWithCourses.ts\");\n/* harmony import */ var _funtionsForState_startWithStudents__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./funtionsForState/startWithStudents */ \"./src/funtionsForState/startWithStudents.ts\");\n/* harmony import */ var _funtionsForState_startWithTrainers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./funtionsForState/startWithTrainers */ \"./src/funtionsForState/startWithTrainers.ts\");\nvar _a, _b, _c, _d;\r\n\r\n\r\n\r\n\r\nvar getDate = function (date) {\r\n    return new Date(date).toISOString().split(\"T\")[0];\r\n};\r\nvar howManyTimesToAddStudents;\r\nvar howManyTimesToAddTrainers;\r\nvar howManyTimesToAddCourses;\r\nvar howManyTimesToAddAssignments;\r\n(_a = document.getElementById(\"howManyStudents\")) === null || _a === void 0 ? void 0 : _a.addEventListener(\"click\", function () {\r\n    howManyTimesToAddStudents = +prompt(\"How many students do you want to add?\");\r\n});\r\n(_b = document.getElementById(\"howManyTrainers\")) === null || _b === void 0 ? void 0 : _b.addEventListener(\"click\", function () {\r\n    howManyTimesToAddTrainers = +prompt(\"How many trainers do you want to add?\");\r\n});\r\n(_c = document.getElementById(\"howManyCourses\")) === null || _c === void 0 ? void 0 : _c.addEventListener(\"click\", function () {\r\n    howManyTimesToAddCourses = +prompt(\"How many courses do you want to add?\");\r\n});\r\n(_d = document.getElementById(\"howManyAssignments\")) === null || _d === void 0 ? void 0 : _d.addEventListener(\"click\", function () {\r\n    howManyTimesToAddAssignments = +prompt(\"How many assignments do you want to add?\");\r\n});\r\ndocument\r\n    .getElementsByClassName(\"add-students\")[0]\r\n    .addEventListener(\"click\", function () {\r\n    return (0,_funtionsForState_startWithStudents__WEBPACK_IMPORTED_MODULE_2__.startAddingStudents)(howManyTimesToAddStudents);\r\n});\r\ndocument\r\n    .getElementsByClassName(\"add-trainers\")[0]\r\n    .addEventListener(\"click\", function () {\r\n    return (0,_funtionsForState_startWithTrainers__WEBPACK_IMPORTED_MODULE_3__.startAddingTrainers)(howManyTimesToAddTrainers);\r\n});\r\ndocument\r\n    .getElementsByClassName(\"add-assignment\")[0]\r\n    .addEventListener(\"click\", function () {\r\n    return (0,_funtionsForState_startWithAssignments__WEBPACK_IMPORTED_MODULE_0__.startAddingAssignments)(howManyTimesToAddAssignments);\r\n});\r\ndocument\r\n    .getElementsByClassName(\"add-courses\")[0]\r\n    .addEventListener(\"click\", function () {\r\n    return (0,_funtionsForState_startWithCourses__WEBPACK_IMPORTED_MODULE_1__.startAddingCourses)(howManyTimesToAddCourses);\r\n});\r\n//\r\n\n\n//# sourceURL=webpack://cb15pt_second_assignment/./src/index.ts?");

/***/ }),

/***/ "./src/state/state.ts":
/*!****************************!*\
  !*** ./src/state/state.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"studentState\": () => (/* binding */ studentState),\n/* harmony export */   \"trainerState\": () => (/* binding */ trainerState),\n/* harmony export */   \"assignmentState\": () => (/* binding */ assignmentState),\n/* harmony export */   \"courseState\": () => (/* binding */ courseState)\n/* harmony export */ });\nvar studentState = [];\r\nvar trainerState = [];\r\nvar assignmentState = [];\r\nvar courseState = [];\r\n\r\n\n\n//# sourceURL=webpack://cb15pt_second_assignment/./src/state/state.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;