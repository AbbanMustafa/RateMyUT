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
