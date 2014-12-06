/**
 * 
 * @author jskonst
 */
function BaseForm() {
    var self = this, model = this.model, form = this;
    
    // TODO : place your code here
    
    form.btnStudents.onActionPerformed = function(event) {
        var studForm = new Students();
        studForm.show();
    };
    form.button1.onActionPerformed = function(event) {
        var facultyForm = new Faculty();
        facultyForm.show();
    };


}
