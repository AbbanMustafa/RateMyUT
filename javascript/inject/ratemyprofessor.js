function RMP(errorHandler) {
    DataSection.call(this, 'Rate My Professor', 'rmp', [
        {label: 'Overall Quality', dataField: 'overallQuality'},
        {label: 'Helpfulness', dataField: 'helpfulness'},
        {label: 'Clarity', dataField: 'clarity'},
        {label: 'Easiness', dataField: 'easiness'}
    ], 'Rate My Professor does not contain an entry for this professor.', errorHandler);

    //This is for teachers who have a different name on the class planner and RMP
    //When fetching data it will look if the teacher matches oldFName and oldLname and if they do
    //It will replace them with newFName and newLName


    RATEMYPROFESSOR.prototype = Object.create(DataSection.prototype);
    RATEMYPROFESSOR.prototype.constructor = RATEMYPROFESSOR;

    /**
     * Checks if the teacher name is in `this.teacherReplace` and if so fixes their name.
     * @param teacher The Teacher name object. Will be modified.
     * @private
     */
    RATEMYPROFESSOR.prototype.checkTeacher = function (teacher) {
        this.teacherReplace.forEach(function (teacherCheck) {
            if (teacher.fname === teacherCheck.oldFName && teacher.lname === teacherCheck.oldLName) {
                teacher.fname = teacherCheck.newFName;
                teacher.lname = teacherCheck.newLName;
                return false; //Causes forEach to break
            }
            return true;
        });
    };
