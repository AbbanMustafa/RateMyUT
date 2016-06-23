
$(document).ready(function () {
    // If this is the start page and not the actual webreg then stop the extension.
    if (window.location.href === 'https://login.utexas.edu/login/cdcservlet?goto=https%3A%2F%2Futdirect.utexas.edu%3A443%2Fregistration%2FchooseSemester.WBX&RequestID=1156493852&MajorVersion=1&MinorVersion=0&ProviderID=https%3A%2F%2Futdirect.utexas.edu%3A443%2Famagent%3FRealm%3D%2Fadmin%2Futdirect-realm&IssueInstant=2016-06-19T23%3A49%3A31Z') {
        return;
    }

    var plannerHelper = new PlannerHelper();
});
