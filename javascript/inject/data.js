/**
 * Creates a new data section - an element to display data about a professor from a certain source.
 * Just creating the object will not put it onto the page. To do that, you must add `dataSection.elements.main`
 * to the page.
 *
 * @constructor
 * @param {string} title The title to use to identify the section.
 * @param {string} id The unique id used for this section. Must be a valid CSS ID.
 * @param {{label, dataField}[]} fields An array of ojects with the format {label, dataField} where label
 * is the text to use on the `page` and `dataField` is the key that will hold the relevant data in `this.data`
 */
function DataSection(title, id, fields, noDataMsg, errorHandler) {
    //Object of most recently fetched data for this section
    this.data = null;
    //URL the user can click to see the most recently fetched data from the original source
    this.url = null;
    //Cache of all previously requested data with the key being "<subjectCode><courseCode> <fullname>"
    this.cache = {};
    //The current course being parsed. To prevent race conditions hopefully
    this.currentCourse = '';
    // The message to show when there is no data to display.
    this.noDataMsg = noDataMsg;

    this.errorHandler = errorHandler;

    //Object of elements relevant to this section
    this.elements = {};

    this.title = title;
    this.id = id;
    this.fields = fields;

    this.createElements();
}
